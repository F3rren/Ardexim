// ===== Tipi del dominio "aereo" =====
// Un Aircraft è la singola fonte di verità: alimenta sia la card del catalogo
// sia tutte le sezioni della pagina dettaglio.

export type BadgeVariant = "default" | "gold" | "cyan" | "danger";

export interface BadgeData {
  label: string;
  variant?: BadgeVariant;
  dot?: boolean; // mostra un pallino
  live?: boolean; // pallino pulsante (stato "operativo")
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
  span?: 2 | 3; // larghezza nella bento grid (su 6 colonne)
}

export interface SpecRow {
  k: string;
  v: string;
}

export interface SpecBlock {
  title: string;
  rows: SpecRow[];
}

export interface SystemCard {
  icon: string;
  badge: BadgeData;
  title: string;
  text: string;
  meta: { k: string; v: string }; // riga dato in fondo (v evidenziato)
}

export interface ArmCard {
  kind: string;
  title: string;
  text: string;
  reach: string; // gittata leggibile, es. "150+ km"
  rangePct: number; // 0-100, per la barra della gittata
}

export interface FactItem {
  title: string;
  text: string;
}

export interface VariantCard {
  sub: string;
  code: string;
  text: string;
}

export interface TimelineMedia {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface TimelineItem {
  year: string;
  tag: BadgeData;
  title: string;
  text: string;
  media?: TimelineMedia; // foto storica opzionale per la tappa
}

// Valutazione indicativa (0-100) su 5 assi, per il radar "profilo" e i confronti.
export interface AircraftProfile {
  velocita: number;
  raggio: number;
  agilita: number;
  carico: number;
  furtivita: number;
}

// Una variante di modello 3D (es. "Base", "F-16I Sufa"): consente di mostrare
// più modelli per lo stesso aereo con uno switcher nella sezione "Modello 3D".
export interface Model3DEntry {
  label: string;
  url: string; // percorso al GLB in /public
  credit?: { author: string; url: string; license: string };
}

export interface Aircraft {
  // catalogo
  slug: string;
  name: string;
  manufacturer: string;
  role: string;
  country: string;
  firstFlight: string;
  service: string;
  status: "in-servizio" | "ritirato";
  topSpeed: string;
  unitCost: string; // costo unitario indicativo (valore + anno/base, es. "≈ 38 mln $ (1998)")
  profile?: AircraftProfile; // valutazione 0-100 su 5 assi per il radar "profilo" / confronto
  thumb: string;
  thumbAlt: string;
  // dettaglio
  summary: string;
  heroBadges: BadgeData[];
  // intro testuali (specifiche dell'aereo) per alcune sezioni
  overviewText?: string;
  armamentText?: string;
  bento: Feature[];
  specs: SpecBlock[];
  systems: SystemCard[];
  armament: ArmCard[];
  variants: VariantCard[];
  timeline: TimelineItem[];
  facts: FactItem[];
  // modello 3D: singolo (model3d/model3dCredit) oppure più varianti (models3d, con switcher).
  // Usa l'helper getModels() per ottenere sempre una lista normalizzata.
  model3d?: string; // percorso al file GLB in /public (es. /models/USA/f-14-tomcat.glb)
  model3dCredit?: { author: string; url: string; license: string };
  models3d?: Model3DEntry[]; // varianti multiple dello stesso aereo (es. F-16 base + F-16I)
}
