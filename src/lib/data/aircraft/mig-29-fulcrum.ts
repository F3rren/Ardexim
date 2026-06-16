import type { Aircraft } from "./types";

export const mig29Fulcrum: Aircraft = {
  // ---- catalogo ----
  slug: "mig-29-fulcrum",
  name: "MiG-29 Fulcrum",
  manufacturer: "Mikoyan",
  role: "Caccia da superiorità aerea di 4ª generazione",
  country: "Russia",
  firstFlight: "1977",
  service: "1983 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.25",
  unitCost: "≈ 29 mln $ (export)",
  thumb: "/images/aircraft/mig-29-fulcrum/mig29-flight.jpg",
  thumbAlt: "Un MiG-29 Fulcrum in volo",
  model3d: "/models/RUS/mig-29_-_fighter_jet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/mig-29-fighter-jet-free-0a21787096244220b246ec8747e7b09c",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Risposta sovietica all'F-15 e all'F-16, il MiG-29 è un caccia da superiorità aerea agile e robusto, celebre per le sue manovre da airshow. La combinazione di missile a infrarossi R-73 e mirino sul casco gli diede un vantaggio nel combattimento ravvicinato che spaventò la NATO. Costruito in oltre 1.600 esemplari, vola ancora in più di 30 Paesi.",

  heroBadges: [
    { label: "In servizio · dal 1983", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Superiorità aerea" },
    { label: "Origine · URSS / Russia" },
    { label: "Mach 2.25", variant: "gold" },
  ],

  overviewText:
    "Avviato negli anni '70 come parte del programma sovietico per un caccia di nuova generazione, il MiG-29 nacque per contrastare i nuovi F-15 ed F-16 americani. Primo volo il 6 ottobre 1977, in servizio dal 1983. Mikoyan privilegiò agilità e potenza di fuoco a corto raggio: cellula aerodinamica con estensioni di bordo d'attacco, due motori potenti, un sensore a infrarossi e — soprattutto — il binomio missile R-73 e mirino sul casco, capace di ingaggiare bersagli molto fuori asse. Il prezzo di questa impostazione fu un raggio d'azione limitato, vero punto debole del Fulcrum.",
  armamentText:
    "Pensato per il combattimento aereo ravvicinato e a media distanza: cannone da 30 mm, missili a infrarossi R-73 e missili a guida radar R-27/R-77 su sei-sette piloni, con una capacità aria-suolo di base.",

  bento: [
    {
      icon: "missile",
      span: 3,
      title: "R-73 e mirino sul casco",
      text: "Il missile a infrarossi R-73 può essere puntato semplicemente guardando il bersaglio attraverso il mirino sul casco, anche molto fuori asse: un vantaggio nel dogfight che allarmò la NATO.",
    },
    {
      icon: "plane",
      span: 3,
      title: "Agilità da airshow",
      text: "Ala con estensioni di bordo d'attacco (LERX), basso carico alare e doppia deriva: manovre ad altissimo angolo d'attacco come il Cobra di Pugaciov.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Due motori RD-33",
      text: "Ottimo rapporto spinta/peso per un'agilità eccezionale, al prezzo di consumi elevati e di un raggio d'azione limitato.",
    },
    {
      icon: "radar",
      span: 2,
      title: "Radar + IRST",
      text: "Radar look-down/shoot-down affiancato da un sensore a infrarossi e da un telemetro laser: può cercare e ingaggiare anche in silenzio radar.",
    },
    {
      icon: "fold",
      span: 2,
      title: "Nato per piste rustiche",
      text: "Prese d'aria con sportelli anti-detriti che si chiudono al decollo: può operare da piste semi-preparate e danneggiate.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "17,32 m" },
        { k: "Apertura alare", v: "11,36 m" },
        { k: "Altezza", v: "4,73 m" },
        { k: "Superficie alare", v: "38 m²" },
        { k: "Peso a vuoto", v: "~11.000 kg" },
        { k: "Peso max decollo", v: "~20.000 kg" },
        { k: "Punti d'aggancio", v: "6-7" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.25" },
        { k: "In km/h", v: "~2.400" },
        { k: "Tangenza", v: "~18.000 m" },
        { k: "Raggio di combatt.", v: "~700 km" },
        { k: "Autonomia", v: "~2.100 km" },
        { k: "Fattore di carico", v: "+9 g" },
        { k: "Decollo", v: "250–350 m" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Klimov RD-33" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~81 kN" },
        { k: "Radar", v: "N019 Sapfir" },
        { k: "Sensori", v: "IRST + mirino casco" },
        { k: "Cannone", v: "GSh-30-1 30mm" },
        { k: "Colpi", v: "150" },
      ],
    },
  ],

  systems: [
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "gold" },
      title: "R-73 + mirino sul casco",
      text: "La combinazione che spaventò la NATO: il missile a infrarossi R-73 può essere puntato semplicemente guardando il bersaglio attraverso il mirino montato sul casco, anche con grandi angoli fuori asse.",
      meta: { k: "Capacità", v: "alto fuori-asse" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar N019 + IRST",
      text: "Radar look-down/shoot-down affiancato da un sensore elettro-ottico a infrarossi (IRST) e da un telemetro laser: il Fulcrum può individuare e ingaggiare bersagli anche senza emettere segnale radar.",
      meta: { k: "Sensori", v: "radar + IRST" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Klimov RD-33",
      text: "Due turbofan con postbruciatore dall'ottimo rapporto spinta/peso, che regalano un'agilità eccezionale; il rovescio della medaglia sono i consumi elevati e quindi il raggio d'azione ridotto.",
      meta: { k: "Spinta A/B cad.", v: "~81 kN" },
    },
    {
      icon: "plane",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Cellula ad alta agilità",
      text: "Ala con estensioni di bordo d'attacco (LERX), basso carico alare e doppia deriva: il MiG-29 manovra ad altissimo angolo d'attacco, come dimostra il celebre Cobra di Pugaciov.",
      meta: { k: "Limite", v: "+9 g" },
    },
    {
      icon: "fold",
      badge: { label: "Operatività", variant: "cyan" },
      title: "Costruito per la guerra reale",
      text: "Le prese d'aria principali si chiudono al decollo e l'aria entra da feritoie superiori, per evitare l'ingestione di detriti: il Fulcrum può operare da piste semi-preparate o danneggiate.",
      meta: { k: "Seggiolino", v: "K-36 zero-zero" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GSh-30-1", text: "Cannone da 30 mm con 150 colpi nella radice dell'ala sinistra, per il combattimento ravvicinato.", reach: "~1,8 km", rangePct: 4 },
    { kind: "Corto raggio", title: "R-73 (AA-11 Archer)", text: "Missile aria-aria a infrarossi ad altissima agilità, puntabile col mirino sul casco: l'arma simbolo del Fulcrum nel dogfight.", reach: "~30 km", rangePct: 18 },
    { kind: "Medio raggio", title: "R-27 (AA-10 Alamo)", text: "Missile a guida radar semiattiva per ingaggi a media distanza, oltre il raggio visivo.", reach: "~70 km", rangePct: 48 },
    { kind: "Medio raggio attivo", title: "R-77 (AA-12 Adder)", text: "Missile a guida radar attiva «lancia e dimentica» delle versioni modernizzate, equivalente concettuale dell'AMRAAM.", reach: "~110 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Base", code: "MiG-29 (9.12)", text: "La versione originale «Fulcrum-A»: puro caccia da superiorità aerea a corto raggio della Guerra Fredda." },
    { sub: "// Biposto", code: "MiG-29UB", text: "Versione a due posti per l'addestramento, priva del radar ma con doppi comandi." },
    { sub: "// Navale", code: "MiG-29K", text: "Versione imbarcata con ali ripiegabili e gancio d'arresto, in servizio sulle portaerei di Russia e India." },
    { sub: "// Modernizzato", code: "MiG-29SMT / M", text: "Aggiornamenti con cockpit digitale, più carburante, radar e armamento migliorati (R-77) e piena capacità multiruolo." },
    { sub: "// Evoluzione", code: "MiG-35", text: "Lo sviluppo definitivo della famiglia, con avionica e sensori di nuova generazione (anch'esso nel catalogo)." },
    { sub: "// Diffusione", code: "Export mondiale", text: "Oltre 1.600 esemplari esportati in più di 30 Paesi: dall'ex Patto di Varsavia a India, Egitto e oltre." },
  ],

  timeline: [
    { year: "1969–77", tag: { label: "Origini" }, title: "La risposta sovietica a F-15 e F-16", text: "Per contrastare i nuovi caccia americani di quarta generazione, l'Unione Sovietica avvia un programma per un caccia tattico agile. Il prototipo del MiG-29 compie il primo volo il 6 ottobre 1977. La NATO gli assegnerà il nome in codice «Fulcrum»." },
    { year: "1983", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Dall'agosto 1983 il MiG-29 entra in linea nell'aviazione sovietica come caccia di prima linea, schierato in gran numero nei reparti di difesa aerea e tattica del Patto di Varsavia." },
    { year: "1986–88", tag: { label: "La sorpresa", variant: "gold" }, title: "L'Occidente vede il Fulcrum", text: "Quando il MiG-29 si mostra in Occidente (in Finlandia nel 1986, poi a Farnborough nel 1988 con manovre mozzafiato), sorprende gli osservatori: è molto più agile e moderno di quanto previsto, e cambia la percezione dell'aviazione sovietica.", media: { src: "/images/aircraft/mig-29-fulcrum/mig29-maks-ovt.jpg", width: 1280, height: 810, alt: "Un MiG-29 in manovra acrobatica a un airshow", caption: "MiG-29 in manovra (MAKS) · Vitaly V. Kuzmin (CC BY-SA 4.0)" } },
    { year: "1990", tag: { label: "Germania", variant: "cyan" }, title: "La valutazione tedesca", text: "Dopo la riunificazione, la Luftwaffe eredita 24 MiG-29 dell'ex Germania Est e li impiega nell'addestramento contro gli F-16 NATO. Nei combattimenti simulati a corto raggio il Fulcrum, grazie a R-73 e mirino sul casco, batte ripetutamente i caccia occidentali: un campanello d'allarme.", media: { src: "/images/aircraft/mig-29-fulcrum/mig29-german-f15.jpg", width: 1280, height: 834, alt: "Un MiG-29 tedesco vola accanto a un F-15C statunitense", caption: "MiG-29 tedesco con un F-15C USAF · 2003 · U.S. Air Force (PD)" } },
    { year: "Punto debole", tag: { label: "Raggio" }, title: "Il tallone d'Achille", text: "L'impostazione tutta agilità e potenza si paga con un raggio d'azione limitato (intorno ai 700 km) e poco carburante interno: il Fulcrum è un eccellente intercettore di punto, meno adatto alle missioni a lungo raggio." },
    { year: "Export", tag: { label: "Diffusione", variant: "gold" }, title: "Un caccia globale", text: "Costruito in oltre 1.600 esemplari, il MiG-29 è esportato in tutto il blocco orientale e ben oltre: Polonia, India, Egitto, Siria e decine di altre nazioni. Molti volano ancora oggi, spesso modernizzati.", media: { src: "/images/aircraft/mig-29-fulcrum/mig29-polish.jpg", width: 1280, height: 853, alt: "Un MiG-29 dell'aeronautica polacca", caption: "MiG-29 dell'aeronautica polacca · Mark Kent (CC BY-SA 2.0)" } },
    { year: "MiG-29K", tag: { label: "Navale" }, title: "Il Fulcrum imbarcato", text: "La versione navale MiG-29K, con ali ripiegabili e gancio d'arresto, equipaggia la Marina indiana e la portaerei russa Admiral Kuznetsov, dando alla famiglia una vita imbarcata." },
    { year: "Modernizzazioni", tag: { label: "Aggiornamenti", variant: "cyan" }, title: "Dal SMT all'M", text: "Le versioni aggiornate (SMT, M/M2) ricevono cockpit digitale, più carburante, radar e armamento moderni (incluso il missile attivo R-77), trasformando il vecchio intercettore in un multiruolo più completo." },
    { year: "2022", tag: { label: "Ucraina", variant: "gold" }, title: "Ancora in guerra", text: "Nella guerra in Ucraina i MiG-29 ucraini, integrati anche con armi occidentali come il missile anti-radar AGM-88 HARM e ricevuti in dono da Polonia e Slovacchia, restano in prima linea a oltre quarant'anni dal primo volo.", media: { src: "/images/aircraft/mig-29-fulcrum/mig29-ukraine.jpg", width: 1280, height: 734, alt: "Un MiG-29 dell'aeronautica ucraina", caption: "MiG-29 dell'aeronautica ucraina · Min. Difesa Ucraina (CC BY 4.0)" } },
    { year: "Oggi", tag: { label: "MiG-35" }, title: "L'eredità e il MiG-35", text: "L'evoluzione più avanzata della famiglia è il MiG-35, mentre i tanti Fulcrum ancora in servizio — circa 700 tra MiG-29 e MiG-35 nel mondo — testimoniano la longevità di un progetto nato in piena Guerra Fredda." },
  ],

  facts: [
    {
      title: "Il caccia che spaventò la NATO",
      text: "Il binomio missile R-73 e mirino sul casco diede al MiG-29 un vantaggio nel combattimento ravvicinato che gli aerei occidentali dell'epoca non avevano: la valutazione tedesca dei Fulcrum ex-DDR lo dimostrò battendo gli F-16 in simulazione.",
    },
    {
      title: "Maestro del Cobra",
      text: "Grazie al basso carico alare e all'aerodinamica ad alta portanza, il Fulcrum è una star degli airshow, capace di manovre estreme ad altissimo angolo d'attacco come il Cobra di Pugaciov.",
    },
    {
      title: "Corto di gambe",
      text: "Il principale difetto del MiG-29 è il raggio d'azione limitato: nato come intercettore di punto, porta poco carburante interno e dipende molto dai serbatoi esterni per le missioni più lunghe.",
    },
    {
      title: "Rustico e robusto",
      text: "Progettato per operare da piste semi-preparate, ha prese d'aria che si chiudono al decollo per non ingerire detriti e uno dei migliori seggiolini eiettabili al mondo, il K-36, spesso protagonista di salvataggi agli airshow.",
    },
    {
      title: "Oltre 1.600 esemplari, ancora in volo",
      text: "Tra i caccia moderni più diffusi, il MiG-29 vola ancora in oltre 30 nazioni e combatte tuttora — ad esempio in Ucraina — a più di quarant'anni dal primo volo.",
    },
  ],

};
