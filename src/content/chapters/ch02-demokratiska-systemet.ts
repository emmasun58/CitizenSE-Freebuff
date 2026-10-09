import type { Chapter } from '../types'

export const chapter02: Chapter = {
  id: 'ch02',
  order: 2,
  title: 'Sveriges demokratiska system',
  intro:
    'Kapitlet handlar om demokrati, ett system som innebär att folket styr genom fria och rättvisa val. Alla har rätt att påverka samhället och att engagera sig politiskt. Alla är lika inför lagen.',
  learningGoals: [
    'Förklara vad ordet demokrati betyder.',
    'Känna igen kännetecken på fria och rättvisa val.',
    'Ge exempel på hur man kan påverka samhället.',
    'Förstå vad som kan hota demokratin.',
    'Förklara skillnaden mellan segregation och integration.',
  ],
  source: { chapter: 2, pages: [10, 11] },
  sections: [
    {
      id: 'ch02-demokrati-folkstyre',
      title: 'Demokrati betyder folkstyre',
      source: { chapter: 2, pages: [10] },
      survey: {
        overview:
          'Avsnittet förklarar vad demokrati är, vad som kännetecknar fria val och varför rättssäkerhet hör ihop med demokrati. Du får också konkreta exempel på hur man kan påverka samhället.',
        themes: [
          {
            title: 'Demokrati betyder folkstyre',
            description:
              'Makten utgår från folket och medborgarna kan påverka beslut och byta ut dem som styr.',
          },
          {
            title: 'Fria och hemliga val',
            description:
              'En röst per person, flera partier att välja mellan och ingen som tvingas avslöja hur de röstar.',
          },
          {
            title: 'Yttrandefrihet och rättssäkerhet',
            description:
              'Alla får säga och skriva vad de tycker, och ingen får dömas utan en rättvis rättegång.',
          },
          {
            title: 'Att delta i samhället',
            description: 'Det finns många lagliga sätt att påverka, från att rösta till att demonstrera.',
          },
        ],
        keyConcepts: [
          {
            term: 'Demokrati',
            definition: 'Politiskt system där makten utgår från folket.',
            explanation:
              'Ordet kommer från grekiskan och betyder folkstyre. I en demokrati ska medborgarna kunna välja mellan flera politiska alternativ, och de som får makten ska kunna bytas ut.',
          },
          {
            term: 'Fria val',
            definition:
              'Val där alla röstberättigade har en röst var och kan uttrycka sina åsikter utan hot eller tvång.',
          },
          {
            term: 'Yttrandefrihet',
            definition: 'Rätten att skriva och säga vad man tycker.',
          },
          {
            term: 'Rättssäkerhet',
            definition:
              'Att lagarna gäller för alla och att ingen döms utan en rättvis rättegång.',
          },
        ],
      },
      questions: [
        {
          id: 'ch02-dem-q1',
          prompt: 'Vad betyder ordet demokrati, och varifrån kommer ordet?',
          kind: 'recall',
        },
        {
          id: 'ch02-dem-q2',
          prompt: 'Vad kännetecknar fria val? Nämn minst tre saker.',
          kind: 'recall',
          lookFor: 'Stycket om fria val.',
        },
        {
          id: 'ch02-dem-q3',
          prompt: 'Vad betyder rättssäkerhet?',
          kind: 'recall',
        },
        {
          id: 'ch02-dem-q4',
          prompt:
            'Varför blir demokratin starkare om många röstar och engagerar sig? Vad skulle du själv kunna göra?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Demokrati är ett politiskt system där makten utgår från folket och medborgarna har möjlighet att påverka beslut.',
        },
        {
          kind: 'concept',
          term: 'Demokrati',
          explanation:
            'Ordet demokrati kommer från grekiskan och betyder folkstyre. I en demokrati ska medborgarna kunna välja mellan flera olika politiska alternativ, och de som får makten ska kunna bytas ut.',
        },
        {
          kind: 'paragraph',
          text: 'I ett demokratiskt samhälle har människor rätt att rösta i fria val. Fria val betyder att alla som har rätt att rösta har en röst var och att alla kan uttrycka sina åsikter utan hot eller tvång. Det ska finnas flera partier att rösta på, och valen ska vara hemliga så att ingen behöver avslöja hur de röstar. Man har också rätt att inte delta i valet.',
        },
        {
          kind: 'paragraph',
          text: 'Alla människor, grupper och partier har rätt att försöka övertyga andra om sina politiska idéer. Alla har yttrandefrihet, det vill säga rätt att skriva och säga vad de tycker.',
        },
        {
          kind: 'concept',
          term: 'Rättssäkerhet',
          explanation:
            'En viktig förutsättning för demokrati är att lagarna gäller för alla i Sverige. Ingen får dömas utan en rättvis rättegång. Det kallas för rättssäkerhet.',
        },
        {
          kind: 'paragraph',
          text: 'För att en demokrati ska fungera behöver alla ta ansvar. Utbildningen i Sverige bygger på demokratiska värderingar: eleverna i grundskolan får lära sig om sina rättigheter, hur samhället fungerar och varför det är viktigt att delta i samhällslivet och rösta. Demokratin blir starkare när många röstar, engagerar sig och skaffar sig kunskap om samhällsfrågor.',
        },
        {
          kind: 'list',
          items: [
            'Rösta i politiska val.',
            'Bli medlem i ett politiskt parti eller en intresseorganisation, eller starta en egen förening.',
            'Kontakta politiker.',
            'Demonstrera.',
            'Starta eller skriva på en namninsamling.',
            'Diskutera politik med vänner och bekanta.',
            'Kontakta journalister eller skriva debattartiklar i olika medier.',
            'Påverka på sin arbetsplats, till exempel genom fackföreningar.',
            'Lämna synpunkter och förslag till sin kommun.',
          ],
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch02-dem-r1',
          prompt: 'Vad betyder ordet demokrati?',
          options: [
            { id: 'a', text: 'Kungastyre' },
            { id: 'b', text: 'Folkstyre' },
            { id: 'c', text: 'Majoritetsstyre i kommunen' },
            { id: 'd', text: 'Partistyre' },
          ],
          correctOptionId: 'b',
          explanation:
            'Demokrati kommer från grekiskan och betyder folkstyre: makten utgår från folket.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch02-dem-r2',
          prompt: 'Vilket av följande är ett kännetecken på fria val?',
          options: [
            { id: 'a', text: 'Att alla måste rösta på samma parti.' },
            { id: 'b', text: 'Att valen är hemliga och att alla röstberättigade har en röst var.' },
            { id: 'c', text: 'Att bara personer med hög inkomst får rösta.' },
            { id: 'd', text: 'Att man måste berätta för andra hur man röstat.' },
          ],
          correctOptionId: 'b',
          explanation:
            'I fria val har alla röstberättigade en röst var, valen är hemliga och ingen behöver avslöja hur de röstar. Det ska finnas flera partier att välja mellan.',
        },
        {
          kind: 'short-answer',
          id: 'ch02-dem-r3',
          prompt: 'Vad betyder rättssäkerhet?',
          acceptedAnswers: ['alla behandlas lika inför lagen', 'rättvis rättegång', 'ingen döms utan rättegång'],
          modelAnswer:
            'Att lagarna gäller för alla i Sverige och att ingen får dömas utan en rättvis rättegång.',
        },
        {
          kind: 'explain',
          id: 'ch02-dem-r4',
          prompt: 'Beskriv med egna ord tre olika sätt som du kan påverka samhället på.',
          checklist: [
            'Nämner minst tre lagliga sätt att påverka.',
            'Exempel: rösta, demonstrera, namninsamling, kontakta politiker, gå med i en förening.',
            'Visar förståelse för att påverkan kan ske både före och mellan val.',
          ],
          modelAnswer:
            'Man kan till exempel rösta i politiska val, bli medlem i ett parti eller en förening, kontakta politiker, demonstrera, skriva på eller starta en namninsamling, skriva debattartiklar eller lämna synpunkter till sin kommun.',
        },
      ],
      review: {
        keyTakeaways: [
          'Demokrati betyder folkstyre – makten utgår från folket.',
          'Fria val: en röst per person, flera partier, hemliga val och rätt att avstå.',
          'Yttrandefrihet innebär rätt att säga och skriva vad man tycker.',
          'Rättssäkerhet: lagarna gäller alla och ingen döms utan rättvis rättegång.',
          'Demokratin stärks när många röstar, engagerar sig och skaffar kunskap.',
          'Det finns många lagliga sätt att påverka – rösta, demonstrera, kontakta politiker, namninsamlingar med mera.',
        ],
        mostImportant: 'Folkstyre, fria val, yttrandefrihet och rättssäkerhet är demokratins fyra hörnstenar.',
        glossary: [
          { term: 'Demokrati', definition: 'Folkstyre – makten utgår från folket.' },
          { term: 'Fria val', definition: 'Val utan hot eller tvång, med hemlig röstning.' },
          { term: 'Rättssäkerhet', definition: 'Alla är lika inför lagen och får en rättvis rättegång.' },
        ],
      },
    },
    {
      id: 'ch02-hot-mot-demokratin',
      title: 'Hot mot demokratin, segregation och integration',
      source: { chapter: 2, pages: [11] },
      survey: {
        overview:
          'Avsnittet beskriver vad som kan försvaga en demokrati och förklarar begreppen segregation och integration. Du får också veta vilka förslag som brukar lyftas för att motverka segregation.',
        themes: [
          {
            title: 'Lågt valdeltagande',
            description: 'Färre möjligheter att påverka, minskat förtroende och ökade skillnader.',
          },
          {
            title: 'Falsk information och hat',
            description: 'Sprids bland annat i sociala medier och kan skapa konflikter i samhället.',
          },
          {
            title: 'Hot mot debattörer',
            description: 'Politiker och journalister kan skrämmas från att delta i debatten.',
          },
          {
            title: 'Segregation och integration',
            description:
              'Segregation splittrar, integration innebär att människor lever närmare varandra.',
          },
        ],
        keyConcepts: [
          {
            term: 'Valdeltagande',
            definition: 'Andelen röstberättigade som röstar i ett val.',
            explanation:
              'Ett lågt valdeltagande kan leda till att människor får mindre möjligheter att påverka politiska beslut i sin vardag. Det kan i sin tur öka skillnaderna mellan olika grupper i samhället.',
          },
          {
            term: 'Segregation',
            definition:
              'Att människor lever åtskilda beroende på till exempel inkomst eller etnisk bakgrund.',
          },
          {
            term: 'Integration',
            definition:
              'Att människor med olika bakgrund och ekonomi lever närmare varandra och känner sig delaktiga i samhället.',
          },
        ],
      },
      questions: [
        {
          id: 'ch02-hot-q1',
          prompt: 'Varför är ett lågt valdeltagande ett problem för demokratin?',
          kind: 'recall',
        },
        {
          id: 'ch02-hot-q2',
          prompt: 'Vad kan hända när falsk information och hat sprids i sociala medier?',
          kind: 'recall',
        },
        {
          id: 'ch02-hot-q3',
          prompt: 'Förklara skillnaden mellan segregation och integration.',
          kind: 'recall',
          lookFor: 'Rutan om segregation och integration.',
        },
        {
          id: 'ch02-hot-q4',
          prompt: 'Vilka förslag brukar politiker lyfta för att motverka segregation?',
          kind: 'recall',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Det finns problem som kan påverka demokratin.',
        },
        {
          kind: 'concept',
          term: 'Lågt valdeltagande',
          explanation:
            'Ett lågt valdeltagande är ett sådant problem. Det kan leda till att människor får mindre möjligheter att påverka politiska beslut i sin vardag. Det kan bero på att människor inte litar på politiker eller känner att deras röst inte gör någon skillnad – vilket i sin tur kan öka skillnaderna mellan olika grupper i samhället.',
        },
        {
          kind: 'paragraph',
          text: 'Ett annat problem är att det ibland sprids falsk information och hat, till exempel i sociala medier, för att skapa konflikter i samhället. Ibland hotas politiker, journalister och andra som pratar om samhällsfrågor. De kan då bli skrämda från att delta i den demokratiska debatten.',
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'För att demokratin ska fungera bra är det viktigt att många kan vara med och påverka, att informationen de får är sann och att samhället skyddar dem som deltar i den allmänna debatten.',
        },
        {
          kind: 'concept',
          term: 'Segregation',
          explanation:
            'Segregation innebär bland annat att människor lever åtskilda beroende på hur mycket pengar de tjänar eller vilken etnisk bakgrund de har.',
        },
        {
          kind: 'concept',
          term: 'Integration',
          explanation:
            'Integration betyder att människor med olika bakgrund och ekonomi lever närmare varandra och känner sig delaktiga i samhället.',
        },
        {
          kind: 'paragraph',
          text: 'När ett samhälle är segregerat kan människor ha olika tillgång till samhällsservice och kultur. Vissa områden kan också upplevas som mindre trygga. Ibland kan det leda till att människor lever med mycket lite kontakt med resten av samhället, vilket i sin tur kan leda till att förtroendet för myndigheterna minskar och till ett mindre politiskt engagemang. Ett segregerat samhälle kan därför försvaga demokratin.',
        },
        {
          kind: 'example',
          title: 'Vanliga förslag',
          text: 'För att motverka segregation och underlätta integration brukar politiker till exempel föreslå språkutbildning och att det ska finnas olika typer av bostäder i ett område.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch02-hot-r1',
          prompt: 'Vad menas med segregation?',
          options: [
            { id: 'a', text: 'Att människor med olika bakgrund lever nära varandra.' },
            {
              id: 'b',
              text: 'Att människor lever åtskilda beroende på inkomst eller etnisk bakgrund.',
            },
            { id: 'c', text: 'Att många röstar i val.' },
            { id: 'd', text: 'Att medierna granskar politiker.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Segregation innebär att människor lever åtskilda beroende på till exempel inkomst eller etnisk bakgrund. Integration är motsatsen: att människor lever närmare varandra och känner sig delaktiga.',
        },
        {
          kind: 'short-answer',
          id: 'ch02-hot-r2',
          prompt: 'Varför kan ett lågt valdeltagande försvaga demokratin?',
          acceptedAnswers: [
            'mindre möjlighet att påverka',
            'människor får mindre möjligheter att påverka',
            'ökar skillnaderna',
          ],
          modelAnswer:
            'Ett lågt valdeltagande kan leda till att människor får mindre möjligheter att påverka politiska beslut i sin vardag, vilket i sin tur kan öka skillnaderna mellan olika grupper i samhället.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch02-hot-r3',
          prompt: 'Vilka två förslag brukar politiker lyfta för att motverka segregation?',
          options: [
            { id: 'a', text: 'Språkutbildning och olika typer av bostäder i ett område.' },
            { id: 'b', text: 'Högre skatter och fler motorvägar.' },
            { id: 'c', text: 'Färre val och längre mandatperioder.' },
            { id: 'd', text: 'Mer reklam i sociala medier.' },
          ],
          correctOptionId: 'a',
          explanation:
            'För att motverka segregation och underlätta integration brukar politiker föreslå språkutbildning och att det ska finnas olika typer av bostäder i ett område.',
        },
        {
          kind: 'explain',
          id: 'ch02-hot-r4',
          prompt: 'Förklara med egna ord varför ett segregerat samhälle kan försvaga demokratin.',
          checklist: [
            'Olika tillgång till samhällsservice och kultur.',
            'Vissa områden kan upplevas som mindre trygga.',
            'Minskad kontakt med resten av samhället leder till minskat förtroende och mindre politiskt engagemang.',
          ],
          modelAnswer:
            'I ett segregerat samhälle kan människor ha olika tillgång till samhällsservice och kultur, och vissa områden kan upplevas som mindre trygga. Det kan leda till att människor lever med mycket lite kontakt med resten av samhället, vilket minskar förtroendet för myndigheterna och det politiska engagemanget. Därför kan segregation försvaga demokratin.',
        },
      ],
      review: {
        keyTakeaways: [
          'Lågt valdeltagande, falsk information och hot mot debattörer kan försvaga demokratin.',
          'Segregation: människor lever åtskilda på grund av inkomst eller etnisk bakgrund.',
          'Integration: människor med olika bakgrund lever närmare varandra och känner sig delaktiga.',
          'Segregation kan minska förtroendet för myndigheter och det politiska engagemanget.',
          'Vanliga förslag mot segregation: språkutbildning och blandade boendeformer.',
        ],
        mostImportant: 'Demokratin bygger på att många deltar, att informationen är sann och att debattörer skyddas.',
        glossary: [
          { term: 'Valdeltagande', definition: 'Andelen röstberättigade som röstar.' },
          { term: 'Segregation', definition: 'Att människor lever åtskilda.' },
          { term: 'Integration', definition: 'Att människor med olika bakgrund lever nära varandra och är delaktiga.' },
        ],
      },
    },
  ],
}
