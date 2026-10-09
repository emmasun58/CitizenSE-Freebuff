import type { Chapter } from '../types'

export const chapter12: Chapter = {
  id: 'ch12',
  order: 12,
  title: 'En sekulär stat och ett mångreligiöst land',
  intro:
    'Kapitlet handlar om religion i Sverige. Sverige är en sekulär stat med lagar som respekterar allas rätt att utöva sin tro. Här gäller religionsfrihet. Människor kan fritt välja sin tro eller att inte tro. Samtidigt är det ett mångreligiöst land där bland annat de stora världsreligionerna finns representerade.',
  learningGoals: [
    'Förklara vad det innebär att Sverige är en sekulär stat.',
    'Redogöra för religionsfrihetens historia i Sverige.',
    'Känna till när Svenska kyrkan skildes från staten.',
    'Beskriva religionens roll i dagens Sverige.',
    'Känna igen de fem största världsreligionerna och deras historia i Sverige.',
  ],
  source: { chapter: 12, pages: [42, 43, 44] },
  sections: [
    {
      id: 'ch12-religionsfrihet',
      title: 'Religionsfrihet',
      source: { chapter: 12, pages: [42] },
      survey: {
        overview:
          'Avsnittet förklarar vad en sekulär stat är, hur religionsfriheten växte fram i Sverige och vad skolans religionsundervisning syftar till.',
        themes: [
          {
            title: 'En sekulär stat',
            description: 'Staten är religiöst neutral och tar inte ställning för någon religion.',
          },
          {
            title: 'Religionsfrihetens historia',
            description: '1860 fick svenskar lämna Svenska kyrkan, och 1951 kom religionsfrihetslagen.',
          },
          {
            title: 'Staten och kyrkan skiljs åt',
            description: 'År 2000 blev Svenska kyrkan ett av flera trossamfund.',
          },
          {
            title: 'Religionskunskap i skolan',
            description: 'Undervisningen ska ge bred förståelse och främja tolerans och respekt.',
          },
        ],
        keyConcepts: [
          {
            term: 'Sekulär stat',
            definition:
              'Att staten är religiöst neutral och inte tar ställning för eller diskriminerar någon religion.',
            explanation:
              'Staten garanterar alla rätten att själva bestämma om de vill eller inte vill tillhöra en specifik religion.',
          },
          {
            term: 'Religionsfrihetslagen',
            definition:
              'Lagen från 1951 som gjorde det möjligt för människor att helt fritt välja religion eller att inte tillhöra någon religion alls.',
          },
          {
            term: 'Svenska kyrkan',
            definition:
              'Sveriges största kristna samfund. År 2000 skildes staten och Svenska kyrkan åt.',
          },
        ],
      },
      questions: [
        {
          id: 'ch12-rel-q1',
          prompt: 'Vad innebär det att Sverige är en sekulär stat?',
          kind: 'recall',
        },
        {
          id: 'ch12-rel-q2',
          prompt: 'Vilket år fick svenskar lämna Svenska kyrkan, och vad var villkoret?',
          kind: 'recall',
        },
        {
          id: 'ch12-rel-q3',
          prompt: 'Vilket år kom religionsfrihetslagen, och vad innebar den?',
          kind: 'recall',
        },
        {
          id: 'ch12-rel-q4',
          prompt: 'Vad hände år 2000 med förhållandet mellan staten och Svenska kyrkan?',
          kind: 'recall',
        },
        {
          id: 'ch12-rel-q5',
          prompt:
            'Vad syftar religionsundervisningen i skolan till, och varför är det viktigt i ett mångreligiöst land?',
          kind: 'recall',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige är en sekulär stat. Det innebär att staten är religiöst neutral och inte tar ställning för eller diskriminerar någon religion. Staten garanterar alla rätten att själva bestämma om de vill eller inte vill tillhöra en specifik religion.',
        },
        {
          kind: 'paragraph',
          text: 'Religionsfrihet har inte alltid varit en självklarhet. Länge var den protestantiska lutherska kyrkan den enda tillåtna religionen. Först år 1860 blev det tillåtet för svenskar att lämna Svenska kyrkan, men bara om man gick med i ett annat kristet samfund.',
        },
        {
          kind: 'concept',
          term: 'Religionsfrihetslagen 1951',
          explanation:
            'Det slutliga genombrottet för religionsfriheten kom med religionsfrihetslagen 1951. Den gjorde det möjligt för människor att helt fritt välja religion eller att inte tillhöra någon religion alls.',
        },
        {
          kind: 'paragraph',
          text: 'När staten och Svenska kyrkan skildes åt år 2000 blev Svenska kyrkan ett av flera trossamfund i samhället. Svenska kyrkan är fortfarande det största kristna samfundet i Sverige.',
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Enligt regeringsformen, en av Sveriges grundlagar, har alla rätt att utöva sin religion. Ingen får heller diskrimineras på grund av sin tro eller religiösa uppfattning. På så vis är Sverige både en sekulär stat och ett mångreligiöst land.',
        },
        {
          kind: 'paragraph',
          text: 'Undervisningen i religionskunskap i den svenska skolan ska ge elever en bred förståelse för olika religioner, trosuppfattningar och livsåskådningar från hela världen. Målet är att främja förståelse, tolerans och respekt för olikheter.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch12-rel-r1',
          prompt: 'Vad menas med att Sverige är en sekulär stat?',
          options: [
            { id: 'a', text: 'Att alla måste tillhöra Svenska kyrkan.' },
            { id: 'b', text: 'Att staten är religiöst neutral och inte tar ställning för någon religion.' },
            { id: 'c', text: 'Att religion är förbjuden i Sverige.' },
            { id: 'd', text: 'Att staten bestämmer vilken religion invånarna får ha.' },
          ],
          correctOptionId: 'b',
          explanation:
            'En sekulär stat är religiöst neutral och diskriminerar inte någon religion. Staten garanterar alla rätt att själva bestämma över sin tro.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch12-rel-r2',
          prompt: 'Vilket år kom religionsfrihetslagen?',
          options: [
            { id: 'a', text: '1860' },
            { id: 'b', text: '1951' },
            { id: 'c', text: '2000' },
            { id: 'd', text: '1523' },
          ],
          correctOptionId: 'b',
          explanation:
            'Religionsfrihetslagen kom 1951 och gjorde det möjligt att helt fritt välja religion eller att inte tillhöra någon religion alls.',
        },
        {
          kind: 'short-answer',
          id: 'ch12-rel-r3',
          prompt: 'Vilket år skildes staten och Svenska kyrkan åt?',
          acceptedAnswers: ['2000', 'år 2000'],
          modelAnswer:
            'År 2000. Då blev Svenska kyrkan ett av flera trossamfund i samhället.',
        },
        {
          kind: 'explain',
          id: 'ch12-rel-r4',
          prompt: 'Förklara med egna ord hur religionsfriheten växte fram i Sverige.',
          checklist: [
            'Länge var den lutherska kyrkan den enda tillåtna religionen.',
            '1860 fick svenskar lämna Svenska kyrkan, men bara till ett annat kristet samfund.',
            '1951 kom religionsfrihetslagen – fritt att välja religion eller ingen alls.',
            'År 2000 skildes staten och Svenska kyrkan åt.',
          ],
          modelAnswer:
            'Religionsfriheten växte fram gradvis. Länge var den protestantiska lutherska kyrkan den enda tillåtna religionen. År 1860 blev det tillåtet för svenskar att lämna Svenska kyrkan, men bara om de gick med i ett annat kristet samfund. Det slutliga genombrottet kom med religionsfrihetslagen 1951, som gjorde det möjligt att fritt välja religion eller att inte tillhöra någon religion alls. År 2000 skildes staten och Svenska kyrkan åt, och Svenska kyrkan blev ett av flera trossamfund.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige är en sekulär stat: religiöst neutral, utan att diskriminera någon religion.',
          'Regeringsformen ger alla rätt att utöva sin religion.',
          '1860: tillåtet att lämna Svenska kyrkan, men bara till ett annat kristet samfund.',
          '1951: religionsfrihetslagen ger frihet att välja religion eller ingen alls.',
          '2000: staten och Svenska kyrkan skildes åt.',
          'Religionsundervisningen ska främja förståelse, tolerans och respekt.',
        ],
        mostImportant: 'Årtalen 1860, 1951 och 2000 är centrala för religionsfrihetens historia i Sverige.',
        glossary: [
          { term: 'Sekulär stat', definition: 'Religiöst neutral stat som inte tar ställning för en religion.' },
          { term: 'Religionsfrihetslagen', definition: 'Lagen från 1951 om frihet att välja tro.' },
          { term: 'Trossamfund', definition: 'En organiserad religiös gemenskap.' },
        ],
      },
    },
    {
      id: 'ch12-religionens-roll',
      title: 'Religionens roll',
      source: { chapter: 12, pages: [42, 43, 44] },
      survey: {
        overview:
          'Avsnittet beskriver kristendomens spår i den svenska kulturen, hur religionens roll i samhället förändrats och ger en kort översikt över de fem största världsreligionernas historia i Sverige.',
        themes: [
          {
            title: 'Kristendomens kulturella spår',
            description:
              'Många firar kristna högtider och använder kristna ritualer utan att se sig som religiösa.',
          },
          {
            title: 'Religionens roll minskar – men uppmärksammas mer',
            description:
              'Färre tillhör ett samfund, men i takt med ökad invandring utövas fler religioner i Sverige.',
          },
          {
            title: 'Kristendom',
            description: 'Världens största religion; Svenska kyrkan har omkring fem miljoner medlemmar.',
          },
          {
            title: 'Judendom',
            description: 'Historia i Sverige sedan 1700-talet. 1870 fick judar fullständiga medborgerliga rättigheter.',
          },
          {
            title: 'Hinduism och buddhism',
            description: 'Kontakterna började främst under 1900-talet.',
          },
          {
            title: 'Islam',
            description: 'Sveriges näst största religion; de första moskéerna byggdes under 1970-talet.',
          },
        ],
        keyConcepts: [
          {
            term: 'Världsreligion',
            definition:
              'En av de stora religionerna som finns över stora delar av världen: kristendom, islam, hinduism, buddhism och judendom.',
          },
          {
            term: 'Svenska kyrkan',
            definition:
              'Det största kristna samfundet i Sverige, med historiska rötter i den lutherska, protestantiska traditionen från 1500-talet.',
          },
          {
            term: 'Medeltida kyrkor',
            definition:
              'Omkring 1 400 bevarade kyrkor och kyrkoruiner med medeltida ursprung finns kvar i Sverige.',
          },
          {
            term: 'Antisemitism',
            definition:
              'Fientlighet mot judar. Den var länge mycket spridd i Europa.',
          },
        ],
      },
      questions: [
        {
          id: 'ch12-rol-q1',
          prompt: 'Hur märks kristendomen i den svenska kulturen även bland dem som inte ser sig som troende?',
          kind: 'recall',
        },
        {
          id: 'ch12-rol-q2',
          prompt: 'Hur har religionens roll i samhället förändrats, och varför har religion fått mer uppmärksamhet på senare tid?',
          kind: 'recall',
        },
        {
          id: 'ch12-rol-q3',
          prompt: 'Hur många medlemmar har Svenska kyrkan, och vad har den för historiska rötter?',
          kind: 'recall',
        },
        {
          id: 'ch12-rol-q4',
          prompt: 'När fick judar fullständiga medborgerliga rättigheter i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch12-rol-q5',
          prompt: 'Vilken religion är den näst största i Sverige, och när byggdes de första moskéerna?',
          kind: 'recall',
        },
        {
          id: 'ch12-rol-q6',
          prompt:
            'På vilka sätt tycker du att religion och traditioner påverkar vardagen i Sverige i dag?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Kristendomen har präglat Sverige genom århundradena, och det har satt många kulturella spår. Antalet medlemmar sjunker visserligen i Svenska kyrkan, men många svenskar firar ändå kristna högtider som jul och påsk, även om de inte ser sig själva som religiösa.',
        },
        {
          kind: 'paragraph',
          text: 'På samma vis är religiösa ritualer som till exempel dop, bröllop i kyrkan och en kristen begravning fortfarande vanliga, även bland dem som inte beskriver sig som troende.',
        },
        {
          kind: 'paragraph',
          text: 'Religionens roll i samhället har minskat. Samtidigt har religion och religiösa frågor fått större uppmärksamhet i samhället på senare tid. I takt med att invandringen har ökat har också mängden av religioner som utövas i Sverige ökat – i dag finns så gott som alla världens religioner representerade i Sverige.',
        },
        { kind: 'note', tone: 'info', text: 'Kristendom' },
        {
          kind: 'paragraph',
          text: 'Kristendom är i dag världens största religion. I dagens Sverige finns många olika kristna samfund som representerar olika traditioner och trosinriktningar, till exempel de tre huvudinriktningarna: ortodoxa kyrkor, den katolska kyrkan och olika protestantiska kyrkor.',
        },
        {
          kind: 'paragraph',
          text: 'Svenska kyrkan har omkring fem miljoner medlemmar. Den har historiska rötter i den lutherska, protestantiska traditionen som grundades på 1500-talet. Innan dess, under medeltiden, var Sverige ett katolskt land. Det finns många gamla, ofta medeltida, kyrkor kvar runt om i det svenska landskapet – cirka 1 400 bevarade kyrkor och kyrkoruiner med medeltida ursprung.',
        },
        { kind: 'note', tone: 'info', text: 'Judendom' },
        {
          kind: 'paragraph',
          text: 'Judendomens historia i Sverige kan spåras tillbaka till 1700-talet. Det var först då judar fick rätt att bo och utöva sin religion i Sverige. Antisemitismen var länge mycket spridd i hela Europa, och först 1870 fick judar fullständiga medborgerliga rättigheter i Sverige.',
        },
        {
          kind: 'paragraph',
          text: 'Judendom är den minsta av världsreligionerna. Det finns flera judiska församlingar och synagogor i dagens Sverige. Dessa församlingar erbjuder olika sätt att praktisera judisk tro och kultur och spelar en viktig roll för att bevara och främja judisk tradition och gemenskap.',
        },
        { kind: 'note', tone: 'info', text: 'Hinduism och buddhism' },
        {
          kind: 'paragraph',
          text: 'Kontakterna med hinduer och buddhister i Sverige började främst under 1900-talet, bland annat genom resor till Asien och ett ökat intresse för meditation och yoga. I dag finns det främst buddhister och hinduer bland invandrare från länder där dessa religioner är stora. Det finns både buddhistiska och hinduiska församlingar och tempel på olika platser i Sverige, där det genomförs böner, ritualer och religiösa fester.',
        },
        { kind: 'note', tone: 'info', text: 'Islam' },
        {
          kind: 'paragraph',
          text: 'I början av 1900-talet fanns endast ett fåtal muslimer i Sverige. Det var först efter andra världskriget som antalet muslimer ökade genom invandring. Under 1970-talet byggdes Sveriges första moskéer. Numera är islam den näst största religionen i landet, och det finns moskéer och böne­lokaler över hela Sverige.',
        },
        {
          kind: 'paragraph',
          text: 'De svenska muslimska församlingarna och organisationerna speglar flera olika riktningar och traditioner inom islam, som sunni och shia. De muslimska församlingarna erbjuder bön, undervisning och gemenskap samt spelar en viktig roll i att bevara och främja muslimsk tradition och kultur.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch12-rol-r1',
          prompt: 'Vilken är den näst största religionen i Sverige?',
          options: [
            { id: 'a', text: 'Judendom' },
            { id: 'b', text: 'Islam' },
            { id: 'c', text: 'Buddhism' },
            { id: 'd', text: 'Hinduism' },
          ],
          correctOptionId: 'b',
          explanation:
            'Islam är den näst största religionen i Sverige. Antalet muslimer ökade genom invandring efter andra världskriget, och under 1970-talet byggdes de första moskéerna.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch12-rol-r2',
          prompt: 'Vilket år fick judar fullständiga medborgerliga rättigheter i Sverige?',
          options: [
            { id: 'a', text: '1700-talet' },
            { id: 'b', text: '1860' },
            { id: 'c', text: '1870' },
            { id: 'd', text: '1944' },
          ],
          correctOptionId: 'c',
          explanation:
            'Judendomens historia i Sverige går tillbaka till 1700-talet, men först 1870 fick judar fullständiga medborgerliga rättigheter.',
        },
        {
          kind: 'short-answer',
          id: 'ch12-rol-r3',
          prompt: 'Ungefär hur många medlemmar har Svenska kyrkan?',
          acceptedAnswers: ['fem miljoner', '5 miljoner', 'omkring fem miljoner'],
          modelAnswer: 'Omkring fem miljoner medlemmar.',
        },
        {
          kind: 'short-answer',
          id: 'ch12-rol-r4',
          prompt: 'Vilken är den minsta av världsreligionerna?',
          acceptedAnswers: ['judendom', 'judendomen'],
          modelAnswer: 'Judendomen.',
        },
        {
          kind: 'explain',
          id: 'ch12-rol-r5',
          prompt: 'Förklara med egna ord hur religionens roll i Sverige har förändrats.',
          checklist: [
            'Kristendomen har präglat Sverige och satt kulturella spår.',
            'Antalet medlemmar i Svenska kyrkan sjunker, men många firar kristna högtider ändå.',
            'Religionens roll i samhället har minskat.',
            'Samtidigt har religion fått mer uppmärksamhet, och fler religioner utövas i Sverige på grund av invandring.',
          ],
          modelAnswer:
            'Kristendomen har präglat Sverige genom århundradena och satt många kulturella spår. Medlemsantalet i Svenska kyrkan sjunker, men många firar ändå kristna högtider och använder kristna ritualer utan att se sig som religiösa. Religionens roll i samhället har minskat, men samtidigt har religion och religiösa frågor fått större uppmärksamhet. I takt med ökad invandring har också antalet religioner som utövas i Sverige ökat, och i dag finns så gott som alla världens religioner representerade här.',
        },
      ],
      review: {
        keyTakeaways: [
          'Kristendomen har präglat Sverige; många firar kristna högtider utan att vara troende.',
          'Religionens roll i samhället har minskat, men fler religioner utövas i Sverige i dag.',
          'Kristendom är världens största religion. Svenska kyrkan har omkring fem miljoner medlemmar.',
          'Sverige var katolskt under medeltiden; cirka 1 400 medeltida kyrkor finns kvar.',
          'Judendomen kom till Sverige på 1700-talet; full medborgerlig rättighet 1870. Judendom är minst av världsreligionerna.',
          'Hinduism och buddhism kom främst under 1900-talet.',
          'Islam är näst störst i Sverige; de första moskéerna byggdes på 1970-talet.',
        ],
        mostImportant: 'Svenska kyrkan (ca 5 miljoner medlemmar) och att islam är den näst största religionen i Sverige.',
        glossary: [
          { term: 'Världsreligion', definition: 'En av de stora religionerna: kristendom, islam, hinduism, buddhism, judendom.' },
          { term: 'Antisemitism', definition: 'Fientlighet mot judar.' },
          { term: 'Trossamfund', definition: 'Organiserad religiös gemenskap.' },
        ],
      },
    },
  ],
}
