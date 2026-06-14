"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSweep } from "@/lib/store/sweep";

// F-14 procedurale low-poly. Le ali a geometria variabile seguono lo store `sweep`
// con easing (effetto attuatore); il postbruciatore si accende in supersonico.
export default function TomcatModel() {
  const wingR = useRef<THREE.Group>(null);
  const wingL = useRef<THREE.Group>(null);
  const current = useRef(0);

  const wingGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0.7, 0);
    s.lineTo(0.25, 2.5);
    s.lineTo(-0.15, 2.5);
    s.lineTo(-0.78, 0);
    s.closePath();
    return new THREE.ExtrudeGeometry(s, { depth: 0.09, bevelEnabled: false });
  }, []);

  const mats = useMemo(
    () => ({
      steel: new THREE.MeshStandardMaterial({ color: 0x3c372f, metalness: 0.4, roughness: 0.5 }),
      steelDk: new THREE.MeshStandardMaterial({ color: 0x26221b, metalness: 0.4, roughness: 0.55 }),
      glass: new THREE.MeshStandardMaterial({
        color: 0x0b1a1c,
        metalness: 0.5,
        roughness: 0.15,
        emissive: 0x0a3438,
        emissiveIntensity: 0.4,
      }),
      burner: new THREE.MeshStandardMaterial({ color: 0x16110d, emissive: 0xff6a1a, emissiveIntensity: 0 }),
    }),
    []
  );

  useEffect(() => {
    return () => {
      wingGeo.dispose();
      Object.values(mats).forEach((m) => m.dispose());
    };
  }, [wingGeo, mats]);

  useFrame(() => {
    const t = useSweep.getState().target;
    current.current += (t - current.current) * 0.16;
    const a = current.current * 0.95;
    if (wingR.current) wingR.current.rotation.y = -a;
    if (wingL.current) wingL.current.rotation.y = a;
    mats.burner.emissiveIntensity = Math.max(0, (current.current - 0.7) / 0.3) * 1.7;
  });

  return (
    <group rotation={[0, -0.6, 0]}>
      {/* gondole motori */}
      {[0.44, -0.44].map((z) => (
        <mesh key={z} position={[-0.2, -0.02, z]} rotation={[0, 0, Math.PI / 2]} material={mats.steel}>
          <cylinderGeometry args={[0.34, 0.3, 3.4, 20]} />
        </mesh>
      ))}
      {/* corpo centrale */}
      <mesh material={mats.steelDk}>
        <boxGeometry args={[3.3, 0.5, 1.0]} />
      </mesh>
      {/* fusoliera anteriore */}
      <mesh position={[1.55, 0.03, 0]} material={mats.steel}>
        <boxGeometry args={[1.5, 0.42, 0.7]} />
      </mesh>
      {/* muso */}
      <mesh position={[2.35, 0.02, 0]} rotation={[0, 0, -Math.PI / 2]} material={mats.steel}>
        <coneGeometry args={[0.4, 1.8, 20]} />
      </mesh>
      {/* canopy */}
      <mesh position={[1.2, 0.33, 0]} scale={[1.6, 0.5, 0.55]} material={mats.glass}>
        <sphereGeometry args={[0.36, 20, 14]} />
      </mesh>
      {/* scarichi (postbruciatore) */}
      {[0.44, -0.44].map((z) => (
        <mesh key={z} position={[-2.05, -0.02, z]} rotation={[0, 0, Math.PI / 2]} material={mats.burner}>
          <cylinderGeometry args={[0.3, 0.27, 0.45, 20]} />
        </mesh>
      ))}
      {/* derive verticali gemelle */}
      {[1, -1].map((s) => (
        <group key={s} position={[0, 0.1, s * 0.42]} rotation={[s * 0.18, 0, 0]}>
          <mesh position={[-1.55, 0.55, 0]} rotation={[0, 0, 0.42]} material={mats.steelDk}>
            <boxGeometry args={[1.05, 0.95, 0.07]} />
          </mesh>
        </group>
      ))}
      {/* stabilizzatori orizzontali */}
      {[1, -1].map((s) => (
        <mesh key={s} position={[-1.95, 0, s * 1.0]} rotation={[0, -s * 0.5, 0]} material={mats.steelDk}>
          <boxGeometry args={[1.0, 0.06, 1.05]} />
        </mesh>
      ))}
      {/* ali a geometria variabile */}
      <group ref={wingR} position={[0, 0.04, 0.5]}>
        <mesh geometry={wingGeo} material={mats.steel} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group ref={wingL} position={[0, 0.04, -0.5]}>
        <mesh geometry={wingGeo} material={mats.steel} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}
