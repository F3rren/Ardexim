"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { asset } from "@/lib/basePath";

const Hangar = dynamic(() => import("@/components/three/Hangar"), {
  ssr: false,
  // nessuna anteprima testuale: durante il caricamento resta visibile il poster statico
  loading: () => null,
});

// Riempie il proprio contenitore (che dev'essere `relative`): mostra il poster
// statico finché il modello 3D non ha disegnato il primo frame, poi dissolve.
export default function ModelViewer({
  modelUrl,
  poster,
  posterAlt,
}: {
  modelUrl?: string;
  poster: string;
  posterAlt: string;
}) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  if (!modelUrl || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-muted font-mono text-[13px] leading-relaxed">
        {failed ? (
          <span>
            Modello 3D non trovato.
            <br />
            Aggiungi il file in <span className="text-goldbr">public{modelUrl}</span>.
          </span>
        ) : (
          "Modello 3D non disponibile per questo velivolo."
        )}
      </div>
    );
  }

  return (
    <>
      {/* poster statico (foto del velivolo) mostrato finché il modello 3D non è pronto */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(poster)}
        alt={posterAlt}
        aria-hidden={ready}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="absolute inset-0">
        <Hangar modelUrl={modelUrl} onError={() => setFailed(true)} onReady={handleReady} />
      </div>
    </>
  );
}
