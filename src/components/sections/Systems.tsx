import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export default function Systems({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="systems" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Sistemi & componenti"
            title="Sotto la fusoliera"
            text="I sottosistemi chiave che rendono questo velivolo una piattaforma di riferimento per la sua epoca."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aircraft.systems.map((s, i) => (
            <Reveal key={i}>
              <article className="h-full border border-line rounded-[14px] p-6 bg-gradient-to-b from-panel to-bg2 transition-colors hover:border-cyan/40">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center bg-cyan/10 border border-cyan/20 text-cyan shrink-0">
                    <Icon name={s.icon} className="w-[22px] h-[22px]" />
                  </div>
                  <Badge {...s.badge} />
                </div>
                <h3 className="font-display font-semibold uppercase text-[1.3rem] mb-1.5">{s.title}</h3>
                <p className="text-muted text-[0.92rem] mb-4 leading-relaxed">{s.text}</p>
                <div className="font-mono text-xs text-muted2 tracking-[0.06em] border-t border-dashed border-line-soft pt-[13px]">
                  {s.meta.k}: <b className="text-goldbr font-normal">{s.meta.v}</b>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
