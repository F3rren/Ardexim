"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Aircraft, Photo } from "@/lib/data/aircraft/types";
import { asset } from "@/lib/basePath";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

function GalleryItem({ photo, even }: { photo: Photo; even: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-7%", "7%"]
  );

  return (
    <figure ref={ref} className="grid lg:grid-cols-[1.25fr_1fr] gap-11 items-center m-0">
      <div
        className={`relative border border-line rounded-[14px] overflow-hidden aspect-[16/10] bg-panel2 shadow-[0_30px_70px_rgba(0,0,0,0.5)] ${
          even ? "lg:order-2" : ""
        }`}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-[1.16]">
          <Image
            src={asset(photo.src)}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>
        <figcaption className="absolute left-3.5 bottom-3 font-mono text-[11px] tracking-[0.08em] text-white bg-black/55 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
          {photo.caption}
        </figcaption>
      </div>

      <div>
        <div className="font-display font-bold text-goldbr leading-none text-[clamp(2.4rem,5vw,3.6rem)]">
          {photo.year}
        </div>
        <h3 className="font-display font-semibold uppercase text-[1.6rem] mt-1.5 mb-3">{photo.title}</h3>
        <p className="text-muted mb-4 leading-relaxed">{photo.text}</p>
        <div className="flex flex-wrap gap-2.5">
          {photo.badges.map((b, i) => (
            <Badge key={i} {...b} />
          ))}
        </div>
      </div>
    </figure>
  );
}

export default function Gallery({ aircraft }: { aircraft: Aircraft }) {
  if (aircraft.gallery.length === 0) return null;
  return (
    <section id="gallery" className="relative py-[90px]">
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <SectionHeader eyebrow="Galleria storica · scorri" title="Evoluzione" text={aircraft.galleryText} />
        <div className="flex flex-col gap-24">
          {aircraft.gallery.map((p, i) => (
            <GalleryItem key={i} photo={p} even={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
