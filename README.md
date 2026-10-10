# CitizenSE UF

Läs- och övningsapp inför medborgarskapsprovet, byggd kring beprövade
studiemetoder: **SQ3R** och repetition.

Allt lärandeinnehåll utgår från UHR:s och Skolverkets officiella utbildningsmaterial
*Sverige i fokus – utbildningsmaterial till medborgarskapsprov*
(1:a upplagan 2026, korrigerad 2026-08-10):
<https://www.uhr.se/globalassets/_uhr.se/medborgarskapsprovet/utbildningsmaterial/sverige-i-fokus_.pdf>

CitizenSE är inte en officiell tjänst från UHR eller Skolverket.

## Vad appen gör

Varje avsnitt i materialet läses i fem steg:

| Steg | Vad användaren gör |
| --- | --- |
| **Översikt** (Survey) | Får en översikt, avsnittets huvudteman och de viktigaste begreppen. |
| **Frågor** (Question) | Får frågor att ha med sig in i läsningen – både faktasvar och reflektionsfrågor. |
| **Läs** (Read) | Läser korta block i klartext. Svåra begrepp förklaras direkt i texten. |
| **Återberätta** (Recite) | Återberättar ur minnet med kort svar, flervalsfrågor eller "förklara med egna ord". |
| **Repetera** (Review) | Får en sammanfattning, ser vilka frågor de svarat fel på och hur det hänger ihop med deras framsteg. |

Repetition är kopplad till dina framsteg: allt som besvaras fel hamnar i en
repetitionslista som nås både från avsnittets sista steg och från den egna vyn
**Repetera**.

## Översättning

Den som ännu inte kan alla svenska ord kan översätta dem direkt i materialet:

- **Dator:** dubbelklicka på ett ord (eller markera en mening).
- **Mobil:** håll in ett ord, eller markera en mening med handtagen.

En liten ruta visar den svenska texten och översättningen tillsammans. Målspråk:
engelska, arabiska, kinesiska (förenklad), finska, turkiska, ukrainska och ryska.
Valet sparas och används nästa gång. Rutan stängs med Escape, krysset eller ett
klick utanför, och arabiska visas från höger till vänster. Rutan ritas utanför
studieinnehållet, så att den inte stör läsningen eller SQ3R-flödet.

Översättningen hämtas av en **serverfunktion** (DeepL) – aldrig direkt av
webbläsaren. Frontend innehåller ingen nyckel. Om tjänsten inte är påslagen visar
rutan ett tydligt meddelande i stället för en gissad översättning.

### Koppla på översättningen

Funktionen behöver en nyckel som bara finns på servern:

| Variabel | Var | Vad |
| --- | --- | --- |
| `DEEPL_API_KEY` | serverhemlighet (aldrig i frontend eller git) | Nyckel från DeepL (den kostnadsfria nivån räcker) |
| `DEEPL_API_URL` | valfri | Endast för egen drift eller tester. Standard är DeepL:s kostnadsfria API. |

- **Lokalt:** starta utvecklingsservern med nyckeln i miljön, till exempel
  `DEEPL_API_KEY=… npm run dev`. Vite monterar då samma serverfunktion på
  `/api/translate` (se `server/vite-translate-plugin.ts`).
- **I produktion:** `functions/api/translate.ts` blir rutten `POST /api/translate`
  när sajten ligger på Cloudflare Pages. Sätt hemligheten i hostingpanelen.
  Samma funktion kan monteras i vilken runtime som helst som stöder `fetch`.

All logik för anropet finns i `server/translate.ts`, så byte av tjänst görs på
ett enda ställe.

## Kom igång

```bash
npm install
npm run dev        # http://localhost:3000
```

Övriga kommandon:

```bash
npm run typecheck  # TypeScript, inga emit
npm test           # innehållsvalidering + render-smoketest
npm run build      # produktionsbygge till dist/
npm run preview    # servera dist/ lokalt
```

`npm test` kör två saker:

- `test:content` – strukturkontroll av allt innehåll (unika id:n, att varje
  flervalsfråga pekar på ett befintligt alternativ, att inget SQ3R-steg är tomt,
  att varje avsnitt har källhänvisning).
- `test:render` – renderar **samtliga 228 routes** genom den riktiga
  komponentträden och kontrollerar att ingen route kraschar eller blir tom,
  inklusive ett scenario med en användare som svarat fel.

