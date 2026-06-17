import type { Aircraft } from "./types";

export const panaviaTornado = {
  // ---- catalogo ----
  slug: "panavia-tornado",
  name: "Panavia Tornado",
  manufacturer: "Panavia",
  role: "Cacciabombardiere da interdizione ad ala a geometria variabile",
  country: "Europa",
  firstFlight: "1974",
  service: "1979 – oggi",
  status: "in-servizio",
  topSpeed: "Mach 2.2",
  unitCost: "≈ 30 mln € (anni '80)",
  profile: { velocita: 88, raggio: 72, agilita: 50, carico: 80, furtivita: 8 },
  thumb: "/images/aircraft/panavia-tornado/tornado-italian-1987.jpg",
  thumbAlt: "Due Panavia Tornado dell'Aeronautica Militare italiana in volo",
  model3d: "/models/EU/panavia_tornado.glb",
  model3dCredit: {
    author: "42manako",
    url: "https://sketchfab.com/3d-models/panavia-tornado-mig-eater-05e70ba76b82408abb347c2e0f2c69eb",
    license: "CC BY 4.0",
  },

  // ---- dettaglio ----
  summary:
    "Frutto della collaborazione tra Regno Unito, Germania e Italia, il Tornado è un cacciabombardiere ad ala a geometria variabile nato per un compito preciso: penetrare le difese a bassissima quota e altissima velocità per colpire in profondità. Per oltre quarant'anni la spina dorsale dell'attacco di tre aeronautiche europee.",

  heroBadges: [
    { label: "In servizio · dal 1979", variant: "cyan", dot: true, live: true },
    { label: "Ruolo · Interdizione / attacco" },
    { label: "Origine · Europa" },
    { label: "Mach 2.2", variant: "gold" },
  ],

  overviewText:
    "Negli anni '70 Regno Unito, Germania e Italia uniscono le forze nel programma MRCA, dando vita al consorzio Panavia per un cacciabombardiere comune. Il primo volo è del 14 agosto 1974, l'entrata in servizio del 1979-1981. La missione di riferimento, in piena Guerra Fredda, era l'attacco in profondità contro le forze del Patto di Varsavia: l'ala a geometria variabile (come nel Tomcat) e il radar a inseguimento del terreno gli permettono di volare bassissimo e velocissimo sotto i radar nemici. Ne nacquero tre versioni: IDS d'attacco, ADV intercettore e ECR per la guerra elettronica.",
  armamentText:
    "Due cannoni da 27 mm e fino a ~9.000 kg di armamento: dall'attacco alle piste (JP233) ai missili da crociera Storm Shadow, antiradar HARM/ALARM e antinave, fino alle bombe nucleari nelle versioni tedesche.",

  bento: [
    {
      icon: "wing",
      span: 3,
      title: "Ala a geometria variabile",
      text: "Le ali oscillano tra 25° e 67°: aperte per il decollo e la bassa velocità, a freccia per la corsa supersonica e la penetrazione a bassa quota. Stessa filosofia del F-14.",
    },
    {
      icon: "radar",
      span: 3,
      title: "Volo radente automatico",
      text: "Il radar a inseguimento del terreno permette di volare a poche decine di metri dal suolo ad alta velocità, anche di notte e con qualsiasi tempo, restando sotto i radar nemici.",
    },
    {
      icon: "engine",
      span: 2,
      title: "RB199 con inversori",
      text: "Due turbofan con postbruciatore e inversori di spinta — rarità tra i caccia — per atterrare su piste corte o danneggiate.",
    },
    {
      icon: "crew",
      span: 2,
      title: "Equipaggio di due",
      text: "Pilota e navigatore/operatore ai sistemi d'arma: indispensabili nelle missioni d'attacco a bassa quota, di notte.",
    },
    {
      icon: "bomb",
      span: 2,
      title: "Specialista d'interdizione",
      text: "Concepito per colpire aeroporti, ponti e infrastrutture in profondità, con un arsenale d'attacco vastissimo.",
    },
  ],

  specs: [
    {
      title: "DIMENSIONI",
      rows: [
        { k: "Lunghezza", v: "16,70 m" },
        { k: "Apertura (estesa)", v: "13,91 m" },
        { k: "Apertura (freccia)", v: "8,60 m" },
        { k: "Altezza", v: "5,95 m" },
        { k: "Peso a vuoto", v: "~13.600 kg" },
        { k: "Peso max decollo", v: "~28.000 kg" },
        { k: "Carico bellico", v: "~9.000 kg" },
      ],
    },
    {
      title: "PRESTAZIONI",
      rows: [
        { k: "Velocità max", v: "Mach 2.2" },
        { k: "In km/h", v: "~2.400" },
        { k: "Tangenza", v: "~15.200 m" },
        { k: "Raggio di combatt.", v: "~1.390 km" },
        { k: "Fattore di carico", v: "+7,5 g" },
        { k: "Equipaggio", v: "2" },
        { k: "Freccia alare", v: "25°–67°" },
      ],
    },
    {
      title: "PROPULSIONE & AVIONICA",
      rows: [
        { k: "Motori", v: "2× Turbo-Union RB199" },
        { k: "Tipo", v: "Turbofan A/B + reverse" },
        { k: "Spinta/cad. (A/B)", v: "~71 kN" },
        { k: "Radar", v: "mappatura + TFR" },
        { k: "Cannone", v: "2× Mauser BK-27" },
        { k: "Versioni", v: "IDS / ADV / ECR" },
        { k: "Esemplari", v: "~990 costruiti" },
      ],
    },
  ],

  systems: [
    {
      icon: "wing",
      badge: { label: "Aerodinamica", variant: "cyan" },
      title: "Ala a geometria variabile",
      text: "Le ali variano la freccia tra 25° e 67° automaticamente: massima portanza per decollo e atterraggio, profilo affilato per la penetrazione supersonica a bassa quota. La stessa soluzione dell'F-14 Tomcat.",
      meta: { k: "Freccia", v: "25°–67°" },
    },
    {
      icon: "radar",
      badge: { label: "Sensori", variant: "cyan" },
      title: "Radar a inseguimento del terreno",
      text: "Il radar di mappatura e inseguimento del terreno (TFR) consente il volo radente automatico a poche decine di metri dal suolo, ad alta velocità e con ogni tempo, per sfuggire ai radar e alle difese nemiche.",
      meta: { k: "Volo radente", v: "automatico" },
    },
    {
      icon: "engine",
      badge: { label: "Propulsione", variant: "gold" },
      title: "2× Turbo-Union RB199",
      text: "Turbofan con postbruciatore dotati di inversori di spinta — caratteristica rara tra i caccia, condivisa col Saab Viggen — per ridurre lo spazio d'atterraggio su piste corte o danneggiate.",
      meta: { k: "Inversori", v: "sì" },
    },
    {
      icon: "crew",
      badge: { label: "Equipaggio", variant: "cyan" },
      title: "Pilota + navigatore",
      text: "Il secondo membro d'equipaggio gestisce radar, navigazione e sistemi d'arma: fondamentale nelle impegnative missioni d'attacco a bassa quota, notturne e ogni-tempo.",
      meta: { k: "Posti", v: "2 in tandem" },
    },
    {
      icon: "bomb",
      badge: { label: "Armamento", variant: "gold" },
      title: "Arsenale d'interdizione",
      text: "Due cannoni da 27 mm più un vastissimo armamento d'attacco distribuito tra le versioni IDS (attacco), ECR (soppressione difese) e ADV (intercettazione).",
      meta: { k: "Carico", v: "~9.000 kg" },
    },
  ],

  armament: [
    { kind: "Cannone", title: "2× Mauser BK-27", text: "Due cannoni revolver da 27 mm per il combattimento ravvicinato e il mitragliamento.", reach: "~2 km", rangePct: 4 },
    { kind: "Corto raggio", title: "AIM-9 / ASRAAM", text: "Missili aria-aria a guida infrarossa per l'autodifesa (e per la versione intercettore ADV).", reach: "~25 km", rangePct: 12 },
    { kind: "Antiradar", title: "ALARM / HARM", text: "Missili anti-radiazione per la soppressione delle difese aeree nemiche, specialità della versione ECR.", reach: "~50 km", rangePct: 28 },
    { kind: "Antinave", title: "Kormoran / Sea Eagle", text: "Missili antinave a volo radente per colpire bersagli navali a media distanza.", reach: "~110 km", rangePct: 50 },
    { kind: "Da crociera", title: "Storm Shadow / Taurus", text: "Missili da crociera stealth per l'attacco di precisione in profondità; nell'arsenale anche JP233, Brimstone, Paveway e bombe nucleari B61 (versioni tedesche).", reach: "350+ km", rangePct: 100 },
  ],

  variants: [
    { sub: "// Attacco", code: "IDS", text: "Interdiction/Strike: la versione d'attacco al suolo, la più numerosa (745 esemplari). Le britanniche sono note come GR1/GR4." },
    { sub: "// Difesa aerea", code: "ADV (F.3)", text: "Air Defence Variant: intercettore britannico con fusoliera allungata, radar Foxhunter e missili Skyflash (194 esemplari)." },
    { sub: "// Guerra elettronica", code: "ECR", text: "Electronic Combat/Reconnaissance: versione per la soppressione delle difese (HARM) e la ricognizione, usata da Germania e Italia (51 esemplari)." },
    { sub: "// Aggiornamento", code: "Tornado GR4", text: "La versione d'attacco britannica ammodernata, con armi di precisione e nuovi sensori; ritirata dalla RAF nel 2019." },
    { sub: "// Export", code: "Arabia Saudita", text: "L'unico cliente estero: circa 96 esemplari (IDS e ADV) per la Royal Saudi Air Force." },
    { sub: "// Successore", code: "Eurofighter / F-35", text: "Nelle aeronautiche partner il Tornado è sostituito dall'Eurofighter Typhoon e dall'F-35." },
  ],

  timeline: [
    { year: "1968–74", tag: { label: "Origini" }, title: "Il programma MRCA", text: "Per un cacciabombardiere comune europeo, Regno Unito, Germania e Italia (con i motori sviluppati da Rolls-Royce, MTU e Fiat) fondano il consorzio Panavia. Il prototipo MRCA compie il primo volo il 14 agosto 1974 a Manching, in Germania.", media: { src: "/images/aircraft/panavia-tornado/tornado-german.jpg", width: 1280, height: 873, alt: "Un Panavia Tornado tedesco", caption: "Panavia Tornado (Luftwaffe) · U.S. DoD (pubblico dominio)" } },
    { year: "1979–81", tag: { label: "In servizio", variant: "cyan" }, title: "Entrata in servizio", text: "Il Tornado entra in linea con la RAF e la Luftwaffe nel 1979 e con l'Aeronautica Militare italiana nel 1981, diventando rapidamente il principale strumento d'attacco delle tre forze aeree." },
    { year: "Bassa quota", tag: { label: "Volo radente", variant: "gold" }, title: "Volare bassi e veloci", text: "La missione per cui è nato: penetrare le difese del Patto di Varsavia volando a poche decine di metri dal suolo, ad alta velocità, sfruttando l'ala a geometria variabile e il radar a inseguimento del terreno per restare invisibile ai radar." },
    { year: "1991", tag: { label: "Golfo", variant: "cyan" }, title: "Il battesimo del fuoco nel Golfo", text: "Nella Guerra del Golfo i Tornado della coalizione (RAF, Italia, Arabia Saudita) eseguono pericolose missioni d'attacco a bassa quota contro gli aeroporti iracheni, anche con le munizioni JP233. La RAF perde sei velivoli: il prezzo della tattica a bassissima quota.", media: { src: "/images/aircraft/panavia-tornado/tornado-rsaf-1991.jpg", width: 1280, height: 754, alt: "Un Tornado saudita a terra durante la Guerra del Golfo, 1991", caption: "Tornado della Royal Saudi Air Force · 1991 · U.S. DoD (pubblico dominio)" } },
    { year: "ADV / ECR", tag: { label: "Famiglia" }, title: "Intercettore e guerra elettronica", text: "Oltre all'attacco, il Tornado si specializza: l'ADV britannico diventa l'intercettore a lungo raggio della RAF, mentre l'ECR di Germania e Italia caccia e distrugge i radar nemici con i missili HARM." },
    { year: "Italia", tag: { label: "Aeronautica Militare" }, title: "Il Tornado italiano", text: "L'Aeronautica Militare italiana impiega il Tornado nelle versioni IDS ed ECR da oltre quarant'anni: protagonista nel Golfo, sui Balcani, in Libia e nelle operazioni contro l'ISIS, in attesa della piena sostituzione con Eurofighter e F-35.", media: { src: "/images/aircraft/panavia-tornado/tornado-italian-ids.jpg", width: 1280, height: 854, alt: "Un Tornado IDS dell'Aeronautica Militare italiana", caption: "Tornado IDS dell'Aeronautica Militare italiana · Ronnie Macdonald (CC BY 2.0)" } },
    { year: "1999–2011", tag: { label: "Operazioni", variant: "gold" }, title: "Balcani, Iraq e Libia", text: "Negli anni il Tornado è impiegato sui Balcani, nella guerra in Iraq del 2003 e nell'operazione del 2011 sulla Libia, in ruoli d'attacco di precisione, ricognizione e soppressione delle difese." },
    { year: "2014–18", tag: { label: "Contro l'ISIS", variant: "cyan" }, title: "L'ultima campagna", text: "I Tornado britannici e italiani prendono parte alle operazioni contro lo Stato Islamico in Iraq e Siria, impiegando bombe e missili di precisione come Brimstone e Storm Shadow." },
    { year: "2019", tag: { label: "Ritiro RAF" }, title: "La RAF appende il Tornado", text: "Nel marzo 2019, dopo quarant'anni di servizio, la Royal Air Force ritira il Tornado GR4, sostituito da Typhoon ed F-35. Una pietra miliare per uno dei cacciabombardieri più importanti dell'Europa.", media: { src: "/images/aircraft/panavia-tornado/tornado-raf-gr4.jpg", width: 1280, height: 827, alt: "Un Tornado GR4 della Royal Air Force", caption: "Tornado GR4 della RAF · U.S. Air Force (pubblico dominio)" } },
    { year: "Oggi", tag: { label: "Eredità" }, title: "Ancora in volo", text: "Mentre il Regno Unito l'ha ritirato, Germania e Italia continuano a far volare i loro Tornado — anche per il ruolo nucleare condiviso NATO — verso una sostituzione prevista nei prossimi anni. Resta una delle icone dell'aviazione europea." },
  ],

  facts: [
    {
      title: "Tre nazioni, un cacciabombardiere",
      text: "Nato dal consorzio Panavia (Regno Unito, Germania, Italia), il Tornado fu costruito ripartendo il lavoro tra i partner: ~990 esemplari in tre versioni, per decenni la spina dorsale dell'attacco europeo.",
    },
    {
      title: "Ala a geometria variabile",
      text: "Come l'F-14 Tomcat, le ali si aprono e si chiudono (25°–67°): aperte per decollare e volare piano, a freccia per la corsa supersonica e la penetrazione radente.",
    },
    {
      title: "Volo radente automatico",
      text: "Il radar a inseguimento del terreno gli permette di «strisciare» a poche decine di metri dal suolo ad alta velocità, di notte e con qualsiasi tempo: la sua missione-firma per eludere radar e difese.",
    },
    {
      title: "Inversori di spinta",
      text: "È uno dei pochissimi caccia dotati di inversori di spinta (come il Saab Viggen): frenano l'aereo all'atterraggio, permettendogli di operare da piste corte o danneggiate.",
    },
    {
      title: "Quarant'anni in prima linea",
      text: "Dalla Guerra del Golfo alle operazioni contro l'ISIS, il Tornado ha servito per oltre quarant'anni. Il Regno Unito l'ha ritirato nel 2019; Germania e Italia lo fanno ancora volare.",
    },
  ],

} satisfies Aircraft;
