/**
 * Klient för översättningsfunktionen.
 *
 * Frontend pratar aldrig direkt med översättningstjänsten och innehåller
 * aldrig någon API-nyckel. Den anropar i stället en serverfunktion
 * (`/api/translate`) som håller nyckeln på serversidan.
 *
 * Modulen är medvetet fri från DOM-kod så att den kan testas i Node.
 */
import type { TargetLanguageId } from './languages'

export interface TranslateInput {
  /** Den svenska texten som ska översättas. */
  text: string
  /** Målspråket. */
  target: TargetLanguageId
  /** Text runt omkring, som hjälper tjänsten att tolka sammanhanget. */
  context?: string
}

export interface TranslateResult {
  /** Den svenska text som översattes. */
  source: string
  /** Översättningen. */
  translation: string
  target: TargetLanguageId
}

/**
 * Fel som användaren kan få se. `code` styr vilket meddelande rutan visar –
 * vi visar aldrig en påhittad översättning.
 */
export type TranslateErrorCode =
  | 'not-configured'
  | 'busy'
  | 'invalid'
  | 'unavailable'
  | 'network'
  | 'unknown'

export class TranslateError extends Error {
  readonly code: TranslateErrorCode

  constructor(code: TranslateErrorCode, message?: string) {
    super(message ?? code)
    this.name = 'TranslateError'
    this.code = code
  }
}

/** Felkoder som serverfunktionen kan svara med i fältet `error`. */
const SERVER_ERROR_CODES: readonly TranslateErrorCode[] = [
  'not-configured',
  'busy',
  'invalid',
  'unavailable',
]

interface TranslateResponseBody {
  translation?: unknown
  source?: unknown
  error?: unknown
  message?: unknown
}

/**
 * Adressen till serverfunktionen. Standard är samma origin (`/api/translate`),
 * vilket fungerar både lokalt och i produktion. Sätt bara
 * `VITE_TRANSLATE_ENDPOINT` om funktionen ligger någon annanstans.
 * OBS: bara adressen konfigureras här – aldrig någon nyckel.
 */
export function translateEndpoint(): string {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
  const configured = env?.VITE_TRANSLATE_ENDPOINT?.trim()
  return configured && configured.length > 0 ? configured : '/api/translate'
}

const DEFAULT_TIMEOUT_MS = 12_000

/**
 * Hämtar en översättning från serverfunktionen. Kastar alltid `TranslateError`
 * vid problem, så att anroparen kan visa ett tydligt meddelande.
 */
export async function translateText(
  input: TranslateInput,
  options: { signal?: AbortSignal; timeoutMs?: number; fetchImpl?: typeof fetch } = {},
): Promise<TranslateResult> {
  const endpoint = translateEndpoint()
  const fetchImpl = options.fetchImpl ?? fetch
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS

  // Egen timeout om anroparen inte redan skickat en signal.
  const controller = options.signal ? null : new AbortController()
  const signal = options.signal ?? controller?.signal ?? undefined
  const timer: ReturnType<typeof setTimeout> | null = controller
    ? setTimeout(() => controller.abort(), timeoutMs)
    : null

  let response: Response
  try {
    response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: input.text, target: input.target, context: input.context }),
      signal,
    })
  } catch {
    if (signal?.aborted) {
      throw new TranslateError('unavailable', 'Översättningen tog för lång tid.')
    }
    throw new TranslateError('network', 'Kunde inte nå översättningen.')
  } finally {
    if (timer !== null) clearTimeout(timer)
  }

  const payload = await readJson(response)

  if (!response.ok) {
    const code = readErrorCode(payload) ?? (response.status >= 500 ? 'unavailable' : 'unknown')
    throw new TranslateError(code, readErrorMessage(payload) ?? `HTTP ${response.status}`)
  }

  const translation = typeof payload?.translation === 'string' ? payload.translation.trim() : ''
  if (translation.length === 0) {
    throw new TranslateError('unavailable', 'Översättningen kom tillbaka tom.')
  }

  const source = typeof payload?.source === 'string' ? payload.source : input.text
  return { source, translation, target: input.target }
}

async function readJson(response: Response): Promise<TranslateResponseBody | null> {
  try {
    return (await response.json()) as TranslateResponseBody
  } catch {
    return null
  }
}

function readErrorCode(payload: TranslateResponseBody | null): TranslateErrorCode | null {
  const value = payload?.error
  if (typeof value !== 'string') return null
  return (SERVER_ERROR_CODES as readonly string[]).includes(value)
    ? (value as TranslateErrorCode)
    : null
}

function readErrorMessage(payload: TranslateResponseBody | null): string | null {
  const value = payload?.message
  return typeof value === 'string' && value.trim().length > 0 ? value : null
}
