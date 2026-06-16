import type { Aircraft } from "./types";

export const f35LightningII: Aircraft = {
  // ---- catalogo ----
  slug: "f-35-lightning-ii",
  name: "F-35 Lightning II",
  manufacturer: "Lockheed Martin",
  role: "Caccia stealth multiruolo di 5ª generazione",
  country: "USA",
  firstFlight: "2006",
  service: "2015 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 1.6",
  unitCost: "≈ 82 mln $ (2024)",
  thumb: "/images/aircraft/f-35-lightning-ii/f35a-flight.jpg",
  thumbAlt: "Un F-35A Lightning II in volo",
  model3d: "/models/USA/f-35_lightning_ii.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/f-35-lightning-ii-fighter-jet-free-b1ab1c0090e34b0fbfe667e706023e6d",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Nato dal programma Joint Strike Fighter, l'F-35 è un caccia stealth di quinta generazione costruito in tre versioni (terrestre, a decollo verticale e imbarcata) da un'unica base comune. Più che un caccia, è un nodo di rete volante: fonde i dati di radar, sensori a infrarossi e guerra elettronica in un quadro tattico unico, proiettato sul casco del pilota. È ormai lo standard delle aeronautiche occidentali.",

  heroBadges: [
    { label: "In servizio · dal 2015", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Stealth multiruolo" },
    { label: "Origine · USA" },
    { label: "Mach 1.6", variant: "gold" },
  ],

  overviewText:
    "Il programma Joint Strike Fighter cercava un unico caccia stealth «conveniente» capace di soddisfare Aeronautica, Marines e Marina americane e i partner alleati. Il dimostratore Lockheed X-35 batté il Boeing X-32 nel 2001 e l'F-35A compì il primo volo il 15 dicembre 2006. Ne nascono tre versioni che condividono la stessa filosofia ma solo una parte della struttura: A convenzionale, B a decollo corto e atterraggio verticale, C imbarcata. La vera rivoluzione non è la velocità, ma la fusione dei sensori e la connettività: l'F-35 «vede» e condivide il campo di battaglia come nessun caccia prima.",
  armamentText:
    "Armi nelle stive interne per restare furtivo (missili aria-aria e bombe di precisione), oppure piloni esterni in «beast mode» quando la furtività non serve, per un carico fino a ~8.000 kg. L'F-35A è anche certificato per la bomba nucleare B61-12.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Stealth di 5ª generazione",
      text: "Forma a bassa osservabilità, prese d'aria senza deviatore (DSI), materiali radar-assorbenti e armi nelle stive interne: una traccia radar minima per penetrare le difese moderne.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Sensori fusi sul casco",
      text: "Radar AESA, sei telecamere a infrarossi (DAS) per la visione a 360° ed EOTS: tutto è fuso e proiettato sul casco del pilota. Niente HUD tradizionale.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Il motore più potente",
      text: "Un solo Pratt & Whitney F135 da ~191 kN: il turbofan più potente mai montato su un caccia, con la variante a ventola di sollevamento per l'atterraggio verticale.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Stive interne + «beast mode»",
      text: "Furtivo con le armi interne, oppure carico massiccio su piloni esterni quando il dominio dei cieli è già assicurato.",
    },
    {
      icon: "star",
      span: 2,
      title: "Lo standard occidentale",
      text: "Oltre 1.000 esemplari e una platea di alleati senza pari: l'F-35 è diventato la spina dorsale della potenza aerea NATO.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI (F-35A)",
      rows: [
        { k: "Lunghezza", v: "15,67 m" },
        { k: "Apertura alare", v: "10,7 m" },
        { k: "Altezza", v: "4,38 m" },
        { k: "Superficie alare", v: "42,7 m²" },
        { k: "Peso a vuoto", v: "~13.300 kg" },
        { k: "Peso max decollo", v: "~31.800 kg" },
        { k: "Carico bellico", v: "~8.160 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 1.6" },
        { k: "In km/h", v: "~1.960" },
        { k: "Tangenza", v: "~15.000 m" },
        { k: "Raggio di combatt.", v: "~1.100 km" },
        { k: "Fattore di carico", v: "+9 g (A)" },
        { k: "Equipaggio", v: "1 pilota" },
        { k: "Versioni", v: "A / B / C" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motore", v: "1× P&W F135" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta (A/B)", v: "~191 kN" },
        { k: "Spinta a secco", v: "~125 kN" },
        { k: "Radar", v: "AN/APG-81 AESA" },
        { k: "Sensori", v: "DAS + EOTS" },
        { k: "Cannone", v: "GAU-22/A 25mm" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-81 AESA",
      text: "Radar a scansione elettronica attiva con modalità aria-aria e aria-suolo simultanee, mappatura del terreno ad alta risoluzione e funzioni di guerra elettronica integrate.",
      meta: { k: "Tipo", v: "AESA" },
    },
    {
      icon: "computer",
      badge: { label: "Fusione dati", variant: "cyan" },
      title: "DAS, EOTS e casco HMDS",
      text: "Sei telecamere a infrarossi (DAS) danno una visione a 360°, l'EOTS individua e illumina i bersagli; tutto è fuso e proiettato sul casco, che permette al pilota di «guardare attraverso» l'aereo. Nessun HUD tradizionale.",
      meta: { k: "Visione", v: "360° sul casco" },
    },
    {
      icon: "plane",
      badge: { label: "Bassa osservabilità", variant: "cyan" },
      title: "Furtività di quinta generazione",
      text: "Forma stealth, prese d'aria DSI senza deviatore, materiali radar-assorbenti e armamento interno riducono la traccia radar al minimo, per operare nei cieli più contesi.",
      meta: { k: "Configurazione", v: "armi interne" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "Pratt & Whitney F135",
      text: "Il turbofan più potente mai montato su un caccia (~191 kN con postbruciatore); nella variante con ventola di sollevamento consente all'F-35B il decollo corto e l'atterraggio verticale.",
      meta: { k: "Spinta A/B", v: "~191 kN" },
    },
    {
      icon: "bomb",
      badge: { label: "Armamento", variant: "gold" },
      title: "Stive interne + «beast mode»",
      text: "In configurazione stealth porta missili e bombe nelle stive interne; quando la furtività non serve aggiunge piloni esterni («beast mode») per un carico molto maggiore.",
      meta: { k: "Carico", v: "~8.160 kg" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GAU-22/A 25mm", text: "Cannone rotativo da 25 mm (interno sull'F-35A, in pod su B e C) per il combattimento ravvicinato e l'appoggio.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9X Sidewinder", text: "Missile aria-aria a guida infrarossa ad alta agilità, integrato col casco per il puntamento fuori asse.", reach: "~30 km", rangePct: 14 },
    { kind: "Aria-suolo", title: "JDAM / SDB / Paveway", text: "Bombe a guida GPS e laser nelle stive interne, incluse le Small Diameter Bomb per colpire più bersagli in una sortita.", reach: "~28 km", rangePct: 22 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR, trasportato nelle stive interne senza intaccare la furtività.", reach: "~100 km", rangePct: 50 },
    { kind: "Stand-off", title: "AGM-158 JASSM / JSM", text: "Con armi stand-off (e in «beast mode») colpisce bersagli pesantemente difesi a grande distanza, anche navali con il Joint Strike Missile.", reach: "370+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// USAF", code: "F-35A", text: "Versione a decollo e atterraggio convenzionale (CTOL): la più diffusa, con cannone interno e capacità nucleare (B61-12)." },
    { sub: "// Marines", code: "F-35B", text: "Versione STOVL a decollo corto e atterraggio verticale grazie alla ventola di sollevamento: opera da navi d'assalto e portaerei leggere." },
    { sub: "// Navy", code: "F-35C", text: "Versione imbarcata con ali più grandi e ripiegabili, carrello rinforzato e gancio per catapulta e appontaggio sulle portaerei della US Navy." },
    { sub: "// Israele", code: "F-35I Adir", text: "Versione israeliana con sistemi elettronici e di guerra elettronica nazionali; la prima a impiegare l'F-35 in combattimento, nel 2018." },
    { sub: "// Dimostratore", code: "X-35", text: "Il prototipo che nel 2001 vinse la gara JSF contro il Boeing X-32, anticipando in un solo progetto le tre configurazioni poi divise in A, B e C." },
    { sub: "// Futuro", code: "Block 4 / TR-3", text: "Il grande aggiornamento — nuovo processore TR-3, nuovi sensori e armi — che terrà l'F-35 al vertice nei decenni a venire." },
  ],

  timeline: [
    { year: "1993–2001", tag: { label: "Origini" }, title: "Il programma Joint Strike Fighter", text: "Negli anni '90 gli Stati Uniti fondono diversi progetti in un unico programma, il Joint Strike Fighter, per un caccia stealth comune a più forze armate e ai partner alleati. Nell'ottobre 2001 il dimostratore Lockheed X-35 batte il Boeing X-32 e vince la gara." },
    { year: "2006", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo volo dell'F-35A", text: "Il 15 dicembre 2006 l'F-35A compie il primo volo. Inizia un lungo e costoso sviluppo, segnato da ritardi e revisioni, per portare a maturità le tre versioni e la loro complessa avionica." },
    { year: "Tre in uno", tag: { label: "Varianti", variant: "cyan" }, title: "Un programma, tre aerei", text: "Dalla stessa base nascono tre versioni: A convenzionale per le aeronautiche, B a decollo corto/atterraggio verticale per i Marines, C imbarcata per la Marina. Condividono filosofia e sistemi, ma solo circa un quarto delle parti.", media: { src: "/images/aircraft/f-35-lightning-ii/f35-variants-trio.jpg", width: 1280, height: 914, alt: "Le tre varianti F-35 A, B e C in formazione", caption: "Le tre varianti F-35A/B/C · Eglin AFB, 2014 · U.S. Air Force (PD)" } },
    { year: "STOVL", tag: { label: "F-35B" }, title: "Il decollo corto e l'atterraggio verticale", text: "La variante B integra una ventola di sollevamento azionata dal motore: può decollare in pochi metri e atterrare in verticale come un elicottero, operando da navi d'assalto e portaerei leggere prive di catapulta.", media: { src: "/images/aircraft/f-35-lightning-ii/f35b-vertical.jpg", width: 1280, height: 852, alt: "Un F-35B in atterraggio verticale", caption: "F-35B in atterraggio verticale · U.S. Navy (PD)" } },
    { year: "2015–16", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il primo a diventare operativo è l'F-35B dei Marines (luglio 2015), seguito dall'F-35A dell'USAF (agosto 2016) e dall'F-35C della Marina (2019). Il caccia inizia a sostituire una lunga lista di velivoli più vecchi." },
    { year: "Sensori", tag: { label: "Fusione dati", variant: "gold" }, title: "Più sensore che caccia", text: "La vera arma dell'F-35 è la fusione dei dati: radar AESA, visione a infrarossi a 360° (DAS), EOTS e guerra elettronica confluiscono in un unico quadro condiviso in rete con le altre forze. Il pilota lo vede tutto sul casco." },
    { year: "2018", tag: { label: "Combattimento", variant: "cyan" }, title: "Il battesimo del fuoco", text: "Israele è il primo Paese a impiegare l'F-35 in combattimento, nel 2018, con la sua versione nazionale «Adir». Negli anni seguenti il caccia entra in linea e in operazione in un numero crescente di aeronautiche." },
    { year: "Italia", tag: { label: "Cameri · Leonardo" }, title: "Il polo europeo di Cameri", text: "L'Italia ospita a Cameri (gestito da Leonardo) l'unica linea di assemblaggio finale dell'F-35 in Europa, dove si producono anche le ali. È l'unico Paese europeo a operare entrambe le versioni A e B, quest'ultima imbarcata sulla portaerei Cavour.", media: { src: "/images/aircraft/f-35-lightning-ii/f35-italian.jpg", width: 1280, height: 853, alt: "F-35 dell'Aeronautica Militare italiana", caption: "F-35 dell'Aeronautica Militare italiana · U.S. Air Force (PD)" } },
    { year: "Standard NATO", tag: { label: "Diffusione", variant: "gold" }, title: "La spina dorsale alleata", text: "Con oltre mille esemplari costruiti e una dozzina di nazioni utilizzatrici, l'F-35 è diventato il caccia di riferimento del mondo occidentale, integrando in un'unica flotta interoperabile gli alleati NATO e del Pacifico.", media: { src: "/images/aircraft/f-35-lightning-ii/f35-dubai-2023.jpg", width: 1280, height: 852, alt: "Un F-35A in volo dimostrativo al Dubai Airshow 2023", caption: "F-35A in dimostrazione · Dubai Airshow 2023 · U.S. Air Force (PD)" } },
    { year: "Costi e futuro", tag: { label: "Programma" }, title: "Il programma più costoso di sempre", text: "L'F-35 è il programma d'arma più costoso della storia (con un costo del ciclo di vita stimato attorno ai 2.000 miliardi di dollari) e ha subìto critiche per ritardi e spese. Gli aggiornamenti Block 4 / TR-3 puntano a mantenerlo centrale ancora per decenni." },
  ],

  facts: [
    {
      title: "Un programma, tre aerei",
      text: "A, B e C condividono la stessa idea ma solo circa un quarto delle parti: ciascuna è adattata a chi la usa — Aeronautica (convenzionale), Marines (decollo verticale) e Marina (portaerei).",
    },
    {
      title: "Più sensore che caccia",
      text: "L'F-35 fonde radar, visione a infrarossi a 360°, EOTS e guerra elettronica in un'unica immagine mostrata sul casco (che costa circa 400.000 dollari): è un nodo di rete tanto quanto un velivolo da combattimento.",
    },
    {
      title: "L'Italia lo costruisce",
      text: "Lo stabilimento Leonardo di Cameri è l'unica linea di assemblaggio finale dell'F-35 in Europa; l'Italia è anche l'unico Paese europeo a operare sia la versione A sia la B, imbarcata sulla portaerei Cavour.",
    },
    {
      title: "Il più costoso di sempre",
      text: "Tra sviluppo, acquisto e mantenimento, l'F-35 è il programma d'arma più costoso della storia: criticato per ritardi e costi, ma con oltre mille esemplari è ormai lo standard occidentale.",
    },
    {
      title: "Anche vettore nucleare",
      text: "Dal 2023 l'F-35A è certificato per trasportare la bomba nucleare B61-12: un caccia stealth che diventa anche strumento della deterrenza.",
    },
  ],

};
