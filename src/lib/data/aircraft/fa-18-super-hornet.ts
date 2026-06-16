import type { Aircraft } from "./types";

export const fa18SuperHornet: Aircraft = {
  // ---- catalogo ----
  slug: "fa-18-super-hornet",
  name: "F/A-18 Super Hornet",
  manufacturer: "Boeing",
  role: "Caccia multiruolo imbarcato",
  country: "USA",
  firstFlight: "1995",
  service: "2001 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 1.8",
  unitCost: "≈ 67 mln $ (2021)",
  profile: { velocita: 72, raggio: 55, agilita: 72, carico: 70, furtivita: 25 },
  thumb: "/images/aircraft/fa-18-super-hornet/fa18f-flight.jpg",
  thumbAlt: "Un Boeing F/A-18F Super Hornet in volo",
  model3d: "/models/USA/boeing_fa-18f_super_hornet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/boeing-fa-18f-super-hornet-free-447caa975f534554a83f70f0877b73fb",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Evoluzione ingrandita del Hornet, il Super Hornet è oggi il cacciabombardiere imbarcato di riferimento della US Navy: il velivolo che ha raccolto l'eredità dell'F-14 Tomcat sulle portaerei americane. Robusto, polivalente e capace persino di rifornire in volo gli altri aerei, è il cavallo di battaglia del ponte di volo.",

  heroBadges: [
    { label: "In servizio · dal 2001", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo imbarcato" },
    { label: "Origine · USA" },
    { label: "Mach 1.8", variant: "gold" },
  ],

  overviewText:
    "Dopo la cancellazione del programma per uno stealth navale (A-12), la US Navy scelse una strada pragmatica: ingrandire di circa un quarto il già valido F/A-18 Hornet. Ne nacque il Super Hornet, con più carburante interno, più carico, più raggio e un radar AESA. Il primo volo è del 29 novembre 1995 e l'entrata in servizio del 2001. Prodotto nelle versioni monoposto E e biposto F (più la variante di guerra elettronica EA-18G Growler), dal 2006 ha sostituito l'F-14 Tomcat come caccia delle portaerei statunitensi.",
  armamentText:
    "Fino a ~8.000 kg su 11 punti d'aggancio: dal duello aereo all'attacco di precisione e antinave. Può anche trasportare un sistema di rifornimento per fare da aerocisterna agli altri velivoli del gruppo imbarcato.",

  bento: [
    {
      icon: "carrier",
      span: 3,
      title: "Il caccia delle portaerei",
      text: "Cuore dell'aviazione imbarcata della US Navy: dal 2006 ha sostituito l'F-14 Tomcat ed è oggi il velivolo più numeroso sui ponti di volo americani.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar AN/APG-79 AESA",
      text: "Radar a scansione elettronica attiva per ingaggi aria-aria e aria-suolo simultanei, mappatura del terreno e forte resistenza ai disturbi.",
    },
    {
      icon: "engine",
      span: 2,
      title: "2× General Electric F414",
      text: "Due turbofan affidabili e potenti, sviluppo di quelli del Hornet, per le esigenti operazioni da catapulta e appontaggio.",
    },
    {
      icon: "bolt",
      span: 2,
      title: "La famiglia Growler",
      text: "Dalla stessa cellula nasce l'EA-18G Growler, dedicato alla guerra elettronica: individua e disturba i radar e le comunicazioni nemiche.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Multiruolo + aerocisterna",
      text: "Undici piloni per un arsenale completo, e la capacità di fare da rifornitore «buddy-buddy» per gli altri aerei imbarcati.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "18,31 m" },
        { k: "Apertura alare", v: "13,62 m" },
        { k: "Altezza", v: "4,88 m" },
        { k: "Superficie alare", v: "46,5 m²" },
        { k: "Peso a vuoto", v: "~14.550 kg" },
        { k: "Peso max decollo", v: "~29.900 kg" },
        { k: "Carico bellico", v: "~8.050 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 1.8" },
        { k: "In km/h", v: "~1.900" },
        { k: "Tangenza", v: "~15.000 m" },
        { k: "Raggio di combatt.", v: "~720 km" },
        { k: "Fattore di carico", v: "+7,5 g" },
        { k: "Equipaggio", v: "1 (E) / 2 (F)" },
        { k: "Punti d'aggancio", v: "11" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× GE F414-400" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~98 kN" },
        { k: "Spinta a secco", v: "~62 kN" },
        { k: "Radar", v: "AN/APG-79 AESA" },
        { k: "Cannone", v: "M61A2 20mm" },
        { k: "Colpi", v: "412" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar AN/APG-79 AESA",
      text: "Radar a scansione elettronica attiva che gestisce contemporaneamente modalità aria-aria e aria-suolo, mappa il terreno ad alta risoluzione e resiste bene ai disturbi elettronici.",
      meta: { k: "Tipo", v: "AESA" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× General Electric F414-400",
      text: "Due turbofan con postbruciatore, evoluzione di quelli del Hornet: spinta e affidabilità per le sollecitazioni estreme di catapulta e appontaggio.",
      meta: { k: "Spinta A/B cad.", v: "~98 kN" },
    },
    {
      icon: "carrier",
      badge: { label: "Operazioni navali", variant: "cyan" },
      title: "Cellula imbarcata robusta",
      text: "Circa un quarto più grande del Hornet, con ali ripiegabili, carrello e gancio rinforzati e prese d'aria ridisegnate che abbassano anche la traccia radar rispetto al predecessore.",
      meta: { k: "Ali", v: "ripiegabili" },
    },
    {
      icon: "crew",
      badge: { label: "Equipaggio", variant: "cyan" },
      title: "Versioni E e F",
      text: "La E è monoposto, la F biposto con un operatore ai sistemi d'arma per le missioni più complesse; la cellula biposto è anche la base del Growler da guerra elettronica.",
      meta: { k: "Configurazioni", v: "E / F / EA-18G" },
    },
    {
      icon: "bomb",
      badge: { label: "Armamento", variant: "gold" },
      title: "Polivalenza + rifornimento",
      text: "Undici piloni integrano un arsenale aria-aria e aria-suolo completo; con un apposito sistema il Super Hornet può anche rifornire in volo gli altri velivoli imbarcati.",
      meta: { k: "Piloni", v: "11" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A2 Vulcan", text: "Rotativa a 6 canne da 20 mm con 412 colpi, nel muso, per il combattimento ravvicinato.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9X Sidewinder", text: "Missile aria-aria a guida infrarossa ad alta agilità per il dogfight.", reach: "~30 km", rangePct: 14 },
    { kind: "Aria-suolo", title: "JDAM / JSOW", text: "Bombe a guida GPS e armi planari stand-off (JSOW) per l'attacco di precisione, anche a distanza di sicurezza.", reach: "~110 km", rangePct: 42 },
    { kind: "Medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva per ingaggi BVR a media distanza.", reach: "~120 km", rangePct: 52 },
    { kind: "Stand-off / antinave", title: "SLAM-ER / Harpoon", text: "Missili stand-off e antinave per colpire bersagli a grande distanza, terrestri e navali.", reach: "270+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Monoposto", code: "F/A-18E", text: "La versione a posto singolo: il cacciabombardiere imbarcato standard della US Navy." },
    { sub: "// Biposto", code: "F/A-18F", text: "Versione a due posti, con un operatore ai sistemi d'arma per le missioni d'attacco e di comando più complesse." },
    { sub: "// Guerra elettronica", code: "EA-18G Growler", text: "Derivato specializzato nella soppressione delle difese: disturba radar e comunicazioni nemiche e lancia missili anti-radar HARM." },
    { sub: "// Block II", code: "Block II", text: "Lo standard maturato con il radar AESA APG-79, nuovi display e sistemi di missione potenziati." },
    { sub: "// Block III", code: "Block III", text: "L'ultima evoluzione: serbatoi conformi opzionali, sensore IRST, grande display in cabina, traccia radar ridotta e cellula a vita estesa." },
    { sub: "// Export", code: "Australia / Kuwait", text: "Oltre alla US Navy, è in servizio con l'Australia (F/A-18F ed EA-18G) e il Kuwait: tra i pochi caccia imbarcati moderni venduti all'estero." },
  ],

  timeline: [
    { year: "1992–95", tag: { label: "Origini" }, title: "Un Hornet più grande", text: "Cancellato il progetto per uno stealth navale (A-12), la US Navy opta per una soluzione pragmatica: ingrandire di circa un quarto il collaudato F/A-18 Hornet, aumentando carburante, carico e raggio. Il primo volo del Super Hornet è del 29 novembre 1995." },
    { year: "2001", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Nel settembre 2001 il Super Hornet raggiunge la capacità operativa con la US Navy, iniziando a sostituire i Hornet di prima generazione, gli A-6 e gli F-14 nei vari ruoli del gruppo imbarcato." },
    { year: "2002", tag: { label: "Combattimento", variant: "gold" }, title: "Il battesimo del fuoco", text: "Nel novembre 2002, durante l'operazione Southern Watch sui cieli dell'Iraq, due F/A-18E effettuano la prima missione di combattimento del tipo. Seguiranno Iraq, Afghanistan e le operazioni contro l'ISIS.", media: { src: "/images/aircraft/fa-18-super-hornet/fa18e-launch.jpg", width: 1280, height: 853, alt: "Un F/A-18E Super Hornet al lancio da una portaerei", caption: "F/A-18E al lancio dalla USS Eisenhower · U.S. Navy (PD)" } },
    { year: "2006", tag: { label: "Erede del Tomcat", variant: "cyan" }, title: "Il testimone dell'F-14", text: "Con il ritiro dell'F-14 Tomcat nel 2006, il Super Hornet ne raccoglie l'eredità come caccia delle portaerei americane: meno spettacolare nelle prestazioni pure, ma più versatile, economico e facile da mantenere.", media: { src: "/images/aircraft/fa-18-super-hornet/fa18f-deck.jpg", width: 1280, height: 852, alt: "Un F/A-18F Super Hornet ancorato al ponte di volo", caption: "F/A-18F sul ponte della USS Theodore Roosevelt · U.S. Navy (PD)" } },
    { year: "Tanker", tag: { label: "Multiruolo" }, title: "Cacciabombardiere e aerocisterna", text: "Oltre ai ruoli di caccia e d'attacco, il Super Hornet ha assunto quello di rifornitore: con un apposito sistema «buddy-buddy» rifornisce in volo gli altri aerei del gruppo imbarcato, ruolo divenuto cruciale dopo il ritiro dell'S-3 Viking." },
    { year: "Growler", tag: { label: "EA-18G", variant: "gold" }, title: "La guerra elettronica: EA-18G Growler", text: "Dalla cellula biposto nasce l'EA-18G Growler, che sostituisce il vecchio EA-6B Prowler: il suo compito è «accecare» le difese nemiche disturbandone radar e comunicazioni, aprendo la strada agli altri velivoli.", media: { src: "/images/aircraft/fa-18-super-hornet/ea18g-growler.jpg", width: 1280, height: 914, alt: "Un EA-18G Growler su una portaerei", caption: "EA-18G Growler · U.S. Navy (PD)" } },
    { year: "Block II", tag: { label: "AESA" }, title: "L'arrivo del radar AESA", text: "Lo standard Block II introduce il radar a scansione elettronica attiva APG-79 e una nuova avionica, portando il Super Hornet ai livelli sensoristici della sua epoca e ampliandone le capacità multiruolo." },
    { year: "Export", tag: { label: "Clienti esteri" }, title: "Australia e Kuwait", text: "Il Super Hornet è uno dei pochi caccia imbarcati moderni esportati: l'Australia ne ha acquistati (insieme ai Growler) per la propria aeronautica, seguita dal Kuwait.", media: { src: "/images/aircraft/fa-18-super-hornet/fa18-formation.jpg", width: 1280, height: 852, alt: "Formazione di F/A-18 Super Hornet sopra una nave", caption: "Formazione di Super Hornet · U.S. Navy (PD)" } },
    { year: "Block III", tag: { label: "Evoluzione", variant: "gold" }, title: "Lo standard Block III", text: "L'ultima evoluzione porta serbatoi conformi opzionali per più raggio, un sensore IRST, un grande display tattico in cabina, una traccia radar ridotta e una cellula con vita operativa estesa, per restare valido ancora a lungo." },
    { year: "Cultura / futuro", tag: { label: "Top Gun" }, title: "Da Top Gun all'F/A-XX", text: "Il Super Hornet è la star di «Top Gun: Maverick» (2022), il caccia che sullo schermo prende il posto del Tomcat. Guardando avanti, la US Navy sviluppa il futuro caccia imbarcato di sesta generazione, l'F/A-XX, che un giorno gli succederà." },
  ],

  facts: [
    {
      title: "L'erede del Tomcat",
      text: "Dal 2006 il Super Hornet ha sostituito l'F-14 sulle portaerei della US Navy: meno estremo nelle prestazioni, ma molto più versatile, economico da gestire e adatto a ogni missione del gruppo imbarcato.",
    },
    {
      title: "Più grande del Hornet",
      text: "Pur somigliando all'F/A-18 originale, è circa il 20-25% più grande, con più carburante interno, più punti d'aggancio e maggiore raggio e carico: un aereo nuovo sotto una silhouette familiare.",
    },
    {
      title: "Fa anche da aerocisterna",
      text: "Una parte della flotta vola con un sistema di rifornimento «buddy-buddy» per dare carburante agli altri aerei: una capacità diventata essenziale per il gruppo imbarcato dopo il ritiro dell'S-3 Viking.",
    },
    {
      title: "La star di «Top Gun: Maverick»",
      text: "Nel film del 2022 è il caccia protagonista, ideale erede dell'F-14 del primo «Top Gun»: un altro velivolo della Marina trasformato in icona cinematografica.",
    },
    {
      title: "Una famiglia, anche elettronica",
      text: "Dalla stessa base nasce l'EA-18G Growler, velivolo da guerra elettronica che disturba radar e comunicazioni nemiche: il Super Hornet non combatte solo con missili, ma anche con le onde radio.",
    },
  ],

};
