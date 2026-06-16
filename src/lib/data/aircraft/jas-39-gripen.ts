import type { Aircraft } from "./types";

export const jas39Gripen = {
  // ---- catalogo ----
  slug: "jas-39-gripen",
  name: "Saab JAS 39 Gripen",
  manufacturer: "Saab",
  role: "Caccia multiruolo leggero",
  country: "Svezia",
  firstFlight: "1988",
  service: "1996 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2",
  unitCost: "≈ 85 mln $ (Gripen E)",
  thumb: "/images/aircraft/jas-39-gripen/gripen-flight.jpg",
  thumbAlt: "Un Saab JAS 39 Gripen dell'aeronautica svedese in volo",
  model3d: "/models/SWD/saab_jas_39_gripen_-_fighter_jet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/saab-jas-39-gripen-fighter-jet-free-03d4f4f0f7e94f469299ba7db4c707c4",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Piccolo, intelligente ed economico: il Gripen è la risposta svedese al problema di difendere una nazione con risorse limitate. Caccia multiruolo leggero progettato per decollare dalle strade, essere riarmato in dieci minuti e costare poco da far volare — una filosofia opposta a quella dei grandi e costosi caccia, eppure capace di impiegare le armi più moderne come il missile Meteor.",

  heroBadges: [
    { label: "In servizio · dal 1996", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo leggero" },
    { label: "Origine · Svezia" },
    { label: "Mach 2", variant: "gold" },
  ],

  overviewText:
    "Negli anni '80 la Svezia volle un unico caccia capace di sostituire più velivoli (la sigla JAS sta per Jakt/Attack/Spaning: caccia, attacco e ricognizione), adatto alla sua dottrina di difesa: dispersione su basi stradali, manutenzione rapida con personale ridotto e bassi costi. Il Gripen vola il 9 dicembre 1988 ed entra in servizio nel 1996. Cellula leggera ad ala a delta con canard e fly-by-wire, è stato poi sviluppato nelle versioni C/D (compatibili NATO ed esportate) e nel più grande Gripen E/F, con radar AESA e motore GE F414. La sua forza non è la potenza bruta, ma l'efficienza: fa molto con poco.",
  armamentText:
    "Un cannone interno e sette-otto punti d'aggancio per missili aria-aria moderni (IRIS-T, AMRAAM e il Meteor a lunghissima gittata), armi aria-suolo e il missile antinave RBS-15: un arsenale completo su una piattaforma leggera.",

  bento: [
    {
      icon: "carrier",
      span: 3,
      title: "Decolla dalle strade",
      text: "Progettato per operare da tratti di strada e piste corte (~500 m): la dispersione su basi stradali rende il Gripen difficile da neutralizzare a terra.",
    },
    {
      icon: "clock",
      span: 3,
      title: "Pronto in ~10 minuti",
      text: "Una piccola squadra (storicamente anche di coscritti) può rifornire, riarmare e ricontrollare il Gripen in una decina di minuti, per rimetterlo in volo in fretta.",
    },
    {
      icon: "radar",
      span: 2,
      title: "Radar AESA + Meteor",
      text: "La versione E monta il radar AESA Raven ES-05 e un IRST; il Gripen è tra i primi a impiegare il missile a lunghissima gittata Meteor.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Un motore, basso costo",
      text: "Un solo turbofan e una progettazione semplice gli danno il costo orario di volo più basso tra i caccia moderni.",
    },
    {
      icon: "plane",
      span: 2,
      title: "Piccolo ma completo",
      text: "Cellula leggera delta-canard, agile e reattiva, capace di supercrociera nella versione E: fa molto con poco.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "14,1 m" },
        { k: "Apertura alare", v: "8,4 m" },
        { k: "Altezza", v: "4,5 m" },
        { k: "Superficie alare", v: "~30 m²" },
        { k: "Peso a vuoto", v: "~6.800 kg" },
        { k: "Peso max decollo", v: "~16.500 kg (E)" },
        { k: "Punti d'aggancio", v: "8 (E)" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2" },
        { k: "In km/h", v: "~2.470" },
        { k: "Supercrociera", v: "~Mach 1.1 (E)" },
        { k: "Tangenza", v: "~15.200 m" },
        { k: "Raggio di combatt.", v: "~800 km" },
        { k: "Fattore di carico", v: "+9 g" },
        { k: "Equipaggio", v: "1 / 2 (D/F)" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motore", v: "1× Volvo RM12 / F414 (E)" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta (A/B)", v: "~80 kN / ~98 kN (E)" },
        { k: "Radar", v: "PS-05/A → Raven ES-05 (E)" },
        { k: "Sensori", v: "IRST" },
        { k: "Cannone", v: "Mauser BK-27 27mm" },
        { k: "Costo/ora", v: "il più basso della categoria" },
      ],
    },
  ],

  systems: [
    {
      icon: "carrier",
      badge: { label: "Operatività", variant: "cyan" },
      title: "Operazioni da basi disperse",
      text: "Pensato per decollare e atterrare da tratti di strada e piste corte (~500 m): la dottrina svedese delle basi stradali disperse rende difficile distruggere il Gripen al suolo.",
      meta: { k: "Pista", v: "~500 m" },
    },
    {
      icon: "clock",
      badge: { label: "Manutenzione", variant: "gold" },
      title: "Riarmo in circa 10 minuti",
      text: "Una squadra ridotta (storicamente anche di coscritti) rifornisce, riarma e ricontrolla il Gripen in una decina di minuti: tornare in volo in fretta è parte del progetto.",
      meta: { k: "Turnaround", v: "~10 min" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AESA + Meteor",
      text: "La versione E adotta il radar AESA Raven ES-05 e un sensore IRST; il Gripen è stato tra i primi caccia a impiegare operativamente il missile aria-aria a lunghissima gittata Meteor.",
      meta: { k: "Radar", v: "Raven ES-05 (E)" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "Un solo motore, costi minimi",
      text: "Un singolo turbofan (Volvo RM12, derivato dal GE F404; GE F414 sulla E) e una progettazione semplice si traducono nel costo orario di volo più basso tra i caccia moderni.",
      meta: { k: "Costo/ora", v: "~4.700 $ (stima)" },
    },
    {
      icon: "plane",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Delta-canard leggero",
      text: "Cellula compatta ad ala a delta con alette canard e comandi fly-by-wire: instabilità controllata per la massima agilità, con supercrociera nella versione E.",
      meta: { k: "Comandi", v: "FBW + delta-canard" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "Mauser BK-27", text: "Cannone revolver da 27 mm interno per il combattimento ravvicinato (assente sulla versione biposto).", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "IRIS-T / AIM-9", text: "Missili aria-aria a guida infrarossa ad alta agilità per il dogfight.", reach: "~25 km", rangePct: 13 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR a media distanza.", reach: "~100 km", rangePct: 45 },
    { kind: "Lungo raggio (BVR)", title: "MBDA Meteor", text: "Missile a statoreattore con grande «no-escape zone»: il Gripen è stato tra i primi a integrarlo, dandogli un colpo a lunghissima gittata.", reach: "150+ km", rangePct: 62 },
    { kind: "Antinave", title: "RBS-15", text: "Missile antinave a lungo raggio di sviluppo svedese, per colpire bersagli navali a grande distanza.", reach: "200+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Base", code: "JAS 39A/B", text: "Le prime versioni, in servizio nell'aeronautica svedese dalla metà degli anni '90." },
    { sub: "// Export", code: "JAS 39C/D", text: "Lo standard reso compatibile con la NATO (rifornimento in volo, sistemi in inglese): la versione più diffusa ed esportata." },
    { sub: "// Nuova gen.", code: "Gripen E/F", text: "Il «Gripen E/NG»: più grande, motore GE F414, radar AESA Raven, più carburante e armi (Meteor). In servizio con Svezia e Brasile." },
    { sub: "// Brasile", code: "F-39", text: "La versione brasiliana del Gripen E/F, assemblata localmente: il maggiore contratto d'esportazione del programma." },
    { sub: "// Biposto", code: "JAS 39D/F", text: "Versioni a due posti per l'addestramento e le missioni più complesse." },
    { sub: "// Utilizzatori", code: "Clienti esteri", text: "Oltre alla Svezia: Repubblica Ceca e Ungheria (in leasing), Sudafrica, Thailandia e Brasile." },
  ],

  timeline: [
    { year: "Anni '80", tag: { label: "Origini" }, title: "Un caccia su misura per la Svezia", text: "La Svezia cercava un unico velivolo (JAS: caccia, attacco, ricognizione) per sostituire Viggen e Draken, adatto alla difesa di un Paese neutrale: economico, semplice da mantenere e capace di operare da basi disperse. Il Gripen compie il primo volo il 9 dicembre 1988." },
    { year: "1996", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Dal 9 giugno 1996 il Gripen entra in linea nell'aeronautica svedese, iniziando a rimpiazzare i velivoli precedenti con una piattaforma più moderna, leggera ed economica da gestire." },
    { year: "Basi disperse", tag: { label: "Dottrina", variant: "gold" }, title: "Decollare dalle strade", text: "Il Gripen incarna la dottrina svedese: in caso di guerra non opera da poche grandi basi (facili bersagli), ma si disperde su tratti di strada e piste corte, dove piccole squadre lo rimettono in volo in pochi minuti.", media: { src: "/images/aircraft/jas-39-gripen/gripen-takeoff.jpg", width: 1280, height: 965, alt: "Un Gripen al decollo", caption: "Gripen al decollo · Nathan150 (CC BY 2.0)" } },
    { year: "C/D · Export", tag: { label: "Diffusione", variant: "cyan" }, title: "Lo standard NATO e l'export", text: "La versione C/D, compatibile con la NATO e con il rifornimento in volo, apre le porte all'esportazione: Repubblica Ceca e Ungheria lo adottano in leasing, seguite da Sudafrica e Thailandia.", media: { src: "/images/aircraft/jas-39-gripen/gripen-czech.jpg", width: 1280, height: 853, alt: "Un Gripen dell'aeronautica ceca in volo", caption: "Gripen ceco in volo · Milan Nykodym (CC BY-SA 2.0)" } },
    { year: "Costi", tag: { label: "Efficienza" }, title: "Il più economico da far volare", text: "Studi indipendenti (Jane's, 2012) hanno indicato il Gripen come il caccia con il minor costo per ora di volo, sensibilmente inferiore a quello di rivali come l'F-16: il suo vero punto di forza." },
    { year: "Gripen E/F", tag: { label: "Nuova gen.", variant: "gold" }, title: "Il salto generazionale", text: "Il Gripen E/F porta un motore GE F414 più potente, radar AESA Raven, molto più carburante e nuove armi: pur restando leggero ed economico, sale di categoria. È adottato da Svezia e Brasile.", media: { src: "/images/aircraft/jas-39-gripen/gripen-e.jpg", width: 1280, height: 719, alt: "Il Saab JAS-39E Gripen in esposizione", caption: "JAS-39E Gripen · Rhk111 (CC BY-SA 4.0)" } },
    { year: "Brasile", tag: { label: "F-39" }, title: "Il Gripen sudamericano", text: "Il Brasile sceglie il Gripen E/F come F-39 e lo assembla localmente: è il maggiore successo d'esportazione del programma e porta la produzione fuori dalla Svezia." },
    { year: "Meteor", tag: { label: "Armi" }, title: "Piccolo, ma con il Meteor", text: "Nonostante le dimensioni contenute, il Gripen impiega il missile a lunghissima gittata Meteor e un radar AESA: può ingaggiare a distanze che mettono in difficoltà caccia ben più grandi." },
    { year: "2024–25", tag: { label: "NATO", variant: "cyan" }, title: "La Svezia nella NATO", text: "Con l'ingresso della Svezia nella NATO (2024) il Gripen si integra pienamente nell'Alleanza; nello stesso periodo la Thailandia lo sceglie di nuovo, preferendolo all'F-16.", media: { src: "/images/aircraft/jas-39-gripen/gripen-stockholm-2025.jpg", width: 1280, height: 908, alt: "Un Gripen vola con un B-52 sopra Stoccolma nel 2025", caption: "Gripen e B-52 su Stoccolma · 2025 · F. Fouganthin (CC BY 4.0)" } },
    { year: "Filosofia", tag: { label: "Eredità" }, title: "Fare molto con poco", text: "In un'epoca di caccia sempre più grandi e costosi, il Gripen dimostra che efficienza, bassi costi e idee intelligenti possono valere quanto la potenza pura: una lezione di ingegneria oltre che un caccia." },
  ],

  facts: [
    {
      title: "Decolla dalle autostrade",
      text: "Il Gripen è progettato per operare da tratti di strada e piste corte: un pilastro della difesa svedese, che disperde i caccia per renderli difficili da colpire a terra.",
    },
    {
      title: "Il più economico da far volare",
      text: "Secondo uno studio Jane's del 2012, il Gripen aveva il costo per ora di volo più basso tra i caccia moderni (circa 4.700 $), nettamente inferiore a quello dei rivali.",
    },
    {
      title: "Pronto in dieci minuti",
      text: "Una squadra minima può rifornire e riarmare il Gripen in circa dieci minuti: la rapidità di rimessa in volo è parte integrante del progetto, pensato per la guerra dispersa.",
    },
    {
      title: "Piccolo, ma con il Meteor",
      text: "Pur essendo leggero ed economico, impiega il missile a lunghissima gittata Meteor e un radar AESA: nel combattimento oltre l'orizzonte può tenere testa a caccia molto più grandi.",
    },
    {
      title: "Costruito anche in Brasile",
      text: "Il successo all'esportazione (Repubblica Ceca, Ungheria, Sudafrica, Thailandia) culmina con il Brasile, che assembla in casa la propria versione F-39 del Gripen E/F.",
    },
  ],

} satisfies Aircraft;
