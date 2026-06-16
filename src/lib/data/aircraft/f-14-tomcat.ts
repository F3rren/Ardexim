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
  unitCost: "≈ 38 mln $ (1998)",
  profile: { velocita: 88, raggio: 70, agilita: 60, carico: 70, furtivita: 10 },
  thumb: "/images/aircraft/f-14-tomcat/f14d-2005.jpg",
  thumbAlt: "F-14D Tomcat in volo sul Golfo Persico",
  // Scarica un modello CC-BY da Sketchfab (glTF/GLB) e salvalo in
  // public/models/f-14-tomcat.glb, poi compila model3dCredit qui sotto.
  model3d: "/models/USA/f-14-tomcat.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/f-14-tomcat-fighter-jet-free-497f77c311b5411d9b567d8707a81c33",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Caccia da superiorità aerea imbarcato, biposto e supersonico, dotato di ali a geometria variabile e del leggendario sistema radar/missile AWG-9 / AIM-54 Phoenix. Per oltre tre decenni, lo scudo della flotta americana.",

  heroBadges: [
    { label: "Ritirato · 1974–2006", variant: "danger", dot: true },
    { label: "Ruolo · Superiorità aerea" },
    { label: "Origine · USA" },
    { label: "Mach 2.34", variant: "gold" },
  ],

  overviewText:
    "Nato dal programma VFX dopo il fallimento dell'F-111B, il progetto Grumman G-303 fu selezionato nel gennaio 1969. Il Tomcat unisce raggio d'azione, sensori e potenza di fuoco in una piattaforma pensata per intercettare le minacce a centinaia di chilometri dalla portaerei. Circa il 25% della struttura è in titanio: un esemplare riuscì ad atterrare dopo aver perso oltre metà di un'ala in collisione.",
  armamentText:
    "Fino a 6.600 kg di carico bellico su 10 punti d'aggancio, dal duello ravvicinato all'intercettazione oltre l'orizzonte visivo.",

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
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm, 6.000 colpi/min per il combattimento ravvicinato.", reach: "~2 km", rangePct: 6 },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Cercatore a infrarossi per il dogfight ad alta manovrabilità.", reach: "~18 km", rangePct: 18 },
    { kind: "Medio raggio", title: "AIM-7 Sparrow", text: "Missile a guida radar semiattiva per ingaggi BVR a media distanza.", reach: "~70 km", rangePct: 45 },
    { kind: "Lungo raggio", title: "AIM-54 Phoenix", text: "Fino a 6 missili, guida radar attiva terminale: il missile aria-aria a più lunga gittata del suo tempo.", reach: "160+ km", rangePct: 100 },
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
    { year: "1968", tag: { label: "Origini" }, title: "Dal fallimento dell'F-111B al VFX", text: "La US Navy voleva un intercettore navale a lungo raggio, ma l'F-111B — versione imbarcata del bombardiere dell'Aeronautica — era troppo pesante per le portaerei e fu cancellato. Dal programma VFX che ne seguì, nel gennaio 1969 vinse il progetto Grumman G-303, che ne riutilizzò il cuore tecnologico: il radar AWG-9 e i missili a lunghissimo raggio AIM-54 Phoenix.", media: { src: "/images/aircraft/f-14-tomcat/f111b-1965.jpg", width: 1280, height: 958, alt: "Il prototipo General Dynamics F-111B in volo nel 1965", caption: "General Dynamics F-111B · 1965 · U.S. Navy (PD)" } },
    { year: "1970", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo Tomcat in volo", text: "Il 21 dicembre 1970 il prototipo decolla da Calverton; al secondo volo un guasto idraulico lo distrugge, ma l'equipaggio si salva e il programma prosegue. Il design — ali a geometria variabile, doppia deriva, pilota e RIO in tandem — è già quello definitivo, destinato a diventare una delle silhouette più riconoscibili della storia dell'aviazione.", media: { src: "/images/aircraft/f-14-tomcat/yf14-1972.jpg", width: 1280, height: 856, alt: "Formazione di prototipi YF-14A Tomcat in volo, ~1972", caption: "Prototipi YF-14A · ~1972 · U.S. Navy (PD)" } },
    { year: "1974", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Con gli squadron VF-1 «Wolfpack» e VF-2 «Bounty Hunters» il Tomcat entra in linea sulla USS Enterprise. Il primo impiego reale arriva subito: nell'aprile 1975 i caccia coprono dall'alto l'evacuazione di Saigon (operazione Frequent Wind)." },
    { year: "1976", tag: { label: "Iran", variant: "cyan" }, title: "L'Iran: unico cliente, oggi unico operatore", text: "Nel 1976 l'Iran dello Scià acquista 79 F-14A con i missili Phoenix: gli unici Tomcat mai esportati. Impiegati intensamente nella guerra Iran-Iraq (1980-88) come intercettori e «mini-AWACS», con decine di vittorie rivendicate, dopo il ritiro statunitense restano gli unici F-14 ancora in servizio attivo al mondo.", media: { src: "/images/aircraft/f-14-tomcat/iran-mehrabad-2013.jpg", width: 1200, height: 755, alt: "Un F-14 dell'aeronautica iraniana a Mehrabad nel 2013", caption: "F-14 iraniano · Mehrabad, 2013 · M. Shaltouki (CC BY 4.0)" } },
    { year: "1981 / 1989", tag: { label: "Combattimento", variant: "gold" }, title: "Golfo della Sirte", text: "Due scontri al largo della Libia: nel 1981 due F-14 del VF-41 «Black Aces» abbattono due Su-22, nel 1989 due F-14 del VF-32 abbattono due MiG-23. Negli stessi anni il Tomcat firma operazioni celebri, come l'intercettazione in volo dei dirottatori dell'Achille Lauro (1985)." },
    { year: "1986", tag: { label: "Cultura pop" }, title: "Top Gun", text: "Il film con Tom Cruise trasforma il Tomcat in un'icona globale e fa impennare gli arruolamenti in Marina. Per una generazione, «caccia» significa F-14.", media: { src: "/images/aircraft/f-14-tomcat/vf84-1986.jpg", width: 1280, height: 906, alt: "Un F-14A Tomcat del VF-84 Jolly Rogers in volo nel 1986", caption: "F-14A del VF-84 «Jolly Rogers», 1986 · U.S. Navy (PD)" } },
    { year: "1987–90", tag: { label: "Super Tomcat", variant: "gold" }, title: "Le versioni B e D", text: "I problematici motori Pratt & Whitney TF30 lasciano il posto ai potenti e affidabili General Electric F110 (F-14A+, poi F-14B). Nel 1990 debutta l'F-14D «Super Tomcat»: radar digitale AN/APG-71, glass cockpit e avionica rinnovata, la versione più capace della famiglia." },
    { year: "1991", tag: { label: "Desert Storm", variant: "cyan" }, title: "La Guerra del Golfo", text: "Impiegato in difesa aerea e ricognizione tattica con il pod TARPS. Un F-14 viene abbattuto da un missile SA-2 (il pilota recuperato, il RIO catturato); un altro abbatte un elicottero iracheno, unica vittoria aria-aria del Tomcat nel conflitto." },
    { year: "1995–2003", tag: { label: "Bombcat" }, title: "Da caccia a cacciabombardiere", text: "Con il pod di puntamento LANTIRN il Tomcat impara a sganciare bombe a guida laser: nasce il «Bombcat». Lo si vede all'opera sui Balcani e poi nelle operazioni Enduring Freedom (Afghanistan, 2001) e Iraqi Freedom (2003), in lunghe missioni d'attacco di precisione." },
    { year: "2006", tag: { label: "Ritiro" }, title: "L'ultimo appontaggio", text: "Dopo l'ultima missione di combattimento in Iraq, il 22 settembre 2006 la US Navy ritira l'F-14, sostituito dall'F/A-18E/F Super Hornet: si chiudono 32 anni di servizio. Gli esemplari radiati verranno poi distrutti per impedire che i ricambi raggiungano l'Iran.", media: { src: "/images/aircraft/f-14-tomcat/f14d-2005.jpg", width: 1279, height: 924, alt: "F-14D Tomcat in missione sul Golfo Persico nel 2005", caption: "F-14D sul Golfo Persico · 2005 · U.S. Navy (PD)" } },
  ],

  facts: [
    {
      title: "Perché si chiama «Tomcat»",
      text: "Il nome unisce la tradizione Grumman dei felini all'omaggio all'ammiraglio Thomas «Tom» Connolly, grande sostenitore del programma: gli addetti ai lavori lo chiamavano scherzosamente «Tom's Cat».",
    },
    {
      title: "Il soprannome «Turkey»",
      text: "Gli equipaggi lo chiamavano affettuosamente «tacchino»: a bassa velocità, con ali, slat, flap e superfici mobili tutte estese, il profilo goffo e impennato ricordava proprio un tacchino.",
    },
    {
      title: "Costoso ma insostituibile",
      text: "Un F-14 costava circa 38 milioni di dollari (1998): un prezzo elevato giustificato dall'unica combinazione radar AWG-9 + missili Phoenix capace di difendere la flotta a oltre 150 km.",
    },
    {
      title: "I motori, il suo tallone d'Achille",
      text: "I primi turbofan Pratt & Whitney TF30 erano inclini allo stallo del compressore ad alti angoli d'attacco: vennero attribuiti a essi circa il 28% di tutti gli incidenti, fino alla sostituzione con i GE F110.",
    },
    {
      title: "Una star del cinema",
      text: "Top Gun (1986) ne fece un'icona globale e un potente strumento di reclutamento per la Marina; il sequel Top Gun: Maverick (2022) lo ha riportato sul grande schermo a sedici anni dal ritiro.",
    },
  ],

};
