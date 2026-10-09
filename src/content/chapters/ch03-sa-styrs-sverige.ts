import type { Chapter } from '../types'

export const chapter03: Chapter = {
  id: 'ch03',
  order: 3,
  title: 'Så här styrs Sverige',
  intro:
    'Kapitlet handlar om hur den politiska makten är delad mellan stat, regioner och kommuner. Folket bestämmer vilka politiker som ska styra där. Politikerna fattar beslut om lagar, regler och budget medan myndigheterna genomför besluten i praktiken.',
  learningGoals: [
    'Förklara vad stat, region och kommun ansvarar för.',
    'Känna till hur många ledamöter riksdagen har och hur ofta den väljs.',
    'Förstå vad en myndighet gör och vad oppositionen har för uppgift.',
    'Förklara vad en konstitutionell monarki är.',
  ],
  source: { chapter: 3, pages: [12, 13] },
  sections: [
    {
      id: 'ch03-styrs-pa-olika-nivaer',
      title: 'Landet styrs på olika nivåer',
      source: { chapter: 3, pages: [12, 13] },
      survey: {
        overview:
          'Avsnittet visar hur den politiska makten är fördelad mellan staten, regionerna och kommunerna, och vad varje nivå ansvarar för. Du får också veta vad en myndighet gör.',
        themes: [
          {
            title: 'Tre nivåer plus EU',
            description:
              'Nationell nivå (staten), regional nivå (regionerna) och kommunal nivå (kommunerna). Dessutom påverkas Sverige av beslut i EU.',
          },
          {
            title: 'Riksdagen och regeringen',
            description: 'Riksdagen stiftar lagar och beslutar om budgeten; regeringen styr landet.',
          },
          {
            title: 'Myndigheterna genomför besluten',
            description: 'Regeringen styr landet med hjälp av statliga myndigheter, som måste följa lagen.',
          },
          {
            title: 'Regionernas och kommunernas ansvar',
            description: 'Regionerna ansvarar främst för sjukvården; kommunerna för mycket av vardagsservicen.',
          },
        ],
        keyConcepts: [
          {
            term: 'Representativ demokrati',
            definition:
              'Medborgarna röstar i allmänna val och väljer ledamöter som fattar besluten åt dem.',
          },
          {
            term: 'Riksdagen',
            definition: 'Sveriges parlament med 349 ledamöter, som väljs vart fjärde år.',
            explanation:
              'Riksdagen fattar beslut om lagar och om hur statens pengar ska användas. Riksdagen väljer också statsminister.',
          },
          {
            term: 'Budgetproposition',
            definition: 'Regeringens förslag till riksdagen om statens inkomster och utgifter, som lämnas varje höst.',
          },
          {
            term: 'Opposition',
            definition:
              'De partier som inte stödjer regeringen. Deras uppgift är att granska regeringen och föreslå en annan politik.',
          },
          {
            term: 'Myndighet',
            definition:
              'En statlig organisation som genomför de beslut som riksdag och regering har fattat.',
            explanation:
              'Exempel på myndigheter är Arbetsförmedlingen, Försäkringskassan, Migrationsverket, Polismyndigheten och Skatteverket. Söker man till exempel föräldrapenning är det Försäkringskassan som fattar beslutet.',
          },
          {
            term: 'Justitieombudsmannen (JO) och Justitiekanslern (JK)',
            definition: 'Myndigheter som kontrollerar att andra myndigheter gör rätt.',
          },
          {
            term: 'Regionfullmäktige och kommunfullmäktige',
            definition:
              'De folkvalda församlingar där regionernas och kommunernas politiker fattar beslut.',
          },
        ],
      },
      questions: [
        {
          id: 'ch03-niv-q1',
          prompt: 'Vilka tre politiska nivåer finns i Sverige, och vad kallas de?',
          kind: 'recall',
        },
        {
          id: 'ch03-niv-q2',
          prompt: 'Hur många ledamöter har riksdagen, och hur ofta väljs de?',
          kind: 'recall',
        },
        {
          id: 'ch03-niv-q3',
          prompt: 'Vad är oppositionens uppgift?',
          kind: 'recall',
        },
        {
          id: 'ch03-niv-q4',
          prompt: 'Vad ansvarar regionerna för, och vad ansvarar kommunerna för?',
          kind: 'recall',
        },
        {
          id: 'ch03-niv-q5',
          prompt:
            'Vilka beslut i din kommun märker du mest av i vardagen? Ge exempel.',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Det politiska ansvaret i Sverige delas mellan nationell nivå (stat), regional nivå (regioner) och kommunal nivå (kommuner). Dessutom påverkas Sverige av beslut i Europeiska unionen (EU).',
        },
        {
          kind: 'concept',
          term: 'Staten',
          explanation:
            'Det som kallas staten består av riksdag, regering, myndigheter och domstolar. Sverige är en parlamentarisk representativ demokrati: medborgarna röstar i allmänna val och väljer ledamöter till riksdagen, som i sin tur fattar beslut om lagar och statens budget.',
        },
        {
          kind: 'paragraph',
          text: 'Riksdagen har 349 ledamöter som väljs vart fjärde år. De representerar olika partier och olika delar av landet. Riksdagen beslutar om lagar och om hur statens pengar ska användas, och väljer statsminister. Statsministern får i uppdrag att bilda regering och väljer därefter ministrarna.',
        },
        {
          kind: 'concept',
          term: 'Budgetpropositionen',
          explanation:
            'Varje höst lämnar regeringen ett förslag till riksdagen på statens inkomster och utgifter. Det kallas för budgetproposition. Budgeten visar vilken politik regeringen vill föra och vad staten ska prioritera.',
        },
        {
          kind: 'concept',
          term: 'Oppositionen',
          explanation:
            'De partier som inte stödjer regeringen kallas för opposition. Oppositionens uppgift är att granska regeringens arbete och att föreslå en annan politik. I riksdagen diskuterar och debatterar regeringspartierna och oppositionen olika förslag innan ledamöterna röstar.',
        },
        {
          kind: 'paragraph',
          text: 'Regeringen styr landet med hjälp av statliga myndigheter. Det finns flera hundra myndigheter i Sverige, till exempel Arbetsförmedlingen, Försäkringskassan, Migrationsverket, Polismyndigheten och Skatteverket. Myndigheterna måste följa lagen och de instruktioner de har fått av regeringen. Det finns särskilda myndigheter som kontrollerar att de andra myndigheterna gör rätt, bland annat Justitieombudsmannen (JO) och Justitiekanslern (JK).',
        },
        {
          kind: 'example',
          title: 'Myndigheterna i praktiken',
          text: 'Om en person söker föräldrapenning är det Försäkringskassan som fattar beslutet.',
        },
        {
          kind: 'paragraph',
          text: 'Sverige är indelat i 21 regioner. De styrs av de politiker som invånarna har valt i regionvalet, och politikerna tar beslut i regionfullmäktige. Regionernas främsta uppgift är att ansvara för hälso- och sjukvården i regionen. Regionerna ser också till att det finns kollektivtrafik som bussar, spårvagnar och tunnelbanor, och de ansvarar för länsmuseerna.',
        },
        {
          kind: 'paragraph',
          text: 'Sverige är också uppdelat i 290 kommuner. Den största kommunen är Sveriges huvudstad Stockholm, där det bor nästan en miljon människor. Den minsta kommunen är Dorotea i Västerbottens län, med färre än 3 000 invånare.',
        },
        {
          kind: 'paragraph',
          text: 'Kommunerna styrs av politiker som invånarna har valt i kommunvalet, och de tar beslut i kommunfullmäktige. De flesta politikerna i kommunen har vanliga jobb och arbetar med politik på fritiden. I kommunen finns nämnder som ansvarar för olika områden: kulturnämnden ansvarar för biblioteken och utbildningsnämnden för skolorna. Ledamöterna i nämnderna väljs av kommunfullmäktige.',
        },
        {
          kind: 'list',
          items: [
            'Vatten och avlopp.',
            'Omsorg för äldre och barn.',
            'Snöröjning och parkskötsel.',
            'Utbildning för vuxna.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Beslut i kommunen påverkar ofta människors vardag mer direkt än beslut i riksdagen.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch03-niv-r1',
          prompt: 'Hur många ledamöter har riksdagen och hur ofta väljs de?',
          options: [
            { id: 'a', text: '290 ledamöter, vart fjärde år' },
            { id: 'b', text: '349 ledamöter, vart fjärde år' },
            { id: 'c', text: '349 ledamöter, vart femte år' },
            { id: 'd', text: '21 ledamöter, varje år' },
          ],
          correctOptionId: 'b',
          explanation: 'Riksdagen har 349 ledamöter som väljs vart fjärde år.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch03-niv-r2',
          prompt: 'Vad är regionernas främsta uppgift?',
          options: [
            { id: 'a', text: 'Att ansvara för hälso- och sjukvården.' },
            { id: 'b', text: 'Att stifta lagar.' },
            { id: 'c', text: 'Att sköta snöröjning och parkskötsel.' },
            { id: 'd', text: 'Att göra pass och nationella id-kort.' },
          ],
          correctOptionId: 'a',
          explanation:
            'Regionernas främsta uppgift är att ansvara för hälso- och sjukvården. De ansvarar också för kollektivtrafik och länsmuseer.',
        },
        {
          kind: 'short-answer',
          id: 'ch03-niv-r3',
          prompt: 'Vad kallas regeringens förslag till riksdagen om statens inkomster och utgifter?',
          acceptedAnswers: ['budgetproposition', 'budgetpropositionen'],
          modelAnswer: 'Budgetpropositionen, som regeringen lämnar varje höst.',
        },
        {
          kind: 'short-answer',
          id: 'ch03-niv-r4',
          prompt: 'Vad är oppositionens uppgift?',
          acceptedAnswers: ['granska regeringen', 'granska och föreslå annan politik'],
          modelAnswer:
            'Att granska regeringens arbete och att föreslå en annan politik.',
        },
        {
          kind: 'explain',
          id: 'ch03-niv-r5',
          prompt: 'Förklara med egna ord skillnaden mellan vad en kommun och en myndighet gör.',
          checklist: [
            'Kommunen styrs av folkvalda politiker i kommunfullmäktige.',
            'Kommunen ansvarar för service till invånarna, som skola, äldreomsorg och vatten.',
            'Myndigheterna genomför beslut som riksdag och regering fattat och måste följa lagen.',
          ],
          modelAnswer:
            'Kommunen styrs av politiker som invånarna valt i kommunvalet och ansvarar för mycket av servicen i vardagen, till exempel vatten och avlopp, omsorg, skolor och snöröjning. Myndigheterna är i stället statliga och genomför de beslut som riksdag och regering har fattat. De måste följa lagen och de instruktioner de fått av regeringen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Makten är delad mellan stat, 21 regioner och 290 kommuner, och påverkas av EU.',
          'Riksdagen har 349 ledamöter, väljs vart fjärde år och stiftar lagar.',
          'Regeringen lämnar en budgetproposition varje höst.',
          'Oppositionen granskar regeringen och föreslår en annan politik.',
          'Myndigheterna genomför besluten; JO och JK kontrollerar dem.',
          'Regionerna ansvarar främst för sjukvården, kommunerna för vardagsservicen.',
        ],
        mostImportant: 'Tre nivåer: stat (lagar och budget), regioner (sjukvård) och kommuner (vardagsservice).',
        glossary: [
          { term: 'Riksdagen', definition: '349 folkvalda ledamöter som beslutar om lagar och budget.' },
          { term: 'Myndighet', definition: 'Statlig organisation som genomför fattade beslut.' },
          { term: 'Kommunfullmäktige', definition: 'Kommunens folkvalda församling.' },
        ],
      },
    },
    {
      id: 'ch03-statsskick',
      title: 'Sveriges statsskick',
      source: { chapter: 3, pages: [13] },
      survey: {
        overview:
          'Avsnittet förklarar vad en konstitutionell monarki är, vad statschefen gör och vem som står i tur att bli monark.',
        themes: [
          {
            title: 'Konstitutionell monarki',
            description: 'Statschefen är en kung eller drottning utan politisk makt.',
          },
          {
            title: 'Statschefens uppgifter',
            description: 'Representera Sverige, göra statsbesök och ta emot statschefer.',
          },
        ],
        keyConcepts: [
          {
            term: 'Konstitutionell monarki',
            definition:
              'Ett statsskick där statschefen är kung eller drottning men inte har någon politisk makt.',
            explanation:
              'Kungen fungerar som en symbol för Sverige. Den politiska makten ligger i stället hos riksdagen och regeringen.',
          },
          {
            term: 'Statschef',
            definition: 'Landets formella statschef – i Sverige kungen.',
          },
        ],
      },
      questions: [
        {
          id: 'ch03-stat-q1',
          prompt: 'Vad betyder det att Sverige är en konstitutionell monarki?',
          kind: 'recall',
        },
        {
          id: 'ch03-stat-q2',
          prompt: 'Vilka uppgifter har kungen?',
          kind: 'recall',
        },
        {
          id: 'ch03-stat-q3',
          prompt: 'Vem är Sveriges kung, och vem står i tur efter honom?',
          kind: 'recall',
        },
        {
          id: 'ch03-stat-q4',
          prompt: 'Varför tror du att Sverige har behållit en statschef utan politisk makt?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige är en konstitutionell monarki.',
        },
        {
          kind: 'concept',
          term: 'Konstitutionell monarki',
          explanation:
            'Det betyder att statschefen är en kung eller drottning som inte har någon politisk makt. Kungen fungerar som en symbol för Sverige, gör statsbesök i andra länder och tar emot statschefer från andra länder när de kommer till Sverige.',
        },
        {
          kind: 'paragraph',
          text: 'Sveriges kung heter Carl XVI Gustaf, och hans förstfödda dotter Victoria är kronprinsessa. Därefter står Victorias dotter Estelle på tur att bli monark.',
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Den politiska makten i Sverige ligger hos riksdagen och regeringen – inte hos statschefen.',
        },
      ],
      recite: [
        {
          kind: 'short-answer',
          id: 'ch03-stat-r1',
          prompt: 'Vad betyder konstitutionell monarki?',
          acceptedAnswers: ['kung utan politisk makt', 'statschef utan politisk makt'],
          modelAnswer:
            'Att statschefen är en kung eller drottning som inte har någon politisk makt, utan fungerar som en symbol för landet.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch03-stat-r2',
          prompt: 'Vem står först i tur att bli monark efter Carl XVI Gustaf?',
          options: [
            { id: 'a', text: 'Prins Carl Philip' },
            { id: 'b', text: 'Kronprinsessan Victoria' },
            { id: 'c', text: 'Prinsessan Estelle' },
            { id: 'd', text: 'Prinsessan Madeleine' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hans förstfödda dotter Victoria är kronprinsessa. Efter henne står hennes dotter Estelle i tur.',
        },
        {
          kind: 'explain',
          id: 'ch03-stat-r3',
          prompt: 'Förklara med egna ord vad statschefen i Sverige har för roll.',
          checklist: [
            'Statschefen är kung eller drottning.',
            'Statschefen har ingen politisk makt.',
            'Uppgifter: symbol för Sverige, statsbesök, ta emot statschefer.',
          ],
          modelAnswer:
            'Statschefen i Sverige är en kung eller drottning utan politisk makt. Kungen fungerar som en symbol för Sverige, gör statsbesök i andra länder och tar emot statschefer när de kommer till Sverige. Den politiska makten ligger i stället hos riksdagen och regeringen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige är en konstitutionell monarki.',
          'Statschefen är en kung eller drottning utan politisk makt.',
          'Kungen representerar Sverige vid statsbesök och tar emot statschefer.',
          'Sveriges kung är Carl XVI Gustaf. Kronprinsessa är Victoria, därefter Estelle.',
        ],
        mostImportant: 'Konstitutionell monarki: statschefen är en symbol utan politisk makt.',
        glossary: [
          { term: 'Konstitutionell monarki', definition: 'Kung eller drottning som statschef utan politisk makt.' },
          { term: 'Kronprinsessa', definition: 'Den som står först i tur att bli monark.' },
        ],
      },
    },
  ],
}
