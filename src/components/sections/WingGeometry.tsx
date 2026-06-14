"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useSweep } from "@/lib/store/sweep";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

const Hangar = dynamic(() => import("@/components/three/Hangar"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-[13px]">
      Inizializzazione modello 3D…
    </div>
  ),
});

const MAX_ROT = 44; // rotazione del blueprint 2D a piena freccia

function modeFor(deg: number) {
  if (deg <= 24) return "Manovra · bassa velocità";
  if (deg <= 50) return "Crociera · transonico";
  return "Intercettazione · supersonico";
}

const presets = [
  { v: 0, label: "Decollo 20°" },
  { v: 0.5, label: "Crociera 42°" },
  { v: 1, label: "Supersonico 68°" },
];

export default function WingGeometry({ model3d }: { model3d?: string }) {
  const target = useSweep((s) => s.target);
  const setTarget = useSweep((s) => s.setTarget);
  const reduce = useReducedMotion();
  const rafRef = useRef(0);

  const deg = Math.round(20 + target * 48);
  const rot = target * MAX_ROT;
  const hot = target > 0.7;

  function tweenTo(to: number) {
    cancelAnimationFrame(rafRef.current);
    if (reduce) {
      setTarget(to);
      return;
    }
    const from = useSweep.getState().target;
    const start = performance.now();
    const dur = 480;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setTarget(from + (to - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }

  return (
    <section id="model" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <SectionHeader
          eyebrow="Hangar 3D · interattivo"
          title="Muovi le ali"
          text="Trascina per ruotare il modello. Agisci sul cursore per far oscillare le ali a geometria variabile da 20° a 68°: a piena freccia si accende il postbruciatore."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
          {/* palco 3D */}
          <div className="relative border border-line rounded-[14px] overflow-hidden min-h-[480px] max-lg:min-h-[360px] bg-[radial-gradient(620px_400px_at_50%_28%,rgba(56,214,196,0.08),transparent_70%)] bg-bg2 touch-none">
            <span className="absolute top-3.5 left-4 z-10 font-mono text-[10px] tracking-[0.14em] uppercase text-cyan/70 pointer-events-none">
              CAD · {model3d ? model3d.toUpperCase() : "N/D"} // VIEW-01
            </span>
            <span className="absolute top-3.5 right-4 z-10 font-mono text-[10px] tracking-[0.14em] uppercase text-cyan/70 pointer-events-none">
              SWEEP {deg}°
            </span>
            <span className="absolute left-4 bottom-3.5 z-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted2 pointer-events-none">
              <Icon name="rotate" className="w-4 h-4" strokeWidth={1.6} />
              Trascina per ruotare
            </span>
            <Hangar model3d={model3d} />
          </div>

          {/* controlli */}
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-3 font-mono">
              <span className="font-display font-bold text-goldbr leading-none text-[4rem]">{deg}°</span>
              <div>
                <div className="text-[13px] tracking-[0.16em] uppercase text-cyan">{modeFor(deg)}</div>
                <div className="text-muted text-[13px] mt-1">Angolo di freccia alare</div>
              </div>
            </div>

            <span
              className={`self-start mt-3.5 font-mono text-[11px] tracking-[0.16em] uppercase rounded-full px-3.5 py-[7px] border transition-all duration-300 ${
                hot
                  ? "text-[#ffb37a] border-[rgba(255,120,40,0.6)] bg-[rgba(255,90,20,0.12)] shadow-[0_0_20px_rgba(255,90,20,0.28)]"
                  : "text-muted2 border-line"
              }`}
            >
              {hot ? "● " : "○ "}Postbruciatore
            </span>

            <div className="mt-7">
              <label htmlFor="sweep" className="block font-mono text-xs tracking-[0.14em] uppercase text-muted mb-3">
                Sweep angle — 20° → 68°
              </label>
              <input
                id="sweep"
                type="range"
                min={0}
                max={100}
                value={Math.round(target * 100)}
                onChange={(e) => {
                  cancelAnimationFrame(rafRef.current);
                  setTarget(Number(e.target.value) / 100);
                }}
                className="sweep-range"
                style={{ "--fill": `${target * 100}%` } as React.CSSProperties}
                aria-label="Angolo di freccia delle ali"
              />
            </div>

            <div className="flex flex-wrap gap-2.5 mt-5" role="group" aria-label="Configurazioni predefinite">
              {presets.map((p) => {
                const on = Math.round(target * 100) === Math.round(p.v * 100);
                return (
                  <button
                    key={p.v}
                    onClick={() => tweenTo(p.v)}
                    className={`font-mono text-xs tracking-[0.1em] uppercase rounded-[9px] px-4 min-h-[44px] border transition-colors cursor-pointer ${
                      on
                        ? "text-goldbr border-gold bg-gold/[0.08]"
                        : "text-muted border-line hover:text-goldbr hover:border-gold hover:bg-gold/[0.08]"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* blueprint 2D in pianta, sincronizzato */}
            <div className="mt-7 border-t border-line-soft pt-[22px]">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted2 mb-2.5">
                // Pianta · vista dall&apos;alto
              </div>
              <svg viewBox="0 0 400 360" className="w-full h-[190px]" role="img" aria-label="Schema della pianta alare, sincronizzato col modello 3D">
                <g stroke="var(--color-line)" strokeWidth="1">
                  <line x1="200" y1="20" x2="200" y2="340" strokeDasharray="4 6" />
                </g>
                <g id="bpHalf" stroke="var(--color-cyan)" strokeWidth="1.2" fill="rgba(56,214,196,0.05)" strokeLinejoin="round">
                  <polygon points="200,30 208,90 218,150 230,210 246,224 250,270 258,330 240,338 212,336 200,335" />
                  <polygon points="240,210 296,250 296,262 240,244" fill="rgba(56,214,196,0.08)" />
                </g>
                <use href="#bpHalf" transform="matrix(-1,0,0,1,400,0)" />
                <circle cx="244" cy="222" r="3" fill="var(--color-goldbr)" />
                <circle cx="156" cy="222" r="3" fill="var(--color-goldbr)" />
                <g stroke="var(--color-gold)" strokeWidth="1.4" fill="rgba(202,138,4,0.12)" strokeLinejoin="round" transform={`rotate(${rot} 244 218)`}>
                  <polygon points="244,218 378,250 376,272 248,246" />
                </g>
                <g stroke="var(--color-gold)" strokeWidth="1.4" fill="rgba(202,138,4,0.12)" strokeLinejoin="round" transform={`rotate(${-rot} 156 218)`}>
                  <polygon points="156,218 22,250 24,272 152,246" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
