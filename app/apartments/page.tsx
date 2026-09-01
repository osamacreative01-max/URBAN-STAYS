import type { Metadata } from "next";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Apartments | URBAN STAYS – Sandton",
  description:
    "Explore our luxury serviced apartments in Sandton. Studio, one-bedroom, and two-bedroom options – all fully furnished with premium amenities.",
};

const apartments = [
  {
    id: "studio",
    name: "The Studio Suite",
    tagline: "Smart Luxury in Every Square Metre",
    size: "45 m²",
    occupancy: "1–2 Guests",
    price: "From R2,800 / night",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    description:
      "Thoughtfully designed for the solo traveller or couple, the Studio Suite combines a sleek living and sleeping area with a fully equipped kitchenette, premium bathroom, and curated finishes.",
    features: [
      "King-size bed",
      "Fully equipped kitchenette",
      "Smart TV & high-speed Wi-Fi",
      "Premium bath amenities",
      "Daily housekeeping",
      "24/7 concierge",
    ],
  },
  {
    id: "one-bedroom",
    name: "One Bedroom Apartment",
    tagline: "Space, Privacy & Refined Comfort",
    size: "75 m²",
    occupancy: "1–3 Guests",
    price: "From R4,200 / night",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description:
      "Generous proportions, a separate bedroom, a full kitchen, and elegant living spaces — ideal for executives on extended stays or couples seeking true comfort.",
    features: [
      "Separate king bedroom",
      "Full kitchen with appliances",
      "Open-plan living & dining",
      "Rainfall shower & soaking tub",
      "In-unit washer/dryer",
      "Daily housekeeping",
    ],
  },
  {
    id: "two-bedroom",
    name: "Two Bedroom Apartment",
    tagline: "The Ultimate Sandton Retreat",
    size: "120 m²",
    occupancy: "2–5 Guests",
    price: "From R6,500 / night",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
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
  },
];

