import type { Section } from '../../content/types'
import { formatSourceRef } from '../../content/source'
import { Card } from '../ui/primitives'

/** SQ3R step 1: give the learner the shape of the section before reading it. */
export function SurveyStep({ section }: { section: Section }) {
  const { survey } = section

  return (
    <div>
      <Card label="Översikt">
        <p className="read__lead">{survey.overview}</p>
        <p className="small muted" style={{ marginBottom: 0 }}>
          Källa: {formatSourceRef(section.source.chapter, section.source.pages)}
        </p>
      </Card>

      <Card label="Huvudteman">
        <ul className="theme-list">
          {survey.themes.map((theme) => (
            <li key={theme.title}>
              <strong>{theme.title}</strong>
              <p>{theme.description}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card label="Viktiga begrepp">
        <p className="small muted">
          Du behöver inte kunna de här begreppen ännu. Läs igenom dem nu, så känner du igen dem när
          du kommer till Read-steget.
        </p>
        <dl className="concept-list">
          {survey.keyConcepts.map((concept) => (
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
