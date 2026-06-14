"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { getModel } from "./models/registry";

export default function Hangar({ model3d }: { model3d?: string }) {
  const reduce = useReducedMotion();
  const [auto, setAuto] = useState(true);
  const Model = model3d ? getModel(model3d) : null;

  if (!Model) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-muted font-mono text-[13px] leading-relaxed">
        Modello 3D in arrivo per questo velivolo.
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [6, 3.4, 7], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight color="#5a5d66" intensity={1.2} />
      <directionalLight color="#fff1d6" intensity={2.6} position={[5, 9, 6]} />
      <directionalLight color="#ca8a04" intensity={1.8} position={[-7, 3, -5]} />
      <pointLight color="#38d6c4" intensity={40} position={[-4, -3, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={5.5}
        maxDistance={13}
        maxPolarAngle={Math.PI * 0.86}
        autoRotate={auto && !reduce}
        autoRotateSpeed={0.9}
        onStart={() => setAuto(false)}
      />
    </Canvas>
  );
}
