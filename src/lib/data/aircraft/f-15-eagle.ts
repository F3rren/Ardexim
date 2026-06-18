import type { Aircraft } from "./types";

export const f15Eagle = {
  // ---- catalogo ----
  slug: "f-15-eagle",
  name: "F-15 Eagle",
  manufacturer: "McDonnell Douglas / Boeing",
  role: "Caccia da superiorità aerea ogni-tempo",
  country: "USA",
  firstFlight: "1972",
  service: "1976 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.5",
  unitCost: "≈ 30 mln $ (1998)",
  profile: { velocita: 92, raggio: 60, agilita: 84, carico: 40, furtivita: 10 },
  thumb: "/images/aircraft/f-15-eagle/f15c-aim7.jpg",
  thumbAlt: "Un F-15C Eagle lancia un missile AIM-7 Sparrow",
  model3d: "/models/USA/f-15c_eagle.glb",
  model3dCredit: {
    author: "KojfDiscord",
    url: "https://sketchfab.com/3d-models/f-15c-msip-ii-eagle-custom-war-thunder-eb50771c2a43473583a6784716b42587",
    license: "CC BY 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Nato dalle lezioni del Vietnam, l'F-15 Eagle è il caccia da superiorità aerea che ha dominato i cieli per mezzo secolo. Due motori potenti, un rapporto spinta/peso vicino a 1:1, un'ala enorme e un radar a lungo raggio ne fanno una macchina pensata per un solo scopo: vincere il duello aereo prima ancora di vederlo a occhio nudo. Il suo bilancio parla da solo — oltre cento vittorie, nessuna perdita in combattimento aereo.",

  heroBadges: [
    { label: "In servizio · dal 1976", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Superiorità aerea" },
    { label: "Origine · USA" },
    { label: "Mach 2.5", variant: "gold" },
  ],

  overviewText:
    "Negli scontri sui cieli del Vietnam i caccia americani avevano pagato caro l'aver privilegiato la velocità e i missili a scapito della manovrabilità. La risposta fu il programma F-X: un caccia dedicato esclusivamente alla superiorità aerea, secondo lo slogan «not a pound for air-to-ground» — neanche un grammo per l'attacco al suolo. Nel dicembre 1969 l'USAF scelse il progetto McDonnell Douglas: ala generosa per un basso carico alare, due turbofan F100 per una spinta quasi pari al peso e un grande radar capace di scoprire il nemico a grande distanza. Il primo Eagle volò il 27 luglio 1972.",
  armamentText:
    "Un arsenale interamente aria-aria: il missile a guida radar (AIM-7 Sparrow, poi AIM-120 AMRAAM) per il combattimento oltre il raggio visivo, l'AIM-9 Sidewinder per il duello ravvicinato e il cannone M61 per la corta distanza. Fino a otto missili contemporaneamente.",

  bento: [
    {
      icon: "seat",
      span: 3,
      title: "Monoposto da combattimento",
      text: "Nelle versioni A/C un solo pilota gestisce tutto, aiutato dai comandi HOTAS e da un ampio tettuccio a bolla che offre una visibilità eccezionale a 360°: occhi e mani sempre sul nemico.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar a lungo raggio",
      text: "L'AN/APG-63 — oggi aggiornato all'APG-63(V)3 a scansione elettronica attiva — scopre e insegue i bersagli a grande distanza con capacità look-down/shoot-down: il sensore che vince il duello prima del contatto visivo.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Spinta quasi pari al peso",
      text: "Due Pratt & Whitney F100 con postbruciatore danno un rapporto spinta/peso vicino a 1:1: l'Eagle accelera in salita e arrampica come un razzo.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Dominio oltre l'orizzonte",
      text: "Fino a otto missili aria-aria: i radar-guidati Sparrow e AMRAAM per gli ingaggi BVR, i Sidewinder a infrarossi per la corta distanza.",
    },
    {
      icon: "wing",
      span: 2,
      title: "Ala enorme, basso carico alare",
      text: "I 56,5 m² di superficie alare regalano virate sostenute ad alto fattore di carico e una tangenza superiore ai 18.000 metri.",
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
        { k: "Peso a vuoto", v: "~12.700 kg" },
        { k: "Peso max decollo", v: "~30.845 kg" },
        { k: "Armamento A/A", v: "fino a 8 missili" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.5" },
        { k: "In km/h", v: "~2.650" },
        { k: "Tangenza", v: "~20.000 m" },
        { k: "Salita a 9.000 m", v: "~60 s" },
        { k: "Rateo di salita", v: "+254 m/s" },
        { k: "Raggio di combatt.", v: "~1.060 km" },
        { k: "Autonomia traghetto", v: "~5.550 km" },
        { k: "Fattore di carico", v: "+9 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× P&W F100" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~106 kN" },
        { k: "Spinta/peso", v: "~1,07" },
        { k: "Radar", v: "AN/APG-63" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Colpi", v: "940" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-63 → (V)3 AESA",
      text: "Il radar Doppler a impulsi a lungo raggio dell'Eagle scopre bersagli volanti a bassa quota stagliati contro il suolo (look-down/shoot-down). Gli aggiornamenti più recenti — l'APG-63(V)3 a scansione elettronica attiva — ne moltiplicano portata e resistenza ai disturbi.",
      meta: { k: "Tipo", v: "Doppler / AESA" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Cockpit monoposto e HOTAS",
      text: "Comandi raggruppati su manetta e cloche (Hands On Throttle And Stick) permettono di gestire radar e armamento senza staccare le mani dai comandi; il tettuccio a bolla garantisce visibilità totale nel duello.",
      meta: { k: "Equipaggio", v: "1 pilota" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Pratt & Whitney F100",
      text: "I due turbofan con postbruciatore offrono una spinta complessiva quasi pari al peso del velivolo: l'Eagle è capace di accelerare salendo in verticale, un vantaggio decisivo nel combattimento manovrato.",
      meta: { k: "Spinta A/B cad.", v: "~106 kN" },
    },
    {
      icon: "missile",
      badge: { label: "Armi", variant: "cyan" },
      title: "Missili a guida radar",
      text: "L'AIM-7 Sparrow prima e l'AIM-120 AMRAAM poi sono l'arma firma dell'Eagle: ingaggio oltre il raggio visivo, con l'AMRAAM dotato di guida radar attiva «sgancia e dimentica».",
      meta: { k: "Carico", v: "fino a 8 AAM" },
    },
    {
      icon: "wing",
      badge: { label: "Cellula", variant: "cyan" },
      title: "Grande ala e doppia deriva",
      text: "L'ampia ala a basso carico alare e la fusoliera portante regalano virate sostenute e un'eccezionale capacità di salita; le due derive assicurano stabilità anche ad altissimo angolo d'attacco.",
      meta: { k: "Superficie alare", v: "56,5 m²" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm alloggiata nella radice dell'ala destra, ~6.000 colpi/min: l'arma per il combattimento a corta distanza.", reach: "~2 km", rangePct: 3 },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Missile a guida infrarossa per il dogfight: aggancia la traccia termica del bersaglio ad alta manovrabilità.", reach: "~18 km", rangePct: 11 },
    { kind: "Medio raggio", title: "AIM-7 Sparrow", text: "Missile a guida radar semiattiva, arma BVR storica dell'Eagle: richiede l'illuminazione continua del bersaglio da parte del radar di bordo.", reach: "~70 km", rangePct: 44 },
    { kind: "BVR", title: "AIM-120 AMRAAM", text: "Missile a guida radar attiva «sgancia e dimentica»: dopo il lancio insegue il bersaglio in autonomia, lasciando libero il pilota di manovrare o ingaggiare altri obiettivi.", reach: "100+ km", rangePct: 64 },
    { kind: "Lungo raggio", title: "AIM-120D", text: "L'ultima evoluzione dell'AMRAAM, con portata estesa e maggiore precisione terminale per gli ingaggi a distanze ancora più grandi.", reach: "160+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// USAF · 1972", code: "F-15A", text: "La prima versione di serie, monoposto da superiorità aerea: 384 esemplari costruiti, l'Eagle che inaugurò la dinastia." },
    { sub: "// USAF · 1972", code: "F-15B", text: "Versione biposto da addestramento derivata dall'A, con comandi sdoppiati: 61 esemplari, piena capacità di combattimento." },
    { sub: "// USAF · 1979", code: "F-15C", text: "L'Eagle definitivo da superiorità aerea: più carburante interno, avionica e radar potenziati, 483 esemplari. È il modello rappresentato qui." },
    { sub: "// USAF · 1979", code: "F-15D", text: "La controparte biposto del C, stesso sistema d'arma con due posti in tandem: 92 esemplari per addestramento e missioni complesse." },
    { sub: "// Giappone · 1981", code: "F-15J / DJ", text: "Costruito su licenza da Mitsubishi: 139 F-15J monoposto e 37 F-15DJ biposto, spina dorsale della difesa aerea giapponese per decenni." },
    { sub: "// Record · 1975", code: "F-15 Streak Eagle", text: "Un A-model alleggerito di ogni equipaggiamento superfluo: tra il 16 gennaio e il 1° febbraio 1975 frantumò otto record mondiali di salita." },
  ],

  timeline: [
    { year: "1969", tag: { label: "Origini" }, title: "Il programma F-X e le lezioni del Vietnam", text: "Sui cieli del Vietnam i caccia americani, ottimizzati per la velocità e gli intercettori a missili, avevano sofferto contro MiG più piccoli e agili. L'USAF rispose con il programma F-X, alla ricerca di un caccia dedicato unicamente alla superiorità aerea. Nel dicembre 1969 fu scelto il progetto McDonnell Douglas, all'insegna del motto «not a pound for air-to-ground»." },
    { year: "1972", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo Eagle in volo", text: "Il 27 luglio 1972 il prototipo dell'F-15 compì il primo volo a Edwards. Con l'ala enorme, i due grandi turbofan e il muso che ospitava un radar di nuova generazione, era chiaro fin da subito che si trattava di un caccia di rottura rispetto alla generazione precedente.", media: { src: "/images/aircraft/f-15-eagle/f15-banking-pair.jpg", width: 1280, height: 852, alt: "Due F-15 Eagle in volo, uno dei quali in virata", caption: "Coppia di F-15 Eagle in volo · U.S. Air Force (PD)" } },
    { year: "1975", tag: { label: "Record", variant: "gold" }, title: "Lo Streak Eagle e gli otto record di salita", text: "Per dimostrare le doti di accelerazione e salita dell'Eagle, un esemplare alleggerito — lo Streak Eagle — frantumò otto record mondiali di tempo di salita tra il 16 gennaio e il 1° febbraio 1975, battendo persino i primati stabiliti in precedenza da intercettori dedicati.", media: { src: "/images/aircraft/f-15-eagle/f15-streak-eagle.jpg", width: 1280, height: 864, alt: "L'F-15 Streak Eagle dell'U.S. Air Force", caption: "F-15 Streak Eagle · U.S. Air Force (PD)" } },
    { year: "1976", tag: { label: "In servizio", variant: "cyan" }, title: "L'entrata in linea", text: "Il 9 gennaio 1976 i primi F-15 vennero consegnati al 1st Tactical Fighter Wing di Langley AFB. L'Eagle diventava la punta di lancia della superiorità aerea statunitense, un ruolo che avrebbe mantenuto senza rivali per decenni.", media: { src: "/images/aircraft/f-15-eagle/f15-underside.jpg", width: 1280, height: 1028, alt: "Vista dal basso di un F-15 Eagle che mostra l'ampia ala", caption: "La pianta alare dell'Eagle vista da sotto · U.S. Air Force (PD)" } },
    { year: "1979", tag: { label: "Debutto in combattimento" }, title: "La prima vittoria israeliana", text: "L'Israeli Air Force fu il primo utente a portare l'Eagle in combattimento: nel 1979 il pilota Moshe Melnik ottenne la prima vittoria aerea dell'F-15. Era l'inizio di un palmarès che avrebbe fatto degli equipaggi israeliani gli assi assoluti del tipo." },
    { year: "1982", tag: { label: "Valle della Bekaa", variant: "cyan" }, title: "Il dominio sui cieli del Libano", text: "Durante la guerra del Libano del 1982, nell'operazione Mole Cricket 19, gli F-15 e F-16 israeliani annientarono l'aviazione siriana senza subire perdite. All'Eagle vennero accreditate 41 vittorie su velivoli siriani: una dimostrazione schiacciante della superiorità del binomio caccia-radar." },
    { year: "1991", tag: { label: "Desert Storm", variant: "gold" }, title: "Il trionfo nella Guerra del Golfo", text: "Nella Guerra del Golfo gli F-15C dominarono i cieli iracheni: 34 delle vittorie aria-aria confermate furono ottenute dall'Eagle, che da solo si aggiudicò 36 delle 39 vittorie aeree della coalizione. Il caccia da superiorità aerea aveva fatto esattamente ciò per cui era stato concepito.", media: { src: "/images/aircraft/f-15-eagle/f15-desert-storm.jpg", width: 1280, height: 815, alt: "Formazione di F-16, F-15C e F-15E durante Desert Storm", caption: "F-15C (al centro) con F-16 e F-15E · Desert Storm 1991 · U.S. Air Force (PD)" } },
    { year: "2000s", tag: { label: "Aggiornamenti" }, title: "Radar AESA e nuova vita", text: "Per mantenere l'Eagle competitivo, gran parte della flotta F-15C ricevette il radar APG-63(V)3 a scansione elettronica attiva e nuovi sistemi di guerra elettronica. Pur affiancato dall'F-22 Raptor, l'F-15 restò in prima linea ben oltre la sua vita prevista." },
    { year: "2021", tag: { label: "Eredità", variant: "gold" }, title: "Il testimone all'Eagle II", text: "Mentre i più vecchi F-15C/D iniziano il ritiro, la formula dell'Eagle continua: il nuovo F-15EX Eagle II — comandi fly-by-wire, radar AESA, capacità di carico enormemente accresciuta — ne raccoglie l'eredità, a conferma della bontà di un progetto nato cinquant'anni prima." },
  ],

  facts: [
    {
      title: "«Not a pound for air-to-ground»",
      text: "Lo slogan dei progettisti riassumeva la filosofia del programma F-X: un caccia puro da superiorità aerea, senza un solo grammo speso per l'attacco al suolo. Sarà poi lo Strike Eagle, anni dopo, a ribaltare quel principio.",
    },
    {
      title: "Cento vittorie, nessuna perdita",
      text: "Le versioni da superiorità aerea dell'Eagle (A/B/C/D) vantano oltre cento vittorie aria-aria confermate senza aver mai subito una perdita in combattimento aereo: un bilancio senza eguali nella storia dei caccia a reazione.",
    },
    {
      title: "Gli assi sono israeliani",
      text: "Oltre la metà delle vittorie dell'F-15 è stata ottenuta da piloti dell'Israeli Air Force, che hanno trasformato l'Eagle nel cacciatore più letale dei cieli mediorientali a partire dalla fine degli anni '70.",
    },
    {
      title: "L'atterraggio con un'ala sola",
      text: "Nel 1983, sui cieli del Negev, un F-15D israeliano perse quasi tutta l'ala destra in una collisione in volo. Grazie all'enorme portanza della fusoliera e dell'ala superstite, il pilota Zivi Nedivi riuscì incredibilmente a riportarlo a terra atterrando a velocità sostenuta.",
    },
    {
      title: "Più veloce a salire di un razzo",
      text: "Lo Streak Eagle del 1975 raggiunse i 30.000 metri in poco più di tre minuti da fermo, battendo otto record mondiali di tempo di salita — alcuni dei quali fino ad allora detenuti da intercettori specializzati e persino da velivoli sperimentali.",
    },
  ],

} satisfies Aircraft;
