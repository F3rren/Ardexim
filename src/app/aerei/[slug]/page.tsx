import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAircraftBySlug, getAllSlugs } from "@/lib/data/aircraft";
import Navbar, { type NavSection } from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import ModelViewer from "@/components/sections/ModelViewer";
import Specs from "@/components/sections/Specs";
import Systems from "@/components/sections/Systems";
import Armament from "@/components/sections/Armament";
import Operations from "@/components/sections/Operations";
import Gallery from "@/components/sections/Gallery";
import History from "@/components/sections/History";
import Variants from "@/components/sections/Variants";
import Facts from "@/components/sections/Facts";
import FinalCta from "@/components/sections/FinalCta";

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
    ...(a.model3d ? [{ id: "model", label: "Modello 3D" }] : []),
    { id: "specs", label: "Specifiche" },
    { id: "systems", label: "Sistemi" },
    { id: "armament", label: "Armi" },
    { id: "operations", label: "Impiego" },
    ...(a.gallery.length > 0 ? [{ id: "gallery", label: "Galleria" }] : []),
    { id: "history", label: "Storia" },
    { id: "variants", label: "Varianti" },
  ];

  return (
    <>
      <Navbar sections={sections} title={a.name} />
      <main>
        <Hero aircraft={a} />
        <Overview aircraft={a} />
        {a.model3d && <ModelViewer modelUrl={a.model3d} credit={a.model3dCredit} />}
        <Specs aircraft={a} />
        <Systems aircraft={a} />
        <Armament aircraft={a} />
        <Operations aircraft={a} />
        <Gallery aircraft={a} />
        <History aircraft={a} />
        <Variants aircraft={a} />
        <Facts aircraft={a} />
        <FinalCta aircraft={a} />
      </main>
    </>
  );
}
