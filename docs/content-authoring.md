# Så lägger du in innehåll från "Sverige i fokus"

Den här guiden riktar sig till den som ska fylla på eller ersätta lärandeinnehållet.
Ingen React-kunskap behövs – allt innehåll är data.

Källan är UHR:s och Skolverkets *Sverige i fokus – utbildningsmaterial till
medborgarskapsprov* (1:a upplagan 2026, korrigerad 2026-08-10).

> **Om texten:** avsnittens `read`-block är egna sammanfattningar som följer
> källans kapitel och avsnitt, med kapitel- och sidhänvisning i `source`.
> Vill ni i stället använda originaltexten ordagrant är det bara att byta ut
> `read`-blocken – strukturen ändras inte. Kontrollera i så fall att ni har rätt
> att återge texten i er tjänst, och sätt `SOURCE_DOCUMENT.verbatimImported`
> till `true` i `src/content/source.ts`.

## 1. Hitta rätt fil

Ett kapitel = en fil i `src/content/chapters/`:

| Kapitel | Fil |
| --- | --- |
| 1 Landet Sverige | `ch01-landet-sverige.ts` |
| 2 Sveriges demokratiska system | `ch02-demokratiska-systemet.ts` |
| 3 Så här styrs Sverige | `ch03-sa-styrs-sverige.ts` |
| 4 Politiska val och partier | `ch04-politiska-val.ts` |
| 5 Lag och rätt | `ch05-lag-och-ratt.ts` |
| 6 Mediernas roll | `ch06-mediernas-roll.ts` |
| 7 Mänskliga rättigheter | `ch07-manskliga-rattigheter.ts` |
| 8 Arbetsmarknad och privatekonomi | `ch08-arbetsmarknad-privatekonomi.ts` |
| 9 Välfärdssamhället | `ch09-valfardssamhallet.ts` |
| 10 Sveriges moderna historia | `ch10-moderna-historien.ts` |
| 11 Sverige och omvärlden | `ch11-sverige-omvarlden.ts` |
| 12 En sekulär stat och ett mångreligiöst land | `ch12-sekular-stat.ts` |
| 13 Traditioner och högtider | `ch13-traditioner.ts` |

## 2. Ett avsnitt har fem delar – en per SQ3R-steg

```ts
{
  id: 'ch01-geografi-klimat-natur',   // STABILT – ändra aldrig i efterhand
  title: 'Geografi, klimat och natur',
  source: { chapter: 1, pages: [5, 6] },   // kapitel + sidor i originalet

  // 1. SURVEY – översikt, teman, nyckelbegrepp
  survey: {
    overview: '…',                  // 1–3 meningar om vad avsnittet handlar om
    themes: [{ title, description }],
    keyConcepts: [{ term, definition, explanation? }],
  },

  // 2. QUESTION – frågor att ha med in i läsningen
  questions: [{ id, prompt, kind: 'recall' | 'reflection', lookFor? }],

  // 3. READ – själva läsmaterialet, i korta block
  read: [ /* se blocktyperna nedan */ ],

  // 4. RECITE – återberätta ur minnet
  recite: [ /* se aktivitetstyperna nedan */ ],

  // 5. REVIEW – sammanfattning + begrepp + det viktigaste
  review: { keyTakeaways: [], mostImportant?, glossary: [] },
}
```

## 3. Read-block

Varje block är ett stycke text på skärmen. Håll dem korta – SQ3R vinner på att
läsningen är fokuserad.

| Typ | Används till |
| --- | --- |
| `{ kind: 'lead' }` | Ingressen. En per avsnitt, först. |
| `{ kind: 'paragraph', text }` | Vanligt stycke. |
| `{ kind: 'list', items, ordered? }` | Punktlista eller numrerad lista. |
| `{ kind: 'concept', term, explanation }` | Svårt begrepp som förklaras där det dyker upp. |
| `{ kind: 'example', title?, text }` | Konkret exempel som fäster en abstrakt regel. |
| `{ kind: 'quote', text, citation }` | Kort citat ur källan. **Citation krävs alltid.** |
| `{ kind: 'note', tone: 'info' \| 'tip' \| 'warn', text }` | Faktaruta, tips eller varning. |

