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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click (mouse + touch)
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/PNG/Asset 6@2x.png"
            alt="URBAN STAYS Logo"
            className="w-auto object-contain transition-all duration-400"
            style={{
              height: "clamp(56px, 12vw, 96px)",
              filter: "drop-shadow(0 0 0 transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(197,164,109,0.6))";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 0 transparent)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-montserrat-medium text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 group relative whitespace-nowrap"
              style={{
                color: pathname === link.href ? "#C5A46D" : "rgba(255,255,255,0.85)",
              }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ 
                  backgroundColor: "#C5A46D",
                  opacity: pathname === link.href ? 1 : 0.5
                }}
              />
            </Link>
          ))}
          <Link
            href="/apartments#book"
            className="btn-outline-gold font-montserrat text-xs tracking-widest uppercase ml-2 xl:ml-4 px-4 xl:px-5 py-2"
          >
            Reserve Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="lg:hidden flex flex-col p-2"
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
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 sm:px-6 pb-6"
          style={{
            background: "linear-gradient(180deg, #17233A 0%, #1a2844 100%)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
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
            className="btn-outline-gold block mt-4 text-center font-montserrat text-xs tracking-widest uppercase px-5 py-3"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </header>
  );
}
