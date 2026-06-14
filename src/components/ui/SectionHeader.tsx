export default function SectionHeader({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[760px] mb-12 ${className}`}>
      <span className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.28em] uppercase text-gold">
        <span className="w-6 h-px bg-gold inline-block" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(2.2rem,5.5vw,4rem)]">
        {title}
      </h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  );
}
