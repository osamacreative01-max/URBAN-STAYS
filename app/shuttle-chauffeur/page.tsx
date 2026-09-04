import type { Metadata } from "next";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Shuttle & Chauffeur | URBAN STAYS – Sandton",
  description:
    "Private shuttle and chauffeur services from URBAN STAYS. Airport transfers, corporate travel, and city tours handled with elegance.",
};

const vehicleGallery = [
  { src: "/images/shuttle-chauffeur/Executive Travel.png", alt: "Mercedes-Benz E-Class front view", label: "Front View" },
  { src: "/images/shuttle-chauffeur/Side View.png", alt: "Mercedes-Benz E-Class side profile", label: "Side View" },
  { src: "/images/shuttle-chauffeur/Rear View.png", alt: "Mercedes-Benz E-Class rear view", label: "Rear View" },
];

export default function ShuttleChauffeurPage() {
  const waMessage = encodeURIComponent(
    "Hi URBAN STAYS, I would like to request a shuttle/chauffeur service. Could you please assist me with availability and pricing?"
  );

  return (
    <>
      <ScrollObserver />
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/shuttle-chauffeur/Executive Travel.png')",
            opacity: 0.25,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(197,164,109,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "#C5A46D" }}
          >
            Private Transport
          </p>
          <h1
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Private Shuttle &amp;{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Chauffeur Services Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Your personal driver. Wherever you need to be, whenever you need to be
            there — in comfort, safety, and style.
          </p>
        </div>
      </section>

      {/* ── EXECUTIVE TRAVEL ──────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Our Vehicle
            </p>
            <h2
              className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Executive{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                Travel
              </span>
            </h2>
            <div className="divider-gold-center" />
          </div>

          {/* Vehicle Gallery — 3 images with gold borders & captions */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-12 sm:mb-16">
            {vehicleGallery.map((img, i) => (
              <div key={i} className="group">
                <div
                  className="relative overflow-hidden"
                  style={{
                    border: "2px solid rgba(197,164,109,0.45)",
                    aspectRatio: "4/3",
                  }}
                >
                  {/* Gold corner accent */}
                  <div
                    className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 opacity-40 z-10"
                    style={{
                      background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                    }}
                  />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(23,35,58,0.10) 0%, rgba(23,35,58,0.50) 100%)",
                    }}
                  />
                </div>
                {/* Caption bar */}
                <div
                  className="flex items-center justify-center gap-2 py-3"
                  style={{
                    background: "rgba(197,164,109,0.08)",
                    borderTop: "2px solid rgba(197,164,109,0.45)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span
                    className="font-lato text-[10px] sm:text-xs tracking-wider uppercase"
                    style={{ color: "rgba(255,255,255,0.80)" }}
                  >
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 2-Column Content */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left Column — Model Info */}
            <div>
              {/* Model Tag */}
              <p
                className="font-lato text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-3"
                style={{ color: "#C5A46D" }}
              >
                Mercedes-Benz E-Class
              </p>

              {/* Heading */}
              <h3
                className="font-montserrat text-2xl sm:text-3xl font-light mb-5"
                style={{ color: "#FFFFFF" }}
              >
                Executive{" "}
                <span className="font-semibold" style={{ color: "#C5A46D" }}>Sedan</span>
              </h3>

              {/* Description */}
              <p
                className="font-lato text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                Meet our Mercedes-Benz E-Class — the flagship vehicle of the UrbanStays &amp; Shuttles service.
                Designed for guests who value comfort, privacy and professionalism, our executive sedan provides
                premium transportation for airport transfers, hotel transfers, corporate travel, business meetings,
                private appointments and special occasions.
              </p>
              <p
                className="font-lato text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                Whether you&apos;re arriving at Masingita Towers, heading to the airport or travelling across
                Johannesburg, our chauffeur-driven service ensures that your journey is as comfortable and seamless
                as your stay.
              </p>
            </div>

            {/* Right Column — CTA + Trust */}
            <div className="flex flex-col items-center md:items-end md:pt-2">

              {/* Feature Icons Row — single line */}
              <div className="flex justify-center md:justify-end gap-5 sm:gap-7 mb-10 whitespace-nowrap">
                {[
                  {
                    label: "1–3 Passengers",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Premium Executive Travel",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                        <rect x="1" y="3" width="15" height="13" rx="2" />
                        <path d="M16 8h4l3 3v4h-7V8z" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Professional Chauffeur Service",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                        <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z" />
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                        <path d="M7 11h10" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 flex-shrink-0">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        border: "1px solid rgba(197,164,109,0.30)",
                        borderRadius: "0.375rem",
                        background: "rgba(197,164,109,0.06)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-lato text-[11px] sm:text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/923401313713?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn font-montserrat relative inline-flex flex-col items-center gap-2 px-10 sm:px-14 py-4 sm:py-5 transition-all duration-300 w-full sm:w-auto text-center overflow-hidden"
                style={{
                  border: "1.5px solid rgba(197,164,109,0.50)",
                  borderRadius: "0.5rem",
                  background: "rgba(197,164,109,0.08)",
                }}
              >
                {/* Hover fill */}
                <span
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover/btn:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 50%, #C5A46D 100%)",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="btn-text-main text-sm sm:text-base font-semibold tracking-wider uppercase transition-colors duration-500" style={{ color: "#C5A46D" }}>
                    Request via WhatsApp
                  </span>
                </span>
                <span className="relative z-10 font-lato btn-text-sub text-xs sm:text-sm tracking-wide transition-colors duration-500" style={{ color: "rgba(197,164,109,0.60)" }}>
                  Instant response &middot; Available 24/7
                </span>
              </a>

              {/* Divider */}
              <div
                className="my-8 w-full"
                style={{
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(197,164,109,0.30), transparent)",
                }}
              />

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
                {[
                  { label: "Reliable", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12" /></svg> },
                  { label: "Professional", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12" /></svg> },
                  { label: "On Time", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12" /></svg> },
                  { label: "Every Time", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12" /></svg> },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {badge.icon}
                    <span
                      className="font-lato text-xs tracking-wide"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GROWING WITH YOU ──────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto">

          {/* 2-Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-14">

            {/* Left Column — Fleet Image */}
            <div className="relative overflow-hidden group" style={{ borderRadius: "0.75rem", border: "2px solid rgba(197,164,109,0.30)" }}>
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/images/shuttle-chauffeur/Growing with you.png"
                  alt="UrbanStays premium fleet vehicles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay / vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(23,35,58,0.30) 0%, rgba(23,35,58,0.60) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Right Column — Text Content */}
            <div>
              {/* Gold Label */}
              <p
                className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
                style={{ color: "#C5A46D" }}
              >
                Growing With You
              </p>

              {/* Heading */}
              <h2
                className="font-montserrat text-2xl sm:text-3xl font-light mb-5"
                style={{ color: "#17233A" }}
              >
                <span className="font-semibold" style={{ color: "#C5A46D" }}>Growing</span> with you.
              </h2>

              {/* Divider */}
              <div className="divider-gold" />

              {/* Description */}
              <p
                className="font-lato text-sm sm:text-base leading-relaxed mt-5 mb-6"
                style={{ color: "#2B2D31" }}
              >
                UrbanStays &amp; Shuttles is building a premium fleet designed to accommodate everything from
                executive transfers to group travel.
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-4">
                {[
                  "Additional premium vehicles will be introduced as our service grows.",
                  "From solo executive travel to group transport — we are expanding to meet every need.",
                  "Every vehicle in our fleet meets the highest standards of comfort and safety.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {/* Checkmark icon */}
                    <div
                      className="flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        width: 24,
                        height: 24,
                        border: "1.5px solid rgba(197,164,109,0.45)",
                        borderRadius: "50%",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="2" className="w-3 h-3" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="font-lato text-sm leading-relaxed"
                      style={{ color: "#2B2D31" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── SERVICE ICONS STRIP ──────────────────────────────── */}
          <div
            className="py-8 sm:py-10"
            style={{
              borderTop: "1px solid rgba(197,164,109,0.20)",
              borderBottom: "1px solid rgba(197,164,109,0.20)",
            }}
          >
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-5 gap-6 sm:gap-0 items-center pb-2 sm:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {[
                {
                  label: "Airport Transfers",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  ),
                },
                {
                  label: "Hotel Transfers",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                  ),
                },
                {
                  label: "Corporate Travel",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  ),
                },
                {
                  label: "Private Appointments",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                },
                {
                  label: "Special Occasions",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                      <path d="M5.8 11.3L2 22l10.7-3.8" />
                      <path d="M4 3h.01" />
                      <path d="M22 8h.01" />
                      <path d="M15 2h.01" />
                      <path d="M22 20h.01" />
                      <path d="M22 2L12 12" />
                      <path d="M9.5 11.5L2 22l10.7-3.8" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  {/* Vertical divider — not on first item */}
                  {i > 0 && (
                    <div
                      className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2"
                      style={{
                        width: 1,
                        height: 40,
                        background: "linear-gradient(180deg, transparent, rgba(197,164,109,0.25), transparent)",
                      }}
                    />
                  )}
                  <div className="flex flex-col items-center gap-3 text-center px-2">
                    {item.icon}
                    <span
                      className="font-lato text-[10px] sm:text-xs tracking-wide"
                      style={{ color: "#2B2D31" }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER TAGLINE BAR ───────────────────────────────── */}
          <div className="pt-8 text-center">
            <p className="font-montserrat text-sm sm:text-base">
              <span className="font-semibold" style={{ color: "#C5A46D" }}>UrbanStays &amp; Shuttles</span>
              <span className="mx-2.5" style={{ color: "rgba(23,35,58,0.30)" }}>|</span>
              <span
                className="font-lato tracking-wide"
                style={{ color: "#2B2D31" }}
              >
                Premium. Professional. Personal.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-montserrat text-2xl sm:text-3xl font-light mb-4 sm:mb-5"
              style={{ color: "#FFFFFF" }}
            >
              The URBAN Standard of{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>Transport</span>
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
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#C5A46D",
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div
            className="relative overflow-hidden group"
            style={{ aspectRatio: "4/3", border: "2px solid rgba(197,164,109,0.30)" }}
          >
            {/* Gold corner accent */}
            <div
              className="absolute top-0 right-0 w-12 h-12 opacity-40 z-10"
              style={{
                background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
              }}
            />
            <img
              src="/images/shuttle-chauffeur/Executive Travel (2).png"
              alt="URBAN STAYS luxury chauffeur vehicle"
              className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(23,35,58,0.10) 0%, rgba(23,35,58,0.30) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              What We Offer
            </p>
            <h2
              className="font-montserrat text-2xl sm:text-3xl font-light mb-4"
              style={{ color: "#17233A" }}
            >
              Our{" "}
              <span className="font-semibold">Transport Services</span>
            </h2>
            <div className="divider-gold-center" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                title: "Airport Transfers",
                description: "Seamless pickups and drop-offs at OR Tambo International and Lanseria airports. Flight tracking included — we wait for you, not the other way around.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                ),
              },
              {
                title: "Corporate Transfers",
                description: "Professional chauffeur-driven vehicles for business meetings, client entertainment, and corporate events across Sandton and greater Johannesburg.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                ),
              },
              {
                title: "City & Leisure Tours",
                description: "Explore Sandton City, the Apartheid Museum, Soweto, and beyond in private comfort. Customised itineraries available on request.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                ),
              },
              {
                title: "Event Transfers",
                description: "Arrive and depart in style — weddings, galas, conferences, and private events. Our fleet is available for multi-vehicle event coordination.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                    <path d="M5.8 11.3L2 22l10.7-3.8" />
                    <path d="M4 3h.01" />
                    <path d="M22 8h.01" />
                    <path d="M15 2h.01" />
                    <path d="M22 20h.01" />
                    <path d="M22 2L12 12" />
                    <path d="M9.5 11.5L2 22l10.7-3.8" />
                  </svg>
                ),
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(197,164,109,0.20)",
                  borderRadius: "0.75rem",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                    borderRadius: "0 0.75rem 0 0",
                  }}
                />
                <div
                  className="mb-5 flex items-center justify-center"
                  style={{
                    width: 52,
                    height: 52,
                    border: "1px solid rgba(197,164,109,0.25)",
                    borderRadius: "0.5rem",
                    background: "rgba(197,164,109,0.05)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  className="font-montserrat text-lg font-semibold tracking-wide mb-3"
                  style={{ color: "#17233A" }}
                >
                  {service.title}
                </h3>
                <div
                  style={{ width: 32, height: 2, background: "linear-gradient(90deg, #C5A46D, transparent)", marginBottom: "1rem" }}
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

      {/* ── REQUEST CTA ───────────────────────────────────────────── */}
      <section
        className="py-14 sm:py-20 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 50%, #C5A46D 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-montserrat text-2xl sm:text-3xl font-light mb-4"
            style={{ color: "#17233A" }}
          >
            Ready to{" "}
            <span className="font-semibold">Book a Transfer?</span>
          </h2>
          <p
            className="font-lato text-xs sm:text-sm mb-8 sm:mb-10 max-w-lg mx-auto"
            style={{ color: "rgba(23,35,58,0.70)" }}
          >
            Message us directly on WhatsApp with your date, time, and destination —
            and we will handle the rest.
          </p>
          <a
            href={`https://wa.me/923401313713?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta font-montserrat relative inline-flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 transition-all duration-300 overflow-hidden"
            style={{
              border: "1.5px solid #17233A",
              borderRadius: "0.5rem",
              background: "transparent",
            }}
          >
            <span
              className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover/cta:opacity-100"
              style={{ background: "#17233A" }}
            />
            <svg viewBox="0 0 24 24" fill="#17233A" className="w-4 h-4 relative z-10 cta-icon transition-colors duration-500" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10 cta-text text-xs font-semibold tracking-widest uppercase transition-colors duration-500" style={{ color: "#17233A" }}>
              Request via WhatsApp
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
