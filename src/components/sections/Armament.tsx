import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Armament({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="armament" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Sistema d'arma" title="Artigli" text={aircraft.armamentText} />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aircraft.armament.map((a, i) => (
            <Reveal key={i}>
              <article className="h-full border border-line rounded-[14px] p-[22px] bg-panel">
                <div className="font-mono text-xs tracking-[0.14em] uppercase text-cyan">{a.kind}</div>
                <h3 className="font-display font-semibold uppercase text-[1.3rem] mt-2.5 mb-1.5">{a.title}</h3>
                <p className="text-muted text-[0.92rem] leading-relaxed">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
