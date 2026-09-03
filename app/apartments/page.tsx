import type { Metadata } from "next";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";
import SocialShare from "@/components/SocialShare";
import ApartmentImageCarousel from "@/components/ApartmentImageCarousel";

export const metadata: Metadata = {
  title: "Our Apartments | URBAN STAYS – Sandton",
  description:
    "A luxury two-bedroom serviced apartment in Sandton – fully furnished with premium amenities at the Masingita Hotel.",
};

const apartment = {
  id: "two-bedroom",
  name: "Two Bedroom Apartment",
  tagline: "The Ultimate Sandton Retreat",
  size: "120 m²",
  occupancy: "2–5 Guests",
  price: "R3,700 / night",
  images: [
    "/images/Two Bedroom Apartment images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg",
    "/images/Two Bedroom Apartment images/WhatsApp Image 2026-08-03 at 5.08.06 PM.jpeg",
    "/images/Two Bedroom Apartment images/WhatsApp Image 2026-08-03 at 5.08.33 PM.jpeg",
  ],
  description:
    "Our flagship apartment offers two en-suite bedrooms, a fully appointed kitchen, a large lounge, and all the space you need to work, relax, and entertain.",
  features: [
    "Two en-suite bedrooms",
    "Full gourmet kitchen",
    "Spacious lounge & dining",
    "Private balcony",
    "In-unit washer/dryer",
    "Priority concierge",
  ],
};

