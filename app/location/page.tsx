import type { Metadata } from "next";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Location | URBAN STAYS – Sandton, Johannesburg",
  description:
    "URBAN STAYS is located at the Masingita Hotel in Sandton, Johannesburg — the business and lifestyle hub of South Africa.",
};

const nearby = [
  { name: "Sandton City Mall",          distance: "5 min walk" },
  { name: "Nelson Mandela Square",      distance: "5 min walk" },
  { name: "Sandton Gautrain Station",   distance: "8 min walk" },
  { name: "OR Tambo International",     distance: "35 min drive" },
  { name: "Lanseria Airport",           distance: "40 min drive" },
  { name: "Rosebank",                   distance: "12 min drive" },
  { name: "Melrose Arch",               distance: "10 min drive" },
  { name: "Hyde Park Corner",           distance: "15 min drive" },
];

export default function LocationPage() {
  return (
    <>
      <ScrollObserver />
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Sandton 📍.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.70)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className="font-lato text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C5A46D" }}
          >
            Find Us
          </p>
          <h1
            className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-light mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            <span style={{ color: "#FFFFFF" }}>URBAN STAYS</span>
            <br className="hidden sm:inline" />
            <span className="inline sm:hidden"> </span>
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Location in Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            At the heart of Sandton — Africa's richest square mile — perfectly
            positioned for business and leisure.
          </p>
        </div>
      </section>

      {/* ── ADDRESS & MAP ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Address info */}
          <div>
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Address
            </p>
            <h2
              className="font-montserrat text-2xl font-light mb-5"
              style={{ color: "#17233A" }}
            >
              Masingita Hotel,
              <br />
              <span className="font-semibold">Sandton, Johannesburg</span>
            </h2>
            <div className="divider-gold" />
            <address
              className="font-lato text-sm leading-relaxed mt-6 mb-8"
              style={{
                fontStyle: "normal",
                color: "#2B2D31",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <span>Masingita Hotel</span>
              <span>Sandton, Johannesburg</span>
              <span>Gauteng, South Africa</span>
            </address>

            <h3
              className="font-montserrat font-semibold tracking-widest uppercase mb-4"
              style={{ fontSize: "0.7rem", color: "#17233A" }}
            >
              Getting Here
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {[
                {
                  method: "By Gautrain",
                  detail:
                    "Alight at Sandton Station — 8 min walk or request our complimentary shuttle.",
                },
                {
                  method: "By Car",
                  detail:
                    "Take the Rivonia Road or William Nicol off-ramp. Secure undercover parking available.",
                },
                {
                  method: "By Airport",
                  detail:
                    "Use our chauffeur service from OR Tambo or Lanseria — pre-book via WhatsApp.",
                },
              ].map((g, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                >
                  <span
                    style={{
                      marginTop: "0.375rem",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#C5A46D",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      className="font-montserrat font-semibold tracking-wide uppercase"
                      style={{ fontSize: "0.7rem", color: "#17233A", marginRight: "0.4rem" }}
                    >
                      {g.method}:
                    </span>
                    <span className="font-lato text-sm" style={{ color: "#2B2D31" }}>
                      {g.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/shuttle-chauffeur"
              className="font-montserrat text-xs tracking-widest uppercase transition-all duration-300 inline-block px-6 py-3"
              style={{ border: "1px solid #C5A46D", color: "#C5A46D" }}
            >
              Book a Transfer
            </Link>
          </div>

          {/* Map embed */}
          <div
            className="overflow-hidden"
            style={{ height: 450, backgroundColor: "rgba(21,21,21,0.08)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.652!2d28.0567!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSandton%2C+Johannesburg!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="URBAN STAYS location map"
            />
          </div>
        </div>
      </section>

      {/* ── NEARBY ────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Explore the Neighbourhood
            </p>
            <h2
              className="font-montserrat text-3xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Everything at Your{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                Doorstep
              </span>
            </h2>
            <div className="divider-gold-center" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearby.map((place, i) => (
              <div
                key={i}
                className="p-5 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <p
                  className="font-montserrat text-sm font-semibold tracking-wide mb-1"
                  style={{ color: "#FFFFFF" }}
                >
                  {place.name}
                </p>
                <p className="font-lato text-xs" style={{ color: "#C5A46D" }}>
                  {place.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SANDTON INTRO ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            About Sandton
          </p>
          <h2
            className="font-montserrat text-3xl font-light mb-4"
            style={{ color: "#17233A" }}
          >
            Africa's{" "}
            <span className="font-semibold">Financial Capital</span>
          </h2>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-base leading-relaxed mb-4"
            style={{ color: "#2B2D31" }}
          >
            Sandton is South Africa's most dynamic urban hub — home to the JSE,
            multinational headquarters, world-class shopping at Sandton City, and a
            vibrant culinary and nightlife scene. It is where business and luxury
            converge.
          </p>
          <p
            className="font-lato text-base leading-relaxed"
            style={{ color: "#2B2D31" }}
          >
            Staying at URBAN STAYS places you at the epicentre of this energy, with
            the Gautrain connecting you to OR Tambo and the rest of the city in
            minutes.
          </p>
        </div>
      </section>
    </>
  );
}
