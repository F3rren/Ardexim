import type { Aircraft } from "@/lib/data/aircraft/types";
import { aircraft as allAircraft } from "@/lib/data/aircraft";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import ProfileCompare, { type ProfileItem } from "@/components/sections/ProfileCompare";

const toItem = (a: Aircraft): ProfileItem | null =>
  a.profile
    ? {
        slug: a.slug,
        name: a.name,
        country: a.country,
        topSpeed: a.topSpeed,
        unitCost: a.unitCost,
        profile: a.profile,
      }
    : null;

// Sezione "Profilo": radar a 5 assi del velivolo + confronto con un secondo aereo.
// Renderizzata solo se l'aereo ha il campo `profile`.
export default function Profile({ aircraft }: { aircraft: Aircraft }) {
  const current = toItem(aircraft);
  if (!current) return null;

  const others = allAircraft
    .filter((a) => a.slug !== aircraft.slug)
    .map(toItem)
    .filter((x): x is ProfileItem => x !== null)
    .sort((a, b) => a.name.localeCompare(b.name, "it"));

  return (
    <section id="profilo" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Profilo prestazionale"
            title="Il carattere"
            text="Valutazione indicativa su cinque assi. Scegli un secondo velivolo per confrontarne il profilo."
          />
        </Reveal>
        <Reveal>
          <ProfileCompare current={current} others={others} />
        </Reveal>
      </div>
    </section>
  );
}
