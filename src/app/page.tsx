import { aircraft } from "@/lib/data/aircraft";
import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/home/HomeHero";
import Ticker from "@/components/home/Ticker";
import CatalogExplorer from "@/components/catalog/CatalogExplorer";

export default function Home() {
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
      <CatalogExplorer aircraft={aircraft} />
    </>
  );
}
