"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

export interface NavSection {
  id: string;
  label: string;
}

export default function Navbar({
  sections = [],
  title,
}: {
  sections?: NavSection[];
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (sections.length === 0) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav
      className="fixed top-3.5 left-3.5 right-3.5 z-50 h-[68px] mx-auto max-w-[1208px] flex items-center justify-between pl-[22px] pr-3.5 rounded-[14px] border border-line bg-[rgba(13,11,9,0.72)] backdrop-blur-[14px]"
      aria-label="Navigazione principale"
    >
      <Link href="/" className="flex items-center gap-3 font-display font-semibold uppercase text-xl tracking-[0.04em]">
        <Icon name="bolt" className="w-[26px] h-[26px] text-gold" strokeWidth={1.6} />
        Aero<span className="text-gold">Codex</span>
        {title && (
          <span className="font-mono text-[11px] text-gold border border-line rounded-md px-[7px] py-[3px] tracking-[0.1em] normal-case">
            {title}
          </span>
        )}
      </Link>

      {sections.length > 0 && (
        <div className="hidden lg:flex items-center gap-px">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[12px] tracking-[0.06em] uppercase px-[9px] py-2 rounded-[9px] transition-colors hover:text-text hover:bg-white/[0.04] ${
                active === s.id ? "text-goldbr" : "text-muted"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}

      <Link
        href="/"
        className="hidden lg:inline-flex items-center font-mono text-[13px] tracking-[0.1em] uppercase bg-gold text-[#1a1304] px-[18px] min-h-[44px] rounded-[10px] font-bold hover:bg-goldbr transition-colors"
      >
        Catalogo
      </Link>

      {sections.length > 0 && (
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Apri menu"
          aria-expanded={open}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-[9px] border border-line text-text"
        >
          <Icon name="bars" className="w-[22px] h-[22px]" strokeWidth={2} />
        </button>
      )}

      {/* menu mobile */}
      {open && sections.length > 0 && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 p-2 rounded-[14px] border border-line bg-[rgba(13,11,9,0.95)] backdrop-blur-[14px] flex flex-col">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] tracking-[0.08em] uppercase px-3.5 py-3 rounded-[9px] text-muted hover:text-text hover:bg-white/[0.04]"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
