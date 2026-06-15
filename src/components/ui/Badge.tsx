import type { BadgeData } from "@/lib/data/aircraft/types";

const variants: Record<NonNullable<BadgeData["variant"]>, string> = {
  default: "border-line text-muted bg-white/[0.02] hover:border-gold/50 hover:text-text",
  gold: "border-gold/45 text-goldbr bg-gold/[0.07]",
  cyan: "border-cyan/35 text-cyan bg-cyan/[0.06]",
  danger: "border-danger/55 text-danger bg-danger/[0.10]",
};

// Versione "solid": fondo scuro + accenti vivaci, leggibile su QUALSIASI sfondo
// (foto del catalogo, scena 3D dell'hero) dove il fondo translucido non basta.
const solidVariants: Record<NonNullable<BadgeData["variant"]>, string> = {
  default: "border-white/25 text-white bg-black/60",
  gold: "border-goldbr/70 text-goldbr bg-black/60",
  cyan: "border-cyan/70 text-cyan bg-black/60",
  danger: "border-danger/80 text-[#ff8068] bg-black/60",
};

const dotColor: Record<NonNullable<BadgeData["variant"]>, string> = {
  default: "bg-cyan",
  gold: "bg-goldbr",
  cyan: "bg-cyan",
  danger: "bg-danger",
};

export default function Badge({
  label,
  variant = "default",
  dot,
  live,
  solid,
}: BadgeData & { solid?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] uppercase px-3.5 py-2 rounded-full border transition-colors ${
        solid
          ? `${solidVariants[variant]} backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.45)]`
          : variants[variant]
      }`}
    >
      {dot && (
        <span className={`w-2 h-2 rounded-full ${dotColor[variant]} ${live ? "dot-live" : ""}`} />
      )}
      {label}
    </span>
  );
}
