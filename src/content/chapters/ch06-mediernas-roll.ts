import type { Chapter } from '../types'

export const chapter06: Chapter = {
  id: 'ch06',
  order: 6,
  title: 'Mediernas roll',
  intro:
    'Kapitlet handlar om medier som kan vara allt från tidningar, film, radio och tv till internet och sociala medier. Där sprids nyheter, kunskap och information som påverkar alla människor i ett samhälle.',
  learningGoals: [
    'Förklara varför medierna är fria i Sverige.',
    'Beskriva vad offentlighetsprincipen innebär.',
    'Skilja mellan reklamfinansierade medier och public service.',
    'Förklara vad källkritik är och varför det behövs.',
  ],
  source: { chapter: 6, pages: [20, 21] },
  sections: [
    {
      id: 'ch06-fria-medier',
      title: 'Fria medier',
      source: { chapter: 6, pages: [20] },
      survey: {
        overview:
          'Avsnittet förklarar varför medierna i Sverige är fria, vad de fyller för funktion och vad offentlighetsprincipen innebär. Du får också veta vad en ansvarig utgivare gör.',
        themes: [
          {
            title: 'Grundlagsskyddade medier',
            description:
              'Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att sprida åsikter.',
          },
          {
            title: 'Mediernas uppgifter',
            description: 'Informera, ge plats för debatt och stå för nöje och underhållning.',
          },
          {
            title: 'Granskning av makten',
            description: 'Journalister ska kunna granska politiker och andra med makt.',
          },
          {
            title: 'Offentlighetsprincipen',
            description: 'Allmänna handlingar från myndigheter är offentliga om de inte är hemliga.',
          },
          {
            title: 'Ansvarig utgivare',
            description: 'Juridiskt ansvarig för vad som publiceras i tidningar, radio och tv.',
          },
        ],
        keyConcepts: [
          {
            term: 'Fria medier',
            definition: 'Att staten inte kan bestämma eller påverka vad som sägs i medierna.',
          },
          {
            term: 'Offentlighetsprincipen',
            definition:
              'Att allmänna handlingar från myndigheter är offentliga och att vem som helst har rätt att ta del av dem om de inte är hemliga (under sekretess).',
            explanation:
              'Principen underlättar journalisternas granskning. Journalister kan till exempel begära ut e-post och andra handlingar från myndigheter för att granska hur beslut har fattats.',
          },
          {
            term: 'Sekretess',
            definition: 'Att en handling är hemlig och inte får lämnas ut.',
          },
          {
            term: 'Meddelarskydd',
            definition:
              'Rätten att lämna uppgifter till tidningar, radio och tv utan att straffas – och att vara anonym.',
          },
          {
            term: 'Ansvarig utgivare',
            definition:
              'Den person hos en tidning, radio- eller tv-kanal som är juridiskt ansvarig för vad som publiceras.',
          },
        ],
      },
      questions: [
        {
          id: 'ch06-fri-q1',
          prompt: 'Vilka grundlagar skyddar medierna, och vad innebär det för staten?',
          kind: 'recall',
        },
        {
          id: 'ch06-fri-q2',
          prompt: 'Vad är offentlighetsprincipen, och varför är den viktig för journalister?',
          kind: 'recall',
        },
        {
          id: 'ch06-fri-q3',
          prompt: 'Vad har en ansvarig utgivare för uppgift?',
          kind: 'recall',
        },
        {
          id: 'ch06-fri-q4',
          prompt: 'Varför finns meddelarskyddet – vad skulle hända utan det?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'I en demokrati som Sverige är medierna fria. Grundlagarna tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt få säga vad vi tycker och att sprida åsikter. Staten kan inte bestämma eller påverka vad som sägs i medierna.',
        },
        {
          kind: 'list',
          items: [
            'Medierna informerar om nyheter.',
            'De fungerar som en plats där människor fritt kan diskutera samhället och vad som händer där.',
            'De är också viktiga för nöje och underhållning.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Journalisterna ska kunna granska politiker och andra personer som har makt. Därför finns offentlighetsprincipen, som underlättar denna granskning.',
        },
        {
          kind: 'concept',
          term: 'Offentlighetsprincipen',
          explanation:
            'Den betyder att allmänna handlingar från myndigheter är offentliga. Vem som helst har rätt att ta del av dem om de inte är hemliga (under sekretess). Journalister kan därför begära ut e-post och andra handlingar från myndigheter för att granska hur beslut har fattats.',
        },
        {
          kind: 'paragraph',
          text: 'Det är också viktigt att det finns många olika medier som ger oss nyheter. Staten ger därför ekonomiskt stöd till nyhetsmedier och dagstidningar.',
        },
        {
          kind: 'concept',
          term: 'Meddelarskydd',
          explanation:
            'En person har rätt att lämna uppgifter till tidningar, radio och tv utan att straffas för det. Den som meddelar uppgifter till media har också rätt att vara anonym.',
        },
        {
          kind: 'concept',
          term: 'Ansvarig utgivare',
          explanation:
            'Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras. Utgivaren måste följa lagar som skyddar mot förtal och kränkningar. Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch06-fri-r1',
          prompt: 'Vad innebär offentlighetsprincipen?',
          options: [
            { id: 'a', text: 'Att alla nyheter måste publiceras gratis.' },
            {
              id: 'b',
              text: 'Att allmänna handlingar från myndigheter är offentliga om de inte är hemliga.',
            },
            { id: 'c', text: 'Att journalister måste avslöja sina källor.' },
            { id: 'd', text: 'Att staten bestämmer vad medierna får skriva.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Offentlighetsprincipen gör att allmänna handlingar är offentliga om de inte är under sekretess, vilket gör det möjligt att granska hur beslut fattats.',
        },
        {
          kind: 'short-answer',
          id: 'ch06-fri-r2',
          prompt: 'Vem har rätt att ta del av allmänna handlingar som inte är hemliga?',
          acceptedAnswers: ['vem som helst', 'alla', 'allmänheten'],
          modelAnswer: 'Vem som helst.',
        },
        {
          kind: 'short-answer',
          id: 'ch06-fri-r3',
          prompt: 'Vad är en ansvarig utgivare juridiskt ansvarig för?',
          acceptedAnswers: ['vad som publiceras', 'innehållet', 'det som publiceras'],
          modelAnswer: 'För vad som publiceras i tidningen, radion eller tv-kanalen.',
        },
        {
          kind: 'explain',
          id: 'ch06-fri-r4',
          prompt: 'Förklara med egna ord varför fria medier är viktiga i en demokrati.',
          checklist: [
            'Medierna granskar politiker och andra med makt.',
            'Staten kan inte bestämma vad som sägs i medierna.',
            'Medierna ger information och plats för debatt.',
            'Meddelarskyddet gör att personer kan lämna uppgifter anonymt.',
          ],
          modelAnswer:
            'Fria medier är viktiga eftersom de granskar politiker och andra som har makt, och eftersom staten inte kan bestämma vad som sägs i dem. Medierna informerar om nyheter och fungerar som en plats där människor fritt kan diskutera samhället. Offentlighetsprincipen och meddelarskyddet gör det möjligt att granska makten och att lämna uppgifter anonymt.',
        },
      ],
      review: {
        keyTakeaways: [
          'Medierna är fria och skyddade av tryckfrihetsförordningen och yttrandefrihetsgrundlagen.',
          'Staten kan inte påverka vad som sägs i medierna, men ger ekonomiskt stöd till nyhetsmedier.',
          'Offentlighetsprincipen: allmänna handlingar är offentliga om de inte är hemliga.',
          'Meddelarskydd: rätt att lämna uppgifter till media utan straff och att vara anonym.',
          'Ansvarig utgivare är juridiskt ansvarig för innehållet.',
          'Journalister ska kontrollera uppgifter med flera oberoende källor.',
        ],
        mostImportant: 'Offentlighetsprincipen är grunden för mediernas möjlighet att granska makten.',
        glossary: [
          { term: 'Offentlighetsprincipen', definition: 'Allmänna handlingar är offentliga om de inte är hemliga.' },
          { term: 'Meddelarskydd', definition: 'Rätt att lämna uppgifter till media anonymt och utan straff.' },
          { term: 'Sekretess', definition: 'Att en handling är hemlig och inte får lämnas ut.' },
        ],
      },
    },
    {
      id: 'ch06-olika-medier',
      title: 'Olika slags medier',
      source: { chapter: 6, pages: [21] },
      survey: {
        overview:
          'Avsnittet skiljer mellan reklamfinansierade medier och public service, och förklarar varför webb och sociala medier ställer högre krav på läsaren.',
        themes: [
          {
            title: 'Privat- och reklamfinansierade medier',
            description: 'Dagstidningar och kvällstidningar som finansieras av prenumerationer och reklam.',
          },
          {
            title: 'Public service',
            description: 'SR, SVT och UR – oberoende medieföretag som finansieras via skatten.',
          },
          {
            title: 'Webb och sociala medier',
            description: 'Vem som helst kan skapa innehåll, och innehållet kontrolleras inte på samma sätt.',
          },
        ],
        keyConcepts: [
          {
            term: 'Reklamfinansierade medier',
            definition:
              'Medier som drivs av privata företag och får inkomster från reklam och prenumerationer.',
          },
          {
            term: 'Public service',
            definition:
              'Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR) – medieföretag med ett särskilt uppdrag.',
            explanation:
              'De ska vara oberoende av politiska och andra intressen, rapportera om samhället och låta olika åsikter komma till tals utan att välja sida. De får inte tjäna pengar på reklam utan finansieras genom en avgift som tas ut via skatten. Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.',
          },
        ],
      },
      questions: [
        {
          id: 'ch06-oli-q1',
          prompt: 'Hur finansieras reklamfinansierade medier?',
          kind: 'recall',
        },
        {
          id: 'ch06-oli-q2',
          prompt: 'Vilka medieföretag är public service, och vad har de för uppdrag?',
          kind: 'recall',
        },
        {
          id: 'ch06-oli-q3',
          prompt: 'Hur finansieras public service?',
          kind: 'recall',
        },
        {
          id: 'ch06-oli-q4',
          prompt: 'Varför är det svårare att bedöma trovärdigheten i innehåll på webben och i sociala medier?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Det finns en stor mängd olika tidningar och tidskrifter i Sverige. Det finns också kommersiella radio- och tv-kanaler som får sina inkomster från att sälja reklamplats eller genom att människor betalar för att kunna se en särskild kanal.',
        },
        {
          kind: 'concept',
          term: 'Privat- och reklamfinansierade medier',
          explanation:
            'Medier som finansieras med reklam drivs ofta av privata företag. Det kan vara dagstidningar och kvällstidningar som sprids både lokalt och över hela landet. Vissa går att prenumerera på medan andra säljs som enskilda exemplar varje dag. I dag finns de flesta tidningar också på internet och uppdateras med nyheter flera gånger per dag.',
        },
        {
          kind: 'concept',
          term: 'Public service',
          explanation:
            'Tre medieföretag har ett speciellt uppdrag i Sverige: Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR). De ska erbjuda många olika typer av program, vara oberoende av politiska och andra intressen och låta olika åsikter komma till tals utan att välja sida.',
        },
        {
          kind: 'list',
          items: [
            'Public service ska ha ett brett utbud av program med nyheter, sport, underhållning och kultur.',
            'De får inte tjäna pengar på reklam.',
            'De finansieras i stället genom en avgift som tas ut via skatten.',
          ],
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Syftet med public service är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.',
        },
        {
          kind: 'paragraph',
          text: 'Vem som helst kan skapa innehåll på webben och i sociala medier. Det innebär att innehållet som sprids där inte kontrolleras på samma sätt som innehållet i andra medier.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch06-oli-r1',
          prompt: 'Vilka medieföretag ingår i public service?',
          options: [
            { id: 'a', text: 'SVT, TV4 och Aftonbladet' },
            { id: 'b', text: 'SR, SVT och UR' },
            { id: 'c', text: 'SVT, Sveriges Radio och Dagens Nyheter' },
            { id: 'd', text: 'UR, TV4 och SVT' },
          ],
          correctOptionId: 'b',
          explanation:
            'Public service består av Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR).',
        },
        {
          kind: 'multiple-choice',
          id: 'ch06-oli-r2',
          prompt: 'Hur finansieras public service?',
          options: [
            { id: 'a', text: 'Genom reklamintäkter' },
            { id: 'b', text: 'Genom en avgift som tas ut via skatten' },
            { id: 'c', text: 'Genom statliga bidrag från EU' },
            { id: 'd', text: 'Genom prenumerationer från tittarna' },
          ],
          correctOptionId: 'b',
          explanation:
            'Public service får inte tjäna pengar på reklam. Företagen finansieras genom en avgift som tas ut via skatten, så att alla har tillgång till saklig information.',
        },
        {
          kind: 'explain',
          id: 'ch06-oli-r3',
          prompt: 'Förklara med egna ord vad public service ska göra och varför det är viktigt.',
          checklist: [
            'Erbjuda många olika typer av program.',
            'Vara oberoende av politiska och andra intressen.',
            'Låta olika åsikter komma till tals utan att välja sida.',
            'Syftet: alla ska ha tillgång till saklig information oavsett bostad och ekonomi.',
          ],
          modelAnswer:
            'Public service ska erbjuda många olika typer av program med nyheter, sport, underhållning och kultur. Företagen ska vara oberoende av politiska och andra intressen och låta olika åsikter komma till tals utan att välja sida. De får inte tjäna pengar på reklam utan finansieras via skatten, så att alla i landet har tillgång till saklig information oavsett var man bor eller hur mycket pengar man har.',
        },
      ],
      review: {
        keyTakeaways: [
          'Reklamfinansierade medier drivs av privata företag och får intäkter från reklam och prenumerationer.',
          'Public service = SR, SVT och UR.',
          'Public service ska vara oberoende, brett och opartiskt – och får inte ha reklam.',
          'Public service finansieras via en avgift som tas ut via skatten.',
          'På webben och i sociala medier kan vem som helst publicera, och innehållet kontrolleras inte på samma sätt.',
        ],
        mostImportant: 'Public service är SR, SVT och UR – oberoende, reklamfria och finansierade via skatten.',
        glossary: [
          { term: 'Public service', definition: 'SR, SVT och UR med särskilt uppdrag att vara oberoende.' },
          { term: 'Reklamfinansiering', definition: 'Medier som får intäkter från att sälja reklamplats.' },
        ],
      },
    },
    {
      id: 'ch06-kallkritik',
      title: 'Källkritik',
      source: { chapter: 6, pages: [21] },
      survey: {
        overview:
          'Avsnittet förklarar varför all information inte är korrekt och vad det innebär att vara källkritisk.',
        themes: [
          {
            title: 'Allt är inte korrekt',
            description: 'Falska uppgifter kan spridas snabbt och påverka människors åsikter.',
          },
          {
            title: 'Att vara källkritisk',
            description: 'Att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.',
          },
        ],
        keyConcepts: [
          {
            term: 'Källa',
            definition:
              'Där informationen kommer ifrån, till exempel en tidning, bok, webbplats, sociala medier, tv eller radio.',
          },
          {
            term: 'Källkritik',
            definition:
              'Att kontrollera och granska information – att ifrågasätta om det man läser, ser eller hör är korrekt.',
            explanation:
              'Källkritik är särskilt viktigt eftersom falska uppgifter kan spridas snabbt och påverka människors åsikter.',
          },
        ],
      },
      questions: [
        {
          id: 'ch06-kal-q1',
          prompt: 'Vad menas med att vara källkritisk?',
          kind: 'recall',
        },
        {
          id: 'ch06-kal-q2',
          prompt: 'Varför behövs källkritik i sociala medier?',
          kind: 'recall',
        },
        {
          id: 'ch06-kal-q3',
          prompt: 'Ge tre exempel på frågor du kan ställa för att bedöma om en uppgift är trovärdig.',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Information kan hämtas från olika källor, till exempel tidningar, böcker, webbplatser, sociala medier, tv och radio. Men allt som publiceras i medierna är inte alltid korrekt.',
        },
        {
          kind: 'paragraph',
          text: 'Falska uppgifter kan spridas snabbt och påverka människors åsikter. Att kontrollera och granska information kallas för att vara källkritisk.',
        },
        {
          kind: 'concept',
          term: 'Källkritik',
          explanation:
            'Att vara källkritisk innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.',
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga – samma princip kan du använda själv när du läser nyheter.',
        },
      ],
      recite: [
        {
          kind: 'short-answer',
          id: 'ch06-kal-r1',
          prompt: 'Vad innebär det att vara källkritisk?',
          acceptedAnswers: [
            'att kontrollera och granska information',
            'ifrågasätta och kontrollera om informationen är korrekt',
          ],
          modelAnswer:
            'Att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch06-kal-r2',
          prompt: 'Varför är källkritik särskilt viktigt i sociala medier?',
          options: [
            { id: 'a', text: 'För att innehållet där alltid är felaktigt.' },
            {
              id: 'b',
              text: 'För att vem som helst kan skapa innehåll och det inte kontrolleras på samma sätt som i andra medier.',
            },
            { id: 'c', text: 'För att sociala medier är grundlagsskyddade.' },
            { id: 'd', text: 'För att journalister inte får använda sociala medier.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Eftersom vem som helst kan skapa innehåll på webben och i sociala medier kontrolleras det inte på samma sätt som innehållet i andra medier.',
        },
        {
          kind: 'explain',
          id: 'ch06-kal-r3',
          prompt: 'Förklara vad källkritik är och varför det behövs i ett demokratiskt samhälle.',
          checklist: [
            'Definierar källkritik: att kontrollera och granska information.',
            'Nämner att allt som publiceras inte är korrekt.',
            'Kopplar till att falska uppgifter kan spridas snabbt och påverka åsikter.',
          ],
          modelAnswer:
            'Källkritik innebär att kontrollera och granska information – att ifrågasätta om det man läser, ser eller hör är korrekt. Det behövs eftersom allt som publiceras i medierna inte är korrekt, och falska uppgifter kan spridas snabbt och påverka människors åsikter.',
        },
      ],
      review: {
        keyTakeaways: [
          'Allt som publiceras i medierna är inte korrekt.',
          'Källkritik = att kontrollera och granska information.',
          'Falska uppgifter kan spridas snabbt och påverka åsikter.',
          'Journalister kontrollerar uppgifter med flera oberoende källor.',
        ],
        mostImportant: 'Källkritik betyder att ifrågasätta och kontrollera information innan man tror på den.',
        glossary: [
          { term: 'Källa', definition: 'Där informationen kommer ifrån.' },
          { term: 'Källkritik', definition: 'Att kontrollera och granska information.' },
        ],
      },
    },
  ],
}
