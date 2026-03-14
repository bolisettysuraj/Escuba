"use client";
import { motion } from "framer-motion";

const trustItems = [
  { icon: "fas fa-certificate", label: "PADI 5-Star Dive Centre", color: "text-ocean-400", glow: "rgba(0,168,232,0.15)" },
  { icon: "fab fa-google", label: "Google 4.9 ★★★★★", color: "text-gold-400", glow: "rgba(251,191,36,0.15)" },
  { icon: "fas fa-award", label: "TripAdvisor Choice 2019–2025", color: "text-[#34e0a1]", glow: "rgba(52,224,161,0.15)" },
  { icon: "fas fa-calendar-check", label: "13+ Years Experience", color: "text-teal-400", glow: "rgba(45,212,191,0.15)" },
  { icon: "fas fa-users", label: "10,000+ Happy Divers", color: "text-ocean-300", glow: "rgba(0,168,232,0.15)" },
  { icon: "fas fa-shield-alt", label: "100% Safety Record", color: "text-teal-400", glow: "rgba(45,212,191,0.15)" },
  { icon: "fas fa-camera", label: "Free Photos & Videos", color: "text-ocean-400", glow: "rgba(0,168,232,0.15)" },
  { icon: "fas fa-map-marked-alt", label: "Havelock Island, Andaman", color: "text-[#34e0a1]", glow: "rgba(52,224,161,0.15)" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-5 sm:py-6 overflow-hidden">
      {/* Top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,168,232,0.2), rgba(45,212,191,0.2), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,168,232,0.2), rgba(45,212,191,0.2), transparent)" }} />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-deep-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-deep-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2 sm:py-2.5 mx-2 sm:mx-3 rounded-full shrink-0"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: `0 0 16px ${item.glow}`,
              }}
            >
              <i className={`${item.icon} ${item.color} text-sm sm:text-base`} />
              <span className="text-white/80 text-xs sm:text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
