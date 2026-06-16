"use client";

import { useState } from "react";
import type { AircraftProfile } from "@/lib/data/aircraft/types";
import { nationTheme } from "@/lib/theme/nations";
import RadarChart, { type RadarSeries } from "@/components/charts/RadarChart";

export interface ProfileItem {
  slug: string;
  name: string;
  country: string;
  topSpeed: string;
  unitCost: string;
  profile: AircraftProfile;
}

const AXES = ["Velocità", "Raggio", "Agilità", "Carico", "Furtività"] as const;
const toValues = (p: AircraftProfile) => [p.velocita, p.raggio, p.agilita, p.carico, p.furtivita];

function Legend({ color, name, country }: { color: string; name: string; country: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px]">
      <span className="w-3 h-3 rounded-sm" style={{ background: color }} />
      <span className="text-text">{name}</span>
      <span className="text-muted2">· {country}</span>
    </span>
  );
}

export default function ProfileCompare({
  current,
  others,
}: {
  current: ProfileItem;
  others: ProfileItem[];
}) {
  const [cmpSlug, setCmpSlug] = useState("");
  const cmp = others.find((o) => o.slug === cmpSlug);
  const cmpColor = cmp ? nationTheme(cmp.country).vars["--color-goldbr"] : "";

  const series: RadarSeries[] = [
    { name: current.name, color: "var(--color-goldbr)", values: toValues(current.profile) },
  ];
  if (cmp) series.push({ name: cmp.name, color: cmpColor, values: toValues(cmp.profile), dash: true });

  const rows: { k: string; a: string; b?: string }[] = [
    { k: "Velocità max", a: current.topSpeed, b: cmp?.topSpeed },
    { k: "Costo", a: current.unitCost, b: cmp?.unitCost },
    ...AXES.map((ax, i) => ({
      k: ax,
      a: String(toValues(current.profile)[i]),
      b: cmp ? String(toValues(cmp.profile)[i]) : undefined,
    })),
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center border border-line rounded-[16px] bg-gradient-to-b from-panel to-bg2 p-6 lg:p-8">
      <div className="mx-auto w-full max-w-[420px]">
        <RadarChart axes={[...AXES]} series={series} />
      </div>

      <div>
        <div className="flex flex-col gap-2 mb-5">
          <Legend color="var(--color-goldbr)" name={current.name} country={current.country} />
          {cmp && <Legend color={cmpColor} name={cmp.name} country={cmp.country} />}
        </div>

        <label
          htmlFor="cmp"
          className="block font-mono text-[11px] tracking-[0.14em] uppercase text-muted2 mb-2"
        >
          Confronta con…
        </label>
        <select
          id="cmp"
          value={cmpSlug}
          onChange={(e) => setCmpSlug(e.target.value)}
          className="w-full bg-bg border border-line rounded-[10px] px-3 py-2.5 font-mono text-sm text-text outline-none focus:border-gold transition-colors"
        >
          <option value="">— nessuno —</option>
          {others.map((o) => (
            <option key={o.slug} value={o.slug}>
              {o.name}
            </option>
          ))}
        </select>

        <div className="mt-5 border-t border-line-soft divide-y divide-line-soft">
          {rows.map((row) => (
            <div
              key={row.k}
              className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] gap-x-4 py-2 font-mono text-[12px] items-baseline"
            >
              <span className="text-muted2 uppercase tracking-[0.06em]">{row.k}</span>
              <span className="text-goldbr text-right tabular-nums">{row.a}</span>
              {cmp && (
                <span className="text-right tabular-nums hidden sm:block" style={{ color: cmpColor }}>
                  {row.b}
                </span>
              )}
            </div>
          ))}
        </div>
        {cmp && (
          <p className="mt-3 font-mono text-[10px] text-muted2 sm:hidden">
            (Apri su schermo più largo per la colonna di confronto affiancata.)
          </p>
        )}
        <p className="mt-3 font-mono text-[10px] text-muted2">
          Valori 0-100 indicativi, a scopo di confronto qualitativo.
        </p>
      </div>
    </div>
  );
}
