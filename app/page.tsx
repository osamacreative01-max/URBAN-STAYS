import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";
import SocialShare from "@/components/SocialShare";
import ExpandableText from "@/components/ExpandableText";

export default function HomePage() {
  // JSON-LD Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "URBAN STAYS",
    "description": "Luxury serviced apartments in the heart of Sandton, Johannesburg. Premium accommodation with personalized service and private chauffeur options.",
    "url": "https://urbanstays.co.za",
    "logo": "https://urbanstays.co.za/logo.png",
    "image": [
      "https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e1a3f94c8d0d?w=1200&q=80"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Masingita Hotel, Sandton",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-26.1076",
      "longitude": "28.0567"
    },
    "telephone": "+27-00-000-0000",
    "email": "info@urbanstays.co.za",
    "priceRange": "R2,800 - R6,500",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed Wi-Fi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Daily Housekeeping",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Concierge",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Secure Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Shuttle Service",
        "value": true
      }
    ],
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "numberOfRooms": "Multiple serviced apartments available",
    "petsAllowed": false,
    "smokingAllowed": false,
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/urbanstays",
      "https://www.instagram.com/urbanstays",
      "https://www.linkedin.com/company/urbanstays"
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <ScrollObserver />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg')",
            zIndex: 1,
          }}
          role="img"
          aria-label="URBAN STAYS luxury bedroom interior"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.60) 40%, rgba(0,0,0,0.40) 100%)", zIndex: 2 }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto" style={{ zIndex: 20 }}>
          <p className="font-lato text-xs sm:text-sm tracking-[0.4em] uppercase mb-6" style={{ color: "#C5A46D" }} data-delay="1">
            Sandton · Johannesburg · South Africa
          </p>
          <h1
            className="font-montserrat text-[1.35rem] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wide leading-tight mb-6"
            style={{ color: "#FFFFFF" }}
            data-delay="2"
          >
            Luxury Serviced Apartments in Sandton
            <br />
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              URBAN STAYS
            </span>
          </h1>
          <div
            className="mx-auto mb-6"
            style={{ width: 64, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }}
            data-delay="3"
          />
          <p
            className="font-lato text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-8 mb-12"
            style={{ color: "rgba(255,255,255,0.9)", textAlign: "center", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            data-delay="4"
          >
            Luxury serviced apartments in the heart of Sandton. Curated comfort, personalised service, and an experience that redefines accommodation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-delay="5">
            <Link
              href="/apartments#book"
              className="btn-gold font-montserrat text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4"
            >
              Reserve Your Apartment
            </Link>
            <Link
              href="/apartments"
              className="btn-outline-gold font-montserrat text-xs tracking-[0.2em] uppercase px-8 py-4"
            >
              View All Apartments
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" data-delay="6">
          <span
            className="font-lato text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, #C5A46D, transparent)",
            }}
          />
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── WELCOME STRIP ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Welcome to URBAN STAYS
            </p>
            <h2
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-5"
              style={{ color: "#17233A" }}
            >
              Where Comfort Meets
              <br />
              <span className="font-semibold">Sophistication</span>
            </h2>
            <div className="divider-gold" />
            <p
              className="font-lato text-base mb-5 mt-6"
              style={{ color: "#2B2D31", lineHeight: "1.85" }}
            >
              Situated at the iconic Masingita Hotel in the heart of Sandton, URBAN
              STAYS offers a curated selection of fully serviced luxury apartments —
              designed for discerning travellers, executives, and those who simply
              refuse to settle for less.
            </p>
            <p
              className="font-lato text-base mb-8"
              style={{ color: "#2B2D31", lineHeight: "1.85" }}
            >
              Each space is thoughtfully appointed with premium furnishings, modern
              amenities, and warm, authentic touches that make every stay feel like
              home — only better.
            </p>
            <Link
              href="/apartments"
              className="btn-outline-gold font-montserrat text-xs tracking-widest uppercase inline-block px-7 py-3 mt-2"
            >
              Discover Our Apartments
            </Link>
          </div>

          {/* Image placeholders — visible even without real photos */}
          <div className="grid grid-cols-2 gap-4 reveal-scale">
            <div
              className="rounded-none overflow-hidden relative group"
              style={{ aspectRatio: "3/4" }}
              data-delay="1"
            >
              <img
                src="/images/WhatsApp Image 2026-08-03 at 5.08.06 PM.jpeg"
                alt="URBAN STAYS apartment interior"
                className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div
              className="rounded-none mt-8 overflow-hidden relative group"
              style={{ aspectRatio: "3/4" }}
              data-delay="2"
            >
              <img
                src="/images/WhatsApp Image 2026-08-03 at 5.08.33 PM.jpeg"
                alt="URBAN STAYS luxury living room"
                className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── FEATURE HIGHLIGHTS ────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto text-center mb-14">
          <p
            className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            The URBAN Experience
          </p>
          <h2
            className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Crafted for the{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Discerning Few
            </span>
          </h2>
          <div className="divider-gold-center" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="#C5A46D"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              title: "Luxury Apartments",
              text: "Fully furnished, serviced apartments with premium fittings and curated décor — ready for short or extended stays.",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="#C5A46D"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
              title: "Personalised Service",
              text: "From arrival to departure, our team anticipates your every need — concierge, housekeeping, and more.",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="#C5A46D"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
                  <rect x="9" y="11" width="14" height="10" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                </svg>
              ),
              title: "Shuttle & Chauffeur",
              text: "Professional, private transport for airport transfers, business meetings, or wherever Sandton takes you.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl p-8 sm:p-10 text-center transition-all duration-500 card-hover reveal-scale flex flex-col items-center"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(197,164,109,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              data-delay={String(i + 1)}
            >
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-14 h-14 opacity-30"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                  borderRadius: "0 0.75rem 0 0",
                }}
              />

              {/* Icon */}
              <div
                className="mb-6 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{
                  width: 64,
                  height: 64,
                  background: "linear-gradient(135deg, rgba(197,164,109,0.15) 0%, rgba(197,164,109,0.05) 100%)",
                  border: "1px solid rgba(197,164,109,0.25)",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="font-montserrat text-base font-semibold tracking-wider uppercase mb-3"
                style={{ color: "#FFFFFF" }}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div
                className="mx-auto mb-5"
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
                {item.text}
              </p>

              {/* Bottom gold line */}
              <div
                className="mx-auto mt-6"
                style={{
                  width: 40,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── SHUTTLE CTA STRIP ─────────────────────────────────────── */}
      <section
        className="py-16 px-6 reveal"
        style={{ background: "linear-gradient(135deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="font-montserrat text-2xl font-light mb-2"
              style={{ color: "#17233A" }}
            >
              Need a{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>Private Transfer?</span>
            </h3>
            <p className="font-lato text-sm" style={{ color: "#2B2D31" }}>
              Airport pickups, corporate transfers, city tours — handled with elegance.
            </p>
          </div>
          <Link
            href="/shuttle-chauffeur"
            className="btn-outline-gold flex-shrink-0 font-montserrat text-xs tracking-widest uppercase px-8 py-4"
          >
            Book Shuttle Service
          </Link>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── NIGHTSBRIDGE BOOKING ──────────────────────────────────── */}
      <section id="book" className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            Direct Booking
          </p>
          <h2
            className="font-montserrat text-3xl font-light mb-3"
            style={{ color: "#FFFFFF" }}
          >
            Reserve Your{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>Apartment</span>
          </h2>
          <div className="divider-gold-center" style={{ marginBottom: "2rem" }} />
          <p
            className="font-lato text-base mb-10"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Book directly and enjoy the best available rates. Secure, instant
            confirmation via NightsBridge.
          </p>
          {/* ── NightsBridge widget ──────────────────────────────────
               Replace NB_PROPERTY_CODE below with your actual NightsBridge
               property code (e.g. NB12345) once your account is live.
               The correct embed URL format is:
               https://app.nightsbridge.com/hotel/NB_PROPERTY_CODE
          ─────────────────────────────────────────────────────────── */}
          <div
            style={{
              border: "1px solid rgba(197,164,109,0.35)",
              background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)",
            }}
          >
            {/* Shown until the real property code is added */}
            <div
              className="flex flex-col items-center justify-center text-center py-12 px-8"
              style={{
                borderBottom: "1px solid rgba(197,164,109,0.2)",
                background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C5A46D"
                strokeWidth="1"
                className="w-10 h-10 mb-4"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h3
                className="font-montserrat text-base font-semibold mb-2"
                style={{ color: "#FFFFFF" }}
              >
                Online Booking Coming Soon
              </h3>
              <p
                className="font-lato text-sm mb-6 max-w-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Our NightsBridge direct booking engine is being set up. In the
                meantime, book via WhatsApp or email for instant confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/923401313713?text=Hi%20URBAN%20STAYS%2C%20I%20would%20like%20to%20make%20a%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-xs font-semibold tracking-widest uppercase px-6 py-3 inline-flex items-center gap-2"
                  style={{ backgroundColor: "#25D366", color: "#FFFFFF" }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Make Booking via WhatsApp
                </a>
                <a
                  href="mailto:info@urbanstays.co.za?subject=Booking%20Enquiry"
                  className="btn-outline-gold font-montserrat text-xs tracking-widest uppercase px-6 py-3"
                >
                  Send Booking Email
                </a>
              </div>
            </div>

            {/* Live NightsBridge iframe — uncomment once property code is available
            <iframe
              src="https://app.nightsbridge.com/hotel/NB_PROPERTY_CODE"
              width="100%"
              height="600"
              frameBorder="0"
              title="NightsBridge Booking"
              style={{ display: "block" }}
            />
            */}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)", paddingBottom: "6rem" }}>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p
            className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            Guest Experiences
          </p>
          <h2
            className="font-montserrat text-3xl md:text-4xl font-light mb-4"
            style={{ color: "#17233A" }}
          >
            What Our Guests{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Say
            </span>
          </h2>
          <div className="divider-gold-center" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Absolutely exceptional. The apartment was immaculate, the service was impeccable, and the location couldn't be better for my business trip to Sandton.",
              name: "James M.",
              role: "Corporate Traveller",
              photo: "/images/James M..jpg",
            },
            {
              quote:
                "The chauffeur service was seamless from OR Tambo straight to the apartment. URBAN STAYS has set a new standard for what serviced accommodation should be.",
              name: "Amira K.",
              role: "Leisure Guest",
              photo: "/images/Amira K..jpg",
            },
            {
              quote:
                "I've stayed at top hotels across the continent, but URBAN STAYS gave me something those couldn't — a genuine sense of home paired with true luxury.",
              name: "David O.",
              role: "Extended Stay Guest",
              photo: "/images/David O..jpg",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 sm:p-10 transition-all duration-500 card-hover reveal-scale flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                border: "1px solid rgba(197,164,109,0.2)",
                boxShadow: "0 4px 24px rgba(23,35,58,0.06), 0 1px 4px rgba(197,164,109,0.08)",
              }}
              data-delay={String(i + 1)}
            >
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, #C5A46D 50%, #D4B87E 70%, #C5A46D 85%, #A8894E 100%)",
                  borderRadius: "0 1rem 0 0",
                }}
              />

              {/* Avatar */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 100%)",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </div>
                {"photo" in t && t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="relative rounded-full object-cover"
                    style={{
                      width: 68,
                      height: 68,
                      border: "3px solid white",
                      boxShadow: "0 4px 12px rgba(197,164,109,0.25)",
                    }}
                  />
                ) : (
                  <div
                    className="relative rounded-full flex items-center justify-center"
                    style={{
                      width: 68,
                      height: 68,
                      background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 100%)",
                      border: "3px solid white",
                      boxShadow: "0 4px 12px rgba(197,164,109,0.25)",
                    }}
                  >
                    <span
                      className="font-montserrat font-semibold"
                      style={{ color: "#17233A", fontSize: "1.25rem" }}
                    >
                      {t.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Quote icon */}
              <div
                className="font-montserrat font-light mb-3 leading-none"
                style={{ color: "#C5A46D", fontSize: "2.5rem", opacity: 0.6 }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                className="font-lato text-sm leading-relaxed mb-6 relative z-10"
                style={{ color: "#2B2D31", fontStyle: "italic" }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div
                className="mb-4"
                style={{
                  width: 40,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                }}
              />

              {/* Name & Role */}
              <p
                className="font-montserrat text-sm font-semibold tracking-wide mb-1"
                style={{ color: "#17233A" }}
              >
                {t.name}
              </p>
              <p className="font-lato text-xs tracking-wider uppercase" style={{ color: "#C5A46D" }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── WHY SANDTON ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Your Perfect Location
            </p>
            <h2
              className="font-montserrat text-3xl md:text-4xl font-light mb-4"
              style={{ color: "#17233A" }}
            >
              Why Stay in{" "}
              <span className="font-semibold">Sandton?</span>
            </h2>
            <div className="divider-gold-center" />
          </div>

          {/* Sandton cityscape image */}
          <div className="mb-12 reveal-scale" data-delay="1">
            <div
              className="w-full overflow-hidden relative"
              style={{ height: 280, borderRadius: 2 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg')",
                  filter: "brightness(0.75) saturate(1.1)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(15,15,15,0.50) 0%, transparent 40%, transparent 60%, rgba(15,15,15,0.50) 100%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-montserrat text-lg font-light tracking-wider" style={{ color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)" }}>
                    Sandton · Johannesburg
                  </p>
                  <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)", margin: "0.5rem auto" }} />
                  <p className="font-lato text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.65)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                    Africa's Richest Square Mile
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="reveal-left">
              <h3
                className="font-montserrat text-xl font-semibold mb-5"
                style={{ color: "#17233A" }}
              >
                Africa's Financial Hub
              </h3>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }} className="mb-5">
                Sandton is renowned as the financial and business epicenter of South Africa, often referred to as Africa's richest square mile. Located in the heart of Johannesburg, this prestigious district hosts the Johannesburg Stock Exchange, multinational corporate headquarters, and the continent's most important business conferences and events.
              </ExpandableText>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }}>
                For business travelers and executives, staying at URBAN STAYS means being minutes away from boardrooms, meeting venues, and networking opportunities. Our luxury serviced apartments provide the perfect base for productive work trips, offering the space and amenities you need to maintain your professional edge while enjoying hotel-quality service.
              </ExpandableText>
            </div>

            <div className="reveal-right">
              <h3
                className="font-montserrat text-xl font-semibold mb-5"
                style={{ color: "#17233A" }}
              >
                World-Class Shopping &amp; Dining
              </h3>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }} className="mb-5">
                Beyond business, Sandton offers an unparalleled lifestyle experience. Sandton City, one of Africa's premier shopping destinations, sits just a five-minute walk from URBAN STAYS. Here you'll find luxury international brands, fine dining restaurants, artisanal cafes, and entertainment options that cater to the most refined tastes.
              </ExpandableText>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }}>
                Nelson Mandela Square, with its iconic 6-meter statue, offers al fresco dining experiences and boutique shopping. Whether you're seeking authentic South African cuisine, international flavors, or upscale cocktail bars, Sandton's culinary scene delivers exceptional experiences at every turn.
              </ExpandableText>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal-left">
              <h3
                className="font-montserrat text-xl font-semibold mb-5"
                style={{ color: "#17233A" }}
              >
                Exceptional Connectivity
              </h3>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }} className="mb-5">
                Sandton is seamlessly connected to the rest of Johannesburg and beyond. The Sandton Gautrain station, an eight-minute walk from Masingita Hotel, provides rapid transit to OR Tambo International Airport in just 15 minutes. This world-class train service also connects you to Pretoria, Rosebank, and other key Gauteng destinations with ease and comfort.
              </ExpandableText>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }}>
                Major highways including the M1, N1, and William Nicol Drive intersect in Sandton, making road travel convenient whether you're heading to business meetings, exploring Johannesburg's cultural attractions, or venturing further afield. For ultimate convenience, URBAN STAYS offers private chauffeur and shuttle services for stress-free transportation.
              </ExpandableText>
            </div>

            <div className="reveal-right">
              <h3
                className="font-montserrat text-xl font-semibold mb-5"
                style={{ color: "#17233A" }}
              >
                Safety &amp; Security
              </h3>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }} className="mb-5">
                Your safety and peace of mind are paramount. Sandton is one of Johannesburg's most secure areas, with 24/7 private security, CCTV surveillance throughout public spaces, and well-maintained infrastructure. The Masingita Hotel complex where URBAN STAYS is located features controlled access, secure underground parking, and round-the-clock security personnel.
              </ExpandableText>
              <ExpandableText lines={3} style={{ color: "#2B2D31" }}>
                Our apartments are equipped with modern security systems, and our concierge team is available at any hour to assist with your needs. Whether you're a first-time visitor to Johannesburg or a regular traveler to the city, URBAN STAYS provides the secure, comfortable environment you expect from premium accommodation.
              </ExpandableText>
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── WHY CHOOSE URBAN STAYS ──────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              The URBAN Difference
            </p>
            <h2
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Why Choose{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                URBAN STAYS?
              </span>
            </h2>
            <div className="divider-gold-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.2" className="w-6 h-6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                title: "More Space, More Comfort",
                desc: "Unlike traditional hotel rooms, our serviced apartments offer separate living areas, fully equipped kitchens, and generous layouts. Whether you're staying for three nights or three months, you'll have the space to live, work, and relax comfortably. Perfect for families, business travelers on extended assignments, or anyone who values room to breathe."
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.2" className="w-6 h-6">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                ),
                title: "Hotel Service, Home Comfort",
                desc: "Experience the best of both worlds. Enjoy daily housekeeping, 24/7 concierge services, and premium amenities, all while having the privacy and independence of your own apartment. Cook your own meals when you want, or explore Sandton's dining scene. Work from your private space, or head to nearby offices. The choice is always yours."
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C5A46D" strokeWidth="1.2" className="w-6 h-6">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                title: "Exceptional Value",
                desc: "For extended stays, serviced apartments offer significantly better value than hotels. With full kitchens, you can save on dining costs. With in-unit laundry, you can pack lighter. And with separate living and sleeping areas, you can entertain guests or hold small meetings without booking additional spaces. Quality, space, and savings in one package."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="reveal-scale"
                data-delay={String(i + 1)}
              >
                <div
                  className="flex items-center justify-center mx-auto mb-5"
                  style={{
                    width: 52,
                    height: 52,
                    border: "1px solid rgba(197,164,109,0.45)",
                    borderRadius: "50%",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-montserrat text-lg font-semibold mb-4 text-center"
                  style={{ color: "#FFFFFF" }}
                >
                  {item.title}
                </h3>
                <ExpandableText
                  className="text-center"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  {item.desc}
                </ExpandableText>
                <div
                  className="mx-auto mt-6"
                  style={{
                    width: 60,
                    height: 2,
                    background: "linear-gradient(90deg, transparent, #C5A46D, transparent)",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center reveal-scale" data-delay="4">
            <p
              className="font-lato text-base leading-relaxed mb-8 max-w-3xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              At URBAN STAYS, we understand that modern travelers need more than just a place to sleep. You need a productive workspace, a comfortable living area, and the flexibility to maintain your routine. Our apartments are designed for the way you actually live and work, not just for how you vacation. From high-speed Wi-Fi and ergonomic workspaces to premium bedding and rainfall showers, every detail is considered to make your stay seamless, comfortable, and genuinely enjoyable.
            </p>
            <Link
              href="/apartments"
              className="btn-gold font-montserrat text-xs font-semibold tracking-[0.2em] uppercase inline-block px-8 py-4"
            >
              Browse Apartments
            </Link>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex justify-center" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)", padding: "2px 0" }}>
        <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #C5A46D, transparent)" }} />
      </div>

      {/* ── SOCIAL SHARE ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 reveal-scale">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Spread the Word
            </p>
            <h2
              className="font-montserrat text-2xl md:text-3xl font-light mb-4"
              style={{ color: "#17233A" }}
            >
              Love What You See?{" "}
              <span className="font-semibold">Share with Others</span>
            </h2>
            <div className="divider-gold-center" style={{ marginBottom: "2rem" }} />
            <p
              className="font-lato text-sm max-w-xl mx-auto mb-8"
              style={{ color: "#2B2D31" }}
            >
              Help your friends and colleagues discover luxury serviced apartments in Sandton. Share URBAN STAYS on your favorite platform.
            </p>
          </div>
          
          <div className="flex justify-center reveal-scale" data-delay="1">
            <SocialShare 
              title="URBAN STAYS - Luxury Serviced Apartments in Sandton"
              description="Experience premium serviced apartments in the heart of Sandton with personalized service, modern amenities, and private chauffeur options."
            />
          </div>
        </div>
      </section>
    </>
  );
}
