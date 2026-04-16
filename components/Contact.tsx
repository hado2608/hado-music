"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

// Sign up at formspree.io and replace this with your form ID
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-form border border-warm rounded-[4px] px-4 py-3 text-[18px] font-sans text-warm placeholder-warm/60 outline-none focus:border-dark transition-colors";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: 800 }}
    >
      {/* Section heading */}
      <div
        className="absolute flex items-center"
        style={{ left: 78, top: 107, width: 421, height: 159 }}
      >
        <Image
          src="/images/star.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none select-none shrink-0"
        />
        <h2
          className="font-serif not-italic text-dark leading-none whitespace-nowrap"
          style={{ fontSize: 114, marginLeft: -14 }}
        >
          Contact
        </h2>
      </div>

      {/* Email + form — right column */}
      <motion.div
        className="absolute"
        style={{ left: 573, top: 107, width: 610 }}
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-sans text-dark"
          style={{ fontSize: 32, lineHeight: 1.3, marginTop: 60 }}
        >
          For any inquiries, please email{" "}
          <a
            href="mailto:hado.sings@gmail.com"
            className="font-bold underline underline-offset-4 hover:text-warm transition-colors"
          >
            hado.sings@gmail.com
          </a>
        </motion.p>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-sans text-dark mt-6"
          style={{ fontSize: 32, lineHeight: 1.3 }}
        >
          or fill out this form:
        </motion.p>

        <motion.form
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-8"
        >
          <input
            className={inputClass}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={inputClass}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className={inputClass}
            name="message"
            placeholder="Message"
            rows={6}
            required
            style={{ height: 167, resize: "none" }}
          />

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="self-start font-sans font-semibold text-dark border border-dark px-8 py-3 rounded-[4px] hover:bg-dark hover:text-sand transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Sent ✓"
              : status === "error"
              ? "Try again"
              : "Send"}
          </button>

          {status === "error" && (
            <p className="text-sm text-warm">
              Something went wrong. Try emailing directly.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
