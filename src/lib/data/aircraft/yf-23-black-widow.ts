import type { Aircraft } from "./types";

export const yf23BlackWidow = {
  // ---- catalogo ----
  slug: "yf-23-black-widow",
  name: "YF-23 Black Widow II",
  manufacturer: "Northrop / McDonnell Douglas",
  role: "Dimostratore di caccia stealth (programma ATF)",
  country: "USA",
  firstFlight: "1990",
  service: "Prototipo · 1990–1991",
  status: "ritirato",
  topSpeed: "~Mach 2.2",
  unitCost: "n/d · prototipo",
  thumb: "/images/aircraft/yf-23-black-widow/yf23-flight.jpg",
  thumbAlt: "Il prototipo Northrop YF-23 Black Widow II in volo",
  model3d: "/models/USA/yf-23_black_widow_ii.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/yf-23-black-widow-ii-fighter-jet-free-f61b51dbfb684db6acf14435bac8cd3c",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Il grande sconfitto della gara per il caccia stealth americano. Più furtivo e più veloce del rivale YF-22, lo YF-23 perse la competizione ATF nel 1991 per ragioni di agilità, rischio e gestione del programma. Costruito in soli due prototipi mai armati, è diventato un mito tra gli appassionati: «il caccia che sarebbe potuto essere».",

  heroBadges: [
    { label: "Prototipo · 1990–1991", variant: "danger", dot: true },
    { label: "Ruolo · Dimostratore ATF" },
    { label: "Origine · USA" },
    { label: "~Mach 2.2", variant: "gold" },
  ],

  overviewText:
    "Negli anni '80 l'USAF cercava il suo primo caccia stealth da superiorità aerea con il programma Advanced Tactical Fighter. Nel 1986 furono scelti due team per costruire i dimostratori: Lockheed (YF-22) e Northrop con McDonnell Douglas (YF-23). Il YF-23 puntò tutto su furtività e velocità: ala a diamante, impennaggio a V e scarichi schermati all'infrarosso, rinunciando però alla spinta vettoriale del rivale. Volò per la prima volta il 27 agosto 1990, ma il 23 aprile 1991 la vittoria andò allo YF-22, ritenuto più agile e meno rischioso. I due esemplari non furono mai armati e oggi riposano nei musei.",
  armamentText:
    "I due prototipi volarono disarmati: lo YF-23 era però progettato per ospitare nella stiva interna l'armamento aria-aria del futuro caccia ATF (missili AMRAAM e Sidewinder più un cannone), poi mai installato.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Forma stealth radicale",
      text: "Ala a diamante e impennaggio a V (ruddervators) al posto delle classiche derive: una configurazione che lo rendeva ancora più furtivo del rivale YF-22.",
    },
    {
      icon: "arrowUp",
      span: 3,
      title: "Più veloce del Raptor",
      text: "Aerodinamica pulitissima e supercrociera stimata superiore: lo YF-23 era considerato più veloce e furtivo del YF-22, pur senza spinta vettoriale.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Furtività anche termica",
      text: "Gli scarichi correvano in canali rivestiti di materiale assorbente per mascherare il calore: stealth non solo radar, ma anche all'infrarosso.",
    },
    {
      icon: "radar",
      span: 2,
      title: "Cuore da quinta generazione",
      text: "Pensato per il radar AESA APG-77 e i motori (YF119/YF120) poi scelti per l'F-22: un vero progetto di nuova generazione.",
    },
    {
      icon: "star",
      span: 2,
      title: "Il contendente perduto",
      text: "Perse la gara ATF nel 1991 nonostante i pregi: per molti appassionati resta il «what-if» più affascinante della storia dei caccia.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "20,55 m" },
        { k: "Apertura alare", v: "13,28 m" },
        { k: "Altezza", v: "~4,24 m" },
        { k: "Superficie alare", v: "~88 m²" },
        { k: "Peso a vuoto", v: "~16.800 kg" },
        { k: "Peso max decollo", v: "~29.000 kg" },
        { k: "Esemplari", v: "2 (PAV-1 / PAV-2)" },
      ],
    },
    {
      title: "PRESTAZIONI (stimate)",
      rows: [
        { k: "Velocità max", v: "~Mach 2.2" },
        { k: "Supercrociera", v: "~Mach 1.6–1.7" },
        { k: "Tangenza", v: "~19.800 m" },
        { k: "Equipaggio", v: "1 pilota" },
        { k: "Primo volo", v: "27/8/1990" },
        { k: "Esito", v: "gara persa, 1991" },
        { k: "Spinta vettoriale", v: "assente" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× YF119 / YF120" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~156 kN" },
        { k: "Furtività", v: "radar + infrarosso" },
        { k: "Radar (previsto)", v: "AN/APG-77 AESA" },
        { k: "Armamento", v: "mai installato" },
        { k: "Stato", v: "dimostratore" },
      ],
    },
  ],

  systems: [
    {
      icon: "plane",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Configurazione stealth «a diamante»",
      text: "Ala a diamante e impennaggio a V (ruddervators) inclinato eliminavano le superfici verticali separate, abbassando la traccia radar ancora più del rivale YF-22.",
      meta: { k: "Coda", v: "a V (ruddervators)" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× motori YF119 / YF120",
      text: "I due prototipi montavano propulsori diversi (Pratt & Whitney YF119 sul PAV-1, General Electric YF120 sul PAV-2) per provarli entrambi: gli stessi candidati anche per il futuro F-22.",
      meta: { k: "Spinta A/B cad.", v: "~156 kN" },
    },
    {
      icon: "arrowUp",
      badge: { label: "Bassa osservabilità", variant: "cyan" },
      title: "Furtività termica e velocità",
      text: "Gli scarichi dei motori scorrevano in lunghi canali rivestiti di materiale assorbente per mascherare il calore. Senza ugelli orientabili ma con un'aerodinamica eccezionale, era ritenuto più veloce del YF-22.",
      meta: { k: "Scelta", v: "stealth > agilità" },
    },
    {
      icon: "radar",
      badge: { label: "Avionica", variant: "gold" },
      title: "Sistemi da quinta generazione",
      text: "Pur volando come dimostratore con strumentazione di prova, lo YF-23 era concepito per ospitare il radar AESA AN/APG-77 e l'armamento interno del futuro caccia ATF.",
      meta: { k: "Radar previsto", v: "AN/APG-77" },
    },
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "danger" },
      title: "Stiva interna mai armata",
      text: "Il progetto prevedeva una stiva ventrale per missili aria-aria (AMRAAM e Sidewinder) e un cannone, sul modello del futuro F-22; sui due prototipi non fu però mai installato alcun armamento.",
      meta: { k: "Stato", v: "disarmato" },
    },
  ],

  armament: [
    { kind: "Previsto · cannone", title: "Cannone interno", text: "Il caccia di serie avrebbe montato un cannone rotativo interno, come l'F-22; sui prototipi non fu installato.", reach: "~2 km", rangePct: 5 },
    { kind: "Previsto · corto raggio", title: "AIM-9 Sidewinder", text: "Missile aria-aria a guida infrarossa previsto per le stive laterali, mai imbarcato.", reach: "~30 km", rangePct: 22 },
    { kind: "Previsto · medio raggio", title: "AIM-120 AMRAAM", text: "Missile aria-aria a guida radar attiva previsto nella stiva ventrale, cuore della missione di superiorità aerea progettata.", reach: "~120 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Prototipo 1", code: "PAV-1", text: "Il primo dei due esemplari, motorizzato con i Pratt & Whitney YF119: primo volo il 27 agosto 1990." },
    { sub: "// Prototipo 2", code: "PAV-2 «Gray Ghost»", text: "Il secondo prototipo, con motori General Electric YF120 e una livrea grigia, da cui il soprannome «Gray Ghost»." },
    { sub: "// Rivale", code: "Lockheed YF-22", text: "Il concorrente che vinse la gara ATF nell'aprile 1991 e divenne l'F-22 Raptor: meno furtivo e veloce, ma più agile (spinta vettoriale) e ritenuto meno rischioso." },
    { sub: "// Mai nato", code: "F-23 (di serie)", text: "La versione di produzione proposta da Northrop, mai costruita dopo la sconfitta nella competizione." },
    { sub: "// Proposte", code: "Derivati", text: "Negli anni successivi furono proposti derivati dello YF-23 (interdittori e bombardieri regionali): nessuno è stato realizzato." },
    { sub: "// Oggi", code: "Nei musei", text: "I due prototipi sopravvivono: uno al National Museum of the USAF (Dayton), l'altro al Western Museum of Flight in California." },
  ],

  timeline: [
    { year: "1981–86", tag: { label: "Origini" }, title: "La gara ATF", text: "Per il suo primo caccia stealth da superiorità aerea (programma Advanced Tactical Fighter), nel 1986 l'USAF seleziona due team per costruire i dimostratori: Lockheed con l'YF-22 e Northrop, in coppia con McDonnell Douglas, con l'YF-23." },
    { year: "1990", tag: { label: "Primo volo", variant: "gold" }, title: "Decolla il Black Widow II", text: "Il 27 agosto 1990 il primo YF-23 (PAV-1) compie il volo inaugurale; il secondo (PAV-2, con motori GE) lo segue in ottobre. Il design — ala a diamante e coda a V — è radicalmente diverso da tutto ciò che vola.", media: { src: "/images/aircraft/yf-23-black-widow/yf23-formation.jpg", width: 1280, height: 809, alt: "I due prototipi YF-23 in formazione", caption: "I due prototipi YF-23 in formazione · U.S. Air Force (PD)" } },
    { year: "1990–91", tag: { label: "Flyoff", variant: "cyan" }, title: "Il confronto in volo", text: "Per mesi i due YF-23 e i due YF-22 si sfidano in un'intensa campagna di prove. Lo YF-23 dimostra furtività e supercrociera eccellenti, ma vola in modo più «conservativo», senza spingersi alle manovre estreme del rivale.", media: { src: "/images/aircraft/yf-23-black-widow/yf23-flight2.jpg", width: 1280, height: 961, alt: "I due YF-23 in volo durante le prove", caption: "YF-23 in volo durante il flyoff · U.S. Air Force (PD)" } },
    { year: "1991", tag: { label: "La sconfitta" }, title: "Vince l'YF-22", text: "Il 23 aprile 1991 l'USAF sceglie l'YF-22. Lo YF-23 era più furtivo e più veloce, ma il rivale fu giudicato più agile (grazie alla spinta vettoriale), meno rischioso e meglio supportato dalla gestione di programma di Lockheed; pesò anche il fatto che Northrop fosse già impegnata sul B-2." },
    { year: "Perché perse", tag: { label: "Analisi" }, title: "Stealth e velocità non bastarono", text: "La scelta privilegiò l'agilità dimostrata e la minore incertezza realizzativa. Molti analisti ritengono però che lo YF-23 fosse l'airframe tecnicamente superiore, soprattutto in furtività e prestazioni pure." },
    { year: "What-if", tag: { label: "Leggenda", variant: "gold" }, title: "Il caccia che sarebbe potuto essere", text: "Proprio per i suoi pregi mai pienamente espressi, lo YF-23 è diventato un mito tra gli appassionati: l'esempio più citato di «progetto migliore che però perse»." },
    { year: "Proposte", tag: { label: "Derivati" }, title: "Vite alternative", text: "Northrop tentò di rilanciare la cellula proponendo derivati — un interdittore a lungo raggio, un bombardiere regionale — ma nessuno di questi progetti venne mai avviato." },
    { year: "Oggi", tag: { label: "Nei musei", variant: "cyan" }, title: "Due superstiti", text: "I due prototipi esistono ancora e sono visitabili: il PAV-1 al National Museum of the U.S. Air Force di Dayton, il PAV-2 al Western Museum of Flight in California.", media: { src: "/images/aircraft/yf-23-black-widow/yf23-museum.jpg", width: 1280, height: 1041, alt: "Un YF-23 conservato in un museo", caption: "YF-23 esposto in museo · James St. John (CC BY 2.0)" } },
    { year: "Eredità", tag: { label: "Influenza" }, title: "Un'impronta duratura", text: "Le soluzioni stealth e la filosofia di basso profilo dello YF-23 hanno influenzato il pensiero progettuale successivo: la sua silhouette è ancora oggi tra le più riconoscibili e ammirate dell'aviazione." },
    { year: "Famiglia", tag: { label: "ATF" }, title: "Accanto al rivale, in catalogo", text: "Lo YF-23 si racconta meglio al fianco del suo avversario diventato realtà, l'F-22 Raptor: due interpretazioni opposte dello stesso requisito di superiorità aerea stealth." },
  ],

  facts: [
    {
      title: "La «Vedova Nera» che perse",
      text: "Più furtivo e più veloce del rivale, lo YF-23 perse comunque la gara ATF nel 1991: il vincitore YF-22 fu giudicato più agile e meno rischioso da mandare in produzione.",
    },
    {
      title: "Due prototipi, due motori",
      text: "Furono costruiti solo due esemplari: il PAV-1 con motori Pratt & Whitney YF119 e il PAV-2 («Gray Ghost») con i General Electric YF120, per provare entrambi i propulsori candidati.",
    },
    {
      title: "Niente spinta vettoriale",
      text: "A differenza dell'YF-22, lo YF-23 rinunciò agli ugelli orientabili, scommettendo su furtività e velocità invece che sull'agilità a bassa velocità: una scelta che probabilmente gli costò la vittoria.",
    },
    {
      title: "Furtivo anche al calore",
      text: "Gli scarichi dei motori erano incanalati e schermati per ridurre la firma a infrarossi: lo YF-23 era pensato per essere difficile da individuare non solo ai radar, ma anche ai sensori termici.",
    },
    {
      title: "Sopravvive nei musei",
      text: "Entrambi i prototipi si sono salvati e sono oggi esposti negli Stati Uniti: un destino raro per dei dimostratori, segno del fascino che questo aereo continua a esercitare.",
    },
  ],

} satisfies Aircraft;
