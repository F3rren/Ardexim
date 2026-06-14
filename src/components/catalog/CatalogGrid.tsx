"use client";

import { useMemo, useState } from "react";
import type { Aircraft } from "@/lib/data/aircraft/types";
import AircraftCard from "./AircraftCard";
import Icon from "@/components/ui/Icon";

export default function CatalogGrid({ aircraft }: { aircraft: Aircraft[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return aircraft;
    return aircraft.filter((a) =>
      [a.name, a.manufacturer, a.role, a.country].join(" ").toLowerCase().includes(s)
    );
  }, [q, aircraft]);

  return (
    <>
      <div className="relative mb-8 max-w-[440px]">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2">
          <Icon name="radar" className="w-5 h-5" />
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cerca per nome, ruolo, nazione…"
          aria-label="Cerca un aereo"
          className="w-full bg-panel border border-line rounded-[11px] pl-11 pr-4 py-3 font-mono text-sm text-text placeholder:text-muted2 focus:border-gold focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted font-mono text-sm">Nessun aereo trovato per «{q}».</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a) => (
            <AircraftCard key={a.slug} a={a} />
          ))}
        </div>
      )}
    </>
  );
}
