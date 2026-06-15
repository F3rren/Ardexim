"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Hangar = dynamic(() => import("@/components/three/Hangar"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-[13px]">
      Inizializzazione modello 3D…
    </div>
  ),
});

export default function HeroModel({ modelUrl }: { modelUrl?: string }) {
  const [failed, setFailed] = useState(false);

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
    // su desktop sposta il modello a destra per non sovrapporlo al titolo
    <div className="absolute inset-0 lg:translate-x-[9%]">
      <Hangar modelUrl={modelUrl} onError={() => setFailed(true)} />
    </div>
  );
}
