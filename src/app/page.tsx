import { aircraft } from "@/lib/data/aircraft";
import { nationTheme } from "@/lib/theme/nations";
import Navbar from "@/components/layout/Navbar";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export default function Home() {
  const sorted = [...aircraft].sort((a, b) => a.name.localeCompare(b.name, "it"));
  // nazioni presenti nel catalogo, per la legenda colore
  const nations = Array.from(new Set(sorted.map((a) => a.country)));

  return (
    <>
      <Navbar />
      <main className="relative z-[1] mx-auto max-w-[1180px] px-6 pt-[150px] pb-[90px]">
        <span className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.28em] uppercase text-gold">
          <span className="w-6 h-px bg-gold inline-block" />
          Glossario · {aircraft.length} {aircraft.length === 1 ? "aereo" : "aerei"}
        </span>
        <h1 className="mt-4 font-display font-bold uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,7rem)]">
          Catalogo
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--color-gold)" }}>
            Aerei Militari
          </span>
        </h1>
        <p className="text-muted max-w-[60ch] mt-5 mb-7 text-[1.05rem] leading-[1.65]">
          Schede tecniche interattive con specifiche, storia, armamento e modelli 3D.
          Scegli un velivolo per esplorarlo nel dettaglio.
        </p>

        {/* legenda: colore = nazione d'origine */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 font-mono text-[11px] tracking-[0.14em] uppercase text-muted2">
          <span>Colore · nazione</span>
          {nations.map((c) => {
            const t = nationTheme(c);
            return (
              <span key={c} className="inline-flex items-center gap-2 text-muted">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: t.vars["--color-gold"] }}
                />
                {t.label}
              </span>
            );
          })}
        </div>

        <CatalogGrid aircraft={sorted} />
      </main>
    </>
  );
}
