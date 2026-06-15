"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { asset } from "@/lib/basePath";

// Carica un GLB da /public (con basePath in produzione) e lo restituisce.
// La centratura e la scala sono gestite a monte da <Center>/<Bounds>.
export default function GltfModel({
  url,
  onReady,
}: {
  url: string;
  onReady?: () => void;
}) {
  const { scene } = useGLTF(asset(url));

  // Quando arriviamo qui useGLTF ha risolto il Suspense: il modello è in scena.
  // Aspettiamo un frame (così è stato disegnato almeno una volta) e segnaliamo "pronto",
  // per poter dissolvere il poster statico mostrato durante il caricamento.
  useEffect(() => {
    const id = requestAnimationFrame(() => onReady?.());
    return () => cancelAnimationFrame(id);
  }, [onReady]);

  return <primitive object={scene} />;
}
