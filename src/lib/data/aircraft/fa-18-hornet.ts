import type { Aircraft } from "./types";

export const fa18Hornet = {
  // ---- catalogo ----
  slug: "fa-18-hornet",
  name: "F/A-18 Hornet",
  manufacturer: "McDonnell Douglas",
  role: "Caccia multiruolo imbarcato («strike fighter»)",
  country: "USA",
  firstFlight: "1978",
  service: "1983 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 1.8",
  unitCost: "≈ 29 mln $ (anni '90)",
  profile: { velocita: 72, raggio: 45, agilita: 82, carico: 60, furtivita: 12 },
  thumb: "/images/aircraft/fa-18-hornet/hornet-sonic.jpg",
  thumbAlt: "Un F/A-18 Hornet con il cono di vapore mentre supera la barriera del suono",
  model3d: "/models/USA/fa-18c_hornet.glb",
  model3dCredit: {
    author: "Jeyhun1985",
    url: "https://sketchfab.com/3d-models/fa-18c-late-with-agm-65g-a9eeeea180484f48b50cdfa14002ea6a",
    license: "CC BY 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Il primo vero «strike fighter»: un solo aereo capace di fare la caccia e l'attacco al suolo, cambiando ruolo nella stessa missione. Robusto, affidabile e facile da mantenere, il Hornet è stato per decenni il cavallo di battaglia delle portaerei americane e un grande successo all'esportazione, prima di lasciare il posto al più grande Super Hornet.",

  heroBadges: [
    { label: "In servizio · dal 1983", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo imbarcato" },
    { label: "Origine · USA" },
    { label: "Mach 1.8", variant: "gold" },
  ],

  overviewText:
    "Quando la US Navy cercò un velivolo in grado di sostituire sia i caccia (F-4) sia gli aerei d'attacco (A-7), McDonnell Douglas e Northrop navalizzarono il Northrop YF-17 — il perdente della gara LWF vinta dall'F-16 — trasformandolo nel F/A-18. Primo volo il 18 novembre 1978, in servizio dal 1983. La sigla «F/A» dice tutto: Fighter e Attack nello stesso aereo. Primo caccia di serie con comandi fly-by-wire interamente digitali e quadruplici, e tra i più affidabili e facili da manutenere mai imbarcati su una portaerei.",
  armamentText:
    "Cannone da 20 mm e nove punti d'aggancio per ~6.200 kg: missili aria-aria AMRAAM e Sidewinder, e un arsenale aria-suolo completo (Maverick, HARM, Harpoon, JDAM, Paveway).",

  bento: [
    {
      icon: "missile",
      span: 3,
      title: "Il primo «strike fighter»",
      text: "Un solo aereo per caccia e attacco al suolo: poteva ingaggiare un caccia nemico e poi proseguire la missione di bombardamento, cambiando ruolo in volo. La sigla F/A nasce qui.",
    },
    {
      icon: "plane",
      span: 3,
      title: "Fly-by-wire e alto AoA",
      text: "Primo caccia di serie con comandi fly-by-wire interamente digitali e quadruplici; le estensioni alari (LERX) gli danno un'ottima manovrabilità ad alti angoli d'attacco.",
    },
    {
      icon: "engine",
      span: 2,
      title: "2× GE F404",
      text: "Due turbofan affidabili e di facile manutenzione: un motore si sostituisce in ~20 minuti con quattro persone, senza attrezzature speciali.",
    },
    {
      icon: "carrier",
      span: 2,
      title: "Cavallo di battaglia navale",
      text: "Robusto, con ali ripiegabili e gancio d'arresto: per decenni la spina dorsale di portaerei e Marines, e dei Blue Angels.",
    },
    {
      icon: "star",
      span: 2,
      title: "Successo all'esportazione",
      text: "Scelto da Canada, Australia, Spagna, Finlandia, Svizzera, Kuwait e Malaysia: un Hornet «globale».",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "17,07 m" },
        { k: "Apertura alare", v: "11,4 m" },
        { k: "Altezza", v: "4,66 m" },
        { k: "Superficie alare", v: "37,2 m²" },
        { k: "Peso a vuoto", v: "~10.400 kg" },
        { k: "Peso max decollo", v: "~23.500 kg" },
        { k: "Carico bellico", v: "~6.200 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 1.8" },
        { k: "In km/h", v: "~1.900" },
        { k: "Tangenza", v: "~15.000 m" },
        { k: "Raggio di combatt.", v: "~540 km" },
        { k: "Fattore di carico", v: "+7,5 g" },
        { k: "Equipaggio", v: "1 / 2 (B/D)" },
        { k: "Punti d'aggancio", v: "9" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× GE F404" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~79 kN" },
        { k: "Radar", v: "APG-65 → APG-73" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Versioni", v: "A / B / C / D" },
        { k: "Esemplari", v: "~1.480 costruiti" },
      ],
    },
  ],

  systems: [
    {
      icon: "missile",
      badge: { label: "Concetto", variant: "gold" },
      title: "Il primo «strike fighter»",
      text: "Un unico velivolo capace di sostituire sia i caccia (F-4) sia gli aerei d'attacco (A-7): grazie ai display multifunzione il pilota può commutare dal ruolo aria-aria a quello aria-suolo durante la stessa missione.",
      meta: { k: "Ruolo", v: "F + A insieme" },
    },
    {
      icon: "plane",
      badge: { label: "Controllo di volo", variant: "cyan" },
      title: "Fly-by-wire digitale + alto AoA",
      text: "È stato il primo caccia di serie con comandi fly-by-wire interamente digitali a quadruplice ridondanza; le estensioni di bordo d'attacco (LERX) garantiscono un eccellente controllo ad alti angoli d'attacco.",
      meta: { k: "Comandi", v: "FBW quadruplo" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× General Electric F404",
      text: "Due turbofan con postbruciatore noti per affidabilità e facilità di manutenzione: un motore può essere rimosso in circa 20 minuti da quattro persone, senza attrezzature speciali.",
      meta: { k: "Spinta A/B cad.", v: "~79 kN" },
    },
    {
      icon: "carrier",
      badge: { label: "Operazioni navali", variant: "cyan" },
      title: "Nato per la portaerei",
      text: "Carrello robusto, ali ripiegabili e gancio d'arresto: progettato per la vita dura del ponte di volo, è stato il cavallo di battaglia di US Navy e Marines e il jet dei Blue Angels per 34 anni.",
      meta: { k: "Ali", v: "ripiegabili" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar APG-65 / APG-73",
      text: "Radar multimodo, aggiornato negli anni (fino all'AESA APG-79(V)4 sugli esemplari dei Marines): bus dati digitale che ha reso il Hornet facile da modernizzare.",
      meta: { k: "Evoluzione", v: "fino ad AESA" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm nel muso, per il combattimento ravvicinato.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9 Sidewinder", text: "Missile aria-aria a guida infrarossa per il dogfight.", reach: "~30 km", rangePct: 14 },
    { kind: "Aria-suolo", title: "AGM-65 / JDAM / Paveway", text: "Missili anticarro Maverick (come nel modello 3D) e bombe a guida GPS e laser: il cuore della missione d'attacco.", reach: "~25 km", rangePct: 24 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR a media distanza.", reach: "~100 km", rangePct: 52 },
    { kind: "Antinave", title: "AGM-84 Harpoon", text: "Missile antinave a volo radente per colpire bersagli navali a distanza.", reach: "~120 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// 1983", code: "F/A-18A", text: "La versione originale monoposto da caccia e attacco." },
    { sub: "// Biposto", code: "F/A-18B", text: "Versione a due posti per l'addestramento, comunque combat-capable." },
    { sub: "// 1987", code: "F/A-18C", text: "Monoposto migliorato con capacità d'attacco notturno, AMRAAM e nuova avionica: la versione legacy più capace." },
    { sub: "// Biposto", code: "F/A-18D", text: "Due posti, dedicato all'attacco notturno e al controllo aereo avanzato (FAC), molto usato dai Marines." },
    { sub: "// Origine", code: "Northrop YF-17", text: "Il prototipo che perse la gara LWF contro l'F-16 e fu poi navalizzato, dando vita al Hornet." },
    { sub: "// Erede", code: "F/A-18E/F Super Hornet", text: "La versione ~25% più grande che ne ha preso il posto (e quello dell'F-14) sulle portaerei: anch'essa in catalogo." },
  ],

  timeline: [
    { year: "Anni '70", tag: { label: "Origini" }, title: "Dall'YF-17 al Hornet", text: "La US Navy voleva un velivolo unico per sostituire caccia (F-4) e aerei d'attacco (A-7). McDonnell Douglas e Northrop navalizzarono il Northrop YF-17 — perdente della gara LWF vinta dall'F-16 — creando l'F/A-18. Primo volo il 18 novembre 1978." },
    { year: "1983", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il Hornet entra in linea con i Marines nel 1983 e con la US Navy nel 1984, inaugurando il concetto di «strike fighter»: un solo aereo per due ruoli.", media: { src: "/images/aircraft/fa-18-hornet/hornet-1992.jpg", width: 1280, height: 859, alt: "Un F/A-18C Hornet del VFA-136 in volo nel 1992", caption: "F/A-18C del VFA-136 · 1992 · U.S. Navy (PD)" } },
    { year: "F + A", tag: { label: "Strike fighter", variant: "gold" }, title: "Un aereo, due missioni", text: "Grazie ai display multifunzione il pilota commuta tra aria-aria e aria-suolo in volo. La dimostrazione più celebre: nella Guerra del Golfo del 1991 due Hornet abbatterono dei MiG-21 e poi proseguirono la loro missione di bombardamento." },
    { year: "1986–91", tag: { label: "Combattimento", variant: "cyan" }, title: "Libia e Guerra del Golfo", text: "Debutto in combattimento nel 1986 sulla Libia (El Dorado Canyon); nel 1991 nel Golfo i Hornet dimostrano grande efficacia e robustezza — alcuni rientrano alla base nonostante i danni da missile.", media: { src: "/images/aircraft/fa-18-hornet/hornet-carrier-launch.jpg", width: 1280, height: 853, alt: "Un F/A-18C Hornet al lancio da una portaerei", caption: "F/A-18C al lancio dalla USS Eisenhower · U.S. Navy (PD)" } },
    { year: "Affidabilità", tag: { label: "Manutenzione" }, title: "Robusto e facile", text: "Il Hornet si guadagna la fama di velivolo affidabilissimo e a bassa manutenzione: tempi tra i guasti molto migliori dei predecessori e cambi motore rapidissimi. Un favorito degli equipaggi di ponte." },
    { year: "1986–2020", tag: { label: "Blue Angels", variant: "gold" }, title: "Il jet dei Blue Angels", text: "La pattuglia acrobatica della US Navy, i Blue Angels, ha volato sul Hornet per 34 anni, dal 1986 al 2020, prima di passare al Super Hornet: un'icona degli show aerei." },
    { year: "Export", tag: { label: "Clienti esteri", variant: "cyan" }, title: "Un Hornet globale", text: "Oltre a US Navy e Marines, il Hornet è scelto da Canada (CF-18), Australia, Spagna, Finlandia, Svizzera, Kuwait e Malaysia: uno dei caccia occidentali più esportati della sua generazione.", media: { src: "/images/aircraft/fa-18-hornet/hornet-cf18.jpg", width: 1280, height: 960, alt: "Un CF-18 Hornet dell'aeronautica canadese", caption: "CF-18 Hornet canadese · Erica (CC BY 2.0)" } },
    { year: "Punto debole", tag: { label: "Raggio" }, title: "Corto di gambe", text: "Il principale difetto del Hornet è il raggio d'azione limitato: proprio per superarlo nacque il più grande F/A-18E/F Super Hornet, con più carburante e carico." },
    { year: "2019", tag: { label: "Ritiro USN" }, title: "La Marina volta pagina", text: "Il 1° febbraio 2019 la US Navy ritira i Hornet legacy, ormai sostituiti dal Super Hornet. I Marines e diversi clienti esteri continuano però a farli volare.", media: { src: "/images/aircraft/fa-18-hornet/hornet-finnish.jpg", width: 1280, height: 1280, alt: "Un F/A-18 Hornet dell'aeronautica finlandese", caption: "F/A-18 Hornet finlandese · U.S. Air National Guard (PD)" } },
    { year: "Oggi", tag: { label: "Eredità" }, title: "Ancora in volo", text: "I Marines statunitensi e aeronautiche come quelle di Finlandia, Svizzera, Spagna e Kuwait volano ancora il Hornet, in attesa della sostituzione con l'F-35. Resta uno dei caccia imbarcati più riusciti di sempre." },
  ],

  facts: [
    {
      title: "Il primo «strike fighter»",
      text: "La sigla F/A (Fighter/Attack) nasce col Hornet: un solo aereo per fare la caccia e l'attacco al suolo, sostituendo l'F-4 e l'A-7 e potendo cambiare ruolo nella stessa missione.",
    },
    {
      title: "Figlio dell'YF-17",
      text: "Deriva dal Northrop YF-17, il caccia leggero che perse la gara LWF contro l'F-16 e che, navalizzato da McDonnell Douglas, trovò nuova vita sulle portaerei.",
    },
    {
      title: "Un MiG abbattuto… e poi a bombardare",
      text: "Nel 1991, nel Golfo, un pilota di Hornet abbatté un MiG-21 e poi completò la sua missione di bombardamento: la dimostrazione perfetta della filosofia «strike fighter».",
    },
    {
      title: "Affidabile e facile da mantenere",
      text: "Il Hornet stabilì nuovi standard di affidabilità e bassa manutenzione (cambio motore in ~20 minuti); fu anche il jet dei Blue Angels per 34 anni.",
    },
    {
      title: "Corto di gambe",
      text: "Il raggio d'azione limitato fu la sua critica principale: per superarla nacque il più grande Super Hornet, che lo ha poi rimpiazzato (insieme all'F-14) sulle portaerei.",
    },
  ],

} satisfies Aircraft;
