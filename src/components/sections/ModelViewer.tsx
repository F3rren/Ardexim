"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

const Hangar = dynamic(() => import("@/components/three/Hangar"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-[13px]">
      Inizializzazione modello 3D…
    </div>
  ),
});

export default function ModelViewer({
  modelUrl,
  credit,
}: {
  modelUrl?: string;
  credit?: { author: string; url: string; license: string };
}) {
  const [failed, setFailed] = useState(false);

  return (
    <section id="model" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <SectionHeader
          eyebrow="Hangar 3D · interattivo"
          title="Modello 3D"
          text="Trascina per ruotare il velivolo ed esplorarlo da ogni angolazione."
        />

        <div className="relative border border-line rounded-[14px] overflow-hidden min-h-[520px] max-lg:min-h-[380px] bg-[radial-gradient(620px_400px_at_50%_28%,rgba(56,214,196,0.08),transparent_70%)] bg-bg2 touch-none">
          <span className="absolute top-3.5 left-4 z-10 font-mono text-[10px] tracking-[0.14em] uppercase text-cyan/70 pointer-events-none">
            CAD · MODELLO 3D // VIEW-01
          </span>
          <span className="absolute left-4 bottom-3.5 z-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted2 pointer-events-none">
            <Icon name="rotate" className="w-4 h-4" strokeWidth={1.6} />
            Trascina per ruotare
          </span>

          {modelUrl && !failed ? (
            <Hangar modelUrl={modelUrl} onError={() => setFailed(true)} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-muted font-mono text-[13px] leading-relaxed">
              {failed ? (
                <span>
                  Modello 3D non trovato.
                  <br />
                  Aggiungi il file in{" "}
                  <span className="text-goldbr">public{modelUrl}</span>.
                </span>
              ) : (
                "Modello 3D non disponibile per questo velivolo."
              )}
            </div>
          )}
        </div>

        {credit && (
          <p className="mt-3 font-mono text-[11px] text-muted2">
            Modello 3D: «{credit.author}» — {credit.license} ·{" "}
            <a className="underline hover:text-goldbr" href={credit.url} target="_blank" rel="noopener noreferrer">
              fonte
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
