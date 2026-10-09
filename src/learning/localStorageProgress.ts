import { createEmptyProgress, type ProgressState, type ProgressStore } from './progress'

const STORAGE_KEY = 'citizense.progress.v1'

/**
 * Placeholder persistence: the learner's progress lives in this browser only.
 *
 * This is deliberately the *only* place that touches localStorage. When the
 * app gets accounts, swap this file for a store that reads and writes rows
 * scoped to the signed-in user – nothing else in the codebase changes.
 */
export function createLocalStorageProgressStore(): ProgressStore {
  const listeners = new Set<() => void>()
  let cache: ProgressState | null = null

  const read = (): ProgressState => {
    if (typeof window === 'undefined') return createEmptyProgress()
    if (cache) return cache
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        cache = createEmptyProgress()
        return cache
      }
      const parsed = JSON.parse(raw) as Partial<ProgressState>
      cache = {
        version: parsed.version ?? 1,
        sections: parsed.sections ?? {},
        recite: parsed.recite ?? {},
        savedItemIds: parsed.savedItemIds ?? [],
      }
      return cache
    } catch {
      // Corrupt or unavailable storage must never break the reading experience.
      cache = createEmptyProgress()
      return cache
    }
  }

  return {
    load: read,
    save(state) {
      cache = state
      if (typeof window === 'undefined') return
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
      } catch {
        // Quota or private-mode failures are non-fatal: the session still works.
      }
      listeners.forEach((listener) => listener())
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}
