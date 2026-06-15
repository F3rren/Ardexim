import { aircraft } from "@/lib/data/aircraft";
import Navbar from "@/components/layout/Navbar";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export default function Home() {
  const sorted = [...aircraft].sort((a, b) => a.name.localeCompare(b.name, "it"));

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
        <p className="text-muted max-w-[60ch] mt-5 mb-12 text-[1.05rem] leading-[1.65]">
          Schede tecniche interattive con specifiche, storia, armamento e modelli 3D.
          Scegli un velivolo per esplorarlo nel dettaglio.
        </p>

        <CatalogGrid aircraft={sorted} />
      </main>
    </>
  );
}
