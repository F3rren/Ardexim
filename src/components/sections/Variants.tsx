import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Variants({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="variants" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Famiglia" title="Le varianti" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aircraft.variants.map((v, i) => (
            <Reveal key={i}>
              <article className="h-full border border-line rounded-[14px] p-[26px] bg-gradient-to-b from-panel to-bg2">
                <div className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-3.5">{v.sub}</div>
                <div className="font-display font-bold text-[2.2rem] leading-none">{v.code}</div>
                <p className="text-muted text-[0.95rem] mt-3 leading-relaxed">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
