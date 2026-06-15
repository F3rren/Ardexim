import type { Aircraft } from "./types";

export const b2Spirit: Aircraft = {
  // ---- catalogo ----
  slug: "b-2-spirit",
  name: "B-2 Spirit",
  manufacturer: "Northrop Grumman",
  role: "Bombardiere strategico stealth",
  country: "USA",
  firstFlight: "1989",
  service: "1997 – oggi",
  status: "in-servizio",
  topSpeed: "~Mach 0.95",
  unitCost: "≈ 2,1 mld $ (1997)",
  thumb: "/images/aircraft/b-2-spirit/b2-flight.jpg",
  thumbAlt: "Bombardiere stealth B-2 Spirit in volo",
  model3d: "/models/USA/northrop_grumman_b-2_spirit.glb",
  model3dCredit: {
    author: "bohmerang",
    url: "https://sketchfab.com/3d-models/northrop-grumman-b-2-spirit-free-9cd6b00813c04401a5427ae71b7a0cdc",
    license: "CC BY-NC-SA 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Inconfondibile ala volante, il B-2 Spirit è il bombardiere strategico stealth per eccellenza: penetra le difese aeree più fitte restando quasi invisibile ai radar e colpisce qualsiasi punto del globo grazie all'autonomia intercontinentale. Ne sono stati costruiti soltanto 21, ciascuno intitolato a uno Stato americano.",

  heroBadges: [
    { label: "In servizio · dal 1997", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Bombardiere strategico" },
    { label: "Origine · USA" },
    { label: "Raggio · 11.000+ km", variant: "gold" },
  ],

  overviewText:
    "Nato dal segretissimo programma Advanced Technology Bomber durante la Guerra Fredda, il B-2 fu affidato a Northrop nell'ottobre 1981 e svelato al pubblico solo nel 1988. La forma ad ala volante — senza fusoliera né code — unita a materiali e rivestimenti radar-assorbenti ne riduce la traccia radar a quella di un piccolo uccello. Concepito per portare la deterrenza nucleare nel cuore dell'Unione Sovietica, oggi è uno strumento d'attacco convenzionale e nucleare capace di missioni di oltre 30 ore, decollando dal Missouri e colpendo all'altro capo del mondo.",
  armamentText:
    "Fino a ~18.000 kg di armamento in due stive interne (per non compromettere la furtività): dalle bombe nucleari della deterrenza strategica ai grandi penetratori anti-bunker, fino ai missili da crociera stand-off.",

  bento: [
    {
      icon: "wing",
      span: 3,
      title: "Ala volante stealth",
      text: "Niente fusoliera né impennaggi: l'intero velivolo è un'unica ala. La forma, unita ai materiali radar-assorbenti, lo rende quasi invisibile ai radar.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Bassa osservabilità totale",
      text: "Progettato per eludere radar, infrarossi, rilevamento acustico e visivo: può penetrare gli spazi aerei più difesi e tornare indietro.",
    },
    {
      icon: "crew",
      span: 2,
      title: "Equipaggio di due",
      text: "Solo due piloti per missioni che possono superare le 40 ore, alternandosi ai comandi con l'aiuto del pilota automatico.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Arsenale strategico",
      text: "Due stive interne portano bombe nucleari, ordigni di precisione e il gigantesco penetratore GBU-57 contro i bunker più profondi.",
    },
    {
      icon: "engine",
      span: 2,
      title: "Raggio intercontinentale",
      text: "Quattro turbofan senza postbruciatore e un'enorme riserva di carburante danno oltre 11.000 km di autonomia, estendibili col rifornimento in volo.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Apertura alare", v: "52,4 m" },
        { k: "Lunghezza", v: "21,0 m" },
        { k: "Altezza", v: "5,18 m" },
        { k: "Superficie alare", v: "478 m²" },
        { k: "Peso a vuoto", v: "~71.700 kg" },
        { k: "Peso max decollo", v: "~170.600 kg" },
        { k: "Carico bellico", v: "~18.000 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "~Mach 0.95" },
        { k: "In km/h", v: "~1.010" },
        { k: "Tangenza", v: "~15.200 m" },
        { k: "Raggio d'azione", v: "~11.100 km" },
        { k: "Con 1 rifornimento", v: "~19.000 km" },
        { k: "Equipaggio", v: "2 piloti" },
        { k: "Missione max", v: "~44 h" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "4× GE F118-GE-100" },
        { k: "Tipo", v: "Turbofan (no A/B)" },
        { k: "Spinta/cad.", v: "~77 kN" },
        { k: "Radar", v: "AN/APG-181 AESA" },
        { k: "Furtività", v: "ala volante + RAM" },
        { k: "Stive interne", v: "2" },
        { k: "In servizio", v: "dal 1997" },
      ],
    },
  ],

  systems: [
    {
      icon: "wing",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Configurazione ad ala volante",
      text: "L'intera struttura è un'unica ala priva di code e fusoliera: una soluzione che abbatte la traccia radar e offre grande efficienza aerodinamica e ampio volume interno per il carico.",
      meta: { k: "Apertura", v: "52,4 m" },
    },
    {
      icon: "radar",
      badge: { label: "Bassa osservabilità", variant: "cyan" },
      title: "Furtività multispettrale",
      text: "Materiali e rivestimenti radar-assorbenti, bordi allineati, prese d'aria e scarichi schermati riducono la firma radar, infrarossa e acustica del velivolo.",
      meta: { k: "Firma radar", v: "minima" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "4× General Electric F118",
      text: "Quattro turbofan senza postbruciatore, sepolti nell'ala con condotti a S: niente firma termica accentuata, niente scia visibile, massima discrezione.",
      meta: { k: "Spinta cad.", v: "~77 kN" },
    },
    {
      icon: "bomb",
      badge: { label: "Armamento", variant: "gold" },
      title: "Due stive interne",
      text: "Tutto l'armamento viaggia all'interno, su lanciatori rotanti, per non alterare la furtività: bombe convenzionali, nucleari e il penetratore GBU-57.",
      meta: { k: "Carico", v: "~18.000 kg" },
    },
    {
      icon: "crew",
      badge: { label: "Resistenza", variant: "cyan" },
      title: "Equipaggio di due, raggio globale",
      text: "Due soli piloti gestiscono missioni che possono superare le 40 ore: il B-2 può colpire qualsiasi obiettivo del pianeta partendo dal territorio statunitense.",
      meta: { k: "Autonomia", v: "~11.100 km" },
    },
  ],

  armament: [
    { kind: "Nucleare", title: "Bombe B61 / B83", text: "Il ruolo strategico originario: ordigni nucleari a caduta, componente aerea della triade di deterrenza statunitense.", reach: "caduta", rangePct: 6 },
    { kind: "Penetratore", title: "GBU-57 MOP", text: "Il «Massive Ordnance Penetrator» da 13,6 tonnellate: concepito per distruggere bunker profondi e fortificati, come i siti nucleari sotterranei.", reach: "caduta · 13,6 t", rangePct: 14 },
    { kind: "Precisione", title: "Bombe JDAM", text: "Fino a 80 bombe a guida GPS in una singola sortita: l'attacco convenzionale di precisione di massa.", reach: "~28 km", rangePct: 24 },
    { kind: "Stand-off", title: "Missili JASSM", text: "Missili da crociera stealth a lungo raggio per colpire bersagli pesantemente difesi senza sorvolarli.", reach: "900+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Standard", code: "Block 30", text: "Lo standard operativo definitivo della flotta: piena capacità d'attacco convenzionale e nucleare e integrazione di sensori e armi moderne." },
    { sub: "// Flotta", code: "21 esemplari", text: "Costruiti in soli 21 esemplari, ciascuno battezzato col nome di uno Stato americano (più lo «Spirit of America»). Uno andò perso in un incidente nel 2008." },
    { sub: "// Aggiornamenti", code: "Modernizzazioni", text: "Negli anni: nuovo radar AESA AN/APG-181, comunicazioni satellitari, integrazione di armi come il GBU-57 e aggiornamento dei sistemi di autodifesa." },
    { sub: "// Eredità", code: "Tacit Blue / ATB", text: "Il progetto nasce dal programma segreto Advanced Technology Bomber, con il dimostratore Tacit Blue a fare da banco di prova per la furtività." },
    { sub: "// Antenato", code: "Northrop YB-49", text: "L'ala volante Northrop risale agli anni '40 con lo YB-35/YB-49: il B-2 ne è l'erede, reso finalmente pratico dall'elettronica di volo moderna." },
    { sub: "// Successore", code: "B-21 Raider", text: "Il nuovo bombardiere stealth Northrop Grumman, più piccolo ed economico, volato nel 2023: dalla fine degli anni 2020 affiancherà e poi sostituirà il B-2." },
  ],

  timeline: [
    { year: "1979–81", tag: { label: "Origini" }, title: "Il programma segreto ATB", text: "In piena Guerra Fredda gli Stati Uniti avviano il programma top-secret Advanced Technology Bomber per un velivolo capace di penetrare le difese sovietiche restando invisibile ai radar. Nell'ottobre 1981 Northrop è scelta come capofila, recuperando la sua antica idea dell'ala volante." },
    { year: "1988–89", tag: { label: "Primo volo", variant: "gold" }, title: "Dalla presentazione al primo volo", text: "Il 22 novembre 1988 il B-2 è svelato al pubblico a Palmdale; il 17 luglio 1989 compie il primo volo a Edwards. La forma ad ala volante, fino ad allora quasi mitologica, diventa realtà.", media: { src: "/images/aircraft/b-2-spirit/b2-edwards-flighttest.jpg", width: 1280, height: 853, alt: "Un B-2 Spirit durante i test di volo su Edwards AFB", caption: "B-2 nei test di volo · Edwards AFB · U.S. Air Force (PD)" } },
    { year: "1997", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio a Whiteman", text: "Il 1º gennaio 1997 il B-2 raggiunge la capacità operativa iniziale, basato a Whiteman AFB (Missouri) con il 509th Bomb Wing, unica base dei B-2 al mondo." },
    { year: "1999", tag: { label: "Kosovo", variant: "gold" }, title: "Il battesimo del fuoco", text: "Durante l'operazione Allied Force sul Kosovo (1999) il B-2 esordisce in combattimento, volando missioni di andata e ritorno dal Missouri di oltre 30 ore e sganciando alcune delle prime bombe JDAM a guida satellitare della storia." },
    { year: "Raggio globale", tag: { label: "Missioni", variant: "cyan" }, title: "Colpire dal cuore degli USA", text: "Grazie al rifornimento in volo il B-2 può raggiungere qualsiasi punto del pianeta: alcune missioni hanno superato le 40 ore di volo continuativo, con i due piloti che si alternano al riposo a bordo.", media: { src: "/images/aircraft/b-2-spirit/b2-refueling.jpg", width: 1280, height: 852, alt: "Un B-2 Spirit durante il rifornimento in volo", caption: "B-2 in rifornimento in volo · U.S. Air Force (PD)" } },
    { year: "2001–03", tag: { label: "Afghanistan · Iraq" }, title: "Enduring e Iraqi Freedom", text: "Dopo l'11 settembre il B-2 è impiegato in Afghanistan e poi in Iraq (2003), aprendo le campagne con attacchi di precisione contro i bersagli più protetti, spesso in missioni di durata record.", media: { src: "/images/aircraft/b-2-spirit/b2-takeoff-fairford.jpg", width: 1280, height: 854, alt: "Un B-2 Spirit al decollo", caption: "B-2 al decollo · U.S. Air Force (PD)" } },
    { year: "2008", tag: { label: "Incidente" }, title: "La perdita dello «Spirit of Kansas»", text: "Nel febbraio 2008 un B-2 precipita al decollo dalla base di Guam per un guasto ai sensori causato dall'umidità: l'equipaggio si salva, ma la flotta scende a 20 esemplari, rendendo ogni aereo ancora più prezioso." },
    { year: "2011", tag: { label: "Libia" }, title: "Operazione Odyssey Dawn", text: "Nel 2011, all'apertura dell'intervento internazionale in Libia, i B-2 decollano dal Missouri per colpire gli aeroporti militari libici, dimostrando ancora una volta la capacità di intervento globale immediato." },
    { year: "2025", tag: { label: "Iran", variant: "gold" }, title: "Operazione Midnight Hammer", text: "Nel giugno 2025 i B-2 colpiscono i siti nucleari sotterranei iraniani impiegando i grandi penetratori GBU-57: il B-2 è l'unico velivolo al mondo in grado di trasportare e sganciare quell'arma contro bersagli così profondi.", media: { src: "/images/aircraft/b-2-spirit/b2-midnight-hammer.jpg", width: 1280, height: 853, alt: "Un B-2 Spirit a supporto dell'operazione Midnight Hammer", caption: "B-2 · operazione «Midnight Hammer», 2025 · U.S. Air Force (PD)" } },
    { year: "Futuro", tag: { label: "B-21" }, title: "L'erede: B-21 Raider", text: "Il testimone passa al B-21 Raider, nuovo bombardiere stealth Northrop Grumman volato nel 2023: più piccolo, più economico e prodotto in numeri ben maggiori, dalla fine degli anni 2020 inizierà a sostituire il B-2." },
  ],

  facts: [
    {
      title: "Solo 21 esemplari, uno per Stato",
      text: "Il costo altissimo ne limitò la produzione a 21 unità (contro le 132 inizialmente previste). Ognuno porta il nome di uno Stato americano — «Spirit of Missouri», «Spirit of Texas»… — più lo «Spirit of America».",
    },
    {
      title: "L'aereo più costoso mai costruito",
      text: "Considerando lo sviluppo, ogni B-2 è costato circa 2,1 miliardi di dollari: è comunemente indicato come l'aereo più costoso della storia.",
    },
    {
      title: "Invisibile come un uccellino",
      text: "La combinazione di forma ad ala volante e materiali radar-assorbenti riduce la sua traccia radar a valori paragonabili a quelli di un piccolo volatile, nonostante l'apertura alare di oltre 52 metri.",
    },
    {
      title: "Erede di un'idea degli anni '40",
      text: "L'ala volante è un'antica intuizione di Jack Northrop (YB-35/YB-49): troppo instabile per l'epoca, è diventata pratica solo decenni dopo grazie ai computer di volo fly-by-wire.",
    },
    {
      title: "L'unico per i bunker più profondi",
      text: "È l'unico velivolo operativo in grado di trasportare il GBU-57 MOP, l'arma convenzionale da 13,6 tonnellate concepita per distruggere installazioni sepolte in profondità.",
    },
  ],

};
