import type { Aircraft } from "./types";
import { f14Tomcat } from "./f-14-tomcat";

// Registro degli aerei: singola fonte di verità.
// Aggiungere un aereo = importare il suo file e aggiungerlo qui.
export const aircraft: Aircraft[] = [f14Tomcat];

export function getAircraftBySlug(slug: string): Aircraft | undefined {
  return aircraft.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return aircraft.map((a) => a.slug);
}

export type { Aircraft };
