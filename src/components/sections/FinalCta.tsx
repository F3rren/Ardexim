import Link from "next/link";
import type { Aircraft } from "@/lib/data/aircraft/types";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function FinalCta({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <div className="text-center border border-line rounded-[20px] px-6 py-20 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(202,138,4,0.12),transparent_70%)] bg-panel">
            <span className="inline-flex items-center justify-center gap-2.5 font-mono text-[13px] tracking-[0.28em] uppercase text-gold">
              <span className="w-6 h-px bg-gold inline-block" />
              {aircraft.manufacturer} · {aircraft.country}
            </span>
            <h2 className="mt-[18px] font-display font-semibold uppercase leading-[1.05] text-[clamp(2.2rem,6vw,4.5rem)]">
              {aircraft.name}
            </h2>
            <p className="text-muted max-w-[50ch] mx-auto mt-[18px] mb-[30px] leading-relaxed">
              Esplora gli altri velivoli del catalogo o torna in cima alla scheda.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <a
                href="#top"
                className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] bg-gold text-[#1a1304] font-bold border border-gold hover:bg-goldbr transition-colors"
              >
                <Icon name="arrowUp" className="w-[18px] h-[18px]" strokeWidth={2} />
                Torna in cima
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 font-mono uppercase tracking-[0.1em] text-sm px-[26px] min-h-[44px] rounded-[11px] border border-line text-text hover:border-gold hover:text-goldbr transition-colors"
              >
                Tutti gli aerei
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
