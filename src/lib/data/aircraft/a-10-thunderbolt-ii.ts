import type { Aircraft } from "./types";

export const a10Thunderbolt = {
  // ---- catalogo ----
  slug: "a-10-thunderbolt-ii",
  name: "A-10 Thunderbolt II",
  manufacturer: "Fairchild Republic",
  role: "Aereo d'attacco al suolo / supporto aereo ravvicinato",
  country: "USA",
  firstFlight: "1972",
  service: "1977 – oggi",
  status: "in-servizio",
  topSpeed: "~700 km/h",
  unitCost: "≈ 19 mln $ (1994)",
  profile: { velocita: 18, raggio: 50, agilita: 40, carico: 75, furtivita: 5 },
  thumb: "/images/aircraft/a-10-thunderbolt-ii/a10-flight.jpg",
  thumbAlt: "Un A-10 Thunderbolt II «Warthog» in volo",
  model3d: "/models/USA/a-10_thunderbolt_ii.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/a-10-thunderbolt-ii-free-f297968397534b59bd41fe989497ffcb",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Soprannominato «Warthog» (facocero), l'A-10 è un aereo d'attacco al suolo lento, brutto e amatissimo dalle truppe a terra. È letteralmente costruito attorno a un gigantesco cannone anticarro da 30 mm, corazzato per resistere al fuoco nemico e capace di restare a lungo sul campo di battaglia: il re indiscusso del supporto aereo ravvicinato.",

  heroBadges: [
    { label: "In servizio · dal 1977", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Attacco al suolo / CAS" },
    { label: "Origine · USA" },
    { label: "GAU-8 · 30 mm", variant: "gold" },
  ],

  overviewText:
    "Nato dal programma A-X, frutto delle lezioni del Vietnam, l'A-10 doveva essere un aereo d'attacco robusto, economico e specializzato nella distruzione dei carri armati. Il prototipo YA-10 batté il Northrop YA-9 e il velivolo entrò in servizio nel 1977. Tutto, in lui, è subordinato a due principi: la potenza di fuoco — un enorme cannone rotativo GAU-8 — e la sopravvivenza, con una «vasca» di titanio attorno al pilota e sistemi ridondanti. Lento e poco elegante, è però capace di bighellonare sul campo di battaglia e incassare colpi che abbatterebbero qualsiasi jet veloce.",
  armamentText:
    "Il cuore è il cannone da 30 mm; intorno, undici piloni per missili anticarro Maverick, bombe (anche di precisione sulla versione C), razzi e missili AIM-9 per l'autodifesa, fino a ~7.260 kg di carico.",

  bento: [
    {
      icon: "cannon",
      span: 3,
      title: "Il cannone GAU-8 Avenger",
      text: "Un cannone rotativo a 7 canne da 30 mm lungo quanto un'automobile: spara fino a ~3.900 colpi al minuto, anche all'uranio impoverito, contro i blindati. L'aereo è costruito attorno ad esso.",
    },
    {
      icon: "seat",
      span: 3,
      title: "La vasca di titanio",
      text: "Pilota e sistemi vitali sono racchiusi in una corazza di titanio da oltre 500 kg, capace di fermare i colpi della contraerea leggera: l'A-10 è fatto per incassare e tornare a casa.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Motori alti TF34",
      text: "Due turbofan montati in alto sulla coda: ingeriscono meno detriti dalle piste avanzate, sono schermati e riducono la traccia a infrarossi.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Camion da guerra",
      text: "Undici piloni per Maverick, bombe e razzi, e una grande autonomia di volo per restare sul campo in attesa delle chiamate delle truppe.",
    },
    {
      icon: "plane",
      span: 2,
      title: "Robusto e ridondante",
      text: "Può volare con un motore spento, mezza ala o una deriva distrutti: progettato per sopravvivere a danni che abbatterebbero altri aerei.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "16,26 m" },
        { k: "Apertura alare", v: "17,53 m" },
        { k: "Altezza", v: "4,47 m" },
        { k: "Superficie alare", v: "47 m²" },
        { k: "Peso a vuoto", v: "~11.300 kg" },
        { k: "Peso max decollo", v: "~23.000 kg" },
        { k: "Carico bellico", v: "~7.260 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "~700 km/h" },
        { k: "In Mach", v: "~0,56" },
        { k: "Tangenza", v: "~13.700 m" },
        { k: "Raggio (CAS)", v: "~460 km" },
        { k: "Autonomia traghetto", v: "~4.150 km" },
        { k: "Fattore di carico", v: "+7 / −3 g" },
        { k: "Punti d'aggancio", v: "11" },
      ],
    },
    {
      title: "PROPULSIONE & ARMAMENTO",
      rows: [
        { k: "Motori", v: "2× GE TF34-100" },
        { k: "Tipo", v: "Turbofan (no A/B)" },
        { k: "Spinta/cad.", v: "~40 kN" },
        { k: "Cannone", v: "GAU-8/A Avenger" },
        { k: "Calibro", v: "30 mm · 7 canne" },
        { k: "Cadenza", v: "~3.900 c/min" },
        { k: "Munizioni", v: "1.174 colpi" },
      ],
    },
  ],

  systems: [
    {
      icon: "cannon",
      badge: { label: "Armamento", variant: "gold" },
      title: "Cannone GAU-8/A Avenger",
      text: "Un cannone rotativo a 7 canne da 30 mm lungo quanto un'auto: spara fino a ~3.900 colpi al minuto, incluse munizioni all'uranio impoverito capaci di perforare le corazze dei carri. Il velivolo è progettato letteralmente attorno ad esso.",
      meta: { k: "Cadenza", v: "~3.900 c/min" },
    },
    {
      icon: "seat",
      badge: { label: "Sopravvivenza", variant: "cyan" },
      title: "La vasca di titanio",
      text: "Pilota e comandi vitali sono racchiusi in una «vasca» di titanio da oltre 500 kg (spessa fino a 38 mm), capace di fermare i proiettili della contraerea leggera e delle armi portatili.",
      meta: { k: "Corazza", v: "titanio · ~540 kg" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× General Electric TF34",
      text: "Due turbofan ad alto rapporto di diluizione montati in alto sulla coda: ingeriscono meno detriti dalle piste avanzate, sono parzialmente schermati e abbassano la firma a infrarossi.",
      meta: { k: "Spinta cad.", v: "~40 kN" },
    },
    {
      icon: "plane",
      badge: { label: "Robustezza", variant: "cyan" },
      title: "Ridondanza e resistenza ai colpi",
      text: "Doppio impianto idraulico con riserva meccanica manuale, strutture ridondanti e ali robuste: l'A-10 può rientrare con un motore spento, mezza ala o parte della coda mancanti.",
      meta: { k: "Filosofia", v: "incassare e tornare" },
    },
    {
      icon: "bomb",
      badge: { label: "Carico", variant: "gold" },
      title: "Piloni e autonomia sul campo",
      text: "Undici piloni integrano missili anticarro Maverick, bombe (anche di precisione sull'A-10C), razzi e Sidewinder; la grande autonomia gli permette di «bighellonare» sul campo a sostegno delle truppe.",
      meta: { k: "Piloni", v: "11" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GAU-8/A Avenger", text: "Il gigantesco cannone rotativo da 30 mm: l'arma principale, devastante contro mezzi corazzati e blindati leggeri.", reach: "~1,8 km", rangePct: 8 },
    { kind: "Aria-suolo", title: "Bombe e razzi", text: "Bombe non guidate (Mk-82/84), razzi Hydra 70 e munizioni a grappolo per l'appoggio ravvicinato.", reach: "caduta", rangePct: 12 },
    { kind: "Autodifesa", title: "AIM-9 Sidewinder", text: "Due missili aria-aria a infrarossi per l'autodifesa contro minacce aeree.", reach: "~18 km", rangePct: 40 },
    { kind: "Anticarro", title: "AGM-65 Maverick", text: "Missile aria-superficie a guida ottica/infrarossa: l'arma anticarro a distanza di sicurezza dell'A-10.", reach: "~22 km", rangePct: 65 },
    { kind: "Precisione", title: "JDAM / Paveway", text: "Sulla versione A-10C, bombe a guida GPS e laser per colpire bersagli puntiformi con precisione.", reach: "~24 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Originale", code: "A-10A", text: "La versione iniziale: aereo d'attacco diurno con avionica analogica, costruito attorno al cannone." },
    { sub: "// Aggiornata", code: "A-10C", text: "Il grande aggiornamento: cockpit digitale, designatori e armi di precisione (JDAM, Paveway), link dati. È lo standard attuale." },
    { sub: "// Controllo aereo", code: "OA-10A", text: "Esemplari impiegati nel ruolo di controllo aereo avanzato (FAC), per individuare e marcare i bersagli alle altre forze." },
    { sub: "// Notturna", code: "N/AW A-10", text: "Prototipo biposto per l'attacco notturno e ogni-tempo, rimasto allo stadio sperimentale." },
    { sub: "// Rivale", code: "Northrop YA-9", text: "Il concorrente nella gara A-X: l'YA-10 lo batté nel 1973, soprattutto per robustezza, semplicità e sopravvivenza." },
    { sub: "// Ritiro", code: "Verso la pensione", text: "Dopo decenni di tentativi di pensionarlo, l'USAF ne ha avviato il ritiro graduale (atteso entro la fine degli anni 2020), con il ruolo CAS ripartito tra F-35 e droni." },
  ],

  timeline: [
    { year: "1966–72", tag: { label: "Origini" }, title: "Il programma A-X", text: "Dopo le lezioni del Vietnam, l'USAF cerca un aereo d'attacco robusto e specializzato nell'anticarro, non un caccia adattato. Dal programma A-X nasce la sfida tra il Fairchild YA-10 e il Northrop YA-9: il primo volo dell'YA-10 è del 10 maggio 1972." },
    { year: "1977", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Dal 1977 l'A-10 entra in linea con l'USAF, schierato soprattutto in Europa: il suo compito in caso di guerra fredda «calda» sarebbe stato fermare le colonne corazzate sovietiche nel varco di Fulda." },
    { year: "Il cannone", tag: { label: "GAU-8", variant: "gold" }, title: "Costruito attorno a un'arma", text: "Il GAU-8/A Avenger è uno dei cannoni più potenti mai montati su un aereo: 7 canne rotanti da 30 mm, una cadenza di circa 3.900 colpi al minuto e proiettili anticarro. Il caratteristico «brrrt» è diventato leggendario tra le truppe a terra.", media: { src: "/images/aircraft/a-10-thunderbolt-ii/a10-gun-run.jpg", width: 1280, height: 834, alt: "Un A-10 spara il cannone GAU-8 in un «gun run»", caption: "A-10 in azione col cannone GAU-8 · U.S. Air Force (PD)" } },
    { year: "1991", tag: { label: "Desert Storm", variant: "cyan" }, title: "Il trionfo nella Guerra del Golfo", text: "Nella Guerra del Golfo gli A-10 volano migliaia di sortite distruggendo centinaia di carri armati, mezzi e postazioni irachene, con un altissimo tasso di disponibilità. È la consacrazione del «Warthog» come cacciacarri per eccellenza.", media: { src: "/images/aircraft/a-10-thunderbolt-ii/a10-desert-storm.jpg", width: 1280, height: 840, alt: "Un A-10A durante la Guerra del Golfo nel 1991", caption: "A-10A · Desert Storm, 1991 · U.S. Air Force (PD)" } },
    { year: "Sopravvivenza", tag: { label: "Robustezza" }, title: "Tornare a casa malconci", text: "La fama dell'A-10 si costruisce anche sulle storie di velivoli rientrati alla base gravemente danneggiati — ali bucate, un motore in fiamme, parti della coda mancanti — grazie alla vasca di titanio e alla ridondanza dei sistemi." },
    { year: "A-10C", tag: { label: "Aggiornamento", variant: "gold" }, title: "L'era della precisione", text: "Negli anni 2000 l'aggiornamento allo standard A-10C porta cockpit digitale, designatori di bersaglio e armi a guida GPS e laser: il cacciacarri diventa anche una piattaforma d'attacco di precisione.", media: { src: "/images/aircraft/a-10-thunderbolt-ii/a10c-modern.jpg", width: 1280, height: 852, alt: "Un A-10C Thunderbolt II moderno in volo", caption: "A-10C Thunderbolt II · U.S. Air Force (PD)" } },
    { year: "2001–14", tag: { label: "CAS", variant: "cyan" }, title: "Afghanistan, Iraq e ISIS", text: "In Afghanistan, Iraq e nella campagna contro l'ISIS l'A-10 diventa il beniamino delle truppe a terra: la lunga permanenza sul campo, il cannone e i sensori lo rendono insostituibile nelle situazioni di «troops in contact».", media: { src: "/images/aircraft/a-10-thunderbolt-ii/a10-afghanistan.jpg", width: 1280, height: 852, alt: "Due A-10 in missione di combattimento sopra l'Afghanistan", caption: "A-10 in missione sull'Afghanistan · U.S. Air Force (PD)" } },
    { year: "La saga", tag: { label: "Ritiro" }, title: "L'aereo che non si riusciva a pensionare", text: "Più volte l'USAF ha tentato di ritirare l'A-10 per liberare fondi, scontrandosi però con il Congresso e con l'affetto delle forze di terra, convinte che nessun jet veloce o drone possa ancora eguagliarlo nel supporto ravvicinato." },
    { year: "Pensione", tag: { label: "Fine corsa" }, title: "Verso il ritiro", text: "Dopo quasi mezzo secolo, il ritiro del Warthog è infine avviato: la flotta sarà progressivamente radiata verso la fine degli anni 2020, con il ruolo di supporto ravvicinato affidato a F-35, droni e altre piattaforme." },
    { year: "Eredità", tag: { label: "Leggenda" }, title: "Un'icona insostituibile", text: "Lento, spigoloso e amatissimo, l'A-10 lascia un'eredità rara: un aereo nato per un solo scopo — proteggere i soldati a terra — e diventato leggenda proprio per quanto bene lo ha fatto." },
  ],

  facts: [
    {
      title: "Costruito attorno a un cannone",
      text: "Il GAU-8 è così grande che l'intero aereo è stato progettato attorno ad esso: il cannone con il suo tamburo di munizioni pesa quanto una piccola automobile ed è disposto lungo l'asse del velivolo.",
    },
    {
      title: "La vasca di titanio",
      text: "Il pilota siede in una «vasca» di titanio pensata per fermare il fuoco della contraerea: nel corso degli anni numerosi A-10 sono rientrati alla base con danni impressionanti ma equipaggio salvo.",
    },
    {
      title: "Il «brrrt»",
      text: "Il suono del GAU-8 che spara — un caratteristico «brrrt» più simile a uno strappo che a una raffica — è diventato un'icona, segno rassicurante per i soldati a terra e temuto dal nemico.",
    },
    {
      title: "L'aereo che l'USAF non riusciva a pensionare",
      text: "Per anni l'Aeronautica ha cercato di ritirarlo per ragioni di budget, ma il Congresso e le forze di terra lo hanno difeso: pochi mezzi sanno proteggere i soldati come il Warthog.",
    },
    {
      title: "Lento ma temuto",
      text: "Subsonico e tutt'altro che elegante, l'A-10 compensa con potenza di fuoco, corazza e una capacità di restare sul campo di battaglia molto più a lungo dei jet veloci.",
    },
  ],

} satisfies Aircraft;
