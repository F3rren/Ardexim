import type { Aircraft } from "./types";

export const dassaultRafale: Aircraft = {
  // ---- catalogo ----
  slug: "dassault-rafale",
  name: "Dassault Rafale",
  manufacturer: "Dassault Aviation",
  role: "Caccia multiruolo «omnirole» di 4.5ª generazione",
  country: "Francia",
  firstFlight: "1986",
  service: "2001 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 1.8",
  unitCost: "≈ 70 mln € (2013)",
  profile: { velocita: 82, raggio: 65, agilita: 88, carico: 75, furtivita: 35 },
  thumb: "/images/aircraft/dassault-rafale/rafale-flight.jpg",
  thumbAlt: "Dassault Rafale in volo",
  model3d: "/models/EU/dassault_rafale.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/dassault-rafale-m-fighter-jet-free-0abf2465adb04bc8bc638688fa54ce21",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Caccia multiruolo francese dalla configurazione delta-canard, il Rafale è progettato per fare tutto — difesa aerea, attacco al suolo e antinave, ricognizione e deterrenza nucleare — in una sola missione, da cui il termine «omnirole» coniato da Dassault. Nato dalla scelta della Francia di sviluppare in proprio il suo caccia, è oggi un grande successo all'esportazione.",

  heroBadges: [
    { label: "In servizio · dal 2001", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Multiruolo «omnirole»" },
    { label: "Origine · Francia" },
    { label: "Mach 1.8", variant: "gold" },
  ],

  overviewText:
    "Nel 1985 la Francia lascia il programma Eurofighter per costruire un caccia su misura: serve un velivolo più leggero, navalizzabile per le portaerei e capace di portare la deterrenza nucleare. Il dimostratore Rafale A vola il 4 luglio 1986; il primo Rafale di serie nel 1991. Entra in servizio nella Marina nel 2001 e nell'Armée de l'air nel 2006. Cellula delta con canard ravvicinati, comandi fly-by-wire, radar AESA, suite di guerra elettronica SPECTRA e un sensore ottico frontale ne fanno un caccia tra i più completi della sua generazione, interamente francese «dalla fusoliera al missile».",
  armamentText:
    "Fino a ~9.500 kg di carico su 14 punti d'aggancio: dal duello aereo con il Meteor all'attacco in profondità con lo SCALP, dall'antinave Exocet fino al missile nucleare ASMP-A.",

  bento: [
    {
      icon: "plane",
      span: 3,
      title: "Delta-canard «omnirole»",
      text: "Ala a delta con alette canard ravvicinate e fly-by-wire: grande agilità e la capacità di passare, nella stessa missione, da caccia a cacciabombardiere a ricognitore.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Radar RBE2-AA AESA",
      text: "Primo radar a scansione elettronica attiva europeo in servizio su un caccia: ampio raggio di scoperta, tracciamento multiplo e mappatura del terreno.",
    },
    {
      icon: "bolt",
      span: 2,
      title: "Suite SPECTRA",
      text: "Sistema di guerra elettronica integrato per l'autoprotezione: rileva, identifica e disturba le minacce, riducendo il bisogno di velivoli di scorta.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Tutto francese",
      text: "Due motori Safran M88, missili e avionica nazionali: la scelta dell'indipendenza, con la capacità imbarcata e nucleare che ne è derivata.",
    },
    {
      icon: "missile",
      span: 2,
      title: "Dal Meteor al nucleare",
      text: "Porta il missile aria-aria a lunghissima gittata Meteor e il missile nucleare ASMP-A: la componente aerea della deterrenza francese.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "15,27 m" },
        { k: "Apertura alare", v: "10,80 m" },
        { k: "Altezza", v: "5,34 m" },
        { k: "Superficie alare", v: "45,7 m²" },
        { k: "Peso a vuoto", v: "~10.300 kg" },
        { k: "Peso max decollo", v: "24.500 kg" },
        { k: "Carico bellico", v: "~9.500 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 1.8" },
        { k: "In km/h", v: "~1.912" },
        { k: "Tangenza", v: "~15.200 m" },
        { k: "Rateo di salita", v: "+305 m/s" },
        { k: "Raggio di combatt.", v: "~1.850 km" },
        { k: "Fattore di carico", v: "+9 / −3,6 g" },
        { k: "Punti d'aggancio", v: "14" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Safran M88-2" },
        { k: "Tipo", v: "Turbofan A/B" },
        { k: "Spinta/cad. (A/B)", v: "~75 kN" },
        { k: "Spinta a secco", v: "~50 kN" },
        { k: "Radar", v: "RBE2-AA AESA" },
        { k: "Cannone", v: "Nexter 30mm" },
        { k: "Colpi", v: "125" },
      ],
    },
  ],

  systems: [
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar Thales RBE2-AA AESA",
      text: "Il primo radar AESA europeo entrato in servizio su un caccia: scoperta a lungo raggio, tracciamento simultaneo di molti bersagli, mappatura del terreno e forte resistenza ai disturbi.",
      meta: { k: "Tipo", v: "AESA" },
    },
    {
      icon: "bolt",
      badge: { label: "Guerra elettronica", variant: "cyan" },
      title: "Suite SPECTRA",
      text: "Sistema di autoprotezione integrato (rilevatori, disturbatori ed esche): individua e identifica le minacce e le neutralizza, permettendo al Rafale di operare senza velivoli di scorta dedicati.",
      meta: { k: "Funzioni", v: "RWR / ECM / esche" },
    },
    {
      icon: "plane",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Cellula delta-canard + FBW",
      text: "Ala a delta con canard ravvicinati e comandi fly-by-wire digitali: instabilità controllata per la massima agilità e ottime prestazioni in tutto l'inviluppo di volo, dalla bassa quota al supersonico.",
      meta: { k: "Comandi", v: "FBW digitale" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Safran M88-2",
      text: "Due turbofan con postbruciatore interamente francesi: efficienti, robusti e capaci della spinta necessaria per il decollo a pieno carico e per l'impiego imbarcato.",
      meta: { k: "Spinta A/B cad.", v: "~75 kN" },
    },
    {
      icon: "missile",
      badge: { label: "Deterrenza", variant: "gold" },
      title: "Vettore nucleare ASMP-A",
      text: "Oltre all'arsenale convenzionale, il Rafale porta il missile da crociera nucleare ASMP-A: è la componente aerea della force de dissuasion francese.",
      meta: { k: "Arma", v: "ASMP-A" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "Nexter 30M791", text: "Cannone da 30 mm con 125 colpi per il combattimento ravvicinato e l'appoggio al suolo.", reach: "~2,5 km", rangePct: 4 },
    { kind: "Corto raggio", title: "MICA IR", text: "Missile aria-aria multiruolo a guida infrarossa per il dogfight e l'autodifesa.", reach: "~20 km", rangePct: 11 },
    { kind: "Antinave", title: "Exocet AM39", text: "Missile antinave a volo radente per colpire bersagli navali a media distanza.", reach: "~70 km", rangePct: 24 },
    { kind: "Lungo raggio (BVR)", title: "MBDA Meteor", text: "Missile aria-aria a statoreattore: ingaggi oltre l'orizzonte visivo a lunghissima distanza, con la più ampia «no-escape zone» della categoria.", reach: "150+ km", rangePct: 52 },
    { kind: "Da crociera", title: "SCALP-EG", text: "Missile da crociera stealth per l'attacco di precisione in profondità contro bersagli pesantemente difesi; nell'arsenale anche le bombe AASM Hammer.", reach: "560+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Caccia", code: "Rafale C", text: "Monoposto da combattimento dell'Armée de l'air: la versione terrestre monoposto, la più diffusa nella flotta francese." },
    { sub: "// Biposto", code: "Rafale B", text: "Versione biposto dell'Aeronautica per addestramento e missioni complesse, inclusa la missione nucleare con due membri d'equipaggio." },
    { sub: "// Navale", code: "Rafale M", text: "Versione imbarcata per la portaerei Charles de Gaulle, con carrello rinforzato e gancio d'arresto per catapulta e appontaggio." },
    { sub: "// Standard", code: "F3-R / F4", text: "Gli aggiornamenti incrementali: l'F3-R integra il missile Meteor, l'F4 (dal 2023) porta nuovi sensori, connettività e armi di ultima generazione." },
    { sub: "// Export", code: "Clienti esteri", text: "Egitto, Qatar, India, Grecia, Croazia, Emirati, Indonesia e Serbia: negli anni 2020 il Rafale è diventato un grande successo all'esportazione." },
    { sub: "// Futuro", code: "Standard F5", text: "Il prossimo standard, atteso verso il 2030, porterà nuove armi, guerra elettronica avanzata e l'impiego in coppia con droni gregari." },
  ],

  timeline: [
    { year: "1985", tag: { label: "Origini" }, title: "La Francia lascia l'Eurofighter", text: "Nel 1985 la Francia esce dal programma di caccia europeo comune: chiede un velivolo più leggero, navalizzabile per le sue portaerei e capace di trasportare la deterrenza nucleare. Dassault parte così a sviluppare in proprio quello che diventerà il Rafale." },
    { year: "1986", tag: { label: "Dimostratore", variant: "gold" }, title: "Il primo volo del Rafale A", text: "Il 4 luglio 1986 vola il dimostratore tecnologico Rafale A: più grande dei modelli di serie, serve a validare l'aerodinamica delta-canard, i materiali compositi e i comandi fly-by-wire della futura famiglia.", media: { src: "/images/aircraft/dassault-rafale/rafale-a-1986.jpg", width: 1280, height: 832, alt: "Il dimostratore Dassault Rafale A a Farnborough nel 1986", caption: "Dimostratore Rafale A · Farnborough 1986 · Dick Gilbert (CC BY 2.0)" } },
    { year: "1991", tag: { label: "Serie" }, title: "Il primo Rafale di produzione", text: "Il 19 maggio 1991 vola il primo Rafale C di serie. Lo sviluppo è lungo e curato: il caccia deve poter sostituire da solo numerosi tipi diversi in servizio nelle forze francesi, dalla difesa aerea all'attacco." },
    { year: "2001", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio nella Marina", text: "Il Rafale M entra in linea con l'Aéronavale francese e diventa operativo sulla portaerei a propulsione nucleare Charles de Gaulle: è il primo caccia europeo di nuova generazione imbarcato.", media: { src: "/images/aircraft/dassault-rafale/rafale-m-carrier.jpg", width: 1280, height: 755, alt: "Un Rafale M della Marina francese al lancio da una portaerei", caption: "Rafale M al lancio da portaerei · U.S. Navy (PD)" } },
    { year: "2006", tag: { label: "Aeronautica", variant: "cyan" }, title: "L'Armée de l'air operativa", text: "Nel 2006 anche l'Aeronautica francese dichiara operativo il Rafale, che inizia a sostituire una pletora di velivoli più vecchi (Mirage F1, Jaguar, Mirage 2000 in alcuni ruoli e i Crusader navali già ritirati)." },
    { year: "2011–14", tag: { label: "Operazioni", variant: "gold" }, title: "Libia, Mali e contro l'ISIS", text: "Il Rafale dà prova della sua filosofia «omnirole»: apre la campagna sulla Libia nel 2011, interviene in Mali nel 2013 (operazione Serval) e colpisce lo Stato Islamico in Iraq e Siria dal 2014, alternando ricognizione, difesa aerea e attacco di precisione." },
    { year: "2015", tag: { label: "Export", variant: "cyan" }, title: "Il successo all'esportazione", text: "L'Egitto diventa nel 2015 il primo cliente estero, aprendo una lunga serie di contratti: Qatar, India, Grecia, Croazia, Emirati Arabi, Indonesia e Serbia scelgono il Rafale, consacrandolo come uno dei caccia di maggior successo del decennio.", media: { src: "/images/aircraft/dassault-rafale/rafale-c-2025.jpg", width: 1280, height: 720, alt: "Un Dassault Rafale C al Paris Air Show 2025", caption: "Rafale C · Paris Air Show 2025 · Kilyann Le Hen (CC BY 4.0)" } },
    { year: "F3-R / F4", tag: { label: "Evoluzione", variant: "gold" }, title: "Meteor, AESA e standard F4", text: "Gli standard successivi potenziano il caccia: lo standard F3-R integra il missile a lunghissima gittata Meteor e nuovi pod, mentre l'F4 (dal 2023) porta connettività avanzata, nuovi sensori e armamento di ultima generazione." },
    { year: "Deterrenza", tag: { label: "Nucleare" }, title: "La componente aerea della force de frappe", text: "Con il missile nucleare ASMP-A il Rafale assolve un ruolo strategico unico tra i caccia europei: è uno dei pilastri della deterrenza nazionale francese, accanto ai sottomarini lanciamissili." },
    { year: "Futuro", tag: { label: "F5" }, title: "Verso lo standard F5", text: "Lo sviluppo continua: lo standard F5, atteso intorno al 2030, introdurrà nuove armi, una guerra elettronica ancora più avanzata e la cooperazione con droni gregari, mantenendo il Rafale rilevante per i decenni a venire." },
  ],

  facts: [
    {
      title: "«Omnirole», non solo multiruolo",
      text: "Dassault ha coniato il termine «omnirole» per sottolineare che il Rafale può svolgere più ruoli diversi — caccia, attacco, ricognizione, antinave, nucleare — non solo nello stesso aereo, ma persino nella stessa missione.",
    },
    {
      title: "Figlio del «divorzio» europeo",
      text: "Il Rafale nasce perché nel 1985 la Francia lasciò il progetto del futuro caccia europeo (poi Eurofighter), volendo un velivolo più leggero, imbarcabile e adatto alla deterrenza nucleare nazionale: due strade diverse per due filosofie diverse.",
    },
    {
      title: "Un caccia tutto francese",
      text: "Cellula, motori Safran M88, radar Thales, missili MBDA: il Rafale è uno dei pochi caccia al mondo realizzato quasi interamente dall'industria di un solo Paese, scelta che garantisce piena indipendenza operativa.",
    },
    {
      title: "Raid a lunghissimo raggio",
      text: "Il Rafale ha condotto alcune delle missioni d'attacco più lunghe della sua categoria, decollando dalla Francia metropolitana e colpendo obiettivi in Africa o Medio Oriente con il supporto di più rifornimenti in volo.",
    },
    {
      title: "Esplosione di vendite negli anni 2020",
      text: "Dopo un avvio lento sul mercato estero, dal 2015 il Rafale ha collezionato ordini da otto Paesi diversi, diventando uno dei maggiori successi d'esportazione dell'industria aeronautica europea.",
    },
  ],

};
