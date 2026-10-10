import { useEffect, useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getChapter, getSection } from '../content'
import { useProgress } from '../learning/ProgressContext'
import {
  getStep,
  isSq3rStepId,
  nextStep,
  previousStep,
  SQ3R_STEPS,
  type Sq3rStepId,
} from '../learning/sq3r'
import { StepRail } from './StepRail'
import { QuestionStep } from './steps/QuestionStep'
import { ReadStep } from './steps/ReadStep'
import { ReciteStep } from './steps/ReciteStep'
import { ReviewStep } from './steps/ReviewStep'
import { SurveyStep } from './steps/SurveyStep'
import { Badge } from './ui/primitives'

const STAGE_TO_STEP_INDEX: Record<string, number> = {
  'not-started': 0,
  surveyed: 1,
  questioned: 2,
  read: 3,
  recited: 4,
  reviewed: 5,
}

export function SectionView() {
  const { chapterId, sectionId, stepId } = useParams<{
    chapterId: string
    sectionId: string
    stepId: string
  }>()
  const navigate = useNavigate()
  const { stageOf, completeStep } = useProgress()

  const chapter = chapterId ? getChapter(chapterId) : undefined
  const located = sectionId ? getSection(sectionId) : undefined

  const activeStep: Sq3rStepId = isSq3rStepId(stepId) ? stepId : 'survey'

  // Mark the step as reached as soon as it is opened, which is what drives the
  // stage badges in the sidebar and the progress counters.
  useEffect(() => {
    if (located) completeStep(located.section.id, located.chapter.id, activeStep)
  }, [located, activeStep, completeStep])

  const completedSteps = useMemo<Sq3rStepId[]>(() => {
    if (!located) return []
    const reached = STAGE_TO_STEP_INDEX[stageOf(located.section.id)] ?? 0
    return SQ3R_STEPS.filter((step) => step.order <= reached).map((step) => step.id)
  }, [located, stageOf])

  if (!chapter || !located) {
    return (
      <div className="content">
        <div className="empty">
          <h3>Avsnittet hittades inte</h3>
          <p>Sidan finns inte. Innehållet kan ha ändrats sedan du var här.</p>
          <Link className="btn" to="/">
            Till startsidan
          </Link>
        </div>
      </div>
    )
  }

  const { section } = located
  const step = getStep(activeStep)
  const upcoming = nextStep(activeStep)
  const earlier = previousStep(activeStep)

  const goToStep = (target: Sq3rStepId) => {
    navigate(`/kapitel/${chapter.id}/avsnitt/${section.id}/${target}`)
  }

  const sectionIndex = chapter.sections.findIndex((candidate) => candidate.id === section.id)
  const nextSection = chapter.sections[sectionIndex + 1]

  return (
    <div className="content">
      <nav className="breadcrumb" aria-label="Brödsmulor">
        <Link to="/">Start</Link>
        <span aria-hidden>›</span>
        <Link to={`/kapitel/${chapter.id}`}>Kapitel {chapter.order}</Link>
        <span aria-hidden>›</span>
        <span>{section.title}</span>
      </nav>

      <header className="step-panel__header">
        <h1>{section.title}</h1>
        <p className="small muted">
          Kapitel {chapter.order} · {chapter.title} · Avsnitt {sectionIndex + 1} av{' '}
          {chapter.sections.length}
        </p>
      </header>

      <StepRail activeStep={activeStep} completedSteps={completedSteps} onSelect={goToStep} />

      <div className="row" style={{ marginBottom: '1rem' }}>
        <Badge tone="accent">
          Steg {step.order} av {SQ3R_STEPS.length}: {step.shortTitle}
        </Badge>
      </div>

      <h2>{step.title}</h2>
      <p className="step-panel__guidance" style={{ marginBottom: '1.5rem' }}>
        {step.guidance}
      </p>

      {activeStep === 'survey' ? <SurveyStep section={section} /> : null}
      {activeStep === 'question' ? <QuestionStep section={section} /> : null}
      {activeStep === 'read' ? <ReadStep section={section} /> : null}
      {activeStep === 'recite' ? <ReciteStep section={section} chapterId={chapter.id} /> : null}
      {activeStep === 'review' ? <ReviewStep section={section} /> : null}

      <footer className="step-footer">
        <div className="step-footer__group">
          {earlier ? (
            <button type="button" className="btn" onClick={() => goToStep(earlier.id)}>
              ← {earlier.shortTitle}
            </button>
          ) : null}
          <Link className="btn btn--ghost" to={`/kapitel/${chapter.id}`}>
            Kapitelöversikt
          </Link>
        </div>

        <div className="step-footer__group">
          {upcoming ? (
            <button type="button" className="btn btn--primary" onClick={() => goToStep(upcoming.id)}>
              Nästa: {upcoming.shortTitle} →
            </button>
          ) : nextSection ? (
            <Link
              className="btn btn--primary"
              to={`/kapitel/${chapter.id}/avsnitt/${nextSection.id}/survey`}
            >
              Nästa avsnitt: {nextSection.title} →
            </Link>
          ) : (
            <Link className="btn--primary btn" to="/repetition">
              Repetera dina fel →
            </Link>
          )}
        </div>
      </footer>
    </div>
  )
}
