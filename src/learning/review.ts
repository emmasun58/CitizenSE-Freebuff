import { getSection } from '../content'
import type { ReciteItem } from '../content/types'
import type { ProgressState, ReciteAttempt } from './progress'

/**
 * Spaced review.
 *
 * This module decides *which* items a learner should repeat. For now it uses a
 * simple, honest rule: anything answered incorrectly comes back, most recently
 * missed first. The interval logic lives behind `buildReviewQueue`, so a real
 * scheduling algorithm can replace it later without touching the UI.
 */

export interface ReviewQueueEntry {
  attempt: ReciteAttempt
  chapterId: string
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  item: ReciteItem
}

/** All recite items the learner got wrong, resolved back to their content. */
export function buildReviewQueue(state: ProgressState): ReviewQueueEntry[] {
  const entries: ReviewQueueEntry[] = []

  for (const attempt of Object.values(state.recite)) {
    if (attempt.correct) continue
    const located = getSection(attempt.sectionId)
    if (!located) continue
    const item = located.section.recite.find((candidate) => candidate.id === attempt.itemId)
    if (!item) continue
    entries.push({
      attempt,
      chapterId: located.chapter.id,
      chapterTitle: located.chapter.title,
      sectionId: located.section.id,
      sectionTitle: located.section.title,
      item,
    })
  }

  return entries.sort((a, b) => a.attempt.lastAnsweredAt.localeCompare(b.attempt.lastAnsweredAt))
}

/** Sections that still have at least one unanswered or incorrect item. */
export function sectionsNeedingReview(state: ProgressState): string[] {
  return Array.from(new Set(buildReviewQueue(state).map((entry) => entry.sectionId)))
}
