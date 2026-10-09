import type { Chapter } from '../types'

export const chapter01: Chapter = {
  id: 'ch01',
  order: 1,
  title: 'Landet Sverige',
  intro:
    'Kapitlet handlar om Sveriges geografi, klimat och natur. Det handlar också om några viktiga naturresurser och om hur Sverige arbetar för att hantera klimatförändringarna.',
  learningGoals: [
    'Känna till var Sverige ligger och hur landet är indelat.',
    'Känna igen de största sjöarna, öarna och bergen.',
    'Veta ungefär hur många som bor i Sverige och var de bor.',
    'Förstå vad en naturresurs är och vilka naturresurser Sverige har.',
    'Förklara vad hållbar utveckling innebär och vad Sverige har för klimatmål.',
  ],
  source: { chapter: 1, pages: [5, 6, 7, 8, 9] },
  sections: [
    {
      id: 'ch01-geografi-klimat-natur',
      title: 'Geografi, klimat och natur',
      source: { chapter: 1, pages: [5, 6] },
      survey: {
        overview:
          'Avsnittet beskriver var Sverige ligger, hur landet sträcker sig från norr till söder och varför klimatet är mildare än vad läget långt norrut gör att man kan tro. Du får också veta hur istiden formade landskapet.',
        themes: [
          {
            title: 'Sveriges läge i Norden',
            description:
              'Sverige ligger i Norden i norra Europa och är det största av de fem nordiska länderna.',
          },
          {
            title: 'Långt land med lång kust',
            description:
              'Landet sträcker sig cirka 1 600 kilometer från Treriksröset i norr till Smygehuk i söder.',
          },
          {
            title: 'Milt klimat trots nordligt läge',
            description:
              'Golfströmmen och den Nordatlantiska strömmen för värme norrut, vilket ger Sverige ett mildare klimat.',
          },
          {
            title: 'Istiden har format landskapet',
            description:
              'Inlandsisen lämnade efter sig sjöar, skärgårdar, odlingsbar jord och formade fjällen.',
          },
        ],
        keyConcepts: [
          {
            term: 'Norden',
            definition:
              'Området i norra Europa med fem länder: Danmark, Finland, Island, Norge och Sverige.',
          },
          {
            term: 'Östersjön',
            definition: 'Havet vid Sveriges östra kust, där Gotland och Öland ligger.',
          },
          {
            term: 'Skagerrak och Kattegatt',
            definition: 'Haven vid Sveriges västra kust.',
          },
          {
            term: 'Golfströmmen',
            definition:
              'En varm havsström som transporterar varmt vatten från Mexikanska golfen mot Europa.',
            explanation:
              'Strömmen fungerar som ett värmesystem för Norden: havsvattnet värmer luften, och vindarna för sedan in den mildare luften över Sverige. Därför är Sverige varmare än andra områden på samma breddgrad.',
          },
          {
            term: 'Treriksröset',
            definition: 'Sveriges nordligaste punkt, där Sverige, Norge och Finland möts.',
          },
          {
            term: 'Smygehuk',
            definition: 'Sveriges sydligaste punkt, i Skåne.',
          },
          {
            term: 'Skanderna',
            definition: 'Bergskedjan längs gränsen mot Norge – i Sverige kallad fjällen.',
          },
          {
            term: 'Skärgård',
            definition:
              'Ett havsområde med många öar nära land, till exempel utanför Göteborg och i Bohuslän.',
          },
        ],
      },
      questions: [
        {
          id: 'ch01-geo-q1',
          prompt: 'Vilka fem länder ingår i Norden?',
          kind: 'recall',
          lookFor: 'Faktarutan om Norden.',
        },
        {
          id: 'ch01-geo-q2',
          prompt: 'Varför har Sverige ett milt klimat trots att landet ligger så långt norrut?',
          kind: 'recall',
          lookFor: 'Stycket om Golfströmmen.',
        },
        {
          id: 'ch01-geo-q3',
          prompt: 'Vad är Sveriges högsta berg och ungefär hur högt är det?',
          kind: 'recall',
          lookFor: 'Avsnittet om fjäll.',
        },
        {
          id: 'ch01-geo-q4',
          prompt: 'Hur skulle du beskriva skillnaden mellan naturen där du bor och naturen i fjällen?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige ligger i Norden i norra Europa. Den nordligaste delen av landet ligger norr om polcirkeln, i det arktiska området.',
        },
        {
          kind: 'concept',
          term: 'Norden',
          explanation:
            'Norden är en del av norra Europa och består av fem länder: Danmark, Finland, Island, Norge och Sverige. Sverige är det största av dem.',
        },
        {
          kind: 'paragraph',
          text: 'Sverige är ett avlångt land. Det sträcker sig cirka 1 600 kilometer från den nordligaste punkten Treriksröset till den sydligaste punkten Smygehuk.',
        },
        {
          kind: 'list',
          items: [
            'Havet vid den östra kusten heter Östersjön. Där ligger Sveriges två största öar, Gotland och Öland.',
            'Haven vid den västra kusten heter Skagerrak och Kattegatt.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Trots sitt nordliga läge har Sverige ett milt klimat jämfört med många andra områden på samma breddgrad. Orsaken är Golfströmmen och den Nordatlantiska strömmen, som transporterar varmt vatten från Mexikanska golfen över Atlanten mot Europa.',
        },
        {
          kind: 'concept',
          term: 'Varför blir det mildare?',
          explanation:
            'Havsvattnet värmer upp luften, och vindarna för sedan in den mildare och fuktigare luften över Sverige. Värme transporteras alltså med vatten och vind, inte bara av solen.',
        },
        {
          kind: 'paragraph',
          text: 'För ungefär 10 000 år sedan var Sverige täckt av flera kilometer tjock is – istiden. När isen smälte bort hade den format landskapet och lämnat tydliga spår efter sig: många sjöar, skärgårdar med tusentals öar och slätter med jord som går att odla. Isen har också påverkat hur fjällen ser ut i dag.',
        },
        {
          kind: 'example',
          title: 'Fjällen',
          text: 'Bergskedjan Skanderna ligger längs gränsen mot Norge och kallas i Sverige för fjällen. Där är klimatet för kallt och blåsigt för att träd ska kunna växa, så landskapet består mest av sten, gräs och låga växter. Där finns Sveriges högsta berg, Kebnekaise, som är cirka 2 000 meter högt.',
        },
        {
          kind: 'paragraph',
          text: 'Mer än hälften av Sveriges yta täcks av skog. I norr, där klimatet är kallare, växer mest barrträd som gran och tall. Längre söderut är klimatet mildare och där är lövträd vanligare.',
        },
        {
          kind: 'list',
          items: [
            'Sveriges tre största sjöar är Vänern, Vättern och Mälaren.',
            'Det finns flera hundra vattendrag – åar och älvar. De största älvarna rinner i norra Sverige från fjällen ner mot havet.',
            'En skärgård är ett havsområde med många öar nära land. Skärgårdar finns längs norra kusten, längs östkusten ner till Småland och på västkusten utanför Göteborg och i Bohuslän.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Sverige har cirka 250 000 öar – fler än något annat land i världen.',
        },
      ],
      recite: [
        {
          kind: 'short-answer',
          id: 'ch01-geo-r1',
          prompt: 'Vilka fem länder ingår i Norden?',
          acceptedAnswers: ['danmark finland island norge sverige', 'danmark, finland, island, norge, sverige'],
          modelAnswer: 'Danmark, Finland, Island, Norge och Sverige.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch01-geo-r2',
          prompt: 'Varför har Sverige ett mildare klimat än många andra områden på samma breddgrad?',
          options: [
            { id: 'a', text: 'För att Sverige ligger nära polcirkeln.' },
            { id: 'b', text: 'För att varma havsströmmar för värme från Mexikanska golfen mot Europa.' },
            { id: 'c', text: 'För att Sverige är det största landet i Norden.' },
            { id: 'd', text: 'För att mer än hälften av landet täcks av skog.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Golfströmmen och den Nordatlantiska strömmen transporterar varmt vatten över Atlanten. Havsvattnet värmer luften och vindarna för in den mildare luften över Sverige.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-geo-r3',
          prompt: 'Vilka är de två största öarna i Sverige?',
          acceptedAnswers: ['gotland och öland', 'gotland öland', 'gotland, öland'],
          modelAnswer: 'Gotland och Öland, båda i Östersjön.',
        },
        {
          kind: 'explain',
          id: 'ch01-geo-r4',
          prompt: 'Förklara med egna ord hur istiden har format Sveriges natur.',
          checklist: [
            'Nämner att landet var täckt av is för ungefär 10 000 år sedan.',
            'Nämner att isen lämnade spår som sjöar, skärgårdar och odlingsbar jord.',
            'Nämner att isen har påverkat hur fjällen ser ut.',
          ],
          modelAnswer:
            'För ungefär 10 000 år sedan var Sverige täckt av flera kilometer tjock is. När isen smälte bort hade den format landskapet och lämnat spår efter sig i form av många sjöar, skärgårdar med tusentals öar och slätter med jord som går att odla. Isen har också påverkat fjällens utseende.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige ligger i Norden i norra Europa och är det största nordiska landet.',
          'Norra delen ligger norr om polcirkeln; landet är cirka 1 600 km långt.',
          'Östersjön ligger öster om Sverige och Skagerrak och Kattegatt väster om.',
          'Golfströmmen ger Sverige ett milt klimat trots det nordliga läget.',
          'Istiden har format sjöar, skärgårdar, odlingsmark och fjäll. Kebnekaise är högsta berg, cirka 2 000 meter.',
          'Sverige har cirka 250 000 öar, fler än något annat land. Största sjöarna är Vänern, Vättern och Mälaren.',
        ],
        mostImportant:
          'Sveriges nordliga läge kompenseras av varma havsströmmar – det förklarar landets klimat.',
        glossary: [
          { term: 'Norden', definition: 'Danmark, Finland, Island, Norge och Sverige.' },
          { term: 'Skärgård', definition: 'Havsområde med många öar nära land.' },
          { term: 'Fjällen', definition: 'Skanderna, bergskedjan längs gränsen mot Norge.' },
        ],
      },
    },
    {
      id: 'ch01-indelning-befolkning',
      title: 'Sveriges indelning och befolkning',
      source: { chapter: 1, pages: [6, 7] },
      survey: {
        overview:
          'Avsnittet visar vilka geografiska indelningar Sverige har och var människor bor. Du får veta skillnaden mellan landsdelar, landskap, län och kommuner.',
        themes: [
          {
            title: 'Landsdelar, landskap, län och kommuner',
            description: 'Sverige delas in på flera olika sätt, och indelningarna har olika betydelse.',
          },
          {
            title: 'Var människor bor',
            description: 'De flesta bor i södra Sverige, längs kusterna och i städerna.',
          },
        ],
        keyConcepts: [
          {
            term: 'Götaland, Svealand och Norrland',
            definition: 'Sveriges tre landsdelar: södra, mellersta och norra Sverige.',
          },
          {
            term: 'Landskap',
            definition: 'Sverige delas in i 25 landskap, som förr hade egna lagar.',
            explanation:
              'Landskapen har i dag ingen betydelse för hur Sverige styrs, men många känner ändå samhörighet med det landskap de fötts i eller bor i.',
          },
          { term: 'Län', definition: 'Sverige är indelat i 21 län.' },
          { term: 'Kommun', definition: 'Sverige är indelat i 290 kommuner.' },
        ],
      },
      questions: [
        {
          id: 'ch01-ind-q1',
          prompt: 'Vilka är Sveriges tre landsdelar, och vilken av dem omfattar mer än hälften av ytan?',
          kind: 'recall',
        },
        {
          id: 'ch01-ind-q2',
          prompt: 'Hur många län och hur många kommuner finns det i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch01-ind-q3',
          prompt: 'Vilka är Sveriges tre största städer, och ungefär hur många bor i och runt dem?',
          kind: 'recall',
        },
        {
          id: 'ch01-ind-q4',
          prompt:
            'Varför tror du att landskapen fortfarande betyder något för många, trots att de inte styr landet?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige brukar delas in i tre stora landsdelar: Götaland, Svealand och Norrland.',
        },
        {
          kind: 'list',
          items: [
            'Götaland ligger i södra Sverige.',
            'Svealand ligger i mellersta Sverige.',
            'Norrland ligger i norra Sverige och omfattar mer än hälften av Sveriges yta.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Sverige delas också in i 25 landskap. Landskapen var förr i tiden områden som hade egna lagar. I dag har de ingen betydelse för hur Sverige styrs, men många svenskar känner ändå att de hör ihop med det landskap där de fötts eller bor.',
        },
        {
          kind: 'concept',
          term: 'Olika indelningar – olika syften',
          explanation:
            'Landsdelar och landskap är geografiska och historiska indelningar. Län och kommuner är i stället administrativa: de används när staten, regionerna och kommunerna styr och organiserar samhället.',
        },
        {
          kind: 'paragraph',
          text: 'Sverige är indelat i 21 län och 290 kommuner.',
        },
        {
          kind: 'paragraph',
          text: 'I Sverige bor det nästan 11 miljoner människor. Befolkningen är inte jämnt fördelad: de flesta bor i den södra delen av Sverige och längs kusterna. Ungefär 85 procent av befolkningen bor i städer.',
        },
        {
          kind: 'example',
          title: 'De tre största städerna',
          text: 'Sveriges tre största städer är Stockholm, Göteborg och Malmö. I och runt dessa tre städer bor ungefär fyra miljoner människor.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch01-ind-r1',
          prompt: 'Vilken landsdel omfattar mer än hälften av Sveriges yta?',
          options: [
            { id: 'a', text: 'Götaland' },
            { id: 'b', text: 'Svealand' },
            { id: 'c', text: 'Norrland' },
            { id: 'd', text: 'Skåne' },
          ],
          correctOptionId: 'c',
          explanation: 'Norrland ligger i norra Sverige och omfattar mer än hälften av landets yta.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-ind-r2',
          prompt: 'Hur många län och hur många kommuner är Sverige indelat i?',
          acceptedAnswers: ['21 län och 290 kommuner', '21 och 290'],
          modelAnswer: 'Sverige är indelat i 21 län och 290 kommuner.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-ind-r3',
          prompt: 'Ungefär hur många människor bor i Sverige?',
          acceptedAnswers: ['nästan 11 miljoner', '11 miljoner', 'ca 11 miljoner'],
          modelAnswer: 'Nästan 11 miljoner människor.',
        },
        {
          kind: 'explain',
          id: 'ch01-ind-r4',
          prompt: 'Förklara skillnaden mellan landskap och län med egna ord.',
          checklist: [
            'Landskap är en historisk indelning – 25 stycken, förr med egna lagar.',
            'Landskap har i dag ingen betydelse för hur Sverige styrs.',
            'Län är en administrativ indelning – 21 stycken.',
          ],
          modelAnswer:
            'Landskapen är en gammal indelning i 25 områden som förr hade egna lagar. I dag styr de inte landet, men många känner samhörighet med sitt landskap. Länen är i stället en administrativ indelning: Sverige har 21 län som används när samhället styrs och organiseras.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige delas in i tre landsdelar: Götaland, Svealand och Norrland. Norrland är störst till ytan.',
          'Det finns 25 landskap, som i dag inte har betydelse för hur Sverige styrs.',
          'Sverige har 21 län och 290 kommuner.',
          'Nästan 11 miljoner människor bor i Sverige, varav ungefär 85 procent i städer.',
          'De tre största städerna är Stockholm, Göteborg och Malmö.',
        ],
        mostImportant: 'Sverige har 21 län och 290 kommuner – de indelningar som styr samhället.',
        glossary: [
          { term: 'Landsdel', definition: 'Götaland, Svealand eller Norrland.' },
          {
            term: 'Landskap',
            definition: 'En av Sveriges 25 historiska indelningar, utan politisk betydelse i dag.',
          },
          { term: 'Län', definition: 'En av Sveriges 21 administrativa indelningar.' },
        ],
      },
    },
    {
      id: 'ch01-naturresurser',
      title: 'Naturresurser',
      source: { chapter: 1, pages: [7, 8] },
      survey: {
        overview:
          'Avsnittet går igenom vilka naturresurser Sverige är rikt på och hur de används. Du får veta var gruvorna ligger och varför skogen är viktig för ekonomin.',
        themes: [
          {
            title: 'Järnmalm och mineraler',
            description: 'Gruvorna finns främst i Norrbottens län, till exempel i Kiruna och Malmberget.',
          },
          {
            title: 'Skog',
            description: 'Skogsprodukter säljs till många länder och har länge varit viktiga för handeln.',
          },
          {
            title: 'Vatten',
            description: 'Vatten används som dricksvatten, i jordbruk och industri – och för att producera el.',
          },
          {
            title: 'Jordbruksmark',
            description: 'Jordbruket finns mest i södra Sverige, där klimatet är mildare.',
          },
        ],
        keyConcepts: [
          {
            term: 'Naturresurs',
            definition:
              'Något i naturen som människor kan använda, till exempel mineraler, skog, jordbruksmark och vatten.',
          },
          { term: 'Järnmalm', definition: 'Malmen som används för att tillverka stål.' },
          {
            term: 'Vattenkraft',
            definition: 'El som produceras i kraftverk med hjälp av rinnande vatten.',
            explanation:
              'Vattenkraft står för en stor del av Sveriges elproduktion. Älvarna i norra Sverige är särskilt viktiga för detta.',
          },
          {
            term: 'Pappersmassa (cellulosa)',
            definition: 'En av de produkter som kommer från skogen och säljs vidare.',
          },
        ],
      },
      questions: [
        {
          id: 'ch01-nat-q1',
          prompt: 'Vilka naturresurser är Sverige rikt på?',
          kind: 'recall',
        },
        {
          id: 'ch01-nat-q2',
          prompt: 'Var ligger Sveriges största gruvor, och vad bryts där?',
          kind: 'recall',
        },
        {
          id: 'ch01-nat-q3',
          prompt: 'Varför finns det mest jordbruk i södra Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch01-nat-q4',
          prompt: 'Vilka naturresurser finns i ditt närområde, och hur används de?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige är rikt på flera viktiga naturresurser: järnmalm och andra mineraler, skog, jordbruksmark och vatten.',
        },
        {
          kind: 'concept',
          term: 'Järnmalm och mineraler',
          explanation:
            'Järnmalm och andra mineraler bryts ur gruvor. De största gruvorna finns i Norrbottens län, till exempel i Kiruna och Malmberget. Järn används för att tillverka stål, och i gruvorna bryts också koppar, zink, bly och guld. Järn och stål har länge varit viktiga för Sveriges ekonomi.',
        },
        {
          kind: 'example',
          title: 'Från malm till marknad',
          text: 'De största järnmalmsgruvorna finns i Norrbotten, och malmen fraktas vidare därifrån med tåg.',
        },
        {
          kind: 'paragraph',
          text: 'Produkter från skogen säljs till många länder, och skogen har varit en viktig del av Sveriges handel under lång tid. Några produkter som kommer från skogen:',
        },
        {
          kind: 'list',
          items: [
            'Pappersmassa (cellulosa).',
            'Papper och kartong.',
            'Trä, som används till exempel i byggindustrin.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Sverige har god tillgång till vatten i sjöar, vattendrag och älvar. Vattnet används som dricksvatten och i jordbruket och industrin. Men vatten är också en viktig energikälla: i flera älvar finns vattenkraftverk där rinnande vatten används för att producera el. Vattenkraft står för en stor del av Sveriges elproduktion.',
        },
        {
          kind: 'paragraph',
          text: 'Sveriges jordbruk är anpassat till klimatet. Det är svårare att odla i norr, där klimatet är kallare. Det mesta av jordbruket finns därför i södra Sverige.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch01-nat-r1',
          prompt: 'Var finns de största järnmalmsgruvorna i Sverige?',
          options: [
            { id: 'a', text: 'I Västerbottens och Jämtlands län' },
            { id: 'b', text: 'I Norrbottens län, till exempel i Kiruna och Malmberget' },
            { id: 'c', text: 'I Skåne och Halland' },
            { id: 'd', text: 'Utanför Göteborg och i Bohuslän' },
          ],
          correctOptionId: 'b',
          explanation:
            'De största gruvorna finns i Norrbottens län, till exempel i Kiruna och Malmberget. Malmen fraktas vidare därifrån med tåg.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-nat-r2',
          prompt: 'Varför finns det mesta av jordbruket i södra Sverige?',
          acceptedAnswers: ['kallare i norr', 'klimatet är mildare i söder', 'svårare att odla i norr'],
          modelAnswer:
            'Klimatet är kallare i norr, vilket gör det svårare att odla där. Jordbruket är anpassat till klimatet och finns därför mest i södra Sverige.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-nat-r3',
          prompt: 'Vad används vatten till förutom som dricksvatten?',
          acceptedAnswers: ['el', 'elproduktion', 'jordbruk och industri'],
          modelAnswer:
            'Vatten används i jordbruket och industrin, och för att producera el i vattenkraftverk.',
        },
        {
          kind: 'explain',
          id: 'ch01-nat-r4',
          prompt: 'Förklara med egna ord varför skogen är viktig för Sverige.',
          checklist: [
            'Skogsprodukter säljs till många länder.',
            'Skogen har länge varit viktig för Sveriges handel.',
            'Nämner exempel som pappersmassa, papper, kartong eller trä.',
          ],
          modelAnswer:
            'Produkter från skogen säljs till många länder och har varit en viktig del av Sveriges handel under lång tid. Exempel på produkter är pappersmassa (cellulosa), papper och kartong samt trä som används i byggindustrin. Mer än hälften av Sveriges yta täcks av skog.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige är rikt på järnmalm och andra mineraler, skog, jordbruksmark och vatten.',
          'De största gruvorna ligger i Norrbottens län, till exempel i Kiruna och Malmberget.',
          'Järn används för att tillverka stål; där bryts också koppar, zink, bly och guld.',
          'Skogsprodukter som pappersmassa, papper och trä säljs till många länder.',
          'Vattenkraft står för en stor del av Sveriges elproduktion.',
          'Jordbruket finns mest i södra Sverige eftersom klimatet är mildare där.',
        ],
        mostImportant:
          'Järn, skog och vattenkraft är tre naturresurser som haft stor betydelse för Sveriges ekonomi.',
        glossary: [
          { term: 'Naturresurs', definition: 'Något i naturen som människor kan använda.' },
          { term: 'Järnmalm', definition: 'Malmen som används för att tillverka stål.' },
          { term: 'Vattenkraft', definition: 'El som produceras med hjälp av rinnande vatten.' },
        ],
      },
    },
    {
      id: 'ch01-klimatforandringar',
      title: 'Klimatförändringar',
      source: { chapter: 1, pages: [8, 9] },
      survey: {
        overview:
          'Avsnittet förklarar varför klimatet förändras, vad det får för konsekvenser i Sverige och vad Sverige gör för att minska utsläppen. Du får också veta vad hållbar utveckling betyder.',
        themes: [
          {
            title: 'Orsaken till uppvärmningen',
            description: 'Människors utsläpp av växthusgaser från transporter, industrier och jordbruk.',
          },
          {
            title: 'Konsekvenser',
            description: 'Havsnivån höjs och extremt väder som värmeböljor, regn och torka blir vanligare.',
          },
          {
            title: 'Sveriges klimatmål',
            description: 'En klimatlag med målet att utsläppen ska vara nära noll år 2045.',
          },
          {
            title: 'Hållbar utveckling',
            description: 'Att använda naturresurser så att också framtida generationer kan leva bra.',
          },
        ],
        keyConcepts: [
          {
            term: 'Växthusgaser',
            definition:
              'Gaser som släpps ut från transporter, industrier och jordbruk och som värmer upp jorden.',
          },
          {
            term: 'FN:s klimatpanel',
            definition:
              'En sammanställning av forskning världen över som visar orsakerna till uppvärmningen.',
          },
          {
            term: 'Hållbar utveckling',
            definition: 'Att använda naturresurser så att framtida generationer också kan leva bra.',
            explanation:
              'Begreppet omfattar tre delar: miljö, samhälle och ekonomi. Stater, företag och individer kan alla bidra. Regeringar kan stifta regler, företag kan minska sin påverkan och individer kan leva mer hållbart och engagera sig politiskt.',
          },
          {
            term: 'Klimatlagen',
            definition: 'En svensk lag med klimatpolitiska mål, bland annat målet för 2045.',
          },
        ],
      },
      questions: [
        {
          id: 'ch01-kli-q1',
          prompt: 'Vad är den största orsaken till att jordens klimat värms upp snabbare i dag?',
          kind: 'recall',
        },
        {
          id: 'ch01-kli-q2',
          prompt: 'Vilka konsekvenser kan klimatförändringarna få i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch01-kli-q3',
          prompt: 'Vad säger Sveriges klimatmål för år 2045?',
          kind: 'recall',
        },
        {
          id: 'ch01-kli-q4',
          prompt: 'Vad betyder hållbar utveckling, och vad kan du själv göra i vardagen?',
          kind: 'recall',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Jordens klimat har alltid förändrats, men i dag går uppvärmningen snabbare än tidigare.',
        },
        {
          kind: 'paragraph',
          text: 'Forskare världen över, och sammanställningar från FN:s klimatpanel, visar att den största orsaken är människors utsläpp av växthusgaser från transporter, industrier och jordbruk.',
        },
        {
          kind: 'paragraph',
          text: 'När jorden blir varmare förändras klimatet. Isar vid polerna smälter och bidrar till att havsnivån höjs. Det blir också vanligare med extremt väder som värmeböljor, kraftiga regn och torka.',
        },
        {
          kind: 'example',
          title: 'Vad kan hända i Sverige?',
          text: 'I Sverige kan klimatförändringarna leda till att kraftiga regn och översvämningar blir vanligare. Fler och mer intensiva värmperioder på sommaren kan leda till torka och skogsbränder.',
        },
        {
          kind: 'concept',
          term: 'Sveriges klimatlag',
          explanation:
            'I Sverige finns en klimatlag med klimatpolitiska mål. Ett mål är att Sveriges utsläpp av växthusgaser ska vara så nära noll som möjligt år 2045. Det betyder att Sverige inte ska släppa ut mer växthusgaser än vad naturen kan ta upp.',
        },
        {
          kind: 'paragraph',
          text: 'Sverige samarbetar också med andra länder för att använda de lösningar som redan finns, till exempel teknik för att producera mer vind-, vatten- och solenergi.',
        },
        {
          kind: 'concept',
          term: 'Hållbar utveckling',
          explanation:
            'En hållbar utveckling handlar om att använda naturresurser på ett sätt så att framtida generationer också kan leva bra. Det omfattar miljö, samhälle och ekonomi, och stater, företag och individer kan alla bidra.',
        },
        {
          kind: 'list',
          items: [
            'Regeringar och internationella organisationer kan fatta beslut och ta fram regler för att minska utsläppen och skydda miljön.',
            'Företag kan minska sin påverkan på klimatet.',
            'Individer kan bidra genom att leva mer hållbart och engagera sig politiskt.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Så kan man minska utsläppen i vardagen: åka kollektivt (buss eller tåg), spara el och värme samt sortera sopor och återvinna.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch01-kli-r1',
          prompt: 'Vad är Sveriges klimatmål år 2045?',
          options: [
            { id: 'a', text: 'Att all el i Sverige ska komma från vindkraft.' },
            { id: 'b', text: 'Att utsläppen av växthusgaser ska vara så nära noll som möjligt.' },
            { id: 'c', text: 'Att alla bilar ska vara eldrivna.' },
            { id: 'd', text: 'Att Sverige ska sluta handla med andra länder.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Målet är att Sveriges utsläpp av växthusgaser ska vara så nära noll som möjligt år 2045 – Sverige ska inte släppa ut mer än vad naturen kan ta upp.',
        },
        {
          kind: 'short-answer',
          id: 'ch01-kli-r2',
          prompt: 'Vad är den största orsaken till klimatförändringarna?',
          acceptedAnswers: ['växthusgaser', 'utsläpp av växthusgaser', 'människors utsläpp'],
          modelAnswer: 'Människors utsläpp av växthusgaser från transporter, industrier och jordbruk.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch01-kli-r3',
          prompt: 'Vad menas med hållbar utveckling?',
          options: [
            { id: 'a', text: 'Att sluta använda naturresurser helt.' },
            {
              id: 'b',
              text: 'Att använda naturresurser så att framtida generationer också kan leva bra.',
            },
            { id: 'c', text: 'Att bara staten tar ansvar för miljön.' },
            { id: 'd', text: 'Att varje land klarar sig utan samarbete.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hållbar utveckling handlar om att använda naturresurser så att framtida generationer också kan leva bra. Det omfattar miljö, samhälle och ekonomi.',
        },
        {
          kind: 'explain',
          id: 'ch01-kli-r4',
          prompt: 'Förklara med egna ord vad som händer när jorden blir varmare.',
          checklist: [
            'Isar vid polerna smälter.',
            'Havsnivån höjs.',
            'Extremt väder blir vanligare – värmeböljor, kraftiga regn och torka.',
          ],
          modelAnswer:
            'När jorden blir varmare smälter isar vid polerna, vilket bidrar till att havsnivån höjs. Det blir också vanligare med extremt väder som värmeböljor, kraftiga regn och torka. I Sverige kan det innebära fler översvämningar och mer torka och skogsbränder.',
        },
      ],
      review: {
        keyTakeaways: [
          'Uppvärmningen går snabbare än tidigare och orsakas främst av utsläpp av växthusgaser.',
          'Konsekvenser: smältande isar, höjd havsnivå och vanligare extremt väder.',
          'I Sverige kan kraftiga regn, översvämningar, torka och skogsbränder bli vanligare.',
          'Sverige har en klimatlag. Målet är utsläpp nära noll år 2045.',
          'Hållbar utveckling omfattar miljö, samhälle och ekonomi, och alla kan bidra.',
          'I vardagen: åk kollektivt, spara el och värme, sortera och återvinn.',
        ],
        mostImportant:
          'Klimatlagen och målet om nära noll utsläpp år 2045 är det viktigaste att komma ihåg om Sveriges klimatarbete.',
        glossary: [
          {
            term: 'Växthusgaser',
            definition: 'Gaser från transporter, industrier och jordbruk som värmer jorden.',
          },
          {
            term: 'Hållbar utveckling',
            definition: 'Att använda naturresurser så att framtida generationer också kan leva bra.',
          },
          {
            term: 'Klimatlagen',
            definition: 'Lag med klimatpolitiska mål, till exempel målet för 2045.',
          },
        ],
      },
    },
  ],
}
