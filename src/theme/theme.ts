/**
 * Temapreferens: ljust, mörkt eller system.
 *
 * Vi skiljer på *preferensen* (vad användaren valde, det som sparas) och det
 * *resolverade* temat (vad som faktiskt ritas). Tack vare det fortsätter
 * "System" att följa operativsystemet även efter att användaren valt det.
 *
 * Bara `data-theme` på <html> ändras – CSS-variablerna i global.css sköter
 * resten, så ingen komponent behöver veta vilket tema som är aktivt.
 */

export type ThemePreference = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

/** Måste matcha nyckeln i bootstrap-skriptet i index.html. */
export const THEME_STORAGE_KEY = 'citizense.theme.v1'

export const THEME_OPTIONS: ReadonlyArray<{ id: ThemePreference; label: string }> = [
  { id: 'light', label: 'Ljust' },
  { id: 'dark', label: 'Mörkt' },
  { id: 'system', label: 'System' },
]

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system'
}

/** Läser sparad preferens utan att lita på innehållet i localStorage. */
export function readStoredThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system'
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isThemePreference(raw) ? raw : 'system'
  } catch {
    return 'system'
  }
}

export function systemTheme(): ResolvedTheme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === 'system' ? systemTheme() : preference
}

/** Speglar det resolverade temat på <html> så att CSS och color-scheme byter. */
export function applyTheme(theme: ResolvedTheme): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = theme
}

export function persistThemePreference(preference: ThemePreference): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference)
  } catch {
    // Privat läge eller full kvot: temat fungerar ändå under sessionen.
  }
}
