import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Overview({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="overview" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Panoramica" title="Tratti distintivi" text={aircraft.overviewText} />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {aircraft.bento.map((f, i) => (
            <Reveal
              key={i}
              className={f.span === 3 ? "md:col-span-3" : "md:col-span-2"}
            >
              <article className="group h-full bg-gradient-to-b from-panel to-bg2 border border-line rounded-[14px] p-[26px] transition-colors hover:border-gold/55">
                <div className="w-11 h-11 rounded-[11px] flex items-center justify-center bg-gold/10 border border-gold/25 text-goldbr mb-[18px]">
                  <Icon name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold uppercase text-[1.45rem] leading-tight mb-2">
                  {f.title}
                </h3>
                <p className="text-muted text-[0.98rem] leading-relaxed">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
