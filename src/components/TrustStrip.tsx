"use client";
import { motion } from "framer-motion";

const trustItems = [
  { icon: "fas fa-certificate", label: "PADI 5-Star", sublabel: "Dive Centre", color: "text-ocean-400" },
  { icon: "fab fa-google", label: "4.9 Rating", sublabel: "on Google", color: "text-gold-400" },
  { icon: "fas fa-award", label: "Travellers' Choice", sublabel: "2019 – 2025", color: "text-[#34e0a1]" },
  { icon: "fas fa-calendar-check", label: "13+ Years", sublabel: "Experience", color: "text-teal-400" },
  { icon: "fas fa-users", label: "10,000+", sublabel: "Happy Divers", color: "text-ocean-300" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden">
      {/* Top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,168,232,0.15), rgba(45,212,191,0.15), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,168,232,0.15), rgba(45,212,191,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between sm:justify-center gap-4 sm:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide py-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2 sm:gap-3 shrink-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.04)" }}>
                <i className={`${item.icon} ${item.color} text-xs sm:text-sm`} />
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-[10px] sm:text-sm leading-tight font-[family-name:var(--font-display)]">
                  {item.label}
                </div>
                <div className="text-white/35 text-[8px] sm:text-xs leading-tight">
                  {item.sublabel}
                </div>
              </div>

              {/* Divider (not after last item) */}
              {i < trustItems.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-white/[0.06] ml-4 sm:ml-6 lg:ml-8" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
