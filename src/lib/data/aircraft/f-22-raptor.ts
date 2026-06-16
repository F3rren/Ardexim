import type { Aircraft } from "./types";

export const f22Raptor: Aircraft = {
  // ---- catalogo ----
  slug: "f-22-raptor",
  name: "F-22 Raptor",
  manufacturer: "Lockheed Martin / Boeing",
  role: "Caccia stealth da superiorità aerea di 5ª generazione",
  country: "USA",
  firstFlight: "1997",
  service: "2005 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.25",
  unitCost: "≈ 150 mln $ (2009)",
  profile: { velocita: 92, raggio: 60, agilita: 95, carico: 45, furtivita: 95 },
  thumb: "/images/aircraft/f-22-raptor/f22-flight.jpg",
  thumbAlt: "Un F-22 Raptor in volo",
  model3d: "/models/USA/f-22_raptor.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/f-22-raptor-fighter-jet-free-508de5c48845456bb033fb267ebe1d1e",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Primo caccia stealth di quinta generazione al mondo, l'F-22 Raptor è nato per dominare i cieli. Unisce furtività, supercrociera e spinta vettoriale a una manovrabilità senza pari, restando per molti il miglior caccia da superiorità aerea mai costruito. Prodotto in soli 187 esemplari e mai esportato, è rimasto un'esclusiva americana.",

  heroBadges: [
    { label: "In servizio · dal 2005", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Superiorità aerea" },
    { label: "Origine · USA" },
    { label: "Mach 2.25", variant: "gold" },
  ],

  overviewText:
    "Nato dal programma Advanced Tactical Fighter degli anni '80, l'F-22 doveva garantire all'USAF la superiorità aerea per i decenni a venire contro le nuove minacce sovietiche. Il prototipo Lockheed YF-22 batté il Northrop YF-23 nel 1991; il Raptor di serie volò nel 1997 ed entrò in servizio nel 2005. Combina per la prima volta in un solo velivolo furtività spinta, crociera supersonica senza postbruciatore e ugelli a spinta vettoriale: una combinazione che, a vent'anni dal debutto, resta un riferimento. La produzione fu però chiusa a soli 187 esemplari e l'esportazione vietata per legge.",
  armamentText:
    "Concepito per la superiorità aerea: missili nelle stive interne per restare furtivo (fino a 6 AMRAAM e 2 Sidewinder) più il cannone. Una capacità aria-suolo limitata (JDAM, Small Diameter Bomb) completa il quadro.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Stealth da superiorità aerea",
      text: "Primo caccia di quinta generazione: forma furtiva, materiali radar-assorbenti e armi interne riducono la traccia radar a quella di una pallina d'acciaio.",
    },
    {
      icon: "engine",
      span: 3,
      title: "Supercrociera + spinta vettoriale",
      text: "Due motori F119 lo fanno volare a Mach 1.8 senza postbruciatore; gli ugelli orientabili gli danno una manovrabilità che pochi caccia possono eguagliare.",
    },
    {
      icon: "radar",
      span: 2,
      title: "Radar AN/APG-77 AESA",
      text: "Radar a scansione elettronica attiva e fusione dei sensori: vede per primo e colpisce per primo, restando invisibile.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Armi nelle stive",
      text: "Fino a 6 AMRAAM e 2 Sidewinder alloggiati internamente, per non compromettere la furtività durante l'ingaggio.",
    },
    {
      icon: "star",
      span: 2,
      title: "Raro e insostituibile",
      text: "Solo 187 esemplari, mai esportati: ogni Raptor è una risorsa preziosa e impossibile da rimpiazzare a breve.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "18,90 m" },
        { k: "Apertura alare", v: "13,56 m" },
        { k: "Altezza", v: "5,09 m" },
        { k: "Superficie alare", v: "78,0 m²" },
        { k: "Peso a vuoto", v: "~19.700 kg" },
        { k: "Peso max decollo", v: "~37.900 kg" },
        { k: "Carico bellico", v: "~ stive interne" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.25" },
        { k: "In km/h", v: "~2.410" },
        { k: "Supercrociera", v: "Mach 1.8" },
        { k: "Tangenza", v: "~19.800 m" },
        { k: "Raggio di combatt.", v: "~850 km" },
        { k: "Fattore di carico", v: "+9 g" },
        { k: "Equipaggio", v: "1 pilota" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× P&W F119-100" },
        { k: "Tipo", v: "Turbofan A/B + TVC" },
        { k: "Spinta/cad. (A/B)", v: "~156 kN" },
        { k: "Radar", v: "AN/APG-77 AESA" },
        { k: "Furtività", v: "RCS ~0,0001 m²" },
        { k: "Cannone", v: "M61A2 20mm" },
        { k: "Colpi", v: "480" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-77 AESA",
      text: "Radar a scansione elettronica attiva a bassa probabilità d'intercettazione, abbinato al ricevitore d'allarme ALR-94 e alla fusione dei sensori: il Raptor individua e ingaggia restando inosservato.",
      meta: { k: "Tipo", v: "AESA (LPI)" },
    },
    {
      icon: "plane",
      badge: { label: "Bassa osservabilità", variant: "cyan" },
      title: "Furtività estrema",
      text: "Forma stealth, prese d'aria a S, materiali radar-assorbenti e armamento interno riducono la sezione radar a valori paragonabili a quelli di una pallina d'acciaio.",
      meta: { k: "RCS stimata", v: "~0,0001 m²" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Pratt & Whitney F119 + TVC",
      text: "Due turbofan potenti con ugelli a spinta vettoriale: consentono la supercrociera a Mach 1.8 senza postbruciatore e una manovrabilità eccezionale ad alti angoli d'attacco.",
      meta: { k: "Spinta A/B cad.", v: "~156 kN" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Fusione dei sensori",
      text: "I dati di radar, allarme radar e ricezione elettronica vengono fusi in un quadro tattico unico: il pilota riceve la situazione già elaborata, senza dover interpretare sensori separati.",
      meta: { k: "Vantaggio", v: "«first look, first kill»" },
    },
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "gold" },
      title: "Stive interne aria-aria",
      text: "La stiva ventrale ospita fino a 6 AMRAAM, le due stive laterali un Sidewinder ciascuna: tutto l'armamento aria-aria è interno per preservare la furtività.",
      meta: { k: "Carico tipico", v: "6 AMRAAM + 2 AIM-9" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A2 Vulcan", text: "Rotativa a 6 canne da 20 mm con 480 colpi, nascosta dietro uno sportello per non alterare la furtività.", reach: "~2 km", rangePct: 5 },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Missile aria-aria a guida infrarossa nelle stive laterali, per il combattimento ravvicinato.", reach: "~30 km", rangePct: 16 },
    { kind: "Aria-suolo", title: "JDAM / SDB", text: "Capacità aria-suolo secondaria: bombe a guida GPS (JDAM) e Small Diameter Bomb nelle stive interne.", reach: "~28 km", rangePct: 24 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Fino a 6 missili aria-aria a guida radar attiva nella stiva ventrale: il cuore della missione di superiorità aerea.", reach: "~120 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Operativa", code: "F-22A", text: "L'unica versione di serie e operativa: 187 esemplari, tutti monoposto da superiorità aerea." },
    { sub: "// Cancellata", code: "F-22B", text: "La prevista versione biposto da addestramento, cancellata per tagli di budget: gli equipaggi si addestrano direttamente sul monoposto e al simulatore." },
    { sub: "// Dimostratore", code: "YF-22", text: "Il prototipo che nel 1991 vinse la gara ATF contro il Northrop YF-23, giudicato più furtivo e veloce ma meno agile." },
    { sub: "// Aggiornamenti", code: "Increment 3.2B+", text: "Aggiornamenti progressivi di avionica e armamento (AIM-120D, AIM-9X, nuovi sensori e link dati) per mantenere il Raptor al vertice." },
    { sub: "// Export", code: "Mai esportato", text: "Per legge il Congresso USA ne ha vietato l'esportazione, anche ad alleati stretti come Giappone e Australia: il Raptor è rimasto esclusivamente americano." },
    { sub: "// Successore", code: "NGAD / F-47", text: "Il programma di 6ª generazione (designazione F-47) destinato a sostituire l'F-22 dagli anni 2030, in coppia con droni gregari." },
  ],

  timeline: [
    { year: "1981–91", tag: { label: "Origini" }, title: "Il programma ATF e la sfida YF-22 / YF-23", text: "Negli anni '80 l'USAF lancia l'Advanced Tactical Fighter per un caccia stealth da superiorità aerea. La gara si gioca tra il Lockheed YF-22 e il Northrop YF-23: il 23 aprile 1991 vince l'YF-22, giudicato più agile e meno rischioso del rivale, pur più furtivo e veloce.", media: { src: "/images/aircraft/f-22-raptor/yf22-prototype.jpg", width: 1280, height: 851, alt: "Il prototipo YF-22 dell'Advanced Tactical Fighter", caption: "Prototipo YF-22 (ATF) · U.S. Air Force (PD)" } },
    { year: "1997", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo volo del Raptor", text: "Il 7 settembre 1997 l'F-22 di serie compie il primo volo. Inizia un lungo sviluppo per portare a maturità una combinazione di tecnologie — furtività, supercrociera, spinta vettoriale e fusione dei sensori — mai riunite prima in un solo caccia." },
    { year: "2005", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il 15 dicembre 2005 l'F-22 raggiunge la capacità operativa con l'USAF. Nelle esercitazioni si rivela dominante, accumulando rapporti di abbattimento simulati schiaccianti contro i caccia di generazione precedente.", media: { src: "/images/aircraft/f-22-raptor/f22-twilight.jpg", width: 1280, height: 853, alt: "Un F-22 Raptor in volo al crepuscolo", caption: "F-22 Raptor al crepuscolo · U.S. Air Force (PD)" } },
    { year: "Prestazioni", tag: { label: "Supercrociera", variant: "gold" }, title: "Velocità e agilità", text: "Il Raptor incrocia a Mach 1.8 senza postbruciatore (supercrociera) e, grazie agli ugelli a spinta vettoriale, manovra ad angoli d'attacco proibitivi per altri caccia: una combinazione di stealth, quota, velocità e agilità che ne fa un avversario formidabile.", media: { src: "/images/aircraft/f-22-raptor/f22-vapor.jpg", width: 1280, height: 854, alt: "Un F-22 Raptor in virata con scia di vapore", caption: "F-22 in virata ad alta energia · U.S. Air Force (PD)" } },
    { year: "Mai in vendita", tag: { label: "Export" }, title: "Un'esclusiva americana", text: "A differenza dell'F-35, il Raptor non è mai stato esportato: una legge del Congresso ne vietò la vendita all'estero, nonostante l'interesse di alleati come Giappone e Australia. Resta un caccia solo statunitense." },
    { year: "2011–12", tag: { label: "Produzione" }, title: "La linea chiude a 187 esemplari", text: "Per i costi elevati e la fine della Guerra Fredda, la produzione viene tagliata da circa 750 esemplari previsti a soli 187. L'ultimo Raptor è consegnato nel 2012: la linea è chiusa e non facilmente riavviabile, rendendo ogni aereo insostituibile." },
    { year: "2014", tag: { label: "Combattimento", variant: "cyan" }, title: "Il battesimo del fuoco in Siria", text: "Il 22 settembre 2014 l'F-22 esordisce in combattimento durante l'operazione Inherent Resolve contro lo Stato Islamico in Siria, in un ruolo d'attacco di precisione e di coordinamento, lontano dalla missione di superiorità aerea per cui era nato.", media: { src: "/images/aircraft/f-22-raptor/f22-combat.jpg", width: 1280, height: 720, alt: "Un F-22 Raptor si prepara a una missione di combattimento", caption: "F-22 in preparazione al volo di combattimento · U.S. Air Force (PD)" } },
    { year: "2023", tag: { label: "Prima vittoria" }, title: "L'abbattimento del pallone spia", text: "Il 4 febbraio 2023 un F-22 abbatte con un missile un pallone-spia cinese al largo della costa atlantica: paradossalmente la prima vittoria aria-aria ufficiale del miglior caccia da superiorità aerea al mondo è contro un pallone, non un altro velivolo." },
    { year: "Costi", tag: { label: "Programma" }, title: "Capacità al prezzo dell'esclusività", text: "Il Raptor ha pagato la sua superiorità con costi altissimi e numeri ridotti: una scelta che ha garantito un vantaggio tecnologico ma una flotta piccola, oggi vista come un avvertimento per i programmi futuri." },
    { year: "Futuro", tag: { label: "NGAD / F-47" }, title: "Verso la sesta generazione", text: "L'F-22 sarà sostituito dal caccia di sesta generazione del programma NGAD (designazione F-47), pensato per operare in rete con droni gregari. Nel frattempo gli aggiornamenti mantengono il Raptor al vertice fino agli anni 2030." },
  ],

  facts: [
    {
      title: "Furtivo come una pallina d'acciaio",
      text: "Nonostante i quasi 19 metri di lunghezza, la sezione radar stimata dell'F-22 è dell'ordine di una pallina d'acciaio: una furtività estrema che gli permette di ingaggiare restando invisibile.",
    },
    {
      title: "Vola supersonico senza postbruciatore",
      text: "La supercrociera — crociera sostenuta a circa Mach 1.8 senza accendere il postbruciatore — gli dà raggio, sorpresa ed energia in combattimento che pochi altri caccia possiedono.",
    },
    {
      title: "Vietato all'esportazione",
      text: "È l'unico caccia americano di vertice la cui vendita all'estero è stata proibita per legge: nemmeno gli alleati più stretti hanno potuto acquistarlo, per proteggerne le tecnologie.",
    },
    {
      title: "Solo 187 esemplari",
      text: "Dei circa 750 previsti ne furono costruiti 187, con la linea chiusa nel 2011: il Raptor è potente ma raro, e ogni perdita è di fatto irrimediabile.",
    },
    {
      title: "La prima vittoria? Un pallone",
      text: "Il primo abbattimento aria-aria ufficiale dell'F-22 è arrivato nel 2023 contro un pallone-spia cinese: un debutto curioso per il caccia da superiorità aerea più temuto al mondo.",
    },
  ],

};
