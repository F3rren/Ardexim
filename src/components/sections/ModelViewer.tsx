"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import type { Model3DEntry } from "@/lib/data/aircraft/types";
import { asset } from "@/lib/basePath";

const Hangar = dynamic(() => import("@/components/three/Hangar"), {
  ssr: false,
  // nessuna anteprima testuale: durante il caricamento resta visibile il poster statico
  loading: () => null,
});

// Riempie il proprio contenitore (che dev'essere `relative`): mostra il poster
// statico finché il modello 3D non ha disegnato il primo frame, poi dissolve.
// Se i modelli sono più d'uno, mostra uno switcher a chip in basso.
export default function ModelViewer({
  models,
  poster,
  posterAlt,
}: {
  models: Model3DEntry[];
  poster: string;
  posterAlt: string;
}) {
  const [sel, setSel] = useState(0);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  const current = models[sel];

  // cambio variante: ritorna al poster e fa ricaricare il viewer sul nuovo modello
  const select = useCallback((i: number) => {
    setSel(i);
    setReady(false);
    setFailed(false);
  }, []);

  if (!current || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-muted font-mono text-[13px] leading-relaxed">
        {failed ? (
          <span>
            Modello 3D non trovato.
            <br />
            Aggiungi il file in <span className="text-goldbr">public{current?.url}</span>.
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
        {/* key sul modello: cambiando variante il viewer si rimonta e ricarica */}
        <Hangar
          key={current.url}
          modelUrl={current.url}
          onError={() => setFailed(true)}
          onReady={handleReady}
        />
      </div>

      {/* switcher varianti (solo se più di un modello) */}
      {models.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-[2] flex flex-wrap items-center justify-center gap-2 px-4">
          {models.map((m, i) => (
            <button
              key={m.url}
              type="button"
              onClick={() => select(i)}
              aria-pressed={i === sel}
              className={`font-mono text-[11px] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border backdrop-blur-md transition-colors ${
                i === sel
                  ? "bg-gold text-[#15110a] border-gold font-bold"
                  : "bg-black/55 border-line text-muted hover:text-text hover:border-gold/60"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
