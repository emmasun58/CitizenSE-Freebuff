import type { Chapter } from '../types'

export const chapter07: Chapter = {
  id: 'ch07',
  order: 7,
  title: 'Mänskliga rättigheter',
  intro:
    'Kapitlet handlar om de mänskliga rättigheterna, hur de har påverkat lagarna i Sverige och om särskilda rättigheter för kvinnor, barn och minoritetsgrupper. Det handlar också om hur Sverige arbetar mot diskriminering och hatbrott.',
  learningGoals: [
    'Förklara vad mänskliga rättigheter är och var de kommer från.',
    'Känna till vad FN:s förklaring om de mänskliga rättigheterna innehåller.',
    'Redogöra för hur Sverige arbetar för jämställdhet.',
    'Förklara vad barnkonventionen innebär och varför den är lag i Sverige.',
    'Känna till Sveriges nationella minoriteter och minoritetsspråk.',
    'Förklara vad diskrimineringslagen förbjuder och vad DO gör.',
  ],
  source: { chapter: 7, pages: [22, 23, 24, 25, 26] },
  sections: [
    {
      id: 'ch07-rattigheter-galler-alla',
      title: 'Mänskliga rättigheter gäller alla',
      source: { chapter: 7, pages: [22] },
      survey: {
        overview:
          'Avsnittet förklarar vad mänskliga rättigheter är, hur FN bildades och vad FN:s förklaring om de mänskliga rättigheterna innehåller. Du får också veta vad diskriminering är och vad diskrimineringslagen förbjuder.',
        themes: [
          {
            title: 'Rättigheter för alla',
            description: 'Alla människor har rättigheter som är lika för alla.',
          },
          {
            title: 'FN bildas 1945',
            description: '51 länder bildade FN efter andra världskriget för att förhindra krig.',
          },
          {
            title: 'FN:s förklaring 1948',
            description: '30 artiklar om de rättigheter som ingen får ta ifrån någon.',
          },
          {
            title: 'Diskriminering och diskrimineringslagen',
            description: 'Diskriminering är ett brott mot de mänskliga rättigheterna.',
          },
        ],
        keyConcepts: [
          {
            term: 'Mänskliga rättigheter',
            definition:
              'Rättigheter som grundar sig på idén att alla människor har rättigheter som är lika för alla.',
          },
          {
            term: 'FN (Förenta nationerna)',
            definition:
              'En organisation som 51 länder bildade efter andra världskriget 1945 för att förhindra krig och skydda varje människas rättigheter.',
          },
          {
            term: 'FN:s förklaring om de mänskliga rättigheterna',
            definition:
              'Presenterad 1948 och innehåller 30 artiklar om allas lika värde och rättigheter.',
          },
          {
            term: 'Diskriminering',
            definition: 'Att vissa människor behandlas sämre än andra.',
            explanation:
              'Diskriminering är ett brott mot de mänskliga rättigheterna. I Sverige finns diskrimineringslagen, som förbjuder diskriminering på grund av kön, ålder, etnicitet, religion, sexuell läggning eller funktionsnedsättning.',
          },
        ],
      },
      questions: [
        {
          id: 'ch07-men-q1',
          prompt: 'Vilka länder bildade FN, och varför?',
          kind: 'recall',
        },
        {
          id: 'ch07-men-q2',
          prompt: 'Vilket år presenterades FN:s förklaring om de mänskliga rättigheterna, och hur många artiklar innehåller den?',
          kind: 'recall',
        },
        {
          id: 'ch07-men-q3',
          prompt: 'Vad betyder diskriminering, och vad förbjuder diskrimineringslagen?',
          kind: 'recall',
        },
        {
          id: 'ch07-men-q4',
          prompt: 'Varför tror du att Sverige har en särskild lag mot diskriminering?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Mänskliga rättigheter grundar sig på idén om att alla människor har rättigheter som är lika för alla.',
        },
        {
          kind: 'paragraph',
          text: 'Efter andra världskriget 1945 bestämde sig 51 länder för att skapa Förenta nationerna (FN), för att förhindra krig i framtiden och för att skydda varje människas rättigheter. Ett av FN:s första uppdrag var att komma överens om de rättigheter som alla människor har och som ingen annan får förneka eller ta ifrån dem.',
        },
        {
          kind: 'paragraph',
          text: 'FN presenterade förklaringen om de mänskliga rättigheterna 1948. Den innehåller totalt 30 bestämmelser som kallas artiklar, och den säger att alla människor är födda fria och lika i värde och rättigheter samt har rätt till ett liv fritt från våld.',
        },
        { kind: 'note', tone: 'info', text: 'Alla har rätt:' },
        {
          kind: 'list',
          items: [
            'att säga sin åsikt och dela den med andra,',
            'att arbeta, vila och ha semester från arbetet,',
            'att gå i skolan,',
            'att fly till, söka asyl och få skydd i ett annat land om ens liv är i fara,',
            'att tro på vilken religion man vill, eller att inte tro alls,',
            'att inte bli diskriminerad på grund av kön eller hudfärg,',
            'till en nationalitet – ingen får fråntas sitt medborgarskap utan godkänd och saklig anledning enligt lagen.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Alla ska till exempel ha rätt till sjukvård och utbildning. Alla ska ha rätt att äta sig mätta och att vara medborgare i ett land.',
        },
        {
          kind: 'concept',
          term: 'Diskriminering',
          explanation:
            'Diskriminering betyder att vissa människor behandlas sämre än andra. Det är ett brott mot de mänskliga rättigheterna. I Sverige finns diskrimineringslagen, som förbjuder diskriminering på grund av kön, ålder, etnicitet, religion, sexuell läggning eller funktionsnedsättning.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch07-men-r1',
          prompt: 'Vilket år presenterades FN:s förklaring om de mänskliga rättigheterna?',
          options: [
            { id: 'a', text: '1945' },
            { id: 'b', text: '1948' },
            { id: 'c', text: '1951' },
            { id: 'd', text: '2000' },
          ],
          correctOptionId: 'b',
          explanation:
            'FN presenterade förklaringen om de mänskliga rättigheterna 1948. Den innehåller 30 artiklar.',
        },
        {
          kind: 'short-answer',
          id: 'ch07-men-r2',
          prompt: 'Hur många länder bildade FN, och vilket år?',
          acceptedAnswers: ['51 länder 1945', '51, 1945'],
          modelAnswer: '51 länder bildade FN 1945, efter andra världskriget.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch07-men-r3',
          prompt: 'Vilka grunder förbjuder diskrimineringslagen?',
          options: [
            { id: 'a', text: 'Kön, ålder, etnicitet, religion, sexuell läggning och funktionsnedsättning.' },
            { id: 'b', text: 'Endast kön och ålder.' },
            { id: 'c', text: 'Endast religion och etnicitet.' },
            { id: 'd', text: 'Inga – diskrimineringslagen är bara rådgivande.' },
          ],
          correctOptionId: 'a',
          explanation:
            'Diskrimineringslagen förbjuder diskriminering på grund av kön, ålder, etnicitet, religion, sexuell läggning eller funktionsnedsättning. Senare i kapitlet nämns också könsidentitet och könsuttryck.',
        },
        {
          kind: 'explain',
          id: 'ch07-men-r4',
          prompt: 'Förklara med egna ord vad mänskliga rättigheter innebär och ge tre exempel.',
          checklist: [
            'Alla människor har rättigheter som är lika för alla.',
            'Ingen får förneka eller ta ifrån någon dessa rättigheter.',
            'Ger minst tre exempel från förklaringen.',
          ],
          modelAnswer:
            'Mänskliga rättigheter grundar sig på idén att alla människor har rättigheter som är lika för alla, och som ingen annan får förneka eller ta ifrån dem. Exempel är rätten att säga sin åsikt, rätten att gå i skolan, rätten till sjukvård och utbildning, rätten att tro på vilken religion man vill eller att inte tro alls, och rätten att inte bli diskriminerad.',
        },
      ],
      review: {
        keyTakeaways: [
          'Mänskliga rättigheter gäller alla och är lika för alla.',
          '51 länder bildade FN 1945 för att förhindra krig och skydda människors rättigheter.',
          'FN:s förklaring om de mänskliga rättigheterna kom 1948 och har 30 artiklar.',
          'Rättigheterna omfattar bland annat åsiktsfrihet, skola, asyl, religionsfrihet och skydd mot diskriminering.',
          'Diskriminering är att behandla vissa sämre – och ett brott mot de mänskliga rättigheterna.',
          'Diskrimineringslagen förbjuder diskriminering på grund av kön, ålder, etnicitet, religion, sexuell läggning och funktionsnedsättning.',
        ],
        mostImportant: 'FN 1945, förklaringen 1948 med 30 artiklar – och att rättigheterna gäller alla lika.',
        glossary: [
          { term: 'FN', definition: 'Förenta nationerna, bildat 1945 av 51 länder.' },
          { term: 'Artikel', definition: 'En av de 30 bestämmelserna i FN:s förklaring.' },
          { term: 'Diskriminering', definition: 'Att vissa människor behandlas sämre än andra.' },
        ],
      },
    },
    {
      id: 'ch07-jamstalldhet',
      title: 'Jämställdhet mellan könen',
      source: { chapter: 7, pages: [23, 24] },
      survey: {
        overview:
          'Avsnittet förklarar vad Sveriges jämställdhetspolitik innebär, ger exempel på hur Sverige arbetat för jämställdhet och beskriver vad lagen säger om våld i nära relationer, samtycke och sexköp.',
        themes: [
          {
            title: 'Målet med jämställdhetspolitiken',
            description: 'Kvinnor och män ska ha samma rättigheter, skyldigheter och makt.',
          },
          {
            title: 'Exempel på jämställdhetsarbete',
            description: 'Lika många i politiken, lika lön, lika möjligheter och delad föräldraledighet.',
          },
          {
            title: 'Könsrelaterat våld och förtryck',
            description: 'Våld i nära relationer och hedersrelaterat våld och förtryck är brottsligt.',
          },
          {
            title: 'Samtyckeslagen och sexköpslagen',
            description: 'Deltagande måste vara frivilligt – och det är olagligt att köpa sex.',
          },
        ],
        keyConcepts: [
          {
            term: 'Jämställdhet',
            definition:
              'Att kvinnor och män ska ha samma rättigheter och skyldigheter och lika mycket makt att påverka samhället och sina egna liv.',
          },
          {
            term: 'Samtyckeslagen',
            definition:
              'Lagen som innebär att den som vill ha sex med en person måste försäkra sig om att den andra personen deltar frivilligt.',
            explanation: 'Det gäller även när personerna är gifta.',
          },
          {
            term: 'Hedersrelaterat våld och förtryck',
            definition:
              'När en familj eller grupp försöker kontrollera hur människor inom familjen eller gruppen beter sig, till exempel med fysiskt våld, psykisk press eller sociala hot.',
            explanation:
              'Det riktas inte bara mot kvinnor och flickor utan även mot pojkar, män och hbtqi-personer. Det kan handla om hård kontroll, till exempel att tvingas gifta sig mot sin vilja. Barnäktenskap – när någon under 18 år gifter sig – är förbjudet enligt svensk lag.',
          },
          {
            term: 'Sexköpslagen',
            definition:
              'Lagen som gör det olagligt att köpa sex. Personen som köper sex kan straffas, men inte den som säljer.',
            explanation:
              'Genom att rikta straffet mot köparen vill lagen markera att det inte är acceptabelt att utnyttja någon sexuellt mot betalning.',
          },
          {
            term: 'Jämställdhetsmyndigheten',
            definition: 'Myndigheten som ansvarar för det nationella arbetet mot hedersrelaterat våld och förtryck.',
          },
        ],
      },
      questions: [
        {
          id: 'ch07-jam-q1',
          prompt: 'Vad är målet med Sveriges jämställdhetspolitik?',
          kind: 'recall',
        },
        {
          id: 'ch07-jam-q2',
          prompt: 'Ge tre exempel på hur Sverige har arbetat för jämställdhet mellan könen.',
          kind: 'recall',
        },
        {
          id: 'ch07-jam-q3',
          prompt: 'Vad innebär samtyckeslagen?',
          kind: 'recall',
        },
        {
          id: 'ch07-jam-q4',
          prompt: 'Varför riktar sexköpslagen straffet mot köparen och inte mot den som säljer sex?',
          kind: 'recall',
        },
        {
          id: 'ch07-jam-q5',
          prompt: 'Varför tror du att föräldrapenningen räknas som en jämställdhetsfråga?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sveriges politik för jämställdhet innebär att kvinnor och män ska ha samma rättigheter och skyldigheter och lika mycket makt att påverka samhället och sina egna liv.',
        },
        {
          kind: 'paragraph',
          text: 'Det kan innebära att samhället behöver förändra diskriminerande regler, motverka sexuellt våld och höja andelen kvinnliga chefer.',
        },
        { kind: 'note', tone: 'info', text: 'Så har Sverige arbetat med jämställdhet mellan könen:' },
        {
          kind: 'list',
          items: [
            'Sverige vill ha lika många kvinnor och män i politiken. Partierna uppmuntras att utse både kvinnor och män till valen.',
            'Det finns lagar som ska se till att kvinnor och män får lika lön för lika arbete. Arbetsplatser kontrolleras och fackförbund och myndigheter arbetar för rättvisa löner.',
            'Skolor och myndigheter arbetar för att alla kvinnor och män ska ha samma möjligheter till utbildning och personlig utveckling.',
            'Föräldrapenningen gör det möjligt för både kvinnor och män att vara hemma med barnen när de är små. Staten informerar och uppmuntrar föräldrar att dela på föräldraledigheten.',
          ],
        },
        { kind: 'note', tone: 'warn', text: 'Könsrelaterat våld och förtryck' },
        {
          kind: 'paragraph',
          text: 'Våld i nära relationer och hedersrelaterat våld och förtryck är brottsligt enligt svensk lag. Våld i nära relationer kan till exempel vara att en person blir utsatt för våld av en familjemedlem, exempelvis sexuellt våld.',
        },
        {
          kind: 'concept',
          term: 'Samtyckeslagen',
          explanation:
            'Sverige har en samtyckeslag. Det innebär att den som vill ha sex med en person måste försäkra sig om att den andra personen deltar frivilligt. Det gäller även när personerna är gifta.',
        },
        {
          kind: 'concept',
          term: 'Hedersrelaterat våld',
          explanation:
            'Hedersrelaterat våld innebär att en familj eller grupp försöker kontrollera hur människor inom familjen eller gruppen beter sig. Det kan handla om fysiskt våld, psykisk press eller sociala hot mot vissa familjemedlemmar. Våldet kan riktas mot kvinnor och flickor, men även mot pojkar, män och hbtqi-personer. Även barnäktenskap – när någon under 18 år gifter sig – är förbjudet enligt svensk lag.',
        },
        {
          kind: 'paragraph',
          text: 'Jämställdhetsmyndigheten ansvarar för det nationella arbetet mot hedersrelaterat våld och förtryck. Staten finansierar stödverksamhet, skyddade boenden och organisationer som arbetar med utsatta personer.',
        },
        {
          kind: 'concept',
          term: 'Sexköpslagen',
          explanation:
            'I Sverige är det olagligt att köpa sex. Personen som köper sex kan straffas, men inte den som säljer det. Genom att rikta straffet mot köparen vill lagen markera att det inte är acceptabelt att utnyttja någon sexuellt mot betalning.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch07-jam-r1',
          prompt: 'Vem kan straffas enligt sexköpslagen?',
          options: [
            { id: 'a', text: 'Den som säljer sex' },
            { id: 'b', text: 'Den som köper sex' },
            { id: 'c', text: 'Både köparen och säljaren' },
            { id: 'd', text: 'Ingen – lagen är avskaffad' },
          ],
          correctOptionId: 'b',
          explanation:
            'Det är olagligt att köpa sex. Straffet riktas mot köparen, för att markera att det inte är acceptabelt att utnyttja någon sexuellt mot betalning.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch07-jam-r2',
          prompt: 'Vad innebär samtyckeslagen?',
          options: [
            { id: 'a', text: 'Att man måste vara gift för att ha sex.' },
            {
              id: 'b',
              text: 'Att den som vill ha sex måste försäkra sig om att den andra personen deltar frivilligt.',
            },
            { id: 'c', text: 'Att samtycke bara krävs utanför äktenskapet.' },
            { id: 'd', text: 'Att samtycke inte behövs inom familjen.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Samtyckeslagen innebär att den som vill ha sex med en person måste försäkra sig om att den andra personen deltar frivilligt – även när personerna är gifta.',
        },
        {
          kind: 'short-answer',
          id: 'ch07-jam-r3',
          prompt: 'Vid vilken ålder är barnäktenskap förbjudet enligt svensk lag?',
          acceptedAnswers: ['under 18 år', '18 år', 'under 18'],
          modelAnswer: 'Barnäktenskap – när någon under 18 år gifter sig – är förbjudet enligt svensk lag.',
        },
        {
          kind: 'explain',
          id: 'ch07-jam-r4',
          prompt: 'Förklara med egna ord vad målet med Sveriges jämställdhetspolitik är och ge tre exempel på åtgärder.',
          checklist: [
            'Målet: samma rättigheter och skyldigheter och lika mycket makt.',
            'Exempel: lika många kvinnor och män i politiken.',
            'Exempel: lagar om lika lön för lika arbete.',
            'Exempel: föräldrapenning som uppmuntrar delad föräldraledighet.',
          ],
          modelAnswer:
            'Målet är att kvinnor och män ska ha samma rättigheter och skyldigheter och lika mycket makt att påverka samhället och sina egna liv. Sverige arbetar bland annat för lika många kvinnor och män i politiken, för lagar om lika lön för lika arbete, för samma möjligheter till utbildning och utveckling, och för att både kvinnor och män ska kunna vara hemma med barnen genom föräldrapenningen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Jämställdhet: samma rättigheter, skyldigheter och makt för kvinnor och män.',
          'Åtgärder: fler kvinnor i politiken, lika lön för lika arbete, lika möjligheter och delad föräldraledighet.',
          'Våld i nära relationer och hedersrelaterat våld och förtryck är brottsligt.',
          'Samtyckeslagen: deltagandet måste vara frivilligt, även inom äktenskapet.',
          'Barnäktenskap under 18 år är förbjudet.',
          'Sexköpslagen: den som köper sex kan straffas, inte den som säljer.',
          'Jämställdhetsmyndigheten ansvarar för arbetet mot hedersrelaterat våld.',
        ],
        mostImportant: 'Samtyckeslagen och sexköpslagen är svenska särdrag som ofta kommer på provet.',
        glossary: [
          { term: 'Jämställdhet', definition: 'Samma rättigheter, skyldigheter och makt för kvinnor och män.' },
          { term: 'Samtyckeslagen', definition: 'Deltagandet måste vara frivilligt.' },
          { term: 'Sexköpslagen', definition: 'Olagligt att köpa sex; straffet riktas mot köparen.' },
        ],
      },
    },
    {
      id: 'ch07-barns-rattigheter',
      title: 'Barns rättigheter',
      source: { chapter: 7, pages: [24, 25] },
      survey: {
        overview:
          'Avsnittet handlar om barnkonventionen, som sedan 2020 är svensk lag. Du får veta vad det innebär i praktiken och hur Sverige var först i världen med att förbjuda våld mot barn.',
        themes: [
          {
            title: 'Barnkonventionen',
            description: 'FN:s konvention om barns rättigheter – lag i Sverige sedan 2020.',
          },
          {
            title: 'Vad det innebär i praktiken',
            description: 'Barn ska få tycka till i frågor som rör dem, och barns bästa ska beaktas.',
          },
          {
            title: 'Föräldrarnas ansvar',
            description: 'Vårdnadshavare ansvarar för barnets uppfostran och har rätt till stöd från samhället.',
          },
          {
            title: 'Förbud mot våld mot barn',
            description: 'Sverige var 1979 först i världen med att förbjuda att slå barn.',
          },
        ],
        keyConcepts: [
          {
            term: 'Barnkonventionen',
            definition: "FN:s konvention om barns rättigheter, som ska skydda alla barns mänskliga rättigheter.",
            explanation:
              'Sedan 2020 är barnkonventionen lag i Sverige. Den svenska staten har det yttersta ansvaret för att alla Sveriges lagar stödjer barnkonventionen, och myndigheter, domstolar, kommuner och regioner ska tillämpa den.',
          },
          {
            term: 'Barns bästa',
            definition:
              'Principen att barnets bästa ska beaktas när myndigheter och kommuner fattar beslut som påverkar barn.',
          },
          {
            term: 'Vårdnadshavare',
            definition:
              'Den eller de personer som har ansvar för barnets uppfostran, utveckling och för att barnet har det bra.',
          },
        ],
      },
      questions: [
        {
          id: 'ch07-bar-q1',
          prompt: 'Vad är barnkonventionen, och sedan vilket år är den lag i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch07-bar-q2',
          prompt: 'Ge tre exempel på vad det innebär att barnkonventionen tillämpas.',
          kind: 'recall',
        },
        {
          id: 'ch07-bar-q3',
          prompt: 'Vilket år blev det förbjudet att slå barn i Sverige, och vad var särskilt med det?',
          kind: 'recall',
        },
        {
          id: 'ch07-bar-q4',
          prompt: 'Vem har ansvaret för ett barns uppfostran, och vad har de rätt till?',
          kind: 'recall',
        },
        {
          id: 'ch07-bar-q5',
          prompt:
            'Varför tror du att det är viktigt att barn får komma till tals i frågor som rör dem?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'FN har kommit överens om en konvention om barns rättigheter. Barnkonventionen ska skydda alla barns mänskliga rättigheter, och sedan 2020 är den lag i Sverige.',
        },
        {
          kind: 'paragraph',
          text: 'Det är viktigt att föräldrar och vuxna som arbetar med barn vet vilka rättigheter barn har, för att kunna hjälpa dem att få sina rättigheter respekterade. Den svenska staten har det yttersta ansvaret för att alla Sveriges lagar stödjer barnkonventionen. Myndigheter, domstolar, kommuner och regioner ska tillämpa barnkonventionen. Det betyder till exempel att:',
        },
        {
          kind: 'list',
          items: [
            'Politiker och myndigheter ska fråga barn vad de tycker innan de bestämmer något som påverkar barnen.',
            'Om föräldrarna ska skiljas och de inte är överens om var barnet ska bo, ska domstolen fråga även barnet vad det vill.',
            'Kommuner ska tänka på barns bästa när de till exempel bygger nya bostäder, lekplatser eller skolor.',
            'Hälso- och sjukvården och skolor ska arbeta för att inget barn ska bli diskriminerat.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Barnkonventionen säger att det är föräldrarna, eller en annan vårdnadshavare, som har ansvaret för barnets uppfostran, utveckling och för att barnet har det bra. För att kunna göra detta har vårdnadshavarna rätt till stöd från samhället, till exempel från kommunen eller hälso- och sjukvården.',
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'Allt våld mot barn är förbjudet både enligt barnkonventionen och svensk lag, och brottet kan ge fängelse. Sverige var 1979 det första landet i världen som beslutade att det är förbjudet att slå barn. I dag har omkring 70 länder i världen förbjudit våld mot barn.',
        },
        {
          kind: 'paragraph',
          text: 'Våld mot barn kan handla om misshandel, psykiskt våld, sexuella övergrepp eller kvinnlig könsstympning. Förbudet mot våld gäller alla och överallt, i hemmet och i hela samhället.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch07-bar-r1',
          prompt: 'Sedan vilket år är barnkonventionen lag i Sverige?',
          options: [
            { id: 'a', text: '1979' },
            { id: 'b', text: '1990' },
            { id: 'c', text: '2020' },
            { id: 'd', text: '1948' },
          ],
          correctOptionId: 'c',
          explanation: 'Sedan 2020 är barnkonventionen lag i Sverige.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch07-bar-r2',
          prompt: 'Vilket år blev Sverige först i världen med att förbjuda att slå barn?',
          options: [
            { id: 'a', text: '1948' },
            { id: 'b', text: '1979' },
            { id: 'c', text: '1995' },
            { id: 'd', text: '2020' },
          ],
          correctOptionId: 'b',
          explanation:
            'Sverige var 1979 det första landet i världen som beslutade att det är förbjudet att slå barn. I dag har omkring 70 länder följt efter.',
        },
        {
          kind: 'short-answer',
          id: 'ch07-bar-r3',
          prompt: 'Vem har enligt barnkonventionen ansvaret för barnets uppfostran och utveckling?',
          acceptedAnswers: ['föräldrarna', 'föräldrarna eller vårdnadshavare', 'vårdnadshavarna'],
          modelAnswer:
            'Föräldrarna eller en annan vårdnadshavare. De har rätt till stöd från samhället för att kunna ta det ansvaret.',
        },
        {
          kind: 'explain',
          id: 'ch07-bar-r4',
          prompt: 'Förklara med egna ord vad det innebär att barnkonventionen är lag i Sverige.',
          checklist: [
            'Statens yttersta ansvar för att lagarna stödjer barnkonventionen.',
            'Myndigheter, domstolar, kommuner och regioner ska tillämpa den.',
            'Barn ska få komma till tals i frågor som rör dem.',
            'Barns bästa ska beaktas i beslut.',
          ],
          modelAnswer:
            'Att barnkonventionen är lag innebär att staten har det yttersta ansvaret för att alla svenska lagar stödjer den, och att myndigheter, domstolar, kommuner och regioner ska tillämpa den. I praktiken betyder det att politiker och myndigheter ska fråga barn vad de tycker innan de bestämmer något som påverkar dem, att domstolen ska fråga barnet vid vårdnadstvister och att kommuner ska tänka på barns bästa när de till exempel bygger bostäder, lekplatser eller skolor.',
        },
      ],
      review: {
        keyTakeaways: [
          'Barnkonventionen skyddar alla barns mänskliga rättigheter.',
          'Sedan 2020 är barnkonventionen lag i Sverige.',
          'Staten har det yttersta ansvaret; myndigheter, domstolar, kommuner och regioner ska tillämpa den.',
          'Barn ska få tycka till i frågor som rör dem, och barns bästa ska beaktas.',
          'Föräldrarna eller vårdnadshavarna ansvarar för barnets uppfostran och har rätt till stöd.',
          'Sverige förbjöd att slå barn 1979 – först i världen.',
        ],
        mostImportant: 'Barnkonventionen är svensk lag sedan 2020, och Sverige var först i världen (1979) med att förbjuda att slå barn.',
        glossary: [
          { term: 'Barnkonventionen', definition: "FN:s konvention om barns rättigheter – svensk lag sedan 2020." },
          { term: 'Vårdnadshavare', definition: 'Den eller de som ansvarar för barnets uppfostran.' },
          { term: 'Barns bästa', definition: 'Principen att barnets bästa ska beaktas i beslut.' },
        ],
      },
    },
    {
      id: 'ch07-minoriteters-rattigheter',
      title: 'Minoriteters rättigheter',
      source: { chapter: 7, pages: [25, 26] },
      survey: {
        overview:
          'Avsnittet handlar om de fem nationella minoriteterna och deras språk, om samerna som urfolk och om hbtqi-personers rättigheter. Du får också veta vilket skydd personer med funktionsnedsättning har.',
        themes: [
          {
            title: 'Nationella minoriteter',
            description: 'Judar, romer, samer, sverigefinnar och tornedalingar – erkända år 2000.',
          },
          {
            title: 'Minoritetsspråk',
            description: 'Jiddisch, romani chib, samiska, finska och meänkieli.',
          },
          {
            title: 'Samer som urfolk',
            description: 'Samer har särskilda rättigheter och ett eget folkvalt parlament, Sametinget.',
          },
          {
            title: 'Hbtqi-personer',
            description: 'Skydd i diskrimineringslagen och rätt att leva med vem man vill.',
          },
          {
            title: 'Personer med funktionsnedsättning',
            description: 'Lagar ska skydda mot diskriminering och ge möjlighet att delta på jämlika villkor.',
          },
        ],
        keyConcepts: [
          {
            term: 'Nationell minoritet',
            definition:
              'Folkgrupper som bott mycket länge i Sverige och har egna språk, kulturer och identiteter. Sedan år 2000 räknas judar, romer, samer, sverigefinnar och tornedalingar dit.',
          },
          {
            term: 'Minoritetsspråk',
            definition: 'Jiddisch, romani chib, samiska, finska och meänkieli.',
            explanation:
              'De nationella minoriteterna har rätt att använda sina minoritetsspråk i myndighetskontakter, i förskola och i äldreomsorg.',
          },
          {
            term: 'Urfolk',
            definition:
              'En folkgrupp med en långvarig och stark relation till ett landområde. Samer är ett erkänt urfolk.',
          },
          {
            term: 'Sápmi',
            definition: 'Det område som samerna har en stark relation till, och som sträcker sig över Sverige, Norge, Finland och Ryssland.',
          },
          {
            term: 'Sametinget',
            definition:
              'Samernas folkvalda parlament, som representerar den samiska befolkningen i frågor om språk, kultur och identitet.',
            explanation: 'Det är ett rådgivande organ som även har vissa myndighetsuppgifter.',
          },
          {
            term: 'Hbtqi',
            definition:
              'Ett samlingsnamn för homosexuella, bisexuella, transpersoner, queera och intersexpersoner.',
          },
        ],
      },
      questions: [
        {
          id: 'ch07-min-q1',
          prompt: 'Vilka är Sveriges nationella minoriteter, och vilket år erkändes de?',
          kind: 'recall',
        },
        {
          id: 'ch07-min-q2',
          prompt: 'Vilka är minoritetsspråken, och var har minoriteterna rätt att använda dem?',
          kind: 'recall',
        },
        {
          id: 'ch07-min-q3',
          prompt: 'Vad är Sápmi, och vad har samerna som urfolk för särskilt organ?',
          kind: 'recall',
        },
        {
          id: 'ch07-min-q4',
          prompt: 'Vilka rättigheter har hbtqi-personer i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch07-min-q5',
          prompt:
            'Varför tror du att Sverige ger särskilt skydd till vissa minoritetsgrupper?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige ger särskilt skydd till vissa minoritetsgrupper.',
        },
        {
          kind: 'paragraph',
          text: 'Flera folkgrupper har bott mycket länge i Sverige och har egna språk, kulturer och identiteter som skiljer sig från majoritetsbefolkningens. Tidigare hade de ofta inte samma rättigheter som majoritetsbefolkningen och blev diskriminerade.',
        },
        {
          kind: 'concept',
          term: 'Nationella minoriteter',
          explanation:
            'År 2000 erkände Sverige judar, romer, samer, sverigefinnar och tornedalingar som nationella minoriteter. De nationella minoriteterna har rätt att använda sina minoritetsspråk – jiddisch, romani chib, samiska, finska och meänkieli – i myndighetskontakter, i förskola och i äldreomsorg.',
        },
        {
          kind: 'concept',
          term: 'Samer som urfolk',
          explanation:
            'Samer är också ett erkänt urfolk. De har en långvarig och mycket stark relation till ett stort landområde som sträcker sig över Sverige, Norge, Finland och Ryssland och som kallas Sápmi. Som urfolk har samerna särskilda rättigheter kopplade till mark och naturresurser i svenska Sápmi. De har ett eget folkvalt parlament, Sametinget, som representerar den samiska befolkningen i frågor om språk, kultur och identitet.',
        },
        {
          kind: 'example',
          title: 'Renskötsel',
          text: 'Medlemmar i samebyar har rätt att bedriva renskötsel i Sverige inom särskilda betesområden.',
        },
        {
          kind: 'concept',
          term: 'Hbtqi-personer',
          explanation:
            'Hbtqi-personer är människor med annan könsidentitet eller sexualitet än majoriteten. I Sverige är diskriminering på grund av sexuell läggning, könsidentitet och könsuttryck förbjudet enligt diskrimineringslagen, och rätten att leva med vem man vill är skyddad i lag.',
        },
        {
          kind: 'list',
          items: [
            '1944 blev det lagligt att vara homosexuell i Sverige.',
            'År 2003 fick homosexuella par rätt att adoptera barn.',
            'År 2009 tillät Svenska kyrkan homosexuella att gifta sig i kyrkan.',
            'Det är tillåtet att gifta sig med en person av samma kön.',
          ],
        },
        {
          kind: 'concept',
          term: 'Personer med funktionsnedsättning',
          explanation:
            'Personer med funktionsnedsättning kan möta hinder eller riskera diskriminering i samhället. Därför finns det lagar i Sverige som ska skydda dem från att bli diskriminerade, och lagar för att ge dem möjlighet att delta i samhället på jämlika villkor.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch07-min-r1',
          prompt: 'Vilka är Sveriges fem nationella minoriteter?',
          options: [
            { id: 'a', text: 'Samer, romer, judar, sverigefinnar och tornedalingar' },
            { id: 'b', text: 'Samer, finnar, norrmän, danskar och islänningar' },
            { id: 'c', text: 'Romer, judar, samer, tyskar och kväner' },
            { id: 'd', text: 'Sverigefinnar, tornedalingar, samer, romer och syrianer' },
          ],
          correctOptionId: 'a',
          explanation:
            'År 2000 erkände Sverige judar, romer, samer, sverigefinnar och tornedalingar som nationella minoriteter.',
        },
        {
          kind: 'short-answer',
          id: 'ch07-min-r2',
          prompt: 'Vilka är de fem minoritetsspråken i Sverige?',
          acceptedAnswers: [
            'jiddisch romani chib samiska finska meänkieli',
            'jiddisch, romani chib, samiska, finska och meänkieli',
          ],
          modelAnswer: 'Jiddisch, romani chib, samiska, finska och meänkieli.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch07-min-r3',
          prompt: 'Vad kallas samernas folkvalda parlament?',
          options: [
            { id: 'a', text: 'Sápmi' },
            { id: 'b', text: 'Sametinget' },
            { id: 'c', text: 'Samebyarna' },
            { id: 'd', text: 'Minoritetsrådet' },
          ],
          correctOptionId: 'b',
          explanation:
            'Sametinget är samernas folkvalda parlament. Det är ett rådgivande organ som även har vissa myndighetsuppgifter.',
        },
        {
          kind: 'explain',
          id: 'ch07-min-r4',
          prompt: 'Förklara med egna ord vad det innebär att samer är ett urfolk.',
          checklist: [
            'Långvarig och stark relation till ett stort landområde.',
            'Området kallas Sápmi och sträcker sig över Sverige, Norge, Finland och Ryssland.',
            'Särskilda rättigheter kopplade till mark och naturresurser i svenska Sápmi.',
            'Eget folkvalt parlament: Sametinget.',
          ],
          modelAnswer:
            'Att samer är ett erkänt urfolk innebär att de har en långvarig och mycket stark relation till ett stort landområde som kallas Sápmi och som sträcker sig över Sverige, Norge, Finland och Ryssland. Som urfolk har samerna särskilda rättigheter kopplade till mark och naturresurser i svenska Sápmi, och de har ett eget folkvalt parlament, Sametinget, som representerar den samiska befolkningen i frågor om språk, kultur och identitet.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige har fem nationella minoriteter: judar, romer, samer, sverigefinnar och tornedalingar, erkända år 2000.',
          'Minoritetsspråken är jiddisch, romani chib, samiska, finska och meänkieli.',
          'Minoriteterna har rätt att använda sina språk i myndighetskontakter, förskola och äldreomsorg.',
          'Samer är ett urfolk med särskilda rättigheter och ett eget parlament, Sametinget.',
          'Sápmi sträcker sig över Sverige, Norge, Finland och Ryssland.',
          'Hbtqi-personers rättigheter skyddas i diskrimineringslagen. Äktenskap för alla är tillåtet.',
          'Personer med funktionsnedsättning skyddas av lagar mot diskriminering.',
        ],
        mostImportant: 'De fem nationella minoriteterna och de fem minoritetsspråken hör till det mest provcentrala i kapitlet.',
        glossary: [
          { term: 'Nationell minoritet', definition: 'Judar, romer, samer, sverigefinnar och tornedalingar.' },
          { term: 'Sápmi', definition: 'Det samiska området över fyra länder.' },
          { term: 'Sametinget', definition: 'Samernas folkvalda parlament.' },
          { term: 'Hbtqi', definition: 'Homosexuella, bisexuella, transpersoner, queera och intersexpersoner.' },
        ],
      },
    },
    {
      id: 'ch07-arbetet-mot-diskriminering',
      title: 'Arbetet mot diskriminering',
      source: { chapter: 7, pages: [26] },
      survey: {
        overview:
          'Avsnittet handlar om Diskrimineringsombudsmannen (DO), vad diskrimineringslagen kräver av arbetsplatser och skolor samt vad hatbrott är.',
        themes: [
          {
            title: 'Diskrimineringsombudsmannen',
            description: 'Statlig myndighet som arbetar för allas lika rättigheter och möjligheter.',
          },
          {
            title: 'Aktiva åtgärder',
            description: 'Arbetsplatser och skolor ska arbeta förebyggande mot diskriminering.',
          },
          {
            title: 'Hatbrott',
            description: 'Brott mot någon på grund av grupptillhörighet ger strängare straff.',
          },
        ],
        keyConcepts: [
          {
            term: 'Diskrimineringsombudsmannen (DO)',
            definition:
              'En statlig myndighet som arbetar för allas lika rättigheter och möjligheter och ser till att diskrimineringslagen följs.',
          },
          {
            term: 'Aktiva åtgärder',
            definition: 'Förebyggande arbete mot diskriminering som arbetsplatser och skolor ska bedriva.',
          },
          {
            term: 'Hatbrott',
            definition:
              'Brott mot personer för att de tillhör en viss grupp. Gärningspersonen får ett strängare straff om brottet har ett hatbrottsmotiv.',
          },
        ],
      },
      questions: [
        {
          id: 'ch07-dis-q1',
          prompt: 'Vad är Diskrimineringsombudsmannen (DO) för slags myndighet, och vad gör den?',
          kind: 'recall',
        },
        {
          id: 'ch07-dis-q2',
          prompt: 'Vad är förbjudet enligt diskrimineringslagen för företag och organisationer?',
          kind: 'recall',
        },
        {
          id: 'ch07-dis-q3',
          prompt: 'Vad är ett hatbrott, och vad får det för följd för gärningspersonen?',
          kind: 'recall',
        },
        {
          id: 'ch07-dis-q4',
          prompt:
            'Varför räcker det inte att bara förbjuda diskriminering – varför behövs aktiva åtgärder?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Diskrimineringsombudsmannen (DO) är en statlig myndighet som arbetar för allas lika rättigheter och möjligheter. DO ska se till att diskrimineringslagen följs.',
        },
        {
          kind: 'concept',
          term: 'Vad diskrimineringslagen förbjuder',
          explanation:
            'Enligt diskrimineringslagen är det förbjudet för företag och organisationer att behandla människor sämre än andra på grund av deras kön, könsidentitet eller könsuttryck, religion eller annan tro, ålder, etnisk tillhörighet, funktionsnedsättning eller sexuell läggning.',
        },
        {
          kind: 'paragraph',
          text: 'Arbetsplatser och skolor ska arbeta med aktiva åtgärder mot diskriminering. Det betyder att de inte bara ska låta bli att diskriminera, utan också arbeta förebyggande.',
        },
        {
          kind: 'concept',
          term: 'Hatbrott',
          explanation:
            'Om någon begår ett brott mot personer för att de tillhör en viss grupp kallas det för hatbrott. Gärningspersonen får ett strängare straff om brottet har ett hatbrottsmotiv.',
        },
      ],
      recite: [
        {
          kind: 'short-answer',
          id: 'ch07-dis-r1',
          prompt: 'Vad gör Diskrimineringsombudsmannen (DO)?',
          acceptedAnswers: [
            'arbetar för allas lika rättigheter och möjligheter',
            'ser till att diskrimineringslagen följs',
          ],
          modelAnswer:
            'DO är en statlig myndighet som arbetar för allas lika rättigheter och möjligheter och ser till att diskrimineringslagen följs.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch07-dis-r2',
          prompt: 'Vad innebär aktiva åtgärder mot diskriminering?',
          options: [
            { id: 'a', text: 'Att bara undvika att diskriminera.' },
            { id: 'b', text: 'Att arbetsplatser och skolor arbetar förebyggande mot diskriminering.' },
            { id: 'c', text: 'Att anställda själva får anmäla diskriminering.' },
            { id: 'd', text: 'Att DO utreder alla ärenden i domstol.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Aktiva åtgärder innebär att arbetsplatser och skolor ska arbeta förebyggande mot diskriminering, inte bara låta bli att diskriminera.',
        },
        {
          kind: 'explain',
          id: 'ch07-dis-r3',
          prompt: 'Förklara med egna ord vad ett hatbrott är och varför straffet blir strängare.',
          checklist: [
            'Brottet riktas mot någon på grund av grupptillhörighet.',
            'Gärningspersonen får strängare straff vid hatbrottsmotiv.',
            'Koppling till de mänskliga rättigheterna och likabehandling.',
          ],
          modelAnswer:
            'Ett hatbrott är ett brott som begås mot personer för att de tillhör en viss grupp. Om brottet har ett hatbrottsmotiv får gärningspersonen ett strängare straff, eftersom brottet riktar sig mot människor just för vilka de är.',
        },
      ],
      review: {
        keyTakeaways: [
          'DO är en statlig myndighet som arbetar för lika rättigheter och ser till att diskrimineringslagen följs.',
          'Diskrimineringslagen förbjuder sämre behandling på grund av kön, könsidentitet eller könsuttryck, religion, ålder, etnisk tillhörighet, funktionsnedsättning eller sexuell läggning.',
          'Arbetsplatser och skolor ska bedriva aktiva åtgärder mot diskriminering.',
          'Hatbrott ger strängare straff.',
        ],
        mostImportant: 'DO övervakar diskrimineringslagen, och hatbrott ger strängare straff.',
        glossary: [
          { term: 'DO', definition: 'Diskrimineringsombudsmannen – statlig myndighet mot diskriminering.' },
          { term: 'Aktiva åtgärder', definition: 'Förebyggande arbete mot diskriminering.' },
          { term: 'Hatbrott', definition: 'Brott mot någon på grund av grupptillhörighet.' },
        ],
      },
    },
  ],
}
