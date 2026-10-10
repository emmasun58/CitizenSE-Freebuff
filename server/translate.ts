/**
 * Serverfunktion för översättning.
 *
 * Här – och bara här – används API-nyckeln. Frontend anropar den här
 * funktionen på `/api/translate` och får tillbaka en översättning. Nyckeln
 * läses från miljövariabeln `DEEPL_API_KEY` och lämnar aldrig servern.
 *
 * Koden är skriven mot standard-API:erna `Request`/`Response`, så samma
 * funktion kan köras i Vite:s utvecklingsserver (se vite-translate-plugin.ts),
 * som en Cloudflare Pages-funktion (functions/api/translate.ts) eller i vilken
 * annan runtime som helst som stöder fetch.
 *
 * Tjänst: DeepL. `context` skickas med eftersom DeepL använder den för att
 * tolka korta ord och meningar rätt – den räknas inte mot kvoten.
 */

export type TranslateTargetLanguage = 'en' | 'ar' | 'zh' | 'fi' | 'tr' | 'uk' | 'ru'

/** Alla språk som funktionen tar emot. Samma id:n som i frontend. */
export const SUPPORTED_TARGET_LANGUAGES: readonly TranslateTargetLanguage[] = [
  'en',
  'ar',
  'zh',
  'fi',
  'tr',
  'uk',
  'ru',
]

/** Översätter våra id:n till DeepL:s språkkoder. */
const DEEPL_TARGET_LANGUAGE: Record<TranslateTargetLanguage, string> = {
  en: 'EN',
  ar: 'AR',
  zh: 'ZH',
  fi: 'FI',
  tr: 'TR',
  uk: 'UK',
  ru: 'RU',
}

export interface TranslateEnv {
  /** DeepL-nyckeln. Sätts som hemlighet på servern – aldrig i frontend. */
  DEEPL_API_KEY?: string
  /** Endast för tester eller egen drift. Standard är DeepL:s kostnadsfria API. */
  DEEPL_API_URL?: string
}

export type TranslateErrorCode = 'not-configured' | 'invalid' | 'busy' | 'unavailable'

/** Kort text och en (1) mening. Skyddar både kvoten och tjänsten. */
export const MAX_TEXT_LENGTH = 300
export const MAX_CONTEXT_LENGTH = 900

/** Liten, svensk ledtråd om sammanhanget, så att korta ord hamnar rätt. */
const DOMAIN_HINT =
  'Texten är studiematerial om det svenska samhället och medborgarskap (Sverige i fokus).'

interface TranslateRequestBody {
  text?: unknown
  target?: unknown
  context?: unknown
}

export function isSupportedTargetLanguage(value: unknown): value is TranslateTargetLanguage {
  return (
    typeof value === 'string' &&
    (SUPPORTED_TARGET_LANGUAGES as readonly string[]).includes(value)
  )
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Översättningar är färskvara och får inte cachas av mellanhänder.
      'cache-control': 'no-store',
    },
  })
}

function errorResponse(code: TranslateErrorCode, message: string, status: number): Response {
  return jsonResponse({ error: code, message }, status)
}

/**
 * Tar emot ett POST-anrop med `{ text, target, context? }` och svarar med
 * `{ source, translation, target }` – eller `{ error, message }` med en
 * beskrivande statuskod.
 *
 * `fetchImpl` går att byta ut i tester.
 */
export async function handleTranslateRequest(
  request: Request,
  env: TranslateEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<Response> {
  if (request.method !== 'POST') {
    return errorResponse('invalid', 'Endast POST stöds.', 405)
  }

  let body: TranslateRequestBody
  try {
    body = (await request.json()) as TranslateRequestBody
  } catch {
    return errorResponse('invalid', 'Ogiltig JSON i anropet.', 400)
  }

  const text = typeof body.text === 'string' ? body.text.trim() : ''
  const target = body.target
  const context =
    typeof body.context === 'string' ? body.context.trim().slice(0, MAX_CONTEXT_LENGTH) : ''

  if (text.length === 0 || text.length > MAX_TEXT_LENGTH) {
    return errorResponse('invalid', `Texten måste vara 1–${MAX_TEXT_LENGTH} tecken.`, 400)
  }
  if (!isSupportedTargetLanguage(target)) {
    return errorResponse('invalid', 'Målspråket stöds inte.', 400)
  }

  const apiKey = env.DEEPL_API_KEY?.trim()
  if (!apiKey) {
    return errorResponse(
      'not-configured',
      'Översättningen är inte påslagen: servern saknar DEEPL_API_KEY.',
      503,
    )
  }

  const endpoint = env.DEEPL_API_URL?.trim() || 'https://api-free.deepl.com/v2/translate'
  const contextText = context.length > 0 ? `${DOMAIN_HINT}\n${context}` : DOMAIN_HINT

  let response: Response
  try {
    response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `DeepL-Auth-Key ${apiKey}`,
      },
      body: JSON.stringify({
        text: [text],
        source_lang: 'SV',
        target_lang: DEEPL_TARGET_LANGUAGE[target],
        context: contextText,
      }),
    })
  } catch {
    return errorResponse('unavailable', 'Kunde inte nå översättningstjänsten.', 502)
  }

  // DeepL: 456 = kvoten slut, 429 = för många anrop, 403 = nyckeln avvisades.
  if (response.status === 429 || response.status === 456) {
    return errorResponse('busy', 'Översättningstjänsten är upptagen just nu. Försök igen om en stund.', 429)
  }
  if (!response.ok) {
    return errorResponse(
      'unavailable',
      `Översättningstjänsten svarade med fel (${response.status}).`,
      502,
    )
  }

  let payload: { translations?: { text?: unknown }[] }
  try {
    payload = (await response.json()) as typeof payload
  } catch {
    return errorResponse('unavailable', 'Ovantat svar från översättningstjänsten.', 502)
  }

  const translation = payload.translations?.[0]?.text
  if (typeof translation !== 'string' || translation.trim().length === 0) {
    return errorResponse('unavailable', 'Översättningstjänsten gav inget svar.', 502)
  }

  return jsonResponse({ source: text, translation: translation.trim(), target }, 200)
}
