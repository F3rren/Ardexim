import { aircraft } from "@/lib/data/aircraft";
import Navbar, { type NavSection } from "@/components/layout/Navbar";
import HomeHero from "@/components/home/HomeHero";
import Intro from "@/components/home/Intro";
import Ticker from "@/components/home/Ticker";
import Nations from "@/components/home/Nations";
import CatalogExplorer from "@/components/catalog/CatalogExplorer";

// Voci di navigazione della home (data-driven: aggiungere una sezione = una voce qui).
const sections: NavSection[] = [
  { id: "intro", label: "Cosa offre" },
  { id: "nazioni", label: "Nazioni" },
];

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
      <Navbar sections={sections} cta={{ href: "#catalogo", label: "Catalogo" }} />
      <HomeHero aircraftCount={aircraftCount} nationCount={nationCount} yearsSpan={yearsSpan} />
      <Intro />
      <Ticker />
      <Nations aircraft={aircraft} />
      <CatalogExplorer aircraft={aircraft} />
    </>
  );
}
