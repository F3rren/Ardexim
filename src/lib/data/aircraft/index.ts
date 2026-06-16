import type { Aircraft, Model3DEntry } from "./types";
import { f14Tomcat } from "./f-14-tomcat";
import { f15eStrikeEagle } from "./f-15e-strike-eagle";
import { su57Felon } from "./su-57-felon";
import { eurofighterTyphoon } from "./eurofighter-typhoon";
import { f16FightingFalcon } from "./f-16-fighting-falcon";
import { b2Spirit } from "./b-2-spirit";
import { dassaultRafale } from "./dassault-rafale";
import { f35LightningII } from "./f-35-lightning-ii";
import { f22Raptor } from "./f-22-raptor";
import { fa18SuperHornet } from "./fa-18-super-hornet";
import { mig29Fulcrum } from "./mig-29-fulcrum";
import { a10Thunderbolt } from "./a-10-thunderbolt-ii";
import { yf23BlackWidow } from "./yf-23-black-widow";
import { mig35 } from "./mig-35";
import { su35 } from "./su-35";
import { jas39Gripen } from "./jas-39-gripen";
import { mitsubishiF2 } from "./mitsubishi-f-2";

// Registro degli aerei: singola fonte di verità.
// Aggiungere un aereo = importare il suo file e aggiungerlo qui.
export const aircraft: Aircraft[] = [
  f14Tomcat,
  f15eStrikeEagle,
  su57Felon,
  eurofighterTyphoon,
  f16FightingFalcon,
  b2Spirit,
  dassaultRafale,
  f35LightningII,
  f22Raptor,
  fa18SuperHornet,
  mig29Fulcrum,
  a10Thunderbolt,
  yf23BlackWidow,
  mig35,
  su35,
  jas39Gripen,
  mitsubishiF2,
];

export function getAircraftBySlug(slug: string): Aircraft | undefined {
  return aircraft.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return aircraft.map((a) => a.slug);
}

// Restituisce sempre la lista (eventualmente vuota) dei modelli 3D di un aereo,
// normalizzando il caso a modello singolo (model3d) e quello multiplo (models3d).
export function getModels(a: Aircraft): Model3DEntry[] {
  if (a.models3d && a.models3d.length > 0) return a.models3d;
  if (a.model3d) return [{ label: a.name, url: a.model3d, credit: a.model3dCredit }];
  return [];
}

export type { Aircraft, Model3DEntry };
