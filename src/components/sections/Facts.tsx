import type { Aircraft } from "@/lib/data/aircraft/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

export default function Facts({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="facts" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader eyebrow="Dati utili · in breve" title="Lo sapevi?" />
        </Reveal>
        <Reveal>
          <div className="border border-line rounded-[14px] bg-panel p-8">
            <div className="flex flex-wrap gap-2.5">
              {aircraft.facts.map((b, i) => (
                <Badge key={i} {...b} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
