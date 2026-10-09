import type { SourceDocument } from './types'

/**
 * The authoritative source for all CitizenSE learning content.
 *
 * Every section in `src/content/chapters/*` carries a `SourceRef` pointing back
 * to the chapter and page numbers of this document, so the learning content
 * stays traceable to the official material.
 */
export const SOURCE_DOCUMENT: SourceDocument = {
  title: 'Sverige i fokus – utbildningsmaterial till medborgarskapsprov',
  publisher: 'Universitets- och högskolerådet (UHR) tillsammans med Skolverket',
  edition: '1:a upplagan 2026, korrigerad version 2026-08-10',
  url: 'https://www.uhr.se/globalassets/_uhr.se/medborgarskapsprovet/utbildningsmaterial/sverige-i-fokus_.pdf',
  // Set to true once the verbatim UHR text has replaced the condensed
  // study summaries in the section `read` blocks.
  verbatimImported: false,
}

/** Attribution string reused across the UI. */
export const SOURCE_ATTRIBUTION = `Källa: UHR & Skolverket, ${SOURCE_DOCUMENT.title} (${SOURCE_DOCUMENT.edition}).`

/** Formats a source reference for display, e.g. "Sverige i fokus, kap. 1, s. 5–8". */
export function formatSourceRef(chapter: number, pages: number[]): string {
  if (pages.length === 0) return `Sverige i fokus, kap. ${chapter}`
  const first = Math.min(...pages)
  const last = Math.max(...pages)
  const pageLabel = first === last ? `s. ${first}` : `s. ${first}–${last}`
  return `Sverige i fokus, kap. ${chapter}, ${pageLabel}`
}
