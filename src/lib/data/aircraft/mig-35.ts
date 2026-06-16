import type { Aircraft } from "./types";

export const mig35 = {
  // ---- catalogo ----
  slug: "mig-35",
  name: "MiG-35 Fulcrum-F",
  manufacturer: "Mikoyan",
  role: "Caccia multiruolo di 4ª generazione avanzata (4++)",
  country: "Russia",
  firstFlight: "2016",
  service: "2019 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.25",
  unitCost: "≈ 40 mln $ (export)",
  thumb: "/images/aircraft/mig-35/mig35-flight.jpg",
  thumbAlt: "Un MiG-35 in dimostrazione al salone MAKS",
  model3d: "/models/RUS/mig-35_-_fighter_jet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/mig-35-fighter-jet-free-1dcea306e8a14ed4ab4d11a819cb6676",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "L'evoluzione più avanzata della famiglia MiG-29: il MiG-35 è un caccia multiruolo «4++» con cockpit digitale, comandi fly-by-wire, radar moderno e più raggio d'azione. Doveva rilanciare la Mikoyan sul mercato mondiale, ma fra scarse vendite e pochi esemplari prodotti è oggi considerato un'occasione in gran parte mancata.",

  heroBadges: [
    { label: "In servizio · dal 2019", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo 4++" },
    { label: "Origine · Russia" },
    { label: "Mach 2.25", variant: "gold" },
  ],

  overviewText:
    "Il MiG-35 nasce come sviluppo definitivo del MiG-29, attraverso le versioni modernizzate MiG-29M/M2 e il dimostratore a spinta vettoriale OVT. Presentato come dimostratore al salone Aero India del 2007 e pensato soprattutto per la grande gara indiana MMRCA, ricevette però una battuta d'arresto quando l'India scelse il Rafale. La versione di serie modernizzata vola nel dicembre 2016 ed entra in servizio nelle forze russe dal 2019. Corregge i limiti storici del Fulcrum — avionica analogica e raggio corto — con cabina digitale, fly-by-wire, radar Zhuk e più carburante, ma è stato prodotto in pochissimi esemplari.",
  armamentText:
    "Nove punti d'aggancio per un arsenale moderno e completo: dai missili aria-aria R-73/R-77 alle armi aria-superficie Kh-29/Kh-31/Kh-38 e alle bombe guidate KAB, fino a circa 7 tonnellate di carico.",

  bento: [
    {
      icon: "missile",
      span: 3,
      title: "L'ultimo erede del MiG-29",
      text: "Conserva l'agilità del Fulcrum ma aggiunge tutto ciò che mancava all'originale: avionica moderna, più raggio e un armamento aggiornato su nove piloni.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar Zhuk + OLS",
      text: "Radar a scansione (con versione AESA Zhuk-A per l'export) affiancato dal sensore elettro-ottico OLS: vede più lontano e in modo più completo del MiG-29.",
    },
    {
      icon: "computer",
      span: 2,
      title: "Cabina digitale + FBW",
      text: "Grandi display multifunzione e comandi fly-by-wire al posto degli strumenti analogici del Fulcrum originale.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Motori RD-33MK",
      text: "Versione potenziata dei motori del MiG-29, con una variante a spinta vettoriale (OVT) per la super-manovrabilità.",
    },
    {
      icon: "star",
      span: 2,
      title: "Un'occasione mancata",
      text: "Pochi esemplari e quasi nessun successo all'export: il MiG-35 non è riuscito a rilanciare la Mikoyan come sperato.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "17,3 m" },
        { k: "Apertura alare", v: "12,0 m" },
        { k: "Altezza", v: "4,7 m" },
        { k: "Peso a vuoto", v: "~11.000 kg" },
        { k: "Peso max decollo", v: "~24.500 kg" },
        { k: "Carico bellico", v: "~7.000 kg" },
        { k: "Punti d'aggancio", v: "9" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.25" },
        { k: "In km/h", v: "~2.400" },
        { k: "Tangenza", v: "~16.000 m" },
        { k: "Raggio di combatt.", v: "~1.000 km" },
        { k: "Autonomia", v: "~3.000 km" },
        { k: "Fattore di carico", v: "+9 g" },
        { k: "Equipaggio", v: "1 / 2 (D)" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Klimov RD-33MK" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~88 kN" },
        { k: "Spinta vettoriale", v: "opzionale (OVT)" },
        { k: "Radar", v: "Zhuk-A AESA" },
        { k: "Sensori", v: "OLS IRST + FBW" },
        { k: "Cannone", v: "GSh-30-1 30mm" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar Zhuk + OLS IRST",
      text: "Radar a scansione (con versione AESA Zhuk-A per l'esportazione) affiancato dal sensore elettro-ottico OLS: il MiG-35 individua i bersagli più lontano e in modo più completo del MiG-29 da cui deriva.",
      meta: { k: "Radar", v: "Zhuk-A (AESA opz.)" },
    },
    {
      icon: "computer",
      badge: { label: "Avionica", variant: "gold" },
      title: "Cabina digitale + fly-by-wire",
      text: "Abbandonati gli strumenti analogici del MiG-29: cabina con grandi display multifunzione, comandi fly-by-wire e sistemi di missione moderni, più facili da gestire per il pilota.",
      meta: { k: "Comandi", v: "FBW digitale" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Klimov RD-33MK",
      text: "Versione potenziata e più longeva dei motori del MiG-29; una variante con ugelli a spinta vettoriale (RD-33OVT) è stata dimostrata per ottenere una manovrabilità estrema.",
      meta: { k: "Spinta A/B cad.", v: "~88 kN" },
    },
    {
      icon: "missile",
      badge: { label: "Armamento", variant: "gold" },
      title: "Arsenale aggiornato su 9 piloni",
      text: "Nove punti d'aggancio integrano missili aria-aria a guida attiva R-77, R-73/R-74 a corto raggio e un'ampia gamma di armi aria-superficie (Kh-29/31/38, bombe KAB).",
      meta: { k: "Piloni", v: "9" },
    },
    {
      icon: "plane",
      badge: { label: "Prestazioni", variant: "cyan" },
      title: "Più raggio, traccia ridotta",
      text: "Più carburante interno e accorgimenti per ridurre la firma radar correggono i due limiti storici del Fulcrum: il raggio d'azione sale a circa 1.000 km e la sezione radar si riduce.",
      meta: { k: "Raggio", v: "~1.000 km" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "GSh-30-1", text: "Cannone da 30 mm con 150 colpi per il combattimento ravvicinato, eredità del MiG-29.", reach: "~1,8 km", rangePct: 4 },
    { kind: "Corto raggio", title: "R-73 / R-74", text: "Missili aria-aria a infrarossi ad alta agilità, puntabili col mirino sul casco.", reach: "~30 km", rangePct: 16 },
    { kind: "Aria-suolo", title: "Kh-29 / Kh-38 / KAB", text: "Missili e bombe guidate per l'attacco di precisione contro bersagli terrestri.", reach: "~40 km", rangePct: 28 },
    { kind: "Medio raggio", title: "R-77 (AA-12)", text: "Missile aria-aria a guida radar attiva «lancia e dimentica» per ingaggi oltre l'orizzonte visivo.", reach: "~110 km", rangePct: 62 },
    { kind: "Stand-off", title: "Kh-31", text: "Missile ad alta velocità antiradar e antinave, per colpire difese e bersagli navali a distanza.", reach: "~160 km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Monoposto", code: "MiG-35 (S)", text: "La versione a posto singolo: il caccia multiruolo di base." },
    { sub: "// Biposto", code: "MiG-35D (UB)", text: "Versione a due posti per l'addestramento e le missioni più complesse." },
    { sub: "// Origine", code: "MiG-29M / M2", text: "La base di partenza: le versioni profondamente modernizzate del MiG-29 da cui il MiG-35 deriva direttamente." },
    { sub: "// Super-manovra", code: "MiG-29OVT", text: "Il dimostratore con ugelli a spinta vettoriale che anticipò molte soluzioni poi confluite nel MiG-35." },
    { sub: "// Export", code: "Zhuk-A AESA", text: "Le versioni d'esportazione offrono il radar AESA Zhuk-A; il MiG-35 è stato proposto a India ed Egitto, con scarso esito." },
    { sub: "// Bilancio", code: "Occasione mancata", text: "Prodotto in pochissimi esemplari e senza grandi vendite, è considerato un mezzo insuccesso, simbolo delle difficoltà della Mikoyan." },
  ],

  timeline: [
    { year: "Anni 2000", tag: { label: "Origini" }, title: "Dal MiG-29 al MiG-35", text: "Il MiG-35 nasce dalle versioni modernizzate del MiG-29 (M/M2) e dal dimostratore a spinta vettoriale OVT. L'obiettivo è trasformare il vecchio intercettore a corto raggio in un multiruolo moderno e competitivo sul mercato mondiale." },
    { year: "2007", tag: { label: "Demonstrator", variant: "gold" }, title: "Il debutto ad Aero India", text: "Il dimostratore MiG-35 è presentato al salone Aero India del 2007, pensato soprattutto per la gigantesca gara indiana MMRCA per oltre cento caccia.", media: { src: "/images/aircraft/mig-35/mig35-maks2009.jpg", width: 1280, height: 814, alt: "Il MiG-35 in dimostrazione al salone MAKS 2009", caption: "MiG-35 al MAKS 2009 · Vitaly V. Kuzmin (CC BY-SA 4.0)" } },
    { year: "2012", tag: { label: "MMRCA" }, title: "La sconfitta in India", text: "La grande occasione sfuma: nella gara MMRCA l'India sceglie il Rafale francese. È un colpo duro per il MiG-35, che perde il cliente su cui aveva puntato gran parte delle proprie speranze commerciali." },
    { year: "2016–17", tag: { label: "Serie", variant: "cyan" }, title: "Il MiG-35 di serie", text: "La versione di produzione modernizzata compie il primo volo nel dicembre 2016 ed è presentata ufficialmente nel gennaio 2017, con avionica e sistemi aggiornati rispetto al dimostratore.", media: { src: "/images/aircraft/mig-35/mig35-maks2019.jpg", width: 1280, height: 848, alt: "Un MiG-35 di serie esposto al MAKS 2019", caption: "MiG-35 di serie · MAKS 2019 · A. Ermakov (CC BY-SA 4.0)" } },
    { year: "Cosa cambia", tag: { label: "Evoluzione", variant: "gold" }, title: "Tutto ciò che mancava al Fulcrum", text: "Cabina digitale, comandi fly-by-wire, radar moderno (con opzione AESA), più carburante e raggio, armamento aggiornato: il MiG-35 corregge i difetti storici del MiG-29, soprattutto l'autonomia ridotta." },
    { year: "2019", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il 17 giugno 2019 i primi due MiG-35 di serie sono consegnati alle forze aerospaziali russe. Gli ordini, però, restano per pochi esemplari." },
    { year: "Sensori", tag: { label: "Avionica" }, title: "Radar e sistemi", text: "Il radar Zhuk (con versione AESA per l'export) e il sensore OLS, uniti al fly-by-wire, portano il vecchio Fulcrum nell'era digitale, almeno sulla carta competitivo con i 4.5 occidentali." },
    { year: "Numeri", tag: { label: "Produzione" }, title: "Pochi esemplari", text: "A differenza del MiG-29, costruito in oltre 1.600 unità, il MiG-35 è stato realizzato solo in una manciata di esemplari: gli ordini russi sono limitati e i contratti d'esportazione attesi non si sono concretizzati.", media: { src: "/images/aircraft/mig-35/mig35-maks2011.jpg", width: 1280, height: 960, alt: "Un MiG-35 in mostra al MAKS 2011", caption: "MiG-35 al MAKS 2011 · Nockson (CC BY-SA 3.0)" } },
    { year: "Bilancio", tag: { label: "Insuccesso" }, title: "Un'occasione in gran parte mancata", text: "Molti analisti considerano il MiG-35 un insuccesso: arrivato tardi e in un mercato dominato da concorrenti più capaci, non è riuscito a rilanciare la Mikoyan come progettista di caccia di prima linea." },
    { year: "Eredità", tag: { label: "Fulcrum" }, title: "Il capitolo finale del Fulcrum", text: "Per quanto poco diffuso, il MiG-35 resta la versione più raffinata di una famiglia — quella del MiG-29 — nata in piena Guerra Fredda e ancora oggi tra le più riconoscibili dell'aviazione." },
  ],

  facts: [
    {
      title: "L'ultimo erede del MiG-29",
      text: "Il MiG-35 è la versione più evoluta del Fulcrum: aggiunge cabina digitale, fly-by-wire, radar moderno e più raggio d'azione, correggendo proprio i limiti che avevano frenato il MiG-29.",
    },
    {
      title: "Nato per l'India",
      text: "Fu sviluppato e promosso soprattutto per la grande gara indiana MMRCA: quando nel 2012 l'India scelse il Rafale, il MiG-35 perse il cliente su cui contava di più.",
    },
    {
      title: "Pochissimi esemplari",
      text: "A fronte degli oltre 1.600 MiG-29 costruiti, il MiG-35 è stato realizzato solo in una manciata di unità: gli ordini russi sono modesti e l'export non è mai decollato.",
    },
    {
      title: "Spinta vettoriale dimostrata",
      text: "Il dimostratore con motori a ugelli orientabili (OVT) mostrò una super-manovrabilità spettacolare, ma questa capacità è rimasta un'opzione più che una dotazione di serie.",
    },
    {
      title: "Un mezzo insuccesso",
      text: "Arrivato tardi e in un mercato affollato, il MiG-35 è oggi visto come un'occasione mancata, simbolo del declino della Mikoyan come grande nome dei caccia di prima linea.",
    },
  ],

} satisfies Aircraft;
