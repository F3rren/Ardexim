import { aircraft } from "@/lib/data/aircraft";
import { nationTheme } from "@/lib/theme/nations";

// Fascia "per nazione": conteggio aerei per Stato, ciascuno col proprio colore-accento.
export default function NationShowcase() {
  const counts = new Map<string, number>();
  for (const a of aircraft) counts.set(a.country, (counts.get(a.country) ?? 0) + 1);
  const nations = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <section className="mx-auto max-w-[1180px] px-6 py-12">
      <div className="mb-5 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-muted2">
        <span className="inline-block h-px w-5 bg-line" />
        Colore · nazione
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {nations.map(([country, count]) => {
          const t = nationTheme(country);
          const accent = t.vars["--color-goldbr"];
          return (
            <div
              key={country}
              className="relative overflow-hidden rounded-[12px] border border-line bg-gradient-to-b from-panel to-bg2 p-4"
            >
              <span className="absolute left-0 top-0 h-full w-1" style={{ background: accent }} />
              <div
                className="font-display font-bold text-[2rem] leading-none tabular-nums"
                style={{ color: accent }}
              >
                {count}
              </div>
              <div className="mt-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
                {t.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
