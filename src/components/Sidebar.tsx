import { NavLink } from 'react-router-dom'
import { chapters } from '../content'
import { useProgress } from '../learning/ProgressContext'
import { ThemeToggle } from './ThemeToggle'

export function Sidebar() {
  const { stageOf } = useProgress()

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <NavLink to="/">
          <p className="sidebar__title">CitizenSE</p>
          <p className="sidebar__tagline">Studieteknik och repetition inför medborgarskapsprovet</p>
        </NavLink>
      </div>

      <div className="sidebar__section-label">Innehåll</div>

      <nav aria-label="Kapitel">
        <ul className="chapter-list">
          {chapters.map((chapter) => {
            const reviewed = chapter.sections.filter(
              (section) => stageOf(section.id) === 'reviewed',
            ).length

            return (
              <li key={chapter.id}>
                <NavLink
                  to={`/kapitel/${chapter.id}`}
                  className={({ isActive }) =>
                    isActive ? 'chapter-list__link chapter-list__link--active' : 'chapter-list__link'
                  }
                >
                  <span className="chapter-list__order">{chapter.order}</span>
                  <span>
                    {chapter.title}
                    <span className="chapter-list__progress">
                      {reviewed} av {chapter.sections.length} avsnitt klara
                    </span>
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="sidebar__section-label">Repetition</div>
      <ul className="chapter-list">
        <li>
          <NavLink
            to="/repetition"
            className={({ isActive }) =>
              isActive ? 'chapter-list__link chapter-list__link--active' : 'chapter-list__link'
            }
          >
            <span className="chapter-list__order">↻</span>
            <span>Repetera fel svar</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/om"
            className={({ isActive }) =>
              isActive ? 'chapter-list__link chapter-list__link--active' : 'chapter-list__link'
            }
          >
            <span className="chapter-list__order">i</span>
            <span>Om materialet</span>
          </NavLink>
        </li>
      </ul>

      <div className="sidebar__section-label">Utseende</div>
      <div className="sidebar__footer">
        <ThemeToggle />
      </div>
    </aside>
  )
}
