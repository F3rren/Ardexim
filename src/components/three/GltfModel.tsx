"use client";

import { useGLTF } from "@react-three/drei";
import { asset } from "@/lib/basePath";

// Carica un GLB da /public (con basePath in produzione) e lo restituisce.
// La centratura e la scala sono gestite a monte da <Center>/<Bounds>.
export default function GltfModel({ url }: { url: string }) {
  const { scene } = useGLTF(asset(url));
  return <primitive object={scene} />;
}
