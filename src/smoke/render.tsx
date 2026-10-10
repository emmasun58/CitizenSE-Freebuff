import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { App } from '../App'
import { allSections } from '../content'
import {
  createEmptyProgress,
  type ProgressState,
  type ProgressStore,
} from '../learning/progress'
import { SQ3R_STEPS } from '../learning/sq3r'

/** In-memory store so the smoke test never touches browser storage. */
function createMemoryStore(): ProgressStore {
  let state: ProgressState = createEmptyProgress()
  return {
    load: () => state,
    save: (next) => {
      state = next
    },
    subscribe: () => () => {},
  }
}

function renderAt(path: string, store: ProgressStore, seed?: ProgressState): string {
  if (seed) store.save(seed)
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <App progressStore={store} />
    </MemoryRouter>,
  )
}

/** A state where one item in the first section was answered incorrectly. */
function seedWithWrongAnswer(): { state: ProgressState; prompt: string; sectionId: string } {
  const first = allSections[0]
  const item = first.section.recite[0]
  const state = createEmptyProgress()
  state.recite[item.id] = {
    itemId: item.id,
    sectionId: first.section.id,
    chapterId: first.chapter.id,
    correct: false,
    attemptCount: 1,
    lastAnsweredAt: new Date(0).toISOString(),
  }
  state.sections[first.section.id] = { stage: 'recited', updatedAt: new Date(0).toISOString() }
  return { state, prompt: item.prompt, sectionId: first.section.id }
}

export interface SmokeResult {
  checked: number
  failures: { path: string; reason: string }[]
}

/**
 * Renders every route a learner can reach and asserts that the output contains
 * the text that route is supposed to show. This is the interface-level check:
 * it catches crashes, broken ids and empty SQ3R steps without a browser.
 */
export function runSmokeRender(): SmokeResult {
  const failures: SmokeResult['failures'] = []
  let checked = 0
  const store = createMemoryStore()

  const check = (path: string, expected: string[], seed?: ProgressState) => {
    checked += 1
    try {
      const html = renderAt(path, store, seed)
      for (const needle of expected) {
        if (!html.includes(needle)) {
          failures.push({ path, reason: `Saknar text: "${needle}"` })
          return
        }
      }
      if (html.trim().length < 500) {
        failures.push({ path, reason: `Misstänkt kort sida (${html.trim().length} tecken)` })
      }
    } catch (error) {
      failures.push({ path, reason: `Kraschade: ${(error as Error).message}` })
    }
  }

  // Fresh learner: no progress anywhere.
  check('/', ['CitizenSE', 'SQ3R', 'Kapitel', 'Färgtema', 'Ljust', 'Mörkt', 'System'])
  check('/repetition', ['Repetera', 'Inget att repetera just nu'])
  check('/om', ['SQ3R', 'Sverige i fokus', 'Färgtema', 'Översättning'])

  // Every chapter overview and every SQ3R step of every section.
  for (const { chapter, section } of allSections) {
    check(`/kapitel/${chapter.id}`, [chapter.title, section.title, 'Lärandemål'])
    for (const step of SQ3R_STEPS) {
      const expected = [step.title, section.title]
      // Read-steget visar ledtråden för översättningsfunktionen.
      if (step.id === 'read') expected.push('dubbelklicka')
      check(`/kapitel/${chapter.id}/avsnitt/${section.id}/${step.id}`, expected)
    }
  }

  // Returning learner who missed a question: Review must show it, and the
  // Review step must list it as something to repeat.
  const seeded = seedWithWrongAnswer()
  check('/repetition', [seeded.prompt, 'Repetera'], seeded.state)
  // The seeded section is at stage "recited", so its badge must say so.
  check('/kapitel/ch01', ['Återberättat', 'avsnitt'], seeded.state)
  check(
    `/kapitel/${allSections[0].chapter.id}/avsnitt/${seeded.sectionId}/review`,
    [seeded.prompt, 'Dina framsteg i det här avsnittet'],
    seeded.state,
  )

  return { checked, failures }
}
