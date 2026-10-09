import type { Chapter } from '../types'

export const chapter04: Chapter = {
  id: 'ch04',
  order: 4,
  title: 'Politiska val och partier',
  intro:
    'Kapitlet handlar om politiska val och partier. Politiska partier har olika idéer om hur landet ska styras och försöker få stöd från folket för att deras kandidater ska bli valda till riksdagen, regionerna, kommunerna eller EU. Alla kan engagera sig aktivt i partipolitiken.',
  learningGoals: [
    'Veta när olika val hålls och vem som har rösträtt.',
    'Förklara vad en folkomröstning är och vad rådgivande innebär.',
    'Beskriva hur det går till att rösta.',
    'Förklara vad proportionella val och fyraprocentsspärren innebär.',
    'Känna igen de partier som sitter i riksdagen.',
  ],
  source: { chapter: 4, pages: [14, 15] },
  sections: [
    {
      id: 'ch04-val-och-rostning',
      title: 'Val och röstning',
      source: { chapter: 4, pages: [14, 15] },
      survey: {
        overview:
          'Avsnittet går igenom när valen hålls, vem som får rösta i vilka val och hur röstningen går till. Du får också veta vad en folkomröstning är.',
        themes: [
          {
            title: 'När hålls valen?',
            description:
              'Val till riksdag, regioner och kommuner hålls vart fjärde år. Val till EU-parlamentet hålls vart femte år.',
          },
          {
            title: 'Olika regler för olika val',
            description:
              'Rösträtt beror på ålder, medborgarskap och hur länge man varit folkbokförd i Sverige.',
          },
          {
            title: 'Folkomröstningar',
            description: 'De är rådgivande – politikerna måste inte följa resultatet.',
          },
          {
            title: 'Så går röstningen till',
            description: 'Röstkort skickas hem, valen är hemliga och alla röstar bakom en skärm.',
          },
        ],
        keyConcepts: [
          {
            term: 'Rösträtt',
            definition: 'Rätten att rösta i ett val.',
            explanation:
              'För att ha rätt att rösta ska man ha fyllt 18 år. I riksdagsvalet måste man också vara svensk medborgare. I kommun- och regionval behöver man inte vara svensk medborgare, men ska ha bott och varit folkbokförd i Sverige i sammanlagt tre år.',
          },
          {
            term: 'Folkomröstning',
            definition:
              'En omröstning i en särskild fråga, nationellt eller i en region eller kommun.',
            explanation:
              'Folkomröstningar är rådgivande – politikerna måste inte följa resultatet. År 2003 höll Sverige en folkomröstning om valutan euro. Folket röstade nej och Sverige behöll den svenska kronan.',
          },
          {
            term: 'Röstkort',
            definition: 'Ett kort som skickas hem före valet och visar vilken vallokal man ska gå till.',
          },
          {
            term: 'Folkbokförd',
            definition: 'Registrerad som boende i Sverige i folkbokföringen.',
          },
        ],
      },
      questions: [
        {
          id: 'ch04-val-q1',
          prompt: 'Hur ofta hålls val till riksdag, regioner och kommuner? Hur ofta hålls val till EU-parlamentet?',
          kind: 'recall',
        },
        {
          id: 'ch04-val-q2',
          prompt: 'Vilka krav gäller för att få rösta i riksdagsvalet respektive kommun- och regionvalen?',
          kind: 'recall',
          lookFor: 'Stycket om rösträtt.',
        },
        {
          id: 'ch04-val-q3',
          prompt: 'Vad menas med att en folkomröstning är rådgivande?',
          kind: 'recall',
        },
        {
          id: 'ch04-val-q4',
          prompt: 'Hur går det till när man röstar, och varför är valen hemliga?',
          kind: 'recall',
        },
        {
          id: 'ch04-val-q5',
          prompt: 'Varför tror du att valen är hemliga? Vad skulle hända om de inte var det?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Val till riksdag, regionfullmäktige och kommunfullmäktige hålls vart fjärde år. Val till EU-parlamentet hålls vart femte år.',
        },
        {
          kind: 'paragraph',
          text: 'Alla som har rösträtt kan rösta på de partier som de tycker har den bästa politiken. Men olika val har olika regler för vem som får rösta.',
        },
        {
          kind: 'list',
          items: [
            'För att ha rätt att rösta ska man ha fyllt 18 år.',
            'För att rösta i riksdagsvalet måste man även vara svensk medborgare.',
            'För att rösta i kommun- och regionvalen behöver man inte vara svensk medborgare, men ska ha bott och varit folkbokförd i Sverige under sammanlagt tre år.',
            'EU-medborgare eller medborgare i Norden behöver endast vara folkbokförda i landet.',
            'EU-medborgare röstar till EU-parlamentet i det land där de är folkbokförda.',
          ],
        },
        {
          kind: 'concept',
          term: 'Folkomröstningar',
          explanation:
            'Ibland hålls folkomröstningar om en särskild fråga. De kan hållas nationellt, i en region eller i en kommun. Folkomröstningarna är rådgivande – politikerna måste inte följa resultatet. År 2003 höll Sverige en folkomröstning om valutan euro; folket röstade nej och Sverige behöll den svenska kronan.',
        },
        {
          kind: 'paragraph',
          text: 'De som har rätt att rösta får ett röstkort hemskickat före valet där det står vilken vallokal man ska gå till. Men det går också bra att rösta i förväg på särskilda platser.',
        },
        {
          kind: 'paragraph',
          text: 'I vallokalen finns valsedlar till de olika partierna. Valen är hemliga: alla röstar bakom en skärm så att ingen annan ska kunna se vilket val man gör.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch04-val-r1',
          prompt: 'Hur ofta hålls val till riksdagen?',
          options: [
            { id: 'a', text: 'Varje år' },
            { id: 'b', text: 'Vartannat år' },
            { id: 'c', text: 'Vart fjärde år' },
            { id: 'd', text: 'Vart femte år' },
          ],
          correctOptionId: 'c',
          explanation:
            'Val till riksdag, regionfullmäktige och kommunfullmäktige hålls vart fjärde år. Val till EU-parlamentet hålls vart femte år.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch04-val-r2',
          prompt:
            'Vad gäller för en person som inte är svensk medborgare men vill rösta i kommunvalet?',
          options: [
            { id: 'a', text: 'Personen måste ha bott i Sverige i minst tio år.' },
            {
              id: 'b',
              text: 'Personen ska ha fyllt 18 år och ha bott och varit folkbokförd i Sverige i sammanlagt tre år.',
            },
            { id: 'c', text: 'Personen får inte rösta alls.' },
            { id: 'd', text: 'Personen måste först ansöka om svenskt medborgarskap.' },
          ],
          correctOptionId: 'b',
          explanation:
            'I kommun- och regionvalen behöver man inte vara svensk medborgare, men ska ha bott och varit folkbokförd i Sverige i sammanlagt tre år. Man ska också ha fyllt 18 år.',
        },
        {
          kind: 'short-answer',
          id: 'ch04-val-r3',
          prompt: 'Vad menas med att en folkomröstning är rådgivande?',
          acceptedAnswers: ['politikerna måste inte följa resultatet', 'inte bindande', 'rådgivande'],
          modelAnswer:
            'Att politikerna inte måste följa resultatet av omröstningen.',
        },
        {
          kind: 'explain',
          id: 'ch04-val-r4',
          prompt: 'Beskriv med egna ord hur det går till att rösta i Sverige.',
          checklist: [
            'Man får ett röstkort hemskickat före valet.',
            'Man kan rösta i vallokalen eller i förväg på särskilda platser.',
            'I vallokalen finns valsedlar för de olika partierna.',
            'Valen är hemliga och man röstar bakom en skärm.',
          ],
          modelAnswer:
            'Före valet får den som har rösträtt ett röstkort hemskickat med information om vilken vallokal man ska gå till. Det går också att rösta i förväg på särskilda platser. I vallokalen finns valsedlar till de olika partierna, och man röstar bakom en skärm eftersom valet är hemligt.',
        },
      ],
      review: {
        keyTakeaways: [
          'Val till riksdag, regioner och kommuner hålls vart fjärde år; EU-val vart femte år.',
          'Rösträtt: fyllda 18 år. I riksdagsvalet krävs svenskt medborgarskap.',
          'Kommun- och regionval: tre års boende och folkbokföring i Sverige räcker.',
          'EU-medborgare och nordiska medborgare behöver bara vara folkbokförda.',
          'Folkomröstningar är rådgivande. 2003 röstade Sverige nej till euron.',
          'Röstkort skickas hem; valen är hemliga och sker bakom en skärm.',
        ],
        mostImportant: 'Olika val har olika rösträttsregler – ålder, medborgarskap och folkbokföring avgör.',
        glossary: [
          { term: 'Rösträtt', definition: 'Rätten att rösta i ett val.' },
          { term: 'Folkomröstning', definition: 'Rådgivande omröstning i en särskild fråga.' },
          { term: 'Röstkort', definition: 'Kort som visar var och när man kan rösta.' },
        ],
      },
    },
    {
      id: 'ch04-politiska-partier',
      title: 'Politiska partier',
      source: { chapter: 4, pages: [15] },
      survey: {
        overview:
          'Avsnittet förklarar vad ett politiskt parti är, hur proportionella val fungerar och varför det finns en fyraprocentsspärr. Du får också en lista över partierna i riksdagen.',
        themes: [
          {
            title: 'Vad ett parti gör',
            description:
              'Partier samlar människor med gemensamma idéer och ger väljarna olika alternativ.',
          },
          {
            title: 'Proportionella val',
            description: 'Partierna får platser i förhållande till hur många röster de fått.',
          },
          {
            title: 'Fyraprocentsspärren',
            description: 'Ett parti måste få minst fyra procent av rösterna för att komma in i riksdagen.',
          },
        ],
        keyConcepts: [
          {
            term: 'Politiskt parti',
            definition:
              'En organisation som samlar människor med gemensamma idéer om hur samhället ska styras.',
            explanation:
              'Partier föreslår olika lösningar och driver frågor de tycker är viktiga. Alla som vill kan bli medlemmar för att påverka innehållet i politiken – eller starta ett nytt parti tillsammans med andra.',
          },
          {
            term: 'Proportionella val',
            definition:
              'Partierna får platser i riksdagen eller fullmäktige utifrån den andel röster de fått.',
            explanation:
              'Om ett parti får tjugo procent av rösterna får det tjugo procent av platserna. Därför behöver partierna ofta samarbeta för att få majoritet för sina förslag.',
          },
          {
            term: 'Fyraprocentsspärren',
            definition: 'Regeln att ett parti måste få minst fyra procent av rösterna för att komma in i riksdagen.',
            explanation:
              'Regeln finns för att hindra att för många partier kommer in, vilket skulle göra det svårare att skapa stabila majoriteter.',
          },
        ],
      },
      questions: [
        {
          id: 'ch04-par-q1',
          prompt: 'Vad gör ett politiskt parti?',
          kind: 'recall',
        },
        {
          id: 'ch04-par-q2',
          prompt: 'Vad betyder proportionella val?',
          kind: 'recall',
        },
        {
          id: 'ch04-par-q3',
          prompt: 'Hur många procent av rösterna måste ett parti få för att komma in i riksdagen, och varför finns regeln?',
          kind: 'recall',
        },
        {
          id: 'ch04-par-q4',
          prompt: 'Varför behöver partier ofta samarbeta efter ett val?',
          kind: 'recall',
        },
        {
          id: 'ch04-par-q5',
          prompt: 'Vilken samhällsfråga är viktigast för dig, och varför?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Politiska partier samlar människor med gemensamma idéer om hur samhället ska styras.',
        },
        {
          kind: 'paragraph',
          text: 'Partierna föreslår olika lösningar och driver frågor som de tycker är viktiga. Det innebär att de som röstar har olika alternativ att välja mellan. Alla som vill kan bli medlemmar i ett politiskt parti för att påverka innehållet i politiken, och det går även att starta ett nytt parti tillsammans med andra.',
        },
        {
          kind: 'paragraph',
          text: 'Under valrörelsen inför valen försöker partierna övertyga väljarna genom debatter, möten, politisk reklam och kampanjer.',
        },
        {
          kind: 'concept',
          term: 'Proportionella val',
          explanation:
            'Proportionella val betyder att partierna får platser i riksdagen eller i region- och kommunfullmäktige utifrån den andel röster de fått. Om ett parti får tjugo procent av folkets röster får de tjugo procent av platserna. Ofta behöver partierna därför samarbeta för att få majoritet för sina politiska förslag.',
        },
        {
          kind: 'concept',
          term: 'Fyraprocentsspärren',
          explanation:
            'För att ett parti ska komma in i riksdagen måste det få minst fyra procent av rösterna i valet. Regeln finns för att hindra att för många partier kommer in i riksdagen, vilket skulle göra det svårare att skapa stabila majoriteter.',
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Partier i riksdagen till valet 2026 (i bokstavsordning): Centerpartiet (C), Kristdemokraterna (KD), Liberalerna (L), Miljöpartiet (MP), Moderaterna (M), Socialdemokraterna (S), Sverigedemokraterna (SD) och Vänsterpartiet (V).',
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'I region- och kommunvalen brukar det finnas särskilda partier som bara har en politik för just sin region eller kommun – inte på riksnivå.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch04-par-r1',
          prompt: 'Vad krävs för att ett parti ska komma in i riksdagen?',
          options: [
            { id: 'a', text: 'Minst en procent av rösterna' },
            { id: 'b', text: 'Minst fyra procent av rösterna' },
            { id: 'c', text: 'Minst tio procent av rösterna' },
            { id: 'd', text: 'Att partiet har funnits i minst tio år' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ett parti måste få minst fyra procent av rösterna för att komma in i riksdagen. Regeln finns för att göra det lättare att skapa stabila majoriteter.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch04-par-r2',
          prompt: 'Ett parti får 20 procent av rösterna. Hur många platser får det i ett proportionellt val?',
          options: [
            { id: 'a', text: 'Inga platser, eftersom det inte fått majoritet' },
            { id: 'b', text: 'Cirka 20 procent av platserna' },
            { id: 'c', text: 'Alla platser' },
            { id: 'd', text: 'Hälften av platserna' },
          ],
          correctOptionId: 'b',
          explanation:
            'I ett proportionellt val får partiet platser i förhållande till andelen röster – 20 procent av rösterna ger cirka 20 procent av platserna.',
        },
        {
          kind: 'short-answer',
          id: 'ch04-par-r3',
          prompt: 'Varför behöver partier ofta samarbeta efter ett val?',
          acceptedAnswers: ['majoritet', 'för att få majoritet', 'få majoritet för sina förslag'],
          modelAnswer:
            'Eftersom platserna fördelas proportionellt får ett enskilt parti sällan egen majoritet. Partierna behöver därför samarbeta för att få majoritet för sina politiska förslag.',
        },
        {
          kind: 'explain',
          id: 'ch04-par-r4',
          prompt: 'Förklara med egna ord vad ett politiskt parti är och vad man kan göra för att påverka ett parti.',
          checklist: [
            'Ett parti samlar människor med gemensamma idéer om hur samhället ska styras.',
            'Partier driver frågor och föreslår lösningar.',
            'Man kan bli medlem för att påverka politiken, eller starta ett nytt parti.',
          ],
          modelAnswer:
            'Ett politiskt parti samlar människor med gemensamma idéer om hur samhället ska styras. Partierna föreslår lösningar och driver frågor de tycker är viktiga, vilket ger väljarna olika alternativ. Den som vill påverka kan bli medlem i ett parti, eller starta ett nytt parti tillsammans med andra.',
        },
      ],
      review: {
        keyTakeaways: [
          'Partier samlar människor med gemensamma idéer och ger väljarna alternativ.',
          'Alla kan bli medlem i ett parti eller starta ett nytt.',
          'Proportionella val: platser fördelas efter andelen röster.',
          'Fyraprocentsspärren avgör vilka partier som kommer in i riksdagen.',
          'Åtta partier sitter i riksdagen till valet 2026: C, KD, L, MP, M, S, SD och V.',
          'I region- och kommunval finns även lokala partier.',
        ],
        mostImportant: 'Proportionella val + fyraprocentsspärr = partierna måste samarbeta för att få majoritet.',
        glossary: [
          { term: 'Politiskt parti', definition: 'Organisation med gemensamma idéer om hur samhället ska styras.' },
          { term: 'Proportionella val', definition: 'Platser fördelas efter andelen röster.' },
          { term: 'Fyraprocentsspärren', definition: 'Kravet på minst fyra procent för en riksdagsplats.' },
        ],
      },
    },
  ],
}
