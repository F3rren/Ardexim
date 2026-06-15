import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Facts({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="facts" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Dati utili · in breve" title="Lo sapevi?" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
          {aircraft.facts.map((f, i) => (
            <Reveal key={i}>
              <div className="border-l-2 border-gold/60 pl-5">
                <h3 className="font-display font-semibold uppercase text-[1.1rem] text-goldbr">{f.title}</h3>
                <p className="text-muted text-[0.95rem] mt-1.5 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
