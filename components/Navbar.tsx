"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",                  label: "Home" },
  { href: "/apartments",        label: "Apartments" },
  { href: "/shuttle-chauffeur", label: "Shuttle & Chauffeur" },
  { href: "/gallery",           label: "Gallery" },
  { href: "/location",          label: "Location" },
  { href: "/contact",           label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scroll detection
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar on scroll
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current + 50) {
          setShowNavbar(false); // Scrolling down
        } else {
          setShowNavbar(true); // Scrolling up
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg =
    isScrolled || menuOpen ? "#17233A" : "transparent";

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out"
      style={{ 
        backgroundColor: headerBg,
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)"
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/PNG/Asset 8@2x.png"
            alt="URBAN STAYS Logo"
            style={{
              height: 80,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-montserrat-medium text-sm tracking-widest uppercase transition-all duration-300 group relative"
              style={{
                color: pathname === link.href ? "#C5A46D" : "rgba(255,255,255,0.85)",
              }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-C9A45C transition-all duration-300 group-hover:w-full"
                style={{ 
                  backgroundColor: pathname === link.href ? "#C5A46D" : "#C5A46D",
                  opacity: pathname === link.href ? 1 : 0.5
                }}
              />
            </Link>
          ))}
          <Link
            href="/apartments#book"
            className="font-montserrat text-xs tracking-widest uppercase transition-all duration-300 ml-4 px-5 py-2"
            style={{
              border: "1px solid #C5A46D",
              color: "#C5A46D",
            }}
          >
            Reserve Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col p-2"
          style={{ gap: 5, background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1,
              backgroundColor: "#FFFFFF",
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1,
              backgroundColor: "#FFFFFF",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1,
              backgroundColor: "#FFFFFF",
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{
            background: "linear-gradient(180deg, #17233A 0%, #1a2844 100%)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-montserrat-medium text-sm tracking-widest uppercase transition-all duration-300 py-3"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                color: pathname === link.href ? "#C5A46D" : "rgba(255,255,255,0.8)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apartments#book"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center font-montserrat text-xs tracking-widest uppercase transition-all duration-300 px-5 py-3"
            style={{ border: "1px solid #C5A46D", color: "#C5A46D" }}
          >
            Reserve Now
          </Link>
        </div>
      )}
    </header>
  );
}
