import type { Aircraft } from "@/lib/data/aircraft/types";
import { getModels } from "@/lib/data/aircraft";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import ModelViewer from "@/components/sections/ModelViewer";

// Sezione dedicata al modello 3D del velivolo (rotazione automatica).
// Renderizzata solo se l'aereo ha almeno un modello associato.
export default function Model3D({ aircraft }: { aircraft: Aircraft }) {
  const models = getModels(aircraft);
  if (models.length === 0) return null;

  const multi = models.length > 1;

  return (
    <section id="modello" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Vista 3D"
            title="Il modello"
            text={
              multi
                ? "Modello tridimensionale del velivolo, in rotazione automatica. Usa i pulsanti per cambiare versione."
                : "Modello tridimensionale del velivolo, in rotazione automatica sul proprio asse."
            }
          />
        </Reveal>

        <Reveal>
          <div className="relative h-[clamp(420px,62vh,760px)] overflow-hidden rounded-[18px] border border-line bg-gradient-to-b from-panel to-bg2">
            <ModelViewer models={models} poster={aircraft.thumb} posterAlt={aircraft.thumbAlt} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
