"use client";

import { useState } from "react";
import ScrollObserver from "@/components/ScrollObserver";

const categories = ["All", "Apartments", "Interiors", "Shuttle & Chauffeur", "Sandton"];

const galleryItems = [
  { id: 1, category: "Sandton",             src: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.06 PM.jpeg",  alt: "Sandton city view",              aspectClass: "aspect-[4/3]" },
  { id: 2, category: "Apartments",          src: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM.jpeg",  alt: "Rooftop pool area",             aspectClass: "aspect-[3/4]" },
  { id: 3, category: "Interiors",           src: "/images/gallery/WhatsApp Image 2026-08-25 at 12.57.09 PM123.jpeg",  alt: "Restaurant and dining area",       aspectClass: "aspect-[4/3]" },
  { id: 4, category: "Interiors",           src: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM321.jpeg",  alt: "Gym and fitness centre",          aspectClass: "aspect-square" },
  { id: 5, category: "Interiors",           src: "/images/gallery/WhatsApp Image 2026-08-25 at 12.58.25 PM456.jpeg",  alt: "Fitness equipment area",          aspectClass: "aspect-[3/4]" },
  { id: 6, category: "Shuttle & Chauffeur", src: "/images/UrbanStays_Shuttles - Car3.png",  alt: "Executive chauffeur vehicle",       aspectClass: "aspect-[4/3]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <ScrollObserver />
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #17233A 0%, #1a2844 50%, #17233A 100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/WhatsApp Image 2026-08-03 at 5.07.27 PM.jpeg')",
          }}
          aria-hidden="true"
        />
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
            Visual Journey
          </p>
          <h1
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Photo{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              Gallery - URBAN STAYS Apartments
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            A curated glimpse into the URBAN STAYS experience — spaces, moments,
            and the beauty of Sandton living.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ───────────────────────────────────────────── */}
      <section className="pt-8 sm:pt-12 pb-4 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-montserrat text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-200 px-3 sm:px-5 py-1.5 sm:py-2"
              style={
                activeCategory === cat
                  ? { backgroundColor: "#C5A46D", color: "#17233A" }
                  : { border: "1px solid rgba(21,21,21,0.25)", color: "#2B2D31" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ──────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-6 pb-12 sm:pb-20 pt-6 sm:pt-8"
        style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}
      >
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid mb-4 overflow-hidden cursor-pointer group relative ${item.aspectClass}`}
              onClick={() => setLightboxItem(item)}
              style={{ display: "block" }}
            >
              {/* Placeholder background always visible */}
              <div
                className="w-full h-full img-placeholder"
                style={{ minHeight: "clamp(120px, 30vw, 200px)" }}
              >
                {/* Real image sits on top */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.src}')` }}
                  role="img"
                  aria-label={item.alt}
                />
                {/* Label shown until real image loads */}
                <span
                  className="font-lato text-xs tracking-wider relative z-10"
                  style={{ color: "rgba(197,164,109,0.65)" }}
                >
                  {item.alt}
                </span>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(21,21,21,0)",
                    opacity: 0,
                  }}
                />
              </div>
              {/* Zoom icon on hover via CSS group */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                style={{ backgroundColor: "rgba(21,21,21,0.45)" }}
              >
                <div
                  className="p-3"
                  style={{ border: "1px solid rgba(255,255,255,0.6)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-6 right-6 font-lato text-sm tracking-widest uppercase transition-opacity hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.7)", opacity: 0.7 }}
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
          >
            Close ✕
          </button>
          <div
            className="max-w-4xl w-full overflow-hidden relative"
            style={{ minHeight: "50vh", maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              className="w-full h-full"
              style={{ objectFit: "contain", maxHeight: "80vh" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
