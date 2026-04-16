export default function Page() {
  return (
    <div
      className="flex flex-col items-center"
      style={{ backgroundColor: "#ddbf93" }}
    >
      {/* ─── HERO ─── */}
      <section
        id="hero"
        style={{ width: 1440, height: 900, overflow: "hidden", position: "relative", flexShrink: 0 }}
      >
        {/* Hero photo */}
        <div
          style={{
            position: "absolute",
            width: 1444,
            height: 1926,
            left: -3,
            top: -493,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hado-music/images/hero-photo.jpg"
            alt="Ha Do"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        </div>

        {/* Rotated secondary image overlay */}
        <div
          style={{
            position: "absolute",
            width: 1935,
            height: 1346,
            left: -231,
            top: -401,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ transform: "rotate(90deg)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hado-music/images/image3.jpg"
              alt=""
              aria-hidden="true"
              style={{ width: 1346, height: 1935, objectFit: "cover", opacity: 0.2, display: "block" }}
            />
          </div>
        </div>

        {/* Riso texture */}
        <div
          style={{
            position: "absolute",
            width: 1920,
            height: 1080,
            left: -450,
            top: -59,
            backgroundImage: "url('/hado-music/images/riso-texture.png')",
            backgroundSize: "337px 449px",
            backgroundPosition: "top left",
            mixBlendMode: "soft-light",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />

        {/* Nav + subtitle — rotated block, top right */}
        <div
          style={{
            position: "absolute",
            left: 812,
            top: 355,
            width: 581,
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ transform: "rotate(-8.93deg)", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 74,
                  color: "#ffedd1",
                  lineHeight: "normal",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                NYC-based jazz singer
              </p>
              <div style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 50 }}>
                <a href="#about" style={{ color: "#d5c4a8", textDecoration: "none", fontFamily: "'Instrument Serif', serif" }}>
                  about
                </a>
                <span style={{ color: "rgba(213,196,168,0.3)", fontFamily: "'Instrument Serif', serif" }}>x</span>
                <a href="#media" style={{ color: "#d5c4a8", textDecoration: "none", fontFamily: "'Instrument Serif', serif" }}>
                  media
                </a>
                <span style={{ color: "rgba(213,196,168,0.3)", fontFamily: "'Instrument Serif', serif" }}>x</span>
                <a href="#contact" style={{ color: "#d5c4a8", textDecoration: "none", fontFamily: "'Instrument Serif', serif" }}>
                  contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* "Ha Do" — rotated, lower left */}
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 547,
            width: 491,
            height: 379,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ transform: "rotate(-16.79deg)", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: 204,
                color: "#ff98a7",
                lineHeight: "normal",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              Ha Do
            </p>
          </div>
        </div>

        {/* Small decoration */}
        <div style={{ position: "absolute", left: 650, top: 291, width: 54, height: 42 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/deco-small.png" alt="" aria-hidden style={{ width: "100%", height: "100%" }} />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        style={{
          width: 1440,
          height: 900,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          backgroundColor: "#ddbf93",
        }}
      >
        {/* Arrow decoration top-left */}
        <div
          style={{
            position: "absolute",
            left: -6,
            top: 53,
            width: 276,
            height: 276,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ transform: "rotate(45deg)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hado-music/images/arrow.png" alt="" aria-hidden style={{ width: 195, height: 195 }} />
          </div>
        </div>

        {/* Vertical line decoration, right side */}
        <div style={{ position: "absolute", left: 1171, top: 123, width: 37, height: 664 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/deco-line.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>

        {/* Star icon */}
        <div style={{ position: "absolute", left: 330, top: 237, width: 100, height: 100 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star.png" alt="" aria-hidden style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Centered content */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "calc(50% + 33px)",
            transform: "translate(-50%, -50%)",
            width: 607,
            color: "#262321",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 114,
              lineHeight: "normal",
              margin: 0,
              marginBottom: 8,
            }}
          >
            About
          </p>
          <div
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.3,
              color: "#262321",
            }}
          >
            <p style={{ margin: 0 }}>
              Ha Do is a jazz vocalist based in New York City whose relationship
              with music spans nearly two decades — beginning with traditional
              Vietnamese singing at age six, moving through classical training,
              and arriving at jazz with a voice shaped by all of it. She studied
              under mezzo-soprano Laura Nichols and choral conductor Michael
              McGaghie at Macalester College, and has since deepened her jazz
              practice under acclaimed vocalist Anais Reno, collaborating with
              established musicians across the NYC scene.
            </p>
            <p style={{ margin: 0, marginTop: 16 }}>
              What sets Ha apart is the warmth she brings to the bandstand — an
              intimate, unhurried presence that makes traditional jazz feel both
              timeless and personal. Her sound carries the elegance of the
              standards she loves alongside a sweetness that is entirely her
              own, and{" "}
              <strong style={{ fontWeight: 700 }}>
                she is currently working toward her debut album.
              </strong>
            </p>
            <p style={{ margin: 0, marginTop: 16, fontStyle: "italic", fontWeight: 400 }}>
              (i&rsquo;m also a UX designer)
            </p>
          </div>
        </div>
      </section>

      {/* ─── MEDIA ─── */}
      <section
        id="media"
        style={{
          width: 1440,
          height: 1311,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          backgroundColor: "#272121",
        }}
      >
        {/* Section heading */}
        <div style={{ position: "absolute", left: 77, top: 196, width: 344, height: 159 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star-pink.png" alt="" aria-hidden style={{ position: "absolute", left: 0, top: 0, width: 100, height: 100 }} />
          <p
            style={{
              position: "absolute",
              left: 86,
              top: 11,
              fontFamily: "'Instrument Serif', serif",
              fontSize: 114,
              color: "#ff98a7",
              lineHeight: "normal",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Media
          </p>
        </div>

        {/* Photo grid — borders only until photos are dropped in */}
        {[
          { left: 102, top: 468, w: 452, h: 469 },
          { left: 573, top: 241, w: 298, h: 469 },
          { left: 890, top: 308, w: 452, h: 469 },
          { left: 99,  top: 976, w: 452, h: 242 },
          { left: 573, top: 751, w: 298, h: 469 },
          { left: 888, top: 821, w: 452, h: 399 },
        ].map((box, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: box.left,
              top: box.top,
              width: box.w,
              height: box.h,
              border: "1px solid #ff98a7",
            }}
          />
        ))}
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        style={{
          width: 1440,
          height: 800,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          backgroundColor: "#4aad9b",
        }}
      >
        {/* Section heading */}
        <div style={{ position: "absolute", left: 78, top: 107, width: 421, height: 159 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hado-music/images/star.png" alt="" aria-hidden style={{ position: "absolute", left: 0, top: 0, width: 100, height: 100 }} />
          <p
            style={{
              position: "absolute",
              left: 86,
              top: 11,
              fontFamily: "'Instrument Serif', serif",
              fontSize: 114,
              color: "#262321",
              lineHeight: "normal",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </p>
        </div>

        {/* Email + form — right column */}
        <div style={{ position: "absolute", left: 573, top: 168, width: 447 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 32, color: "#262321", lineHeight: "normal", margin: 0 }}>
            For any inquiries, please email{" "}
            <a
              href="mailto:hado.sings@gmail.com"
              style={{ fontWeight: 700, color: "#262321" }}
            >
              hado.sings@gmail.com
            </a>
          </p>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 32, color: "#262321", lineHeight: "normal", margin: 0, marginTop: 16 }}>
            or fill out this form:
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          style={{
            position: "absolute",
            left: 573,
            top: 377,
            width: 610,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {["Name", "Email"].map((label) => (
            <div
              key={label}
              style={{
                backgroundColor: "#ebcea4",
                border: "1px solid #655f5b",
                borderRadius: 4,
                padding: "12px 16px",
              }}
            >
              <input
                type={label === "Email" ? "email" : "text"}
                name={label.toLowerCase()}
                placeholder={label}
                required
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 18,
                  color: "#655f5b",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
          ))}
          <div
            style={{
              backgroundColor: "#ebcea4",
              border: "1px solid #655f5b",
              borderRadius: 4,
              padding: "12px 16px",
              height: 167,
            }}
          >
            <textarea
              name="message"
              placeholder="Message"
              required
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 18,
                color: "#655f5b",
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
                height: "100%",
                resize: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              alignSelf: "flex-start",
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#262321",
              backgroundColor: "transparent",
              border: "1px solid #262321",
              borderRadius: 4,
              padding: "10px 28px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 0",
          backgroundColor: "#ddbf93",
        }}
      >
        <div style={{ textAlign: "center", fontFamily: "'Instrument Sans', sans-serif", fontSize: 16 }}>
          <p style={{ fontWeight: 700, color: "#655f5b", margin: 0 }}>@2026 Ha Do</p>
          <p style={{ fontStyle: "italic", color: "#97856a", margin: 0, marginTop: 4 }}>
            handcoded with Trader Joe&rsquo;s hot honey popcorn
          </p>
        </div>
      </footer>
    </div>
  );
}
