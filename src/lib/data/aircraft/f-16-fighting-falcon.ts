import type { Aircraft } from "./types";

export const f16FightingFalcon: Aircraft = {
  // ---- catalogo ----
  slug: "f-16-fighting-falcon",
  name: "F-16 Fighting Falcon",
  manufacturer: "General Dynamics / Lockheed Martin",
  role: "Caccia multiruolo monomotore di 4ª generazione",
  country: "USA",
  firstFlight: "1974",
  service: "1978 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2",
  unitCost: "≈ 19 mln $ (1998)",
  thumb: "/images/aircraft/f-16-fighting-falcon/f16-flight.jpg",
  thumbAlt: "F-16 Fighting Falcon dell'U.S. Air Force in volo",
  model3d: "/models/USA/f-16_fighting_falcon.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/f-16-fighting-falcon-fighter-jet-free-f0b00989e5634764848ef2c235c64db5",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Nato dal programma Lightweight Fighter come caccia leggero, agile ed economico, l'F-16 è diventato il caccia di quarta generazione più diffuso al mondo. Tettuccio a bolla, comandi fly-by-wire e instabilità rilassata lo rendono estremamente manovrabile: oltre 4.600 esemplari servono in più di 25 aeronautiche.",

  heroBadges: [
    { label: "In servizio · dal 1978", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo" },
    { label: "Origine · USA" },
    { label: "Mach 2", variant: "gold" },
  ],

  overviewText:
    "All'inizio degli anni '70 la «Fighter Mafia» guidata da John Boyd promuove un caccia leggero ottimizzato per il combattimento manovrato, secondo la teoria dell'energia-manovrabilità. Il programma Lightweight Fighter porta al confronto tra YF-16 e YF-17: nel gennaio 1975 l'USAF sceglie l'YF-16 per prestazioni superiori e costi inferiori. Costruito attorno a una cellula instabile gestita dal fly-by-wire, con tettuccio a bolla per la visibilità totale e seggiolino reclinato per resistere alle alte accelerazioni, l'F-16 unisce semplicità, agilità e un costo accessibile che ne hanno fatto un successo planetario.",
  armamentText:
    "Fino a circa 7,7 tonnellate di carico su 11 punti d'aggancio — dal cannone interno ai missili aria-aria fino a un vasto arsenale aria-suolo di precisione: un multiruolo davvero polivalente.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Agilità e instabilità rilassata",
      text: "Cellula deliberatamente instabile gestita dal fly-by-wire e seggiolino reclinato di 30°: l'F-16 è ottimizzato per il combattimento manovrato ad alta accelerazione, fino a +9 g.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar APG-83 SABR AESA",
      text: "Le versioni più recenti (F-16V) adottano un radar a scansione elettronica attiva che porta il vecchio Falcon agli standard sensoristici dei caccia moderni.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Un solo motore",
      text: "Un unico turbofan F100 o F110 con postbruciatore: semplicità, costi contenuti e un eccellente rapporto spinta/peso.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Vero multiruolo",
      text: "Dall'aria-aria con AMRAAM e Sidewinder all'attacco di precisione con JDAM, HARM e Maverick: cambia missione cambiando il carico.",
    },
    {
      icon: "star",
      span: 2,
      title: "Il caccia più diffuso",
      text: "Oltre 4.600 esemplari per più di 25 aeronautiche: il caccia di quarta generazione di maggior successo commerciale di sempre.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "15,06 m" },
        { k: "Apertura alare", v: "9,96 m" },
        { k: "Altezza", v: "4,88 m" },
        { k: "Superficie alare", v: "27,87 m²" },
        { k: "Peso a vuoto", v: "8.570 kg" },
        { k: "Peso max decollo", v: "19.200 kg" },
        { k: "Carico bellico", v: "~7.700 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2" },
        { k: "In km/h", v: "~2.410" },
        { k: "Tangenza", v: "+15.000 m" },
        { k: "Rateo di salita", v: "+254 m/s" },
        { k: "Raggio di combatt.", v: "~550 km" },
        { k: "Autonomia traghetto", v: "~4.220 km" },
        { k: "Fattore di carico", v: "+9 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motore", v: "1× F100 / F110" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta (A/B)", v: "~127 kN" },
        { k: "Comandi", v: "Fly-by-wire" },
        { k: "Radar", v: "APG-83 AESA (F-16V)" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Colpi", v: "511" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-83 SABR AESA",
      text: "Negli F-16V il vecchio radar meccanico lascia il posto a un'antenna a scansione elettronica attiva: maggiore portata, tracciamento di più bersagli e mappatura del terreno ad alta risoluzione.",
      meta: { k: "Tipo", v: "AESA (F-16V)" },
    },
    {
      icon: "plane",
      badge: { label: "Controllo di volo", variant: "cyan" },
      title: "Fly-by-wire e instabilità rilassata",
      text: "La cellula è aerodinamicamente instabile per la massima agilità; un sistema di comando elettronico quadruplo la rende pilotabile e ne protegge l'inviluppo di volo.",
      meta: { k: "Comandi", v: "FBW quadruplo" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "Motore singolo F100 / F110",
      text: "Un solo turbofan con postbruciatore (Pratt & Whitney F100 o General Electric F110): leggerezza, costi ridotti e un ottimo rapporto spinta/peso.",
      meta: { k: "Spinta A/B", v: "~127 kN" },
    },
    {
      icon: "computer",
      badge: { label: "Cockpit", variant: "cyan" },
      title: "Tettuccio a bolla + side-stick",
      text: "Cupola senza montanti per la visibilità a 360°, comando laterale (side-stick) e seggiolino reclinato di 30° per sopportare meglio le alte accelerazioni.",
      meta: { k: "Visibilità", v: "360°" },
    },
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "gold" },
      title: "Architettura multiruolo",
      text: "Undici piloni e un'avionica aperta consentono di integrare un'ampia gamma di armi aria-aria e aria-suolo, dai missili alle bombe a guida di precisione.",
      meta: { k: "Piloni", v: "11" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm con 511 colpi, alloggiata nella radice dell'ala sinistra.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9 / IRIS-T", text: "Missili aria-aria a guida infrarossa per il dogfight (Sidewinder, IRIS-T, Python).", reach: "~25 km", rangePct: 14 },
    { kind: "Aria-suolo", title: "JDAM / HARM / Maverick", text: "Bombe a guida GPS e laser e missili (Maverick, HARM anti-radar): l'F-16 è un cacciabombardiere di precisione versatile.", reach: "~28 km", rangePct: 22 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR a media distanza.", reach: "~100 km", rangePct: 50 },
    { kind: "Stand-off", title: "AGM-158 JASSM", text: "Nelle configurazioni più recenti può impiegare missili da crociera stand-off per colpire bersagli difesi a grande distanza.", reach: "370+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// 1978", code: "F-16A/B", text: "La versione originale (Block 1-20) con radar APG-66: caccia leggero da combattimento aereo, prodotto in oltre mille esemplari per USAF e partner europei." },
    { sub: "// 1984", code: "F-16C/D", text: "Block 25-52: avionica migliorata, radar APG-68, capacità multiruolo ogni-tempo e scelta tra motori P&W e GE. La versione più diffusa della famiglia." },
    { sub: "// Israele", code: "F-16I Sufa", text: "«Tempesta»: versione biposto per Israele con serbatoi conformi, avionica e armamento nazionali e autonomia estesa per missioni a lungo raggio." },
    { sub: "// Emirati", code: "F-16E/F Block 60", text: "Sviluppata per gli Emirati Arabi Uniti: radar AESA APG-80, serbatoi conformi e motore F110-GE-132 più potente; una delle versioni più avanzate prima del Viper." },
    { sub: "// Oggi", code: "F-16V «Viper»", text: "Block 70/72: radar AESA APG-83, cockpit moderno, datalink Link 16 e nuova linea di produzione a Greenville. Aggiornamento anche per le flotte esistenti." },
    { sub: "// Sperimentale", code: "F-16XL", text: "Versione con ala a delta «cranked-arrow», maggiore carico e autonomia: perse la gara per l'F-15E ma servì a lungo come banco di prova della NASA." },
  ],

  timeline: [
    { year: "1972–74", tag: { label: "Origini" }, title: "Il Lightweight Fighter e la «Fighter Mafia»", text: "All'inizio degli anni '70 un gruppo di ufficiali e ingegneri guidati da John Boyd sostiene, contro la tendenza ai caccia pesanti e costosi, un velivolo leggero e agile ottimizzato per il combattimento manovrato. Dal programma Lightweight Fighter nasce l'YF-16, che compie il primo volo nel 1974.", media: { src: "/images/aircraft/f-16-fighting-falcon/yf16-prototype.jpg", width: 1280, height: 853, alt: "Il prototipo YF-16 conservato in museo", caption: "Prototipo YF-16 · Virginia Air & Space Center · Balon Greyjoy (CC0)" } },
    { year: "1975", tag: { label: "Selezione", variant: "gold" }, title: "La vittoria sull'YF-17", text: "Nel gennaio 1975 l'USAF sceglie l'YF-16 rispetto all'YF-17 per le prestazioni superiori a velocità transoniche e i costi operativi inferiori. Pochi mesi dopo, quattro nazioni europee (Belgio, Paesi Bassi, Danimarca e Norvegia) lo adottano in quello che la stampa chiamò «l'affare del secolo»." },
    { year: "1978–80", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in linea e adozione europea", text: "L'F-16 entra in servizio con l'USAF tra il 1978 e il 1980, mentre i partner europei avviano la produzione su licenza. Nasce così una base industriale e operativa continentale che accompagnerà il Falcon per decenni.", media: { src: "/images/aircraft/f-16-fighting-falcon/f16a-denmark.jpg", width: 1280, height: 868, alt: "Un F-16A della Royal Danish Air Force", caption: "F-16A della Royal Danish Air Force · U.S. Air Force (PD)" } },
    { year: "1984", tag: { label: "Multiruolo" }, title: "Arriva l'F-16C/D", text: "Con i Block 25 e successivi (1984) il Falcon riceve radar APG-68, avionica migliorata e piena capacità di attacco al suolo ogni-tempo: da puro caccia da combattimento aereo diventa un multiruolo completo." },
    { year: "1991", tag: { label: "Desert Storm", variant: "cyan" }, title: "La Guerra del Golfo", text: "Nella Guerra del Golfo l'F-16 è il caccia più impiegato della coalizione: vola migliaia di sortite d'attacco al suolo e di difesa aerea, confermando la versatilità che ne è il marchio di fabbrica.", media: { src: "/images/aircraft/f-16-fighting-falcon/f16c-gulf-war.jpg", width: 1280, height: 864, alt: "Un F-16C USAF rifornito da un KC-135 durante la Guerra del Golfo", caption: "F-16C in rifornimento durante la Guerra del Golfo · 1991 · U.S. Air Force (PD)" } },
    { year: "1994–99", tag: { label: "Balcani", variant: "gold" }, title: "Le prime vittorie aria-aria e il Kosovo", text: "Nel 1994, sui cieli della Bosnia, gli F-16 della NATO ottengono le prime vittorie aria-aria del tipo abbattendo alcuni velivoli serbi. Nel 1999, durante l'operazione Allied Force sul Kosovo, il Falcon è di nuovo protagonista." },
    { year: "2004", tag: { label: "Israele · Export", variant: "cyan" }, title: "L'F-16I Sufa e il successo all'export", text: "Israele riceve l'F-16I «Sufa», versione biposto a lungo raggio con serbatoi conformi e sistemi nazionali. È solo uno degli oltre 25 utilizzatori che fanno del Falcon il caccia di maggior successo all'esportazione.", media: { src: "/images/aircraft/f-16-fighting-falcon/f16i-sufa-israel.jpg", width: 1280, height: 976, alt: "Un F-16I Sufa dell'aeronautica israeliana", caption: "F-16I «Sufa» dell'Israeli Air Force · 2016 · Israeli Air Force (CC BY 4.0)" } },
    { year: "2005–oggi", tag: { label: "Evoluzione", variant: "gold" }, title: "Da Block 60 al Viper", text: "L'F-16E/F Block 60 per gli Emirati (2005) introduce radar AESA e serbatoi conformi; il successivo F-16V Block 70/72 «Viper» porta radar AESA APG-83, cockpit moderno e una nuova linea di produzione a Greenville, mantenendo attuale il progetto." },
    { year: "Record", tag: { label: "Diffusione" }, title: "Il caccia più costruito della sua generazione", text: "Con oltre 4.600 esemplari prodotti e una platea di clienti senza eguali, l'F-16 ha realizzato l'intuizione della Fighter Mafia: un caccia efficace, economico e continuamente aggiornabile, rimasto rilevante per quasi mezzo secolo." },
    { year: "2024", tag: { label: "Nuovi cieli" }, title: "Verso nuovi scenari", text: "A oltre quarant'anni dal debutto, l'F-16 continua a volare e a essere prodotto: dal 2024 viene fornito anche all'Ucraina, mentre i nuovi Viper e gli aggiornamenti delle flotte esistenti ne proiettano la carriera ben dentro gli anni 2040." },
  ],

  facts: [
    {
      title: "Frutto della «Fighter Mafia»",
      text: "L'F-16 nasce dalle idee di John Boyd e di un gruppo di ufficiali e ingegneri che, contro la tendenza ai caccia pesanti e costosi, sostenevano un velivolo leggero e agile ottimizzato per il combattimento manovrato.",
    },
    {
      title: "Volutamente instabile",
      text: "A differenza dei caccia tradizionali, l'F-16 è progettato per essere aerodinamicamente instabile: senza i computer di volo sarebbe impilotabile, ma è proprio questo a renderlo straordinariamente reattivo.",
    },
    {
      title: "Il pilota «sdraiato»",
      text: "Il seggiolino è reclinato di 30° e il comando è un side-stick laterale: accorgimenti pensati per aiutare il pilota a sopportare le accelerazioni fino a +9 g del combattimento manovrato.",
    },
    {
      title: "Oltre 4.600 esemplari",
      text: "Con più di 4.600 unità prodotte e oltre 25 utilizzatori, l'F-16 è il caccia di quarta generazione di maggior successo: una piattaforma aggiornata senza sosta da quasi mezzo secolo.",
    },
    {
      title: "Una famiglia in continua evoluzione",
      text: "Dalle prime versioni A/B fino al moderno F-16V con radar AESA e alla nuova linea di produzione, oltre ai derivati come il giapponese Mitsubishi F-2, la cellula del Falcon resta attuale e ancora in produzione.",
    },
  ],

};
