import type { Chapter } from '../types'

export const chapter11: Chapter = {
  id: 'ch11',
  order: 11,
  title: 'Sverige och omvärlden',
  intro:
    'Kapitlet handlar om Sveriges samarbete med omvärlden, det nordiska, europeiska och globala samarbetet och om Sveriges säkerhetspolitik.',
  learningGoals: [
    'Beskriva det nordiska samarbetet.',
    'Förklara vad EU är och vad de fyra friheterna innebär.',
    'Känna till Europarådet och Europadomstolen.',
    'Beskriva FN:s syfte och vad Sida gör.',
    'Beskriva Sveriges försvars- och säkerhetspolitik.',
  ],
  source: { chapter: 11, pages: [39, 40, 41] },
  sections: [
    {
      id: 'ch11-nordiskt-europeiskt',
      title: 'Nordiskt och europeiskt samarbete',
      source: { chapter: 11, pages: [39] },
      survey: {
        overview:
          'Avsnittet beskriver hur Sverige samarbetar med de nordiska länderna, vad EU är och vilka friheter medlemskapet ger. Du får också veta vad Europarådet gör.',
        themes: [
          {
            title: 'Nordiskt samarbete',
            description: 'Genom Nordiska rådet och Nordiska ministerrådet.',
          },
          {
            title: 'EU',
            description: 'Ett politiskt och ekonomiskt samarbete som startade efter andra världskriget.',
          },
          {
            title: 'De fyra friheterna',
            description: 'Människor kan studera, flytta, arbeta och sälja varor fritt mellan EU-länderna.',
          },
          {
            title: 'Europarådet',
            description: 'En europeisk organisation från 1949 för mänskliga rättigheter och demokrati.',
          },
        ],
        keyConcepts: [
          {
            term: 'Nordiska rådet och Nordiska ministerrådet',
            definition:
              'Organisationerna genom vilka Sverige samarbetar med Danmark, Finland, Island och Norge.',
            explanation:
              'De båda råden kommer överens i olika frågor som sedan respektive land kan genomföra.',
          },
          {
            term: 'EU (Europeiska unionen)',
            definition:
              'Ett politiskt och ekonomiskt samarbete mellan flera europeiska länder, som startade efter andra världskriget för att skapa fred och stabilitet i Europa.',
            explanation:
              'Sverige har varit medlem i EU sedan 1995. EU-länderna samarbetar inom många områden som jordbruk, ekonomi, miljö, handel och migration, och tar fram lagar som gäller i alla medlemsländer.',
          },
          {
            term: 'De fyra friheterna',
            definition:
              'Att människor kan studera, flytta, arbeta och sälja varor fritt mellan EU-länderna.',
          },
          {
            term: 'Europarådet',
            definition:
              'En europeisk organisation som bildades 1949 och arbetar för mänskliga rättigheter, demokrati och rättsstatens principer.',
            explanation:
              'Inom Europarådet finns Europeiska domstolen för de mänskliga rättigheterna, ofta kallad Europadomstolen.',
          },
        ],
      },
      questions: [
        {
          id: 'ch11-nor-q1',
          prompt: 'Vilka länder samarbetar Sverige med i Norden, och genom vilka organ?',
          kind: 'recall',
        },
        {
          id: 'ch11-nor-q2',
          prompt: 'Varför startades EU-samarbetet, och sedan vilket år är Sverige medlem?',
          kind: 'recall',
        },
        {
          id: 'ch11-nor-q3',
          prompt: 'Vad innebär de fyra friheterna?',
          kind: 'recall',
        },
        {
          id: 'ch11-nor-q4',
          prompt: 'Vad gör Europarådet, och vilken domstol finns där?',
          kind: 'recall',
        },
        {
          id: 'ch11-nor-q5',
          prompt:
            'Vilka praktiska fördelar märker en person som bor i Sverige av att Sverige är med i EU?',
          kind: 'reflection',
        },
      ],
      read: [
        { kind: 'note', tone: 'info', text: 'Nordiskt samarbete' },
        {
          kind: 'paragraph',
          text: 'Sverige samarbetar med de andra nordiska länderna Danmark, Finland, Island och Norge, främst genom Nordiska rådet och Nordiska ministerrådet. De båda råden kommer överens i olika frågor som sedan respektive land kan genomföra.',
        },
        { kind: 'note', tone: 'info', text: 'EU och Europarådet' },
        {
          kind: 'concept',
          term: 'EU (Europeiska unionen)',
          explanation:
            'EU är ett politiskt och ekonomiskt samarbete mellan flera europeiska länder. Samarbetet startade efter andra världskriget för att skapa fred och stabilitet i Europa. Sverige har varit medlem i EU sedan 1995.',
        },
        {
          kind: 'paragraph',
          text: 'EU-länderna samarbetar inom många områden som jordbruk, ekonomi, miljö, handel och migration. De fattar gemensamma beslut och tar fram lagar som gäller i alla medlemsländer. En viktig tanke med EU är att länderna blir starkare tillsammans.',
        },
        {
          kind: 'concept',
          term: 'De fyra friheterna',
          explanation:
            'Samarbetet innebär att människor kan studera, flytta, arbeta och sälja varor fritt mellan länderna. Det innebär till exempel att alla EU-medborgare kan arbeta eller studera i ett annat EU-land.',
        },
        {
          kind: 'concept',
          term: 'Europarådet',
          explanation:
            'Sverige är också medlem i Europarådet – en europeisk organisation som bildades 1949 och som arbetar för mänskliga rättigheter, demokrati och rättsstatens principer. Där finns till exempel Europeiska domstolen för de mänskliga rättigheterna (Europadomstolen).',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch11-nor-r1',
          prompt: 'Sedan vilket år är Sverige medlem i EU?',
          options: [
            { id: 'a', text: '1949' },
            { id: 'b', text: '1976' },
            { id: 'c', text: '1995' },
            { id: 'd', text: '2024' },
          ],
          correctOptionId: 'c',
          explanation: 'Sverige har varit medlem i EU sedan 1995.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch11-nor-r2',
          prompt: 'Vad innebär de fyra friheterna?',
          options: [
            { id: 'a', text: 'Fritt att studera, flytta, arbeta och sälja varor mellan EU-länderna.' },
            { id: 'b', text: 'Fri tillgång till sjukvård i alla länder.' },
            { id: 'c', text: 'Fri rätt att rösta i alla EU-länder.' },
            { id: 'd', text: 'Frihet från skatt inom EU.' },
          ],
          correctOptionId: 'a',
          explanation:
            'De fyra friheterna innebär att människor kan studera, flytta, arbeta och sälja varor fritt mellan EU-länderna.',
        },
        {
          kind: 'short-answer',
          id: 'ch11-nor-r3',
          prompt: 'Vilket år bildades Europarådet, och vilken domstol finns där?',
          acceptedAnswers: ['1949 europadomstolen', '1949, europadomstolen'],
          modelAnswer:
            'Europarådet bildades 1949. Där finns Europeiska domstolen för de mänskliga rättigheterna, Europadomstolen.',
        },
        {
          kind: 'explain',
          id: 'ch11-nor-r4',
          prompt: 'Förklara med egna ord varför EU bildades och vad det innebär för Sverige att vara medlem.',
          checklist: [
            'Samarbetet startade efter andra världskriget för fred och stabilitet.',
            'EU är ett politiskt och ekonomiskt samarbete.',
            'Samarbete inom jordbruk, ekonomi, miljö, handel och migration.',
            'Gemensamma beslut och lagar; de fyra friheterna.',
          ],
          modelAnswer:
            'EU bildades efter andra världskriget för att skapa fred och stabilitet i Europa, och är ett politiskt och ekonomiskt samarbete mellan europeiska länder. För Sverige, som varit medlem sedan 1995, innebär det samarbete inom områden som jordbruk, ekonomi, miljö, handel och migration, gemensamma beslut och lagar, och de fyra friheterna – att människor kan studera, flytta, arbeta och sälja varor fritt mellan länderna.',
        },
      ],
      review: {
        keyTakeaways: [
          'Nordiskt samarbete sker genom Nordiska rådet och Nordiska ministerrådet.',
          'EU startade efter andra världskriget för fred och stabilitet. Sverige blev medlem 1995.',
          'EU samarbetar inom jordbruk, ekonomi, miljö, handel och migration.',
          'De fyra friheterna: studera, flytta, arbeta och sälja varor fritt inom EU.',
          'Europarådet (1949) arbetar för mänskliga rättigheter, demokrati och rättsstatens principer.',
          'Där finns Europadomstolen.',
        ],
        mostImportant: 'EU-medlemskap sedan 1995 och de fyra friheterna.',
        glossary: [
          { term: 'EU', definition: 'Europeiska unionen – politiskt och ekonomiskt samarbete.' },
          { term: 'De fyra friheterna', definition: 'Studera, flytta, arbeta och sälja varor fritt.' },
          { term: 'Europarådet', definition: 'Organisation från 1949 för mänskliga rättigheter och demokrati.' },
        ],
      },
    },
    {
      id: 'ch11-globalt-samarbete',
      title: 'Globalt samarbete',
      source: { chapter: 11, pages: [39] },
      survey: {
        overview:
          'Avsnittet handlar om Sveriges medlemskap i FN, vad FN har för syfte och vad myndigheten Sida arbetar med.',
        themes: [
          {
            title: 'FN',
            description: 'Nästan alla världens länder är med; FN grundades 1945 efter andra världskriget.',
          },
          {
            title: 'FN:s syfte',
            description: 'Bevara fred, lösa konflikter, arbeta för lika värde och mänskliga rättigheter.',
          },
          {
            title: 'Sida',
            description: 'Sveriges myndighet för internationellt utvecklingssamarbete.',
          },
        ],
        keyConcepts: [
          {
            term: 'FN (Förenta nationerna)',
            definition:
              'En organisation som grundades 1945 efter andra världskriget och där nästan alla världens länder är med.',
          },
          {
            term: 'Sida',
            definition:
              'Styrelsen för internationellt utvecklingssamarbete – en statlig myndighet som arbetar för att minska fattigdom och förtryck i världen.',
            explanation:
              'Genom Sida stödjer Sverige andra länder med att utveckla demokrati, jämställdhet, ekonomi och ett hållbart samhälle.',
          },
        ],
      },
      questions: [
        {
          id: 'ch11-glo-q1',
          prompt: 'Vilket år grundades FN, och vilka är medlemmar?',
          kind: 'recall',
        },
        {
          id: 'ch11-glo-q2',
          prompt: 'Vad har FN för syfte? Nämn minst tre punkter.',
          kind: 'recall',
        },
        {
          id: 'ch11-glo-q3',
          prompt: 'Vad arbetar Sida med, och vad stödjer Sverige andra länder att utveckla?',
          kind: 'recall',
        },
        {
          id: 'ch11-glo-q4',
          prompt:
            'Varför tror du att Sverige väljer att ge stöd till utveckling i andra länder?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige är medlem i FN. Nästan alla världens länder är med i FN, som grundades 1945 efter andra världskriget.',
        },
        { kind: 'note', tone: 'info', text: 'FN:s syfte är att:' },
        {
          kind: 'list',
          items: [
            'Bevara fred och säkerhet i världen.',
            'Lösa konflikter och stoppa krig.',
            'Arbeta för alla folks lika värde och självbestämmande.',
            'Arbeta för mänskliga rättigheter och friheter.',
          ],
        },
        {
          kind: 'concept',
          term: 'Sida',
          explanation:
            'Styrelsen för internationellt utvecklingssamarbete (Sida) är en statlig myndighet som arbetar för att minska fattigdom och förtryck i världen. Genom Sida stödjer Sverige andra länder med att utveckla demokrati, jämställdhet, ekonomi och ett hållbart samhälle.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch11-glo-r1',
          prompt: 'Vilket år grundades FN?',
          options: [
            { id: 'a', text: '1918' },
            { id: 'b', text: '1945' },
            { id: 'c', text: '1948' },
            { id: 'd', text: '1995' },
          ],
          correctOptionId: 'b',
          explanation: 'FN grundades 1945 efter andra världskriget.',
        },
        {
          kind: 'short-answer',
          id: 'ch11-glo-r2',
          prompt: 'Vad arbetar Sida för att minska?',
          acceptedAnswers: ['fattigdom och förtryck', 'fattigdom och förtryck i världen'],
          modelAnswer: 'Sida arbetar för att minska fattigdom och förtryck i världen.',
        },
        {
          kind: 'explain',
          id: 'ch11-glo-r3',
          prompt: 'Förklara med egna ord vad FN är och vad organisationen vill uppnå.',
          checklist: [
            'En organisation där nästan alla världens länder är med.',
            'Grundades 1945 efter andra världskriget.',
            'Syfte: bevara fred, lösa konflikter, arbeta för lika värde och mänskliga rättigheter.',
          ],
          modelAnswer:
            'FN är en organisation som grundades 1945 efter andra världskriget och där nästan alla världens länder är medlemmar. FN:s syfte är att bevara fred och säkerhet i världen, lösa konflikter och stoppa krig, arbeta för alla folks lika värde och självbestämmande, och arbeta för mänskliga rättigheter och friheter.',
        },
      ],
      review: {
        keyTakeaways: [
          'FN grundades 1945 och nästan alla världens länder är medlemmar.',
          'FN:s syfte: bevara fred, lösa konflikter, lika värde och självbestämmande, mänskliga rättigheter.',
          'Sida är Sveriges myndighet för internationellt utvecklingssamarbete.',
          'Sida arbetar för att minska fattigdom och förtryck och stödjer utveckling av demokrati, jämställdhet, ekonomi och hållbarhet.',
        ],
        mostImportant: 'FN:s fyra syften och att Sverige arbetar globalt genom FN och Sida.',
        glossary: [
          { term: 'FN', definition: 'Förenta nationerna, grundat 1945.' },
          { term: 'Sida', definition: 'Myndigheten för internationellt utvecklingssamarbete.' },
        ],
      },
    },
    {
      id: 'ch11-forsvar-sakerhet',
      title: 'Försvars- och säkerhetspolitik',
      source: { chapter: 11, pages: [40, 41] },
      survey: {
        overview:
          'Avsnittet beskriver Sveriges långa fred, kalla kriget, vägen in i Nato och hur det svenska försvaret är uppbyggt.',
        themes: [
          {
            title: 'Den långa freden',
            description: 'Senast Sverige förde krig mot en annan stat var i början av 1800-talet.',
          },
          {
            title: 'Kalla kriget',
            description: 'Två block hotade varandra med kärnvapen; Sverige förblev neutralt.',
          },
          {
            title: 'Efter kalla kriget',
            description: '1991 föll Sovjetunionen, Sverige gick med i EU 1995 och i Nato 2024.',
          },
          {
            title: 'Sveriges försvar',
            description: 'Ett totalförsvar som omfattar både militärt och civilt försvar.',
          },
        ],
        keyConcepts: [
          {
            term: 'Nato',
            definition:
              'En försvarsallians som vill skydda sina medlemsländer. Sverige blev medlem 2024.',
          },
          {
            term: 'Totalförsvarsplikt',
            definition:
              'Skyldigheten för alla som bor i Sverige och är mellan 16 och 70 år att vid behov hjälpa till att försvara landet.',
          },
          {
            term: 'Totalförsvaret',
            definition: 'Det samlade försvaret, som omfattar både det militära och det civila försvaret.',
          },
          {
            term: 'Allmän värnplikt',
            definition:
              'Att alla män och kvinnor som har fyllt 18 år kan kallas till grundläggande militär utbildning.',
            explanation:
              'De får svara på frågor och göra tester, och sedan beslutas det vilka som blir aktuella för utbildning. Bara en del går vidare och genomför den.',
          },
          {
            term: 'Det civila försvaret',
            definition:
              'Det som säkerställer att skola, arbete och hälso- och sjukvård kan fortsätta fungera i händelse av krig eller kris.',
          },
        ],
      },
      questions: [
        {
          id: 'ch11-for-q1',
          prompt: 'När förde Sverige senast krig mot en annan stat, och vad hände med Finland och Norge?',
          kind: 'recall',
        },
        {
          id: 'ch11-for-q2',
          prompt: 'Vad var det kalla kriget, och vad gjorde Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch11-for-q3',
          prompt: 'Varför ansökte Sverige om medlemskap i Nato, och vilket år blev Sverige medlem?',
          kind: 'recall',
        },
        {
          id: 'ch11-for-q4',
          prompt: 'Vilka omfattas av totalförsvarsplikten, och vad gäller för den allmänna värnplikten?',
          kind: 'recall',
        },
        {
          id: 'ch11-for-q5',
          prompt:
            'Varför tror du att Sverige var neutralt under så lång tid och sedan valde att gå med i Nato?',
          kind: 'reflection',
        },
      ],
      read: [
        { kind: 'note', tone: 'info', text: 'Den långa fredens historia' },
        {
          kind: 'paragraph',
          text: 'Senast Sverige förde krig mot en annan stat var i början av 1800-talet. Sverige är ett av få länder i världen som har haft fred under så lång sammanhängande tid.',
        },
        {
          kind: 'paragraph',
          text: 'I ett krig mot Ryssland 1808–1809 förlorade Sverige Finland, som hade varit en del av Sverige under nästan 700 år. Några år senare tvingades Norge in i en union med Sverige som ett resultat av Napoleonkrigen. Norge blev på fredlig väg en självständig stat 1905. Efter dessa händelser har politiken i Sverige varit inriktad på att undvika nya krig.',
        },
        {
          kind: 'paragraph',
          text: 'Efter andra världskriget hamnade världen och Europa i ett kallt krig. Det var en konflikt mellan två block: ett västligt block främst med USA och deras allierade, och ett östligt block med Sovjetunionen och dess allierade. Blocken hotade varandra med kärnvapen och starka militärmakter.',
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Danmark och Norge anslöt sig till Nordatlantiska fördragsorganisationen (Nato). Sverige fortsatte att vara neutralt och valde att stå utanför Nato.',
        },
        { kind: 'note', tone: 'info', text: 'Efter kalla krigets slut' },
        {
          kind: 'paragraph',
          text: '1991 förändrades säkerhetsläget i Europa då Sovjetunionen föll och det kalla kriget var över. Sverige gick med i EU 1995 och blev mer integrerat i europeiskt samarbete.',
        },
        {
          kind: 'paragraph',
          text: 'När Ryssland angrep Ukraina 2022 ökade oron för säkerheten i Norden. Sverige och Finland valde därför att nästan samtidigt ansöka om medlemskap i Nato – en försvarsallians som vill skydda sina medlemsländer. Sverige blev medlem år 2024.',
        },
        { kind: 'note', tone: 'info', text: 'Sveriges försvar' },
        {
          kind: 'paragraph',
          text: 'Sverige ansvarar för att skydda landet och dess invånare. Alla som bor i Sverige och är mellan 16 och 70 år kan bli tvungna att hjälpa till att försvara landet om det behövs. Det kallas för totalförsvarsplikt. Det svenska totalförsvaret omfattar både det militära försvaret och det civila försvaret.',
        },
        {
          kind: 'paragraph',
          text: 'Det militära försvaret består av Försvarsmakten: armén, marinen och flygvapnet. Försvarsmakten ska skydda Sveriges territorium och självständighet, och den ska också kunna delta i internationella insatser.',
        },
        {
          kind: 'concept',
          term: 'Allmän värnplikt',
          explanation:
            'Sverige har allmän värnplikt, som omfattar alla män och kvinnor som har fyllt 18 år. De får svara på frågor och göra tester, och sedan beslutas det vilka som blir aktuella för en grundläggande militär utbildning. Bara en del av dem går vidare och genomför utbildningen.',
        },
        {
          kind: 'concept',
          term: 'Det civila försvaret',
          explanation:
            'Det civila försvaret innebär att fler än militären ska kunna möta hot och utmaningar i samhället. I civilförsvaret ingår verksamheter som säkerställer att allt som skola, arbete, hälso- och sjukvård ska kunna fortsätta fungera i händelse av krig eller kris.',
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Försvarsmaktens uppdrag är att stärka både det militära och civila försvaret för att öka motståndskraften och avskräcka möjliga angripare.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch11-for-r1',
          prompt: 'Vilket år blev Sverige medlem i Nato?',
          options: [
            { id: 'a', text: '1995' },
            { id: 'b', text: '1991' },
            { id: 'c', text: '2022' },
            { id: 'd', text: '2024' },
          ],
          correctOptionId: 'd',
          explanation:
            'Efter Rysslands angrepp på Ukraina 2022 ansökte Sverige och Finland om medlemskap i Nato. Sverige blev medlem 2024.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch11-for-r2',
          prompt: 'Vilka omfattas av totalförsvarsplikten?',
          options: [
            { id: 'a', text: 'Endast män mellan 18 och 45 år.' },
            { id: 'b', text: 'Alla som bor i Sverige och är mellan 16 och 70 år.' },
            { id: 'c', text: 'Endast svenska medborgare mellan 20 och 60 år.' },
            { id: 'd', text: 'Endast personer som gjort värnplikt.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Alla som bor i Sverige och är mellan 16 och 70 år kan bli tvungna att hjälpa till att försvara landet om det behövs.',
        },
        {
          kind: 'short-answer',
          id: 'ch11-for-r3',
          prompt: 'Vilka delar består det svenska totalförsvaret av?',
          acceptedAnswers: ['militära och civila försvaret', 'militärt försvar och civilt försvar'],
          modelAnswer: 'Det militära försvaret och det civila försvaret.',
        },
        {
          kind: 'short-answer',
          id: 'ch11-for-r4',
          prompt: 'Vilket år blev Norge en självständig stat?',
          acceptedAnswers: ['1905'],
          modelAnswer: 'Norge blev på fredlig väg en självständig stat 1905.',
        },
        {
          kind: 'explain',
          id: 'ch11-for-r5',
          prompt: 'Förklara med egna ord vad den allmänna värnplikten innebär.',
          checklist: [
            'Omfattar alla män och kvinnor som har fyllt 18 år.',
            'Man får svara på frågor och göra tester.',
            'Sedan beslutas vilka som blir aktuella för grundläggande militär utbildning.',
            'Bara en del går vidare och genomför utbildningen.',
          ],
          modelAnswer:
            'Den allmänna värnplikten omfattar alla män och kvinnor som har fyllt 18 år. De får svara på frågor och göra tester, och sedan beslutas det vilka som blir aktuella för en grundläggande militär utbildning. Bara en del av dem går vidare och genomför utbildningen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige förde senast krig mot en annan stat i början av 1800-talet – en av världens längsta freder.',
          '1808–1809 förlorades Finland; Norge tvingades in i union 1905 upphörde den.',
          'Kalla kriget: två block med USA respektive Sovjetunionen. Danmark och Norge gick med i Nato, Sverige förblev neutralt.',
          '1991 föll Sovjetunionen. Sverige gick med i EU 1995.',
          'Efter Rysslands angrepp på Ukraina 2022 ansökte Sverige och Finland om Nato-medlemskap. Sverige blev medlem 2024.',
          'Totalförsvarsplikt gäller alla mellan 16 och 70 år som bor i Sverige.',
          'Totalförsvaret = militärt försvar (Försvarsmakten: armén, marinen, flygvapnet) + civilt försvar.',
          'Allmän värnplikt omfattar alla män och kvinnor från 18 år.',
        ],
        mostImportant: 'Sverige är sedan 2024 medlem i Nato – efter en lång tradition av neutralitet.',
        glossary: [
          { term: 'Nato', definition: 'Försvarsallians; Sverige medlem sedan 2024.' },
          { term: 'Totalförsvarsplikt', definition: 'Skyldighet att hjälpa till att försvara landet, 16–70 år.' },
          { term: 'Allmän värnplikt', definition: 'Alla män och kvinnor från 18 år kan kallas till militär utbildning.' },
        ],
      },
    },
  ],
}
