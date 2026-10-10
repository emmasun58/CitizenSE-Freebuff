/**
 * Delar översättningsläget i hela appen: valt språk och den markering som
 * rutan just nu visar. Rutan ritas utanför studieinnehållet, så att den egna
 * texten aldrig kan bli en ny markering.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { persistTargetLanguage, readStoredTargetLanguage, type TargetLanguageId } from './languages'
import { TranslationPopover } from './TranslationPopover'
import { useTranslationSelection, type TranslationRequest } from './useTranslationSelection'

/** Attributet som markerar var text får översättas. Sätts på <main> i App.tsx. */
export const TRANSLATE_ROOT_SELECTOR = '[data-translate-root]'

interface TranslationContextValue {
  /** Målspråket som användaren valt (sparas i localStorage). */
  target: TargetLanguageId
  setTarget(id: TargetLanguageId): void
  /** Markeringen som rutan visar, eller null när rutan är stängd. */
  request: TranslationRequest | null
  close(): void
}

const TranslationContext = createContext<TranslationContextValue | null>(null)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [target, setTargetState] = useState<TargetLanguageId>(() => readStoredTargetLanguage())
  const [request, setRequest] = useState<TranslationRequest | null>(null)
  const counter = useRef(0)

  const open = useCallback((next: Omit<TranslationRequest, 'id'>) => {
    counter.current += 1
    setRequest({ ...next, id: counter.current })
  }, [])

  const close = useCallback(() => setRequest(null), [])

  const setTarget = useCallback((id: TargetLanguageId) => {
    setTargetState(id)
    persistTargetLanguage(id)
  }, [])

  useTranslationSelection({ rootSelector: TRANSLATE_ROOT_SELECTOR, onSelect: open })

  const value = useMemo<TranslationContextValue>(
    () => ({ target, setTarget, request, close }),
    [target, setTarget, request, close],
  )

  return (
    <TranslationContext.Provider value={value}>
      {children}
      <TranslationPopover />
    </TranslationContext.Provider>
  )
}

export function useTranslation(): TranslationContextValue {
  const value = useContext(TranslationContext)
  if (!value) throw new Error('useTranslation måste användas inom en TranslationProvider')
  return value
}
