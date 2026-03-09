"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* ── Newsletter / CTA Band ── */}
      <motion.section
        className="relative py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        aria-label="Newsletter subscription"
      >
        {/* Subtle gradient background behind the band */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-900/20 to-deep-950" />

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Glass card with gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ocean-500/20 via-teal-500/10 to-ocean-500/20" />
            <div className="absolute inset-[1px] rounded-2xl bg-deep-950/80 backdrop-blur-xl" />

            <div className="relative px-6 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row items-center gap-8">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-white/40 text-sm sm:text-base max-w-md">
                  Get the latest dive conditions, exclusive offers, and underwater
                  stories delivered to your inbox.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubscribe}
                className="flex-1 w-full max-w-md"
              >
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                    className="w-full px-5 py-3.5 pr-36 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-ocean-500/40 focus:shadow-[0_0_0_3px_rgba(0,168,232,0.12)] transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-ocean-500 to-teal-500 text-white text-sm font-semibold hover:shadow-[0_0_24px_rgba(0,168,232,0.4)] transition-all duration-300 btn-shimmer"
                  >
                    {subscribed ? (
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-check" /> Subscribed
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Main Footer ── */}
      <div className="relative border-t border-white/5 pt-16 pb-8">
        {/* Topographic wave pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(0, 168, 232, 0.5) 40px,
                rgba(0, 168, 232, 0.5) 41px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 80px,
                rgba(45, 212, 191, 0.3) 80px,
                rgba(45, 212, 191, 0.3) 81px
              )
            `,
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)",
          }}
        />
        {/* Wave-line decorative overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='200' height='60' viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q25 10 50 30 T100 30 T150 30 T200 30' fill='none' stroke='%2300a8e8' stroke-width='1'/%3E%3Cpath d='M0 45 Q25 25 50 45 T100 45 T150 45 T200 45' fill='none' stroke='%232dd4bf' stroke-width='0.8'/%3E%3C/svg%3E")
            `,
            backgroundSize: "200px 60px",
          }}
        />

        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-ocean-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14"
            aria-label="Footer navigation"
          >
            {/* ── Brand ── */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <Image
                  src="/logo.png"
                  alt="Experience Scuba"
                  width={200}
                  height={50}
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                />
                <span className="w-px h-7 sm:h-8 lg:h-10 bg-white/15 shrink-0" />
                <Image
                  src="/PADI.png"
                  alt="PADI Certified"
                  width={80}
                  height={40}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </div>
              <p className="font-display text-lg text-gradient font-semibold italic mb-3 tracking-wide">
                Dive Deeper. Explore Further.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Your gateway to the breathtaking underwater world of the Andaman
                Islands. PADI certified dive centre with 13+ years of experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-gold-400">
                  <i className="fas fa-award" /> TripAdvisor 2024
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-gold-400">
                  <i className="fas fa-medal" /> Tourism Gold
                </span>
              </div>

              {/* Social Icons - Larger and more dramatic */}
              <div className="flex gap-3">
                {[
                  {
                    icon: "fab fa-whatsapp",
                    label: "WhatsApp",
                    ariaLabel: "Follow us on WhatsApp",
                    hoverBg: "rgba(37,211,102,0.2)",
                    hoverColor: "#25D366",
                    hoverShadow: "0 0 20px rgba(37,211,102,0.3)",
                  },
                  {
                    icon: "fab fa-facebook-f",
                    label: "Facebook",
                    ariaLabel: "Follow us on Facebook",
                    hoverBg: "rgba(59,89,152,0.2)",
                    hoverColor: "#3B5998",
                    hoverShadow: "0 0 20px rgba(59,89,152,0.3)",
                  },
                  {
                    icon: "fab fa-instagram",
                    label: "Instagram",
                    ariaLabel: "Follow us on Instagram",
                    hoverBg: "rgba(225,48,108,0.2)",
                    hoverColor: "#E1306C",
                    hoverShadow: "0 0 20px rgba(225,48,108,0.3)",
                  },
                  {
                    icon: "fab fa-youtube",
                    label: "YouTube",
                    ariaLabel: "Follow us on YouTube",
                    hoverBg: "rgba(255,0,0,0.15)",
                    hoverColor: "#FF0000",
                    hoverShadow: "0 0 20px rgba(255,0,0,0.25)",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/30 transition-all duration-300"
                    aria-label={s.ariaLabel}
                    whileHover={{
                      scale: 1.2,
                      y: -4,
                      backgroundColor: s.hoverBg,
                      color: s.hoverColor,
                      boxShadow: s.hoverShadow,
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: undefined }}
                  >
                    <i className={`${s.icon} text-base`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Quick Links ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-px bg-gradient-to-r from-ocean-500 to-transparent" />
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Non-Swimmers", href: "/non-swimmers" },
                  { label: "PADI Courses", href: "/courses" },
                  {
                    label: "Specialty Courses",
                    href: "/padi-speciality-courses-andaman",
                  },
                  { label: "Dive Sites", href: "/dive-sites" },
                  { label: "Kids Programs", href: "/kids" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact Us", href: "/contact" },
                  {
                    label: "Terms & Conditions",
                    href: "/terms-and-conditions",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link text-white/40 text-sm hover:text-ocean-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-ocean-400 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Experiences ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-px bg-gradient-to-r from-ocean-500 to-transparent" />
                Experiences
              </h4>
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Shore Diving",
                    href: "/non-swimmers/shore-scuba-diving",
                  },
                  {
                    label: "Boat Diving",
                    href: "/non-swimmers/boat-scuba-diving-havelock",
                  },
                  {
                    label: "Snorkeling",
                    href: "/non-swimmers/skin-diver-snorkeling-havelock",
                  },
                  { label: "Kids Programs", href: "/kids" },
                  {
                    label: "Specialty Courses",
                    href: "/padi-speciality-courses-andaman",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="footer-link text-white/40 text-sm hover:text-ocean-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-ocean-400 transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Contact ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-px bg-gradient-to-r from-ocean-500 to-transparent" />
                Contact Info
              </h4>
              <div className="space-y-4 text-sm text-white/40">
                <p className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-500/15 to-teal-500/10 flex items-center justify-center mt-0.5">
                    <i className="fas fa-map-marker-alt text-ocean-400 text-xs" />
                  </span>
                  <span className="leading-relaxed">
                    Beach No.5, Havelock Island, Andaman
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-500/15 to-teal-500/10 flex items-center justify-center">
                    <i className="fas fa-phone text-ocean-400 text-xs" />
                  </span>
                  <a
                    href="tel:+916364360134"
                    className="hover:text-ocean-400 transition-colors"
                  >
                    +91 6364360134
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-500/15 to-teal-500/10 flex items-center justify-center mt-0.5">
                    <i className="fas fa-envelope text-ocean-400 text-xs" />
                  </span>
                  <a
                    href="mailto:experiencescubadive.andaman@gmail.com"
                    className="hover:text-ocean-400 transition-colors break-all leading-relaxed"
                  >
                    experiencescubadive.andaman@gmail.com
                  </a>
                </p>
              </div>

              {/* ── Google Maps / Location Card ── */}
              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Beach+No.5+Havelock+Island+Andaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl overflow-hidden border border-white/[0.06] hover:border-ocean-500/20 transition-all duration-500"
                  aria-label="View location on Google Maps"
                >
                  <div className="relative h-28 bg-gradient-to-br from-deep-800 to-deep-900 flex items-center justify-center overflow-hidden">
                    {/* Decorative map grid */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0,168,232,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,168,232,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Decorative coastline */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-10"
                      viewBox="0 0 200 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 60 Q30 40 60 55 T120 50 T180 45 L200 48 L200 100 L0 100 Z"
                        fill="rgba(0,168,232,0.3)"
                      />
                      <path
                        d="M0 70 Q40 55 80 65 T160 58 L200 62 L200 100 L0 100 Z"
                        fill="rgba(45,212,191,0.15)"
                      />
                    </svg>
                    {/* Pin icon */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5 group-hover:scale-110 transition-transform duration-500">
                      <span className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500/30 to-teal-500/20 backdrop-blur-sm flex items-center justify-center border border-ocean-500/20 group-hover:shadow-[0_0_16px_rgba(0,168,232,0.3)] transition-shadow duration-500">
                        <i className="fas fa-map-marker-alt text-ocean-400 text-sm" />
                      </span>
                      <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium group-hover:text-ocean-400/60 transition-colors duration-300">
                        View on Map
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </nav>

          {/* ── Bottom Bar ── */}
          <motion.div
            className="relative pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            {/* Gradient separator line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500/25 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-ocean-500/40 via-teal-500/50 to-ocean-500/40 blur-[1px]" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-white/30 text-sm">
                  &copy; 2026 Experience Scuba. All Rights Reserved.
                </p>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/15" />
                <p className="text-white/20 text-xs">
                  Designed &amp; Developed by{" "}
                  <span className="text-ocean-500/50 hover:text-ocean-400 transition-colors duration-300">
                    ExperienceScuba Digital
                  </span>
                </p>
              </div>

              <p className="text-white/20 text-xs flex items-center gap-1.5">
                <i className="fas fa-anchor text-ocean-500/30 text-[10px]" />
                Havelock Island, Andaman &amp; Nicobar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
