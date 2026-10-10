import type { Chapter } from '../types'

export const chapter08: Chapter = {
  id: 'ch08',
  order: 8,
  title: 'Arbetsmarknad och privatekonomi',
  intro:
    'Kapitlet handlar om hur den svenska arbetsmarknaden fungerar, om arbete, arbetslöshet, arbetsgivare och arbetstagare. Det handlar också om den privata ekonomin.',
  learningGoals: [
    'Skilja mellan offentlig och privat sektor.',
    'Känna till arbetsmarknadens parter och vad ett kollektivavtal är.',
    'Veta vilka lagar som skyddar anställda och vad A-kassan är.',
    'Förklara vad privatekonomi är och vad Kronofogdemyndigheten gör.',
  ],
  source: { chapter: 8, pages: [27, 28, 29] },
  sections: [
    {
      id: 'ch08-arbetsmarknaden',
      title: 'Så fungerar arbetsmarknaden',
      source: { chapter: 8, pages: [27] },
      survey: {
        overview:
          'Avsnittet delar upp arbetsmarknaden i offentlig och privat sektor och visar var olika slags jobb finns i landet.',
        themes: [
          {
            title: 'Offentlig sektor',
            description:
              'Verksamheter som staten, regionerna och kommunerna ansvarar för och finansierar med skatter.',
          },
          {
            title: 'Privat sektor',
            description: 'Alla företag som ägs privat – cirka 70 procent av arbetskraften jobbar där.',
          },
          {
            title: 'Geografiska skillnader',
            description: 'Stora städer har tjänster och handel, mindre orter ofta industri.',
          },
        ],
        keyConcepts: [
          {
            term: 'Offentlig sektor',
            definition:
              'Verksamheter som staten, regionerna och kommunerna ansvarar för och som finansieras med skatter.',
            explanation:
              'Arbeten som sjukvårdspersonal, lärare, barnskötare, polis och brandman hör till den offentliga sektorn. Där jobbar cirka 30 procent av alla som arbetar i Sverige.',
          },
          {
            term: 'Privat sektor',
            definition: 'Alla företag som ägs privat.',
            explanation:
              'Det är allt från butiker, restauranger, fabriker och byggföretag till företag inom juridik, ekonomi och transport. Omkring 70 procent av alla som jobbar i Sverige arbetar inom den privata sektorn.',
          },
        ],
      },
      questions: [
        {
          id: 'ch08-arb-q1',
          prompt: 'Vad består den offentliga sektorn av, och hur finansieras den?',
          kind: 'recall',
        },
        {
          id: 'ch08-arb-q2',
          prompt: 'Hur stor andel av arbetskraften jobbar i offentlig respektive privat sektor?',
          kind: 'recall',
        },
        {
          id: 'ch08-arb-q3',
          prompt: 'Vilken typ av företag finns det oftast i mindre städer och orter, och varför?',
          kind: 'recall',
        },
        {
          id: 'ch08-arb-q4',
          prompt:
            'Var i Sverige skulle du helst vilja arbeta, och vilka typer av jobb finns där?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Arbetsmarknaden kan delas upp i offentlig och privat sektor.',
        },
        {
          kind: 'concept',
          term: 'Den offentliga sektorn',
          explanation:
            'Den offentliga sektorn består av verksamheter som staten, regionerna och kommunerna ansvarar för och som finansieras med skatter. Arbeten som sjukvårdspersonal, lärare, barnskötare, polis och brandman hör till den offentliga sektorn. Där jobbar cirka 30 procent av alla som arbetar i Sverige.',
        },
        {
          kind: 'concept',
          term: 'Den privata sektorn',
          explanation:
            'Med den privata sektorn menas alla företag som ägs privat. Det är allt från butiker, restauranger, fabriker och byggföretag till företag som arbetar med juridik, ekonomi och transport. Omkring 70 procent av alla som jobbar i Sverige arbetar inom den privata sektorn.',
        },
        {
          kind: 'paragraph',
          text: 'Arbetsmarknaden ser olika ut i Sverige. I stora städer finns många företag inom olika branscher, till exempel inom tjänster och handel. I mindre städer och orter finns ofta industrier som stålverk, pappersbruk eller fabriker som ligger nära nödvändiga naturresurser.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch08-arb-r1',
          prompt: 'Hur finansieras den offentliga sektorn?',
          options: [
            { id: 'a', text: 'Genom skatter' },
            { id: 'b', text: 'Genom reklam' },
            { id: 'c', text: 'Genom medlemsavgifter' },
            { id: 'd', text: 'Genom EU-bidrag' },
          ],
          correctOptionId: 'a',
          explanation:
            'Den offentliga sektorn finansieras med skatter. Där arbetar cirka 30 procent av alla som jobbar i Sverige.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch08-arb-r2',
          prompt: 'Ungefär hur stor andel av de sysselsatta arbetar i den privata sektorn?',
          options: [
            { id: 'a', text: 'Cirka 30 procent' },
            { id: 'b', text: 'Cirka 50 procent' },
            { id: 'c', text: 'Cirka 70 procent' },
            { id: 'd', text: 'Cirka 90 procent' },
          ],
          correctOptionId: 'c',
          explanation:
            'Omkring 70 procent av alla som jobbar i Sverige arbetar inom den privata sektorn. I offentlig sektor är andelen cirka 30 procent.',
        },
        {
          kind: 'short-answer',
          id: 'ch08-arb-r3',
          prompt: 'Ge tre exempel på yrken inom den offentliga sektorn.',
          acceptedAnswers: ['lärare sjuksköterska polis', 'sjukvårdspersonal lärare barnskötare polis brandman'],
          modelAnswer:
            'Till exempel sjukvårdspersonal, lärare, barnskötare, polis och brandman.',
        },
      ],
      review: {
        keyTakeaways: [
          'Arbetsmarknaden delas i offentlig och privat sektor.',
          'Offentlig sektor finansieras med skatter och sysselsätter cirka 30 procent.',
          'Privat sektor omfattar alla privatägda företag och sysselsätter cirka 70 procent.',
          'Stora städer har tjänster och handel; mindre orter ofta industri nära naturresurser.',
        ],
        mostImportant: 'Offentlig sektor = skattefinansierad (ca 30 %), privat sektor = privatägda företag (ca 70 %).',
        glossary: [
          { term: 'Offentlig sektor', definition: 'Statens, regionernas och kommunernas verksamheter, skattefinansierade.' },
          { term: 'Privat sektor', definition: 'Alla privatägda företag.' },
        ],
      },
    },
    {
      id: 'ch08-arbetsmarknadens-parter',
      title: 'Arbetsmarknadens parter',
      source: { chapter: 8, pages: [28] },
      survey: {
        overview:
          'Avsnittet förklarar vilka organisationer som representerar arbetsgivare och arbetstagare, och hur löner bestäms genom kollektivavtal.',
        themes: [
          {
            title: 'Arbetsgivarorganisationer',
            description: 'Svenskt näringsliv, Arbetsgivarverket och SKR.',
          },
          {
            title: 'Fackliga organisationer',
            description: 'LO, TCO och SACO representerar arbetstagarna.',
          },
          {
            title: 'Kollektivavtal',
            description: 'Avtal om löner och arbetsvillkor – löner bestäms inte av staten.',
          },
        ],
        keyConcepts: [
          {
            term: 'Arbetsgivarorganisation',
            definition: 'Organisation som representerar arbetsgivarna.',
          },
          {
            term: 'Facklig organisation',
            definition: 'Organisation som representerar arbetstagarna.',
            explanation:
              'Fackförbunden arbetar för att de anställda ska få det bättre. De förhandlar om löner med arbetsgivaren och kan hjälpa till om en medlem får problem på arbetet.',
          },
          {
            term: 'LO, TCO och SACO',
            definition: 'De tre största fackliga centralorganisationerna.',
          },
          {
            term: 'Kollektivavtal',
            definition: 'Avtal om löner och arbetsvillkor som fackförbund och arbetsgivarorganisationer förhandlar fram.',
            explanation:
              'Avtalen gäller alla anställda på de arbetsplatser som ingår i avtalet. I Sverige bestäms löner genom förhandlingar mellan arbetsmarknadens parter, inte av staten.',
          },
        ],
      },
      questions: [
        {
          id: 'ch08-par-q1',
          prompt: 'Vilka är de största arbetsgivarorganisationerna?',
          kind: 'recall',
        },
        {
          id: 'ch08-par-q2',
          prompt: 'Vilka är de tre största fackliga centralorganisationerna?',
          kind: 'recall',
        },
        {
          id: 'ch08-par-q3',
          prompt: 'Vad är ett kollektivavtal, och vem bestämmer lönerna i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch08-par-q4',
          prompt:
            'Varför tror du att Sverige har valt att låta parterna förhandla om lönerna i stället för att staten bestämmer?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'På arbetsmarknaden finns arbetsgivare och arbetstagare. Arbetsgivare anställer och betalar lön till arbetstagarna. Både arbetstagare och arbetsgivare har organiserat sig i egna organisationer för att ta vara på sina intressen.',
        },
        {
          kind: 'paragraph',
          text: 'Arbetsgivarorganisationerna representerar arbetsgivarna. De största är:',
        },
        {
          kind: 'list',
          items: [
            'Svenskt näringsliv för privata företag.',
            'Arbetsgivarverket och SKR (Sveriges kommuner och regioner) för offentliga arbetsplatser.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Fackliga organisationer representerar arbetstagarna. De största fackliga centralorganisationerna är:',
        },
        {
          kind: 'list',
          items: [
            'Landsorganisationen i Sverige (LO).',
            'Tjänstemännens centralorganisation (TCO).',
            'Sveriges akademikers centralorganisation (SACO).',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Fackförbunden arbetar för att de anställda ska få det bättre. De förhandlar om löner med arbetsgivaren och kan hjälpa till om en medlem får problem på arbetet. Inom varje facklig centralorganisation finns många olika fackförbund, och det är de anställda på arbetsplatserna som kan vara medlemmar.',
        },
        {
          kind: 'concept',
          term: 'Kollektivavtal',
          explanation:
            'Fackförbunden och arbetsgivarorganisationerna förhandlar om och tecknar kollektivavtal om löner och arbetsvillkor. De gäller alla anställda på de arbetsplatser som ingår i avtalet. I Sverige bestäms alltså löner genom förhandlingar mellan arbetsmarknadens parter, inte av staten.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch08-par-r1',
          prompt: 'Vilka är de tre största fackliga centralorganisationerna?',
          options: [
            { id: 'a', text: 'LO, TCO och SACO' },
            { id: 'b', text: 'Svenskt näringsliv, SKR och Arbetsgivarverket' },
            { id: 'c', text: 'LO, SKR och TCO' },
            { id: 'd', text: 'SACO, Svenskt näringsliv och LO' },
          ],
          correctOptionId: 'a',
          explanation:
            'De tre största fackliga centralorganisationerna är LO, TCO och SACO. De representerar arbetstagarna.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch08-par-r2',
          prompt: 'Vem bestämmer lönerna i Sverige?',
          options: [
            { id: 'a', text: 'Staten genom lag' },
            { id: 'b', text: 'Arbetsmarknadens parter genom förhandlingar och kollektivavtal' },
            { id: 'c', text: 'EU' },
            { id: 'd', text: 'Domstolarna' },
          ],
          correctOptionId: 'b',
          explanation:
            'I Sverige bestäms löner genom förhandlingar mellan arbetsmarknadens parter, inte av staten. Resultatet blir kollektivavtal.',
        },
        {
          kind: 'short-answer',
          id: 'ch08-par-r3',
          prompt: 'Vad är ett kollektivavtal?',
          acceptedAnswers: [
            'avtal om löner och arbetsvillkor',
            'avtal mellan fackförbund och arbetsgivarorganisationer',
          ],
          modelAnswer:
            'Ett avtal om löner och arbetsvillkor som fackförbund och arbetsgivarorganisationer förhandlat fram. Det gäller alla anställda på de arbetsplatser som ingår i avtalet.',
        },
      ],
      review: {
        keyTakeaways: [
          'Arbetsgivarorganisationer: Svenskt näringsliv (privat), Arbetsgivarverket och SKR (offentligt).',
          'Fackliga centralorganisationer: LO, TCO och SACO.',
          'Kollektivavtal reglerar löner och arbetsvillkor för alla på arbetsplatsen.',
          'I Sverige bestäms löner genom förhandlingar mellan parterna – inte av staten.',
        ],
        mostImportant: 'Löner bestäms av arbetsmarknadens parter genom kollektivavtal, inte av staten.',
        glossary: [
          { term: 'Kollektivavtal', definition: 'Avtal om löner och arbetsvillkor mellan parterna.' },
          { term: 'Fackförbund', definition: 'Arbetstagarnas organisation, förhandlar med arbetsgivaren.' },
          { term: 'LO, TCO, SACO', definition: 'De tre största fackliga centralorganisationerna.' },
        ],
      },
    },
    {
      id: 'ch08-lagar-och-privatekonomi',
      title: 'Lagar, skatt och privatekonomi',
      source: { chapter: 8, pages: [29] },
      survey: {
        overview:
          'Avsnittet beskriver de lagar som skyddar anställda, hur skatt på arbete fungerar och vad A-kassan är. Du får också veta vad privatekonomi innebär och vad Kronofogdemyndigheten gör.',
        themes: [
          {
            title: 'Lagar på arbetsmarknaden',
            description: 'Regler om arbetstider, arbetsmiljö och semester, och avgifter för pension och sjukförsäkring.',
          },
          {
            title: 'Skatt på arbete',
            description: 'Alla som arbetar betalar skatt på sin lön – hur mycket beror på inkomsten.',
          },
          {
            title: 'A-kassan',
            description: 'En försäkring vid arbetslöshet som ger en inkomst till arbetslösa medlemmar.',
          },
          {
            title: 'Privatekonomi',
            description: 'Inkomster och utgifter, sparande, lån och skulder.',
          },
        ],
        keyConcepts: [
          {
            term: 'Arbetsmiljölagar',
            definition:
              'Lagar på arbetsmarknaden som skyddar de anställdas rättigheter och skapar en trygg arbetsmiljö, bland annat om arbetstider, arbetsmiljö och semester.',
          },
          {
            term: 'Arbetsgivaravgifter',
            definition:
              'Avgifter som arbetsgivaren betalar till staten för de anställdas pension och sjukförsäkring.',
          },
          {
            term: 'A-kassan',
            definition:
              'Arbetslöshetskassan – en ekonomisk förening som betalar ut pengar till arbetslösa medlemmar.',
            explanation:
              'För att få ersättning måste man ha arbetat tillräckligt många timmar under en bestämd period och vara aktivt arbetssökande. Ersättningen finansieras av staten och av medlemmarnas medlemsavgifter.',
          },
          {
            term: 'Socialförsäkringar',
            definition: 'Stöd från staten, till exempel pension, sjukpenning och barnbidrag.',
          },
          {
            term: 'Kronofogdemyndigheten',
            definition:
              'Statlig myndighet som ser till att skulder blir betalda och kan hjälpa personer med stora skulder genom skuldsanering.',
          },
          {
            term: 'Skuldsanering',
            definition: 'Hjälp att få ordning på ekonomin när skulderna blivit för stora.',
          },
        ],
      },
      questions: [
        {
          id: 'ch08-lag-q1',
          prompt: 'Vilka lagar finns för att skydda anställda på arbetsmarknaden?',
          kind: 'recall',
        },
        {
          id: 'ch08-lag-q2',
          prompt: 'Vad måste en arbetsgivare betala utöver lön, och vad går pengarna till?',
          kind: 'recall',
        },
        {
          id: 'ch08-lag-q3',
          prompt: 'Vad är A-kassan, och vad krävs för att få ersättning?',
          kind: 'recall',
        },
        {
          id: 'ch08-lag-q4',
          prompt: 'Vad gör Kronofogdemyndigheten, och vad är skuldsanering?',
          kind: 'recall',
        },
        {
          id: 'ch08-lag-q5',
          prompt:
            'Varför är det viktigt att deklarera och betala skatt? Vad finansierar skatten i din vardag?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Det finns lagar på arbetsmarknaden för att skydda de anställdas rättigheter och skapa en trygg arbetsmiljö.',
        },
        {
          kind: 'list',
          items: [
            'Det finns lagar om arbetstider, arbetsmiljö och semester.',
            'Arbetsgivaren måste betala avgifter till staten för de anställdas pension och sjukförsäkring.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Alla som arbetar betalar skatt på sin lön. Hur mycket man betalar beror på inkomsten. Det är olagligt att arbeta utan att betala skatt.',
        },
        {
          kind: 'concept',
          term: 'A-kassan',
          explanation:
            'Arbetslöshetsförsäkringen gör det möjligt för en arbetslös person att ha en inkomst. Arbetslöshetskassan (A-kassan) är en ekonomisk förening som betalar ut pengar till arbetslösa medlemmar. För att få ersättning måste man ha arbetat tillräckligt många timmar under en bestämd period och vara aktivt arbetssökande. Ersättningen finansieras av staten och av medlemmarnas medlemsavgifter.',
        },
        { kind: 'note', tone: 'info', text: 'Privatekonomi i Sverige' },
        {
          kind: 'paragraph',
          text: 'Privatekonomi handlar om människors privata inkomster och utgifter. Inkomster kan vara lön eller bidrag, och utgifter är kostnader för till exempel boende, mat och kläder.',
        },
        {
          kind: 'paragraph',
          text: 'Lönen i Sverige är ganska hög jämfört med många andra länder. Hur mycket man tjänar beror på yrke, utbildning, erfarenhet och bransch. Staten ger också pengar genom socialförsäkringar som till exempel pension, sjukpenning och barnbidrag.',
        },
        {
          kind: 'paragraph',
          text: 'Människor kan spara pengar på bankkonton, i fonder eller aktier. Många tar lån från banken för att köpa bostad eller bil. Under de senaste decennierna har bostadspriserna i många delar av Sverige stigit kraftigt, och bostadslån är därför ofta en stor del av privatekonomin. Det är också vanligt att köpa saker på kredit, till exempel med kreditkort, men räntan är ofta hög på sådana lån.',
        },
        {
          kind: 'concept',
          term: 'Kronofogdemyndigheten',
          explanation:
            'Kronofogdemyndigheten är en statlig myndighet som ser till att skulder blir betalda. Myndigheten kan också hjälpa personer med stora skulder att få ordning på ekonomin – det kallas för skuldsanering.',
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'Alla som har haft en inkomst under året ska deklarera sin inkomst till Skatteverket.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch08-lag-r1',
          prompt: 'Vad är A-kassan?',
          options: [
            { id: 'a', text: 'En statlig myndighet som betalar ut pension' },
            { id: 'b', text: 'En arbetslöshetskassa – en ekonomisk förening som betalar ut pengar till arbetslösa medlemmar' },
            { id: 'c', text: 'En facklig centralorganisation' },
            { id: 'd', text: 'Ett kollektivavtal om löner' },
          ],
          correctOptionId: 'b',
          explanation:
            'A-kassan är en ekonomisk förening som betalar ut pengar till arbetslösa medlemmar. Ersättningen finansieras av staten och av medlemsavgifter.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch08-lag-r2',
          prompt: 'Vad kan Kronofogdemyndigheten hjälpa till med?',
          options: [
            { id: 'a', text: 'Att teckna kollektivavtal' },
            { id: 'b', text: 'Att få ordning på ekonomin genom skuldsanering' },
            { id: 'c', text: 'Att betala ut A-kassa' },
            { id: 'd', text: 'Att fastställa löner' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kronofogdemyndigheten ser till att skulder blir betalda och kan hjälpa personer med stora skulder genom skuldsanering.',
        },
        {
          kind: 'short-answer',
          id: 'ch08-lag-r3',
          prompt: 'Vad krävs för att få ersättning från A-kassan?',
          acceptedAnswers: [
            'arbetat tillräckligt många timmar och vara arbetssökande',
            'ha arbetat och vara aktivt arbetssökande',
          ],
          modelAnswer:
            'Man måste ha arbetat tillräckligt många timmar under en bestämd period och vara aktivt arbetssökande.',
        },
        {
          kind: 'explain',
          id: 'ch08-lag-r4',
          prompt: 'Förklara med egna ord vad privatekonomi innebär och ge exempel på inkomster och utgifter.',
          checklist: [
            'Privatekonomi handlar om privata inkomster och utgifter.',
            'Inkomster kan vara lön eller bidrag, till exempel pension, sjukpenning och barnbidrag.',
            'Utgifter är kostnader för boende, mat och kläder.',
            'Sparande kan ske i bankkonton, fonder eller aktier; lån tas ofta för bostad eller bil.',
          ],
          modelAnswer:
            'Privatekonomi handlar om människors privata inkomster och utgifter. Inkomster kan vara lön eller bidrag, och staten ger också pengar genom socialförsäkringar som pension, sjukpenning och barnbidrag. Utgifter är kostnader för till exempel boende, mat och kläder. Man kan spara pengar på bankkonton, i fonder eller aktier, och många tar lån för att köpa bostad eller bil. Bostadslån är ofta en stor del av privatekonomin, och köp på kredit har ofta hög ränta.',
        },
      ],
      review: {
        keyTakeaways: [
          'Lagar skyddar anställda: arbetstider, arbetsmiljö och semester.',
          'Arbetsgivaren betalar avgifter för de anställdas pension och sjukförsäkring.',
          'Alla som arbetar betalar skatt på sin lön; det är olagligt att arbeta utan att betala skatt.',
          'A-kassan ger en inkomst vid arbetslöshet. Krav: tillräckligt många arbetade timmar och aktivt arbetssökande.',
          'Privatekonomi = inkomster och utgifter. Lönen i Sverige är ganska hög internationellt sett.',
          'Kronofogdemyndigheten driver in skulder och kan bevilja skuldsanering.',
          'Alla med inkomst ska deklarera till Skatteverket.',
        ],
        mostImportant: 'A-kassan, skatten på arbete och Kronofogdemyndighetens roll är de mest provcentrala delarna.',
        glossary: [
          { term: 'A-kassan', definition: 'Arbetslöshetskassan – ersättning vid arbetslöshet.' },
          { term: 'Skuldsanering', definition: 'Hjälp att få ordning på ekonomin vid stora skulder.' },
          { term: 'Socialförsäkring', definition: 'Statligt stöd som pension, sjukpenning och barnbidrag.' },
        ],
      },
    },
  ],
}
