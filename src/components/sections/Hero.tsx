import type { Aircraft } from "@/lib/data/aircraft/types";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import CountUp from "@/components/ui/CountUp";
import Icon from "@/components/ui/Icon";

export default function Hero({ aircraft }: { aircraft: Aircraft }) {
  const [first, ...rest] = aircraft.name.split(" ");
  const restName = rest.join(" ");

  return (
    <header id="top" className="relative pt-[150px] pb-10">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 items-center">
          {/* testo */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.28em] uppercase text-gold">
                <span className="w-6 h-px bg-gold inline-block" />
                {aircraft.manufacturer} · {aircraft.country} · {aircraft.service}
              </span>
            </Reveal>
            <Reveal>
              <h1 className="mt-[18px] font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(3.2rem,11vw,9.5rem)]">
                {first}
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px var(--color-gold)" }}
                >
                  {restName}
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-muted max-w-[46ch] mt-[26px] mb-[30px] text-[1.08rem] leading-[1.65]">
                {aircraft.summary}
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-2.5 mb-[30px]">
                {aircraft.heroBadges.map((b, i) => (
                  <Badge key={i} {...b} />
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-3.5">
                {aircraft.model3d && (
                  <a
                    href="#model"
                    className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] bg-gold text-[#1a1304] font-bold border border-gold hover:bg-goldbr transition-colors"
                  >
                    <Icon name="arrowRight" className="w-[18px] h-[18px]" strokeWidth={2} />
                    Modello 3D
                  </a>
                )}
                <a
                  href="#history"
                  className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] border border-line text-text hover:border-gold hover:text-goldbr transition-colors"
                >
                  Linea temporale
                </a>
              </div>
            </Reveal>
          </div>

          {/* arte: vista dall'alto stilizzata */}
          <Reveal className="relative">
            <span className="absolute top-[6%] left-0 font-mono text-[11px] tracking-[0.08em] text-cyan opacity-85">
              <span className="block text-muted font-normal">VELOCITÀ MAX</span>
              {aircraft.topSpeed.toUpperCase()}
            </span>
            <span className="absolute bottom-[6%] right-0 text-right font-mono text-[11px] tracking-[0.08em] text-cyan opacity-85">
              <span className="block text-muted font-normal">IN SERVIZIO</span>
              {aircraft.service}
            </span>
            <svg
              viewBox="0 0 400 520"
              className="w-full h-auto block drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              role="img"
              aria-label={`Vista dall'alto stilizzata di ${aircraft.name}`}
            >
              <defs>
                <linearGradient id="heroBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3a342c" />
                  <stop offset="1" stopColor="#1b1712" />
                </linearGradient>
                <linearGradient id="heroWing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#332e27" />
                  <stop offset="1" stopColor="#171310" />
                </linearGradient>
              </defs>
              <g id="heroHalf" stroke="#4a4339" strokeWidth="1" strokeLinejoin="round">
                <polygon fill="url(#heroBody)" points="200,16 210,82 221,168 231,236 245,250 248,304 252,372 258,452 251,498 231,503 210,502 200,500" />
                <polygon fill="#14110d" points="231,236 245,250 247,300 234,300 230,250" />
                <polygon fill="#2b261f" points="236,372 251,372 261,432 247,440" />
                <polygon fill="#262019" points="251,438 312,486 312,500 250,478" />
              </g>
              <use href="#heroHalf" transform="matrix(-1,0,0,1,400,0)" />
              <ellipse cx="200" cy="120" rx="13" ry="34" fill="#0f1a1c" stroke="var(--color-cyan)" strokeWidth="0.8" opacity="0.9" />
              <g fill="url(#heroWing)" stroke="#4a4339" strokeWidth="1" strokeLinejoin="round">
                <polygon points="243,246 372,300 370,324 247,303" transform="rotate(14 243 246)" />
                <polygon points="157,246 28,300 30,324 153,303" transform="rotate(-14 157 246)" />
              </g>
              <line x1="200" y1="16" x2="200" y2="2" stroke="var(--color-gold)" strokeWidth="1.4" />
            </svg>
          </Reveal>
        </div>

        {/* striscia statistiche */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-line rounded-[14px] bg-gradient-to-b from-panel to-bg2 overflow-hidden mt-[30px]">
            {aircraft.stats.map((s, i) => (
              <div
                key={i}
                className="px-[22px] py-[26px] border-line-soft [&:not(:last-child)]:border-r max-sm:[&:nth-child(2)]:border-r-0"
              >
                <div className="font-display font-bold text-goldbr leading-none text-[clamp(2rem,4.5vw,3.1rem)]">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="font-mono text-xs tracking-[0.14em] uppercase text-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
