import { Link } from 'react-router-dom'
import { allSections, chapters, totalSectionCount } from '../content'
import { SOURCE_ATTRIBUTION, SOURCE_DOCUMENT } from '../content/source'
import { useProgress } from '../learning/ProgressContext'
import { SQ3R_STEPS } from '../learning/sq3r'
import { NOT_IMPLEMENTED_YET } from '../learning/capabilities'
import { Badge, Card, ProgressBar, Stat } from '../components/ui/primitives'

export function HomePage() {
  const { summary, stageOf, reset } = useProgress()

  // The first section the learner has not finished yet — a concrete next step.
  const nextUp = allSections.find((entry) => stageOf(entry.section.id) !== 'reviewed')

  return (
    <div className="content">
      <section className="hero">
        <p className="hero__eyebrow">Medborgarskapsprovet</p>
        <h1>Lär dig det svenska samhället – med en metod som gör att det fastnar</h1>
        <p className="hero__lead">
          CitizenSE kombinerar effektiva studiemetoder, som SQ3R och spaced repetition, med
          gamification för att göra lärandet roligare och hjälpa dig att minnas mer. Innehållet
          följer UHR:s utbildningsmaterial <em>Sverige i fokus</em>.
        </p>
        <div className="row">
          {nextUp ? (
            <Link
              className="btn btn--primary"
              to={`/kapitel/${nextUp.chapter.id}/avsnitt/${nextUp.section.id}/survey`}
            >
              Fortsätt: {nextUp.section.title} →
            </Link>
          ) : (
            <Link className="btn btn--primary" to="/repetition">
              Allt är genomgånget – repetera dina fel →
            </Link>
          )}
          <Link className="btn" to={`/kapitel/${chapters[0].id}`}>
            Börja från kapitel 1
          </Link>
        </div>
      </section>

      <p className="source-note">
        <strong>Källa till allt innehåll:</strong> {SOURCE_DOCUMENT.publisher}.{' '}
        {SOURCE_DOCUMENT.title}, {SOURCE_DOCUMENT.edition}.{' '}
        <a href={SOURCE_DOCUMENT.url} target="_blank" rel="noreferrer">
          Öppna originalet hos UHR
        </a>
        . Texterna i CitizenSE är sammanfattningar som följer källans kapitel och avsnitt; varje
        avsnitt anger kapitel och sidor. Provet baseras på UHR:s material.
      </p>

      <div className="stat-grid">
        <Stat value={chapters.length} label="Kapitel" />
        <Stat value={totalSectionCount()} label="Avsnitt" />
        <Stat value={`${summary.percentReviewed} %`} label="Avsnitt genomgångna" />
        <Stat value={summary.totalAnswers} label="Repetitionssvar" />
        <Stat value={`${summary.accuracy} %`} label="Andel rätt" />
      </div>

      <Card label="Så arbetar du igenom ett avsnitt">
        <ol>
          {SQ3R_STEPS.map((step) => (
            <li key={step.id}>
              <strong>{step.title}</strong>
              <div className="small muted">{step.guidance}</div>
            </li>
          ))}
        </ol>
      </Card>

      {summary.sectionsStarted > 0 ? (
        <Card label="Din progress">
          <ProgressBar percent={summary.percentReviewed} label="Avsnitt genomgångna" />
          <p className="small muted" style={{ marginTop: '0.9rem' }}>
            {summary.sectionsReviewed} av {summary.totalSections} avsnitt är genomgångna.{' '}
            {summary.itemsToReview > 0
              ? `${summary.itemsToReview} frågor väntar på repetition.`
              : 'Inga fel att repetera just nu.'}
          </p>
          <div className="row">
            <Link className="btn" to="/repetition">
              Till repetitionen
            </Link>
            <button type="button" className="btn btn--ghost" onClick={reset}>
              Nollställ min progress
            </button>
          </div>
        </Card>
      ) : null}

      <Card label="Kapitel" soft>
        <ol className="section-list">
          {chapters.map((chapter) => {
            const reviewed = chapter.sections.filter(
              (section) => stageOf(section.id) === 'reviewed',
            ).length
            return (
              <li key={chapter.id} className="section-list__item">
                <div>
                  <Link className="section-list__title" to={`/kapitel/${chapter.id}`}>
                    {chapter.order}. {chapter.title}
                  </Link>
                  <div className="section-list__meta">
                    {chapter.sections.length} avsnitt · kapitel {chapter.source.chapter} i ”Sverige i
                    fokus”
                  </div>
                </div>
                <div className="section-list__right">
                  <Badge tone={reviewed === chapter.sections.length ? 'success' : 'neutral'}>
                    {reviewed}/{chapter.sections.length}
                  </Badge>
                </div>
              </li>
            )
          })}
        </ol>
      </Card>

      <Card label="Ännu inte byggt" soft>
        <p className="small muted">
          Det här är avsiktligt kvar till senare. Innehållsstrukturen är förberedd för dem.
        </p>
        <ul className="small muted">
          {NOT_IMPLEMENTED_YET.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="small muted" style={{ marginBottom: 0 }}>
          {SOURCE_ATTRIBUTION}
        </p>
      </Card>
    </div>
  )
}
