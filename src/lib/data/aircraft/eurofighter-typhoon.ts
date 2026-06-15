import type { Aircraft } from "./types";

export const eurofighterTyphoon: Aircraft = {
  // ---- catalogo ----
  slug: "eurofighter-typhoon",
  name: "Eurofighter Typhoon",
  manufacturer: "Eurofighter GmbH",
  role: "Caccia multiruolo di 4ª generazione avanzata",
  country: "Europa",
  firstFlight: "1994",
  service: "2003 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2",
  unitCost: "≈ 90 mln € (2013)",
  thumb: "/images/aircraft/eurofighter-typhoon/typhoon-italian-af.jpg",
  thumbAlt: "Eurofighter Typhoon dell'Aeronautica Militare italiana in volo",
  model3d: "/models/EU/eurofighter_typhoon.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/eurofighter-typhoon-fighter-jet-free-992bcc8987964ca09d55410330aa8579",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Caccia europeo multiruolo nato dalla collaborazione di Regno Unito, Germania, Italia e Spagna. Con la sua formula ala a delta più canard, deliberatamente instabile e governata dal fly-by-wire, unisce un'agilità eccezionale a supercrociera, sensori avanzati e una capacità «swing-role» che gli permette di passare dall'aria-aria all'aria-suolo nella stessa missione.",

  heroBadges: [
    { label: "In servizio · dal 2003", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo / Superiorità" },
    { label: "Origine · Europa" },
    { label: "Mach 2", variant: "gold" },
  ],

  overviewText:
    "Avviato nei primi anni '80 come European Fighter Aircraft, il programma porta nel 1986 alla nascita del consorzio Eurofighter GmbH (Airbus, BAE Systems e Leonardo), mentre la Francia esce per sviluppare in proprio il Rafale. Il primo volo è del 27 marzo 1994; l'entrata in servizio del 2003-2004. Costruito per circa l'82% in materiali compositi e intrinsecamente instabile per massimizzare la manovrabilità, il Typhoon è oggi la spina dorsale della difesa aerea di sei aeronautiche europee e di diversi clienti all'esportazione.",
  armamentText:
    "Fino a circa 7.500 kg di carico su 13 punti d'aggancio — dal cannone interno ai missili a lunghissima gittata Meteor fino ai missili da crociera Storm Shadow — con un passaggio fluido tra missione aria-aria e aria-suolo.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Delta-canard instabile",
      text: "Ala a delta più alette canard anteriori, configurazione volutamente instabile per la massima agilità: il pilota la governa attraverso un fly-by-wire digitale «carefree».",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar Captor-E AESA",
      text: "Il radar a scansione elettronica attiva (in sostituzione del Captor-C meccanico) offre ampio campo di scansione, tracciamento di molti bersagli e forte resistenza ai disturbi.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Supercrociera",
      text: "I due turbofan Eurojet EJ200 permettono il volo supersonico sostenuto senza ricorrere al postbruciatore.",
    },
    {
      icon: "bolt",
      span: 2,
      title: "Sensore IRST PIRATE",
      text: "Ricerca e inseguimento passivi a infrarossi: individua i bersagli senza emettere, restando «silenzioso» ai radar avversari.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Missile Meteor",
      text: "Il missile aria-aria a statoreattore con la più ampia «no-escape zone» della sua categoria per ingaggi BVR a lunghissima distanza.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "15,96 m" },
        { k: "Apertura alare", v: "10,95 m" },
        { k: "Altezza", v: "5,28 m" },
        { k: "Superficie alare", v: "51,2 m²" },
        { k: "Peso a vuoto", v: "11.150 kg" },
        { k: "Peso max decollo", v: "23.500 kg" },
        { k: "Carico bellico", v: "~7.500 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2" },
        { k: "In km/h", v: "~2.495" },
        { k: "Supercrociera", v: "Mach 1.1–1.5" },
        { k: "Tangenza", v: "~19.800 m" },
        { k: "Rateo di salita", v: "+315 m/s" },
        { k: "Raggio di combatt.", v: "~1.390 km" },
        { k: "Fattore di carico", v: "+9 / −3 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Eurojet EJ200" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~90 kN" },
        { k: "Spinta a secco", v: "~60 kN" },
        { k: "Radar", v: "Captor-E AESA" },
        { k: "Cannone", v: "Mauser BK-27 27mm" },
        { k: "Colpi", v: "150" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar Euroradar Captor-E AESA",
      text: "Radar a scansione elettronica attiva, in sostituzione del Captor-C meccanico: ampio campo visivo, tracciamento simultaneo di numerosi bersagli ed elevata resistenza ai disturbi elettronici.",
      meta: { k: "Tipo", v: "AESA multimodo" },
    },
    {
      icon: "bolt",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Sensore IRST PIRATE",
      text: "Sistema passivo a infrarossi per ricerca e inseguimento: localizza e segue i bersagli senza emettere segnale radar, mantenendo il velivolo «silenzioso» alle difese nemiche.",
      meta: { k: "Tipo", v: "IRST passivo" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Eurojet EJ200",
      text: "Turbofan con postbruciatore ad alto rapporto spinta/peso: garantiscono accelerazione brillante e la supercrociera, cioè il volo supersonico senza ricorrere al postbruciatore.",
      meta: { k: "Spinta A/B cad.", v: "~90 kN" },
    },
    {
      icon: "computer",
      badge: { label: "Difesa", variant: "gold" },
      title: "Praetorian DASS",
      text: "Sistema di autodifesa integrato nella cellula: ricevitori d'allarme radar e missili, disturbatori elettronici, lancio di chaff/flare e decoy trainati per sopravvivere in ambiente fortemente difeso.",
      meta: { k: "Funzioni", v: "ESM / ECM / MAW" },
    },
    {
      icon: "plane",
      badge: { label: "Controllo di volo", variant: "cyan" },
      title: "Cellula instabile + fly-by-wire",
      text: "La configurazione delta-canard, intrinsecamente instabile, è resa pilotabile da un sistema di controllo digitale quadruplo «carefree» che protegge l'inviluppo di volo lasciando il pilota libero di manovrare al limite.",
      meta: { k: "Comandi", v: "FBW quadruplo" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "Mauser BK-27", text: "Cannone revolver da 27 mm con 150 colpi, integrato nella radice alare destra, per il combattimento ravvicinato.", reach: "~2 km", rangePct: 3 },
    { kind: "Corto raggio", title: "IRIS-T / ASRAAM", text: "Missili aria-aria a guida infrarossa ad altissima agilità per il dogfight (IRIS-T, ASRAAM).", reach: "~25 km", rangePct: 13 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR a media distanza.", reach: "~100 km", rangePct: 42 },
    { kind: "Lungo raggio (BVR)", title: "MBDA Meteor", text: "Missile a statoreattore con la più ampia «no-escape zone» della categoria: ingaggi oltre l'orizzonte visivo a lunghissima distanza.", reach: "150+ km", rangePct: 64 },
    { kind: "Aria-suolo", title: "Storm Shadow", text: "Missile da crociera stealth per attacco di precisione in profondità; nell'arsenale anche Brimstone e bombe Paveway.", reach: "250+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Tranche 1", code: "Tranche 1", text: "I primi 148 esemplari, ottimizzati per la difesa aerea e la superiorità in volo; sistemi DASS e PIRATE ancora in maturazione." },
    { sub: "// Tranche 2", code: "Tranche 2", text: "Introduce la piena capacità aria-superficie e l'avionica potenziata: il Typhoon diventa pienamente multiruolo «swing-role»." },
    { sub: "// Tranche 3", code: "Tranche 3A/3B", text: "Predisposizione per il radar AESA Captor-E, il missile Meteor e nuove armi stand-off: la base degli aggiornamenti più recenti." },
    { sub: "// 2022+", code: "Tranche 4", text: "Lo standard più recente, con radar AESA di serie e capacità potenziate: terrà il Typhoon operativo ben oltre il 2060." },
    { sub: "// Esportazione", code: "Export", text: "Versioni per Arabia Saudita, Austria, Oman, Kuwait e Qatar; Kuwait e Qatar ricevono di serie il radar AESA Captor-E." },
    { sub: "// Futuro", code: "GCAP", text: "Il Global Combat Air Programme (Regno Unito, Italia, Giappone) svilupperà il caccia di 6ª generazione che dal ~2035 affiancherà e sostituirà il Typhoon." },
  ],

  timeline: [
    { year: "1983–86", tag: { label: "Origini" }, title: "Il programma European Fighter Aircraft", text: "Nei primi anni '80 Regno Unito, Germania, Italia e Spagna avviano un programma comune per un caccia europeo di nuova generazione. Nel 1986 nasce il consorzio Eurofighter GmbH (con Eurojet per i motori); la Francia esce dal progetto per sviluppare in proprio il Rafale." },
    { year: "1994", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo volo", text: "Il 27 marzo 1994 il prototipo compie il primo volo a Manching, in Germania. Il Typhoon nasce con una formula aerodinamica ad ala a delta e alette canard, deliberatamente instabile per la massima agilità e gestita da un sistema fly-by-wire digitale.", media: { src: "/images/aircraft/eurofighter-typhoon/typhoon-da2.jpg", width: 1280, height: 438, alt: "Il velivolo di sviluppo Eurofighter DA2", caption: "Velivolo di sviluppo DA2 · RAF Museum · kitmasterbloke (CC BY 2.0)" } },
    { year: "2003–04", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il Typhoon entra in linea nel 2003 con RAF e Luftwaffe; l'Aeronautica Militare italiana riceve il primo esemplare il 19 febbraio 2004. La produzione è ripartita tra le quattro nazioni in base alle quote d'acquisto (Regno Unito ~37%, Germania ~29%, Italia ~20%, Spagna ~14%).", media: { src: "/images/aircraft/eurofighter-typhoon/typhoon-raf-2006.jpg", width: 1280, height: 936, alt: "Un Eurofighter Typhoon F2 della RAF nel 2006", caption: "Typhoon F2 della RAF · 2006 · Arpingstone (pubblico dominio)" } },
    { year: "2008", tag: { label: "Tranche 2" }, title: "La piena capacità multiruolo", text: "Con la Tranche 2 (primo volo nel 2008) il Typhoon acquisisce la completa capacità aria-superficie e diventa un vero «swing-role», capace di passare dalla missione aria-aria a quella aria-suolo nello stesso volo." },
    { year: "2011", tag: { label: "Libia", variant: "gold" }, title: "Il battesimo del fuoco sulla Libia", text: "Nel 2011, durante le operazioni sulla Libia, il Typhoon esordisce in combattimento con la RAF e l'Aeronautica Militare italiana in missioni di ricognizione e attacco al suolo, spesso operando in coppia con i Tornado per la designazione dei bersagli.", media: { src: "/images/aircraft/eurofighter-typhoon/typhoon-italian-2.jpg", width: 1280, height: 853, alt: "Eurofighter Typhoon dell'Aeronautica Militare italiana", caption: "Eurofighter dell'Aeronautica Militare italiana · kevinmcgill (CC BY-SA 2.0)" } },
    { year: "2015", tag: { label: "Meteor + AESA", variant: "gold" }, title: "Meteor e radar AESA", text: "Con la Tranche 3 arrivano il missile aria-aria a statoreattore MBDA Meteor e l'integrazione del radar a scansione elettronica attiva Captor-E, che proiettano il caccia nella fascia alta della sua generazione." },
    { year: "2015–18", tag: { label: "Contro l'ISIS", variant: "cyan" }, title: "Le operazioni contro l'ISIS", text: "I Typhoon partecipano alle operazioni della coalizione contro lo Stato Islamico in Iraq e Siria, impiegando bombe e missili di precisione (Paveway, Brimstone) in missioni d'attacco al suolo a lungo raggio." },
    { year: "Oggi", tag: { label: "QRA", variant: "cyan" }, title: "Lo scudo dei cieli europei", text: "Il Typhoon è il fulcro della Quick Reaction Alert di molte aeronautiche NATO: decolla su allarme per identificare e scortare velivoli sconosciuti, dal Baltico all'Islanda fino al Mediterraneo, garanzia quotidiana della difesa aerea.", media: { src: "/images/aircraft/eurofighter-typhoon/typhoon-german-2024.jpg", width: 1280, height: 720, alt: "Eurofighter Typhoon tedesco del TaktLwG 74 in volo nel 2024", caption: "Typhoon tedesco (TaktLwG 74) in volo · 2024 · U.S. Air Force (PD)" } },
    { year: "Export", tag: { label: "Clienti esteri" }, title: "Il successo all'esportazione", text: "Oltre ai quattro partner, il Typhoon è scelto da Arabia Saudita, Austria, Oman, Kuwait e Qatar. I clienti più recenti ricevono di serie il radar AESA, segno della continua evoluzione del programma." },
    { year: "~2035", tag: { label: "GCAP", variant: "gold" }, title: "Verso la sesta generazione", text: "Il futuro è già in cantiere: Regno Unito, Italia e Giappone collaborano al Global Combat Air Programme (GCAP) per un caccia di sesta generazione che dalla metà degli anni 2030 affiancherà e poi sostituirà il Typhoon." },
  ],

  facts: [
    {
      title: "Quattro nazioni, un solo caccia",
      text: "Regno Unito, Germania, Italia e Spagna costruiscono il Typhoon in proporzione agli ordini: ogni aereo è il risultato di linee di assemblaggio distribuite in tutta Europa, con quote di lavoro ripartite tra i partner.",
    },
    {
      title: "Instabile per scelta",
      text: "La cellula delta-canard è progettata per essere aerodinamicamente instabile: senza i computer di volo sarebbe impilotabile, ma è proprio questa instabilità a regalare al Typhoon la sua straordinaria agilità.",
    },
    {
      title: "«Swing-role» nella stessa missione",
      text: "Dalla Tranche 2 il caccia può commutare tra ruolo aria-aria e aria-suolo durante lo stesso volo, senza riconfigurazioni a terra: una flessibilità che lo rende adatto a scenari in rapida evoluzione.",
    },
    {
      title: "Compositi e supercrociera",
      text: "Costruito per circa l'82% in materiali compositi, è leggero e robusto; il binomio cellula-EJ200 gli consente di mantenere velocità supersoniche senza postbruciatore, risparmiando carburante.",
    },
    {
      title: "Il guardiano della QRA italiana",
      text: "In Italia il Typhoon ha sostituito gli F-104 e gli F-16 in leasing nella difesa aerea: è l'intercettore che decolla su allarme per proteggere lo spazio aereo nazionale 24 ore su 24.",
    },
  ],

};
