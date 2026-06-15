import Link from "next/link";
import Image from "next/image";
import type { Aircraft } from "@/lib/data/aircraft/types";
import { asset } from "@/lib/basePath";
import Badge from "@/components/ui/Badge";

export default function AircraftCard({ a }: { a: Aircraft }) {
  const inService = a.status === "in-servizio";
  return (
    <Link
      href={`/aerei/${a.slug}`}
      className="group block border border-line rounded-[14px] overflow-hidden bg-gradient-to-b from-panel to-bg2 hover:border-gold/55 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-panel2">
        <Image
          src={asset(a.thumb)}
          alt={a.thumbAlt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3">
          <Badge
            label={inService ? "In servizio" : "Ritirato"}
            variant={inService ? "cyan" : "danger"}
            dot
            live={inService}
          />
        </span>
      </div>
      <div className="p-5">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold">
          {a.manufacturer} · {a.country}
        </div>
        <h3 className="font-display font-bold uppercase text-[1.7rem] leading-none mt-1.5">{a.name}</h3>
        <p className="text-muted text-[0.92rem] mt-2">{a.role}</p>
        <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-dashed border-line-soft font-mono text-[11px] tracking-[0.08em] text-muted2">
          <span>{a.service}</span>
          <span className="text-goldbr">{a.topSpeed}</span>
        </div>
      </div>
    </Link>
  );
}
