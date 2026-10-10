/**
 * Målspråk för översättningsfunktionen.
 *
 * Listan är avsiktligt kort och fast: sju språk som är vanliga bland personer
 * som lär sig svenska inför medborgarskapsprovet. Nya språk läggs till här –
 * frontend och serverfunktionen håller sig automatiskt i synk eftersom båda
 * utgår från samma id:n.
 *
 * `direction` behövs för att arabiska ska visas korrekt från höger till vänster.
 */

export type TargetLanguageId = 'en' | 'ar' | 'zh' | 'fi' | 'tr' | 'uk' | 'ru'

export interface TargetLanguage {
  id: TargetLanguageId
  /** Namnet på svenska, som användaren ser i listan. */
  label: string
  /** Namnet på språket självt, så att det känns igen direkt. */
  nativeName: string
  /** Textriktning. Arabiska skrivs från höger till vänster. */
  direction: 'ltr' | 'rtl'
  /** BCP-47-kod för `lang`-attributet, så att skärmläsare och typsnitt blir rätt. */
  tag: string
}

export const TARGET_LANGUAGES: readonly TargetLanguage[] = [
  { id: 'en', label: 'Engelska', nativeName: 'English', direction: 'ltr', tag: 'en' },
  { id: 'ar', label: 'Arabiska', nativeName: 'العربية', direction: 'rtl', tag: 'ar' },
  { id: 'zh', label: 'Kinesiska (förenklad)', nativeName: '简体中文', direction: 'ltr', tag: 'zh-Hans' },
  { id: 'fi', label: 'Finska', nativeName: 'Suomi', direction: 'ltr', tag: 'fi' },
  { id: 'tr', label: 'Turkiska', nativeName: 'Türkçe', direction: 'ltr', tag: 'tr' },
  { id: 'uk', label: 'Ukrainska', nativeName: 'Українська', direction: 'ltr', tag: 'uk' },
  { id: 'ru', label: 'Ryska', nativeName: 'Русский', direction: 'ltr', tag: 'ru' },
] as const

/** Engelska är förvalt, eftersom det är det mest använda andraspråket. */
export const DEFAULT_TARGET_LANGUAGE: TargetLanguageId = 'en'

/** Sparas i localStorage. Ändra inte nyckeln i onödan – då tappas valet. */
export const TRANSLATION_STORAGE_KEY = 'citizense.translate.target.v1'

export function isTargetLanguageId(value: unknown): value is TargetLanguageId {
  return TARGET_LANGUAGES.some((language) => language.id === value)
}

export function getTargetLanguage(id: TargetLanguageId): TargetLanguage {
  const language = TARGET_LANGUAGES.find((candidate) => candidate.id === id)
  if (!language) throw new Error(`Okänt målspråk: ${id}`)
  return language
}

/** Läser sparat val utan att lita på innehållet i localStorage. */
export function readStoredTargetLanguage(): TargetLanguageId {
  if (typeof window === 'undefined') return DEFAULT_TARGET_LANGUAGE
  try {
    const raw = window.localStorage.getItem(TRANSLATION_STORAGE_KEY)
    return isTargetLanguageId(raw) ? raw : DEFAULT_TARGET_LANGUAGE
  } catch {
    return DEFAULT_TARGET_LANGUAGE
  }
}

export function persistTargetLanguage(id: TargetLanguageId): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(TRANSLATION_STORAGE_KEY, id)
  } catch {
    // Privat läge eller full kvot: valet fungerar ändå under sessionen.
  }
}
