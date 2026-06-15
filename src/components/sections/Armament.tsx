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

        <div className="flex flex-col gap-3">
          {aircraft.armament.map((a, i) => (
            <Reveal key={i}>
              <div className="border border-line rounded-[14px] bg-panel p-5 lg:grid lg:grid-cols-[1fr_280px] lg:items-center lg:gap-8 transition-colors hover:border-gold/45">
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-cyan">{a.kind}</span>
                    <h3 className="font-display font-semibold uppercase text-[1.3rem]">{a.title}</h3>
                  </div>
                  <p className="text-muted text-[0.92rem] mt-1.5 max-w-[62ch] leading-relaxed">{a.text}</p>
                </div>

                {/* barra della gittata */}
                <div className="mt-4 lg:mt-0">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.1em] uppercase text-muted2 mb-1.5">
                    <span>Gittata</span>
                    <span className="text-goldbr">{a.reach}</span>
                  </div>
                  <div className="h-2 rounded-full bg-line overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold to-goldbr"
                      style={{ width: `${a.rangePct}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
