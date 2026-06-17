"use client";

import { motion, useReducedMotion } from "framer-motion";

function Corner({ className }: { className: string }) {
  return <span className={`absolute h-7 w-7 border-l-2 border-t-2 border-gold/45 ${className}`} />;
}

// Overlay animato "HUD/cinematografico" sopra la foto dell'hero di dettaglio:
// scanline, linea di scansione che scorre, angoli a mirino e sigla in filigrana.
export default function HeroFx({ code }: { code: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden>
      {/* scanline */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
        }}
      />

      {/* linea di scansione che scorre dall'alto in basso */}
      {!reduce && (
        <motion.div
          className="absolute inset-x-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-gold) 16%, transparent), transparent)",
          }}
          initial={{ y: "-30%" }}
          animate={{ y: "130%" }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      )}

      {/* angoli a mirino */}
      <Corner className="left-5 top-5" />
      <Corner className="right-5 top-5 rotate-90" />
      <Corner className="bottom-5 right-5 rotate-180" />
      <Corner className="bottom-5 left-5 -rotate-90" />

      {/* sigla gigante in filigrana (in alto a destra, fuori dal blocco di testo) */}
      <div
        className="absolute right-3 top-[10%] hidden select-none font-display font-bold uppercase leading-none text-transparent md:block"
        style={{
          WebkitTextStroke: "1px color-mix(in srgb, var(--color-text) 9%, transparent)",
          fontSize: "clamp(5rem, 15vw, 13rem)",
        }}
      >
        {code}
      </div>
    </div>
  );
}
