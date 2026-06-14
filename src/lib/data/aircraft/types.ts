// ===== Tipi del dominio "aereo" =====
// Un Aircraft è la singola fonte di verità: alimenta sia la card del catalogo
// sia tutte le sezioni della pagina dettaglio.

export type BadgeVariant = "default" | "gold" | "cyan";

export interface BadgeData {
  label: string;
  variant?: BadgeVariant;
  dot?: boolean; // mostra un pallino
  live?: boolean; // pallino pulsante (stato "operativo")
}

export interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
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
}

export interface OpCard {
  icon: string;
  year: string;
  yearVariant?: BadgeVariant;
  title: string;
  text: string;
  meta: { k: string; v: string };
}

export interface VariantCard {
  sub: string;
  code: string;
  text: string;
}

export interface TimelineItem {
  year: string;
  tag: BadgeData;
  title: string;
  text: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  year: string;
  title: string;
  text: string;
  badges: BadgeData[];
  width: number;
  height: number;
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
  thumb: string;
  thumbAlt: string;
  // dettaglio
  summary: string;
  heroBadges: BadgeData[];
  // intro testuali (specifiche dell'aereo) per alcune sezioni
  overviewText?: string;
  armamentText?: string;
  operationsText?: string;
  galleryText?: string;
  bento: Feature[];
  stats: Stat[];
  specs: SpecBlock[];
  systems: SystemCard[];
  armament: ArmCard[];
  operations: OpCard[];
  variants: VariantCard[];
  timeline: TimelineItem[];
  facts: BadgeData[];
  gallery: Photo[];
  model3d?: string; // chiave nel registry dei modelli 3D
}
