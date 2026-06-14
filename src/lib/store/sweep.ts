import { create } from "zustand";

// Stato condiviso della geometria alare (0 = ali avanti 20°, 1 = freccia 68°).
// Lo slider scrive `target`; il blueprint 2D e il modello 3D leggono e
// interpolano verso questo valore.
interface SweepState {
  target: number;
  setTarget: (v: number) => void;
}

export const useSweep = create<SweepState>((set) => ({
  target: 0,
  setTarget: (v) => set({ target: Math.min(1, Math.max(0, v)) }),
}));
