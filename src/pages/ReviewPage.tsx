import { Link } from 'react-router-dom'
import { useProgress } from '../learning/ProgressContext'
import { Card, ProgressBar, Stat } from '../components/ui/primitives'
import { ReciteStep } from '../components/steps/ReciteStep'
import { sectionsNeedingReview } from '../learning/review'
import { getSection } from '../content'

/**
 * Standalone review surface.
 *
 * This is where the "review questions you previously got wrong" part of SQ3R
 * lives outside a single section. It reuses the Recite activities (same items,
 * same ids, same progress records) so a corrected answer here immediately
 * updates the learner's accuracy everywhere.
 */
export function ReviewPage() {
  const { summary, state, reviewQueue } = useProgress()

  const sectionIds = sectionsNeedingReview(state)
  const sections = sectionIds
    .map((sectionId) => getSection(sectionId))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== undefined)

  return (
    <div className="content">
      <nav className="breadcrumb" aria-label="Brödsmulor">
        <Link to="/">Start</Link>
        <span aria-hidden>›</span>
        <span>Repetition</span>
      </nav>

      <h1>Repetera</h1>
      <p className="muted" style={{ maxWidth: 'var(--measure)' }}>
        Här samlas alla frågor du svarat fel på. Svarar du rätt här försvinner frågan från
        listan.
      </p>

      <div className="stat-grid">
        <Stat value={reviewQueue.length} label="Frågor att repetera" />
        <Stat value={sections.length} label="Avsnitt berörda" />
        <Stat value={summary.totalAnswers} label="Svar totalt" />
        <Stat value={`${summary.accuracy} %`} label="Andel rätt" />
      </div>

      <Card label="Dina framsteg totalt">
        <ProgressBar percent={summary.percentReviewed} label="Avsnitt genomgångna" />
        <p className="small muted" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
          {summary.sectionsReviewed} av {summary.totalSections} avsnitt är genomgångna.
        </p>
      </Card>

      {reviewQueue.length === 0 ? (
        <div className="empty">
          <h3>Inget att repetera just nu</h3>
          <p>
            När du svarar fel på en repetitionsfråga hamnar den här. Läs vidare i ett avsnitt så
            bygger du upp en repetitionskö.
          </p>
          <Link className="btn btn--primary" to="/">
            Till startsidan
          </Link>
        </div>
      ) : (
        sections.map(({ chapter, section }) => {
          const missedHere = reviewQueue.filter((entry) => entry.sectionId === section.id)
          // Only render the items that actually need repeating, in the order of
          // the section so the learner keeps the original context.
          const itemsToRepeat = section.recite.filter((item) =>
            missedHere.some((entry) => entry.item.id === item.id),
          )

          return (
            <section key={section.id} style={{ marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '0.25rem' }}>{section.title}</h2>
              <p className="small muted" style={{ marginBottom: '1rem' }}>
                Kapitel {chapter.order}: {chapter.title} · {missedHere.length} frågor att repetera ·{' '}
                <Link to={`/kapitel/${chapter.id}/avsnitt/${section.id}/read`}>
                  läs avsnittet igen
                </Link>
              </p>
              <ReciteStep
                section={{ ...section, recite: itemsToRepeat }}
                chapterId={chapter.id}
              />
            </section>
          )
        })
      )}
    </div>
  )
}
