import type { QuestionBlock, Section } from '../../content/types'
import { Card } from '../ui/primitives'
import { Badge } from '../ui/primitives'

const KIND_LABEL: Record<QuestionBlock['kind'], string> = {
  recall: 'Faktasvar',
  reflection: 'Reflektera',
}

/**
 * SQ3R step 2: turn the section into questions.
 *
 * The learner is not asked to answer yet — the questions prime the reading that
 * follows. Because they are typed content, the same questions can later feed a
 * practice test or an AI explanation without being rewritten.
 */
export function QuestionStep({ section }: { section: Section }) {
  const recallQuestions = section.questions.filter((question) => question.kind === 'recall')
  const reflectionQuestions = section.questions.filter((question) => question.kind === 'reflection')

  return (
    <div>
      <Card label="Frågor du ska kunna svara på">
        <p>
          Läs igenom frågorna innan du läser avsnittet. De hjälper dig att läsa aktivt: du letar
          efter svaren i stället för att bara läsa igenom texten.
        </p>
        <ul className="theme-list">
          {recallQuestions.map((question) => (
            <li key={question.id}>
              <strong>{question.prompt}</strong>
              {question.lookFor ? <p>{question.lookFor}</p> : null}
            </li>
          ))}
        </ul>
      </Card>

      {reflectionQuestions.length > 0 ? (
        <Card label="Frågor att tänka kring">
          <p className="small muted">
            De här frågorna har inget givet svar i texten. De finns för att koppla avsnittet till
            dina egna erfarenheter.
          </p>
          <ul className="theme-list">
            {reflectionQuestions.map((question) => (
              <li key={question.id}>
                <strong>{question.prompt}</strong>
                <p>
                  <Badge tone="neutral">{KIND_LABEL[question.kind]}</Badge>
                </p>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </div>
  )
}
