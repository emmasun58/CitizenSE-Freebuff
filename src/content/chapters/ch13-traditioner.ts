import type { Chapter } from '../types'

export const chapter13: Chapter = {
  id: 'ch13',
  order: 13,
  title: 'Traditioner och högtider',
  intro:
    'Kapitlet handlar om traditionella högtider i Sverige. Traditioner är ett sätt för människor att fira tillsammans och att markera viktiga tidpunkter under året. Men traditionerna förändras också i takt med samhället.',
  learningGoals: [
    'Förklara vad traditioner har för funktion i ett samhälle.',
    'Känna igen de vanligaste svenska högtiderna och när de firas.',
    'Veta vad som brukar känneteckna firandet av varje högtid.',
    'Förstå att traditioner förändras och att nya traditioner kommer till.',
  ],
  source: { chapter: 13, pages: [45, 46, 47] },
  sections: [
    {
      id: 'ch13-hogtider-under-aret',
      title: 'Några traditionella högtider under året',
      source: { chapter: 13, pages: [45, 46, 47] },
      survey: {
        overview:
          'Avsnittet går igenom de viktigaste svenska högtiderna under året – från nyår och påsk till midsommar, Lucia och jul – och vad som brukar känneteckna firandet.',
        themes: [
          {
            title: 'Traditioner förändras',
            description:
              'Många traditioner har rötter i kristendomen eller ännu tidigare, men firas i dag på nya sätt.',
          },
          {
            title: 'Vårens högtider',
            description: 'Påsk, valborgsmässoafton, första maj och Sveriges nationaldag.',
          },
          {
            title: 'Sommarens högtid',
            description: 'Midsommar – då man välkomnar sommaren och ljuset.',
          },
          {
            title: 'Höst och vinter',
            description: 'Alla helgons dag, advent, Lucia och jul.',
          },
        ],
        keyConcepts: [
          {
            term: 'Helgdag',
            definition: 'En dag då människor får ledigt från arbetet.',
          },
          {
            term: 'Kulturarv',
            definition:
              'Traditioner och vanor som förs vidare genom generationer och uppfattas som en del av ett lands kultur.',
          },
          {
            term: 'Valborgsmässoafton',
            definition: 'Den 30 april – firas för att välkomna våren med stora brasor och vårsånger.',
          },
          {
            term: 'Sveriges nationaldag',
            definition:
              'Den 6 juni. Blev helgdag genom ett riksdagsbeslut 2005. Många kommuner välkomnar nya medborgare denna dag.',
          },
          {
            term: 'Midsommarafton',
            definition:
              'Firas alltid på en fredag mellan 19 och 25 juni. En gammal tradition från tiden före kristendomen.',
          },
          {
            term: 'Lucia',
            definition:
              'Firas den 13 december. Handlar om att sprida ljus när det är som mörkast på året.',
          },
          {
            term: 'Jul',
            definition:
              'Traditionellt en kristen högtid för att fira Jesu födelse, och en stor familjehögtid i Sverige.',
          },
        ],
      },
      questions: [
        {
          id: 'ch13-hog-q1',
          prompt: 'Varifrån kommer många svenska traditioner, och varför förändras de?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q2',
          prompt: 'Vad kännetecknar firandet av valborgsmässoafton och första maj?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q3',
          prompt: 'Varför firas Sveriges nationaldag den 6 juni, och vad gör många kommuner den dagen?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q4',
          prompt: 'När firas midsommarafton, och vad brukar man äta och göra?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q5',
          prompt: 'Vad gör man på alla helgons dag?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q6',
          prompt: 'Vad är advent, och hur märks det i många hem?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q7',
          prompt: 'Vad handlar luciafirandet om, och vad brukar man bjuda på?',
          kind: 'recall',
        },
        {
          id: 'ch13-hog-q8',
          prompt: 'Vilka traditioner är viktigast för dig, och varför?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'I Sverige har många traditioner rötter i den kristna religionen, eller ännu tidigare. Andra grundar sig i viktiga händelser i den svenska historien.',
        },
        {
          kind: 'paragraph',
          text: 'Traditioner bidrar till kulturell samhörighet, men de förändras också i takt med att samhället utvecklas. I dag firar till exempel många de kristna högtiderna på nya sätt som inte är kopplade till den kristna tron.',
        },
        {
          kind: 'paragraph',
          text: 'En hel del av årets helgdagar, som jul, påsk och pingst, kommer ur de kristna traditionerna. Många i Sverige uppfattar sådana traditioner som en viktig del av ett svenskt kulturarv även om de inte själva är troende. Ofta firar människor olika högtider tillsammans med andra, till exempel i familjen, och flera av högtiderna är helgdagar då människor får ledigt från arbetet.',
        },
        {
          kind: 'concept',
          term: 'Nyår',
          explanation:
            'Nyårsafton den 31 december firas ofta med fester och middagar med vänner och familj. Precis som på många andra håll i världen firas det nya årets ankomst på natten med fyrverkerier.',
        },
        {
          kind: 'concept',
          term: 'Påsk',
          explanation:
            'Påsken är en kristen högtid. Den firas någon gång i mars eller april för att minnas Jesus död under långfredagen och hans uppståndelse under påskdagen. På påskafton är det vanligt att äta ägg, lamm, lax och sill, och det är också vanligt att barn får godis i påskägg.',
        },
        {
          kind: 'concept',
          term: 'Valborgsmässoafton',
          explanation:
            'Valborgsmässoafton den 30 april firas för att välkomna våren. Stora brasor tänds på kvällen, och vid brasan sjunger man ofta traditionella vårsånger. Ibland håller någon ett tal till våren. Valborgsmässofirandet är en gammal tradition.',
        },
        {
          kind: 'concept',
          term: 'Första maj',
          explanation:
            'På första maj firas arbetarnas dag internationellt. I Sverige är det också en helgdag då alla är lediga. Dagen uppmärksammas av arbetarrörelsen, som arrangerar demonstrationer runt om i landet. Personer från fackförbund, politiska partier och andra grupper håller tal om sociala och politiska frågor.',
        },
        {
          kind: 'concept',
          term: 'Sveriges nationaldag',
          explanation:
            'Den 6 juni är Sveriges nationaldag. Dagen gjordes till helgdag genom ett riksdagsbeslut 2005. Gustav Vasa valdes till svensk kung den 6 juni 1523, vilket har uppfattats som inledningen på den svenska statens självständighet. Den 6 juni 1809 antogs dessutom en ny regeringsform som tvingade kungen att dela makten med riksdagen. Den här dagen hissas flaggan och det hålls tal, och många kommuner ordnar ceremonier för att välkomna nya medborgare.',
        },
        {
          kind: 'concept',
          term: 'Midsommar',
          explanation:
            'Midsommarfirandet handlar om att välkomna sommaren och ljuset. Midsommarafton firas alltid på en fredag mellan 19 juni och 25 juni. I Sverige är midsommarfirandet en gammal tradition som kommer från tiden före kristendomen. Under midsommaraftonen ordnar många fester utomhus, man binder blomsterkransar och dansar, sjunger och leker runt en midsommarstång. Vanlig mat är sill, färskpotatis och jordgubbar.',
        },
        {
          kind: 'concept',
          term: 'Alla helgons dag',
          explanation:
            'Alla helgons dag är en kristen helgdag. Då går många till kyrkogården för att tända ljus på släktingars och vänners gravar för att minnas och hedra dem som har dött. Alla helgons dag firas på en lördag i slutet av oktober eller i början av november.',
        },
        {
          kind: 'concept',
          term: 'Advent',
          explanation:
            'Advent infaller de fyra söndagarna före juldagen den 25 december. Advent betyder ankomst och var traditionellt en förberedelseperiod inför julen. Många har en adventskalender hemma och barnen öppnar en lucka varje dag fram till julafton. I de flesta hem hänger en lysande adventsstjärna i fönstret, och en adventsljusstake med fyra ljus står på bordet. Ett ljus tänds varje söndag fram till jul.',
        },
        {
          kind: 'concept',
          term: 'Lucia',
          explanation:
            'Under katolsk tid firades helgonet Lucia den 13 december. Under 1800-talet började luciafirandet få den form det har i dag. Firandet handlar mycket om att sprida ljus när det är som mörkast på året. Det arrangeras luciatåg i skolor och på många andra ställen. En person är Lucia och bär en ljuskrona på huvudet medan de andra deltagarna bär ljus i händerna. De sjunger speciella sånger om Lucia och om julen. Den här dagen brukar man bjuda på särskilda lussebullar med saffran.',
        },
        {
          kind: 'concept',
          term: 'Jul',
          explanation:
            'Julen är traditionellt en kristen högtid för att fira Jesu födelse, och en stor familjehögtid i Sverige. På julafton den 24 december samlas familjer för att umgås, äta särskild julmat och ge varandra presenter – julklappar. Många tar in en gran i huset och dekorerar den med ljusslingor, kulor och glitter. Vissa går upp tidigt på morgonen den 25 december för att delta i en gudstjänst i kyrkan som kallas för julotta. Många firar jul som en familjehögtid även utan religiös betydelse.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch13-hog-r1',
          prompt: 'När firas Sveriges nationaldag?',
          options: [
            { id: 'a', text: 'Den 6 juni' },
            { id: 'b', text: 'Den 30 april' },
            { id: 'c', text: 'Den 1 maj' },
            { id: 'd', text: 'Den 13 december' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sveriges nationaldag firas den 6 juni. Den blev helgdag genom ett riksdagsbeslut 2005. Många kommuner välkomnar nya medborgare den dagen.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch13-hog-r2',
          prompt: 'Vad kännetecknar valborgsmässoafton?',
          options: [
            { id: 'a', text: 'Man tänder stora brasor och sjunger vårsånger.' },
            { id: 'b', text: 'Man dansar runt en midsommarstång.' },
            { id: 'c', text: 'Man tänder ljus på gravar.' },
            { id: 'd', text: 'Man äter lussebullar.' },
          ],
          correctOptionId: 'a',
          explanation:
            'Valborgsmässoafton den 30 april firas för att välkomna våren. Stora brasor tänds och man sjunger traditionella vårsånger.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch13-hog-r3',
          prompt: 'När firas midsommarafton?',
          options: [
            { id: 'a', text: 'Alltid den 24 juni' },
            { id: 'b', text: 'En fredag mellan 19 och 25 juni' },
            { id: 'c', text: 'En lördag i slutet av juni' },
            { id: 'd', text: 'Den 21 juni' },
          ],
          correctOptionId: 'b',
          explanation:
            'Midsommarafton firas alltid på en fredag mellan 19 juni och 25 juni. Vanlig mat är sill, färskpotatis och jordgubbar.',
        },
        {
          kind: 'short-answer',
          id: 'ch13-hog-r4',
          prompt: 'Vad gör många på alla helgons dag?',
          acceptedAnswers: ['tänder ljus på gravar', 'går till kyrkogården och tänder ljus'],
          modelAnswer:
            'Många går till kyrkogården för att tända ljus på släktingars och vänners gravar för att minnas och hedra dem som har dött.',
        },
        {
          kind: 'short-answer',
          id: 'ch13-hog-r5',
          prompt: 'Vad heter den gudstjänst som vissa deltar i tidigt på morgonen den 25 december?',
          acceptedAnswers: ['julotta'],
          modelAnswer: 'Julotta.',
        },
        {
          kind: 'explain',
          id: 'ch13-hog-r6',
          prompt: 'Förklara med egna ord vad advent och lucia har gemensamt.',
          checklist: [
            'Båda infaller i den mörka delen av året.',
            'Båda handlar om ljus och förberedelse inför julen.',
            'Advent: fyra söndagar före juldagen, adventsstjärna och adventsljusstake.',
            'Lucia: den 13 december, luciatåg och lussebullar.',
          ],
          modelAnswer:
            'Både advent och lucia infaller under den mörkaste delen av året och handlar om ljus och om att förbereda sig inför julen. Advent är de fyra söndagarna före juldagen; då hänger många en adventsstjärna i fönstret och tänder ett ljus i adventsljusstaken varje söndag. Lucia firas den 13 december med luciatåg, ljuskronor och lussebullar, och handlar om att sprida ljus när det är som mörkast.',
        },
      ],
      review: {
        keyTakeaways: [
          'Traditioner skapar samhörighet och förändras i takt med samhället.',
          'Många högtider har kristna rötter: jul, påsk och pingst.',
          'Nyår (31 december), påsk (mars/april), valborg (30 april), första maj, nationaldagen (6 juni).',
          'Nationaldagen blev helgdag 2005; 6 juni 1523 valdes Gustav Vasa till kung.',
          'Midsommarafton: fredag mellan 19 och 25 juni. Sill, färskpotatis och jordgubbar.',
          'Alla helgons dag: ljus på gravarna, en lördag i slutet av oktober eller början av november.',
          'Advent: fyra söndagar före juldagen. Lucia: 13 december med luciatåg och lussebullar.',
          'Jul: julafton 24 december; julotta den 25 december.',
        ],
        mostImportant: 'Datumen för nationaldagen (6 juni), midsommarafton (fredag 19–25 juni) och Lucia (13 december).',
        glossary: [
          { term: 'Helgdag', definition: 'Dag då människor får ledigt från arbetet.' },
          { term: 'Kulturarv', definition: 'Traditioner som förs vidare genom generationer.' },
          { term: 'Julotta', definition: 'Gudstjänst tidigt på morgonen den 25 december.' },
        ],
      },
    },
    {
      id: 'ch13-nya-traditioner',
      title: 'Nya traditioner',
      source: { chapter: 13, pages: [47] },
      survey: {
        overview:
          'Avsnittet visar att traditioner inte är statiska: när människor flyttar tar de med sig traditioner och anpassar dem. Du får exempel på högtider som kommit till Sverige genom invandring.',
        themes: [
          {
            title: 'Traditioner följer med människor',
            description: 'Den som flyttar tar med sig traditioner och anpassar dem till den nya platsen.',
          },
          {
            title: 'Nya högtider i Sverige',
            description: 'Bland annat Id al-fitr, Nouruz och Newroz.',
          },
        ],
        keyConcepts: [
          {
            term: 'Id al-fitr',
            definition: 'Högtiden som avslutar fastemånaden ramadan.',
          },
          {
            term: 'Nouruz',
            definition: 'Det persiska nyåret.',
          },
          {
            term: 'Newroz',
            definition:
              'Det kurdiska nyåret, som firas i samband med vårdagjämningen den 21 mars.',
          },
        ],
      },
      questions: [
        {
          id: 'ch13-nya-q1',
          prompt: 'Vad händer med traditioner när människor flyttar till ett annat land?',
          kind: 'recall',
        },
        {
          id: 'ch13-nya-q2',
          prompt: 'Ge tre exempel på högtider som kommit till Sverige genom invandring.',
          kind: 'recall',
        },
        {
          id: 'ch13-nya-q3',
          prompt: 'När firas det kurdiska nyåret Newroz?',
          kind: 'recall',
        },
        {
          id: 'ch13-nya-q4',
          prompt:
            'Varför tror du att traditioner ofta förändras när de kommer till ett nytt land?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'När människor flyttar till andra länder tar de med sig traditioner och anpassar dem till de platser och de människor som de möter.',
        },
        {
          kind: 'paragraph',
          text: 'Ett par exempel på traditioner som har kommit till Sverige med invandrare är:',
        },
        {
          kind: 'list',
          items: [
            'Id al-fitr – högtiden som avslutar fastemånaden ramadan.',
            'Nouruz – det persiska nyåret.',
            'Newroz – det kurdiska nyåret, som firas i samband med vårdagjämningen den 21 mars.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Att traditioner förändras och att nya kommer till är en del av hur svensk kultur har utvecklats genom historien.',
        },
      ],
      recite: [
        {
          kind: 'short-answer',
          id: 'ch13-nya-r1',
          prompt: 'Vilken högtid avslutar fastemånaden ramadan?',
          acceptedAnswers: ['id al-fitr', 'id al fitr'],
          modelAnswer: 'Id al-fitr.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch13-nya-r2',
          prompt: 'Vad är Newroz?',
          options: [
            { id: 'a', text: 'Det persiska nyåret' },
            { id: 'b', text: 'Det kurdiska nyåret' },
            { id: 'c', text: 'Högtiden som avslutar ramadan' },
            { id: 'd', text: 'Det svenska nyåret' },
          ],
          correctOptionId: 'b',
          explanation:
            'Newroz är det kurdiska nyåret, som firas i samband med vårdagjämningen den 21 mars. Nouruz är det persiska nyåret och Id al-fitr avslutar ramadan.',
        },
        {
          kind: 'explain',
          id: 'ch13-nya-r3',
          prompt: 'Förklara med egna ord varför man kan säga att traditioner är levande och föränderliga.',
          checklist: [
            'Traditioner förs vidare men förändras i takt med samhället.',
            'Människor som flyttar tar med sig traditioner och anpassar dem.',
            'Nya traditioner kommer till, till exempel Id al-fitr, Nouruz och Newroz.',
          ],
          modelAnswer:
            'Traditioner är levande och föränderliga eftersom de förs vidare mellan människor men samtidigt anpassas till hur samhället ser ut. När människor flyttar till andra länder tar de med sig sina traditioner och anpassar dem till den nya platsen. Därför kommer också nya traditioner till Sverige, som Id al-fitr, Nouruz och Newroz.',
        },
      ],
      review: {
        keyTakeaways: [
          'Traditioner följer med människor som flyttar och anpassas till den nya platsen.',
          'Id al-fitr avslutar fastemånaden ramadan.',
          'Nouruz är det persiska nyåret.',
          'Newroz är det kurdiska nyåret och firas kring vårdagjämningen den 21 mars.',
        ],
        mostImportant: 'Traditioner är föränderliga – nya högtider som Id al-fitr, Nouruz och Newroz har kommit till Sverige.',
        glossary: [
          { term: 'Id al-fitr', definition: 'Högtiden som avslutar ramadan.' },
          { term: 'Nouruz', definition: 'Det persiska nyåret.' },
          { term: 'Newroz', definition: 'Det kurdiska nyåret, kring 21 mars.' },
        ],
      },
    },
  ],
}
