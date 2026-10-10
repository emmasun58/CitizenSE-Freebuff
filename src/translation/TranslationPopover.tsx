/**
 * Den lilla rutan med översättningen.
 *
 * Visar alltid den svenska texten och översättningen tillsammans, låter
 * användaren byta språk direkt, och stängs med Escape, krysset eller ett klick
 * utanför. Vid problem visas ett tydligt meddelande – aldrig en påhittad
 * översättning.
 */
import { useEffect, useRef, useState } from 'react'
import { TranslateError, translateText, type TranslateErrorCode, type TranslateResult } from './client'
import { getTargetLanguage, TARGET_LANGUAGES, type TargetLanguageId } from './languages'
import { useTranslation } from './TranslationContext'

/** Enkla, tydliga felmeddelanden på svenska. */
const ERROR_MESSAGES: Record<TranslateErrorCode, string> = {
  'not-configured':
    'Översättningen är inte påslagen än. Be den som ansvarar för appen att koppla en översättningstjänst.',
  busy: 'Översättningen är upptagen just nu. Vänta en liten stund och försök igen.',
  invalid: 'Texten gick inte att översätta. Markera ett kortare ord eller en mening.',
  unavailable: 'Kunde inte hämta översättningen. Försök igen.',
  network: 'Ingen anslutning till översättningen. Kontrollera internet och försök igen.',
  unknown: 'Kunde inte hämta översättningen. Försök igen.',
}

const VIEWPORT_MARGIN = 8

export function TranslationPopover() {
  const { request, target, setTarget, close } = useTranslation()
  const [result, setResult] = useState<TranslateResult | null>(null)
  const [error, setError] = useState<TranslateErrorCode | null>(null)
  const [loading, setLoading] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)

  // Hämta en översättning när markeringen eller språket ändras.
  useEffect(() => {
    if (!request) return
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    setResult(null)

    translateText(
      { text: request.text, target, context: request.context },
      { signal: controller.signal },
    )
      .then((next) => {
        setResult(next)
        setLoading(false)
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof TranslateError ? cause.code : 'unknown')
        setLoading(false)
      })

    return () => controller.abort()
  }, [request, target, attempt])

  // Escape stänger rutan.
  useEffect(() => {
    if (!request) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [request, close])

  // Klick utanför rutan stänger den.
  useEffect(() => {
    if (!request) return
    const onPointerDown = (event: PointerEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) close()
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => document.removeEventListener('pointerdown', onPointerDown, true)
  }, [request, close])

  // Stäng vid scroll eller storleksändring, så att rutan inte hamnar fel.
  useEffect(() => {
    if (!request) return
    const onScroll = () => close()
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onScroll)
    }
  }, [request, close])

  // Placera rutan nära markeringen, men innanför fönstret.
  useEffect(() => {
    if (!request || !popoverRef.current) return
    const element = popoverRef.current
    const width = element.offsetWidth
    const height = element.offsetHeight
    const maxLeft = Math.max(VIEWPORT_MARGIN, window.innerWidth - width - VIEWPORT_MARGIN)
    const left = Math.min(Math.max(VIEWPORT_MARGIN, request.rect.left), maxLeft)

    let top = request.rect.bottom + VIEWPORT_MARGIN
    if (top + height > window.innerHeight - VIEWPORT_MARGIN) {
      const above = request.rect.top - height - VIEWPORT_MARGIN
      top = above >= VIEWPORT_MARGIN ? above : Math.max(VIEWPORT_MARGIN, window.innerHeight - height - VIEWPORT_MARGIN)
    }

    setPosition({ top, left })
  }, [request, target, loading, result, error])

  if (!request) return null

  const language = getTargetLanguage(target)

  return (
    <div
      ref={popoverRef}
      className="translate-popover"
      role="dialog"
      aria-label="Översättning"
      data-translate-ignore
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
        visibility: position ? 'visible' : 'hidden',
      }}
    >
      <div className="translate-popover__head">
        <label className="translate-popover__language">
          <span className="translate-popover__label">Översätt till</span>
          <select
            className="translate-popover__select"
            value={target}
            aria-label="Välj språk för översättningen"
            onChange={(event) => setTarget(event.target.value as TargetLanguageId)}
          >
            {TARGET_LANGUAGES.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} · {option.nativeName}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="translate-popover__close"
          onClick={close}
          aria-label="Stäng"
        >
          ×
        </button>
      </div>

      <p className="translate-popover__label">Svenska</p>
      <p className="translate-popover__source" lang="sv">
        {request.text}
      </p>

      <p className="translate-popover__label">{language.label}</p>
      <div className="translate-popover__body" aria-live="polite">
        {loading ? <p className="translate-popover__status">Översätter…</p> : null}

        {!loading && result ? (
          <p
            className={
              language.direction === 'rtl'
                ? 'translate-popover__translation translate-popover__translation--rtl'
                : 'translate-popover__translation'
            }
            lang={language.tag}
            dir={language.direction}
          >
            {result.translation}
          </p>
        ) : null}

        {!loading && error ? (
          <div className="translate-popover__error">
            <p className="translate-popover__error-text">{ERROR_MESSAGES[error]}</p>
            <button
              type="button"
              className="btn btn--small"
              onClick={() => setAttempt((value) => value + 1)}
            >
              Försök igen
            </button>
          </div>
        ) : null}
      </div>

      <p className="translate-popover__hint">Tips: dubbelklicka på ett ord, eller markera en mening.</p>
    </div>
  )
}
