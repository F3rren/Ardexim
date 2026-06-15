import type { Aircraft } from "./types";

export const f14Tomcat: Aircraft = {
  // ---- catalogo ----
  slug: "f-14-tomcat",
  name: "F-14 Tomcat",
  manufacturer: "Grumman",
  role: "Caccia da superiorità aerea imbarcato",
  country: "USA",
  firstFlight: "1970",
  service: "1974–2006",
  status: "ritirato",
  topSpeed: "Mach 2.34",
  thumb: "/images/aircraft/f-14-tomcat/f14d-2005.jpg",
  thumbAlt: "F-14D Tomcat in volo sul Golfo Persico",
  // Scarica un modello CC-BY da Sketchfab (glTF/GLB) e salvalo in
  // public/models/f-14-tomcat.glb, poi compila model3dCredit qui sotto.
  model3d: "/models/f-14-tomcat.glb",
  // model3dCredit: { author: "—", url: "—", license: "CC-BY 4.0" },

  // ---- dettaglio ----
  summary:
    "Caccia da superiorità aerea imbarcato, biposto e supersonico, dotato di ali a geometria variabile e del leggendario sistema radar/missile AWG-9 / AIM-54 Phoenix. Per oltre tre decenni, lo scudo della flotta americana.",

  heroBadges: [
    { label: "In servizio 1974–2006", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Superiorità aerea" },
    { label: "Origine · USA" },
    { label: "Mach 2.34", variant: "gold" },
  ],

  overviewText:
    "Nato dal programma VFX dopo il fallimento dell'F-111B, il progetto Grumman G-303 fu selezionato nel gennaio 1969. Il Tomcat unisce raggio d'azione, sensori e potenza di fuoco in una piattaforma pensata per intercettare le minacce a centinaia di chilometri dalla portaerei. Circa il 25% della struttura è in titanio: un esemplare riuscì ad atterrare dopo aver perso oltre metà di un'ala in collisione.",
  armamentText:
    "Fino a 6.600 kg di carico bellico su 10 punti d'aggancio, dal duello ravvicinato all'intercettazione oltre l'orizzonte visivo.",
  operationsText:
    "Dalla copertura delle evacuazioni alle vittorie aria-aria sul Mediterraneo, fino al ruolo da cacciabombardiere «Bombcat»: mezzo secolo di operazioni reali.",
  galleryText:
    "Tre scatti dell'U.S. Navy (pubblico dominio) raccontano l'evoluzione del programma. Scorri per vedere le immagini muoversi.",

  stats: [
    { value: 2485, label: "Vel. max km/h" },
    { value: 2.34, decimals: 2, label: "Mach (a quota)" },
    { value: 6, label: "Phoenix a bordo" },
    { value: 712, label: "Esemplari costruiti" },
  ],

  bento: [
    {
      icon: "wing",
      span: 3,
      title: "Ali a geometria variabile",
      text: "Le ali oscillano automaticamente tra 20° e 68° gestite dal Central Air Data Computer, ottimizzando portanza a bassa velocità e penetrazione supersonica.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar AWG-9",
      text: "Capace di tracciare 24 bersagli simultaneamente e ingaggiarne 6 con i missili a lungo raggio AIM-54, fino a oltre 160 km di distanza.",
    },
    {
      icon: "missile",
      span: 2,
      title: "AIM-54 Phoenix",
      text: "L'unico caccia ad averlo impiegato operativamente: il missile aria-aria a più lungo raggio del suo tempo.",
    },
    {
      icon: "crew",
      span: 2,
      title: "Equipaggio di due",
      text: "Pilota e RIO (Radar Intercept Officer): la gestione condivisa del combattimento BVR ne è il segreto.",
    },
    {
      icon: "carrier",
      span: 2,
      title: "Operazioni imbarcate",
      text: "Catapulta, appontaggio e ali ripiegabili: progettato per vivere sul ponte di una portaerei classe Nimitz.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "19,10 m" },
        { k: "Apertura (estesa)", v: "19,55 m" },
        { k: "Apertura (freccia)", v: "11,58 m" },
        { k: "Altezza", v: "4,88 m" },
        { k: "Superficie alare", v: "52,5 m²" },
        { k: "Peso a vuoto", v: "19.838 kg" },
        { k: "Peso max decollo", v: "33.720 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.34" },
        { k: "In km/h", v: "~2.485" },
        { k: "Tangenza", v: "+15.200 m" },
        { k: "Rateo di salita", v: "+229 m/s" },
        { k: "Raggio intercett.", v: "510 km @ M1.3" },
        { k: "Virata sostenuta", v: "14,3 °/s" },
        { k: "Raggio d'azione", v: "~2.960 km" },
        { k: "Fattore di carico", v: "+7,5 g" },
      ],
    },
    {
      title: "PROPULSIONE",
      rows: [
        { k: "Motori", v: "2× GE F110-400" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~124 kN" },
        { k: "Carburante interno", v: "9.020 L" },
        { k: "Radar", v: "AN/APG-71" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Colpi", v: "675" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-71",
      text: "Radar doppler a lungo raggio con elaborazione digitale, capace di operare in ambienti fortemente disturbati.",
      meta: { k: "Tracce / Ingaggi", v: "24 / 6" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× GE F110-GE-400",
      text: "Turbofan con postbruciatore: affidabili e potenti, eliminarono i problemi di stallo del compressore dei TF30.",
      meta: { k: "Spinta A/B cad.", v: "~124 kN" },
    },
    {
      icon: "cannon",
      badge: { label: "Armamento interno", variant: "cyan" },
      title: "Cannone M61A1 Vulcan",
      text: "Rotativa Gatling a 6 canne integrata nella fusoliera per il combattimento ravvicinato.",
      meta: { k: "Calibro · Cadenza", v: "20 mm · 6.000/min" },
    },
    {
      icon: "seat",
      badge: { label: "Sopravvivenza", variant: "cyan" },
      title: "Seggiolini Martin-Baker",
      text: "Coppia di seggiolini eiettabili GRU-7A con capacità «zero-zero»: eiezione sicura anche da fermo al suolo.",
      meta: { k: "Modalità", v: "0/0 · equipaggio 2" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Computer di volo CADC",
      text: "Il Central Air Data Computer regola automaticamente l'angolo delle ali in base a quota e velocità.",
      meta: { k: "Controllo ali", v: "automatico" },
    },
    {
      icon: "fold",
      badge: { label: "Operazioni navali", variant: "cyan" },
      title: "Ali ripiegabili & gancio",
      text: "Ali ad alta freccia ripiegabili e gancio d'arresto per massimizzare lo spazio sul ponte e l'appontaggio.",
      meta: { k: "Oversweep", v: "75°" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm, 6.000 colpi/min per il combattimento ravvicinato." },
    { kind: "Lungo raggio", title: "AIM-54 Phoenix", text: "Fino a 6 missili, raggio oltre 160 km, guida radar attiva terminale." },
    { kind: "Medio raggio", title: "AIM-7 Sparrow", text: "Missile a guida radar semiattiva per ingaggi BVR a media distanza." },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Cercatore a infrarossi per il dogfight ad alta manovrabilità." },
  ],

  operations: [
    {
      icon: "plane",
      year: "1975",
      title: "Saigon · Frequent Wind",
      text: "Primo impiego reale: i Tomcat forniscono copertura aerea all'evacuazione finale dal Vietnam del Sud.",
      meta: { k: "Ruolo", v: "copertura aerea" },
    },
    {
      icon: "star",
      year: "1981",
      yearVariant: "gold",
      title: "Golfo della Sirte I",
      text: "Primi abbattimenti aria-aria del Tomcat: due Su-22 libici contro due F-14 della VF-41.",
      meta: { k: "Vittorie", v: "2× Su-22" },
    },
    {
      icon: "star",
      year: "1989",
      yearVariant: "gold",
      title: "Golfo della Sirte II",
      text: "Nuovo scontro al largo della Libia: due MiG-23 «Flogger» abbattuti da una coppia di F-14 della VF-32.",
      meta: { k: "Vittorie", v: "2× MiG-23" },
    },
    {
      icon: "clock",
      year: "1980–88",
      yearVariant: "cyan",
      title: "Guerra Iran-Iraq",
      text: "I Tomcat iraniani si rivelano letali: numerose vittorie rivendicate contro MiG-23, MiG-21 e Mirage F1.",
      meta: { k: "Operatore", v: "IRIAF (Iran)" },
    },
    {
      icon: "bars",
      year: "1991",
      yearVariant: "gold",
      title: "Desert Storm",
      text: "Difesa aerea della flotta e ricognizione tattica con pod TARPS. Un F-14 viene abbattuto da un missile SA-2.",
      meta: { k: "Ricognizione", v: "TARPS · 1 perdita" },
    },
    {
      icon: "bomb",
      year: "1995–2006",
      yearVariant: "cyan",
      title: "«Bombcat» · OEF/OIF",
      text: "Con il pod LANTIRN diventa un preciso cacciabombardiere: attacco al suolo in Afghanistan e Iraq fino al ritiro.",
      meta: { k: "Carico", v: "LANTIRN + GBU" },
    },
  ],

  variants: [
    { sub: "// 1974", code: "F-14A", text: "Versione originale con motori Pratt & Whitney TF30, soggetti a stallo del compressore ad alti angoli d'attacco." },
    { sub: "// 1988", code: "F-14B", text: "Adotta i ben più affidabili e potenti turbofan General Electric F110, risolvendo i limiti propulsivi dell'A." },
    { sub: "// 1990", code: "F-14D", text: "Super Tomcat: radar APG-71, avionica digitale e doppio display. La versione definitiva della famiglia." },
    { sub: "// Ricognizione", code: "TARPS", text: "Esemplari adattati al pod Tactical Airborne Reconnaissance Pod System: il Tomcat diventa l'occhio della flotta." },
    { sub: "// Attacco", code: "Bombcat", text: "Configurazione aria-suolo con pod di puntamento LANTIRN e bombe a guida laser, impiegata dalla metà degli anni '90." },
    { sub: "// Mai realizzati", code: "Progetti", text: "F-14B/F401 e F-14C multiruolo, oltre ai derivati Super Tomcat 21 e Quickstrike: proposte avanzate cancellate per costi e fine Guerra Fredda." },
  ],

  timeline: [
    { year: "1970", tag: { label: "Sviluppo", variant: "gold" }, title: "Primo volo", text: "Il 21 dicembre il prototipo decolla da Calverton, New York. Pochi giorni dopo un guasto idraulico ne causa la perdita, ma il programma prosegue." },
    { year: "1974", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il Tomcat entra in linea con la US Navy, imbarcato sulla USS Enterprise: nasce la difesa di flotta a lungo raggio." },
    { year: "1976", tag: { label: "Export" }, title: "Esportazione in Iran", text: "L'Iran imperiale riceve 79 esemplari: gli unici F-14 mai venduti all'estero, tuttora operativi." },
    { year: "1986", tag: { label: "Cultura pop" }, title: "Icona pop · Top Gun", text: "Il film consacra il Tomcat nell'immaginario collettivo come il caccia per eccellenza." },
    { year: "1991", tag: { label: "Upgrade", variant: "gold" }, title: "F-14D Super Tomcat", text: "Nuovi motori GE F110, radar APG-71 e cockpit digitale: la versione definitiva della famiglia." },
    { year: "2006", tag: { label: "Ritiro" }, title: "Ultimo appontaggio", text: "Il 22 settembre la US Navy ritira ufficialmente l'F-14, sostituito dall'F/A-18E/F Super Hornet." },
  ],

  facts: [
    { label: "Costruttore · Grumman", variant: "gold" },
    { label: "Primo volo · 21 dic 1970" },
    { label: "Operatori · USA & Iran", variant: "cyan", dot: true },
    { label: "Esemplari · 712" },
    { label: "Costo unitario · ~38 M$ (1998)" },
    { label: "Equipaggio · 2 (pilota + RIO)" },
    { label: "Punti d'aggancio · 10" },
    { label: "Carico bellico · 6.600 kg", variant: "gold" },
    { label: "Soprannome · «Turkey»" },
    { label: "Film · Top Gun (1986 / 2022)" },
    { label: "Sostituito da · F/A-18E/F" },
    { label: "Anni di servizio · 32", variant: "cyan" },
    { label: "Struttura · 25% titanio" },
    { label: "TF30 · 28% degli incidenti" },
    { label: "Atterrò con metà ala persa", variant: "gold" },
    { label: "Esemplari distrutti nel 2007 (anti-Iran)" },
  ],

  gallery: [
    {
      src: "/images/aircraft/f-14-tomcat/f111b-1965.jpg",
      width: 1280,
      height: 958,
      alt: "Il prototipo General Dynamics F-111B in volo, predecessore navale del programma da cui nacque l'F-14",
      caption: "General Dynamics F-111B · 1965 · U.S. Navy (PD)",
      year: "1965",
      title: "Il predecessore fallito",
      text: "L'F-111B navale, troppo pesante per le portaerei, viene cancellato. Dalle sue ceneri — e dal suo radar e dai missili Phoenix — nasce il programma VFX che porterà al Tomcat.",
      badges: [{ label: "Eredità · AWG-9 + Phoenix" }, { label: "Programma VFX", variant: "gold" }],
    },
    {
      src: "/images/aircraft/f-14-tomcat/yf14-1972.jpg",
      width: 1280,
      height: 856,
      alt: "Formazione di prototipi YF-14A Tomcat in volo intorno al 1972",
      caption: "Prototipi YF-14A in formazione · ~1972 · U.S. Navy (PD)",
      year: "1972",
      title: "I primi Tomcat",
      text: "Dopo il primo volo del 21 dicembre 1970, i prototipi YF-14A solcano il cielo. Il design a geometria variabile e la doppia deriva definiscono una silhouette destinata a diventare leggendaria.",
      badges: [{ label: "Primo volo · 21 dic 1970", variant: "cyan" }, { label: "Ali variabili 20°–68°" }],
    },
    {
      src: "/images/aircraft/f-14-tomcat/f14d-2005.jpg",
      width: 1279,
      height: 924,
      alt: "Un F-14D Tomcat in missione sul Golfo Persico nel 2005, poco prima del ritiro",
      caption: "F-14D sul Golfo Persico · 2005 · U.S. Navy (PD)",
      year: "2005",
      title: "L'ultima stagione",
      text: "Trent'anni dopo, l'F-14D Super Tomcat vola la sua ultima campagna come cacciabombardiere di precisione. Pochi mesi più tardi, nel 2006, la U.S. Navy lo ritira definitivamente.",
      badges: [{ label: "Super Tomcat F-14D", variant: "gold" }, { label: "Ritiro · 2006" }],
    },
  ],
};
