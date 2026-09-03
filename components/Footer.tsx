import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #0f1a2e 0%, #17233A 50%, #0f1a2e 100%)" }} className="reveal-left">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <div style={{ marginBottom: "1rem" }}>
              <img
                src="/images/PNG/Asset 6@2x.png"
                alt="URBAN STAYS Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <div
              style={{
                width: 48,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                marginBottom: "1rem",
              }}
            />
            <p
              className="font-lato text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Luxury serviced apartments in the heart of Sandton. Where every detail
              is curated for your comfort.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="reveal-scale">
            <h4
              className="font-montserrat uppercase"
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
                    className="font-lato text-sm group"
                    style={{ color: "rgba(255,255,255,0.80)" }}
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
              className="font-montserrat uppercase"
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
                    className="font-lato text-sm group"
                    style={{ color: "rgba(255,255,255,0.80)" }}
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
              className="font-montserrat uppercase"
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
                className="font-lato text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Masingita Hotel
                <br />
                Sandton, Johannesburg
                <br />
                South Africa
              </p>
              <a
                href="https://wa.me/923401313713"
                className="font-lato text-sm group"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                WhatsApp Us
                <span
                  className="inline-block w-0 h-0.5 bg-C9A45C transition-all duration-300 ml-2"
                  style={{ backgroundColor: "#C5A46D" }}
                />
              </a>
              <a
                href="mailto:info@urbanstays.co.za"
                className="font-lato text-sm group"
                style={{ color: "rgba(255,255,255,0.80)" }}
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
                { label: "Instagram", href: "https://instagram.com/urbanstays", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
                { label: "Facebook", href: "https://facebook.com/urbanstays", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> },
                { label: "TikTok", href: "https://tiktok.com/@urbanstays", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" /></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group transition-all duration-300 hover:scale-110"
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.80)",
                    borderRadius: "0.5rem",
                  }}
                >
                  {s.icon}
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
            className="font-lato text-xs"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            © {new Date().getFullYear()} URBAN STAYS. All rights reserved.
          </p>
          <p
            className="font-lato text-xs"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Developed by{" "}
            <span style={{ color: "#C5A46D" }}>RGB Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
