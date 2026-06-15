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

        <Reveal>
          <div className="border border-line rounded-[14px] bg-gradient-to-b from-panel to-bg2 overflow-hidden divide-y divide-line">
            {aircraft.systems.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 transition-colors hover:bg-white/[0.025]"
              >
                <div className="w-12 h-12 rounded-[11px] bg-cyan/10 border border-cyan/20 text-cyan flex items-center justify-center shrink-0">
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-semibold uppercase text-[1.25rem]">{s.title}</h3>
                    <Badge {...s.badge} />
                  </div>
                  <p className="text-muted text-[0.95rem] mt-1.5 max-w-[62ch] leading-relaxed">{s.text}</p>
                  {/* metrica inline su mobile */}
                  <div className="md:hidden mt-3 pt-3 border-t border-dashed border-line-soft font-mono text-xs text-muted2">
                    {s.meta.k}: <b className="text-goldbr font-normal">{s.meta.v}</b>
                  </div>
                </div>

                {/* metrica a destra su desktop */}
                <div className="hidden md:block text-right shrink-0 w-[150px]">
                  <div className="font-mono text-goldbr text-[1.05rem] leading-tight">{s.meta.v}</div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted2 mt-1">{s.meta.k}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
