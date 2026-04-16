"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Star icon — decorative, upper left */}
      <div className="absolute" style={{ left: 330, top: 237 }}>
        <Image
          src="/images/star.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none select-none"
        />
      </div>

      {/* Content — centered column */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute left-1/2 text-dark w-[607px]"
        style={{ top: "calc(50% + 33px)", transform: "translate(-50%, -50%)" }}
      >
        <h2
          className="font-serif leading-none not-italic text-dark w-full"
          style={{ fontSize: 114 }}
        >
          About
        </h2>

        <div
          className="font-sans mt-2 text-dark"
          style={{ fontSize: 18, lineHeight: 1.3 }}
        >
          <p>
            Ha Do is a jazz vocalist based in New York City whose relationship
            with music spans nearly two decades — beginning with traditional
            Vietnamese singing at age six, moving through classical training,
            and arriving at jazz with a voice shaped by all of it. She studied
            under mezzo-soprano Laura Nichols and choral conductor Michael
            McGaghie at Macalester College, and has since deepened her jazz
            practice under acclaimed vocalist Anais Reno, collaborating with
            established musicians across the NYC scene.
          </p>
          <p className="mt-4">
            What sets Ha apart is the warmth she brings to the bandstand — an
            intimate, unhurried presence that makes traditional jazz feel both
            timeless and personal. Her sound carries the elegance of the
            standards she loves alongside a sweetness that is entirely her
            own, and{" "}
            <strong className="font-bold">
              she is currently working toward her debut album.
            </strong>
          </p>
          <p className="mt-4 italic text-warm">(i&rsquo;m also a UX designer)</p>
        </div>
      </motion.div>
    </section>
  );
}
