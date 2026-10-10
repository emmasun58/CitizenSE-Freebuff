/**
 * Extension points for the rest of CitizenSE.
 *
 * The content schema was designed so that each of these features can be added
 * *on top of* the existing chapters and sections, without restructuring the
 * content or the SQ3R flow. Each entry records what already exists today and
 * what the next step is, so nobody has to guess where a feature belongs.
 */
export interface Capability {
  id: string
  title: string
  status: 'seam-ready' | 'not-started'
  /** What already exists in the codebase to build on. */
  readyInCode: string
  /** What the next implementer needs to add. */
  nextStep: string
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'practice-questions',
    title: 'Övningsfrågor per avsnitt',
    status: 'seam-ready',
    readyInCode:
      'Varje avsnitt har redan `questions` (steget Frågor) och `recite`-aktiviteter med stabila id:n.',
    nextStep:
      'Lägg till fler frågor per avsnitt i `Section` och visa dem i en egen vy utanför läsflödet.',
  },
  {
    id: 'progress-tracking',
    title: 'Framsteg och statistik',
    status: 'seam-ready',
    readyInCode:
      '`src/learning/progress.ts` samlar allt om framsteg: ProgressState, ProgressStore och sammanställningar per avsnitt.',
    nextStep:
      'Byt ut `localStorageProgress` mot en lagring som hör ihop med den inloggade användaren, så att var och en bara ser sina egna framsteg.',
  },
  {
    id: 'saved-questions',
    title: 'Sparade frågor',
    status: 'seam-ready',
    readyInCode: 'ProgressState har `savedItemIds`, och varje recite-aktivitet har ett stabilt id.',
    nextStep: 'Bygg en "Sparade frågor"-vy som läser `savedItemIds` och slår upp innehållet via sektions-id.',
  },
  {
    id: 'practice-tests',
    title: 'Fullständiga prov',
    status: 'seam-ready',
    readyInCode:
      'Alla avsnitt är uppräknade i `allSections`, och recite-aktiviteterna är typade och rättningsbara.',
    nextStep:
      'Skapa en provgenerator som drar ett urval av recite-aktiviteter över flera kapitel och rättar dem i en klumpsumma.',
  },
  {
    id: 'spaced-review',
    title: 'Spaced review',
    status: 'seam-ready',
    readyInCode:
      '`src/learning/review.ts` bygger en repetitionskö av felbesvarade aktiviteter, sorterad på senaste försök.',
    nextStep:
      'Byt ut sorteringen mot fasta intervall (till exempel 1, 3, 7 och 21 dagar) och spara nästa repetitionsdatum i ProgressState.',
  },
  {
    id: 'ai-explanations',
    title: 'AI-förklaringar',
    status: 'not-started',
    readyInCode:
      'Varje begrepp har `term` och `explanation`, vilket ger AI:n exakt kontext att utgå ifrån.',
    nextStep:
      'Lägg till en tjänst som skickar begreppet plus källhänvisningen till en modell. Kräver autentisering och API-nyckel som serverhemlighet. Inte implementerat.',
  },
]

export const NOT_IMPLEMENTED_YET = [
  'AI-genererat innehåll',
  'Konton och inloggning',
  'Betalningar eller prenumerationer',
  'Fullständiga prov',
] as const
