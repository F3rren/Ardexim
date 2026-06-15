import type { Aircraft } from "@/lib/data/aircraft/types";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import HeroModel from "@/components/sections/HeroModel";

export default function Hero({ aircraft }: { aircraft: Aircraft }) {
  const [first, ...rest] = aircraft.name.split(" ");
  const restName = rest.join(" ");

  return (
    <header id="top" className="relative">
      {/* palco 3D a tutta larghezza con testo in overlay */}
      <div className="relative w-full h-[clamp(560px,88vh,980px)]">
        <HeroModel modelUrl={aircraft.model3d} poster={aircraft.thumb} posterAlt={aircraft.thumbAlt} />

        {/* scrim per leggibilità del testo */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-bg) 1%, transparent 46%), linear-gradient(to right, rgba(10,9,8,0.72), transparent 58%)",
          }}
        />

        {/* contenuto testuale (drag passa attraverso, tranne i bottoni) */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="mx-auto max-w-[1180px] px-6 h-full flex flex-col justify-end pb-14 pt-[130px]">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.28em] uppercase text-gold">
                <span className="w-6 h-px bg-gold inline-block" />
                {aircraft.manufacturer} · {aircraft.country} · {aircraft.service}
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-3 font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(2.8rem,9vw,8rem)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
                {first}
                <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--color-gold)" }}>
                  {restName}
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-text/85 max-w-[46ch] mt-5 mb-6 text-[1.05rem] leading-[1.6]">
                {aircraft.summary}
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-2.5 mb-7">
                {aircraft.heroBadges.map((b, i) => (
                  <Badge key={i} {...b} solid />
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-3.5 pointer-events-auto">
                <a
                  href="#specs"
                  className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] bg-gold text-[#1a1304] font-bold border border-gold hover:bg-goldbr transition-colors"
                >
                  <Icon name="arrowRight" className="w-[18px] h-[18px]" strokeWidth={2} />
                  Scheda tecnica
                </a>
                <a
                  href="#history"
                  className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] border border-line bg-bg/40 text-text hover:border-gold hover:text-goldbr transition-colors backdrop-blur-sm"
                >
                  Linea temporale
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}
