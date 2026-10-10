import type { Chapter } from '../types'

export const chapter09: Chapter = {
  id: 'ch09',
  order: 9,
  title: 'Välfärdssamhället',
  intro:
    'Kapitlet handlar om välfärdssamhället som ska ge alla invånare en grundläggande ekonomisk och social trygghet. Välfärden finansieras genom skatter. Stat, regioner och kommuner bidrar till välfärden på olika sätt.',
  learningGoals: [
    'Förklara vad välfärdssamhället innebär och hur det finansieras.',
    'Nämn olika slags skatter och vad de går till.',
    'Beskriva vad staten finansierar.',
    'Beskriva vad regionerna och kommunerna ansvarar för.',
    'Känna till vad socialtjänsten gör.',
  ],
  source: { chapter: 9, pages: [30, 31] },
  sections: [
    {
      id: 'ch09-skatter-for-valfarden',
      title: 'Skatter för Sveriges välfärd',
      source: { chapter: 9, pages: [30] },
      survey: {
        overview:
          'Avsnittet förklarar vad välfärdssamhället är, varför det behövs skatteinkomster och vilka olika slags skatter som finns.',
        themes: [
          {
            title: 'Trygghet för alla',
            description: 'Tillgång till sjukvård, utbildning och ekonomiskt stöd vid sjukdom eller arbetslöshet.',
          },
          {
            title: 'Skatter finansierar gemensamma tjänster',
            description: 'Skola, sjukvård och vägar betalas gemensamt.',
          },
          {
            title: 'Tre viktiga skatteslag',
            description: 'Inkomstskatt, moms och arbetsgivaravgifter.',
          },
        ],
        keyConcepts: [
          {
            term: 'Välfärdssamhället',
            definition:
              'Ett samhälle där människor ska kunna leva ett tryggt liv, till exempel genom tillgång till sjukvård, utbildning och ekonomiskt stöd vid sjukdom eller arbetslöshet.',
          },
          {
            term: 'Inkomstskatt',
            definition:
              'En del av lönen man får som anställd går till staten, regionen och kommunen som skatt.',
          },
          {
            term: 'Moms (mervärdesskatt)',
            definition: 'Skatt som man betalar när man köper varor och tjänster.',
          },
          {
            term: 'Arbetsgivaravgifter',
            definition:
              'Avgifter som arbetsgivare betalar till staten för sina anställda, utöver deras löner. Pengarna går till bland annat sjukförsäkring och pensioner.',
          },
        ],
      },
      questions: [
        {
          id: 'ch09-ska-q1',
          prompt: 'Vad innebär välfärdssamhället?',
          kind: 'recall',
        },
        {
          id: 'ch09-ska-q2',
          prompt: 'Vilka tre slags skatter nämns i avsnittet, och vad går de till?',
          kind: 'recall',
        },
        {
          id: 'ch09-ska-q3',
          prompt: 'Vem betalar skatt? Nämn flera olika grupper.',
          kind: 'recall',
        },
        {
          id: 'ch09-ska-q4',
          prompt:
            'Varför får staten, regionerna och kommunerna mer pengar ju fler som jobbar och handlar?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Välfärdssamhället handlar om att människor ska kunna leva ett tryggt liv, till exempel genom att ha tillgång till sjukvård, utbildning och till ekonomiskt stöd vid sjukdom eller arbetslöshet.',
        },
        {
          kind: 'paragraph',
          text: 'En stat kan ge sina invånare en god välfärd när det finns tillräckliga inkomster till statens, regionernas och kommunernas budgetar. Dessa pengar kan till exempel användas till sjukvård och skola. En stor del av pengarna kommer från skatter.',
        },
        {
          kind: 'paragraph',
          text: 'Skatterna gör att många viktiga tjänster kan finansieras gemensamt, till exempel skola, sjukvård och vägar. Skatt betalas inte bara av personer som arbetar, utan till exempel också av företag. Det finns även en skatt (moms) på varor och tjänster.',
        },
        {
          kind: 'concept',
          term: 'Varför skatteintäkterna varierar',
          explanation:
            'Ju fler som jobbar och ju mer varor och tjänster som köps och säljs, desto mer pengar får staten, regionerna och kommunerna in till välfärden.',
        },
        {
          kind: 'list',
          items: [
            'Inkomstskatt: en del av lönen man får som anställd går till staten, regionen och kommunen som skatt.',
            'Moms (mervärdesskatt): denna skatt betalar man när man köper varor och tjänster.',
            'Arbetsgivaravgifter: arbetsgivare betalar avgifter till staten för sina anställda, utöver deras löner. Pengarna går till bland annat sjukförsäkring och pensioner.',
          ],
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'En del välfärdstjänster drivs av privata företag, men de finansieras fortfarande med skattemedel.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch09-ska-r1',
          prompt: 'Vilken skatt betalar man när man köper varor och tjänster?',
          options: [
            { id: 'a', text: 'Inkomstskatt' },
            { id: 'b', text: 'Moms (mervärdesskatt)' },
            { id: 'c', text: 'Arbetsgivaravgift' },
            { id: 'd', text: 'Fastighetsskatt' },
          ],
          correctOptionId: 'b',
          explanation:
            'Moms (mervärdesskatt) betalas när man köper varor och tjänster. Inkomstskatt tas från lönen och arbetsgivaravgifter betalas av arbetsgivaren.',
        },
        {
          kind: 'short-answer',
          id: 'ch09-ska-r2',
          prompt: 'Vad går arbetsgivaravgifterna till?',
          acceptedAnswers: ['sjukförsäkring och pensioner', 'sjukförsäkring och pension'],
          modelAnswer:
            'Pengarna går bland annat till sjukförsäkring och pensioner.',
        },
        {
          kind: 'explain',
          id: 'ch09-ska-r3',
          prompt: 'Förklara med egna ord varför skatter behövs i ett välfärdssamhälle.',
          checklist: [
            'Välfärden finansieras gemensamt.',
            'Skatterna betalar skola, sjukvård och vägar.',
            'Skatt betalas av personer som arbetar, av företag och genom moms.',
            'Mer arbete och konsumtion ger mer pengar till välfärden.',
          ],
          modelAnswer:
            'Skatter behövs för att välfärden ska kunna finansieras gemensamt. En stor del av statens, regionernas och kommunernas inkomster kommer från skatter, och pengarna används till viktiga tjänster som skola, sjukvård och vägar. Skatt betalas av personer som arbetar, av företag och genom moms på varor och tjänster. Ju fler som jobbar och ju mer som köps och säljs, desto mer pengar får samhället in till välfärden.',
        },
      ],
      review: {
        keyTakeaways: [
          'Välfärdssamhället ska ge alla invånare grundläggande ekonomisk och social trygghet.',
          'Välfärden finansieras genom skatter.',
          'Tre viktiga skatteslag: inkomstskatt, moms och arbetsgivaravgifter.',
          'Skatt betalas av arbetande, av företag och genom moms.',
          'Även privat drivna välfärdstjänster finansieras med skattemedel.',
        ],
        mostImportant: 'Skatteslagen inkomstskatt, moms och arbetsgivaravgifter – och att välfärden finansieras gemensamt.',
        glossary: [
          { term: 'Välfärdssamhället', definition: 'Ett samhälle som ger alla grundläggande trygghet.' },
          { term: 'Moms', definition: 'Mervärdesskatt på varor och tjänster.' },
          { term: 'Arbetsgivaravgifter', definition: 'Avgifter arbetsgivaren betalar för de anställda.' },
        ],
      },
    },
    {
      id: 'ch09-olika-ansvar',
      title: 'Stat, regioner och kommuner har olika ansvar',
      source: { chapter: 9, pages: [30, 31] },
      survey: {
        overview:
          'Avsnittet visar vad staten, regionerna och kommunerna ansvarar för inom välfärden – från pensioner och sjukvård till barnomsorg och socialtjänst.',
        themes: [
          {
            title: 'Statligt finansierad välfärd',
            description: 'Pensioner, sjukförsäkring, föräldraförsäkring, studiestöd, barnbidrag och högre utbildning.',
          },
          {
            title: 'Regionerna och sjukvården',
            description: 'Sveriges 21 regioner tar ut skatt och ansvarar för hälso- och sjukvården.',
          },
          {
            title: 'Olika slags sjukvård',
            description: 'Vård nära dig (primärvård), sjukhusvård, psykiatrisk vård, rehabilitering och tandvård.',
          },
          {
            title: 'Kommunernas ansvar',
            description: 'Barnomsorg, skolor, äldreomsorg och socialtjänst.',
          },
        ],
        keyConcepts: [
          {
            term: 'Primärvård',
            definition: 'Vårdcentraler, barnavårds- och mödravårdscentraler.',
          },
          {
            term: 'Sjukhusvård',
            definition:
              'Akutsjukhus, länssjukhus och universitetssjukhus där till exempel operationer och avancerad behandling utförs.',
          },
          {
            term: 'Äldreomsorg',
            definition:
              'Kommunens stöd och hjälp till äldre, till exempel städning, matlagning, tvätt, inköp och personlig hygien. Målet är att äldre ska kunna bo kvar hemma så länge det går.',
          },
          {
            term: 'Socialtjänsten',
            definition:
              'Kommunens verksamhet som ansvarar för att de som behöver får stöd och skydd.',
            explanation:
              'Det kan vara omsorg, vård och service, rådgivning, ekonomisk hjälp och annat bistånd. Det kan handla om familjer med för lite pengar, personer utan bostad, människor med missbruksproblem eller personer utsatta för hot och våld. Socialtjänsten ger också stöd till personer med funktionsnedsättning och råd om arbete och studier.',
          },
        ],
      },
      questions: [
        {
          id: 'ch09-ans-q1',
          prompt: 'Vad finansierar staten inom välfärden?',
          kind: 'recall',
        },
        {
          id: 'ch09-ans-q2',
          prompt: 'Vad ansvarar regionerna för, och hur finansieras de?',
          kind: 'recall',
        },
        {
          id: 'ch09-ans-q3',
          prompt: 'Vad är skillnaden mellan primärvård och sjukhusvård?',
          kind: 'recall',
        },
        {
          id: 'ch09-ans-q4',
          prompt: 'Ge exempel på vad kommunerna ansvarar för.',
          kind: 'recall',
        },
        {
          id: 'ch09-ans-q5',
          prompt:
            'Vilka välfärdstjänster har du eller någon du känner använt? Vem ansvarade för dem?',
          kind: 'reflection',
        },
      ],
      read: [
        { kind: 'note', tone: 'info', text: 'Statligt finansierad välfärd' },
        {
          kind: 'paragraph',
          text: 'Staten finansierar bland annat pensioner, sjukförsäkring, föräldraförsäkring, arbetslöshetsförsäkring, studiestöd och barnbidrag. Staten finansierar också högre utbildning och forskning inom högskolor och universitet.',
        },
        { kind: 'note', tone: 'info', text: 'Regionerna ansvarar för sjukvården' },
        {
          kind: 'paragraph',
          text: 'Sveriges 21 regioner tar ut skatt av sina invånare. De ska bland annat erbjuda hälso- och sjukvård till alla. För att kunna göra det driver och finansierar de sjukhus och vårdcentraler. Sjukvården bedrivs i huvudsak i offentlig regi, men det finns även privata vårdgivare som finansieras med skattemedel.',
        },
        {
          kind: 'list',
          items: [
            'Primärvård: vårdcentraler, barnavårds- och mödravårdscentraler.',
            'Sjukhusvård: akutsjukhus, länssjukhus och universitetssjukhus där till exempel operationer och avancerad behandling utförs.',
            'Övrigt: psykiatrisk vård, rehabilitering och tandvård.',
          ],
        },
        { kind: 'note', tone: 'info', text: 'Kommunerna har ett stort ansvar' },
        {
          kind: 'paragraph',
          text: 'Kommunerna bestämmer själva hur mycket invånarna ska betala i skatt till kommunen och vad pengarna ska användas till. Det är kommunen som ser till att det finns tillgång till skolor och utbildning, och det är kommunens ansvar att gamla och sjuka kan få hjälp när de inte klarar vardagen på egen hand.',
        },
        {
          kind: 'list',
          items: [
            'Barnomsorg: förskolor och fritidshem.',
            'Skolor och utbildning: grundskolor för barn mellan 6 och 16 år, gymnasieskolor och kommunal vuxenutbildning.',
            'Äldreomsorg: hjälp med städning, matlagning, tvätt, inköp och personlig hygien. Kommunen kan hjälpa till med vård och service så att äldre kan bo kvar hemma, eller erbjuda ett boende anpassat för äldre.',
            'Socialtjänsten: ansvarar för att de som behöver får stöd och skydd.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Staten, regionerna och kommunerna har ansvar för olika delar av välfärden. Alla medborgare ska kunna känna en grundtrygghet i samhället oavsett hur gamla de är eller vilken livssituation de befinner sig i.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch09-ans-r1',
          prompt: 'Vem ansvarar för hälso- och sjukvården i Sverige?',
          options: [
            { id: 'a', text: 'Staten' },
            { id: 'b', text: 'De 21 regionerna' },
            { id: 'c', text: 'De 290 kommunerna' },
            { id: 'd', text: 'EU' },
          ],
          correctOptionId: 'b',
          explanation:
            'Regionerna ansvarar för hälso- och sjukvården. De tar ut skatt av sina invånare och driver och finansierar sjukhus och vårdcentraler.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch09-ans-r2',
          prompt: 'Vilken av följande är ett statligt finansierat område?',
          options: [
            { id: 'a', text: 'Äldreomsorg' },
            { id: 'b', text: 'Barnomsorg och fritidshem' },
            { id: 'c', text: 'Pensioner och barnbidrag' },
            { id: 'd', text: 'Snöröjning' },
          ],
          correctOptionId: 'c',
          explanation:
            'Staten finansierar bland annat pensioner, sjukförsäkring, föräldraförsäkring, arbetslöshetsförsäkring, studiestöd och barnbidrag. Äldreomsorg och barnomsorg är kommunala ansvarsområden.',
        },
        {
          kind: 'short-answer',
          id: 'ch09-ans-r3',
          prompt: 'Vad ansvarar socialtjänsten för?',
          acceptedAnswers: [
            'att de som behöver får stöd och skydd',
            'stöd och skydd',
            'omsorg vård och service och ekonomisk hjälp',
          ],
          modelAnswer:
            'Socialtjänsten ansvarar för att de som behöver får stöd och skydd, till exempel omsorg, vård och service, rådgivning, ekonomisk hjälp och annat bistånd.',
        },
        {
          kind: 'explain',
          id: 'ch09-ans-r4',
          prompt: 'Förklara med egna ord skillnaden mellan vad staten, regionerna och kommunerna ansvarar för i välfärden.',
          checklist: [
            'Staten: pensioner, försäkringar, studiestöd, barnbidrag, högre utbildning och forskning.',
            'Regionerna: hälso- och sjukvård, kollektivtrafik och länsmuseer; tar ut skatt.',
            'Kommunerna: barnomsorg, skolor, äldreomsorg och socialtjänst; bestämmer själva sin skatt.',
          ],
          modelAnswer:
            'Staten finansierar bland annat pensioner, sjukförsäkring, föräldraförsäkring, arbetslöshetsförsäkring, studiestöd, barnbidrag, högre utbildning och forskning. Regionerna ansvarar främst för hälso- och sjukvården och tar ut skatt av invånarna. Kommunerna ansvarar för barnomsorg, skolor, äldreomsorg och socialtjänst, och bestämmer själva hur mycket invånarna ska betala i kommunalskatt och vad pengarna ska användas till.',
        },
      ],
      review: {
        keyTakeaways: [
          'Staten finansierar pensioner, sjukförsäkring, föräldraförsäkring, arbetslöshetsförsäkring, studiestöd, barnbidrag, högre utbildning och forskning.',
          'Regionerna (21) ansvarar för hälso- och sjukvården och tar ut skatt.',
          'Sjukvården delas in i primärvård (vård nära dig), sjukhusvård, psykiatrisk vård, rehabilitering och tandvård.',
          'Kommunerna (290) ansvarar för barnomsorg, skolor, äldreomsorg och socialtjänst.',
          'Kommunerna bestämmer själva sin skattesats.',
          'Socialtjänsten ger stöd och skydd till den som behöver.',
        ],
        mostImportant: 'Stat = försäkringar och bidrag, region = sjukvård, kommun = barnomsorg, skola, äldreomsorg och socialtjänst.',
        glossary: [
          { term: 'Primärvård', definition: 'Vårdcentraler och mödravårdscentraler.' },
          { term: 'Äldreomsorg', definition: 'Kommunens hjälp till äldre så att de kan bo kvar hemma.' },
          { term: 'Socialtjänsten', definition: 'Kommunens stöd och skydd till den som behöver.' },
        ],
      },
    },
  ],
}
