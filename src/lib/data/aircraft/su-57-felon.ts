import type { Aircraft } from "./types";

export const su57Felon: Aircraft = {
  // ---- catalogo ----
  slug: "su-57-felon",
  name: "Su-57 Felon",
  manufacturer: "Sukhoi (UAC)",
  role: "Caccia stealth multiruolo di 5ª generazione",
  country: "Russia",
  firstFlight: "2010",
  service: "2020 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2",
  thumb: "/images/aircraft/su-57-felon/su57-zhuhai-2024.jpg",
  thumbAlt: "Sukhoi Su-57 Felon in dimostrazione al salone di Zhuhai 2024",
  model3d: "/models/RUS/sukhoi_su-57_felon.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/sukhoi-su-57-felon-fighter-jet-free-59995d6f34ba4bb7990195be3a745fc5",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Primo caccia stealth operativo russo, il Su-57 è un velivolo multiruolo di quinta generazione nato dal programma PAK FA. Unisce furtività, supercrociera, spinta vettoriale e una suite di sensori a fusione dati per contendere la superiorità aerea ai pari occidentali F-22 ed F-35.",

  heroBadges: [
    { label: "In servizio · dal 2020", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Stealth multiruolo" },
    { label: "Origine · Russia" },
    { label: "Mach 2", variant: "gold" },
  ],

  overviewText:
    "Avviato alla fine degli anni '90 come PAK FA (sigla interna T-50) per rimpiazzare Su-27 e MiG-29, il programma vede il primo volo il 29 gennaio 2010. Dopo uno sviluppo lungo e segnato da problemi ai motori e ritardi, l'aereo riceve la designazione Su-57 nel 2017 ed entra in servizio nel dicembre 2020. Privilegia furtività frontale, velocità e una manovrabilità estrema garantita dagli ugelli a spinta vettoriale, più che l'invisibilità totale dei progetti statunitensi.",
  armamentText:
    "Armi alloggiate in due grandi stive ventrali (più due laterali) per preservare la furtività — dal cannone da 30 mm ai missili a lunghissima gittata — con possibilità di carichi esterni quando la furtività non è prioritaria.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Furtività (stealth)",
      text: "Materiali e rivestimenti radar-assorbenti, prese d'aria a S e bordi allineati riducono drasticamente la traccia radar; l'armamento viaggia nelle stive interne.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar N036 Byelka AESA",
      text: "Un array frontale in banda X affiancato da antenne laterali e da trasmettitori in banda L sui bordi alari: ampio campo di scansione e fusione dei dati dei sensori.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Spinta vettoriale 3D",
      text: "Ugelli orientabili inclinati per manovre estreme e supercrociera a Mach 1.3 senza ricorrere al postbruciatore.",
    },
    {
      icon: "bolt",
      span: 2,
      title: "Sensori 101KS «Atoll»",
      text: "Suite elettro-ottica con IRST e — primo caccia al mondo — contromisure laser DIRCM contro i missili a guida infrarossa.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Missili a lunga gittata",
      text: "L'R-37M permette di ingaggiare bersagli ad altissima distanza (oltre 300 km) a velocità ipersonica.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "20,1 m" },
        { k: "Apertura alare", v: "14,1 m" },
        { k: "Altezza", v: "4,8 m" },
        { k: "Superficie alare", v: "~78,8 m²" },
        { k: "Peso a vuoto", v: "~18.000 kg" },
        { k: "Peso max decollo", v: "~35.000 kg" },
        { k: "Carico bellico", v: "~10.000 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2" },
        { k: "In km/h", v: "~2.450" },
        { k: "Supercrociera", v: "Mach 1.3" },
        { k: "Tangenza", v: "+20.000 m" },
        { k: "Rateo di salita", v: "~330 m/s" },
        { k: "Raggio di combatt.", v: "~1.500 km" },
        { k: "Fattore di carico", v: "+9 g" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× AL-41F1 (izd.117)" },
        { k: "Tipo", v: "Turbofan A/B + TVC" },
        { k: "Spinta/cad. (A/B)", v: "~147 kN" },
        { k: "Motori futuri", v: "AL-51F (izd.30)" },
        { k: "Radar", v: "N036 Byelka AESA" },
        { k: "Cannone", v: "GSh-30-1 30mm" },
        { k: "Colpi", v: "150" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar N036 Byelka AESA",
      text: "Suite radar a scansione elettronica attiva multibanda: l'array frontale in banda X integra due antenne laterali e trasmettitori in banda L sui bordi d'attacco alari, per ampia copertura e detezione anche di bersagli a bassa osservabilità.",
      meta: { k: "Moduli T/R", v: "1.514 (frontale)" },
    },
    {
      icon: "bolt",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Sistema 101KS «Atoll»",
      text: "Suite elettro-ottica distribuita: ricerca e inseguimento a infrarossi (IRST), allarme di avvicinamento missili e — primo caccia al mondo — contromisure laser direzionali (DIRCM).",
      meta: { k: "Tipo", v: "IRST + DIRCM" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Saturn AL-41F1 con TVC",
      text: "Turbofan con ugelli a spinta vettoriale inclinati: manovrabilità estrema e supercrociera a Mach 1.3; in sviluppo i nuovi AL-51F (izdeliye 30), più potenti ed efficienti.",
      meta: { k: "Spinta A/B cad.", v: "~147 kN" },
    },
    {
      icon: "plane",
      badge: { label: "Bassa osservabilità", variant: "cyan" },
      title: "Cellula stealth",
      text: "Materiali e rivestimenti radar-assorbenti, condotti dei motori a S e armamento interno riducono la traccia radar a una frazione di quella di un Su-27.",
      meta: { k: "RCS stimata", v: "~0,1–0,5 m²" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Avionica modulare integrata",
      text: "Architettura a moduli con oltre 4 milioni di righe di codice: fonde radar, sensori a infrarossi e guerra elettronica in un unico quadro tattico, riducendo il carico di lavoro del pilota.",
      meta: { k: "Software", v: "4M+ righe" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GSh-30-1", text: "Cannone automatico da 30 mm con 150 colpi, alloggiato internamente per il combattimento ravvicinato.", reach: "~1,8 km", rangePct: 3 },
    { kind: "Corto raggio", title: "R-74M2", text: "Missile aria-aria a guida infrarossa ad alta agilità per il dogfight.", reach: "~40 km", rangePct: 14 },
    { kind: "Aria-suolo", title: "Kh-38M / KAB", text: "Missili e bombe di precisione (Kh-38M, KAB-250/500) trasportati nelle stive interne per non compromettere la furtività.", reach: "~40 km", rangePct: 22 },
    { kind: "Medio raggio", title: "R-77M", text: "Missile aria-aria a guida radar attiva con cercatore AESA, per ingaggi BVR oltre l'orizzonte visivo.", reach: "~190 km", rangePct: 56 },
    { kind: "Lungo raggio", title: "R-37M", text: "Missile a lunghissima gittata e velocità ipersonica (~Mach 6) contro bersagli ad alto valore a grande distanza.", reach: "300+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// 2020", code: "Su-57", text: "La versione di serie monoposto in servizio nella VKS russa dal dicembre 2020: il primo caccia stealth operativo russo." },
    { sub: "// Export", code: "Su-57E", text: "Variante d'esportazione con IFF e interfacce adattate. L'Algeria è il primo cliente estero (contratto 2019, prime consegne dal 2025)." },
    { sub: "// 2026", code: "Su-57 biposto", text: "Configurazione biposto in tandem per addestramento e missioni specializzate: primo rullaggio nel maggio 2026." },
    { sub: "// Sviluppo", code: "Su-57M", text: "Aggiornamento con i nuovi motori AL-51F (izdeliye 30), avionica e armamento potenziati: la seconda fase del programma." },
    { sub: "// Cancellato", code: "FGFA", text: "Il derivato indo-russo sviluppato con HAL per l'India, allo studio per anni e poi abbandonato nel 2018." },
    { sub: "// Drone gregario", code: "S-70 «teaming»", text: "L'impiego in coppia con il drone stealth S-70 Okhotnik in logica loyal wingman, uno degli assi dello sviluppo futuro del Felon." },
  ],

  timeline: [
    { year: "1999–2002", tag: { label: "Origini" }, title: "Il programma PAK FA", text: "Alla fine degli anni '90 la Russia avvia il programma PAK FA per un caccia di quinta generazione che sostituisca Su-27 e MiG-29. Nel 2002 l'ufficio di progettazione Sukhoi è scelto come capofila; il progetto interno prende la sigla T-50." },
    { year: "2010", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo volo del T-50", text: "Il 29 gennaio 2010 il dimostratore T-50 compie il primo volo a Komsomolsk-on-Amur. È il primo velivolo stealth progettato in Russia, frutto di un decennio di lavoro e destinato a una gestazione ancora lunga.", media: { src: "/images/aircraft/su-57-felon/t50-flight-2013.jpg", width: 1280, height: 854, alt: "Il prototipo Sukhoi T-50 «52» in mostra", caption: "Prototipo T-50 (PAK FA) «52» · 2013 · Alan Wilson (CC BY-SA 2.0)" } },
    { year: "2011", tag: { label: "MAKS", variant: "cyan" }, title: "Il debutto pubblico e i problemi ai motori", text: "Nell'agosto 2011 il T-50 è presentato al salone aerospaziale MAKS di Mosca. Lo sviluppo è però complesso: i primi motori AL-41F1 mostrano limiti e durante una dimostrazione un esemplare subisce uno stallo del compressore al decollo.", media: { src: "/images/aircraft/su-57-felon/t50-maks-2013.jpg", width: 1280, height: 853, alt: "Sukhoi T-50 al salone MAKS 2013", caption: "T-50 (PAK FA) al MAKS · 2013 · Doomych (pubblico dominio)" } },
    { year: "2017", tag: { label: "Designazione" }, title: "Nasce il nome «Su-57»", text: "Nell'agosto 2017 il velivolo riceve la designazione ufficiale Su-57. È in questa fase che il programma passa dai prototipi T-50 alla configurazione destinata alla produzione di serie." },
    { year: "2018", tag: { label: "Siria", variant: "cyan" }, title: "Il debutto in Siria", text: "Nel febbraio 2018 due prototipi vengono schierati alla base di Khmeimim, in Siria, per una breve campagna di prova in ambiente operativo; nel maggio 2018 il Su-57 lancia per la prima volta un missile da crociera in combattimento." },
    { year: "2019", tag: { label: "Produzione" }, title: "Serie di produzione e un incidente", text: "Avviata la produzione di serie nel 2019, a dicembre il primo esemplare destinato alle forze armate precipita durante un volo di collaudo, ritardando la prima consegna ufficiale." },
    { year: "2020", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il 25 dicembre 2020 il primo Su-57 di serie viene consegnato alle forze aerospaziali russe (VKS): la Russia ha finalmente il suo primo caccia stealth operativo.", media: { src: "/images/aircraft/su-57-felon/su57-army-2022.jpg", width: 1200, height: 800, alt: "Un Su-57 di serie esposto al forum Army-2022", caption: "Su-57 di serie · forum Army-2022 · Boevaya mashina (CC BY-SA 3.0)" } },
    { year: "2022", tag: { label: "Ucraina", variant: "gold" }, title: "L'impiego in Ucraina", text: "Dal 2022 il Su-57 è impiegato nel conflitto in Ucraina, soprattutto in ruoli di soppressione delle difese aeree (SEAD) e con lanci di missili stand-off da spazi aerei sicuri, per limitare l'esposizione di un mezzo prezioso e prodotto in pochi esemplari." },
    { year: "2024–25", tag: { label: "Export", variant: "gold" }, title: "Il primo cliente estero", text: "L'esportazione decolla: l'Algeria diventa il primo cliente estero del Su-57E, con prime consegne riportate dal 2025, mentre il velivolo viene presentato nei grandi saloni internazionali come quello di Zhuhai 2024.", media: { src: "/images/aircraft/su-57-felon/su57-display-2024.jpg", width: 1280, height: 853, alt: "Sukhoi Su-57 in dimostrazione al salone di Zhuhai 2024", caption: "Su-57 al salone di Zhuhai · 2024 · N509FZ (CC BY-SA 4.0)" } },
    { year: "2026", tag: { label: "Biposto" }, title: "Verso la versione biposto", text: "Lo sviluppo continua: nel maggio 2026 effettua il primo rullaggio la versione biposto in tandem, pensata per l'addestramento e per ruoli specializzati come il controllo dei droni gregari." },
  ],

  facts: [
    {
      title: "PAK FA: un decennio (e oltre) di gestazione",
      text: "Dal lancio del programma (fine anni '90) al primo volo (2010) all'entrata in servizio (2020) sono passati oltre vent'anni: lo sviluppo è stato segnato da problemi ai motori, ritardi e sanzioni internazionali.",
    },
    {
      title: "Stealth «alla russa»",
      text: "Il Su-57 privilegia furtività frontale, velocità e manovrabilità rispetto all'invisibilità totale: la sezione radar stimata (~0,1–0,5 m²) è superiore a quella di F-22 ed F-35, ma molto inferiore a quella dei caccia delle generazioni precedenti.",
    },
    {
      title: "La carta della manovrabilità",
      text: "Grazie agli ugelli a spinta vettoriale 3D può eseguire manovre estreme a bassissima velocità, come il Cobra di Pugaciov, mantenendo il controllo dove altri caccia stallerebbero.",
    },
    {
      title: "Primo al mondo con il DIRCM",
      text: "Il sistema 101KS «Atoll» rende il Su-57 il primo caccia a integrare contromisure laser direzionali (DIRCM), capaci di «accecare» i sensori dei missili a guida infrarossa in arrivo.",
    },
    {
      title: "Pochi esemplari, grande valore",
      text: "Prodotto finora in poche decine di unità, viene impiegato con cautela: in Ucraina opera soprattutto a distanza di sicurezza, segno di quanto la Russia tenga a preservare il suo caccia più avanzato.",
    },
  ],

};
