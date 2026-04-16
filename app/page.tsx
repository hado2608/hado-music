"use client";

import { useState } from "react";
import MediaCard from "../components/MediaCard";

// ─── MEDIA ITEMS ────────────────────────────────────────────
// Add your videos here. For TikTok, paste the full URL or just the video ID.
// For self-hosted video, drop the file in /public/videos/ and use the path.
// Provide a thumbnail image in /public/images/ for each card.
//
// type: "tiktok" | "video"
// src:  TikTok URL  OR  "/hado-music/videos/my-video.mp4"
// thumbnail: "/hado-music/images/thumb-1.jpg"  (optional but recommended)
const MEDIA_ITEMS: {
  type: "tiktok" | "video";
  src: string;
  thumbnail?: string;
  alt?: string;
  left: number; top: number; w: number; h: number;
}[] = [
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7612694937074666765", left: 104, top: 135, w: 426, h: 301 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7595379215466253582", left: 102, top: 468, w: 452, h: 469 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7624907941530864910", left: 573, top: 241, w: 298, h: 469 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7604302076591541518", left: 890, top: 308, w: 452, h: 469 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7617330022491213070", left: 99,  top: 976, w: 452, h: 242 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7615036019380964622", left: 573, top: 751, w: 298, h: 469 },
  { type: "tiktok", src: "https://www.tiktok.com/@hatchalatte_/video/7596739905091423502", left: 888, top: 821, w: 452, h: 399 },
];

