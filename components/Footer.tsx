import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #0f1a2e 0%, #17233A 50%, #0f1a2e 100%)" }} className="reveal-left">
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <div style={{ marginBottom: "1rem" }}>
              <img
                src="/images/PNG/Asset 8@2x.png"
                alt="URBAN STAYS Logo"
                style={{ height: 120, width: 180, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: 48,
                height: 1,
                backgroundColor: "#C5A46D",
                marginBottom: "1rem",
              }}
            />
            <p
              className="font-lato text-sm leading-relaxed transition-all duration-300"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Luxury serviced apartments in the heart of Sandton. Where every detail
              is curated for your comfort.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="reveal-scale">
            <h4
              className="font-montserrat uppercase transition-all duration-300"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C5A46D",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/",                  label: "Home" },
                { href: "/apartments",        label: "Apartments" },
                { href: "/shuttle-chauffeur", label: "Shuttle & Chauffeur" },
                { href: "/gallery",           label: "Gallery" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="font-lato text-sm transition-all duration-300 group"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                    <span
                      className="inline-block w-0 h-0.5 bg-C9A45C transition-all duration-300 ml-2"
                      style={{ backgroundColor: "#C5A46D" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Information ── */}
          <div className="reveal-scale" style={{ transitionDelay: "0.1s" }}>
            <h4
              className="font-montserrat uppercase transition-all duration-300"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C5A46D",
                marginBottom: "1.25rem",
              }}
            >
              Information
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/location",        label: "Location & Directions" },
                { href: "/contact",         label: "Get In Touch" },
                { href: "/apartments#book", label: "Make Reservation" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="font-lato text-sm transition-all duration-300 group"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                    <span
                      className="inline-block w-0 h-0.5 bg-C9A45C transition-all duration-300 ml-2"
                      style={{ backgroundColor: "#C5A46D" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="reveal-scale" style={{ transitionDelay: "0.2s" }}>
            <h4
              className="font-montserrat uppercase transition-all duration-300"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C5A46D",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p
                className="font-lato text-sm leading-relaxed transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                Masingita Hotel
                <br />
                Sandton, Johannesburg
                <br />
                South Africa
              </p>
              <a
                href="https://wa.me/923401313713"
                className="font-lato text-sm transition-all duration-300 group"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                WhatsApp Us
                <span
                  className="inline-block w-0 h-0.5 bg-C9A45C transition-all duration-300 ml-2"
                  style={{ backgroundColor: "#C5A46D" }}
                />
              </a>
              <a
                href="mailto:info@urbanstays.co.za"
                className="font-lato text-sm transition-all duration-300 group"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                info@urbanstays.co.za
                <span
                  className="inline-block w-0 h-0.5 bg-C9A45C transition-all duration-300 ml-2"
                  style={{ backgroundColor: "#C5A46D" }}
                />
              </a>
            </address>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              {[
                { label: "Instagram", short: "IG", href: "https://instagram.com/urbanstays" },
                { label: "Facebook",  short: "FB", href: "https://facebook.com/urbanstays" },
                { label: "TikTok",    short: "TK", href: "https://tiktok.com/@urbanstays" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="font-montserrat text-xs transition-all duration-300 group"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            className="font-lato text-xs transition-all duration-300"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} URBAN STAYS. All rights reserved.
          </p>
          <p
            className="font-lato text-xs transition-all duration-300"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Developed by{" "}
            <span style={{ color: "#C5A46D" }}>RGB Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
