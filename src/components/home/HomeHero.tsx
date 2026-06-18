"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setN(to);
      return;
    }
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, reduce]);

  return <span className="tabular-nums">{n}</span>;
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-goldbr text-[clamp(2.2rem,5vw,2.8rem)] leading-none">
        {value}
      </div>
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted2 mt-1.5">{label}</div>
    </div>
  );
}

export default function HomeHero({
  aircraftCount,
  nationCount,
  yearsSpan,
}: {
  aircraftCount: number;
  nationCount: number;
  yearsSpan: number;
}) {
  const reduce = useReducedMotion();
  const title = "ARDEXIM";
  const splitAt = 3; // "ARD" pieno, "EXIM" contornato oro (come il logo)
  const ease = [0.2, 0.7, 0.2, 1] as const;

  return (
    <header className="relative overflow-hidden">
      {/* sfondo HUD: radar con sweep rotante + anelli + scanline */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[-14%] top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] max-w-[88vw] max-h-[88vw]">
          <div className="absolute inset-0 rounded-full border border-gold/12" />
          <div className="absolute inset-[18%] rounded-full border border-gold/10" />
          <div className="absolute inset-[36%] rounded-full border border-gold/10" />
          <div className="absolute inset-[36%] left-1/2 top-1/2 w-px h-[64%] -translate-x-1/2 -translate-y-1/2 bg-gold/10" />
          <div className="absolute inset-[36%] left-1/2 top-1/2 h-px w-[64%] -translate-x-1/2 -translate-y-1/2 bg-gold/10" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--color-gold) 22%, transparent) 36deg, transparent 74deg)",
              WebkitMaskImage: "radial-gradient(circle, black 58%, transparent 72%)",
              maskImage: "radial-gradient(circle, black 58%, transparent 72%)",
            }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.022) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1180px] px-6 pt-[150px] pb-16">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.3em] uppercase text-gold"
        >
          <span className="w-2 h-2 rounded-full bg-gold dot-live" />
          Catalogo · Aviazione militare
        </motion.span>

        <h1 className="mt-5 font-display font-bold uppercase leading-[0.82] tracking-[-0.03em] text-[clamp(3.5rem,15vw,11rem)]">
          <span className="sr-only">{title}</span>
          <span aria-hidden className="flex">
            {title.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={reduce ? false : { opacity: 0, y: "0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease }}
                className={i < splitAt ? "text-text" : "text-transparent"}
                style={i < splitAt ? undefined : { WebkitTextStroke: "1.6px var(--color-gold)" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted max-w-[58ch] mt-6 text-[1.05rem] leading-[1.65]"
        >
          Catalogo interattivo di aerei militari: schede con specifiche, storia, armamento, profilo
          prestazionale e modelli 3D. Scegli un velivolo per esplorarlo nel dettaglio.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[48px] rounded-[11px] bg-gold text-[#1a1304] font-bold hover:bg-goldbr transition-colors"
          >
            Esplora il catalogo →
          </a>
          <a
            href="#intro"
            className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[48px] rounded-[11px] border border-line text-text hover:border-gold hover:text-goldbr transition-colors"
          >
            Cosa offre
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-9 flex flex-wrap gap-x-12 gap-y-5"
        >
          <Stat value={<CountUp to={aircraftCount} />} label="Velivoli" />
          <Stat value={<CountUp to={nationCount} />} label="Nazioni" />
          <Stat
            value={
              <>
                <CountUp to={yearsSpan} />+
              </>
            }
            label="Anni di storia"
          />
        </motion.div>
      </div>
    </header>
  );
}
