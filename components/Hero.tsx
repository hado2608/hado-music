"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: photo moves up slower than page scroll
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Name drifts and fades on scroll
  const nameY = useTransform(scrollYProgress, [0, 0.6], ["0%", "12%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-sand"
    >
      {/* Background photo — drop your photo at public/images/hero.jpg */}
      <motion.div className="absolute inset-0" style={{ y: photoY }}>
        <Image
          src="/images/hero.jpg"
          alt="Ha Do performing"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Subtle dark veil */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Riso grain texture — drop at public/images/riso-texture.png */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/images/riso-texture.png')",
          backgroundSize: "337px 449px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* "Ha Do" — lower left, rotated */}
      <motion.div
        className="absolute"
        style={{
          left: "2%",
          top: "55%",
          y: nameY,
          opacity: nameOpacity,
        }}
      >
        <p
          className="font-serif italic text-blush leading-none select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(72px, 14.2vw, 204px)",
            transform: "rotate(-16.79deg)",
            transformOrigin: "left center",
          }}
        >
          Ha Do
        </p>
      </motion.div>

      {/* Subtitle + nav — upper right, rotated */}
      <div
        className="absolute"
        style={{
          left: "56%",
          top: "38%",
          transform: "rotate(-8.93deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex flex-col gap-3">
          <p
            className="font-serif text-hero-text leading-tight whitespace-nowrap"
            style={{ fontSize: "clamp(22px, 5.1vw, 74px)" }}
          >
            NYC-based jazz singer
          </p>
          <div
            className="flex items-center gap-4 text-cream whitespace-nowrap"
            style={{ fontSize: "clamp(16px, 3.5vw, 50px)" }}
          >
            <a
              href="#about"
              className="hover:text-hero-text transition-colors duration-300"
            >
              about
            </a>
            <span className="opacity-30">x</span>
            <a
              href="#media"
              className="hover:text-hero-text transition-colors duration-300"
            >
              media
            </a>
            <span className="opacity-30">x</span>
            <a
              href="#contact"
              className="hover:text-hero-text transition-colors duration-300"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
