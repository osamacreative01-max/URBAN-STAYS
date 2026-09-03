"use client";

import { useState } from "react";
import Image from "next/image";

interface ApartmentImageCarouselProps {
  images: string[];
}

export default function ApartmentImageCarousel({ images }: ApartmentImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative" style={{ aspectRatio: "4/3", borderRadius: "0.5rem" }}>
      <Image
        src={images[currentIndex]}
        alt={`Two Bedroom Apartment view ${currentIndex + 1}`}
        fill
        priority={currentIndex === 0}
        className="object-cover rounded-lg transition-opacity duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors"
        style={{ backgroundColor: "rgba(23,35,58,0.7)", color: "#FFFFFF" }}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors"
        style={{ backgroundColor: "rgba(23,35,58,0.7)", color: "#FFFFFF" }}
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full text-xs font-montserrat"
        style={{ backgroundColor: "rgba(23,35,58,0.7)", color: "#C5A46D" }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}