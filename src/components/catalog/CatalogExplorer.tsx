"use client";

import { useEffect, useMemo, useState } from "react";
import type { Aircraft } from "@/lib/data/aircraft/types";
import { nationTheme } from "@/lib/theme/nations";
import AircraftCard from "./AircraftCard";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";

type SortKey = "az" | "year-desc" | "year-asc";
type StatusKey = "all" | "in-servizio" | "ritirato";

const yearOf = (a: Aircraft) => {
  const m = a.firstFlight.match(/\d{4}/);
  return m ? Number(m[0]) : 0;
};

export default function CatalogExplorer({ aircraft }: { aircraft: Aircraft[] }) {
  const [q, setQ] = useState("");
  const [nation, setNation] = useState(""); // "" = tutte
  const [status, setStatus] = useState<StatusKey>("all");
  const [sort, setSort] = useState<SortKey>("az");

  // pre-filtro lanciato dalla sezione "Nazioni" (vedi Nations.tsx)
  useEffect(() => {
    const onNation = (e: Event) => {
      const country = (e as CustomEvent<string>).detail;
      setNation(country);
      setStatus("all");
      setQ("");
    };
    window.addEventListener("catalog:nation", onNation as EventListener);
    return () => window.removeEventListener("catalog:nation", onNation as EventListener);
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = aircraft.filter((a) => {
      if (nation && a.country !== nation) return false;
      if (status !== "all" && a.status !== status) return false;
      if (s && ![a.name, a.manufacturer, a.role, a.country].join(" ").toLowerCase().includes(s))
        return false;
      return true;
    });
    return [...list].sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name, "it");
      const d = yearOf(b) - yearOf(a);
      const r = sort === "year-desc" ? d : -d;
      return r || a.name.localeCompare(b.name, "it");
    });
  }, [aircraft, q, nation, status, sort]);

  const hasFilters = q !== "" || nation !== "" || status !== "all";
  const reset = () => {
    setQ("");
    setNation("");
    setStatus("all");
  };

  const statuses: { k: StatusKey; label: string }[] = [
    { k: "all", label: "Tutti" },
    { k: "in-servizio", label: "In servizio" },
    { k: "ritirato", label: "Ritirato" },
  ];

  return (
    <section
      id="catalogo"
      className="relative z-[1] mx-auto max-w-[1180px] px-6 pb-[110px] pt-[20px] scroll-mt-24"
    >
      <SectionHeader
        eyebrow="Catalogo"
        title="Tutti i velivoli"
        text="Cerca per nome, costruttore o ruolo, filtra per stato operativo e ordina la flotta. Per filtrare per nazione, scegli una scuola costruttrice qui sopra."
      />

      {/* barra: ricerca + stato + ordinamento */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-[220px] flex-1 max-w-[440px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2">
            <Icon name="radar" className="h-5 w-5" />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cerca per nome, ruolo, costruttore…"
            aria-label="Cerca un aereo"
            className="w-full rounded-[11px] border border-line bg-panel py-3 pl-11 pr-4 font-mono text-sm text-text placeholder:text-muted2 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="inline-flex overflow-hidden rounded-[10px] border border-line font-mono text-[12px]">
          {statuses.map((s) => (
            <button
              key={s.k}
              type="button"
              onClick={() => setStatus(s.k)}
              aria-pressed={status === s.k}
              className={`px-3.5 py-2.5 uppercase tracking-[0.06em] transition-colors ${
                status === s.k
                  ? "bg-gold font-bold text-[#15110a]"
                  : "text-muted hover:bg-white/[0.04] hover:text-text"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <label className="sr-only" htmlFor="sort">
          Ordina
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-[10px] border border-line bg-panel px-3 py-2.5 font-mono text-[12px] text-text outline-none focus:border-gold"
        >
          <option value="az">Nome · A-Z</option>
          <option value="year-desc">Primo volo · più recenti</option>
          <option value="year-asc">Primo volo · più datati</option>
        </select>
      </div>

      {/* conteggio + filtro nazione attivo + azzera */}
      <div className="mt-4 mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.1em] uppercase text-muted2">
        <span>
          {filtered.length} {filtered.length === 1 ? "velivolo" : "velivoli"}
        </span>
        {nation && (
          <button
            type="button"
            onClick={() => setNation("")}
            aria-label={`Rimuovi filtro nazione ${nationTheme(nation).label}`}
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 transition-opacity hover:opacity-80"
            style={{
              borderColor: nationTheme(nation).vars["--color-goldbr"],
              color: nationTheme(nation).vars["--color-goldbr"],
            }}
          >
            {nationTheme(nation).label} ✕
          </button>
        )}
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="ml-auto inline-flex items-center gap-1.5 text-muted hover:text-goldbr transition-colors"
          >
            Azzera filtri ✕
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-muted">Nessun velivolo corrisponde ai filtri.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AircraftCard key={a.slug} a={a} />
          ))}
        </div>
      )}
    </section>
  );
}
