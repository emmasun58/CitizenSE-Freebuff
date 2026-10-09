import type { Chapter } from '../types'

export const chapter10: Chapter = {
  id: 'ch10',
  order: 10,
  title: 'Sveriges moderna historia',
  intro:
    'Kapitlet handlar om hur Sverige har gått från ett fattigt jordbruksland till ett högteknologiskt välfärdssamhälle på tvåhundra år. Den förändringen har präglats av konflikter, reformer och avgörande vägval.',
  learningGoals: [
    'Beskriva övergången från jordbrukssamhälle till industrisamhälle.',
    'Redogöra för hur Sverige blev en demokrati.',
    'Förklara vad folkhemmet och den svenska modellen är.',
    'Känna till vad som kännetecknade rekordåren.',
    'Förklara vad informationssamhället och globaliseringen innebär.',
  ],
  source: { chapter: 10, pages: [32, 33, 34, 35, 36, 37, 38] },
  sections: [
    {
      id: 'ch10-jordbruk-till-industri',
      title: 'Från jordbrukssamhälle till industrisamhälle',
      source: { chapter: 10, pages: [32] },
      survey: {
        overview:
          'Avsnittet beskriver hur Sverige gick från ett fattigt jordbruksland till ett industrisamhälle under 1800-talet, hur befolkningen ökade och varför många utvandrade.',
        themes: [
          {
            title: 'Ett fattigt jordbruksland',
            description: 'För tvåhundra år sedan bodde nästan alla på landet och arbetade med jordbruk.',
          },
          {
            title: 'Befolkningsökning',
            description:
              'Bättre jordbruksmetoder och medicinska framsteg gjorde befolkningen dubbelt så stor på hundra år.',
          },
          {
            title: 'Utvandringen till USA',
            description: 'Över en miljon svenskar utvandrade mellan 1850 och 1920.',
          },
          {
            title: 'Industrialiseringen',
            description: 'Sågverk och stålindustrier startade, och många flyttade till städerna.',
          },
        ],
        keyConcepts: [
          {
            term: 'Jordbrukssamhälle',
            definition:
              'Ett samhälle där nästan hela befolkningen bor på landet och arbetar med att odla jorden och sköta djur.',
          },
          {
            term: 'Industrisamhälle',
            definition:
              'Ett samhälle där industrier och fabriker är de viktigaste arbetsplatserna och många bor i städer.',
          },
          {
            term: 'Utvandring',
            definition:
              'Att lämna sitt land för att bo någon annanstans. Över en miljon svenskar utvandrade till USA mellan 1850 och 1920.',
          },
        ],
      },
      questions: [
        {
          id: 'ch10-jor-q1',
          prompt: 'Hur såg Sverige ut för tvåhundra år sedan?',
          kind: 'recall',
        },
        {
          id: 'ch10-jor-q2',
          prompt: 'Varför fördubblades Sveriges befolkning under 1800-talet?',
          kind: 'recall',
        },
        {
          id: 'ch10-jor-q3',
          prompt: 'Hur många svenskar utvandrade till USA, och under vilka år?',
          kind: 'recall',
        },
        {
          id: 'ch10-jor-q4',
          prompt: 'Vilka industrier startades först i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch10-jor-q5',
          prompt:
            'Varför tror du att många valde att lämna Sverige i hopp om ett bättre liv?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'För tvåhundra år sedan var Sverige ett typiskt jordbruksland. Nästan hela befolkningen bodde på landet och arbetade med att odla jorden och sköta djur. Städerna var små, och jämfört med andra länder i Europa var Sverige ett fattigt land.',
        },
        {
          kind: 'paragraph',
          text: 'Mycket förändrades under 1800-talet. Effektiva maskiner uppfanns och industrier växte fram i hela Europa. Sverige började utvecklas till ett industrisamhälle, och många flyttade till städerna för att arbeta i fabriker.',
        },
        {
          kind: 'concept',
          term: 'Befolkningsökning',
          explanation:
            'I början av 1800-talet fanns det omkring 2,5 miljoner invånare i Sverige. Hundra år senare var befolkningen dubbelt så stor. Orsaken var bättre jordbruksmetoder som gav mer mat och medicinska framsteg som minskade risken att barn dog av sjukdomar.',
        },
        {
          kind: 'paragraph',
          text: 'Men Sverige var fortfarande fattigt och många hade svårt att få arbete. Därför valde många att lämna Sverige: över en miljon svenskar utvandrade till USA mellan 1850 och 1920 i hopp om ett bättre liv.',
        },
        {
          kind: 'paragraph',
          text: 'De första större industrierna startades i Sverige i mitten av 1800-talet. Det var sågverk som producerade trävaror och industrier som tillverkade stål. Så småningom byggdes fler fabriker, till exempel industrier som tillverkade skor och kläder och verkstadsindustrier. Många flyttade till städerna, vilket påverkade bostadsförhållanden, arbetsmarknad och infrastruktur.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch10-jor-r1',
          prompt: 'Ungefär hur många svenskar utvandrade till USA mellan 1850 och 1920?',
          options: [
            { id: 'a', text: 'Omkring 100 000' },
            { id: 'b', text: 'Över en miljon' },
            { id: 'c', text: 'Omkring 2,5 miljoner' },
            { id: 'd', text: 'Omkring 50 000' },
          ],
          correctOptionId: 'b',
          explanation:
            'Över en miljon svenskar utvandrade till USA mellan 1850 och 1920 i hopp om ett bättre liv.',
        },
        {
          kind: 'short-answer',
          id: 'ch10-jor-r2',
          prompt: 'Varför fördubblades befolkningen i Sverige under 1800-talet?',
          acceptedAnswers: [
            'bättre jordbruksmetoder och medicinska framsteg',
            'mer mat och färre barn dog',
          ],
          modelAnswer:
            'Bättre jordbruksmetoder gav mer mat och medicinska framsteg minskade risken att barn dog av sjukdomar.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch10-jor-r3',
          prompt: 'Vilka industrier startades först i Sverige i mitten av 1800-talet?',
          options: [
            { id: 'a', text: 'Bilfabriker och flygindustrier' },
            { id: 'b', text: 'Sågverk som producerade trävaror och industrier som tillverkade stål' },
            { id: 'c', text: 'Datortillverkning och telekommunikation' },
            { id: 'd', text: 'Kemiska fabriker och läkemedelsindustrier' },
          ],
          correctOptionId: 'b',
          explanation:
            'De första större industrierna var sågverk som producerade trävaror och industrier som tillverkade stål. Senare kom bland annat sko- och klädfabriker och verkstadsindustrier.',
        },
      ],
      review: {
        keyTakeaways: [
          'För tvåhundra år sedan var Sverige ett fattigt jordbruksland.',
          'Under 1800-talet växte industrier fram och många flyttade till städerna.',
          'Befolkningen fördubblades på hundra år tack vare bättre jordbruk och medicinska framsteg.',
          'Över en miljon svenskar utvandrade till USA mellan 1850 och 1920.',
          'De första stora industrierna var sågverk och stålindustrier.',
        ],
        mostImportant: 'Sverige gick från jordbruksland till industrisamhälle under 1800-talet – med utvandring som följd.',
        glossary: [
          { term: 'Jordbrukssamhälle', definition: 'Samhälle där de flesta arbetar med jordbruk.' },
          { term: 'Industrisamhälle', definition: 'Samhälle där fabriker och industrier dominerar.' },
        ],
      },
    },
    {
      id: 'ch10-vagen-till-demokrati',
      title: 'Sveriges väg till demokrati',
      source: { chapter: 10, pages: [33, 34] },
      survey: {
        overview:
          'Avsnittet beskriver hur den politiska makten förändrades under 1800-talet, vad folkrörelserna betydde och när Sverige blev en demokrati.',
        themes: [
          {
            title: 'Ståndssamhället förändras',
            description: 'Kungens makt begränsades 1809, och 1865 fick fler rösträtt till riksdagen.',
          },
          {
            title: 'Vem fick rösta?',
            description:
              'Kvinnor saknade rösträtt, och bland männen fick bara vissa rösta. De rikaste hade flera röster.',
          },
          {
            title: 'Folkrörelserna',
            description:
              'Arbetarrörelsen, frikyrkorörelsen, kvinnorörelsen och nykterhetsrörelsen organiserade sig för rättigheter.',
          },
          {
            title: 'Demokratins genombrott',
            description: '1909 fick nästan alla män rösträtt, 1918 beslöts allmän rösträtt och 1921 hölls det första valet för både män och kvinnor.',
          },
          {
            title: 'Första världskriget',
            description: 'Sverige förklarade sig neutralt 1914–1918 men drabbades av brist på mat och varor.',
          },
        ],
        keyConcepts: [
          {
            term: 'Folkrörelse',
            definition:
              'En frivillig förening som samlar människor runt gemensamma intressen, till exempel arbetarrörelsen.',
            explanation:
              'Folkrörelserna använde lagliga metoder för att föra fram sina budskap: de demonstrerade, höll protestmöten, publicerade böcker och skrev artiklar i tidningar. De startade egna bibliotek och studiecirklar.',
          },
          {
            term: 'Allmän rösträtt',
            definition: 'Rätten för alla vuxna medborgare att rösta.',
            explanation:
              'Beslutet om allmän rösträtt kom 1918 efter många år av protester och politisk oro. 1921 genomfördes det första riksdagsvalet där både män och kvinnor fick rösta och där kvinnor kunde bli riksdagsledamöter.',
          },
          {
            term: 'Neutralitet',
            definition: 'Att ett land står utanför ett krig. Sverige förklarade sig neutralt under första världskriget.',
          },
        ],
      },
      questions: [
        {
          id: 'ch10-dem-q1',
          prompt: 'Vad hände 1809 och 1865 i Sveriges politiska utveckling?',
          kind: 'recall',
        },
        {
          id: 'ch10-dem-q2',
          prompt: 'Vilka fick inte rösta före demokratins genombrott?',
          kind: 'recall',
        },
        {
          id: 'ch10-dem-q3',
          prompt: 'Vilka var de fyra största folkrörelserna?',
          kind: 'recall',
        },
        {
          id: 'ch10-dem-q4',
          prompt: 'Vilka år fattades besluten om rösträtt, och när hölls det första valet för både män och kvinnor?',
          kind: 'recall',
          lookFor: 'Årtalen 1909, 1918 och 1921.',
        },
        {
          id: 'ch10-dem-q5',
          prompt:
            'Varför tror du att folkrörelserna blev så viktiga för demokratin i Sverige?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Kungen, adelsmän, kyrkan, köpmän och bönder hade länge haft den politiska makten i Sverige. Men när samhället industrialiserades och blev mer modernt på 1800-talet, krävde allt fler människor att också det politiska systemet skulle förändras.',
        },
        {
          kind: 'list',
          items: [
            '1809 antog riksdagen en ny grundlag som begränsade kungens makt.',
            '1865 kom en grundlagsändring som gjorde att fler fick rösträtt till riksdagen, och adeln och prästerna förlorade sitt gamla politiska inflytande.',
          ],
        },
        {
          kind: 'note',
          tone: 'warn',
          text: 'Det var viktiga förändringar, men än hade inte demokrati införts. Kvinnor saknade fortfarande rösträtt och kunde inte bli valda till politiska uppdrag. Bland männen var det endast de med en viss inkomst eller förmögenhet som fick rösta, och de som var rikast hade flera röster.',
        },
        {
          kind: 'paragraph',
          text: 'En viktig faktor för övergången till verklig demokrati i Sverige var landets folkrörelser. Människor organiserade sig för att kräva sina rättigheter, till exempel åtta timmars arbetsdag, rösträtt och religionsfrihet. Det var frivilliga föreningar som samlade människor runt gemensamma intressen, och många av dem finns fortfarande kvar.',
        },
        {
          kind: 'paragraph',
          text: 'Hundratusentals människor engagerade sig i folkrörelsernas verksamheter redan under 1800-talet. De startade egna bibliotek och studiecirklar och ordnade möten för medlemmarna. Fyra av de största var arbetarrörelsen, frikyrkorörelsen, kvinnorörelsen och nykterhetsrörelsen.',
        },
        {
          kind: 'paragraph',
          text: 'Folkrörelserna använde lagliga metoder för att föra fram sina budskap. De demonstrerade på gator och torg, höll protestmöten, publicerade böcker och skrev artiklar i tidningar.',
        },
        { kind: 'note', tone: 'info', text: 'Demokratins genombrott' },
        {
          kind: 'paragraph',
          text: '1909 genomförde riksdagen en lagförändring som gjorde att nästan alla män fick rätt att rösta. Särskilt kvinnorörelsen drev nu på för att detta skulle gälla även för kvinnor. Beslutet om allmän rösträtt 1918 kom efter många år av protester och politisk oro.',
        },
        {
          kind: 'note',
          tone: 'tip',
          text: '1921 genomfördes det första riksdagsvalet där både män och kvinnor fick rösta och där kvinnor kunde bli riksdagsledamöter. Därmed hade Sverige blivit en demokrati.',
        },
        {
          kind: 'paragraph',
          text: 'Under första världskriget (1914–1918) förklarade sig Sverige neutralt. Även om Sverige stod utanför kriget drabbades landet av brist på mat och andra viktiga varor, vilket ledde till demonstrationer och protester.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch10-dem-r1',
          prompt: 'När genomfördes det första riksdagsvalet där både män och kvinnor fick rösta?',
          options: [
            { id: 'a', text: '1909' },
            { id: 'b', text: '1918' },
            { id: 'c', text: '1921' },
            { id: 'd', text: '1914' },
          ],
          correctOptionId: 'c',
          explanation:
            '1921 genomfördes det första riksdagsvalet där både män och kvinnor fick rösta och där kvinnor kunde bli riksdagsledamöter. Beslutet om allmän rösträtt fattades 1918.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch10-dem-r2',
          prompt: 'Vilka var de fyra största folkrörelserna?',
          options: [
            { id: 'a', text: 'Arbetarrörelsen, frikyrkorörelsen, kvinnorörelsen och nykterhetsrörelsen' },
            { id: 'b', text: 'Arbetarrörelsen, bonde- rörelsen, idrottsrörelsen och kyrkan' },
            { id: 'c', text: 'Kvinnorörelsen, kyrkan, adeln och köpmännen' },
            { id: 'd', text: 'Fackföreningarna, kommunerna, riksdagen och kungen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Fyra av de största folkrörelserna var arbetarrörelsen, frikyrkorörelsen, kvinnorörelsen och nykterhetsrörelsen.',
        },
        {
          kind: 'short-answer',
          id: 'ch10-dem-r3',
          prompt: 'Vad hände år 1909 i rösträttsfrågan?',
          acceptedAnswers: ['nästan alla män fick rösträtt', 'män fick rösträtt'],
          modelAnswer:
            'Riksdagen genomförde en lagförändring som gjorde att nästan alla män fick rätt att rösta.',
        },
        {
          kind: 'explain',
          id: 'ch10-dem-r4',
          prompt: 'Förklara med egna ord hur Sverige blev en demokrati.',
          checklist: [
            '1809 begränsades kungens makt och 1865 fick fler rösträtt.',
            'Ännu saknade kvinnor rösträtt och bara vissa män fick rösta.',
            'Folkrörelserna krävde rättigheter med lagliga metoder.',
            '1909 fick nästan alla män rösträtt, 1918 beslöts allmän rösträtt, 1921 hölls det första valet för både män och kvinnor.',
          ],
          modelAnswer:
            'Redan 1809 begränsades kungens makt genom en ny grundlag, och 1865 fick fler rösträtt till riksdagen. Men kvinnor saknade fortfarande rösträtt och bland männen fick bara de med viss inkomst rösta. Folkrörelserna – bland andra arbetarrörelsen, kvinnorörelsen, frikyrkorörelsen och nykterhetsrörelsen – krävde rättigheter med lagliga metoder. 1909 fick nästan alla män rösträtt, 1918 beslöt riksdagen om allmän rösträtt, och 1921 hölls det första riksdagsvalet där både män och kvinnor fick rösta. Därmed hade Sverige blivit en demokrati.',
        },
      ],
      review: {
        keyTakeaways: [
          '1809 begränsades kungens makt; 1865 fick fler rösträtt och adeln och prästerna förlorade inflytande.',
          'Kvinnor saknade rösträtt, och bland männen fick bara vissa rösta – de rikaste hade flera röster.',
          'Folkrörelserna (arbetarrörelsen, frikyrkorörelsen, kvinnorörelsen, nykterhetsrörelsen) drev på förändringen.',
          '1909: nästan alla män fick rösträtt. 1918: beslut om allmän rösträtt. 1921: första valet för både män och kvinnor.',
          'Sverige var neutralt under första världskriget men drabbades av varubrist.',
        ],
        mostImportant: 'Årtalen 1909, 1918 och 1921 är centrala för demokratins genombrott.',
        glossary: [
          { term: 'Folkrörelse', definition: 'Frivillig förening för gemensamma intressen.' },
          { term: 'Allmän rösträtt', definition: 'Rätten för alla vuxna medborgare att rösta – beslutad 1918.' },
          { term: 'Neutralitet', definition: 'Att stå utanför ett krig.' },
        ],
      },
    },
    {
      id: 'ch10-modernisering-folkhem',
      title: 'Modernisering och folkhem',
      source: { chapter: 10, pages: [34, 35, 36] },
      survey: {
        overview:
          'Avsnittet handlar om 1920- och 1930-talens modernisering, konflikterna på arbetsmarknaden, Saltsjöbadsavtalet och idén om folkhemmet. Du får också veta att samhällets utveckling hade mörka sidor.',
        themes: [
          {
            title: 'Modernisering och konflikter',
            description: 'Ny teknik, trångboddhet, arbetslöshet och strejker präglade mellankrigstiden.',
          },
          {
            title: 'Ådalen 1931',
            description: 'Militären sköt mot demonstrerande arbetare och flera personer dödades.',
          },
          {
            title: 'Den svenska modellen',
            description: 'Saltsjöbadsavtalet 1938 – parterna, inte politikerna, kommer överens om villkoren.',
          },
          {
            title: 'Folkhemmet',
            description: 'Per Albin Hanssons idé 1928 om ett samhälle med trygghet och gemenskap.',
          },
          {
            title: 'Samhällets mörka sidor',
            description: 'Rasism, tvångsplaceringar och lagar som hindrade vissa grupper att invandra.',
          },
          {
            title: 'Andra världskriget',
            description: 'Sverige höll sig neutralt men hamnade i svåra situationer.',
          },
        ],
        keyConcepts: [
          {
            term: 'Saltsjöbadsavtalet',
            definition:
              'Avtalet 1938 mellan arbetsgivare och fackförbund som lade grunden för den svenska modellen.',
          },
          {
            term: 'Den svenska modellen',
            definition:
              'Att arbetsgivare och fackförbund, inte politikerna, kommer överens om villkoren på arbetsmarknaden i kollektivavtal.',
          },
          {
            term: 'Folkhemmet',
            definition:
              'Per Albin Hanssons idé från 1928 om ett samhälle där alla skulle kunna känna trygghet och gemenskap, oavsett bakgrund.',
          },
          {
            term: 'Förintelsen',
            definition:
              'Nazisternas mord på omkring 6 miljoner judar i Europa under andra världskriget.',
            explanation:
              'Mot slutet av kriget förändrades Sveriges politik. Omkring 7 000 danska judar flydde till Sverige, diplomaten Raoul Wallenberg gav judar skyddspass och Röda Korset räddade tusentals judar i "vita bussar".',
          },
        ],
      },
      questions: [
        {
          id: 'ch10-folk-q1',
          prompt: 'Vad kännetecknade 1920- och 1930-talen i Sverige?',
          kind: 'recall',
        },
        {
          id: 'ch10-folk-q2',
          prompt: 'Vad hände i Ådalen 1931?',
          kind: 'recall',
        },
        {
          id: 'ch10-folk-q3',
          prompt: 'Vad innebär den svenska modellen, och vilket avtal lade grunden för den?',
          kind: 'recall',
        },
        {
          id: 'ch10-folk-q4',
          prompt: 'Vad var idén om folkhemmet, och vem formulerade den?',
          kind: 'recall',
        },
        {
          id: 'ch10-folk-q5',
          prompt:
            'Varför är det viktigt att känna till de mörka sidorna av Sveriges moderna historia?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Under 1920- och 1930-talen moderniserades samhället ytterligare. Ny teknik förändrade vardagen för många: fler fick tillgång till elektrisk ström, och även om många fortfarande bodde trångt och saknade vattentoaletter blev bostäderna långsamt bättre.',
        },
        {
          kind: 'paragraph',
          text: 'Men tiden efter demokratins genombrott var också orolig, med stora konflikter mellan arbetsgivare och arbetare. Många var arbetslösa och klasskillnaderna var fortfarande stora. Det var vanligt med strejker för bättre löner och arbetsvillkor.',
        },
        {
          kind: 'example',
          title: 'Ådalen 1931',
          text: 'År 1931 sköt militären mot arbetare på en plats som heter Ådalen när de demonstrerade. Flera personer dödades, och händelsen skakade om Sverige och visade hur djupa konflikterna var.',
        },
        {
          kind: 'paragraph',
          text: 'Många ville hitta fredliga lösningar på konflikterna. År 1938 slöts ett avtal mellan arbetsgivare och fackförbund i Saltsjöbaden nära Stockholm, och därför kallas det för Saltsjöbadsavtalet. Det blev viktigt för samarbetet mellan fackföreningar och arbetsgivare i Sverige och lade grunden för den så kallade svenska modellen.',
        },
        {
          kind: 'concept',
          term: 'Den svenska modellen',
          explanation:
            'Modellen innebär att arbetsgivare och fackförbund, inte politikerna, kommer överens om villkoren på arbetsmarknaden i så kallade kollektivavtal. Den svenska modellen påverkar fortfarande hur löner och arbetsvillkor bestäms i Sverige i dag.',
        },
        {
          kind: 'concept',
          term: 'Folkhemmet',
          explanation:
            '1928 formulerade partiledaren för Socialdemokraterna, Per Albin Hansson, idén om folkhemmet. Han beskrev det som en idé om ett samhälle där alla skulle kunna känna trygghet och gemenskap, oavsett bakgrund. Klasskillnaderna och de politiska motsättningarna skulle minska.',
        },
        { kind: 'note', tone: 'warn', text: 'Det moderna samhällets mörka baksidor' },
        {
          kind: 'paragraph',
          text: 'Det moderna samhället som växte fram på 1930-talet gjorde livet långsamt bättre för de flesta, men inte för alla. Ett exempel var den utbredda rasismen vid den här tiden. Det förekom så kallad rasbiologisk forskning som drabbade minoriteter som samer, tornedalingar, judar och romer. Riksdagen stiftade även särskilda lagar som gjorde det svårare för vissa folkgrupper, som romer och judar, att invandra till Sverige.',
        },
        {
          kind: 'paragraph',
          text: 'Ett annat exempel gäller människor som inte ansågs passa in i samhället och som placerades på sjukhus eller andra vårdinrättningar, ibland för resten av livet. Särskilt personer med psykiska sjukdomar eller funktionsnedsättningar drabbades. Först på senare tid har Sverige gjort upp med denna mörka historia och gett viss upprättelse åt människor som drabbades.',
        },
        { kind: 'note', tone: 'info', text: 'Andra världskriget' },
        {
          kind: 'paragraph',
          text: 'Även under andra världskriget (1939–1945) höll sig Sverige neutralt och utanför striderna, men landet hamnade flera gånger i svåra situationer, till exempel när Finland anfölls av Sovjetunionen och när Nazityskland ockuperade Danmark och Norge. För att minska risken att dras in i kriget tillät den svenska regeringen tyska soldater att resa genom Sverige på väg till det ockuperade Norge och till Finland.',
        },
        {
          kind: 'paragraph',
          text: 'Under Förintelsen, när nazisterna mördade omkring 6 miljoner judar i Europa, ändrade Sverige sitt sätt att agera under kriget. På 1930-talet hade Sverige en hård politik som gjorde det svårt för judar att flytta till landet, och den stränga politiken fortsatte under krigets första år. Mot slutet av kriget förändrades politiken och Sverige gjorde olika insatser för att hjälpa judar:',
        },
        {
          kind: 'list',
          items: [
            'Omkring 7 000 danska judar flydde till Sverige med hjälp av en dansk-svensk räddningsaktion.',
            'Den svenska diplomaten Raoul Wallenberg gav judar skyddspass – papper som visade att de var under svenskt skydd och inte kunde skickas till koncentrationsläger.',
            'I slutet av kriget räddade Röda Korset tusentals judar från de tyska koncentrationslägren. De kördes över gränsen till Sverige i vita bussar.',
          ],
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch10-folk-r1',
          prompt: 'Vad innebär den svenska modellen?',
          options: [
            { id: 'a', text: 'Att staten bestämmer lönerna genom lag.' },
            {
              id: 'b',
              text: 'Att arbetsgivare och fackförbund, inte politikerna, kommer överens om villkoren på arbetsmarknaden.',
            },
            { id: 'c', text: 'Att alla arbetar i offentlig sektor.' },
            { id: 'd', text: 'Att arbetslöshet inte får förekomma.' },
          ],
          correctOptionId: 'b',
          explanation:
            'Den svenska modellen innebär att arbetsgivare och fackförbund kommer överens om villkoren i kollektivavtal – inte politikerna. Grunden lades av Saltsjöbadsavtalet 1938.',
        },
        {
          kind: 'short-answer',
          id: 'ch10-folk-r2',
          prompt: 'Vem formulerade idén om folkhemmet och vilket år?',
          acceptedAnswers: ['per albin hansson 1928', 'per albin hansson, 1928'],
          modelAnswer:
            'Per Albin Hansson, partiledare för Socialdemokraterna, formulerade idén 1928.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch10-folk-r3',
          prompt: 'Vilket avtal från 1938 lade grunden för den svenska modellen?',
          options: [
            { id: 'a', text: 'Saltsjöbadsavtalet' },
            { id: 'b', text: 'Ådalsavtalet' },
            { id: 'c', text: 'Folkhemsavtalet' },
            { id: 'd', text: 'Millionavtalet' },
          ],
          correctOptionId: 'a',
          explanation:
            'Saltsjöbadsavtalet slöts 1938 mellan arbetsgivare och fackförbund och lade grunden för den svenska modellen.',
        },
        {
          kind: 'explain',
          id: 'ch10-folk-r4',
          prompt: 'Förklara med egna ord vad folkhemmet var tänkt att vara.',
          checklist: [
            'En idé från 1928 av Per Albin Hansson.',
            'Ett samhälle där alla känner trygghet och gemenskap, oavsett bakgrund.',
            'Klasskillnader och politiska motsättningar skulle minska.',
          ],
          modelAnswer:
            'Folkhemmet var en idé som Per Albin Hansson formulerade 1928. Han beskrev ett samhälle där alla skulle kunna känna trygghet och gemenskap, oavsett bakgrund, och där klasskillnaderna och de politiska motsättningarna skulle minska.',
        },
      ],
      review: {
        keyTakeaways: [
          '1920- och 1930-talen: modernisering men också arbetslöshet, strejker och stora klasskillnader.',
          'Ådalen 1931: militären sköt mot demonstrerande arbetare, flera dödades.',
          'Saltsjöbadsavtalet 1938 lade grunden för den svenska modellen: parterna kommer överens, inte politikerna.',
          'Folkhemmet: Per Albin Hanssons idé 1928 om trygghet och gemenskap för alla.',
          'Mörka sidor: rasbiologisk forskning som drabbade samer, tornedalingar, judar och romer, invandringslagar och tvångsplaceringar.',
          'Andra världskriget: Sverige neutralt, men tillät tyska soldater transitera. Mot slutet hjälptes judar, bland annat 7 000 danska judar och Raoul Wallenbergs skyddspass.',
        ],
        mostImportant: 'Saltsjöbadsavtalet 1938 och folkhemmet 1928 är årtalen att hålla isär.',
        glossary: [
          { term: 'Saltsjöbadsavtalet', definition: 'Avtalet 1938 mellan arbetsgivare och fackförbund.' },
          { term: 'Den svenska modellen', definition: 'Parterna kommer överens om villkoren, inte politikerna.' },
          { term: 'Folkhemmet', definition: 'Idén om ett samhälle med trygghet och gemenskap för alla.' },
        ],
      },
    },
    {
      id: 'ch10-rekordaren',
      title: 'Rekordåren',
      source: { chapter: 10, pages: [36, 37] },
      survey: {
        overview:
          'Avsnittet handlar om den starka ekonomiska tillväxten efter andra världskriget, utbyggnaden av välfärdssamhället, invandringen och miljonprogrammet samt förändringar i jämställdhet och kultur.',
        themes: [
          {
            title: 'Stark ekonomisk tillväxt',
            description: 'Låg arbetslöshet och snabbt stigande levnadsstandard 1945–1976.',
          },
          {
            title: 'Välfärdssamhället byggs ut',
            description: '40 timmars arbetsvecka, fem veckors semester, bättre sjukvård och äldreomsorg.',
          },
          {
            title: 'Sverige blir ett invandrarland',
            description: 'Arbetskraftsinvandring från bland annat Finland, Grekland, Jugoslavien och Turkiet.',
          },
          {
            title: 'Miljonprogrammet',
            description: 'Målet att bygga en miljon bostäder på tio år under 1960-talet.',
          },
          {
            title: 'Jämställdhet och kulturförändringar',
            description: 'Fler kvinnor började arbeta, daghem byggdes ut och du-reformen genomfördes.',
          },
        ],
        keyConcepts: [
          {
            term: 'Rekordåren',
            definition:
              'Tiden efter andra världskriget med stark ekonomisk tillväxt, låg arbetslöshet och snabbt stigande levnadsstandard.',
            explanation:
              'Socialdemokraterna hade oftast regeringsmakten själva från 1945 till 1976. Tack vare den goda ekonomin kunde stora och omfattande reformer genomföras.',
          },
          {
            term: 'Miljonprogrammet',
            definition: 'Statens satsning under 1960-talet med målet att bygga en miljon bostäder på tio år.',
          },
          {
            term: 'Du-reformen',
            definition:
              'Förändringen på 1960-talet då människor började säga "du" till varandra i stället för att använda titlar eller "ni".',
          },
        ],
      },
      questions: [
        {
          id: 'ch10-rek-q1',
          prompt: 'Vad kännetecknade rekordåren, och vilka år var de?',
          kind: 'recall',
        },
        {
          id: 'ch10-rek-q2',
          prompt: 'Vilka rättigheter fick de som arbetade under den här perioden?',
          kind: 'recall',
        },
        {
          id: 'ch10-rek-q3',
          prompt: 'Vad var miljonprogrammet, och varför startades det?',
          kind: 'recall',
        },
        {
          id: 'ch10-rek-q4',
          prompt: 'Vad innebar du-reformen?',
          kind: 'recall',
        },
        {
          id: 'ch10-rek-q5',
          prompt:
            'Varför ökade jämställdheten när fler kvinnor började arbeta utanför hemmet?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Efter andra världskriget hade Sverige under lång tid en stark ekonomisk tillväxt. Arbetslösheten var mycket låg, industrierna gick bra och människors levnadsstandard ökade snabbt.',
        },
        {
          kind: 'paragraph',
          text: 'Socialdemokraterna fick stort stöd av väljarna och hade oftast regeringsmakten själva från 1945 till 1976. Tack vare den goda ekonomin kunde stora och omfattande reformer genomföras. Det är orsaken till att den här tiden ofta har kallats för de svenska rekordåren.',
        },
        { kind: 'note', tone: 'info', text: 'Välfärdssamhället' },
        {
          kind: 'paragraph',
          text: 'Ett viktigt mål under denna period var att förbättra människors levnadsstandard. Staten tog ett stort ansvar för detta, och välfärdssamhället byggdes ut mer och mer.',
        },
        {
          kind: 'list',
          items: [
            'De som arbetade fick rätt till 40 timmars arbetsvecka med lediga lördagar och fem veckors semester med full betalning.',
            'Bättre löner gjorde att fler fick råd att skaffa bil, köpa sommarstuga och åka på utlandssemester.',
            'Sjukvården och äldreomsorgen byggdes ut och förbättrades.',
            'Det sociala skyddsnätet med barnbidrag, sjukförsäkring och pensioner blev bättre.',
          ],
        },
        {
          kind: 'note',
          tone: 'tip',
          text: 'Många av de rättigheter och trygghetssystem som finns i Sverige i dag har sin grund i denna period.',
        },
        {
          kind: 'paragraph',
          text: 'Den starka ekonomiska utvecklingen bidrog till att fler människor flyttade från landsbygden till städerna för att arbeta. Samtidigt invandrade många människor från till exempel Finland, Grekland, Jugoslavien och Turkiet för att arbeta här. Sverige, som under 1800-talet hade varit ett utvandrarland, blev nu ett invandrarland.',
        },
        {
          kind: 'concept',
          term: 'Miljonprogrammet',
          explanation:
            'Den snabba inflyttningen till städerna skapade brist på bostäder. För att lösa problemet startade staten miljonprogrammet under 1960-talet. Målet var att bygga en miljon bostäder på tio år. Nya bostadsområden växte fram i städernas förorter, där lägenheterna var större och mer moderna än i centrum och där det fanns tillgång till affärer, sjukvård och skolor.',
        },
        { kind: 'note', tone: 'info', text: 'Jämställdhet och kulturförändringar' },
        {
          kind: 'paragraph',
          text: 'Under rekordåren ökade både jämlikhet och jämställdhet på olika sätt. Löneskillnaderna mellan män och kvinnor minskade. Allt fler kvinnor började arbeta utanför hemmet, och daghem för barnen byggdes ut för att göra detta möjligt.',
        },
        {
          kind: 'paragraph',
          text: '1960-talet var ett årtionde då många ungdomar protesterade mot orättvisor och hade ett starkt engagemang för fred, miljö och internationell solidaritet. Du-reformen på 1960-talet innebar att människor började säga "du" till varandra i stället för att använda titlar eller "ni" – också det speglade ett mer jämlikt samhälle. I början av 1960-talet kom dessutom tv-apparaten, som ändrade hur människor tog del av nyheter och underhållning.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch10-rek-r1',
          prompt: 'Vad var målet med miljonprogrammet?',
          options: [
            { id: 'a', text: 'Att bygga en miljon bostäder på tio år' },
            { id: 'b', text: 'Att öka invandringen med en miljon personer' },
            { id: 'c', text: 'Att bygga en miljon skolor' },
            { id: 'd', text: 'Att skapa en miljon nya jobb' },
          ],
          correctOptionId: 'a',
          explanation:
            'Miljonprogrammet startades under 1960-talet med målet att bygga en miljon bostäder på tio år.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch10-rek-r2',
          prompt: 'Vilka rättigheter fick anställda under rekordåren?',
          options: [
            { id: 'a', text: '40 timmars arbetsvecka och fem veckors semester med full betalning' },
            { id: 'b', text: '35 timmars arbetsvecka och tre veckors semester' },
            { id: 'c', text: 'Rätt att arbeta hemifrån' },
            { id: 'd', text: 'Rätt till fri bil' },
          ],
          correctOptionId: 'a',
          explanation:
            'De som arbetade fick rätt till 40 timmars arbetsvecka med lediga lördagar och fem veckors semester med full betalning.',
        },
        {
          kind: 'short-answer',
          id: 'ch10-rek-r3',
          prompt: 'Vad innebar du-reformen?',
          acceptedAnswers: [
            'att man började säga du i stället för titlar',
            'man slutade använda titlar och ni',
          ],
          modelAnswer:
            'Att människor började säga "du" till varandra i stället för att använda titlar eller "ni".',
        },
        {
          kind: 'explain',
          id: 'ch10-rek-r4',
          prompt: 'Förklara med egna ord varför tiden efter andra världskriget kallas rekordåren och vad den ledde till.',
          checklist: [
            'Stark ekonomisk tillväxt och mycket låg arbetslöshet.',
            'Socialdemokraterna hade oftast regeringsmakten 1945–1976.',
            'Stora reformer kunde genomföras.',
            'Välfärdssamhället byggdes ut: semester, sjukvård, äldreomsorg, barnbidrag, pensioner.',
            'Sverige blev ett invandrarland och miljonprogrammet byggdes.',
          ],
          modelAnswer:
            'Tiden efter andra världskriget kallas rekordåren eftersom Sverige hade en stark ekonomisk tillväxt, mycket låg arbetslöshet och snabbt stigande levnadsstandard. Socialdemokraterna hade oftast regeringsmakten själva från 1945 till 1976, och tack vare den goda ekonomin kunde stora reformer genomföras. Välfärdssamhället byggdes ut med 40 timmars arbetsvecka, fem veckors semester, bättre sjukvård och äldreomsorg samt ett starkare socialt skyddsnät. Sverige blev också ett invandrarland, och miljonprogrammet byggdes för att lösa bostadsbristen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Rekordåren: stark tillväxt, låg arbetslöshet och stigande levnadsstandard, 1945–1976.',
          'Socialdemokraterna hade oftast regeringsmakten själva 1945–1976.',
          'Nya rättigheter: 40 timmars arbetsvecka, lediga lördagar och fem veckors betald semester.',
          'Välfärden byggdes ut: sjukvård, äldreomsorg, barnbidrag, sjukförsäkring och pensioner.',
          'Sverige gick från utvandrarland till invandrarland; arbetskraftsinvandring från bland annat Finland, Grekland, Jugoslavien och Turkiet.',
          'Miljonprogrammet: en miljon bostäder på tio år under 1960-talet.',
          'Du-reformen och utbyggda daghem speglade ett mer jämlikt samhälle.',
        ],
        mostImportant: 'Rekordåren = tillväxt + stora välfärdsreformer + miljonprogrammet.',
        glossary: [
          { term: 'Rekordåren', definition: 'Perioden efter andra världskriget med stark tillväxt.' },
          { term: 'Miljonprogrammet', definition: 'En miljon bostäder på tio år under 1960-talet.' },
          { term: 'Du-reformen', definition: 'Övergången från titlar till "du".' },
        ],
      },
    },
    {
      id: 'ch10-informationssamhallet',
      title: 'Informationssamhället och globalisering',
      source: { chapter: 10, pages: [37, 38] },
      survey: {
        overview:
          'Avsnittet handlar om krisen på 1970-talet, övergången till ett informations- och kunskapssamhälle, invandringen på 1990-talet och den digitala revolutionen.',
        themes: [
          {
            title: 'Ekonomisk kris på 1970-talet',
            description: 'Hårdare konkurrens, nedlagda industrier och ökad arbetslöshet.',
          },
          {
            title: 'Växlande regeringar',
            description: '1976 kom den första icke-socialdemokratiska regeringen på länge.',
          },
          {
            title: 'Informationssamhället',
            description: 'Mer utbildning, utbyggda universitet och behov av livslångt lärande.',
          },
          {
            title: 'Ett mångkulturellt samhälle',
            description: 'Invandringen ökade på 1990-talet, och integration blev en viktig fråga.',
          },
          {
            title: 'Individens rättigheter och digitalisering',
            description: 'Ökad valfrihet, stärkta rättigheter och den digitala revolutionen.',
          },
        ],
        keyConcepts: [
          {
            term: 'Informations- och kunskapssamhälle',
            definition:
              'Ett samhälle där kunskap och information är viktigare än industriell produktion.',
          },
          {
            term: 'Livslångt lärande',
            definition:
              'Att människor behöver fortsätta utbilda sig under hela livet eftersom kunskap snabbt blir gammal.',
          },
          {
            term: 'Mångkulturellt samhälle',
            definition: 'Ett samhälle där många olika kulturer och bakgrunder finns representerade.',
          },
          {
            term: 'Digital revolution',
            definition:
              'Förändringen från och med 1990-talet genom datorer, internet, smarta telefoner och AI.',
          },
        ],
      },
      questions: [
        {
          id: 'ch10-inf-q1',
          prompt: 'Varför blev det en ekonomisk kris i Sverige från mitten av 1970-talet?',
          kind: 'recall',
        },
        {
          id: 'ch10-inf-q2',
          prompt: 'Vad kännetecknar ett informations- och kunskapssamhälle?',
          kind: 'recall',
        },
        {
          id: 'ch10-inf-q3',
          prompt: 'Vad hände med invandringen under 1990-talet, och vilka frågor blev viktiga?',
          kind: 'recall',
        },
        {
          id: 'ch10-inf-q4',
          prompt: 'Vad innebär den digitala revolutionen?',
          kind: 'recall',
        },
        {
          id: 'ch10-inf-q5',
          prompt:
            'Hur har den digitala utvecklingen förändrat hur du arbetar, studerar eller kommunicerar?',
          kind: 'reflection',
        },
      ],
      read: [
        {
          kind: 'lead',
          text: 'Från mitten av 1970-talet gick Sverige igenom ytterligare en stor samhällsförändring. Industrisamhället förändrades till ett informations- och kunskapssamhälle.',
        },
        {
          kind: 'paragraph',
          text: 'Förändringen märktes först som en ekonomisk kris. Konkurrensen ökade när länder i andra delar av världen började producera billigare varor. Flera stora industrier i Sverige gick så dåligt att de fick läggas ned, och arbetslösheten ökade.',
        },
        {
          kind: 'paragraph',
          text: 'Bland annat som en reaktion på krisen fick Sverige 1976 en regering som inte var socialdemokratisk. Detta blev början på en period med omväxlande socialdemokratiska och borgerliga regeringar.',
        },
        { kind: 'note', tone: 'info', text: 'Informationssamhället' },
        {
          kind: 'paragraph',
          text: 'Under informationssamhällets period inleddes en snabb teknisk utveckling. Det nya högteknologiska samhället växte fram efter de ekonomiska kriserna och förändrade synen på utbildning. I det nya informationssamhället behövde människor mer utbildning: universitet och högskolor byggdes ut och fler människor studerade längre än tidigare.',
        },
        {
          kind: 'concept',
          term: 'Livslångt lärande',
          explanation:
            'Behovet av ett livslångt lärande ökade, eftersom kunskap snabbt blev gammal när den tekniska utvecklingen gick allt fortare. Det ledde också till att möjligheterna för vuxenutbildning ökade.',
        },
        { kind: 'note', tone: 'info', text: 'Ett mångkulturellt samhälle' },
        {
          kind: 'paragraph',
          text: 'Under 1990-talet började invandringen till Sverige att öka igen. Många kom nu som flyktingar från diktaturer eller från krigsdrabbade länder i olika delar av världen. Segregeringen och främlingsfientligheten ökade, vilket gjorde att integrering och att motverka utanförskap blev viktigt i samhällsdebatt och politik.',
        },
        { kind: 'note', tone: 'info', text: 'Individens rättigheter' },
        {
          kind: 'paragraph',
          text: 'Från 1980-talet fick individens rättigheter större betydelse i samhället. Allt fler människor ville själva kunna välja till exempel skola och vård, och ökad valfrihet blev därför en allt viktigare politisk fråga. Samtidigt stärktes rättigheterna för barn och olika minoriteter, och lagarna mot diskriminering blev fler. Synen på hbtqi-personer förändrades också.',
        },
        { kind: 'note', tone: 'info', text: 'Digital revolution och globalisering' },
        {
          kind: 'paragraph',
          text: 'En stor förändring från och med 1990-talet var den digitala revolutionen. Datorer, internet, smarta telefoner och nu på senare tid även artificiell intelligens (AI) har förändrat hur människor arbetar, studerar, kommunicerar och tar del av information. Digitaliseringen har underlättat snabb handel, internationellt samarbete och informationsutbyte. Sverige har i dag utvecklats till ett högteknologiskt informationssamhälle, där digital teknik och kontakter med hela världen är en del av vardagen.',
        },
      ],
      recite: [
        {
          kind: 'multiple-choice',
          id: 'ch10-inf-r1',
          prompt: 'Vad drev fram den ekonomiska krisen från mitten av 1970-talet?',
          options: [
            { id: 'a', text: 'Ökad konkurrens från andra länder som producerade billigare varor' },
            { id: 'b', text: 'Att Sverige gick med i EU' },
            { id: 'c', text: 'Att invandringen ökade' },
            { id: 'd', text: 'Att tv-apparaten uppfanns' },
          ],
          correctOptionId: 'a',
          explanation:
            'Konkurrensen ökade när länder i andra delar av världen började producera billigare varor. Flera stora industrier lades ned och arbetslösheten ökade.',
        },
        {
          kind: 'multiple-choice',
          id: 'ch10-inf-r2',
          prompt: 'Vad hände politiskt i Sverige 1976?',
          options: [
            { id: 'a', text: 'Sverige gick med i EU' },
            { id: 'b', text: 'Sverige fick en regering som inte var socialdemokratisk' },
            { id: 'c', text: 'Allmän rösträtt infördes' },
            { id: 'd', text: 'Miljonprogrammet startades' },
          ],
          correctOptionId: 'b',
          explanation:
            '1976 fick Sverige en regering som inte var socialdemokratisk. Det blev början på en period med omväxlande socialdemokratiska och borgerliga regeringar.',
        },
        {
          kind: 'short-answer',
          id: 'ch10-inf-r3',
          prompt: 'Varför ökade behovet av livslångt lärande?',
          acceptedAnswers: ['kunskap blev snabbt gammal', 'teknisk utveckling gick fort'],
          modelAnswer:
            'Eftersom kunskap snabbt blev gammal när den tekniska utvecklingen gick allt fortare.',
        },
        {
          kind: 'explain',
          id: 'ch10-inf-r4',
          prompt: 'Förklara med egna ord vad den digitala revolutionen innebär och ge exempel på vad den förändrat.',
          checklist: [
            'Datorer, internet, smarta telefoner och AI.',
            'Har förändrat hur människor arbetar, studerar, kommunicerar och tar del av information.',
            'Har underlättat handel, internationellt samarbete och informationsutbyte.',
            'Sverige är i dag ett högteknologiskt informationssamhälle.',
          ],
          modelAnswer:
            'Den digitala revolutionen började på 1990-talet och bygger på datorer, internet, smarta telefoner och på senare tid även artificiell intelligens. Den har förändrat hur människor arbetar, studerar, kommunicerar och tar del av information, och den har underlättat snabb handel, internationellt samarbete och informationsutbyte. Sverige har i dag utvecklats till ett högteknologiskt informationssamhälle där digital teknik och kontakter med hela världen är en del av vardagen.',
        },
      ],
      review: {
        keyTakeaways: [
          'Från mitten av 1970-talet: ekonomisk kris på grund av hårdare internationell konkurrens.',
          '1976 fick Sverige en regering som inte var socialdemokratisk.',
          'Industrisamhället blev ett informations- och kunskapssamhälle.',
          'Universitet byggdes ut, fler studerade längre och behovet av livslångt lärande ökade.',
          'På 1990-talet ökade invandringen; integration och motverkande av utanförskap blev viktiga frågor.',
          'Från 1980-talet: större vikt vid individens rättigheter och ökad valfrihet.',
          'Den digitala revolutionen (datorer, internet, smarta telefoner, AI) har förändrat hela samhället.',
        ],
        mostImportant: 'Övergången industrisamhälle → informationssamhälle, och den digitala revolutionen från 1990-talet.',
        glossary: [
          { term: 'Informationssamhälle', definition: 'Samhälle där kunskap och information är centrala.' },
          { term: 'Livslångt lärande', definition: 'Behovet att fortsätta lära sig under hela livet.' },
          { term: 'Digital revolution', definition: 'Förändringen genom datorer, internet, smarta telefoner och AI.' },
        ],
      },
    },
  ],
}
