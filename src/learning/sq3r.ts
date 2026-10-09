/**
 * The SQ3R method, encoded once and reused by the whole reading interface.
 *
 * Keeping the steps as data (rather than hard-coded UI) means the step order,
 * wording and guidance can evolve without touching the components.
 */
export type Sq3rStepId = 'survey' | 'question' | 'read' | 'recite' | 'review'

export interface Sq3rStep {
  id: Sq3rStepId
  /** Number shown in the step rail. */
  order: number
  title: string
  /** Short label used in compact navigation. */
  shortTitle: string
  /** One-line explanation of what the learner does in this step. */
  guidance: string
}

export const SQ3R_STEPS: Sq3rStep[] = [
  {
    id: 'survey',
    order: 1,
    title: 'Survey – skaffa översikt',
    shortTitle: 'Survey',
    guidance:
      'Läs översikten, temana och nyckelbegreppen först. Du behöver inte förstå allt – målet är att veta vad avsnittet handlar om.',
  },
  {
    id: 'question',
    order: 2,
    title: 'Question – ställ frågor',
    shortTitle: 'Question',
    guidance:
      'Gör om rubriker och teman till frågor. Frågorna blir din guide när du sedan läser – du letar aktivt efter svaren.',
  },
  {
    id: 'read',
    order: 3,
    title: 'Read – läs avsnittet',
    shortTitle: 'Read',
    guidance:
      'Läs i korta delar och stanna vid svåra begrepp. Svåra ord förklaras direkt i texten.',
  },
  {
    id: 'recite',
    order: 4,
    title: 'Recite – återberätta',
    shortTitle: 'Recite',
    guidance:
      'Svara utan att titta i texten. Är du osäker går du tillbaka till Read – det är så minnet byggs.',
  },
  {
    id: 'review',
    order: 5,
    title: 'Review – sammanfatta och repetera',
    shortTitle: 'Review',
    guidance:
      'Läs sammanfattningen och gå igenom de frågor du svarat fel på. Repetitionen kopplas till din progress.',
  },
]

export function getStep(stepId: Sq3rStepId): Sq3rStep {
  const step = SQ3R_STEPS.find((candidate) => candidate.id === stepId)
  if (!step) throw new Error(`Okänt SQ3R-steg: ${stepId}`)
  return step
}

export function nextStep(stepId: Sq3rStepId): Sq3rStep | undefined {
  const current = getStep(stepId)
  return SQ3R_STEPS.find((step) => step.order === current.order + 1)
}

export function previousStep(stepId: Sq3rStepId): Sq3rStep | undefined {
  const current = getStep(stepId)
  return SQ3R_STEPS.find((step) => step.order === current.order - 1)
}

export function isSq3rStepId(value: string | undefined): value is Sq3rStepId {
  return SQ3R_STEPS.some((step) => step.id === value)
}
