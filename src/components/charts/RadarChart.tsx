// Radar/spider chart in SVG puro (nessuna dipendenza). Supporta 1 o 2 serie
// (per il confronto fra due aerei). I valori sono 0-100.

export interface RadarSeries {
  name: string;
  color: string; // colore CSS (anche var(--color-...))
  values: number[]; // un valore per asse, stesso ordine di `axes`
  dash?: boolean; // tratteggiata (serie di confronto)
}

export default function RadarChart({
  axes,
  series,
  size = 360,
}: {
  axes: string[];
  series: RadarSeries[];
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 64; // margine per le etichette
  const n = axes.length;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const point = (i: number, frac: number) => {
    const a = angle(i);
    return [cx + Math.cos(a) * r * frac, cy + Math.sin(a) * r * frac] as const;
  };
  const polygon = (vals: number[]) =>
    vals.map((v, i) => point(i, Math.max(0, Math.min(100, v)) / 100).join(",")).join(" ");

  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Profilo prestazionale: ${series.map((s) => s.name).join(" vs ")}`}
    >
      {/* griglia (anelli) */}
      {rings.map((ring, ri) => (
        <polygon
          key={ri}
          points={axes.map((_, i) => point(i, ring).join(",")).join(" ")}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth={1}
        />
      ))}

      {/* assi + etichette */}
      {axes.map((label, i) => {
        const [x, y] = point(i, 1);
        const [lx, ly] = point(i, 1.18);
        const a = angle(i);
        const anchor = Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
        return (
          <g key={label}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="var(--color-line)" strokeWidth={1} />
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="var(--color-muted)"
              fontSize={12.5}
              fontFamily="var(--font-mono), monospace"
              style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* serie */}
      {series.map((s, si) => (
        <g key={s.name}>
          <polygon
            points={polygon(s.values)}
            fill={s.color}
            fillOpacity={si === 0 ? 0.18 : 0.1}
            stroke={s.color}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeDasharray={s.dash ? "5 4" : undefined}
          />
          {s.values.map((v, i) => {
            const [px, py] = point(i, Math.max(0, Math.min(100, v)) / 100);
            return <circle key={i} cx={px} cy={py} r={3} fill={s.color} />;
          })}
        </g>
      ))}
    </svg>
  );
}
