import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  applyTheme,
  persistThemePreference,
  readStoredThemePreference,
  resolveTheme,
  systemTheme,
  type ResolvedTheme,
  type ThemePreference,
} from './theme'

interface ThemeContextValue {
  /** Vad användaren valt (sparas). */
  preference: ThemePreference
  /** Vad som faktiskt ritas just nu. */
  theme: ResolvedTheme
  setPreference(preference: ThemePreference): void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    readStoredThemePreference(),
  )
  const [system, setSystem] = useState<ResolvedTheme>(() => systemTheme())

  // Följ operativsystemet medan preferensen är "System".
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystem(query.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const theme: ResolvedTheme = preference === 'system' ? system : preference

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next)
    persistThemePreference(next)
    applyTheme(resolveTheme(next))
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ preference, theme, setPreference }),
    [preference, theme, setPreference],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme måste användas inom en ThemeProvider')
  return value
}
