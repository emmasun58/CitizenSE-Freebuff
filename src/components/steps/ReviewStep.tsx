import { Link } from 'react-router-dom'
import type { Section } from '../../content/types'
import { useProgress } from '../../learning/ProgressContext'
import { Badge, Card, ProgressBar } from '../ui/primitives'

const STAGE_LABEL: Record<string, string> = {
  'not-started': 'Inte påbörjad',
  surveyed: 'Survey klar',
  questioned: 'Question klar',
  read: 'Read klar',
  recited: 'Recite klar',
  reviewed: 'Klar och genomgången',
}

/**
 * SQ3R step 5: summarise and connect back to progress.
 *
 * Two things happen here. First the learner re-reads the most important
 * information as short takeaways. Then they see exactly which questions in this
 * section they missed, and can jump straight back into them.
 */
export function ReviewStep({ section }: { section: Section }) {
  const { state, summary, stageOf } = useProgress()

  const sectionAttempts = section.recite
    .map((item) => ({ item, attempt: state.recite[item.id] }))
    .filter((entry) => entry.attempt !== undefined)

  const missed = sectionAttempts.filter((entry) => !entry.attempt!.correct)
  const answeredCount = sectionAttempts.length
  const correctCount = sectionAttempts.filter((entry) => entry.attempt!.correct).length
  const stage = stageOf(section.id)

  return (
    <div>
      <Card label="Sammanfattning">
        <ul className="theme-list">
          {section.review.keyTakeaways.map((takeaway) => (
            <li key={takeaway}>
              <strong>{takeaway}</strong>
            </li>
          ))}
        </ul>
        {section.review.mostImportant ? (
          <p className="read__note read__note--tip" style={{ marginBottom: 0 }}>
            <strong>Viktigast att komma ihåg: </strong>
            {section.review.mostImportant}
          </p>
        ) : null}
      </Card>

      <Card label="Din progress i det här avsnittet">
        <p className="row" style={{ marginBottom: '0.75rem' }}>
          <Badge tone={stage === 'reviewed' ? 'success' : 'accent'}>{STAGE_LABEL[stage]}</Badge>
          <span className="small muted">
            {answeredCount} av {section.recite.length} repetitionsfrågor besvarade
            {answeredCount > 0 ? ` · ${correctCount} rätt` : ''}
          </span>
        </p>
        <ProgressBar
          percent={section.recite.length === 0 ? 0 : (answeredCount / section.recite.length) * 100}
          label="Frågor besvarade i avsnittet"
        />
        <div style={{ marginTop: '1rem' }}>
          <ProgressBar percent={summary.percentReviewed} label="Avsnitt genomgångna i hela materialet" />
        </div>
      </Card>

      <Card label="Frågor att repetera">
        {missed.length === 0 ? (
          <p style={{ marginBottom: 0 }}>
            {answeredCount === 0
              ? 'Du har inte svarat på några repetitionsfrågor i det här avsnittet ännu. Gå till Recite-steget först.'
              : 'Inga fel i det här avsnittet. Allt du svarat på har varit rätt – bra jobbat.'}
          </p>
        ) : (
          <>
            <p className="small muted">
              De här frågorna svarade du fel på. De ligger också i din gemensamma repetitionskö.
            </p>
            <ul className="theme-list">
              {missed.map(({ item, attempt }) => (
                <li key={item.id}>
                  <strong>{item.prompt}</strong>
                  <p>
                    {attempt!.attemptCount} försök ·{' '}
                    <Link to={`/repetition`}>repetera i repetitionsvyn</Link>
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </Card>

      <Card label="Begrepp att kunna" soft>
        <dl className="concept-list">
          {section.review.glossary.map((concept) => (
            <li key={concept.term}>
              <dt>{concept.term}</dt>
              <dd>{concept.definition}</dd>
            </li>
          ))}
        </dl>
      </Card>
    </div>
  )
}
