import { aircraft } from "@/lib/data/aircraft";
import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/home/HomeHero";
import Ticker from "@/components/home/Ticker";
import NationShowcase from "@/components/home/NationShowcase";
import CatalogGrid from "@/components/catalog/CatalogGrid";

export default function Home() {
  const sorted = [...aircraft].sort((a, b) => a.name.localeCompare(b.name, "it"));

  // statistiche per l'hero
  const aircraftCount = aircraft.length;
  const nationCount = new Set(aircraft.map((a) => a.country)).size;
  const years = aircraft
    .map((a) => {
      const m = a.firstFlight.match(/\d{4}/);
      return m ? Number(m[0]) : NaN;
    })
    .filter(Number.isFinite);
  const yearsSpan = new Date().getFullYear() - Math.min(...years);

  return (
    <>
      <Navbar />
      <HomeHero aircraftCount={aircraftCount} nationCount={nationCount} yearsSpan={yearsSpan} />
      <Ticker />
      <NationShowcase />

      <section className="relative z-[1] mx-auto max-w-[1180px] px-6 pb-[110px]">
        <div className="mb-8 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-muted2">
          <span className="inline-block h-px w-5 bg-line" />
          Tutti i velivoli · {aircraftCount}
        </div>
        <CatalogGrid aircraft={sorted} />
      </section>
    </>
  );
}
