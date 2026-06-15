"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, Center } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import GltfModel from "./GltfModel";
import ModelErrorBoundary from "./ModelErrorBoundary";

export default function Hangar({
  modelUrl,
  onError,
  onReady,
}: {
  modelUrl: string;
  onError: () => void;
  onReady?: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <Canvas camera={{ position: [4, 2.4, 5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight color="#5a5d66" intensity={1.2} />
      <directionalLight color="#fff1d6" intensity={2.6} position={[5, 9, 6]} />
      <directionalLight color="#ca8a04" intensity={1.8} position={[-7, 3, -5]} />
      <pointLight color="#38d6c4" intensity={40} position={[-4, -3, 5]} />

      <Suspense fallback={null}>
        <ModelErrorBoundary onError={onError}>
          {/* margine ampio: il modello non viene mai tagliato durante la rotazione */}
          <Bounds fit clip margin={1.3}>
            <Center>
              <GltfModel url={modelUrl} onReady={onReady} />
            </Center>
          </Bounds>
        </ModelErrorBoundary>
      </Suspense>

      {/* solo auto-rotazione: nessuna interazione dell'utente */}
      <OrbitControls
        makeDefault
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        autoRotate={!reduce}
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
