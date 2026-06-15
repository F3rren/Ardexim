import type { Aircraft } from "./types";
import { f14Tomcat } from "./f-14-tomcat";
import { f15eStrikeEagle } from "./f-15e-strike-eagle";
import { su57Felon } from "./su-57-felon";
import { eurofighterTyphoon } from "./eurofighter-typhoon";
import { f16FightingFalcon } from "./f-16-fighting-falcon";
import { b2Spirit } from "./b-2-spirit";

// Registro degli aerei: singola fonte di verità.
// Aggiungere un aereo = importare il suo file e aggiungerlo qui.
export const aircraft: Aircraft[] = [
  f14Tomcat,
  f15eStrikeEagle,
  su57Felon,
  eurofighterTyphoon,
  f16FightingFalcon,
  b2Spirit,
];

export function getAircraftBySlug(slug: string): Aircraft | undefined {
  return aircraft.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return aircraft.map((a) => a.slug);
}

export type { Aircraft };
