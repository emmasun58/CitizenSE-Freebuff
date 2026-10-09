import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'
import { totalSectionCount } from '../content'
import { createLocalStorageProgressStore } from './localStorageProgress'
import {
  createEmptyProgress,
  isStageAfter,
  stageForCompletedStep,
  summarise,
  type ProgressState,
  type ProgressStore,
  type ProgressSummary,
  type SectionStage,
} from './progress'
import { buildReviewQueue, type ReviewQueueEntry } from './review'
import type { Sq3rStepId } from './sq3r'

interface ProgressContextValue {
  state: ProgressState
  summary: ProgressSummary
  reviewQueue: ReviewQueueEntry[]
  stageOf(sectionId: string): SectionStage
  completeStep(sectionId: string, chapterId: string, step: Sq3rStepId): void
  recordAnswer(input: {
    itemId: string
    sectionId: string
    chapterId: string
    correct: boolean
    response?: string
  }): void
  toggleSaved(itemId: string): void
  isSaved(itemId: string): boolean
  reset(): void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({
  children,
  store,
}: {
  children: ReactNode
  /** Injectable for tests; defaults to the browser-local placeholder store. */
  store?: ProgressStore
}) {
  const storeRef = useRef<ProgressStore | null>(null)
  if (storeRef.current === null) {
    storeRef.current = store ?? createLocalStorageProgressStore()
  }
  const activeStore = storeRef.current

  const [state, setState] = useState<ProgressState>(() => activeStore.load())

  const commit = useCallback(
    (updater: (current: ProgressState) => ProgressState) => {
      setState((current) => {
        const next = updater(current)
        activeStore.save(next)
        return next
      })
    },
    [activeStore],
  )

  const completeStep = useCallback<ProgressContextValue['completeStep']>(
    (sectionId, _chapterId, step) => {
      const reached = stageForCompletedStep(step)
      commit((current) => {
        const existing = current.sections[sectionId]?.stage ?? 'not-started'
        if (!isStageAfter(reached, existing) && existing !== 'not-started') return current
        return {
          ...current,
          sections: {
            ...current.sections,
            [sectionId]: { stage: reached, updatedAt: new Date().toISOString() },
          },
        }
      })
    },
    [commit],
  )

  const recordAnswer = useCallback<ProgressContextValue['recordAnswer']>(
    ({ itemId, sectionId, chapterId, correct, response }) => {
      commit((current) => {
        const previous = current.recite[itemId]
        return {
          ...current,
          recite: {
            ...current.recite,
            [itemId]: {
              itemId,
              sectionId,
              chapterId,
              correct,
              response,
              attemptCount: (previous?.attemptCount ?? 0) + 1,
              lastAnsweredAt: new Date().toISOString(),
            },
          },
        }
      })
    },
    [commit],
  )

  const toggleSaved = useCallback<ProgressContextValue['toggleSaved']>(
    (itemId) => {
      commit((current) => {
        const saved = current.savedItemIds.includes(itemId)
        return {
          ...current,
          savedItemIds: saved
            ? current.savedItemIds.filter((id) => id !== itemId)
            : [...current.savedItemIds, itemId],
        }
      })
    },
    [commit],
  )

  const reset = useCallback(() => {
    commit(() => createEmptyProgress())
  }, [commit])

  const value = useMemo<ProgressContextValue>(() => {
    const summary = summarise(state, totalSectionCount())

    return {
      state,
      summary,
      reviewQueue: buildReviewQueue(state),
      stageOf: (sectionId) => state.sections[sectionId]?.stage ?? 'not-started',
      completeStep,
      recordAnswer,
      toggleSaved,
      isSaved: (itemId) => state.savedItemIds.includes(itemId),
      reset,
    }
  }, [state, completeStep, recordAnswer, toggleSaved, reset])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const value = useContext(ProgressContext)
  if (!value) throw new Error('useProgress måste användas inom en ProgressProvider')
  return value
}
