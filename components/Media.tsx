"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Matches the Figma grid exactly (absolute positions within 1440×1311 frame)
const PHOTOS = [
  { id: 1, left: 102, top: 468, w: 452, h: 469, src: "/images/media-1.jpg", alt: "Performance" },
  { id: 2, left: 573, top: 241, w: 298, h: 469, src: "/images/media-2.jpg", alt: "Studio" },
  { id: 3, left: 890, top: 308, w: 452, h: 469, src: "/images/media-3.jpg", alt: "Festival" },
  { id: 4, left: 99,  top: 976, w: 452, h: 242, src: "/images/media-4.jpg", alt: "Press" },
  { id: 5, left: 573, top: 751, w: 298, h: 469, src: "/images/media-5.jpg", alt: "Live" },
  { id: 6, left: 888, top: 821, w: 452, h: 399, src: "/images/media-6.jpg", alt: "Tour" },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Media() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="media"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: 1311 }}
    >
      {/* Section heading */}
      <div
        className="absolute flex items-center"
        style={{ left: 77, top: 196, width: 344, height: 159 }}
      >
        <Image
          src="/images/star.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none select-none shrink-0"
        />
        <h2
          className="font-serif not-italic text-dark leading-none"
          style={{ fontSize: 114, marginLeft: -14 }}
        >
          Media
        </h2>
      </div>

      {/* Photo grid */}
      {PHOTOS.map((photo, i) => (
        <motion.div
          key={photo.id}
          custom={i}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute overflow-hidden border border-dark group cursor-pointer"
          style={{ left: photo.left, top: photo.top, width: photo.w, height: photo.h }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </motion.div>
      ))}
    </section>
  );
}
