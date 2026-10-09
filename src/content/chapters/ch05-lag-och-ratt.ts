import type { Chapter } from '../types'

export const chapter05: Chapter = {
  id: 'ch05',
  order: 5,
  title: 'Lag och rätt',
  intro:
    'Kapitlet handlar om lagar som alla måste följa. Lagarna finns för att samhället ska fungera och de skyddar människor. Rättsväsendet ser till att lagarna följs, utreder brott och dömer dem som bryter mot lagen. Rättssäkerhet innebär att alla behandlas lika inför lagen och har rätt till en rättvis rättegång.',
  learningGoals: [
    'Namnge Sveriges fyra grundlagar och veta vad de skyddar.',
    'Förklara vad allemansrätten innebär.',
    'Beskriva vad de olika delarna av rättsväsendet gör.',
    'Redogöra för hur en brottsutredning går till.',
    'Känna till domstolarnas tre nivåer och vad straffmyndighetsåldern är.',
  ],
  source: { chapter: 5, pages: [16, 17, 18, 19] },
  sections: [
    {
      id: 'ch05-grundlagarna',
      title: 'Grundlagarna',
      source: { chapter: 5, pages: [16, 17] },
      survey: {
        overview:
          'Avsnittet presenterar Sveriges fyra grundlagar och vad de skyddar. Du får också veta vad allemansrätten innebär och varför den är skyddad i grundlagen.',
        themes: [
          {
            title: 'Fyra grundlagar',
            description:
              'Regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen och successionsordningen.',
          },
          {
            title: 'Regeringsformen – demokratins grund',
            description:
              'All offentlig makt utgår från folket, och fri- och rättigheterna garanteras.',
          },
          {
            title: 'Tryck- och yttrandefrihet',
            description:
              'Rätten att ge ut tidningar och uttrycka åsikter – men vissa yttranden är förbjudna.',
          },
          {
            title: 'Allemansrätten',
            description: 'Rätten att vara i naturen, med ansvar för naturen och markägaren.',
          },
        ],
        keyConcepts: [
          {
            term: 'Grundlag',
            definition: 'En lag som är svårare att ändra än andra lagar.',
          },
          {
            term: 'Regeringsformen',
            definition:
              'Grundlagen som säger att all offentlig makt utgår från folket, att riksdagen stiftar lagar och att regeringen styr landet.',
            explanation:
              'Den garanterar medborgarnas grundläggande fri- och rättigheter, beskriver statschefens roll och hur myndigheterna fungerar.',
          },
          {
            term: 'Tryckfrihetsförordningen',
            definition: 'Grundlagen som skyddar det fria ordet i tryckt form.',
            explanation: 'Den ger alla rätt att fritt ge ut böcker, tidningar och tidskrifter.',
          },
          {
            term: 'Yttrandefrihetsgrundlagen',
            definition:
              'Grundlagen som ger alla rätt att uttrycka sina tankar och åsikter fritt, till exempel i radio, tv och dagstidningar.',
          },
          {
            term: 'Successionsordningen',
            definition: 'Grundlagen som bestämmer vem som ska bli kung eller drottning efter den nuvarande.',
          },
          {
            term: 'Allemansrätten',
            definition:
              'Rätten att vara i naturen oavsett vem som äger marken, med ansvar för naturen och markägaren.',
            explanation:
              'Allemansrätten är skyddad i regeringsformen. Man får gå, cykla, paddla, sätta upp tält, göra upp eld och plocka bär, svamp och blommor. Men man får inte skada naturen eller störa markägaren.',
          },
          {
            term: 'Förtal, hets mot folkgrupp och hatbrott',
            definition: 'Brott som innebär att kränka eller förtala personer eller grupper.',
          },
        ],
      },
      questions: [
        {
          id: 'ch05-gru-q1',
          prompt: 'Vilka är Sveriges fyra grundlagar?',
          kind: 'recall',
          lookFor: 'Listan i början av avsnittet.',
        },
        {
          id: 'ch05-gru-q2',
          prompt: 'Vad säger regeringsformen om makten i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch05-gru-q3',
          prompt: 'Vad får man göra enligt allemansrätten, och vad är inte tillåtet?',
          kind: 'recall',
        },
        {
          id: 'ch05-gru-q4',
          prompt: 'Varför är grundlagarna svårare att ändra än andra lagar? Vad tror du att det skyddar?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Sverige har fyra grundlagar: regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen och successionsordningen. Grundlagarna är svårare att ändra än andra lagar.',
        },
        {
          kind: 'concept',
          term: 'Regeringsformen',
          explanation:
            'Regeringsformen säger att all offentlig makt utgår från folket, att riksdagen stiftar lagar och att regeringen styr landet. Den garanterar medborgarnas grundläggande fri- och rättigheter, beskriver statschefens roll och hur myndigheterna fungerar.',
        },
        {
          kind: 'quote',
          text: 'All offentlig makt i Sverige utgår från folket.',
          citation: 'Regeringsformen, citerad i "Sverige i fokus" kap. 5',
        },
        {
          kind: 'list',
          items: [
            'Den offentliga makten ska utövas med respekt för alla människors lika värde och för den enskilda människans frihet och värdighet.',
          ],
        },
        {
          kind: 'concept',
          term: 'Tryckfrihetsförordningen',
          explanation:
            'Den skyddar det fria ordet i tryckt form och ger alla rätt att fritt ge ut böcker, tidningar och tidskrifter.',
        },
        {
          kind: 'concept',
          term: 'Yttrandefrihetsgrundlagen',
          explanation:
            'Den ger alla rätt att uttrycka sina tankar och åsikter fritt, till exempel i radio, i tv och i dagstidningar. Alla som bor i Sverige har också rätt att vara med i och bilda föreningar och att demonstrera.',
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att uttrycka åsikter, men vissa yttranden är förbjudna i lag. Det är till exempel förbjudet att kränka och förtala personer eller grupper – sådana brott kallas förtal, hets mot folkgrupp eller hatbrott. Det är också förbjudet att sprida information som kan skada Sveriges säkerhet.',
        },
        {
          kind: 'concept',
          term: 'Successionsordningen',
          explanation: 'Den bestämmer vem som ska bli kung eller drottning efter den nuvarande.',
        },
        {
          kind: 'concept',
          term: 'Allemansrätten',
          explanation:
            'Den omfattande svenska allemansrätten skyddas i regeringsformen. Den säger vad man får och inte får göra ute i naturen, och ger alla möjlighet att vara i naturen oavsett vem som äger marken.',
        },
        {
          kind: 'list',
          items: [
            'Det går bra att gå, cykla, paddla, sätta upp tält, göra upp eld och plocka bär, svamp och blommor.',
            'Man måste vara ansvarsfull och inte skada naturen eller störa markägaren.',
            'Det är inte tillåtet att gå på bondens åkrar, gå in i någon annans trädgård eller kasta skräp i naturen.',
            'Vissa ovanliga växter skyddas av lagen och får inte plockas.',
          ],
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch05-gru-r1',
          prompt: 'Vilken grundlag bestämmer vem som ska bli kung eller drottning?',
          options: [
            { id: 'a', text: 'Regeringsformen' },
            { id: 'b', text: 'Tryckfrihetsförordningen' },
            { id: 'c', text: 'Yttrandefrihetsgrundlagen' },
            { id: 'd', text: 'Successionsordningen' },
          ],
          correctOptionId: 'd',
          explanation:
            'Successionsordningen är den grundlag som bestämmer vem som ska bli kung eller drottning efter den nuvarande.',
        },
        {
          kind: 'short-answer',
          id: 'ch05-gru-r2',
          prompt: 'Vilka är Sveriges fyra grundlagar?',
          acceptedAnswers: [
            'regeringsformen tryckfrihetsförordningen yttrandefrihetsgrundlagen successionsordningen',
            'regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen och successionsordningen',
          ],
          modelAnswer:
            'Regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen och successionsordningen.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch05-gru-r3',
          prompt: 'Vad ingår i allemansrätten?',
          options: [
            { id: 'a', text: 'Att gå in i någon annans trädgård' },
            { id: 'b', text: 'Att plocka bär, svamp och blommor och att tälta i naturen' },
            { id: 'c', text: 'Att köra bil på bondens åkrar' },
            { id: 'd', text: 'Att kasta skräp i naturen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Enligt allemansrätten får man bland annat gå, cykla, paddla, tälta, göra upp eld och plocka bär, svamp och blommor. Man får inte gå på bondens åkrar, gå in i någon annans trädgård eller kasta skräp.',
        },
        {
          kind: 'explain',
          id: 'ch05-gru-r4',
          prompt: 'Förklara med egna ord varför yttrandefriheten har gränser.',
          checklist: [
            'Yttrandefriheten är skyddad i grundlagen.',
            'Vissa yttranden är förbjudna i lag.',
            'Nämner exempel: förtal, hets mot folkgrupp, hatbrott eller att sprida information som skadar Sveriges säkerhet.',
          ],
          modelAnswer:
            'Yttrandefriheten skyddas av tryckfrihetsförordningen och yttrandefrihetsgrundlagen och ger alla rätt att uttrycka sina åsikter. Men vissa yttranden är förbjudna i lag: det är till exempel förbjudet att kränka eller förtala personer eller grupper – det kallas förtal, hets mot folkgrupp eller hatbrott. Det är också förbjudet att sprida information som kan skada Sveriges säkerhet.',
        },
      ],
      review: {
        keyTakeaways: [
          'Sverige har fyra grundlagar: regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen och successionsordningen.',
          'Grundlagarna är svårare att ändra än andra lagar.',
          'Regeringsformen: all offentlig makt utgår från folket; fri- och rättigheter garanteras.',
          'Tryck- och yttrandefriheten skyddar det fria ordet, men förtal och hets mot folkgrupp är förbjudet.',
          'Allemansrätten är skyddad i regeringsformen och ger alla rätt att vara i naturen – med ansvar.',
        ],
        mostImportant: 'De fyra grundlagarnas namn och vad de skyddar är centralt för provet.',
        glossary: [
          { term: 'Grundlag', definition: 'Lag som är svårare att ändra än andra lagar.' },
          { term: 'Allemansrätten', definition: 'Rätten att vara i naturen oavsett markägare, med ansvar.' },
          { term: 'Hets mot folkgrupp', definition: 'Brott som innebär att kränka eller hota en grupp.' },
        ],
      },
    },
    {
      id: 'ch05-rattsvasendet',
      title: 'Rättsväsendet',
      source: { chapter: 5, pages: [17, 18, 19] },
      survey: {
        overview:
          'Avsnittet beskriver vilka myndigheter som ingår i rättsväsendet, hur en brottsutredning går till och hur domstolarna är uppbyggda. Du får också veta vad straffmyndighetsåldern är.',
        themes: [
          {
            title: 'Rättsväsendets delar',
            description: 'Polisen, Åklagarmyndigheten, domstolarna, Brottsoffermyndigheten och Kriminalvården.',
          },
          {
            title: 'Rättssäkerhet',
            description: 'Alla behandlas lika inför lagen, domstolarna är oberoende och man får överklaga.',
          },
          {
            title: 'Från anmälan till rättegång',
            description: 'Anmälan, förhör, förundersökning, anhållan och häktning.',
          },
          {
            title: 'Domstolarnas tre nivåer',
            description: 'Tingsrätten, hovrätten och Högsta domstolen.',
          },
          {
            title: 'Straffmyndighet',
            description: 'I Sverige kan man bli åtalad för brott från 15 års ålder.',
          },
        ],
        keyConcepts: [
          {
            term: 'Rättssäkerhet',
            definition:
              'Att alla behandlas lika inför lagen och får en rättvis rättegång.',
            explanation:
              'Ingen ska dömas utan en process där bevis och fakta granskas noggrant. Domstolarna är oberoende – regering eller riksdag kan inte bestämma hur de ska döma. Alla har rätt att försvara sig med hjälp av en advokat och att överklaga en dom.',
          },
          {
            term: 'Åklagarmyndigheten',
            definition:
              'Avgör om personer som misstänks för brott ska ställas inför en domstol.',
          },
          {
            term: 'Anhållan',
            definition:
              'När en åklagare beslutar att en misstänkt person ska hållas inlåst i upp till 72 timmar.',
          },
          {
            term: 'Häktning',
            definition:
              'När en domstol beslutar att en misstänkt person ska hållas inlåst under en längre tid.',
          },
          {
            term: 'Nämndemän',
            definition:
              'Lekmannadomare i tingsrätten som utses av de politiska partierna och ska representera allmänheten.',
          },
          {
            term: 'Straffmyndighetsålder',
            definition: 'Åldern då man kan bli åtalad för ett brott – i Sverige 15 år.',
            explanation:
              'Under 2026 har regeringen lämnat ett förslag om att straffmyndighetsåldern ska sänkas till 13 år vid allvarliga brott. När ett yngre barn gör något brottsligt är det socialtjänsten som bestämmer vad som ska hända med barnet.',
          },
          {
            term: 'Belastningsregister',
            definition:
              'Register över personer som dömts för vissa allvarliga brott. Det kan göra det svårare att få jobb, körkort eller medborgarskap.',
          },
        ],
      },
      questions: [
        {
          id: 'ch05-rat-q1',
          prompt: 'Vilka myndigheter ingår i det svenska rättsväsendet, och vad gör de?',
          kind: 'recall',
        },
        {
          id: 'ch05-rat-q2',
          prompt: 'Vad betyder det att domstolarna är oberoende?',
          kind: 'recall',
        },
        {
          id: 'ch05-rat-q3',
          prompt: 'Vilka är domstolarnas tre nivåer?',
          kind: 'recall',
        },
        {
          id: 'ch05-rat-q4',
          prompt: 'Vad är straffmyndighetsåldern i Sverige, och vad händer om ett yngre barn begår ett brott?',
          kind: 'recall',
        },
        {
          id: 'ch05-rat-q5',
          prompt:
            'Varför är det viktigt att en misstänkt person betraktas som oskyldig tills den dömts? Resonera kring vad som skulle kunna gå fel annars.',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Det svenska rättsväsendet består av olika myndigheter som arbetar för att se till att lagar följs och att staten utövar sin makt enligt lagen.',
        },
        {
          kind: 'list',
          items: [
            'Polisen förhindrar, utreder och bekämpar brott.',
            'Åklagarmyndigheten avgör om personer som misstänks för brott ska ställas inför en domstol.',
            'Domstolar granskar bevis och fattar därefter beslut om påföljd, som böter eller fängelse, eller om frikännande.',
            'Brottsoffermyndigheten tar hand om personer som utsatts för brott.',
            'Kriminalvården ansvarar bland annat för fängelser och för att dömda personer avtjänar sina straff.',
          ],
        },
        {
          kind: 'concept',
          term: 'Rättssäkerhet',
          explanation:
            'Rättssäkerhet betyder att alla behandlas lika inför lagen och får en rättvis rättegång. Ingen ska dömas utan en process där bevis och fakta granskas noggrant. Domstolarna är oberoende: regering eller riksdag kan inte bestämma hur de ska döma. Alla har också rätt att försvara sig med hjälp av en advokat och att överklaga en dom.',
        },
        {
          kind: 'paragraph',
          text: 'Domstolarna bedömer om någon är skyldig till brott och vilken påföljd personen i så fall ska få, till exempel böter eller fängelse. En person som är misstänkt för ett brott ska betraktas som oskyldig tills den dömts. Domstolarna hjälper också till när personer är oeniga, till exempel vid vårdnadstvister mellan föräldrar (tvistemål).',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Tingsrätten – första instans, där brottsmål och tvistemål börjar.',
            'Hovrätten – prövar fall som har överklagats från tingsrätten.',
            'Högsta domstolen (HD) – prövar bara vissa viktiga fall som redan gått igenom tingsrätt och hovrätt.',
          ],
        },
        {
          kind: 'concept',
          term: 'Polisen',
          explanation:
            'Polisens uppgift är att upprätthålla lag och ordning och att förebygga och utreda brott. Polisen samarbetar med skolor, kommuner, företag, föreningar och andra myndigheter för att göra samhället tryggt. Polisen gör också pass och nationella id-kort till svenska medborgare och beslutar om vissa tillstånd, till exempel för en demonstration.',
        },
        {
          kind: 'example',
          title: 'Från anmälan till häktning',
          text: 'En brottsutredning följer en process för att garantera rättssäkerheten:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Polisanmälan: Den som utsätts för ett brott anmäler det till polisen.',
            'Förhör: Polisen tar reda på mer för att förstå vad som hänt.',
            'Förundersökning: Polisen samlar bevis och pratar med vittnen.',
            'Anhållan: Vid starka misstankar kan en åklagare anhålla personen, som då kan hållas inlåst i upp till 72 timmar.',
            'Häktning: Om bevisen blir fler och misstankarna starkare kan en domstol besluta att den misstänkte ska hållas inlåst under en längre tid.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Efter brottsutredningen bestämmer en åklagare om det ska bli en rättegång i domstol. Under rättegången försöker åklagaren bevisa att den åtalade är skyldig. Den åtalade har rätt till en försvarsadvokat som kan ifrågasätta åklagarens bevis och lägga fram egna bevis. Domaren lyssnar på argumenten och bestämmer om den misstänkte är skyldig och vilken påföljd som i så fall ska delas ut.',
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'I tingsrätten dömer också nämndemän tillsammans med domaren. De ska representera allmänheten och ge insyn i rättsprocessen. Nämndemännen är utsedda av de politiska partierna.',
        },
        {
          kind: 'paragraph',
          text: 'I Sverige är en person straffmyndig och kan bli åtalad för ett brott från 15 års ålder. Under 2026 har regeringen lämnat ett förslag om att straffmyndighetsåldern ska sänkas till 13 år vid allvarliga brott. När ett yngre barn gör något brottsligt är det socialtjänsten som bestämmer vad som ska hända med barnet.',
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'Den som döms för vissa allvarliga brott registreras i ett belastningsregister. Det kan göra det svårare att få jobb, körkort eller medborgarskap.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch05-rat-r1',
          prompt: 'Vilken domstol är första instans, där brottsmål och tvistemål börjar?',
          options: [
            { id: 'a', text: 'Hovrätten' },
            { id: 'b', text: 'Högsta domstolen' },
            { id: 'c', text: 'Tingsrätten' },
            { id: 'd', text: 'Förvaltningsrätten' },
          ],
          correctOptionId: 'c',
          explanation:
            'Tingsrätten är första instans. Hovrätten prövar överklagade fall och Högsta domstolen prövar bara vissa viktiga fall.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch05-rat-r2',
          prompt: 'Hur länge kan en anhållen person hållas inlåst innan eventuell häktning?',
          options: [
            { id: 'a', text: 'I upp till 24 timmar' },
            { id: 'b', text: 'I upp till 48 timmar' },
            { id: 'c', text: 'I upp till 72 timmar' },
            { id: 'd', text: 'I upp till en vecka' },
          ],
          correctOptionId: 'c',
          explanation:
            'Vid anhållan kan den misstänkte hållas inlåst i upp till 72 timmar. Vid häktning beslutar en domstol att personen ska hållas inlåst under en längre tid.',
        },
        {
          kind: 'short-answer',
          id: 'ch05-rat-r3',
          prompt: 'Från vilken ålder är man straffmyndig i Sverige?',
          acceptedAnswers: ['15 år', '15', 'femton år'],
          modelAnswer: 'Från 15 års ålder.',
        },
        {
          kind: 'short-answer',
          id: 'ch05-rat-r4',
          prompt: 'Vem ansvarar för vad som händer om ett barn under 15 år begår ett brott?',
          acceptedAnswers: ['socialtjänsten', 'socialtjänsten bestämmer'],
          modelAnswer: 'Socialtjänsten bestämmer vad som ska hända med barnet.',
        },
        {
          kind: 'explain',
          id: 'ch05-rat-r5',
          prompt: 'Förklara med egna ord vad rättssäkerhet innebär och ge minst tre exempel.',
          checklist: [
            'Alla behandlas lika inför lagen.',
            'Alla har rätt till en rättvis rättegång.',
            'Domstolarna är oberoende av regering och riksdag.',
            'Man har rätt till advokat och att överklaga.',
            'En misstänkt betraktas som oskyldig tills den dömts.',
          ],
          modelAnswer:
            'Rättssäkerhet betyder att alla behandlas lika inför lagen och får en rättvis rättegång. Ingen ska dömas utan en process där bevis och fakta granskas noggrant. Domstolarna är oberoende, så regering eller riksdag kan inte bestämma hur de ska döma. Alla har rätt att försvara sig med hjälp av en advokat och att överklaga en dom. En person som är misstänkt ska betraktas som oskyldig tills den dömts.',
        },
      ],
      review: {
        keyTakeaways: [
          'Rättsväsendet: Polisen utreder, åklagaren beslutar om åtal, domstolarna dömer, Kriminalvården verkställer.',
          'Rättssäkerhet: likhet inför lagen, rättvis rättegång, oberoende domstolar och rätt att överklaga.',
          'Brottsutredning: anmälan → förhör → förundersökning → anhållan (72 timmar) → häktning.',
          'Domstolarnas tre nivåer: tingsrätt, hovrätt, Högsta domstolen.',
          'Nämndemän utses av de politiska partierna och dömer i tingsrätten.',
          'Straffmyndighetsåldern är 15 år. Yngre barn hanteras av socialtjänsten.',
          'Belastningsregistret kan påverka möjligheten till jobb, körkort och medborgarskap.',
        ],
        mostImportant: 'Domstolarnas tre nivåer och rättssäkerhetens innebörd är provcentrala.',
        glossary: [
          { term: 'Rättssäkerhet', definition: 'Alla är lika inför lagen och får en rättvis rättegång.' },
          { term: 'Häktning', definition: 'Domstolsbeslut om att hålla en misstänkt inlåst längre tid.' },
          { term: 'Nämndemän', definition: 'Lekmannadomare i tingsrätten, utsedda av partierna.' },
        ],
      },
    },
  ],
}
