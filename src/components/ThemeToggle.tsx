import { THEME_OPTIONS } from '../theme/theme'
import { useTheme } from '../theme/ThemeContext'

/** Segmented control: Ljust / Mörkt / System. Valet sparas i localStorage. */
export function ThemeToggle() {
  const { preference, setPreference } = useTheme()

  return (
    <div className="theme-toggle" role="group" aria-label="Färgtema">
      {THEME_OPTIONS.map((option) => {
        const active = option.id === preference
        return (
          <button
            key={option.id}
            type="button"
            className={
              active
                ? 'theme-toggle__option theme-toggle__option--active'
                : 'theme-toggle__option'
            }
            aria-pressed={active}
            onClick={() => setPreference(option.id)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