export default function Page() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText("hado.sings@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div style={{ backgroundColor: "#342222", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* ─── HERO ─── */}
      <section id="hero" style={{ position: "relative", width: 1440, height: 900, overflow: "hidden", flexShrink: 0 }}>
        {/* Photo — original Figma positioning */}
        <div style={{ position: "absolute", left: -3, top: -493, width: 1444, height: 1926 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/hero-photo.jpg" alt="Ha Do" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        </div>

        {/* image3 — rotated overlay */}
        <div style={{ position: "absolute", left: -231, top: -401, width: 1935, height: 1346, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(90deg)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/image3.jpg" alt="" aria-hidden style={{ width: 1346, height: 1935, objectFit: "cover", opacity: 0.2, pointerEvents: "none", display: "block" }} />
          </div>
        </div>

        {/* Riso texture — animated slow drift */}
        <div className="riso-animated" style={{
          position: "absolute", width: 1920, height: 1080, left: -188, top: -150,
          backgroundImage: "url('/hado-music/images/riso-texture.png')",
          backgroundSize: "337px 449px",
          backgroundPosition: "top left",
          mixBlendMode: "soft-light",
          opacity: 0.8,
          pointerEvents: "none",
        }} />

        {/* "Ha Do" — rotated, lower left */}
        <div style={{ position: "absolute", left: 28, top: 547, width: 491, height: 379, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-16.79deg)", flexShrink: 0 }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 204, color: "#ff98a7", margin: 0, lineHeight: "normal", whiteSpace: "nowrap" }}>
              Ha Do
            </p>
          </div>
        </div>

        {/* Nav + subtitle — rotated block, top right */}
        <div style={{ position: "absolute", left: 812, top: 355, width: 581, height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-8.93deg)", flexShrink: 0, position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 74, color: "#ffedd1", margin: 0, lineHeight: "normal", whiteSpace: "nowrap" }}>
                NYC-based jazz singer
              </p>
              <div style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 50, fontFamily: "'Instrument Serif', serif" }}>
                <a href="#about" className="nav-link" style={{ color: "#d5c4a8" }}>about</a>
                <span style={{ color: "rgba(213,196,168,0.3)" }}>x</span>
                <a href="#media" className="nav-link" style={{ color: "#d5c4a8" }}>media</a>
                <span style={{ color: "rgba(213,196,168,0.3)" }}>x</span>
                <a href="#contact" className="nav-link" style={{ color: "#d5c4a8" }}>contact</a>
              </div>
            </div>
            {/* Small curvy arrow in nav block */}
            <div style={{ position: "absolute", left: -44, top: 75, width: 214, height: 216, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ transform: "rotate(-51.07deg)", flexShrink: 0 }}>
                <div style={{ width: 162, height: 144, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", inset: "16.99% 23.1% 20.44% 19.93%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/hado-music/images/arrow-nav.svg" alt="" aria-hidden style={{ width: "100%", height: "100%", display: "block" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small decoration above head — node 18:932 */}
        <div style={{ position: "absolute", left: 650, top: 291, width: 54, height: 42 }}>
          <div style={{ position: "absolute", inset: "-2.4% -1.84%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/deco-small.svg" alt="" aria-hidden style={{ width: "100%", height: "100%", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ position: "relative", width: "100%", height: 900, overflow: "hidden", flexShrink: 0, backgroundColor: "#ffedd1" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 1440, height: 900, overflow: "hidden" }}>

          {/* Arrow decoration top-left */}
          <div style={{ position: "absolute", left: -113, top: 50, width: 276, height: 276, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "rotate(45deg)", flexShrink: 0 }}>
              <div style={{ width: 196, height: 195, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", inset: "16.99% 23.1% 20.44% 19.93%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hado-music/images/arrow.svg" alt="" aria-hidden style={{ width: "100%", height: "100%", display: "block" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Arrow decoration bottom-right */}
          <div style={{ position: "absolute", left: 1074, top: 661, width: 274, height: 275, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "rotate(-51.84deg)", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hado-music/images/arrow2.svg" alt="" aria-hidden style={{ width: 196, height: 195, display: "block" }} />
            </div>
          </div>

          {/* Vertical line decoration */}
          <div style={{ position: "absolute", left: 1353, top: 109, width: 37, height: 664 }}>
            <div style={{ position: "absolute", inset: "-0.38% -6.84%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hado-music/images/deco-line.svg" alt="" aria-hidden style={{ width: "100%", height: "100%", display: "block" }} />
            </div>
          </div>

          {/* Two-column content */}
          <div style={{ position: "absolute", top: "50%", left: 80, transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: 73 }}>

            {/* Left: bio */}
            <div style={{ position: "relative", width: 694, height: 539, flexShrink: 0 }}>
              {/* Star */}
              <div style={{ position: "absolute", left: 0, top: 24, width: 100, height: 100 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/hado-music/images/star.svg" alt="" aria-hidden style={{ width: "100%", height: "100%" }} />
              </div>
              {/* Bio text */}
              <div style={{ position: "absolute", top: "50%", left: "calc(50% + 43px)", transform: "translate(-50%, -50%)", width: 607, color: "#262321" }}>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, lineHeight: 1, margin: 0, marginBottom: 12 }}>
                  About
                </p>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.3 }}>
                  <p style={{ margin: 0 }}>
                    Ha Do is a jazz vocalist based in New York City whose relationship with music spans nearly two decades — beginning with traditional Vietnamese singing at age six, moving through classical training, and arriving at jazz with a voice shaped by all of it. She studied under mezzo-soprano Laura Nichols and choral conductor Michael McGaghie at Macalester College, and has since deepened her jazz practice under acclaimed vocalist Anais Reno, collaborating with established musicians across the NYC scene.
                  </p>
                  <p style={{ margin: "16px 0 0" }}>
                    What sets Ha apart is the warmth she brings to the bandstand — an intimate, unhurried presence that makes traditional jazz feel both timeless and personal. Her sound carries the elegance of the standards she loves alongside a sweetness that is entirely her own.
                  </p>
                  <p style={{ margin: "16px 0 0", fontWeight: 700 }}>
                    She is currently working toward her debut album :)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: photo */}
            <div style={{ position: "relative", width: 424, height: 565, borderRadius: 16, flexShrink: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hado-music/images/about-photo.jpg" alt="Ha Do" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
            </div>

          </div>
        </div>
      </section>

      {/* ─── MEDIA ─── */}
      <section id="media" style={{ position: "relative", width: "100%", height: 1311, overflow: "hidden", flexShrink: 0, backgroundColor: "#272121" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 1440, height: 1311, overflow: "hidden" }}>

          {/* Heading — top right */}
          <div style={{ position: "absolute", left: 894, top: 57, width: 344, height: 159, display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/star-pink.svg" alt="" aria-hidden style={{ width: 100, height: 100, flexShrink: 0, position: "absolute", left: 0, top: 0 }} />
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, color: "#ff98a7", lineHeight: 1, margin: 0, whiteSpace: "nowrap", position: "absolute", left: 86, top: 11 }}>
              Media
            </p>
          </div>

          {/* Subtitle */}
          <p style={{ position: "absolute", left: 983, top: 205, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: 18, color: "#b7727c", lineHeight: 1.3, margin: 0, whiteSpace: "nowrap" }}>
            See Ha in her element!
          </p>

          {/* Media grid — slots defined in MEDIA_ITEMS above page */}
          {([
            { left: 104, top: 135, w: 426, h: 301 },
            { left: 102, top: 468, w: 452, h: 469 },
            { left: 573, top: 241, w: 298, h: 469 },
            { left: 890, top: 308, w: 452, h: 469 },
            { left: 99,  top: 976, w: 452, h: 242 },
            { left: 573, top: 751, w: 298, h: 469 },
            { left: 888, top: 821, w: 452, h: 399 },
          ] as const).map((slot, i) => {
            const item = MEDIA_ITEMS.find(
              (m) => m.left === slot.left && m.top === slot.top
            );
            if (item) {
              return (
                <MediaCard
                  key={i}
                  type={item.type}
                  src={item.src}
                  thumbnail={item.thumbnail}
                  alt={item.alt}
                  style={{ left: slot.left, top: slot.top, width: slot.w, height: slot.h }}
                />
              );
            }
            // Empty slot — pink outline placeholder
            return (
              <div
                key={i}
                style={{ position: "absolute", left: slot.left, top: slot.top, width: slot.w, height: slot.h, border: "1px solid #ff98a7" }}
              />
            );
          })}
        </div>
      </section>

      {/* ─── CONTACT + FOOTER ─── */}
      <section id="contact" style={{ position: "relative", width: "100%", flexShrink: 0, backgroundColor: "#4aad9b" }}>
        <div style={{ margin: "0 auto", maxWidth: 1440, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 86, paddingBottom: 80 }}>

          {/* Heading: star + "Contact" */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/star.svg" alt="" aria-hidden style={{ width: 100, height: 100, flexShrink: 0 }} />
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, color: "#262321", lineHeight: 1, margin: 0, whiteSpace: "nowrap", marginLeft: -14 }}>
              Contact
            </p>
          </div>

          {/* Email — two lines, copy CTA on second line */}
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 24, color: "#262321", lineHeight: 1.3, margin: "0 0 8px" }}>
              For any inquiries, please email
            </p>
            <div className="email-row" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <a href="mailto:hado.sings@gmail.com" style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 24, color: "#262321", lineHeight: 1.3 }}>
                hado.sings@gmail.com
              </a>
              <button
                className="email-copy-btn"
                aria-label="Copy email address"
                onClick={copyEmail}
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 500, color: "#262321", whiteSpace: "nowrap" }}
              >
                {copied ? (
                  "Copied!"
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/hado-music/images/copy.svg" alt="Copy" style={{ width: 22, height: 22 }} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* "or fill out this form:" */}
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 24, color: "#262321", lineHeight: 1.3, margin: "0 0 32px" }}>
            or fill out this form:
          </p>

          {/* Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ width: 610, display: "flex", flexDirection: "column", gap: 24, marginBottom: 64 }}
          >
            <div style={{ backgroundColor: "#ebcea4", border: "1px solid #655f5b", borderRadius: 4, padding: "12px 16px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "#655f5b", background: "transparent", border: "none", outline: "none", width: "100%" }}
              />
            </div>
            <div style={{ backgroundColor: "#ebcea4", border: "1px solid #655f5b", borderRadius: 4, padding: "12px 16px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "#655f5b", background: "transparent", border: "none", outline: "none", width: "100%" }}
              />
            </div>
            <div style={{ backgroundColor: "#ebcea4", border: "1px solid #655f5b", borderRadius: 4, padding: "12px 16px", height: 167 }}>
              <textarea
                name="message"
                placeholder="Message"
                required
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "#655f5b", background: "transparent", border: "none", outline: "none", width: "100%", height: "100%", resize: "none" }}
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#63ab9e", border: "1px solid #ebcea4", borderRadius: 0, padding: "10px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}
            >
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: 18, color: "#ebcea4" }}>Send</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hado-music/images/send.svg" alt="" style={{ width: 24, height: 24 }} />
            </button>
          </form>

          {/* Horizontal decorative line */}
          <div style={{ marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/deco-line-h.svg" alt="" aria-hidden style={{ width: 460, height: 29, display: "block" }} />
          </div>

          {/* Footer text */}
          <div style={{ textAlign: "center", fontFamily: "'Instrument Sans', sans-serif", fontSize: 16 }}>
            <p style={{ fontWeight: 700, color: "#262321", margin: 0, lineHeight: 1.5 }}>@2026 Ha Do</p>
            <p style={{ fontStyle: "italic", color: "#b1ebe0", margin: 0, lineHeight: 1.5 }}>handcoded with Trader Joe&rsquo;s hot honey popcorn</p>
          </div>

        </div>
      </section>

    </div>
  );
}