export default function ApartmentsPage() {
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
            backgroundImage: "url('/images/WhatsApp Image 2026-08-03 at 5.08.06 PM.jpeg')",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.70)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center reveal-scale">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "#C5A46D" }}
          >
            Our Residences
          </p>
          <h1
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Luxury Serviced{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Apartments in Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            A spacious two-bedroom apartment — a statement in refined living, designed
            for those who refuse to settle for less.
          </p>
        </div>
      </section>

      {/* ── APARTMENTS LISTING ────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div
              className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center reveal"
              data-delay="1"
            >
              {/* Image */}
              <div className="relative mb-4">
                <ApartmentImageCarousel images={apartment.images} />
                {/* Size badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 z-20"
                  style={{ backgroundColor: "#C5A46D" }}
                >
                  <span
                    className="font-montserrat font-semibold tracking-widest uppercase"
                    style={{ fontSize: "0.625rem", color: "#17233A" }}
                  >
                    {apartment.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p
                  className="font-lato text-xs tracking-[0.35em] uppercase mb-2"
                  style={{ color: "#C5A46D" }}
                >
                  {apartment.occupancy}
                </p>
                <h2
                  className="font-montserrat text-2xl md:text-3xl font-light mb-2"
                  style={{ color: "#17233A" }}
                >
                  {apartment.name}
                </h2>
                <p
                  className="font-lato text-sm mb-4"
                  style={{ color: "#C5A46D", fontStyle: "italic" }}
                >
                  {apartment.tagline}
                </p>
                <div className="divider-gold" />
                <p
                  className="font-lato text-sm leading-relaxed mb-6 mt-5"
                  style={{ color: "#2B2D31" }}
                >
                  {apartment.description}
                </p>

                {/* Features */}
                <ul
                  className="grid grid-cols-2 gap-2 mb-6"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {apartment.features.map((f, fi) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 font-lato text-sm transition-all duration-300"
                      style={{ color: "#2B2D31" }}
                      data-delay={String(fi + 1)}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#C5A46D",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <p
                  className="font-montserrat text-lg font-semibold mb-6"
                  style={{ color: "#C5A46D" }}
                >
                  {apartment.price}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#book"
                    className="btn-gold-shimmer font-montserrat text-xs font-semibold tracking-widest uppercase px-6 py-3"
                  >
                    Book Now
                  </a>
                  <a
                    href={`https://wa.me/923401313713?text=${encodeURIComponent(
                      `Hi, I'm interested in the ${apartment.name} at URBAN STAYS.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-xs tracking-widest uppercase transition-all duration-300 px-6 py-3"
                    style={{
                      border: "1px solid #C5A46D",
                      color: "#C5A46D",
                    }}
                  >
                    Enquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* ── AMENITIES STRIP ───────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-14">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            Premium Amenities
          </p>
          <h2
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Included in Every{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Apartment
            </span>
          </h2>
          <div className="divider-gold-center" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M5 12.55a11 11 0 0114.08 0" />
                  <path d="M1.42 9a16 16 0 0121.16 0" />
                  <path d="M8.53 16.11a6 6 0 016.95 0" />
                  <circle cx="12" cy="20" r="1" fill="#C5A46D" />
                </svg>
              ),
              label: "High-Speed Wi-Fi",
              image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.06 PM.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              ),
              label: "Smart TV",
              image: "/images/WhatsApp Image 2026-08-03 at 5.08.06 PM.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              label: "Daily Housekeeping",
              image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM123.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
              label: "24/7 Concierge",
              image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM321.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              ),
              label: "Secure Parking",
              image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM456.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
              ),
              label: "In-unit Laundry",
              image: "/images/WhatsApp Image 2026-08-03 at 5.08.33 PM.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              ),
              label: "Premium Bedding",
              image: "/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.5" className="w-7 h-7">
                  <path d="M20 12v10H4V12" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 22V7" />
                  <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                </svg>
              ),
              label: "Welcome Pack",
              image: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM.jpeg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 card-hover reveal-scale flex flex-col"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(197,164,109,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              data-delay={String(i + 1)}
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
                  src={item.image}
                  alt={item.label}
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
                {/* Icon */}
                <div
                  className="mb-3 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 -mt-6 sm:-mt-7 relative z-10"
                  style={{
                    width: "clamp(40px, 8vw, 48px)",
                    height: "clamp(40px, 8vw, 48px)",
                    background: "linear-gradient(135deg, rgba(197,164,109,0.2) 0%, rgba(197,164,109,0.1) 100%)",
                    border: "2px solid rgba(197,164,109,0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <p
                  className="font-montserrat text-xs font-medium tracking-wide"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {item.label}
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
      </section>

      {/* ── NIGHTSBRIDGE BOOKING ──────────────────────────────────── */}
      <section id="book" className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            Direct Booking
          </p>
          <h2
            className="font-montserrat text-2xl sm:text-3xl font-light mb-3"
            style={{ color: "#FFFFFF" }}
          >
            Check Availability &amp;{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>Book</span>
          </h2>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-xs sm:text-sm mb-8 sm:mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Our Two Bedroom Apartment is available for direct booking — powered by NightsBridge for secure,
            instant confirmation.
          </p>

          {/* ── Booking Card ──────────────────────────────────── */}
          <div
            className="overflow-hidden"
            style={{
              border: "1px solid rgba(197,164,109,0.3)",
              borderRadius: "1rem",
              boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(197,164,109,0.1)",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Card Header */}
            <div
              className="px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(197,164,109,0.12) 0%, rgba(212,184,126,0.08) 100%)",
                borderBottom: "1px solid rgba(197,164,109,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 100%)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#17233A" strokeWidth="1.5" className="w-5 h-5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-montserrat text-sm font-semibold" style={{ color: "#17233A" }}>Two Bedroom Apartment</p>
                  <p className="font-lato text-xs" style={{ color: "#2B2D31" }}>R3,700 / night · 2-5 Guests</p>
                </div>
              </div>
              <a
                href="https://book.nightsbridge.com/40117"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer font-montserrat text-xs font-semibold tracking-[0.15em] uppercase px-6 py-2.5 inline-flex items-center gap-2"
                style={{ borderRadius: "0.375rem" }}
              >
                Book Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 relative z-10">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            {/* NightsBridge Widget */}
            <iframe
              src="https://book.nightsbridge.com/40117"
              width="100%"
              height="1400"
              frameBorder="0"
              title="NightsBridge Booking Widget"
              style={{ display: "block", border: "none" }}
              loading="lazy"
            />
          </div>

          {/* WhatsApp & Email Booking Buttons */}
          <div className="mt-8 sm:mt-10 text-center">
            <p
              className="font-lato text-xs sm:text-sm mb-5"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Prefer to book directly? Reach us on WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/923401313713?text=Hi%20URBAN%20STAYS%2C%20I%20would%20like%20to%20make%20a%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp font-montserrat text-xs font-semibold tracking-widest uppercase px-6 py-3 inline-flex items-center justify-center gap-2"
                style={{ borderRadius: "0.375rem" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reserve via WhatsApp
              </a>
              <a
                href="mailto:info@urbanstays.co.za?subject=Booking%20Enquiry"
                className="font-montserrat text-xs tracking-widest uppercase px-6 py-3 inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ border: "1px solid rgba(197,164,109,0.5)", color: "#C5A46D", borderRadius: "0.375rem" }}
              >
                Email Booking Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL SHARE ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Share This Apartment
            </p>
            <h2
              className="font-montserrat text-xl sm:text-2xl md:text-3xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Help Others Discover{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                URBAN STAYS
              </span>
            </h2>
            <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
            <p
              className="font-lato text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Know someone looking for luxury accommodation in Sandton? Share this apartment on social media.
            </p>
          </div>
          
          <div className="flex justify-center">
            <SocialShare 
              title="Luxury Two Bedroom Apartment in Sandton - URBAN STAYS"
              description="A spacious two-bedroom serviced apartment with premium amenities in the heart of Sandton."
            />
          </div>
        </div>
      </section>
    </>
  );
}
