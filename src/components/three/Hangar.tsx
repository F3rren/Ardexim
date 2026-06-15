"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, Center } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
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
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const zoomLimitsSet = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  // Inizio interazione: ferma l'auto-rotazione e (una sola volta) fissa i limiti
  // di zoom rispetto alla distanza ormai stabile scelta da <Bounds fit>.
  const handleStart = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setAutoRotate(false);
    const c = controlsRef.current;
    if (c && !zoomLimitsSet.current) {
      const d = c.getDistance();
      c.minDistance = d * 0.55; // zoom-in massimo
      c.maxDistance = d * 1.9; // zoom-out massimo
      zoomLimitsSet.current = true;
    }
  }, []);

  // Fine interazione: riprende l'auto-rotazione dopo una breve pausa di inattività.
  const handleEnd = useCallback(() => {
    resumeTimer.current = setTimeout(() => setAutoRotate(true), 2000);
  }, []);

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

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enableRotate={true}
        enableZoom={true}
        enablePan={false}
        enableDamping={true}
        // limiti verticali: niente vista perfettamente dall'alto né capovolta da sotto
        minPolarAngle={Math.PI * 0.12}
        maxPolarAngle={Math.PI * 0.85}
        // auto-rotazione: attiva di default, sospesa durante l'interazione
        autoRotate={autoRotate && !reduce}
        autoRotateSpeed={1.5}
        onStart={handleStart}
        onEnd={handleEnd}
      />
    </Canvas>
  );
}