export default function ApartmentsPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal-scale">
          <p
            className="font-lato text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C5A46D" }}
          >
            Our Residences
          </p>
          <h1
            className="font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Luxury Serviced{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Apartments in Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            From intimate studio suites to expansive two-bedroom residences — each
            apartment is a statement in refined living.
          </p>
        </div>
      </section>

      {/* ── APARTMENTS LISTING ────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {apartments.map((apt, i) => (
            <div
              key={apt.id}
              className="grid md:grid-cols-2 gap-12 items-center reveal"
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
              data-delay={String(i + 1)}
            >
              {/* Image */}
              <div
                className="img-placeholder overflow-hidden relative group"
                style={{ aspectRatio: "4/3", direction: "ltr" }}
              >
                {/* Real photo loads on top of placeholder */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${apt.image}')`
                  }}
                />
                {/* Size badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 z-10"
                  style={{ backgroundColor: "#C5A46D" }}
                >
                  <span
                    className="font-montserrat font-semibold tracking-widest uppercase"
                    style={{ fontSize: "0.625rem", color: "#17233A" }}
                  >
                    {apt.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <p
                  className="font-lato text-xs tracking-[0.35em] uppercase mb-2"
                  style={{ color: "#C5A46D" }}
                >
                  {apt.occupancy}
                </p>
                <h2
                  className="font-montserrat text-2xl md:text-3xl font-light mb-2"
                  style={{ color: "#17233A" }}
                >
                  {apt.name}
                </h2>
                <p
                  className="font-lato text-sm mb-4"
                  style={{ color: "#C5A46D", fontStyle: "italic" }}
                >
                  {apt.tagline}
                </p>
                <div className="divider-gold" />
                <p
                  className="font-lato text-sm leading-relaxed mb-6 mt-5"
                  style={{ color: "#2B2D31" }}
                >
                  {apt.description}
                </p>

                {/* Features */}
                <ul
                  className="grid grid-cols-2 gap-2 mb-6"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {apt.features.map((f, fi) => (
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
                  {apt.price}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#book"
                    className="font-montserrat text-xs font-semibold tracking-widest uppercase transition-all duration-300 px-6 py-3"
                    style={{ background: "linear-gradient(135deg, #C5A46D 0%, #D4B87E 50%, #C5A46D 100%)", color: "#17233A" }}
                  >
                    Book {apt.name}
                  </a>
                  <a
                    href={`https://wa.me/923401313713?text=${encodeURIComponent(
                      `Hi, I'm interested in the ${apt.name} at URBAN STAYS.`
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
          ))}
        </div>
      </section>

      {/* ── AMENITIES STRIP ───────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            className="font-montserrat text-2xl font-light mb-3"
            style={{ color: "#FFFFFF" }}
          >
            Included in Every{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Apartment
            </span>
          </h2>
          <div className="divider-gold-center" />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "High-Speed Wi-Fi",
            "Smart TV",
            "Daily Housekeeping",
            "24/7 Concierge",
            "Secure Parking",
            "In-unit Laundry",
            "Premium Bedding",
            "Welcome Pack",
          ].map((label, i) => (
            <div
              key={i}
              className="p-5 text-center transition-all duration-300 card-hover reveal-scale"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              data-delay={String(i + 1)}
            >
              <p
                className="font-lato text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NIGHTSBRIDGE BOOKING ──────────────────────────────────── */}
      <section id="book" className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#C5A46D" }}
          >
            Direct Booking
          </p>
          <h2
            className="font-montserrat text-3xl font-light mb-3"
            style={{ color: "#17233A" }}
          >
            Check Availability &amp;{" "}
            <span className="font-semibold">Book</span>
          </h2>
          <div className="divider-gold-center" style={{ marginBottom: "2rem" }} />
          <p
            className="font-lato text-sm mb-10"
            style={{ color: "#2B2D31" }}
          >
            Book directly for the best rates — powered by NightsBridge for secure,
            instant confirmation.
          </p>
          {/* ── NightsBridge widget ──────────────────────────────────
               Replace NB_PROPERTY_CODE with your actual NightsBridge
               property code once your account is live.
               Correct embed URL: https://app.nightsbridge.com/hotel/NB_PROPERTY_CODE
          ─────────────────────────────────────────────────────────── */}
          <div
            style={{
              border: "1px solid rgba(197,164,109,0.35)",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Interim booking options — remove once NightsBridge is live */}
            <div
              className="flex flex-col items-center justify-center text-center py-12 px-8"
              style={{ backgroundColor: "#F8F3EA" }}
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
                style={{ color: "#17233A" }}
              >
                Online Booking Coming Soon
              </h3>
              <p
                className="font-lato text-sm mb-6 max-w-sm"
                style={{ color: "#2B2D31" }}
              >
                Our NightsBridge direct booking engine is being configured. Book
                now via WhatsApp or email for instant confirmation.
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
                  Reserve via WhatsApp
                </a>
                <a
                  href="mailto:info@urbanstays.co.za?subject=Booking%20Enquiry"
                  className="font-montserrat text-xs tracking-widest uppercase px-6 py-3"
                  style={{ border: "1px solid #C5A46D", color: "#C5A46D" }}
                >
                  Email Booking Team
                </a>
              </div>
            </div>

            {/* Live NightsBridge iframe — uncomment once property code is available
            <iframe
              src="https://app.nightsbridge.com/hotel/NB_PROPERTY_CODE"
              width="100%"
              height="600"
              frameBorder="0"
              title="NightsBridge Booking Widget"
              style={{ display: "block" }}
            />
            */}
          </div>
        </div>
      </section>

      {/* ── SOCIAL SHARE ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p
              className="font-lato text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Share Our Apartments
            </p>
            <h2
              className="font-montserrat text-2xl md:text-3xl font-light mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Help Others Discover{" "}
              <span className="font-semibold" style={{ color: "#C5A46D" }}>
                URBAN STAYS
              </span>
            </h2>
            <div className="divider-gold-center" style={{ marginBottom: "2rem" }} />
            <p
              className="font-lato text-sm max-w-xl mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Know someone looking for luxury accommodation in Sandton? Share our apartments on social media.
            </p>
          </div>
          
          <div className="flex justify-center">
            <SocialShare 
              title="Luxury Serviced Apartments in Sandton - URBAN STAYS"
              description="Explore studio, one-bedroom, and two-bedroom serviced apartments with premium amenities in the heart of Sandton."
            />
          </div>
        </div>
      </section>
    </>
  );
}
