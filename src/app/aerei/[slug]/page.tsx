import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAircraftBySlug, getAllSlugs } from "@/lib/data/aircraft";
import { nationStyle } from "@/lib/theme/nations";
import Navbar, { type NavSection } from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Specs from "@/components/sections/Specs";
import Systems from "@/components/sections/Systems";
import Armament from "@/components/sections/Armament";
import Evolution from "@/components/sections/Evolution";
import Variants from "@/components/sections/Variants";
import Facts from "@/components/sections/Facts";
import FinalCta from "@/components/sections/FinalCta";
import Credits from "@/components/sections/Credits";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAircraftBySlug(slug);
  if (!a) return {};
  return {
    title: a.name,
    description: `${a.name} (${a.manufacturer}) — ${a.role}. Specifiche, storia, armamento e modello 3D interattivo.`,
  };
}

export default async function AircraftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getAircraftBySlug(slug);
  if (!a) notFound();

  const sections: NavSection[] = [
    { id: "overview", label: "Overview" },
    { id: "specs", label: "Specifiche" },
    { id: "systems", label: "Sistemi" },
    { id: "armament", label: "Armi" },
    { id: "history", label: "Evoluzione" },
    { id: "variants", label: "Varianti" },
  ];

  return (
    // La palette accentata della nazione viene applicata via variabili CSS
    // e si propaga in cascata a navbar e a tutte le sezioni della scheda.
    <div style={nationStyle(a.country)}>
      <Navbar sections={sections} title={a.name} />
      <main>
        <Hero aircraft={a} />
        <Overview aircraft={a} />
        <Specs aircraft={a} />
        <Systems aircraft={a} />
        <Armament aircraft={a} />
        <Evolution aircraft={a} />
        <Variants aircraft={a} />
        <Facts aircraft={a} />
        <FinalCta aircraft={a} />
        <Credits aircraft={a} />
      </main>
    </div>
  );
}
