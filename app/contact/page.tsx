"use client";

import { useState } from "react";
import ScrollObserver from "@/components/ScrollObserver";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const waMessage = encodeURIComponent(
    "Hi URBAN STAYS! I'd like to get in touch regarding an enquiry."
  );

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid rgba(21,21,21,0.2)",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-montserrat, 'Montserrat', sans-serif)",
    fontSize: "0.875rem",
    color: "#17233A",
    backgroundColor: "#FFFFFF",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-montserrat, 'Montserrat', sans-serif)",
    fontSize: "0.625rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#17233A",
    marginBottom: "0.5rem",
  };

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
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center reveal-scale">
          <p
            className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "#C5A46D" }}
          >
            Get in Touch
          </p>
          <h1
            className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-5 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Contact{" "}
            <span className="font-semibold" style={{ color: "#C5A46D" }}>
              URBAN STAYS Sandton
            </span>
          </h1>
          <div className="divider-gold-center" style={{ marginBottom: "1.5rem" }} />
          <p
            className="font-lato text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Our team is ready to assist with bookings, enquiries, and anything else
            you need.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #F2EDDF 50%, #F7F3EA 100%)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* ── Contact Info ── */}
          <div className="md:col-span-2 reveal-left flex flex-col justify-center">
            <p
              className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3"
              style={{ color: "#C5A46D" }}
            >
              Reach Us Directly
            </p>
            <h2
              className="font-montserrat text-xl sm:text-2xl font-light mb-4 sm:mb-5"
              style={{ color: "#17233A" }}
            >
              We'd Love to
              <br />
              <span className="font-semibold">Hear from You</span>
            </h2>
            <div className="divider-gold" />

            <div
              className="mt-6"
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* WhatsApp */}
              <div>
                <h3 style={{ ...labelStyle, marginBottom: "0.4rem" }}>WhatsApp</h3>
                <a
                  href={`https://wa.me/923401313713?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lato text-sm"
                  style={{ color: "#C5A46D" }}
                >
                  +92 340 1313713
                </a>
              </div>
              {/* Email */}
              <div>
                <h3 style={{ ...labelStyle, marginBottom: "0.4rem" }}>Email</h3>
                <a
                  href="mailto:info@urbanstays.co.za"
                  className="font-lato text-sm"
                  style={{ color: "#C5A46D" }}
                >
                  info@urbanstays.co.za
                </a>
              </div>
              {/* Address */}
              <div>
                <h3 style={{ ...labelStyle, marginBottom: "0.4rem" }}>Address</h3>
                <address
                  className="font-lato text-sm leading-relaxed"
                  style={{ fontStyle: "normal", color: "#2B2D31" }}
                >
                  Masingita Hotel
                  <br />
                  Sandton, Johannesburg
                  <br />
                  Gauteng, South Africa
                </address>
              </div>
              {/* Hours */}
              <div>
                <h3 style={{ ...labelStyle, marginBottom: "0.4rem" }}>
                  Reception Hours
                </h3>
                <p className="font-lato text-sm" style={{ color: "#2B2D31" }}>
                  24/7 — We never close.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 style={{ ...labelStyle, marginBottom: "1rem" }}>Follow Us</h3>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/urbanstays", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
                  { label: "Facebook", href: "https://facebook.com/urbanstays", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> },
                  { label: "TikTok", href: "https://tiktok.com/@urbanstays", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" /></svg> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="transition-all duration-300 hover:scale-110"
                    style={{
                      width: 44,
                      height: 44,
                      border: "1px solid rgba(21,21,21,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2B2D31",
                      borderRadius: "0.5rem",
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="md:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 px-8"
                style={{
                  border: "1px solid rgba(197,164,109,0.3)",
                  backgroundColor: "#FFFFFF",
                  height: "100%",
                }}
              >
                <div
                  className="flex items-center justify-center mb-6"
                  style={{
                    width: 48,
                    height: 48,
                    border: "1px solid #C5A46D",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C5A46D"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-montserrat text-xl font-semibold mb-3"
                  style={{ color: "#17233A" }}
                >
                  Message Received
                </h3>
                <p
                  className="font-lato text-sm max-w-sm"
                  style={{ color: "#2B2D31" }}
                >
                  Thank you for reaching out. A member of our team will be in touch
                  with you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-4 sm:p-6 md:p-8"
                style={{
                  border: "1px solid rgba(197,164,109,0.2)",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 00 000 0000"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" style={labelStyle}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option>General Enquiry</option>
                      <option>Apartment Booking</option>
                      <option>Shuttle &amp; Chauffeur</option>
                      <option>Extended Stay</option>
                      <option>Corporate Rates</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-shimmer font-montserrat text-xs font-semibold tracking-[0.2em] uppercase w-full py-4"
                  style={{
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "none",
                    borderRadius: "0.375rem",
                  }}
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
                <p
                  className="font-lato text-xs text-center"
                  style={{ color: "rgba(74,74,74,0.6)" }}
                >
                  Prefer instant response?{" "}
                  <a
                    href={`https://wa.me/923401313713?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#C5A46D" }}
                  >
                    Message us on WhatsApp
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
