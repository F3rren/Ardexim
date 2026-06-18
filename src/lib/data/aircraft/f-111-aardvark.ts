import type { Aircraft } from "./types";

export const f111Aardvark = {
  // ---- catalogo ----
  slug: "f-111-aardvark",
  name: "F-111 Aardvark",
  manufacturer: "General Dynamics",
  role: "Cacciabombardiere d'interdizione a geometria variabile",
  country: "USA",
  firstFlight: "1964",
  service: "1967 – 1998 (USAF) · 2010 (RAAF)",
  status: "ritirato",
  topSpeed: "Mach 2.5",
  unitCost: "≈ 9,8 mln $ (FB-111A)",
  profile: { velocita: 88, raggio: 82, agilita: 35, carico: 80, furtivita: 12 },
  thumb: "/images/aircraft/f-111-aardvark/f111-pavetack-gbu10.jpg",
  thumbAlt: "Un F-111F con pod Pave Tack e bombe GBU-10",
  model3d: "/models/USA/f-111_aardvark.glb",
  model3dCredit: {
    author: "Jeyhun1985",
    url: "https://sketchfab.com/3d-models/f-111f-aardvark-with-gbu-10-fbd9016ef23d477cb87c4ff5f9529a2a",
    license: "CC BY 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Il primo aereo da combattimento al mondo con ala a geometria variabile operativa. Nato dal controverso programma TFX, l'F-111 univa un radar di inseguimento del terreno, una grande autonomia e un carico bellico pesante per penetrare di notte e a bassissima quota le difese nemiche, a velocità supersonica. Dopo un esordio travagliato divenne uno degli interdittori più efficaci della Guerra Fredda, dal raid sulla Libia alla Guerra del Golfo.",

  heroBadges: [
    { label: "Ritirato · 1998 (USAF)", variant: "danger", dot: true },
    { label: "Ruolo · Interdizione a lungo raggio" },
    { label: "Origine · USA" },
    { label: "Mach 2.5", variant: "gold" },
  ],

  overviewText:
    "All'inizio degli anni '60 il segretario alla Difesa Robert McNamara impose un unico velivolo per due esigenze opposte: un cacciabombardiere d'attacco per l'Aeronautica e un caccia da difesa di flotta per la Marina. General Dynamics vinse il programma TFX nel 1962. La versione imbarcata (F-111B) si rivelò troppo pesante per le portaerei e fu cancellata, ma quella dell'USAF introdusse soluzioni rivoluzionarie: ali a freccia variabile, radar per il volo automatico a bassa quota, turbofan con postbruciatore e una capsula di salvataggio per l'intero equipaggio. Il primo F-111 volò il 21 dicembre 1964.",
  armamentText:
    "Una stiva interna più piloni esterni orientabili, per oltre 14 tonnellate: dalle bombe a caduta libera agli ordigni nucleari, fino alle bombe a guida laser del pod Pave Tack — il sistema che ne fece un bombardiere di precisione ogni-tempo.",

  bento: [
    {
      icon: "fold",
      span: 3,
      title: "Ala a geometria variabile",
      text: "Il pilota varia la freccia delle ali in volo: aperte (16°) per decolli corti, carichi pesanti e crociera economica; a freccia massima (72,5°) per ridurre la resistenza e scattare a velocità supersonica.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Volo automatico a bassa quota",
      text: "Il radar di inseguimento del terreno (TFR), accoppiato all'autopilota, faceva volare l'F-111 a circa 60 metri dal suolo, di notte e con qualsiasi tempo, seguendo il profilo del terreno senza intervento del pilota.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Turbofan con postbruciatore",
      text: "Il TF30 fu il primo turbofan con postbruciatore di serie: potenza per il dash supersonico, anche se gli esemplari iniziali soffrivano di stalli al compressore.",
    },
    {
      icon: "seat",
      span: 2,
      title: "Capsula di salvataggio",
      text: "Niente seggiolini eiettabili: in emergenza l'intero abitacolo pressurizzato si stacca e scende col paracadute, ospitando i due membri d'equipaggio affiancati.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Stiva interna + piloni",
      text: "Una stiva interna e piloni esterni che ruotano con le ali consentivano di portare oltre 14 tonnellate di armamento, convenzionale o nucleare.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "22,40 m" },
        { k: "Apertura (aperta)", v: "19,20 m" },
        { k: "Apertura (a freccia)", v: "9,74 m" },
        { k: "Altezza", v: "5,22 m" },
        { k: "Superficie alare", v: "48,8 – 61,1 m²" },
        { k: "Peso a vuoto", v: "~21.500 kg" },
        { k: "Peso max decollo", v: "~45.200 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità (alta quota)", v: "Mach 2.5" },
        { k: "Velocità (s.l.m.)", v: "Mach 1.2" },
        { k: "In km/h", v: "~2.650" },
        { k: "Tangenza", v: "~20.100 m" },
        { k: "Raggio operativo", v: "~2.100 km" },
        { k: "Autonomia", v: "~5.800 km" },
        { k: "Carico bellico", v: "+14.000 kg" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× P&W TF30-P-100" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~112 kN" },
        { k: "Freccia alare", v: "16° – 72,5°" },
        { k: "Radar", v: "TFR + attacco" },
        { k: "Equipaggio", v: "2 (affiancati)" },
        { k: "Stiva interna", v: "Sì" },
      ],
    },
  ],

  systems: [
    {
      icon: "fold",
      badge: { label: "Cellula", variant: "gold" },
      title: "Ali a freccia variabile",
      text: "Il cuore del progetto: il pilota muove le ali da 16° a 72,5° in volo. Aperte danno portanza per decolli corti, carichi pesanti e lunga autonomia; chiuse riducono la resistenza per il volo supersonico e la penetrazione veloce a bassa quota.",
      meta: { k: "Freccia", v: "16° – 72,5°" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar di inseguimento del terreno",
      text: "Accoppiato all'autopilota, l'AN/APQ-110 TFR permetteva il volo automatico a circa 60 metri dal suolo seguendo le ondulazioni del terreno: la chiave per arrivare sul bersaglio sotto la copertura radar nemica, di notte e con ogni meteo.",
      meta: { k: "Quota TFR", v: "~60 m" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Pratt & Whitney TF30",
      text: "Il primo turbofan con postbruciatore entrato in produzione. Offriva la spinta per superare Mach 2 in quota, anche se nelle prime versioni la sensibilità agli stalli del compressore richiese un lungo lavoro di messa a punto.",
      meta: { k: "Spinta A/B cad.", v: "~112 kN" },
    },
    {
      icon: "seat",
      badge: { label: "Sicurezza", variant: "cyan" },
      title: "Capsula di salvataggio dell'equipaggio",
      text: "Invece dei seggiolini eiettabili, l'intero modulo-abitacolo si separa dal velivolo e discende col paracadute. Sigillato, può galleggiare e fungere da rifugio in attesa dei soccorsi.",
      meta: { k: "Equipaggio", v: "2 affiancati" },
    },
    {
      icon: "computer",
      badge: { label: "Puntamento", variant: "cyan" },
      title: "Pod Pave Tack",
      text: "Alloggiato nella stiva e ruotato all'esterno per l'uso, integrava sensore a infrarossi e designatore laser: trasformò l'F-111F in un bombardiere di precisione notturno, protagonista del «tank plinking» nel Golfo.",
      meta: { k: "Capacità", v: "FLIR + laser" },
    },
  ],

  armament: [
    { kind: "Caduta libera", title: "Bombe Mk 82 / Mk 84", text: "Bombe convenzionali non guidate da 227 e 907 kg, sganciate a bassa quota grazie al radar d'attacco e al volo TFR.", reach: "a vista", rangePct: 6 },
    { kind: "Autodifesa", title: "AIM-9 Sidewinder", text: "Missile aria-aria a guida infrarossa per la sola autodifesa: l'F-111 non era un caccia da duello.", reach: "~18 km", rangePct: 12 },
    { kind: "Guida laser", title: "GBU-12 Paveway", text: "Bomba a guida laser da 227 kg illuminata dal pod Pave Tack: l'arma del «tank plinking», un mezzo corazzato distrutto per bomba.", reach: "~15 km", rangePct: 32 },
    { kind: "Anti-bunker", title: "GBU-28", text: "Bomba penetrante da oltre 2.000 kg sviluppata in fretta durante Desert Storm per colpire i bunker iracheni più protetti.", reach: "~20 km", rangePct: 55 },
    { kind: "Strategico", title: "Armi nucleari (B43 / B61)", text: "Nella stiva interna, ordigni nucleari a caduta: il ruolo di deterrenza affidato soprattutto al bombardiere strategico FB-111A.", reach: "strategico", rangePct: 100 },
  ],

  variants: [
    { sub: "// USAF · 1967", code: "F-111A", text: "La prima versione di serie, 158 esemplari: dopo un debutto difficile in Vietnam divenne la spina dorsale dell'interdizione tattica dell'USAF." },
    { sub: "// US Navy · cancellato", code: "F-111B", text: "La versione imbarcata da difesa di flotta voluta da McNamara: troppo pesante per le portaerei, cancellata nel 1968. La sua eredità (motore TF30 e missile AIM-54) confluì nell'F-14 Tomcat." },
    { sub: "// Australia · 1973", code: "F-111C", text: "24 esemplari per la RAAF, con ali allungate e carrello rinforzato. Unico utente estero, restò in servizio fino al 2010." },
    { sub: "// USAF · 1971", code: "F-111F", text: "La versione tattica definitiva: motori più potenti e pod Pave Tack. Protagonista del raid sulla Libia (1986) e della Guerra del Golfo (1991)." },
    { sub: "// SAC · 1969", code: "FB-111A", text: "Il bombardiere strategico dello Strategic Air Command, con maggiore autonomia e armi nucleari. Gli esemplari superstiti furono poi riconvertiti in F-111G." },
    { sub: "// USAF · 1981", code: "EF-111A Raven", text: "Conversione per la guerra elettronica, soprannominata «Spark Vark»: potenti disturbatori per accecare i radar nemici e scortare i pacchetti d'attacco." },
  ],

  timeline: [
    { year: "1962", tag: { label: "TFX" }, title: "Un solo aereo per due eserciti", text: "Il segretario alla Difesa Robert McNamara impone un'unica cellula per soddisfare sia l'Aeronautica (attacco a lungo raggio) sia la Marina (difesa di flotta). General Dynamics, con Grumman per la versione navale, vince il controverso programma TFX nel 1962." },
    { year: "1964", tag: { label: "Primo volo", variant: "gold" }, title: "Le prime ali che si muovono", text: "Il 21 dicembre 1964 il primo F-111 si stacca da terra. È il debutto in volo di un'idea radicale: ali capaci di cambiare freccia per coniugare decolli corti, lunga autonomia e velocità supersonica in un unico velivolo.", media: { src: "/images/aircraft/f-111-aardvark/f111-convair-inflight.jpg", width: 1280, height: 1001, alt: "Un F-111 Aardvark in volo agli albori del programma", caption: "F-111 in volo · archivio Convair / San Diego Air & Space Museum (PD)" } },
    { year: "1967", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in linea", text: "Il 18 luglio 1967 l'F-111A entra in servizio nell'USAF. È il primo aereo operativo con ala a geometria variabile e radar di inseguimento del terreno: nessun altro velivolo può penetrare così, veloce e radente, in qualsiasi condizione." },
    { year: "1968", tag: { label: "Combat Lancer" }, title: "L'esordio amaro in Vietnam", text: "Nel marzo 1968 sei F-111A vengono schierati in Thailandia (operazione Combat Lancer). Nel giro di poche settimane se ne perdono tre per problemi tecnici e ai comandi di volo: il programma viene sospeso e travolto dalle polemiche. Solo dopo profonde correzioni l'aereo si riscatterà, volando migliaia di missioni con perdite minime." },
    { year: "1981", tag: { label: "Guerra elettronica" }, title: "Nasce l'EF-111A Raven", text: "Per accecare le difese aeree nemiche, una parte degli A-model viene convertita in EF-111A Raven: potenti disturbatori elettronici, soprannominati «Spark Vark», che apriranno la strada ai pacchetti d'attacco nei conflitti successivi.", media: { src: "/images/aircraft/f-111-aardvark/f111-ef111-raven.jpg", width: 1280, height: 764, alt: "Un EF-111A Raven per la guerra elettronica", caption: "EF-111A Raven «Spark Vark» · U.S. Air Force (PD)" } },
    { year: "1986", tag: { label: "El Dorado Canyon", variant: "gold" }, title: "Il raid sulla Libia", text: "Il 15 aprile 1986, 18 F-111F decollano dalla RAF Lakenheath per colpire obiettivi in Libia: circa 6.400 miglia e 13 ore di volo andata e ritorno con ripetuti rifornimenti, la più lunga missione di combattimento per caccia della storia. Un velivolo viene perso.", media: { src: "/images/aircraft/f-111-aardvark/f111-refuel-northsea.jpg", width: 1280, height: 853, alt: "Un F-111 durante un rifornimento in volo sopra il Mare del Nord", caption: "F-111 in rifornimento sul Mare del Nord · U.S. Air Force (PD)" } },
    { year: "1991", tag: { label: "Desert Storm", variant: "cyan" }, title: "Il «tank plinking» nel Golfo", text: "Nella Guerra del Golfo gli F-111F col pod Pave Tack diventano i cecchini notturni della coalizione: con bombe laser GBU-12 distruggono centinaia di mezzi corazzati iracheni, una bomba per bersaglio, e con le GBU-28 colpiscono i bunker più protetti. Ottengono il miglior rapporto di efficacia fra tutti gli aerei d'attacco impiegati." },
    { year: "1996–2010", tag: { label: "Ritiro" }, title: "Il congedo dell'Aardvark", text: "L'USAF ritira gli ultimi F-111F nel 1996 — ed è alla cerimonia d'addio che il velivolo riceve finalmente il nome ufficiale «Aardvark» (oritteropo, per il muso lungo) — seguiti dagli EF-111A nel 1998. La RAAF, che lo chiamava «Pig», lo congeda nel 2010 con il celebre «dump and burn».", media: { src: "/images/aircraft/f-111-aardvark/f111-dump-and-burn.jpg", width: 1024, height: 767, alt: "Un F-111C della RAAF esegue un «dump and burn» incendiando il carburante scaricato", caption: "«Dump and burn» di un F-111C della RAAF · Wal Nelowkin, CC BY-SA 4.0" } },
  ],

  facts: [
    {
      title: "Un aereo per due eserciti",
      text: "Il programma TFX nacque dall'idea di McNamara di una cellula comune per Aeronautica e Marina. La versione navale F-111B fallì, ma quella dell'USAF diede al mondo il primo caccia a geometria variabile operativo — e il suo motore e missile gettarono le basi dell'F-14.",
    },
    {
      title: "L'ala che cambia forma",
      text: "Da 16° a 72,5°: con le ali aperte l'F-111 decollava corto e volava lontano, con le ali a freccia massima fendeva l'aria a velocità supersonica. Una soluzione poi ripresa da F-14, Tornado, MiG-23 e dai bombardieri B-1 e Tu-160.",
    },
    {
      title: "L'abitacolo che diventa scialuppa",
      text: "L'F-111 non aveva seggiolini eiettabili: in emergenza l'intera cabina si staccava e scendeva col paracadute. Sigillata, poteva galleggiare e proteggere l'equipaggio fino all'arrivo dei soccorsi.",
    },
    {
      title: "La missione di combattimento più lunga",
      text: "Nel raid El Dorado Canyon del 1986 gli F-111F coprirono circa 6.400 miglia in 13 ore di volo dalla Gran Bretagna alla Libia e ritorno: per anni la più lunga missione di combattimento mai volata da aerei da caccia.",
    },
    {
      title: "«Aardvark» e «Pig»",
      text: "Il soprannome ufficiale — l'oritteropo dal muso lungo — fu adottato solo alla cerimonia di ritiro USAF del 1996, dopo trent'anni di servizio. Gli equipaggi australiani lo chiamavano invece «Pig» e lo salutarono col rituale «dump and burn».",
    },
  ],

} satisfies Aircraft;
