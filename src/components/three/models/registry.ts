import type { ComponentType } from "react";
import TomcatModel from "./TomcatModel";

// Mappa la chiave `model3d` dell'aereo al suo componente 3D.
// Aggiungere un modello = importarlo e registrarlo qui.
const models: Record<string, ComponentType> = {
  tomcat: TomcatModel,
};

export function getModel(key: string): ComponentType | null {
  return models[key] ?? null;
}
