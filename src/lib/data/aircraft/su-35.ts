import type { Aircraft } from "./types";

export const su35 = {
  // ---- catalogo ----
  slug: "su-35",
  name: "Su-35 Flanker-E",
  manufacturer: "Sukhoi (UAC)",
  role: "Caccia da superiorità aerea di 4ª generazione avanzata (4++)",
  country: "Russia",
  firstFlight: "2008",
  service: "2014 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.25",
  unitCost: "≈ 2 mld ₽",
  thumb: "/images/aircraft/su-35/su35-flight.jpg",
  thumbAlt: "Un Sukhoi Su-35 in volo",
  model3d: "/models/RUS/sukhoi_su-35_-_fighter_jet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/sukhoi-su-35-fighter-jet-free-3213a404e5cb4fb68f778b9acae5109c",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Lo sviluppo più spinto del leggendario Su-27 Flanker: il Su-35 è un grande caccia da superiorità aerea «4++», super-manovrabile grazie alla spinta vettoriale, con un radar dalla portata enorme e una vasta riserva di carburante. Estremamente capace nel combattimento aereo, gli manca però la furtività delle ultime generazioni.",

  heroBadges: [
    { label: "In servizio · dal 2014", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Superiorità aerea 4++" },
    { label: "Origine · Russia" },
    { label: "Mach 2.25", variant: "gold" },
  ],

  overviewText:
    "Il Su-35 è l'evoluzione finale del Su-27, il grande caccia sovietico degli anni '80. Una prima versione «Su-35» (Su-27M, con alette canard) fu sviluppata già a fine anni '80 ma non entrò in produzione. Il moderno Su-35S — senza canard, con motori a spinta vettoriale, radar Irbis-E e avionica nuova — vola nel febbraio 2008 ed entra in servizio nelle forze russe nel 2014. È un caccia «4++»: enormemente capace per agilità, sensori e raggio d'azione, ma privo dello stealth che caratterizza le quinte generazioni come l'F-22 o il Su-57.",
  armamentText:
    "Dodici punti d'aggancio per circa 8 tonnellate di armamento: dal dogfight con i missili a infrarossi R-73 all'intercettazione a lunghissima distanza con l'R-37M, fino a un completo arsenale aria-superficie.",

  bento: [
    {
      icon: "engine",
      span: 3,
      title: "Spinta vettoriale 3D",
      text: "Due potenti motori AL-41F1S con ugelli orientabili danno a un caccia grande e pesante una manovrabilità da airshow: Cobra, «pancake» e manovre post-stallo.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar Irbis-E a lunghissima portata",
      text: "Un radar PESA capace di individuare bersagli fino a ~400 km, tracciarne decine e ingaggiarne diversi insieme, affiancato dal sensore a infrarossi OLS-35.",
    },
    {
      icon: "plane",
      span: 2,
      title: "L'apice del Flanker",
      text: "Cellula irrobustita, più carburante e avionica moderna: grande, veloce e a lungo raggio, ma senza furtività.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Missili a lungo raggio",
      text: "Dodici piloni per missili a guida attiva R-77 e per l'R-37M, capace di colpire a oltre 300 km.",
    },
    {
      icon: "star",
      span: 2,
      title: "Ponte verso il Su-57",
      text: "L'ultimo grande caccia di quarta generazione russo, anello di congiunzione con lo stealth di quinta del Su-57.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "21,9 m" },
        { k: "Apertura alare", v: "15,3 m" },
        { k: "Altezza", v: "5,90 m" },
        { k: "Superficie alare", v: "~62 m²" },
        { k: "Peso a vuoto", v: "~19.000 kg" },
        { k: "Peso max decollo", v: "~34.500 kg" },
        { k: "Punti d'aggancio", v: "12" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.25" },
        { k: "In km/h", v: "~2.400" },
        { k: "Supercrociera", v: "~Mach 1.1" },
        { k: "Tangenza", v: "~18.000 m" },
        { k: "Raggio di combatt.", v: "~1.600 km" },
        { k: "Autonomia traghetto", v: "~4.500 km" },
        { k: "Fattore di carico", v: "+9 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Saturn AL-41F1S" },
        { k: "Tipo", v: "Turbofan A/B + TVC" },
        { k: "Spinta/cad. (A/B)", v: "~142 kN" },
        { k: "Radar", v: "Irbis-E (PESA)" },
        { k: "Sensori", v: "OLS-35 IRST" },
        { k: "Cannone", v: "GSh-30-1 30mm" },
        { k: "Carico bellico", v: "~8.000 kg" },
      ],
    },
  ],

  systems: [
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× AL-41F1S con spinta vettoriale",
      text: "Due potenti turbofan con ugelli orientabili in 3D: danno al pesante Su-35 una manovrabilità eccezionale, con manovre post-stallo (Cobra, «pancake») che lo rendono una star degli airshow.",
      meta: { k: "Spinta A/B cad.", v: "~142 kN" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar Irbis-E (PESA)",
      text: "Un radar a scansione elettronica passiva dalla portata enorme — fino a ~400 km contro bersagli grandi — capace di tracciare decine di obiettivi e ingaggiarne diversi simultaneamente, con l'IRST OLS-35 come sensore passivo.",
      meta: { k: "Portata", v: "fino a ~400 km" },
    },
    {
      icon: "plane",
      badge: { label: "Cellula", variant: "cyan" },
      title: "L'apice del Su-27 Flanker",
      text: "Sviluppo finale del Su-27: struttura irrobustita, grande capacità di carburante interno e avionica moderna. Veloce e a lungo raggio, ma senza gli accorgimenti stealth delle quinte generazioni.",
      meta: { k: "Base", v: "Su-27 Flanker" },
    },
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "gold" },
      title: "Armamento a lungo raggio",
      text: "Dodici piloni integrano missili aria-aria a guida attiva R-77, a corto raggio R-73/R-74 e — soprattutto — l'R-37M a lunghissima gittata, oltre a un ampio arsenale aria-superficie.",
      meta: { k: "Piloni", v: "12" },
    },
    {
      icon: "bomb",
      badge: { label: "Autonomia", variant: "cyan" },
      title: "Caccia pesante a lungo raggio",
      text: "La grande riserva di carburante interno (oltre 11 tonnellate) e gli ~8 t di carico bellico fanno del Su-35 un caccia «pesante» dal raggio d'azione molto esteso, adatto anche all'attacco al suolo.",
      meta: { k: "Carico", v: "~8.000 kg" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GSh-30-1", text: "Cannone da 30 mm con 150 colpi per il combattimento ravvicinato.", reach: "~1,8 km", rangePct: 4 },
    { kind: "Corto raggio", title: "R-73 / R-74", text: "Missili aria-aria a infrarossi ad alta agilità per il dogfight.", reach: "~30 km", rangePct: 12 },
    { kind: "Aria-suolo", title: "Kh-29 / Kh-31 / Kh-38", text: "Missili aria-superficie e antiradar/antinave per l'attacco a bersagli terrestri e navali.", reach: "~40 km", rangePct: 24 },
    { kind: "Medio raggio", title: "R-77 (AA-12)", text: "Missile aria-aria a guida radar attiva «lancia e dimentica» per ingaggi oltre l'orizzonte visivo.", reach: "~110 km", rangePct: 52 },
    { kind: "Lungo raggio", title: "R-37M", text: "Missile a lunghissima gittata e altissima velocità contro bersagli ad alto valore (AWACS, aerocisterne) a grande distanza.", reach: "300+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Serie", code: "Su-35S", text: "La versione di serie russa: il caccia da superiorità aerea pesante e super-manovrabile delle forze aerospaziali." },
    { sub: "// Origine", code: "Su-27 Flanker", text: "La base di partenza: il grande caccia sovietico degli anni '80 di cui il Su-35 è lo sviluppo più estremo." },
    { sub: "// Anni '80", code: "Su-27M / Su-35", text: "Una prima versione «Su-35» (Su-27M), con alette canard, fu sviluppata già negli anni '80-'90 ma non entrò in produzione di serie." },
    { sub: "// Export", code: "Su-35 (export)", text: "La Cina è stata il primo cliente estero (24 esemplari, contratto 2015); altri esemplari, costruiti per l'Egitto e poi non consegnati, sono finiti verso altri Paesi." },
    { sub: "// Famiglia", code: "Verso il Su-57", text: "Il Su-35 è il ponte tra il Flanker di quarta generazione e il caccia stealth di quinta Su-57 (anch'esso in catalogo)." },
    { sub: "// Impiego", code: "Siria · Ucraina", text: "Schierato in Siria dal 2016 e impiegato nella guerra in Ucraina dal 2022, dove ha però subìto alcune perdite." },
  ],

  timeline: [
    { year: "Anni '80–'90", tag: { label: "Origini" }, title: "Dal Flanker al primo Su-35", text: "Il Su-35 nasce come sviluppo del Su-27. Una prima versione (Su-27M, talvolta chiamata Su-35) con alette canard volò già negli anni '80, ma il crollo dell'URSS e i tagli ne impedirono la produzione di serie." },
    { year: "2008", tag: { label: "Su-35S", variant: "gold" }, title: "Il moderno Su-35S", text: "Il 19 febbraio 2008 vola il Su-35S definitivo: senza canard, con i nuovi motori a spinta vettoriale AL-41F1S, il potente radar Irbis-E e un'avionica completamente rinnovata.", media: { src: "/images/aircraft/su-35/su35-maks.jpg", width: 1280, height: 853, alt: "Un Su-35S in dimostrazione al salone MAKS", caption: "Su-35S al MAKS · Vitaly V. Kuzmin (CC BY-SA 4.0)" } },
    { year: "Manovrabilità", tag: { label: "Spinta vettoriale", variant: "gold" }, title: "Un colosso acrobatico", text: "Grazie agli ugelli orientabili e all'aerodinamica del Flanker, il Su-35 esegue ai saloni manovre estreme — Cobra, «pancake», avvitamenti piatti — sorprendenti per un caccia delle sue dimensioni." },
    { year: "2014", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Dal 2014 il Su-35S entra in linea nelle forze aerospaziali russe come caccia da superiorità aerea di punta, in attesa che il Su-57 stealth raggiunga la piena maturità.", media: { src: "/images/aircraft/su-35/su35-russian-af.jpg", width: 1280, height: 853, alt: "Un Su-35S delle forze aerospaziali russe", caption: "Su-35S russo · Aeroprints.com (CC BY-SA 3.0)" } },
    { year: "Radar e sensori", tag: { label: "Avionica" }, title: "Vedere lontanissimo", text: "Il radar Irbis-E offre una delle portate maggiori tra i caccia in servizio, ma resta un PESA: potentissimo, eppure di una generazione precedente rispetto agli AESA occidentali, e non abbinato a una cellula furtiva." },
    { year: "2015–16", tag: { label: "Cina · Export", variant: "cyan" }, title: "Il primo cliente estero", text: "Nel novembre 2015 la Cina firma per 24 Su-35, primo contratto d'esportazione del tipo, consegnati tra il 2016 e il 2018: un raro successo per un caccia di vertice russo sul mercato estero.", media: { src: "/images/aircraft/su-35/su35-family.jpg", width: 1280, height: 853, alt: "Un Su-35S in volo con un Su-34 e il prototipo T-50/Su-57", caption: "Su-35S con Su-34 e T-50 (Su-57) · Alex Beltyukov (CC BY-SA 3.0)" } },
    { year: "2016", tag: { label: "Siria" }, title: "Il debutto operativo in Siria", text: "Dal 2016 i Su-35 sono schierati in Siria, dove svolgono compiti di superiorità aerea e scorta, intercettando più volte velivoli stranieri nella regione." },
    { year: "2022", tag: { label: "Ucraina", variant: "gold" }, title: "La prova della guerra", text: "Nella guerra in Ucraina il Su-35 è uno dei caccia russi più impiegati, in missioni di superiorità aerea e soppressione delle difese. Ha però subìto alcune perdite, segno di quanto, senza stealth, anche un caccia capace resti vulnerabile.", media: { src: "/images/aircraft/su-35/su35-intercept.jpg", width: 1280, height: 807, alt: "Un Su-35S scorta un bombardiere Tu-95", caption: "Su-35S di scorta a un Tu-95 · Min. Difesa Giappone (CC BY 4.0)" } },
    { year: "Export incerto", tag: { label: "Mercato" }, title: "Tra sanzioni e nuovi clienti", text: "L'export resta difficile: gli esemplari costruiti per l'Egitto non furono consegnati per la pressione delle sanzioni statunitensi e sarebbero stati dirottati verso altri Paesi (Algeria, Iran). Il Su-35 paga il contesto geopolitico più che i propri meriti tecnici." },
    { year: "Bilancio", tag: { label: "4++" }, title: "Potente, ma non stealth", text: "Il Su-35 è probabilmente il miglior caccia non stealth in servizio per agilità, sensori e raggio: un avversario formidabile in manovra, ma destinato a cedere il primato al Su-57 nell'era della furtività." },
  ],

  facts: [
    {
      title: "Il Flanker portato all'estremo",
      text: "Il Su-35 è lo sviluppo più spinto del Su-27: stessa formula aerodinamica vincente, ma con motori a spinta vettoriale, radar a lunghissima portata, più carburante e avionica moderna.",
    },
    {
      title: "Re della manovra",
      text: "Grazie agli ugelli orientabili in 3D è uno dei caccia più agili al mondo: ai saloni esegue manovre post-stallo spettacolari, impensabili per un velivolo così grande e pesante.",
    },
    {
      title: "Un radar che vede a 400 km",
      text: "Il radar Irbis-E ha una delle portate dichiarate più lunghe in servizio; resta però un PESA, tecnologicamente alle spalle degli AESA occidentali, e non è abbinato a una cellula furtiva.",
    },
    {
      title: "Capace, ma senza stealth",
      text: "Il Su-35 è un «4++»: eccellente in agilità, sensori e armamento, ma privo della bassa osservabilità che definisce le quinte generazioni come F-22, F-35 e lo stesso Su-57.",
    },
    {
      title: "Export e guerra reale",
      text: "La Cina è stata il primo acquirente estero; impiegato in Siria e in Ucraina, il Su-35 ha mostrato grandi capacità ma anche di poter essere abbattuto, riportando l'attenzione sul valore della furtività.",
    },
  ],

} satisfies Aircraft;
