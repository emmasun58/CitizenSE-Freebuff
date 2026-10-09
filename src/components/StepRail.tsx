import { SQ3R_STEPS, type Sq3rStepId } from '../learning/sq3r'

interface StepRailProps {
  activeStep: Sq3rStepId
  completedSteps: Sq3rStepId[]
  onSelect: (step: Sq3rStepId) => void
}

/**
 * The SQ3R navigation.
 *
 * Steps stay visible and clickable so the learner can move back and forth —
 * SQ3R is a loop, not a one-way wizard, and "Recite" often sends you back to
 * "Read".
 */
export function StepRail({ activeStep, completedSteps, onSelect }: StepRailProps) {
  return (
    <ol className="step-rail">
      {SQ3R_STEPS.map((step) => {
        const isActive = step.id === activeStep
        const isDone = completedSteps.includes(step.id)
        const classes = [
          'step-rail__button',
          isActive ? 'step-rail__button--active' : '',
          isDone && !isActive ? 'step-rail__button--done' : '',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <li key={step.id} className="step-rail__item">
            <button
              type="button"
              className={classes}
              onClick={() => onSelect(step.id)}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="step-rail__index">{step.order}</span>
              <span className="step-rail__label">
                {step.shortTitle}
                <span className="sr-only"> – {step.title}</span>
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
