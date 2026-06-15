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
      className="relative border border-line rounded-[14px] overflow-hidden aspect-[16/10] bg-panel2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.16]">
        <Image
          src={asset(media.src)}
          alt={media.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 540px"
          className="object-cover"
        />
      </motion.div>
      <figcaption className="absolute left-3.5 bottom-3 font-mono text-[11px] tracking-[0.08em] text-white bg-black/55 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
        {media.caption}
      </figcaption>
    </div>
  );
}

function EntryContent({ t }: { t: TimelineItem }) {
  return (
    <div>
      <div className="flex items-center gap-3.5 flex-wrap">
        <span className="font-display font-bold text-[1.5rem] text-goldbr leading-none">{t.year}</span>
        <Badge {...t.tag} />
      </div>
      <h3 className="font-display font-semibold uppercase text-[1.2rem] mt-1 mb-2">{t.title}</h3>
      <p className="text-muted max-w-[62ch] leading-relaxed">{t.text}</p>
    </div>
  );
}

export default function Evolution({ aircraft }: { aircraft: Aircraft }) {
  // assegna il lato (destra/sinistra) alle tappe con foto, alternando
  let seen = 0;
  const side = aircraft.timeline.map((t) =>
    t.media ? (seen++ % 2 === 0 ? "right" : "left") : null
  );

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

        <div className="relative pl-[34px]">
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-gold to-line" />
          {aircraft.timeline.map((t, i) => (
            <Reveal key={i}>
              <div className={`relative last:pb-0 pl-1.5 ${t.media ? "pb-12" : "pb-[72px]"}`}>
                <span className="absolute left-[-34px] top-1 w-4 h-4 rounded-full bg-bg border-[3px] border-gold" />
                {t.media ? (
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={side[i] === "left" ? "lg:order-2" : ""}>
                      <EntryContent t={t} />
                    </div>
                    <div className={side[i] === "left" ? "lg:order-1" : ""}>
                      <TimelineImage media={t.media} />
                    </div>
                  </div>
                ) : (
                  <EntryContent t={t} />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
