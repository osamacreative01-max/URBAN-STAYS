import type { Metadata } from "next";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Shuttle & Chauffeur | URBAN STAYS – Sandton",
  description:
    "Private shuttle and chauffeur services from URBAN STAYS. Airport transfers, corporate travel, and city tours handled with elegance.",
};

const services = [
  {
    title: "Airport Transfers",
    description:
      "Seamless pickups and drop-offs at OR Tambo International and Lanseria airports. Flight tracking included — we wait for you, not the other way around.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1" className="w-10 h-10" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Corporate Transfers",
    description:
      "Professional chauffeur-driven vehicles for business meetings, client entertainment, and corporate events across Sandton and greater Johannesburg.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1" className="w-10 h-10" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "City & Leisure Tours",
    description:
      "Explore Sandton City, the Apartheid Museum, Soweto, and beyond in private comfort. Customised itineraries available on request.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1" className="w-10 h-10" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Event Transfers",
    description:
      "Arrive and depart in style — weddings, galas, conferences, and private events. Our fleet is available for multi-vehicle event coordination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1" className="w-10 h-10" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const fleet = [
  { name: "Executive Sedan", desc: "Mercedes-Benz E-Class or equivalent · 1–3 passengers", image: "/images/UrbanStays_Shuttles - Car3.png" },
  { name: "Premium SUV", desc: "BMW X5 or equivalent · 1–5 passengers · extra luggage", image: "/images/WhatsApp Image 2026-08-03 at 5.08.33 PM.jpeg" },
  { name: "Luxury Van", desc: "Mercedes-Benz V-Class or equivalent · Up to 7 passengers", image: "/images/gallery/Sandton Towers.jpg" },
];

export default function ShuttleChauffeurPage() {
  const waMessage = encodeURIComponent(
    "Hi URBAN STAYS, I would like to request a shuttle/chauffeur service. Could you please assist me with availability and pricing?"
  );

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')",
            opacity: 0.3,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(197,164,109,0.10) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className="font-lato text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C5A46D" }}
          >
            Private Transport
          </p>
          <h1
            className="font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Private Shuttle &amp;{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Chauffeur Services Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Your personal driver. Wherever you need to be, whenever you need to be
            there — in comfort, safety, and style.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              What We Offer
            </p>
            <h2
              className="font-montserrat text-3xl font-light mb-4"
              style={{ color: "#17233A" }}
            >
              Our{" "}
              <span className="font-semibold">Transport Services</span>
            </h2>
            <div className="divider-gold-center" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-300"
                style={{
                  border: "1px solid rgba(197,164,109,0.25)",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div className="mb-5">{service.icon}</div>
                <h3
                  className="font-montserrat text-lg font-semibold tracking-wide mb-3"
                  style={{ color: "#17233A" }}
                >
                  {service.title}
                </h3>
                <div
                  style={{ width: 32, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)", marginBottom: "1rem" }}
                />
                <p
                  className="font-lato text-sm leading-relaxed"
                  style={{ color: "#2B2D31" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ─────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Our Vehicles
            </p>
            <h2
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              The{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                Fleet
              </span>
            </h2>
            <div className="divider-gold-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {fleet.map((v, i) => (
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
                  className="absolute top-0 right-0 w-14 h-14 opacity-30 z-10"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                    borderRadius: "0 0.75rem 0 0",
                  }}
                />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
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
                <div className="p-8 text-center flex flex-col items-center flex-1">
                  {/* Icon */}
                  <div
                    className="mb-5 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 -mt-10 relative z-10"
                    style={{
                      width: 64,
                      height: 64,
                      background: "linear-gradient(135deg, rgba(197,164,109,0.2) 0%, rgba(197,164,109,0.1) 100%)",
                      border: "2px solid rgba(197,164,109,0.4)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C5A46D"
                      strokeWidth="1.2"
                      className="w-7 h-7"
                      aria-hidden="true"
                    >
                      <rect x="1" y="3" width="15" height="13" rx="2" />
                      <path d="M16 8h4l3 3v4h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>

                  {/* Vehicle name */}
                  <h3
                    className="font-montserrat text-base font-semibold tracking-wide mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    {v.name}
                  </h3>

                  {/* Divider */}
                  <div
                    className="mx-auto mb-4"
                    style={{
                      width: 40,
                      height: 2,
                      background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="font-lato text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {v.desc}
                  </p>
                </div>

                {/* Bottom gold line */}
                <div
                  className="mx-auto mb-6"
                  style={{
                    width: 40,
                    height: 2,
                    background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-montserrat text-3xl font-light mb-5"
              style={{ color: "#17233A" }}
            >
              The URBAN Standard of{" "}
              <span className="font-semibold">Transport</span>
            </h2>
            <div className="divider-gold" />
            <ul
              className="mt-6"
              style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                "Professional, vetted chauffeurs with extensive Sandton knowledge",
                "Real-time flight monitoring for stress-free airport pickups",
                "Complimentary bottled water and phone chargers in every vehicle",
                "24/7 availability — early morning or late-night arrivals, no problem",
                "Fixed, transparent pricing with no hidden fees",
                "Exclusive rates for URBAN STAYS apartment guests",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-lato text-sm"
                  style={{ color: "#2B2D31" }}
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div
            className="overflow-hidden rounded-none relative group"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="/images/UrbanStays_Shuttles - Car3.png"
              alt="URBAN STAYS luxury chauffeur vehicle"
              className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ── REQUEST CTA ───────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 50%, #C5A46D 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-montserrat text-3xl font-light mb-4"
            style={{ color: "#17233A" }}
          >
            Ready to{" "}
            <span className="font-semibold">Book a Transfer?</span>
          </h2>
          <p
            className="font-lato text-sm mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(21,21,21,0.75)" }}
          >
            Message us directly on WhatsApp with your date, time, and destination —
            and we will handle the rest.
          </p>
          <a
            href={`https://wa.me/923401313713?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3 px-10 py-4"
            style={{ background: "linear-gradient(135deg, #17233A 0%, #1a2844 50%, #17233A 100%)", color: "#FFFFFF" }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
