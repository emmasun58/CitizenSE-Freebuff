/**
 * DOM-hjälpare för översättningsfunktionen.
 *
 * Allt här kräver en webbläsare. Reglerna är medvetet försiktiga: vi reagerar
 * bara på markeringar i studieinnehållet och aldrig på knappar, formulär eller
 * den egna översättningsrutan.
 */

/** Element vi aldrig ska reagera på. */
const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, option, [contenteditable="true"], [data-translate-ignore]'

/** Block som en markerad text brukar tillhöra. Används för att ge sammanhang. */
const CONTEXT_SELECTOR =
  'p, li, h1, h2, h3, h4, h5, h6, dt, dd, blockquote, figcaption, td, th, aside, article'

/** Bokstäver (även svenska och arabiska), siffror, bindestreck och apostrof. */
const WORD_CHARACTER = /[\p{L}\p{M}\p{N}'’-]/u

/** Längsta text som får översättas i ett svep. */
export const MAX_SELECTION_LENGTH = 300

export interface SelectedRange {
  text: string
  range: Range
}

export interface ElementRect {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export function isInteractiveNode(node: EventTarget | null): boolean {
  return node instanceof Element && node.closest(INTERACTIVE_SELECTOR) !== null
}

export function isInsideRoot(node: Node | null, root: Element): boolean {
  return node !== null && root.contains(node)
}

export function cleanSelectionText(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/** Bara riktig text översätts – inte tomma markeringar eller rena siffror. */
export function isTranslatableText(text: string): boolean {
  const clean = cleanSelectionText(text)
  if (clean.length === 0 || clean.length > MAX_SELECTION_LENGTH) return false
  return /\p{L}/u.test(clean)
}

/** Den aktuella markeringen, om den ligger i studieinnehållet. */
export function selectedRangeInRoot(root: Element): SelectedRange | null {
  if (typeof window === 'undefined') return null
  const selection = window.getSelection()
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return null

  const range = selection.getRangeAt(0)
  if (!isInsideRoot(range.commonAncestorContainer, root)) return null

  const text = selection.toString()
  if (!isTranslatableText(text)) return null
  return { text: cleanSelectionText(text), range }
}

function caretRangeAtPoint(x: number, y: number): Range | null {
  const doc = document as Document & {
    caretRangeFromPoint?: (x: number, y: number) => Range | null
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null
  }

  if (typeof doc.caretRangeFromPoint === 'function') return doc.caretRangeFromPoint(x, y)

  if (typeof doc.caretPositionFromPoint === 'function') {
    const position = doc.caretPositionFromPoint(x, y)
    if (!position) return null
    const range = doc.createRange()
    range.setStart(position.offsetNode, position.offset)
    range.collapse(true)
    return range
  }

  return null
}

/** Ordet under en punkt. Används av dubbelklick och långt tryck. */
export function wordAtPoint(x: number, y: number): SelectedRange | null {
  const caret = caretRangeAtPoint(x, y)
  if (!caret) return null

  const node = caret.startContainer
  if (node.nodeType !== Node.TEXT_NODE) return null

  const text = node.textContent ?? ''
  let index = Math.min(caret.startOffset, text.length)
  const isWordCharacter = (position: number): boolean =>
    position >= 0 && position < text.length && WORD_CHARACTER.test(text[position])

  // Står markören precis efter ett ord, stega tillbaka ett steg.
  if (!isWordCharacter(index) && isWordCharacter(index - 1)) index -= 1
  if (!isWordCharacter(index)) return null

  let start = index
  let end = index
  while (isWordCharacter(start - 1)) start -= 1
  while (isWordCharacter(end)) end += 1

  const word = text.slice(start, end)
  if (!isTranslatableText(word)) return null

  const range = document.createRange()
  range.setStart(node, start)
  range.setEnd(node, end)
  return { text: word, range }
}

export function selectRange(range: Range): void {
  const selection = window.getSelection()
  if (!selection) return
  selection.removeAllRanges()
  selection.addRange(range)
}

export function rectOfRange(range: Range): ElementRect | null {
  const rect = range.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) {
    const [first] = Array.from(range.getClientRects())
    if (!first) return null
    return {
      top: first.top,
      left: first.left,
      right: first.right,
      bottom: first.bottom,
      width: first.width,
      height: first.height,
    }
  }
  return {
    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  }
}

/**
 * Texten runt markeringen. Skickas med som sammanhang till översättningen, så
 * att ett enskilt ord tolkas rätt (till exempel samhällstermer).
 */
export function contextForRange(range: Range, maxLength = 400): string {
  const start = range.startContainer
  const element = start.nodeType === Node.ELEMENT_NODE ? (start as Element) : start.parentElement
  const block = element?.closest(CONTEXT_SELECTOR) ?? element
  return cleanSelectionText(block?.textContent ?? '').slice(0, maxLength)
}
