/**
 * Testar översättningsfunktionens logik utan webbläsare:
 *
 *  · språklistan (sju språk, arabiska från höger till vänster, sparat val)
 *  · klienten (rätt svar, och tydliga felkoder i stället för påhittade svar)
 *  · serverfunktionen (validering, anropet till DeepL, felmappning)
 *  · en säkerhetskontroll: ingen nyckelhantering i frontend-koden
 *
 * Körs med `npm test`. Modulerna byggs tillfälligt med esbuild, precis som
 * render-smoketestet gör.
 */
import { build } from 'esbuild'
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const outDir = await mkdtemp(join(tmpdir(), 'citizense-translate-'))

const failures = []
let checked = 0

function check(name, condition, detail = '') {
  checked += 1
  if (!condition) failures.push(detail ? `${name} — ${detail}` : name)
}

function equal(name, actual, expected) {
  check(
    name,
    actual === expected,
    `förväntade ${JSON.stringify(expected)}, fick ${JSON.stringify(actual)}`,
  )
}

async function bundle(entry, name) {
  const outfile = join(outDir, name)
  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'warning',
  })
  return import(pathToFileURL(outfile).href)
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })

try {
  const languages = await bundle('src/translation/languages.ts', 'languages.mjs')
  const client = await bundle('src/translation/client.ts', 'client.mjs')
  const server = await bundle('server/translate.ts', 'server.mjs')

  /* --- Språklistan -------------------------------------------------- */

  const ids = languages.TARGET_LANGUAGES.map((language) => language.id)
  equal('sju målspråk', ids.length, 7)
  for (const expected of ['en', 'ar', 'zh', 'fi', 'tr', 'uk', 'ru']) {
    check(`språket "${expected}" finns`, ids.includes(expected))
  }
  check('unika språk-id:n', new Set(ids).size === ids.length)
  equal(
    'arabiska visas från höger till vänster',
    languages.getTargetLanguage('ar').direction,
    'rtl',
  )
  equal('övriga språk är vänsterställda', languages.getTargetLanguage('ru').direction, 'ltr')
  equal('engelska är standard', languages.DEFAULT_TARGET_LANGUAGE, 'en')

  /* --- Sparat språkval --------------------------------------------- */

  const store = new Map()
  globalThis.window = {
    localStorage: {
      getItem: (key) => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, String(value)),
    },
  }
  languages.persistTargetLanguage('uk')
  equal('valet sparas', store.get(languages.TRANSLATION_STORAGE_KEY), 'uk')
  equal('valet läses tillbaka nästa gång', languages.readStoredTargetLanguage(), 'uk')
  store.set(languages.TRANSLATION_STORAGE_KEY, 'klingon')
  equal('ogiltigt sparat värde faller tillbaka', languages.readStoredTargetLanguage(), 'en')
  delete globalThis.window
  equal('standard utan webbläsare', languages.readStoredTargetLanguage(), 'en')

  /* --- Klienten ----------------------------------------------------- */

  const ok = await client.translateText(
    { text: 'Riksdagen', target: 'en' },
    { fetchImpl: async () => json({ source: 'Riksdagen', translation: 'the Riksdag', target: 'en' }) },
  )
  equal('klienten läser översättningen', ok.translation, 'the Riksdag')
  equal('klienten behåller källtexten', ok.source, 'Riksdagen')

  async function expectCode(name, response, expectedCode) {
    try {
      await client.translateText({ text: 'ord', target: 'en' }, { fetchImpl: async () => response })
      check(name, false, 'kastade inget fel')
    } catch (error) {
      check(
        name,
        error instanceof client.TranslateError && error.code === expectedCode,
        `felkod ${error && error.code}`,
      )
    }
  }

  await expectCode('503 → not-configured', json({ error: 'not-configured' }, 503), 'not-configured')
  await expectCode('429 → busy', json({ error: 'busy' }, 429), 'busy')
  await expectCode('502 → unavailable', json({ error: 'unavailable' }, 502), 'unavailable')
  await expectCode('tom översättning → unavailable', json({ translation: '' }), 'unavailable')
  await expectCode('fel utan kod → unavailable vid 5xx', new Response('', { status: 500 }), 'unavailable')

  try {
    await client.translateText(
      { text: 'ord', target: 'en' },
      {
        fetchImpl: async () => {
          throw new TypeError('fetch failed')
        },
      },
    )
    check('nätverksfel → network', false, 'kastade inget fel')
  } catch (error) {
    check('nätverksfel → network', error instanceof client.TranslateError && error.code === 'network')
  }

  /* --- Serverfunktionen -------------------------------------------- */

  const post = (body) =>
    new Request('http://localhost/api/translate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

  const notConfigured = await server.handleTranslateRequest(
    post({ text: 'ord', target: 'en' }),
    {},
  )
  equal('saknad nyckel ger 503', notConfigured.status, 503)
  equal('saknad nyckel ger rätt felkod', (await notConfigured.json()).error, 'not-configured')

  const wrongMethod = await server.handleTranslateRequest(
    new Request('http://localhost/api/translate', { method: 'GET' }),
    { DEEPL_API_KEY: 'k' },
  )
  equal('GET avvisas med 405', wrongMethod.status, 405)

  const badTarget = await server.handleTranslateRequest(
    post({ text: 'ord', target: 'xx' }),
    { DEEPL_API_KEY: 'k' },
  )
  equal('okänt målspråk ger 400', badTarget.status, 400)

  const tooLong = await server.handleTranslateRequest(
    post({ text: 'a'.repeat(server.MAX_TEXT_LENGTH + 1), target: 'en' }),
    { DEEPL_API_KEY: 'k' },
  )
  equal('för lång text ger 400', tooLong.status, 400)

  // Fånga upp vad som faktiskt skickas till tjänsten.
  async function capture(target, context) {
    let captured = null
    await server.handleTranslateRequest(
      post({ text: 'Riksdagen', target, context }),
      { DEEPL_API_KEY: 'hemlig' },
      async (url, init) => {
        captured = { url, init }
        return json({ translations: [{ text: 'översatt' }] })
      },
    )
    return { url: captured.url, headers: captured.init.headers, body: JSON.parse(captured.init.body) }
  }

  const enCall = await capture('en', 'Riksdagen är Sveriges riksdag.')
  check('anropet går till DeepL', String(enCall.url).includes('api-free.deepl.com'))
  equal('källspråket är svenska', enCall.body.source_lang, 'SV')
  equal('engelsk kod är EN', enCall.body.target_lang, 'EN')
  equal('en text skickas', enCall.body.text.length, 1)
  equal('texten är oförändrad', enCall.body.text[0], 'Riksdagen')
  check(
    'sammanhanget skickas med',
    typeof enCall.body.context === 'string' && enCall.body.context.includes('Riksdagen'),
  )
  check(
    'sammanhanget har en svensk ledtråd om medborgarskap',
    typeof enCall.body.context === 'string' && enCall.body.context.includes('medborgarskap'),
  )
  equal('nyckeln skickas i Authorization', enCall.headers.authorization, 'DeepL-Auth-Key hemlig')

  const deeplCodes = { ar: 'AR', zh: 'ZH', fi: 'FI', tr: 'TR', uk: 'UK', ru: 'RU' }
  for (const [id, code] of Object.entries(deeplCodes)) {
    equal(`språkkoden för ${id}`, (await capture(id)).body.target_lang, code)
  }

  const successful = await server.handleTranslateRequest(
    post({ text: 'Riksdagen', target: 'en' }),
    { DEEPL_API_KEY: 'k' },
    async () => json({ translations: [{ detected_source_language: 'SV', text: 'the Riksdag' }] }),
  )
  equal('lyckat anrop ger 200', successful.status, 200)
  const successfulBody = await successful.json()
  equal('svar innehåller översättningen', successfulBody.translation, 'the Riksdag')
  equal('svar innehåller källtexten', successfulBody.source, 'Riksdagen')

  const busy = await server.handleTranslateRequest(post({ text: 'ord', target: 'en' }), { DEEPL_API_KEY: 'k' }, async () => new Response('', { status: 429 }))
  equal('DeepL 429 blir 429 (busy)', busy.status, 429)
  const quota = await server.handleTranslateRequest(post({ text: 'ord', target: 'en' }), { DEEPL_API_KEY: 'k' }, async () => new Response('', { status: 456 }))
  equal('DeepL 456 (kvot slut) blir 429 (busy)', quota.status, 429)
  const down = await server.handleTranslateRequest(post({ text: 'ord', target: 'en' }), { DEEPL_API_KEY: 'k' }, async () => new Response('nope', { status: 500 }))
  equal('DeepL 500 blir 502', down.status, 502)
  const empty = await server.handleTranslateRequest(post({ text: 'ord', target: 'en' }), { DEEPL_API_KEY: 'k' }, async () => json({ translations: [] }))
  equal('tomt svar från DeepL blir 502', empty.status, 502)
  const network = await server.handleTranslateRequest(
    post({ text: 'ord', target: 'en' }),
    { DEEPL_API_KEY: 'k' },
    async () => {
      throw new Error('boom')
    },
  )
  equal('nätverksfel mot DeepL blir 502', network.status, 502)

  /* --- Säkerhet: ingen nyckel i frontend ---------------------------- */

  const forbidden = /DEEPL_API_KEY|DeepL-Auth-Key|api\.deepl\.com|api-free\.deepl\.com/

  async function scan(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    const offenders = []
    for (const entry of entries) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) offenders.push(...(await scan(full)))
      else if (entry.isFile()) {
        const content = await readFile(full, 'utf8')
        if (forbidden.test(content)) offenders.push(full)
      }
    }
    return offenders
  }

  const offenders = await scan('src')
  check(
    'ingen nyckel eller tjänstadress i frontend-koden',
    offenders.length === 0,
    offenders.join(', '),
  )
  const clientSource = await readFile('src/translation/client.ts', 'utf8')
  check('klienten använder serverfunktionens adress', clientSource.includes('/api/translate'))

  console.log(`Översättningstest: ${checked} kontroller`)
  if (failures.length === 0) {
    console.log('Alla kontroller lyckades.')
    process.exit(0)
  }
  console.error(`\n${failures.length} problem:`)
  for (const failure of failures) console.error(` · ${failure}`)
  process.exit(1)
} finally {
  await rm(outDir, { recursive: true, force: true })
}
