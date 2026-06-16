import type { Aircraft } from "./types";

export const mitsubishiF2 = {
  // ---- catalogo ----
  slug: "mitsubishi-f-2",
  name: "Mitsubishi F-2",
  manufacturer: "Mitsubishi / Lockheed Martin",
  role: "Caccia multiruolo / cacciabombardiere antinave",
  country: "Giappone",
  firstFlight: "1995",
  service: "2000 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2",
  unitCost: "≈ 12 mld ¥",
  profile: { velocita: 80, raggio: 60, agilita: 78, carico: 60, furtivita: 18 },
  thumb: "/images/aircraft/mitsubishi-f-2/f2-flight.jpg",
  thumbAlt: "Un Mitsubishi F-2 della JASDF in volo",
  model3d: "/models/JAP/mitsubishi_f-2_-_fighter_jet.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/mitsubishi-f-2-fighter-jet-free-d3d7244554974f499b106e6c11fe3aaf",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Derivato giapponese dell'F-16, ma più grande e ottimizzato per il mare: l'F-2 è il caccia con cui il Giappone difende il proprio arcipelago, specializzato nell'attacco antinave. È passato alla storia per un primato tecnologico — il primo caccia di serie al mondo a entrare in servizio con un radar AESA — e per il prezzo elevato di un programma tutto nazionale.",

  heroBadges: [
    { label: "In servizio · dal 2000", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo / antinave" },
    { label: "Origine · Giappone" },
    { label: "Mach 2", variant: "gold" },
  ],

  overviewText:
    "Alla fine degli anni '80 il Giappone volle un caccia nazionale (programma FS-X) per difendere le proprie isole. Le pressioni statunitensi portarono a una via di mezzo: un velivolo derivato dall'F-16 ma sviluppato insieme a Lockheed Martin, una collaborazione non priva di tensioni politiche. Il risultato, l'F-2, è un «F-16 cresciuto»: ala più ampia del 25% in compositi, più carburante e raggio, e un'avionica giapponese. Primo volo nel 1995, in servizio dal 2000. Pensato soprattutto per l'attacco antinave a difesa dell'arcipelago, è ricordato anche per essere stato il primo caccia operativo al mondo con radar AESA.",
  armamentText:
    "Cannone interno e tredici punti d'aggancio: missili aria-aria di sviluppo giapponese (AAM-3/4/5) e — soprattutto — fino a quattro missili antinave ASM, il suo carico d'attacco caratteristico a difesa delle isole.",

  bento: [
    {
      icon: "radar",
      span: 3,
      title: "Primo radar AESA al mondo",
      text: "L'F-2 è stato il primo caccia di serie a entrare in servizio con un radar a scansione elettronica attiva (J/APG-1): un primato giapponese, anni prima degli AESA occidentali.",
    },
    {
      icon: "plane",
      span: 3,
      title: "Un F-16 ingrandito",
      text: "Derivato dall'F-16 ma con ala più ampia del 25% in compositi co-induriti: più carburante, più carico e più raggio, ottimizzato per le lunghe distanze sul mare.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Specialista antinave",
      text: "Concepito per difendere l'arcipelago: può trasportare fino a quattro missili antinave ASM, un carico d'attacco marittimo notevole.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Motore GE F110",
      text: "Un singolo turbofan F110-GE-129 con postbruciatore, lo stesso della famiglia F-16, per spingere la cellula ingrandita.",
    },
    {
      icon: "star",
      span: 2,
      title: "Capacità sovrana",
      text: "Costoso e prodotto in pochi esemplari, ma simbolo della volontà giapponese di mantenere una propria industria dei caccia.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "15,52 m" },
        { k: "Apertura alare", v: "11,13 m" },
        { k: "Altezza", v: "4,96 m" },
        { k: "Superficie alare", v: "~34,8 m²" },
        { k: "Peso a vuoto", v: "~9.500 kg" },
        { k: "Peso max decollo", v: "~22.100 kg" },
        { k: "Punti d'aggancio", v: "13" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2" },
        { k: "In km/h", v: "~2.120" },
        { k: "Tangenza", v: "~18.000 m" },
        { k: "Raggio di combatt.", v: "~830 km" },
        { k: "Fattore di carico", v: "+9 g" },
        { k: "Equipaggio", v: "1 / 2 (F-2B)" },
        { k: "Carico bellico", v: "~8.000 kg" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motore", v: "1× GE F110-GE-129" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta (A/B)", v: "~131 kN" },
        { k: "Radar", v: "J/APG-1 AESA" },
        { k: "Cannone", v: "M61A1 20mm" },
        { k: "Antinave", v: "missili ASM" },
        { k: "Base", v: "derivato dall'F-16" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar J/APG-1 AESA",
      text: "L'F-2 è stato il primo caccia di serie al mondo a entrare in servizio con un radar a scansione elettronica attiva (AESA): un primato tecnologico giapponese, conseguito anni prima dei radar AESA occidentali e russi.",
      meta: { k: "Primato", v: "1° AESA di serie" },
    },
    {
      icon: "plane",
      badge: { label: "Cellula", variant: "cyan" },
      title: "Un F-16 più grande",
      text: "Derivato dall'F-16, ma con un'ala più ampia di circa il 25% e in materiali compositi co-induriti: più carburante, più punti d'aggancio e più raggio del progenitore, ottimizzato sulle lunghe distanze marittime.",
      meta: { k: "Ala", v: "+25% vs F-16" },
    },
    {
      icon: "missile",
      badge: { label: "Antinave", variant: "gold" },
      title: "Specialista marittimo",
      text: "La missione principale è difendere l'arcipelago giapponese dal mare: l'F-2 può trasportare fino a quattro missili antinave ASM, un carico d'attacco marittimo notevole per un caccia tattico.",
      meta: { k: "Antinave", v: "fino a 4 ASM" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "Motore GE F110-GE-129",
      text: "Un singolo turbofan con postbruciatore, lo stesso che equipaggia le versioni più potenti dell'F-16, scelto per spingere la cellula ingrandita dell'F-2.",
      meta: { k: "Spinta A/B", v: "~131 kN" },
    },
    {
      icon: "star",
      badge: { label: "Industria", variant: "cyan" },
      title: "Capacità sovrana",
      text: "Frutto del controverso programma congiunto FS-X con gli Stati Uniti: costoso e prodotto in pochi esemplari, ma espressione della volontà giapponese di conservare una propria industria dei caccia.",
      meta: { k: "Esemplari", v: "98 costruiti" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "M61A1 Vulcan", text: "Rotativa a 6 canne da 20 mm per il combattimento ravvicinato, eredità dell'F-16.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AAM-5 / AIM-9", text: "Missili aria-aria a guida infrarossa ad alta agilità per il dogfight (AAM-5 di sviluppo giapponese).", reach: "~35 km", rangePct: 16 },
    { kind: "Medio raggio", title: "AAM-4", text: "Missile aria-aria a guida radar attiva di sviluppo nazionale per ingaggi oltre l'orizzonte visivo.", reach: "~100 km", rangePct: 45 },
    { kind: "Antinave", title: "ASM-2", text: "Missile antinave a guida infrarossa: il carico d'attacco marittimo simbolo dell'F-2, per colpire le navi a distanza.", reach: "~170 km", rangePct: 75 },
    { kind: "Antinave supersonico", title: "ASM-3", text: "Missile antinave supersonico di nuova generazione, per saturare le difese navali a lunga distanza.", reach: "200+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Monoposto", code: "F-2A", text: "La versione da combattimento a posto singolo: 62 esemplari, il grosso della flotta giapponese." },
    { sub: "// Biposto", code: "F-2B", text: "Versione a due posti per addestramento e missioni complesse: 32 esemplari." },
    { sub: "// Origine", code: "F-16 / FS-X", text: "La base di partenza: l'F-16, imposto come punto di partenza del programma FS-X dopo le pressioni statunitensi contro un progetto interamente giapponese." },
    { sub: "// Prototipi", code: "XF-2", text: "I quattro prototipi (due monoposto e due biposto) che dal 1995 validarono il progetto." },
    { sub: "// Aggiornamenti", code: "F-2 ammodernato", text: "Aggiornamenti con radar J/APG-2 migliorato, nuovi missili (AAM-4B) e capacità di data-link per restare efficace." },
    { sub: "// Successore", code: "GCAP", text: "L'F-2 sarà sostituito dal caccia di sesta generazione del Global Combat Air Programme (Giappone, Regno Unito, Italia) dal ~2035." },
  ],

  timeline: [
    { year: "Anni '80", tag: { label: "Origini" }, title: "Il programma FS-X", text: "Il Giappone voleva sviluppare in proprio un caccia (FS-X) per difendere le sue isole. Le pressioni statunitensi imposero però di partire dall'F-16 e di collaborare con Lockheed Martin: una soluzione di compromesso, fonte di tensioni politiche tra i due alleati." },
    { year: "1995", tag: { label: "Primo volo", variant: "gold" }, title: "Il primo volo dell'XF-2", text: "Il 7 ottobre 1995 il prototipo XF-2 compie il primo volo. Esternamente simile a un F-16, è in realtà un aereo più grande, con ala in compositi e sistemi giapponesi." },
    { year: "Primato", tag: { label: "AESA", variant: "cyan" }, title: "Il primo caccia AESA al mondo", text: "L'F-2 entra in servizio equipaggiato con il radar J/APG-1: è il primo caccia di serie al mondo a montare un radar a scansione elettronica attiva (AESA), un primato che precede di anni gli sviluppi occidentali e russi.", media: { src: "/images/aircraft/mitsubishi-f-2/f2-jasdf.jpg", width: 1280, height: 853, alt: "Un Mitsubishi F-2 della JASDF", caption: "Mitsubishi F-2 della JASDF · 航空自衛隊 (CC BY 4.0)" } },
    { year: "2000", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Dal 2000 l'F-2 entra in linea nella Japan Air Self-Defense Force, affiancando gli F-15J nella difesa aerea ma con un ruolo distintivo: l'attacco antinave a protezione delle coste.", media: { src: "/images/aircraft/mitsubishi-f-2/f2-formation.jpg", width: 1280, height: 914, alt: "Formazione di caccia F-2 della JASDF", caption: "Formazione di F-2 della JASDF · U.S. Air Force / DoD (PD)" } },
    { year: "Antinave", tag: { label: "Missione", variant: "gold" }, title: "Difendere l'arcipelago dal mare", text: "Per un Paese di isole circondato dal mare, la minaccia principale arriva dalle flotte. L'F-2 è ottimizzato proprio per questo: lungo raggio sull'acqua e fino a quattro missili antinave ASM per colpire le navi nemiche a distanza.", media: { src: "/images/aircraft/mitsubishi-f-2/f2-flight2.jpg", width: 1280, height: 853, alt: "Un Mitsubishi F-2 in volo", caption: "Mitsubishi F-2 in volo · Jerry Gunner (CC BY 2.0)" } },
    { year: "Differenze", tag: { label: "Cellula" }, title: "Non un semplice F-16", text: "Ala più ampia e in compositi, muso ridisegnato per il nuovo radar, più piloni e più carburante: pur partendo dall'F-16, l'F-2 è abbastanza diverso da essere un aereo a sé, tarato sulle esigenze giapponesi." },
    { year: "2011", tag: { label: "Tsunami" }, title: "Il disastro di Matsushima", text: "L'11 marzo 2011 lo tsunami che colpì il Giappone inondò la base di Matsushima, danneggiando o distruggendo 18 F-2. Molti furono poi faticosamente ricostruiti, con costi di riparazione enormi (oltre 80 miliardi di yen)." },
    { year: "Costi", tag: { label: "Programma" }, title: "Pochi e costosi", text: "Tra sviluppo nazionale e produzione limitata (98 esemplari, conclusa nel 2011), l'F-2 è costato molto più di un F-16 di pari ruolo: il prezzo da pagare per mantenere viva un'industria aeronautica nazionale.", media: { src: "/images/aircraft/mitsubishi-f-2/f2-sunset.jpg", width: 1280, height: 853, alt: "F-2 della JASDF in formazione al tramonto", caption: "F-2 della JASDF al tramonto · Min. Difesa Giappone (PD)" } },
    { year: "Modernizzazione", tag: { label: "Aggiornamenti", variant: "cyan" }, title: "Restare efficace", text: "Negli anni l'F-2 ha ricevuto un radar J/APG-2 migliorato, nuovi missili come l'AAM-4B e capacità di data-link, mantenendolo competitivo in attesa del successore." },
    { year: "~2035", tag: { label: "GCAP", variant: "gold" }, title: "Verso il GCAP", text: "L'F-2 sarà sostituito dal caccia di sesta generazione del Global Combat Air Programme, sviluppato dal Giappone insieme a Regno Unito e Italia: un programma che lega il futuro dell'aviazione giapponese anche all'industria europea." },
  ],

  facts: [
    {
      title: "Il primo caccia AESA al mondo",
      text: "L'F-2 è entrato in servizio con il radar J/APG-1, il primo radar a scansione elettronica attiva (AESA) su un caccia di serie: un primato tecnologico giapponese che ha anticipato l'Occidente.",
    },
    {
      title: "Un F-16 cresciuto",
      text: "Basato sull'F-16 ma con ala più ampia del 25%, in materiali compositi e con più raggio: un aereo pensato per le grandi distanze del Pacifico più che per il dogfight ravvicinato.",
    },
    {
      title: "Cacciatore di navi",
      text: "La sua missione principale è l'attacco antinave a difesa dell'arcipelago: può portare fino a quattro missili ASM, una capacità marittima rara per un caccia tattico monomotore.",
    },
    {
      title: "Lo tsunami del 2011",
      text: "Lo tsunami del marzo 2011 distrusse o danneggiò 18 F-2 alla base di Matsushima; molti furono ricostruiti con un costoso e lungo lavoro di recupero.",
    },
    {
      title: "Costoso ma sovrano",
      text: "Molto più caro di un F-16 a causa della bassa produzione e dello sviluppo nazionale, l'F-2 è il prezzo che il Giappone ha scelto di pagare per la propria industria dei caccia. Il successore è il GCAP, sviluppato con Regno Unito e Italia.",
    },
  ],

} satisfies Aircraft;
