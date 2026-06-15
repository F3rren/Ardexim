import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import SpecBlock from "@/components/ui/SpecBlock";
import Reveal from "@/components/ui/Reveal";

export default function Specs({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="specs" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Dati tecnici" title="Le cifre" />
        </Reveal>

        {/* costo unitario in evidenza */}
        <Reveal>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 border border-line rounded-[14px] bg-gradient-to-r from-panel to-bg2 px-6 py-5">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted2">
              Costo unitario indicativo
            </span>
            <span className="font-display font-bold uppercase text-goldbr leading-none text-[clamp(1.5rem,4vw,2.1rem)]">
              {aircraft.unitCost}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aircraft.specs.map((block, i) => (
            <Reveal key={i}>
              <SpecBlock block={block} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
