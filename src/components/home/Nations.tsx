"use client";

import { useMemo } from "react";
import type { Aircraft } from "@/lib/data/aircraft/types";
import { nationTheme } from "@/lib/theme/nations";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

// Sezione "Nazioni" (id="nazioni"): le macro-famiglie costruttrici, ciascuna con la
// sua palette. Cliccare una nazione pre-filtra il catalogo (CustomEvent "catalog:nation",
// intercettato da CatalogExplorer) e l'àncora #catalogo porta lo scroll alla griglia.
export default function Nations({ aircraft }: { aircraft: Aircraft[] }) {
  const nations = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of aircraft) m.set(a.country, (m.get(a.country) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [aircraft]);

  const select = (country: string) => {
    window.dispatchEvent(new CustomEvent("catalog:nation", { detail: country }));
  };

  return (
    <section
      id="nazioni"
      className="relative z-[1] mx-auto max-w-[1180px] px-6 pt-[60px] pb-[40px] scroll-mt-24"
    >
      <Reveal>
        <SectionHeader
          eyebrow="Per nazione"
          title="Le scuole costruttrici"
          text="Ogni Stato ha la sua palette: il colore di una scheda ti dice subito da dove viene il velivolo. Scegli una nazione per filtrare il catalogo."
        />
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {nations.map(([country, count], i) => {
          const theme = nationTheme(country);
          const accent = theme.vars["--color-goldbr"];
          return (
            <Reveal key={country} delay={i * 0.05}>
              <a
                href="#catalogo"
                onClick={() => select(country)}
                className="group relative block h-full overflow-hidden rounded-[12px] border border-line bg-gradient-to-b from-panel to-bg2 p-4 transition-colors hover:border-gold/40"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: accent }}
                />
                <span
                  className="block font-display font-bold text-[1.9rem] leading-none tabular-nums"
                  style={{ color: accent }}
                >
                  {count}
                </span>
                <span className="mt-1.5 block font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
                  {theme.label}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted2 transition-colors group-hover:text-goldbr">
                  Filtra →
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
