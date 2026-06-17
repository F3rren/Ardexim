import { aircraft } from "@/lib/data/aircraft";

// Nastro scorrevole con le designazioni dei velivoli (stile telescrivente/HUD).
// Animazione CSS (.anim-marquee) disabilitata con prefers-reduced-motion.
export default function Ticker() {
  const items = aircraft.map((a) => a.name);

  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((n, i) => (
        <span
          key={i}
          className="flex items-center font-mono text-[12px] tracking-[0.18em] uppercase text-muted2"
        >
          <span className="px-6 whitespace-nowrap">{n}</span>
          <span className="text-gold/45">/</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-line bg-bg2/50">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-20"
        style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-20"
        style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
      />
      <div className="anim-marquee flex w-max py-3">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
