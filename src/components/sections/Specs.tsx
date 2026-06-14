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
