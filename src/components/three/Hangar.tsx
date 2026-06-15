"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, Center } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import GltfModel from "./GltfModel";
import ModelErrorBoundary from "./ModelErrorBoundary";

export default function Hangar({
  modelUrl,
  onError,
}: {
  modelUrl: string;
  onError: () => void;
}) {
  const reduce = useReducedMotion();
  const [auto, setAuto] = useState(true);

  return (
    <Canvas camera={{ position: [4, 2.4, 5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight color="#5a5d66" intensity={1.2} />
      <directionalLight color="#fff1d6" intensity={2.6} position={[5, 9, 6]} />
      <directionalLight color="#ca8a04" intensity={1.8} position={[-7, 3, -5]} />
      <pointLight color="#38d6c4" intensity={40} position={[-4, -3, 5]} />

      <Suspense fallback={null}>
        <ModelErrorBoundary onError={onError}>
          {/* auto-centratura + auto-fit della camera per modelli di scala ignota */}
          <Bounds fit clip observe margin={1.05}>
            <Center>
              <GltfModel url={modelUrl} />
            </Center>
          </Bounds>
        </ModelErrorBoundary>
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={auto && !reduce}
        autoRotateSpeed={0.9}
        onStart={() => setAuto(false)}
      />
    </Canvas>
  );
}
