import { Link, useParams } from 'react-router-dom'
import { getChapter } from '../content'
import { formatSourceRef } from '../content/source'
import { useProgress } from '../learning/ProgressContext'
import { Badge, Card, ProgressBar } from '../components/ui/primitives'

const STAGE_LABEL: Record<string, { text: string; tone: 'neutral' | 'accent' | 'success' }> = {
  'not-started': { text: 'Inte påbörjad', tone: 'neutral' },
  surveyed: { text: 'Översikt klar', tone: 'accent' },
  questioned: { text: 'Frågor klara', tone: 'accent' },
  read: { text: 'Har läst', tone: 'accent' },
  recited: { text: 'Återberättat', tone: 'accent' },
  reviewed: { text: 'Genomgången', tone: 'success' },
}

export function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>()
  const { stageOf } = useProgress()
  const chapter = chapterId ? getChapter(chapterId) : undefined

  if (!chapter) {
    return (
      <div className="content">
        <div className="empty">
          <h3>Kapitlet hittades inte</h3>
          <Link className="btn" to="/">
            Till startsidan
          </Link>
        </div>
      </div>
    )
  }

  const reviewed = chapter.sections.filter((section) => stageOf(section.id) === 'reviewed').length
  const percent = Math.round((reviewed / chapter.sections.length) * 100)

  return (
    <div className="content">
      <nav className="breadcrumb" aria-label="Brödsmulor">
        <Link to="/">Start</Link>
        <span aria-hidden>›</span>
        <span>Kapitel {chapter.order}</span>
      </nav>

      <header style={{ marginBottom: '1.5rem' }}>
        <h1>
          {chapter.order}. {chapter.title}
        </h1>
        <p className="muted" style={{ maxWidth: 'var(--measure)' }}>
          {chapter.intro}
        </p>
        <p className="small muted">{formatSourceRef(chapter.source.chapter, chapter.source.pages)}</p>
      </header>

      <Card label="Lärandemål">
        <ul style={{ marginBottom: 0 }}>
          {chapter.learningGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </Card>

      <Card label="Dina framsteg i kapitlet">
        <ProgressBar percent={percent} label={`${reviewed} av ${chapter.sections.length} avsnitt`} />
      </Card>

      <Card label="Avsnitt">
        <ol className="section-list">
          {chapter.sections.map((section, index) => {
            const stage = stageOf(section.id)
            const label = STAGE_LABEL[stage]
            return (
              <li key={section.id} className="section-list__item">
                <div>
                  <Link
                    className="section-list__title"
                    to={`/kapitel/${chapter.id}/avsnitt/${section.id}/survey`}
                  >
                    {index + 1}. {section.title}
                  </Link>
                  <div className="section-list__meta">
                    {section.source.pages.length > 0
                      ? `s. ${Math.min(...section.source.pages)}–${Math.max(...section.source.pages)} · `
                      : ''}
                    {section.questions.length} frågor · {section.recite.length} övningsuppgifter
                  </div>
                </div>
                <div className="section-list__right">
                  <Badge tone={label.tone}>{label.text}</Badge>
                  <Link
                    className="btn btn--small"
                    to={`/kapitel/${chapter.id}/avsnitt/${section.id}/survey`}
                  >
                    Öppna
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      </Card>
    </div>
  )
}
