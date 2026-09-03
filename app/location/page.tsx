import type { Metadata } from "next";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Location | URBAN STAYS – Sandton, Johannesburg",
  description:
    "URBAN STAYS is located at the Masingita Hotel in Sandton, Johannesburg — the business and lifestyle hub of South Africa.",
};

const nearby = [
  { name: "Sandton City Mall",          distance: "5 min walk",     image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.06 PM.jpeg" },
  { name: "Nelson Mandela Square",      distance: "5 min walk",     image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM123.jpeg" },
  { name: "Sandton Gautrain Station",   distance: "8 min walk",     image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM321.jpeg" },
  { name: "OR Tambo International",     distance: "35 min drive",   image: "/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg" },
  { name: "Lanseria Airport",           distance: "40 min drive",   image: "/images/WhatsApp Image 2026-08-03 at 5.08.06 PM.jpeg" },
  { name: "Rosebank",                   distance: "12 min drive",   image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM456.jpeg" },
  { name: "Melrose Arch",               distance: "10 min drive",   image: "/images/WhatsApp Image 2026-08-03 at 5.08.33 PM.jpeg" },
  { name: "Hyde Park Corner",           distance: "15 min drive",   image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM.jpeg" },
];

export default function LocationPage() {
  return (
    <>
      <ScrollObserver />
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg')",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.70)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "#C5A46D" }}
          >
            Find Us
          </p>
          <h1
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-5 leading-tight"
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
            className="font-lato text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            At the heart of Sandton — Africa's richest square mile — perfectly
            positioned for business and leisure.
          </p>
        </div>
      </section>

      {/* ── ADDRESS & MAP ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Address info */}
          <div className="flex flex-col justify-center">
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
            className="overflow-hidden w-full"
            style={{ height: "min(450px, 60vw)", backgroundColor: "rgba(21,21,21,0.08)" }}
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
          <div className="text-center mb-8 sm:mb-14">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Explore the Neighbourhood
            </p>
            <h2
              className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Everything at Your{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                Doorstep
              </span>
            </h2>
            <div className="divider-gold-center" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {nearby.map((place, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden transition-all duration-500 card-hover flex flex-col"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                  border: "1px solid rgba(197,164,109,0.2)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 right-0 w-10 h-10 opacity-30 z-10"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                    borderRadius: "0 0.5rem 0 0",
                  }}
                />

                {/* Image */}
                <div className="relative h-28 sm:h-32 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, rgba(23,35,58,0.2) 0%, rgba(23,35,58,0.85) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-center flex flex-col items-center flex-1">
                  {/* Location pin icon */}
                  <div
                    className="mb-3 flex items-center justify-center rounded-full -mt-5 sm:-mt-6 relative z-10"
                    style={{
                      width: "clamp(32px, 7vw, 40px)",
                      height: "clamp(32px, 7vw, 40px)",
                      background: "linear-gradient(135deg, rgba(197,164,109,0.2) 0%, rgba(197,164,109,0.1) 100%)",
                      border: "2px solid rgba(197,164,109,0.4)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  {/* Place name */}
                  <p
                    className="font-montserrat text-xs font-semibold tracking-wide mb-1"
                    style={{ color: "#FFFFFF" }}
                  >
                    {place.name}
                  </p>

                  {/* Distance */}
                  <p className="font-lato text-xs" style={{ color: "#C5A46D" }}>
                    {place.distance}
                  </p>
                </div>

                {/* Bottom gold line */}
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: 32,
                    height: 2,
                    background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SANDTON INTRO ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            About Sandton
          </p>
          <h2
            className="font-montserrat text-2xl sm:text-3xl font-light mb-4"
            style={{ color: "#17233A" }}
          >
            Africa's{" "}
            <span className="font-semibold">Financial Capital</span>
          </h2>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: "#2B2D31" }}
          >
            Sandton is South Africa's most dynamic urban hub — home to the JSE,
            multinational headquarters, world-class shopping at Sandton City, and a
            vibrant culinary and nightlife scene. It is where business and luxury
            converge.
          </p>
          <p
            className="font-lato text-sm sm:text-base leading-relaxed"
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
