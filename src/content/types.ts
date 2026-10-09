/**
 * Content schema for CitizenSE.
 *
 * The schema is deliberately SQ3R-shaped: every section carries the five
 * building blocks (survey / question / read / recite / review) so that the
 * reading interface is driven entirely by data. Adding the real UHR text later
 * means filling in these fields — no component changes required.
 *
 * Authoritative source: Universitets- och högskolerådet (UHR) & Skolverket,
 * "Sverige i fokus – utbildningsmaterial till medborgarskapsprov", 1:a upplagan
 * 2026 (korrigerad 2026-08-10).
 */

/** Reference back to the official material, for traceability and citations. */
export interface SourceRef {
  /** Chapter number in "Sverige i fokus". */
  chapter: number
  /** Printed page numbers in "Sverige i fokus" covering this section. */
  pages: number[]
}

/* ------------------------------------------------------------------ *
 * Read blocks – the atomic pieces of the Read step
 * ------------------------------------------------------------------ */

/**
 * A short, readable chunk of the learning material. Blocks are intentionally
 * small so the reading experience stays focused (SQ3R: "short, readable
 * sections").
 */
export type ReadBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  /** A concept the reader is likely to find difficult, explained inline. */
  | { kind: 'concept'; term: string; explanation: string }
  /** A concrete example that anchors an abstract rule. */
  | { kind: 'example'; title?: string; text: string }
  /** Short verbatim quotation from the source, always with a citation. */
  | { kind: 'quote'; text: string; citation: string }
  | { kind: 'note'; tone: 'info' | 'tip' | 'warn'; text: string }

/* ------------------------------------------------------------------ *
 * Recite activities
 * ------------------------------------------------------------------ */

export interface MultipleChoiceOption {
  id: string
  text: string
}

export interface MultipleChoiceRecite {
  kind: 'multiple-choice'
  id: string
  prompt: string
  options: MultipleChoiceOption[]
  correctOptionId: string
  explanation: string
}

export interface ShortAnswerRecite {
  kind: 'short-answer'
  id: string
  prompt: string
  /** Accepted answers are normalised before comparison. */
  acceptedAnswers: string[]
  /** Shown after the attempt so the learner can self-check. */
  modelAnswer: string
}

export interface ExplainRecite {
  kind: 'explain'
  id: string
  prompt: string
  /** Points the learner should cover; used for self-assessment. */
  checklist: string[]
  modelAnswer: string
}

export type ReciteItem = MultipleChoiceRecite | ShortAnswerRecite | ExplainRecite

/* ------------------------------------------------------------------ *
 * Survey / Question / Review blocks
 * ------------------------------------------------------------------ */

export interface SurveyTheme {
  title: string
  description: string
}

export interface KeyConcept {
  term: string
  /** One-line definition. */
  definition: string
  /** Optional plain-language expansion for difficult terms. */
  explanation?: string
}

export interface SurveyBlock {
  /** 1–3 sentence overview of what the section is about. */
  overview: string
  /** Main themes of the section. */
  themes: SurveyTheme[]
  /** Terms the learner should recognise after reading. */
  keyConcepts: KeyConcept[]
}

export interface QuestionBlock {
  id: string
  prompt: string
  /**
   * `recall` questions are answerable directly from the text.
   * `reflection` questions connect the material to the learner's own life.
   */
  kind: 'recall' | 'reflection'
  /** Optional pointer telling the learner where to look while reading. */
  lookFor?: string
}

export interface ReviewBlock {
  /** The most important information, as short takeaways. */
  keyTakeaways: string[]
  /** The single most important thing to remember, if any. */
  mostImportant?: string
  /** Terms worth adding to the learner's vocabulary. */
  glossary: KeyConcept[]
}

/* ------------------------------------------------------------------ *
 * Section / Chapter
 * ------------------------------------------------------------------ */

export interface Section {
  /** Stable id, e.g. `ch01-geografi`. Never change once shipped. */
  id: string
  title: string
  source: SourceRef
  survey: SurveyBlock
  questions: QuestionBlock[]
  read: ReadBlock[]
  recite: ReciteItem[]
  review: ReviewBlock
}

export interface Chapter {
  /** Stable id, e.g. `ch01`. */
  id: string
  /** Position in the material, starting at 1. */
  order: number
  title: string
  /** The chapter's own short introduction from "Sverige i fokus". */
  intro: string
  /** What the learner should be able to do after the chapter. */
  learningGoals: string[]
  source: SourceRef
  sections: Section[]
}

/** Metadata about the authoritative source document. */
export interface SourceDocument {
  title: string
  publisher: string
  edition: string
  url: string
  /** True once the real UHR text has been imported into the sections. */
  verbatimImported: boolean
}
