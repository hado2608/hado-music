export default function Page() {
  return (
    <div style={{ backgroundColor: "#ddbf93", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* ─── HERO ─── */}
      <section id="hero" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        {/* Full-bleed photo — cover, no stretch */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hado-music/images/hero-photo.jpg"
          alt="Ha Do"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)" }} />

        {/* Riso texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/hado-music/images/riso-texture.png')",
          backgroundSize: "337px 449px",
          mixBlendMode: "soft-light",
          opacity: 0.8,
          pointerEvents: "none",
        }} />

        {/* Nav + subtitle — top right, rotated */}
        <div style={{ position: "absolute", right: "6%", top: "38%", transform: "rotate(-8.93deg)", transformOrigin: "right center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4.8vw, 74px)", color: "#ffedd1", margin: 0, lineHeight: 1, whiteSpace: "nowrap" }}>
              NYC-based jazz singer
            </p>
            <div style={{ display: "flex", gap: "clamp(8px, 1.2vw, 18px)", alignItems: "center", fontFamily: "'Instrument Serif', serif", fontSize: "clamp(18px, 3.3vw, 50px)" }}>
              <a href="#about" style={{ color: "#d5c4a8", textDecoration: "none" }}>about</a>
              <span style={{ color: "rgba(213,196,168,0.35)" }}>x</span>
              <a href="#media" style={{ color: "#d5c4a8", textDecoration: "none" }}>media</a>
              <span style={{ color: "rgba(213,196,168,0.35)" }}>x</span>
              <a href="#contact" style={{ color: "#d5c4a8", textDecoration: "none" }}>contact</a>
            </div>
          </div>
        </div>

        {/* "Ha Do" — lower left, rotated */}
        <div style={{ position: "absolute", left: "2%", bottom: "8%", transform: "rotate(-16.79deg)", transformOrigin: "left bottom" }}>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(80px, 13vw, 204px)", color: "#ff98a7", margin: 0, lineHeight: 1, whiteSpace: "nowrap" }}>
            Ha Do
          </p>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ position: "relative", width: 1440, height: 900, overflow: "hidden", flexShrink: 0, backgroundColor: "#ddbf93" }}>
        {/* Arrow decoration */}
        <div style={{ position: "absolute", left: -6, top: 53, width: 276, height: 276, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(45deg)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/arrow.svg" alt="" aria-hidden style={{ width: 195, height: 195 }} />
          </div>
        </div>

        {/* Vertical line decoration */}
        <div style={{ position: "absolute", left: 1171, top: 123, width: 37, height: 664 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/deco-line.svg" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>

        {/* Star */}
        <div style={{ position: "absolute", left: 330, top: 237, width: 100, height: 100 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star.svg" alt="" aria-hidden style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Centered bio content */}
        <div style={{ position: "absolute", left: "50%", top: "calc(50% + 33px)", transform: "translate(-50%, -50%)", width: 607, color: "#262321" }}>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, lineHeight: 1, margin: 0, marginBottom: 12 }}>
            About
          </p>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.3 }}>
            <p style={{ margin: 0 }}>
              Ha Do is a jazz vocalist based in New York City whose relationship with music spans nearly two decades — beginning with traditional Vietnamese singing at age six, moving through classical training, and arriving at jazz with a voice shaped by all of it. She studied under mezzo-soprano Laura Nichols and choral conductor Michael McGaghie at Macalester College, and has since deepened her jazz practice under acclaimed vocalist Anais Reno, collaborating with established musicians across the NYC scene.
            </p>
            <p style={{ margin: "16px 0 0" }}>
              What sets Ha apart is the warmth she brings to the bandstand — an intimate, unhurried presence that makes traditional jazz feel both timeless and personal. Her sound carries the elegance of the standards she loves alongside a sweetness that is entirely her own, and{" "}
              <strong style={{ fontWeight: 700 }}>she is currently working toward her debut album.</strong>
            </p>
            <p style={{ margin: "16px 0 0", fontStyle: "italic", fontWeight: 400 }}>(i&rsquo;m also a UX designer)</p>
          </div>
        </div>
      </section>

      {/* ─── MEDIA ─── */}
      <section id="media" style={{ position: "relative", width: 1440, height: 1311, overflow: "hidden", flexShrink: 0, backgroundColor: "#272121" }}>
        {/* Heading */}
        <div style={{ position: "absolute", left: 77, top: 196, display: "flex", alignItems: "center", gap: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star-pink.svg" alt="" aria-hidden style={{ width: 100, height: 100, flexShrink: 0 }} />
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, color: "#ff98a7", lineHeight: 1, margin: 0, whiteSpace: "nowrap" }}>
            Media
          </p>
        </div>

        {/* Photo grid */}
        {([
          { left: 102, top: 468, w: 452, h: 469 },
          { left: 573, top: 241, w: 298, h: 469 },
          { left: 890, top: 308, w: 452, h: 469 },
          { left: 99,  top: 976, w: 452, h: 242 },
          { left: 573, top: 751, w: 298, h: 469 },
          { left: 888, top: 821, w: 452, h: 399 },
        ] as const).map((box, i) => (
          <div key={i} style={{ position: "absolute", left: box.left, top: box.top, width: box.w, height: box.h, border: "1px solid #ff98a7" }} />
        ))}
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ position: "relative", width: 1440, height: 800, overflow: "hidden", flexShrink: 0, backgroundColor: "#4aad9b" }}>
        {/* Heading */}
        <div style={{ position: "absolute", left: 78, top: 107, display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star.svg" alt="" aria-hidden style={{ width: 100, height: 100, flexShrink: 0 }} />
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 114, color: "#262321", lineHeight: 1, margin: 0, whiteSpace: "nowrap" }}>
            Contact
          </p>
        </div>

        {/* Email + form */}
        <div style={{ position: "absolute", left: 573, top: 168, width: 610 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 32, color: "#262321", lineHeight: 1.3, margin: 0 }}>
            For any inquiries, please email{" "}
            <a href="mailto:hado.sings@gmail.com" style={{ fontWeight: 700, color: "#262321" }}>hado.sings@gmail.com</a>
          </p>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 32, color: "#262321", lineHeight: 1.3, margin: "16px 0 0" }}>
            or fill out this form:
          </p>

          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
            {(["Name", "Email", "Message"] as const).map((label) => (
              <div key={label} style={{ backgroundColor: "#ebcea4", border: "1px solid #655f5b", borderRadius: 4, padding: "12px 16px", height: label === "Message" ? 167 : "auto" }}>
                {label === "Message" ? (
                  <textarea name="message" placeholder="Message" required style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "#655f5b", background: "transparent", border: "none", outline: "none", width: "100%", height: "100%", resize: "none" }} />
                ) : (
                  <input type={label === "Email" ? "email" : "text"} name={label.toLowerCase()} placeholder={label} required style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "#655f5b", background: "transparent", border: "none", outline: "none", width: "100%" }} />
                )}
              </div>
            ))}
            <button type="submit" style={{ alignSelf: "flex-start", fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "#262321", background: "transparent", border: "1px solid #262321", borderRadius: 4, padding: "10px 28px", cursor: "pointer" }}>
              Send
            </button>
          </form>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ width: "100%", display: "flex", justifyContent: "center", padding: "32px 0", backgroundColor: "#ddbf93" }}>
        <div style={{ textAlign: "center", fontFamily: "'Instrument Sans', sans-serif", fontSize: 16 }}>
          <p style={{ fontWeight: 700, color: "#655f5b", margin: 0 }}>@2026 Ha Do</p>
          <p style={{ fontStyle: "italic", color: "#97856a", margin: "4px 0 0" }}>handcoded with Trader Joe&rsquo;s hot honey popcorn</p>
        </div>
      </footer>

    </div>
  );
}
