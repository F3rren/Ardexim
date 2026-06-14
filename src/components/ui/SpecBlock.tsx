import type { SpecBlock as SpecBlockData } from "@/lib/data/aircraft/types";

export default function SpecBlock({ block }: { block: SpecBlockData }) {
  return (
    <div className="border border-line rounded-[14px] bg-panel overflow-hidden">
      <h3 className="font-mono font-normal tracking-[0.12em] text-goldbr text-[1.1rem] px-5 py-[18px] bg-panel2 border-b border-line">
        // {block.title}
      </h3>
      <dl className="m-0 px-5 pt-2 pb-4">
        {block.rows.map((r, i) => (
          <div
            key={i}
            className="flex justify-between gap-4 py-[11px] border-b border-dashed border-line-soft last:border-b-0"
          >
            <dt className="text-muted text-[0.92rem]">{r.k}</dt>
            <dd className="m-0 font-mono text-[0.95rem] text-text text-right">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