Exempel:

```ts
read: [
  { kind: 'lead', text: 'Sverige ligger i Norden i norra Europa.' },
  {
    kind: 'concept',
    term: 'Golfströmmen',
    explanation: 'En varm havsström som transporterar varmt vatten från Mexikanska golfen.',
  },
  { kind: 'note', tone: 'warn', text: 'Utsläppen ska vara nära noll år 2045.' },
]
```

## 4. Recite-aktiviteter

Tre typer. Blanda dem – variationen är en del av metoden.

```ts
// Flervalsfråga
{
  kind: 'multiple-choice',
  id: 'ch01-geo-r2',
  prompt: 'Varför har Sverige ett milt klimat?',
  options: [{ id: 'a', text: '…' }, { id: 'b', text: '…' }],
  correctOptionId: 'b',           // måste finnas bland options
  explanation: '…',               // visas efter svaret
}

// Kortsvar – jämförs tolerant (skiftläge, skiljetecken, delsträngar)
{
  kind: 'short-answer',
  id: 'ch01-geo-r1',
  prompt: 'Vilka fem länder ingår i Norden?',
  acceptedAnswers: ['danmark finland island norge sverige'],   // minst ett krav
  modelAnswer: 'Danmark, Finland, Island, Norge och Sverige.',
}

// "Förklara med egna ord" – självbedömning mot en checklista
{
  kind: 'explain',
  id: 'ch01-geo-r4',
  prompt: 'Förklara hur istiden format Sveriges natur.',
  checklist: ['…', '…'],          // punkter användaren bockar av
  modelAnswer: '…',
}
```

Tips för kortsvar: skriv `acceptedAnswers` med gemener och utan skiljetecken,
och lägg in den kortaste rimliga formuleringen samt en längre variant.

## 5. Id-regler

Id:n är vad progress och repetition hänger på.

- Avsnitt: `<kapitel>-<kortnamn>`, t.ex. `ch05-grundlagarna`.
- Frågor: `<avsnitts-id>-q<nummer>`.
- Recite: `<avsnitts-id>-r<nummer>`.
- **Ett id som en gång släppts får aldrig återanvändas eller ändras.**
  Lägg till nya i stället. Annars tappar användaren sin historik för just den
  frågan.

## 6. Kvalitetskrav

Kör `npm test` innan du är klar. Kontrollen underkänner:

- dubblerade kapitel-, avsnitts- eller recite-id:n;
- `correctOptionId` som inte matchar något `options[].id`;
- tomma SQ3R-steg (`read`, `questions`, `recite`, `survey.themes`,
  `survey.keyConcepts` eller `review.keyTakeaways`);
- avsnitt utan `source.pages`;
- `source.chapter` som inte matchar kapitlets `order`;
- flervalsfrågor med färre än två alternativ.

`npm run test:render` renderar dessutom varje route och varje SQ3R-steg för att
fånga krascher och tomma sidor.

## 7. Innehållsprinciper

1. **Källan är sanningen.** Hitta inte på fakta och skriv inget som motsäger
   *Sverige i fokus*.
2. **Hänvisa alltid.** Varje avsnitt ska ha kapitel och sidor i `source`.
3. **En sak per stycke.** Dela hellre upp i fler block än skriv en lång vägg av text.
4. **Förklara svåra begrepp på plats** med `concept`, i klartext och på svenska.
5. **Fråga om både fakta och reflektion.** `recall` för sådant som står i texten,
   `reflection` för att koppla till läsarens eget liv.
6. **Review ska innehålla det viktigaste** – inte en andra läsning av texten.
7. **Nämn årtal och siffror explicit.** De är det provet prövar.
