"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Aircraft, TimelineItem, TimelineMedia } from "@/lib/data/aircraft/types";
import { asset } from "@/lib/basePath";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

function TimelineImage({ media }: { media: TimelineMedia }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className="relative mt-5 border border-line rounded-[14px] overflow-hidden aspect-[16/10] bg-panel2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.16]">
        <Image
          src={asset(media.src)}
          alt={media.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-cover"
        />
      </motion.div>
      <figcaption className="absolute left-3.5 bottom-3 font-mono text-[11px] tracking-[0.08em] text-white bg-black/55 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
        {media.caption}
      </figcaption>
    </div>
  );
}

function EntryContent({ t, right }: { t: TimelineItem; right: boolean }) {
  return (
    <>
      <div className={`flex items-center gap-3.5 flex-wrap ${right ? "lg:justify-end" : ""}`}>
        <span className="font-display font-bold text-[1.5rem] text-goldbr leading-none">{t.year}</span>
        <Badge {...t.tag} />
      </div>
      <h3 className={`font-display font-semibold uppercase text-[1.2rem] mt-1 mb-2 ${right ? "lg:text-right" : ""}`}>
        {t.title}
      </h3>
      <p className={`text-muted leading-relaxed ${right ? "lg:text-right" : ""}`}>{t.text}</p>
    </>
  );
}

export default function Evolution({ aircraft }: { aircraft: Aircraft }) {
  return (
    <section id="history" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Linea temporale"
            title="Evoluzione"
            text="Mezzo secolo di storia del velivolo, dalle origini del progetto al ritiro — con gli scatti storici dell'U.S. Navy lungo le tappe principali."
          />
        </Reveal>

        <div className="relative">
          {/* linea: a sinistra su mobile, al centro su desktop */}
          <div className="absolute top-2 bottom-2 left-[7px] lg:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold via-line to-line" />

          <div className="flex flex-col gap-14">
            {aircraft.timeline.map((t, i) => {
              const right = i % 2 !== 0; // alternanza: pari a sinistra, dispari a destra
              return (
                <Reveal key={i}>
                  <div className="relative">
                    {/* pallino sulla linea */}
                    <span className="absolute top-1.5 left-[7px] lg:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-bg border-[3px] border-gold" />
                    <div className="lg:grid lg:grid-cols-2 lg:gap-14">
                      <div className={`pl-[34px] lg:pl-0 ${right ? "lg:col-start-2" : ""}`}>
                        <EntryContent t={t} right={right} />
                        {t.media && <TimelineImage media={t.media} />}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
