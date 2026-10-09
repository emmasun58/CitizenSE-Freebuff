import type { Sq3rStepId } from './sq3r'

/** How far a learner has come with a single section. */
export type SectionStage =
  | 'not-started'
  | 'surveyed'
  | 'questioned'
  | 'read'
  | 'recited'
  | 'reviewed'

export const SECTION_STAGE_ORDER: SectionStage[] = [
  'not-started',
  'surveyed',
  'questioned',
  'read',
  'recited',
  'reviewed',
]

/** A single recite attempt, kept so Review can replay what went wrong. */
export interface ReciteAttempt {
  itemId: string
  sectionId: string
  chapterId: string
  correct: boolean
  /** Free-text answer for `explain` items. */
  response?: string
  /** How many times this item has been answered in total. */
  attemptCount: number
  lastAnsweredAt: string
}

/**
 * The complete persisted state of a learner.
 *
 * Everything is keyed by stable content ids (`chapter.id`, `section.id`,
 * `recite.id`), which is what makes the content architecture modular: swapping
 * placeholder content for the real UHR text does not invalidate progress as
 * long as the ids are kept.
 */
export interface ProgressState {
  version: number
  sections: Record<string, { stage: SectionStage; updatedAt: string }>
  recite: Record<string, ReciteAttempt>
  /** Ids of recite items the learner explicitly saved for later. */
  savedItemIds: string[]
}

export function createEmptyProgress(): ProgressState {
  return { version: 1, sections: {}, recite: {}, savedItemIds: [] }
}

/**
 * Storage seam.
 *
 * The UI only ever talks to this interface, so the placeholder localStorage
 * implementation can later be replaced by a server-backed store that scopes
 * rows per signed-in user without changing any component.
 */
export interface ProgressStore {
  load(): ProgressState
  save(state: ProgressState): void
  subscribe(listener: () => void): () => void
}

/** Counts used by the progress indicators across the UI. */
export interface ProgressSummary {
  sectionsStarted: number
  sectionsReviewed: number
  totalSections: number
  /** 0–100, based on sections whose stage is `reviewed`. */
  percentReviewed: number
  totalAnswers: number
  correctAnswers: number
  /** 0–100, share of all recite attempts that were correct. */
  accuracy: number
  itemsToReview: number
}

export function summarise(state: ProgressState, totalSections: number): ProgressSummary {
  const entries = Object.values(state.sections)
  const sectionsStarted = entries.filter((entry) => entry.stage !== 'not-started').length
  const sectionsReviewed = entries.filter((entry) => entry.stage === 'reviewed').length

  const attempts = Object.values(state.recite)
  const totalAnswers = attempts.reduce((sum, attempt) => sum + attempt.attemptCount, 0)
  const correctAnswers = attempts.reduce(
    (sum, attempt) => sum + (attempt.correct ? attempt.attemptCount : 0),
    0,
  )

  const itemsToReview = Object.values(state.recite).filter((attempt) => !attempt.correct).length

  return {
    sectionsStarted,
    sectionsReviewed,
    totalSections,
    percentReviewed: totalSections === 0 ? 0 : Math.round((sectionsReviewed / totalSections) * 100),
    totalAnswers,
    correctAnswers,
    accuracy: totalAnswers === 0 ? 0 : Math.round((correctAnswers / totalAnswers) * 100),
    itemsToReview,
  }
}

/** Maps the SQ3R step a learner just finished to the resulting section stage. */
export function stageForCompletedStep(stepId: Sq3rStepId): SectionStage {
  switch (stepId) {
    case 'survey':
      return 'surveyed'
    case 'question':
      return 'questioned'
    case 'read':
      return 'read'
    case 'recite':
      return 'recited'
    case 'review':
      return 'reviewed'
  }
}

/** True when `candidate` is further along than `current`. */
export function isStageAfter(candidate: SectionStage, current: SectionStage): boolean {
  return SECTION_STAGE_ORDER.indexOf(candidate) > SECTION_STAGE_ORDER.indexOf(current)
}
