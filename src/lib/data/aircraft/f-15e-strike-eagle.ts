import type { Aircraft } from "./types";

export const f15eStrikeEagle: Aircraft = {
  // ---- catalogo ----
  slug: "f-15e-strike-eagle",
  name: "F-15E Strike Eagle",
  manufacturer: "McDonnell Douglas / Boeing",
  role: "Cacciabombardiere d'attacco ogni-tempo",
  country: "USA",
  firstFlight: "1986",
  service: "1988 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.5",
  thumb: "/images/aircraft/f-15e-strike-eagle/f15e-banks-tanker.jpg",
  thumbAlt: "F-15E Strike Eagle vira allontanandosi da un'aerocisterna",
  model3d: "/models/f-15e_strike_eagle.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/f-15e-strike-eagle-fighter-jet-free-fff7d75490474e9b964d90cc031c8d01",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Derivato biposto e ogni-tempo dell'F-15 Eagle, lo Strike Eagle unisce la superiorità aerea del progenitore a una profonda capacità d'attacco al suolo a lungo raggio. Serbatoi conformi, pod di puntamento e un secondo membro d'equipaggio dedicato gli permettono di colpire in profondità, di notte e con qualsiasi tempo, restando un caccia temibile.",

  heroBadges: [
    { label: "In servizio · dal 1988", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Attacco / Multiruolo" },
    { label: "Origine · USA" },
    { label: "Mach 2.5", variant: "gold" },
  ],

  overviewText:
    "Nel marzo 1981 l'USAF lanciò il programma Enhanced Tactical Fighter per un velivolo capace di interdizione profonda, di notte e senza scorta. La McDonnell Douglas propose una versione d'attacco dell'F-15, che il 24 febbraio 1984 batté l'F-16XL grazie a costi di sviluppo inferiori, maggior margine di crescita e alla sicurezza dei due motori. Il risultato conserva le prestazioni aria-aria dell'Eagle ma porta oltre dieci tonnellate di armamento di precisione, su una cellula irrobustita per le missioni a bassa quota.",
  armamentText:
    "Oltre 10.000 kg di carico bellico su una dozzina di piloni — dal duello aereo al più completo arsenale aria-suolo di precisione — gestiti dal WSO sui display del cockpit posteriore.",

  bento: [
    {
      icon: "crew",
      span: 3,
      title: "Equipaggio biposto in tandem",
      text: "Pilota e WSO (Weapon Systems Officer): il secondo gestisce radar, contromisure e armamento, dividendo il carico di lavoro nelle missioni d'attacco a bassa quota e di notte.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar AN/APG-82 AESA",
      text: "L'antenna a scansione elettronica attiva — che sostituisce l'APG-70 — mappa il terreno ad alta risoluzione, traccia bersagli aerei e di superficie e guida più armi simultaneamente.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Attacco di precisione",
      text: "Bombe a guida GPS e laser (JDAM, Paveway) e missili da crociera: colpisce bersagli puntiformi in profondità con qualsiasi condizione meteo.",
    },
    {
      icon: "plane",
      span: 2,
      title: "Serbatoi conformi (CFT)",
      text: "Aderenti alla fusoliera, estendono il raggio d'azione senza la resistenza dei serbatoi esterni e lasciano liberi i piloni per l'armamento.",
    },
    {
      icon: "bolt",
      span: 2,
      title: "Caccia, prima di tutto",
      text: "Eredita la cellula e la spinta dell'Eagle: anche a pieno carico d'attacco conserva prestazioni e armamento aria-aria di prim'ordine.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "19,43 m" },
        { k: "Apertura alare", v: "13,05 m" },
        { k: "Altezza", v: "5,63 m" },
        { k: "Superficie alare", v: "56,5 m²" },
        { k: "Peso a vuoto", v: "14.379 kg" },
        { k: "Peso max decollo", v: "36.750 kg" },
        { k: "Carico bellico", v: "~10.400 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.5" },
        { k: "In km/h", v: "~2.650" },
        { k: "Tangenza", v: "+18.200 m" },
        { k: "Rateo di salita", v: "+254 m/s" },
        { k: "Raggio di combatt.", v: "~1.270 km" },
        { k: "Autonomia traghetto", v: "~3.900 km" },
        { k: "Fattore di carico", v: "+9 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× P&W F100-229" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~129 kN" },
        { k: "Serbatoi conformi", v: "2× CFT" },
        { k: "Radar", v: "AN/APG-82 AESA" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Colpi", v: "500" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-82(V)1 AESA",
      text: "Radar a scansione elettronica attiva che mappa il terreno ad alta risoluzione, traccia simultaneamente bersagli aerei e di superficie e guida più armi insieme, sostituendo l'AN/APG-70.",
      meta: { k: "Tipo", v: "AESA multimodo" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Cockpit posteriore del WSO",
      text: "Quattro display multifunzione per radar, contromisure, sensori e armamento: il Weapon Systems Officer si occupa di navigazione e attacco, alleggerendo il pilota nelle missioni più complesse.",
      meta: { k: "Postazione", v: "4× MFD" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Pratt & Whitney F100-PW-229",
      text: "Turbofan con postbruciatore della stessa famiglia che equipaggia l'F-16: spinta sufficiente per decollare a pieno carico bellico e superare comunque Mach 2.",
      meta: { k: "Spinta A/B cad.", v: "~129 kN" },
    },
    {
      icon: "bolt",
      badge: { label: "Puntamento", variant: "cyan" },
      title: "Pod LANTIRN / Sniper",
      text: "Pod di navigazione a infrarossi e di puntamento (oggi il Sniper ATP): volo automatico a bassa quota seguendo il terreno e designazione laser dei bersagli anche di notte.",
      meta: { k: "Capacità", v: "TFR + targeting IR" },
    },
    {
      icon: "plane",
      badge: { label: "Autonomia", variant: "cyan" },
      title: "Serbatoi conformi (CFT)",
      text: "Due serbatoi aderenti alla fusoliera aggiungono carburante e punti d'aggancio senza la resistenza aerodinamica dei serbatoi esterni, estendendo nettamente il raggio d'azione.",
      meta: { k: "Capacità", v: "2× ~2.840 L" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm, ~6.000 colpi/min: l'eredità aria-aria dell'Eagle per il combattimento ravvicinato.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Missile a guida infrarossa per l'autodifesa e il dogfight ad alta manovrabilità.", reach: "~18 km", rangePct: 12 },
    { kind: "Aria-suolo", title: "Bombe di precisione", text: "GBU a guida GPS e laser (Mk 82/84, GBU-12/31/38): il cuore della missione d'attacco di precisione.", reach: "~24 km", rangePct: 26 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva, capace di ingaggio BVR autonomo dopo il lancio.", reach: "100+ km", rangePct: 58 },
    { kind: "Stand-off", title: "AGM-158 JASSM", text: "Missile da crociera stealth aria-superficie per colpire bersagli pesantemente difesi a grande distanza.", reach: "370+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// USAF · 1988", code: "F-15E", text: "La versione statunitense: circa 236 esemplari consegnati dal 1988, cuore della componente d'attacco a lungo raggio dell'Air Force." },
    { sub: "// Israele · 1998", code: "F-15I Ra'am", text: "«Tuono»: 25 esemplari per l'Israeli Air Force, integrati con avionica e sistemi di guerra elettronica nazionali." },
    { sub: "// Corea del Sud · 2005", code: "F-15K Slam Eagle", text: "Oltre 60 velivoli per la Repubblica di Corea, con sensori e armamento aggiornati e ampia capacità stand-off." },
    { sub: "// Arabia Saudita", code: "F-15S / SA", text: "72 F-15S seguiti da 84 nuovi F-15SA con comandi fly-by-wire e radar AESA per la Royal Saudi Air Force." },
    { sub: "// Export", code: "F-15SG / QA", text: "Derivati d'esportazione più recenti, realizzati per Singapore (F-15SG) e Qatar (F-15QA)." },
    { sub: "// 2021", code: "F-15EX Eagle II", text: "L'ultima generazione per l'USAF: fly-by-wire, radar APG-82 AESA, nuova suite EW e capacità di carico ancora maggiore. Primo volo il 2 febbraio 2021." },
  ],

  timeline: [
    { year: "1981", tag: { label: "Origini" }, title: "Il programma Enhanced Tactical Fighter", text: "Negli anni '70 l'F-15 Eagle nasce come puro caccia da superiorità aerea — «not a pound for air-to-ground» — ma McDonnell Douglas vi conserva una capacità d'attacco latente. Nel marzo 1981 l'USAF lancia il programma Enhanced Tactical Fighter (ETF): serve un velivolo capace di interdizione profonda, di notte e con qualsiasi tempo, senza bisogno di scorta." },
    { year: "1984", tag: { label: "Selezione", variant: "gold" }, title: "La vittoria sull'F-16XL", text: "Il 24 febbraio 1984 lo Strike Eagle batte il General Dynamics F-16XL: costi di sviluppo inferiori (270 contro 470 milioni di dollari), maggior margine di crescita e la sicurezza dei due motori decidono la gara. Il nuovo caccia eredita gran parte della cellula dell'F-15D, irrobustita per le missioni a basso livello." },
    { year: "1986", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo Strike Eagle in volo", text: "L'11 dicembre 1986 il primo F-15E decolla. Esternamente quasi identico all'Eagle, all'interno è un altro aereo: cockpit posteriore per il WSO, serbatoi conformi, struttura rinforzata e un sistema d'arma concepito attorno all'attacco di precisione a lungo raggio." },
    { year: "1988–89", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in linea a Seymour Johnson", text: "I primi F-15E arrivano nell'aprile 1988 al 4th Tactical Fighter Wing di Seymour Johnson AFB; la capacità operativa iniziale è dichiarata il 30 settembre 1989. L'Air Force ha finalmente il cacciabombardiere a lungo raggio e ogni-tempo che cercava.", media: { src: "/images/aircraft/f-15e-strike-eagle/f15e-combat-takeoff.jpg", width: 1280, height: 550, alt: "Un F-15E Strike Eagle in decollo a pieno carico", caption: "F-15E in decollo a pieno carico · U.S. Air Force (PD)" } },
    { year: "1991", tag: { label: "Desert Storm", variant: "cyan" }, title: "Il battesimo del fuoco nel Golfo", text: "Nella Guerra del Golfo gli F-15E aprono le ostilità a caccia dei lanciatori mobili di Scud e martellano di notte le forze irachene. Due velivoli vanno perduti; il 14 febbraio 1991 un equipaggio distrugge un elicottero iracheno con una bomba a guida laser GBU-10 — una delle rarissime vittorie aria-aria ottenute con una bomba.", media: { src: "/images/aircraft/f-15e-strike-eagle/f15e-desert-storm-1991.jpg", width: 1280, height: 815, alt: "Formazione di F-16, F-15C e F-15E durante Desert Storm", caption: "F-15E (in alto) con F-16 e F-15C · Desert Storm 1991 · U.S. Air Force (PD)" } },
    { year: "1998–99", tag: { label: "Balcani" }, title: "Desert Fox e Allied Force", text: "Tra il pattugliamento delle no-fly zone irachene e l'operazione Desert Fox (dicembre 1998), lo Strike Eagle affina il proprio ruolo d'attacco di precisione. Nel 1999, sui cieli del Kosovo durante l'operazione Allied Force, contribuisce in modo determinante alla campagna aerea della NATO." },
    { year: "2001", tag: { label: "Enduring Freedom", variant: "cyan" }, title: "I cieli dell'Afghanistan", text: "Dopo l'11 settembre l'F-15E è in prima linea in Afghanistan, dove lunga autonomia e carico di precisione lo rendono ideale per il supporto aereo ravvicinato. Il 391st Fighter Squadron vola la più lunga missione di caccia della storia: 15,5 ore con 12 rifornimenti in volo.", media: { src: "/images/aircraft/f-15e-strike-eagle/f15e-afghanistan.jpg", width: 1280, height: 852, alt: "Un F-15E Strike Eagle in volo sopra l'Afghanistan", caption: "F-15E sui cieli dell'Afghanistan · U.S. Air Force (PD)" } },
    { year: "2003", tag: { label: "Iraqi Freedom", variant: "gold" }, title: "L'invasione dell'Iraq", text: "Nell'operazione Iraqi Freedom gli Strike Eagle colpiscono in profondità giorno e notte: vengono accreditati della distruzione di circa il 60% della Medina Republican Guard e dell'eliminazione a terra di decine di MiG iracheni.", media: { src: "/images/aircraft/f-15e-strike-eagle/f15e-iraq-2004.jpg", width: 1280, height: 817, alt: "Un F-15E Strike Eagle dell'USAF in missione sull'Iraq nel 2004", caption: "F-15E in missione sull'Iraq · 2004 · U.S. Air Force (PD)" } },
    { year: "2014", tag: { label: "Inherent Resolve" }, title: "La campagna contro l'ISIS", text: "Dall'agosto 2014 gli F-15E sono tra i protagonisti della coalizione contro lo Stato Islamico in Iraq e Siria: nei primi mesi arrivano a volare circa il 37% di tutte le sortite dell'USAF nel teatro, a conferma della loro centralità operativa." },
    { year: "2021", tag: { label: "Eagle II", variant: "gold" }, title: "La nuova generazione: F-15EX", text: "A oltre trent'anni dal debutto, la formula resta valida: il 2 febbraio 2021 vola l'F-15EX Eagle II, con comandi fly-by-wire, radar AESA, nuova suite di guerra elettronica e capacità di carico ancora maggiore, destinato ad affiancare e rimpiazzare i più vecchi Eagle dell'USAF.", media: { src: "/images/aircraft/f-15e-strike-eagle/f15ex-eagle-ii.jpg", width: 1280, height: 853, alt: "Un F-15EX Eagle II dell'U.S. Air Force in volo", caption: "F-15EX Eagle II · U.S. Air Force (PD)" } },
  ],

  facts: [
    {
      title: "«Not a pound for air-to-ground»",
      text: "Lo slogan dei progettisti dell'F-15 originale prometteva un caccia puro, senza un grammo dedicato all'attacco al suolo. Lo Strike Eagle ribalta proprio quella filosofia, dimostrando che lo stesso airframe poteva diventare un eccellente cacciabombardiere.",
    },
    {
      title: "La vittoria ottenuta con una bomba",
      text: "Il 14 febbraio 1991 un F-15E abbatté un elicottero iracheno sganciandogli sopra una bomba a guida laser GBU-10: una delle pochissime vittorie aria-aria della storia ottenute senza ricorrere a un missile o al cannone.",
    },
    {
      title: "La missione di caccia più lunga di sempre",
      text: "Durante Enduring Freedom un F-15E del 391st FS rimase in volo 15,5 ore con 12 rifornimenti aerei, stabilendo il record di durata per una missione di caccia — reso possibile dai serbatoi conformi e dall'equipaggio di due.",
    },
    {
      title: "I serbatoi conformi (CFT)",
      text: "Aderenti alla fusoliera, aggiungono carburante e punti d'aggancio senza la resistenza aerodinamica dei serbatoi esterni: estendono il raggio d'azione lasciando liberi i piloni per l'armamento.",
    },
    {
      title: "Una famiglia ancora in espansione",
      text: "Esportato come F-15I, F-15K, F-15S/SA, F-15SG e F-15QA e rilanciato per l'USAF nel nuovo F-15EX Eagle II, lo Strike Eagle è tra i pochi caccia di quarta generazione tuttora in produzione, oltre quarant'anni dopo il primo volo dell'Eagle.",
    },
  ],

};
