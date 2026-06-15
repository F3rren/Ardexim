import type { Aircraft } from "@/lib/data/aircraft/types";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import CountUp from "@/components/ui/CountUp";
import Icon from "@/components/ui/Icon";
import HeroModel from "@/components/sections/HeroModel";

export default function Hero({ aircraft }: { aircraft: Aircraft }) {
  const [first, ...rest] = aircraft.name.split(" ");
  const restName = rest.join(" ");
  const credit = aircraft.model3dCredit;

  return (
    <header id="top" className="relative">
      {/* palco 3D a tutta larghezza con testo in overlay */}
      <div className="relative w-full h-[clamp(560px,88vh,980px)]">
        <HeroModel modelUrl={aircraft.model3d} />

        {/* scrim per leggibilità del testo */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-bg) 1%, transparent 46%), linear-gradient(to right, rgba(10,9,8,0.72), transparent 58%)",
          }}
        />

        {/* hint d'uso */}
        <span className="absolute bottom-5 right-5 z-[2] flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted2 pointer-events-none">
          <Icon name="rotate" className="w-4 h-4" strokeWidth={1.6} />
          Trascina per ruotare
        </span>

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
                  <Badge key={i} {...b} />
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

      {/* striscia statistiche */}
      <div className="relative z-[3] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-line rounded-[14px] bg-gradient-to-b from-panel to-bg2 overflow-hidden">
            {aircraft.stats.map((s, i) => (
              <div
                key={i}
                className="px-[22px] py-[26px] border-line-soft [&:not(:last-child)]:border-r max-sm:[&:nth-child(2)]:border-r-0"
              >
                <div className="font-display font-bold text-goldbr leading-none text-[clamp(2rem,4.5vw,3.1rem)]">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="font-mono text-xs tracking-[0.14em] uppercase text-muted mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        {credit && (
          <p className="mt-3 font-mono text-[11px] text-muted2">
            Modello 3D: «{credit.author}» — {credit.license} ·{" "}
            <a className="underline hover:text-goldbr" href={credit.url} target="_blank" rel="noopener noreferrer">
              fonte
            </a>
          </p>
        )}
      </div>
    </header>
  );
}
