import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

export default function History({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="history" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Linea temporale" title="Dalla nascita al ritiro" />
        </Reveal>

        <div className="relative pl-[34px]">
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-gold to-line" />
          {aircraft.timeline.map((t, i) => (
            <Reveal key={i}>
              <div className="relative pb-[38px] last:pb-0 pl-1.5">
                <span className="absolute left-[-34px] top-1 w-4 h-4 rounded-full bg-bg border-[3px] border-gold" />
                <div className="flex items-center gap-3.5 flex-wrap">
                  <span className="font-display font-bold text-[1.5rem] text-goldbr leading-none">{t.year}</span>
                  <Badge {...t.tag} />
                </div>
                <h3 className="font-display font-semibold uppercase text-[1.2rem] mt-1 mb-2">{t.title}</h3>
                <p className="text-muted max-w-[60ch] leading-relaxed">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