## Innehåll

13 kapitel och 37 avsnitt, i samma ordning och med samma rubriker som i
*Sverige i fokus*:

```
1  Landet Sverige                          8  Arbetsmarknad och privatekonomi
2  Sveriges demokratiska system            9  Välfärdssamhället
3  Så här styrs Sverige                   10  Sveriges moderna historia
4  Politiska val och partier              11  Sverige och omvärlden
5  Lag och rätt                           12  En sekulär stat och ett mångreligiöst land
6  Mediernas roll                         13  Traditioner och högtider
7  Mänskliga rättigheter
```

Texterna är **egna sammanfattningar** som följer källans struktur. Varje avsnitt
anger kapitel och sidor i originalet, så att innehållet kan kontrolleras mot
källan – och senare ersättas av den ordagranna texten – utan att något annat
behöver byggas om.

## Arkitektur

```
src/
  content/            Lärandeinnehållet som data
    types.ts          Schemat: Chapter → Section → SQ3R-block
    source.ts         Metadata om UHR-materialet + källhänvisningar
    validate.ts       Strukturkontroller
    index.ts          Registret: uppslag på kapitel- och avsnitts-id
    chapters/         Ett kapitel per fil, ch01…ch13
  learning/           SQ3R-logik och progress – utan koppling till UI
    sq3r.ts           De fem stegen, som data
    progress.ts       ProgressState, ProgressStore, sammanställningar
    localStorageProgress.ts   Placeholder-lagring i webbläsaren
    ProgressContext.tsx       React-bindning
    review.ts         Repetitionskö
    capabilities.ts   Dokumenterade utbyggnadspunkter
  components/
    SectionView.tsx   SQ3R-sidan: stegnavigation + stegens innehåll
    steps/            En komponent per SQ3R-steg
    ReadBlockView.tsx Renderar Read-block (stycke, lista, begrepp, citat …)
  pages/              Start, kapitelöversikt, repetition, om
  smoke/render.tsx    Render-smoketest av alla routes
```

### Varför innehållet är data

`SectionView` innehåller ingen text och inga fakta – den läser `Section`-objektet
och skickar rätt block till rätt steg. Det innebär att:

- nytt innehåll läggs till genom att fylla i befintliga fält, utan kodändringar;
- samma frågor kan senare återanvändas i övningsläge, fullständiga prov eller
  AI-förklaringar, eftersom de redan är typade och har stabila id:n;
- progress sparas på stabila id:n, så att innehållet kan bytas ut utan att
  användarens historik förstörs.

Alla id:n är stabila. **Byt aldrig ett id som redan släppts** – lägg till nya i
stället.

## Utbyggnadspunkter (medvetet inte byggda ännu)

| Funktion | Redo i koden | Nästa steg |
| --- | --- | --- |
| Övningsfrågor per avsnitt | `questions` + `recite` med stabila id:n | Egen frågebank per avsnitt, egen vy utanför läsflödet |
| Framsteg och statistik | `ProgressStore` + `summarise()` | Byt localStorage mot lagring kopplad till inloggad användare |
| Sparade frågor | `ProgressState.savedItemIds` | Vy som läser listan och slår upp innehållet |
| Fullständiga prov | `allSections` + rättningsbara recite-aktiviteter | Provgenerator över flera kapitel |
| Spaced review | `review.ts` bygger repetitionskö | Intervallschema (1, 3, 7, 21 dagar) i `ProgressState` |
| AI-förklaringar | Begrepp har `term` + `explanation` som kontext | Tjänst + autentisering + serverhemlighet för API-nyckel |

Samma lista visas i appen under **Om materialet**.

**Inte implementerat:** AI-genererat innehåll, konton/inloggning, betalningar
eller prenumerationer, fullständiga prov.

## Teknik

Vite 5 · React 18 · TypeScript (strict) · React Router · localStorage.
Inga externa UI- eller tillståndsbibliotek – allt innehåll och all logik är
projektets eget, vilket håller appen enkel att bygga ut och att deploya som
statisk sajt.

Översättningsfunktionen är det enda som behöver en serverfunktion
(`server/translate.ts`), eftersom API-nyckeln aldrig får ligga i frontend.
Resten av appen förblir statisk.
