import type { CSSProperties } from "react";

// ===== Palette accentate per macro-nazione =====
// Distinguono a colpo d'occhio gli aerei in base allo Stato d'origine.
// I componenti usano i token --color-gold / --color-goldbr / --color-cyan come
// "accento primario / brillante / secondario": qui ne sovrascriviamo i valori su
// un contenitore, così l'intera scheda (o card) eredita la palette via cascata CSS.
// Il token --color-danger (rosso "ritirato") resta invariato: indica uno stato, non la nazione.

export interface NationTheme {
  label: string;
  vars: Record<string, string>;
}

const USA: NationTheme = {
  label: "USA",
  vars: {
    "--color-gold": "#ca8a04",
    "--color-goldbr": "#f5c542",
    "--color-cyan": "#38d6c4",
  },
};

const RUSSIA: NationTheme = {
  label: "Russia",
  vars: {
    "--color-gold": "#c01f2e", // rosso primario
    "--color-goldbr": "#ff5247", // rosso brillante
    "--color-cyan": "#e0a526", // oro/ambra (accento secondario)
  },
};

// consorzio europeo (Eurofighter): palette blu/acciaio
const EUROPA: NationTheme = {
  label: "Europa",
  vars: {
    "--color-gold": "#2f80d6", // azzurro acciaio (accento primario)
    "--color-goldbr": "#63a9f0", // azzurro brillante
    "--color-cyan": "#54cfd6", // ciano-acqua (accento secondario)
  },
};

const DEFAULT = USA;

// chiave = campo aircraft.country
const byCountry: Record<string, NationTheme> = {
  USA: USA,
  Russia: RUSSIA,
  Europa: EUROPA,
};

export function nationTheme(country: string): NationTheme {
  return byCountry[country] ?? DEFAULT;
}

// comodo per applicarlo come style={...} su un contenitore
export function nationStyle(country: string): CSSProperties {
  return nationTheme(country).vars as CSSProperties;
}
