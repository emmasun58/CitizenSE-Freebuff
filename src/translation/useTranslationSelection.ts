/**
 * Lyssnar efter markeringar i studieinnehållet och rapporterar dem.
 *
 * Dator: dubbelklick på ett ord.
 * Mobil: långt tryck på ett ord, eller att en mening markeras med handtagen.
 *
 * Hooken ändrar inget i själva texten och rör därför inte läsningen eller
 * SQ3R-flödet.
 */
import { useEffect, useRef } from 'react'
import {
  cleanSelectionText,
  contextForRange,
  isInteractiveNode,
  isInsideRoot,
  isTranslatableText,
  rectOfRange,
  selectRange,
  selectedRangeInRoot,
  wordAtPoint,
  type ElementRect,
} from './selection'

export interface TranslationRequest {
  /** Unikt id per markering, så att samma ord kan öppnas igen. */
  id: number
  text: string
  context: string
  rect: ElementRect
}

interface UseTranslationSelectionOptions {
  /** CSS-väljare för området där text får översättas. */
  rootSelector: string
  onSelect(request: Omit<TranslationRequest, 'id'>): void
  enabled?: boolean
}

const LONG_PRESS_MS = 500
const MOVE_TOLERANCE_PX = 12
const DUPLICATE_WINDOW_MS = 700
const SELECTION_DEBOUNCE_MS = 300

export function useTranslationSelection({
  rootSelector,
  onSelect,
  enabled = true,
}: UseTranslationSelectionOptions): void {
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect

  useEffect(() => {
    if (!enabled || typeof document === 'undefined' || typeof window === 'undefined') return

    let root: Element | null = null
    let counter = 0
    let lastText = ''
    let lastAt = 0

    const getRoot = (): Element | null => {
      if (!root || !document.contains(root)) root = document.querySelector(rootSelector)
      return root
    }

    const emit = (text: string, range: Range) => {
      const clean = cleanSelectionText(text)
      if (!isTranslatableText(clean)) return
      const now = Date.now()
      if (clean === lastText && now - lastAt < DUPLICATE_WINDOW_MS) return
      const rect = rectOfRange(range)
      if (!rect) return
      lastText = clean
      lastAt = now
      counter += 1
      onSelectRef.current({ text: clean, context: contextForRange(range), rect })
    }

    const checkSelection = (): boolean => {
      const rootElement = getRoot()
      if (!rootElement) return false
      const found = selectedRangeInRoot(rootElement)
      if (!found) return false
      emit(found.text, found.range)
      return true
    }

    // Pekskärm (även hybridenheter med mus): långt tryck.
    const hasTouch = window.matchMedia('(any-pointer: coarse)').matches
    // Enheter där pekaren är fingret (mobil/surfplatta): markering med handtag.
    const touchPrimary = window.matchMedia('(hover: none)').matches

    /* --- Dator: dubbelklick ------------------------------------------ */

    const handleDoubleClick = (event: MouseEvent) => {
      if (isInteractiveNode(event.target)) return
      if (checkSelection()) return
      const rootElement = getRoot()
      if (!rootElement) return
      const word = wordAtPoint(event.clientX, event.clientY)
      if (!word || !isInsideRoot(word.range.startContainer, rootElement)) return
      selectRange(word.range)
      emit(word.text, word.range)
    }

    /* --- Mobil: långt tryck och markerade meningar ------------------- */

    let pressTimer: ReturnType<typeof setTimeout> | null = null
    let pressStart = { x: 0, y: 0 }
    let pressing = false
    let handledByLongPress = false

    const clearPressTimer = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' || isInteractiveNode(event.target)) return
      pressing = true
      handledByLongPress = false
      pressStart = { x: event.clientX, y: event.clientY }
      clearPressTimer()
      pressTimer = setTimeout(() => {
        pressTimer = null
        if (!pressing) return
        const rootElement = getRoot()
        if (!rootElement) return
        const word = wordAtPoint(pressStart.x, pressStart.y)
        if (!word || !isInsideRoot(word.range.startContainer, rootElement)) return
        handledByLongPress = true
        selectRange(word.range)
        emit(word.text, word.range)
      }, LONG_PRESS_MS)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!pressing) return
      const moved = Math.hypot(event.clientX - pressStart.x, event.clientY - pressStart.y)
      if (moved > MOVE_TOLERANCE_PX) {
        pressing = false
        clearPressTimer()
      }
    }

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') return
      pressing = false
      clearPressTimer()
      if (handledByLongPress) {
        handledByLongPress = false
        return
      }
      // På mobil kan en mening ha markerats med handtagen i stället.
      window.setTimeout(checkSelection, 0)
    }

    const handlePointerCancel = () => {
      pressing = false
      clearPressTimer()
    }

    let selectionTimer: ReturnType<typeof setTimeout> | null = null
    const handleSelectionChange = () => {
      if (selectionTimer !== null) clearTimeout(selectionTimer)
      selectionTimer = setTimeout(() => {
        selectionTimer = null
        if (isInteractiveNode(document.activeElement)) return
        checkSelection()
      }, SELECTION_DEBOUNCE_MS)
    }

    document.addEventListener('dblclick', handleDoubleClick)
    if (hasTouch) {
      document.addEventListener('pointerdown', handlePointerDown)
      document.addEventListener('pointermove', handlePointerMove)
      document.addEventListener('pointerup', handlePointerUp)
      document.addEventListener('pointercancel', handlePointerCancel)
    }
    if (touchPrimary) {
      document.addEventListener('selectionchange', handleSelectionChange)
    }

    return () => {
      document.removeEventListener('dblclick', handleDoubleClick)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointercancel', handlePointerCancel)
      document.removeEventListener('selectionchange', handleSelectionChange)
      clearPressTimer()
      if (selectionTimer !== null) clearTimeout(selectionTimer)
    }
  }, [enabled, rootSelector])
}
