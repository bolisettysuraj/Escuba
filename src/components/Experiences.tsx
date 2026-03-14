"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Shore Diving",
    tag: "Most Popular",
    icon: "fa-water",
    image: "/images/shore-diving.webp",
    desc: "Perfect for first-timers. Enter the water directly from the beach, guided by our experts into a magical underwater world.",
    features: ["No experience needed", "Beach entry", "All equipment included"],
    color: "from-cyan-500 to-blue-600",
    price: "₹3,500",
    number: "01",
  },
  {
    title: "Boat Diving",
    tag: "Premium",
    icon: "fa-ship",
    image: "/images/boat-diving.webp",
    desc: "Taken by boat to stunning dive locations. See marine life in deeper waters with incredible visibility.",
    features: [
      "Deeper dive sites",
      "Boat ride included",
      "Photos & videos included",
    ],
    featured: true,
    color: "from-ocean-500 to-teal-500",
    price: "₹4,500",
    number: "02",
  },
  {
    title: "Snorkeling",
    tag: "Fun & Easy",
    icon: "fa-person-swimming",
    image: "/images/snorkeling.webp",
    desc: "Float on the surface and witness stunning coral gardens and colorful fish below. Perfect for families.",
    features: ["Surface-level fun", "Family friendly", "Gear provided"],
    color: "from-teal-400 to-emerald-500",
    price: "₹1,500",
    number: "03",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Ambient background blurs */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            For Non-Swimmers &amp; Beginners
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Unforgettable <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            No swimming skills needed. Just bring your sense of adventure.
          </p>
        </motion.div>

        {/* Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-auto">
          {experiences.map((exp, i) => {
            const isFeatured = !!exp.featured;

            return (
              <motion.a
                key={exp.title}
                href="#"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease,
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer block ${
                  isFeatured
                    ? "lg:col-span-7 lg:row-span-2 min-h-[300px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-0"
                    : "lg:col-span-5 min-h-[280px] sm:min-h-[340px] md:min-h-[340px]"
                }`}
              >
                {/* ── Full-bleed background image ── */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
                    }
                  />
                  {/* Dark gradient overlay (always) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/60 to-transparent" />
                  {/* Blue tint overlay (intensifies on hover) */}
                  <div className="absolute inset-0 bg-ocean-800/0 group-hover:bg-ocean-800/25 transition-colors duration-700" />
                </div>

                {/* ── Left decorative gradient line ── */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] z-10">
                  <div
                    className="w-full bg-gradient-to-b from-ocean-400 to-teal-400 rounded-full transition-all duration-500 ease-out group-hover:h-3/4 h-1/4"
                  />
                </div>

                {/* ── Price badge (top-left glass pill) ── */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2" style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span className="text-white/90 text-[10px] sm:text-xs font-medium">
                      from
                    </span>
                    <span className="text-gold-400 font-bold text-xs sm:text-sm tracking-wide">
                      {exp.price}
                    </span>
                    <span className="text-white/90 text-[10px] sm:text-xs font-medium">
                      / person
                    </span>
                  </div>
                </div>

                {/* ── Tag badge ── */}
                <div className="absolute top-11 sm:top-14 left-3 sm:left-4 z-10">
                  <span
                    className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                  >
                    {exp.tag}
                  </span>
                </div>

                {/* ── Large numbered indicator (top-right) ── */}
                <div className="absolute top-4 right-5 z-10 pointer-events-none">
                  <span
                    className="font-[family-name:var(--font-display)] font-bold text-white/[0.07] leading-none select-none"
                    style={{
                      fontSize: isFeatured ? "8rem" : "5.5rem",
                    }}
                  >
                    {exp.number}
                  </span>
                </div>

                {/* ── Content overlay at bottom ── */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 flex flex-col justify-end">
                  {/* Title + icon row */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-ocean-500/20 transition-colors duration-300">
                      <i
                        className={`fas ${exp.icon} text-ocean-400 text-[10px] sm:text-sm group-hover:text-ocean-300 transition-colors`}
                      />
                    </div>
                    <h3
                      className={`font-[family-name:var(--font-display)] font-bold text-white transition-all duration-500 leading-tight ${
                        isFeatured
                          ? "text-lg sm:text-2xl lg:text-3xl"
                          : "text-base sm:text-xl lg:text-2xl"
                      }`}
                    >
                      {exp.title}
                    </h3>
                  </div>

                  {/* Description — hidden on small mobile */}
                  <p
                    className={`hidden sm:block text-white/50 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none ${
                      isFeatured
                        ? "text-sm lg:text-base max-w-lg"
                        : "text-sm max-w-md"
                    }`}
                  >
                    {exp.desc}
                  </p>

                  {/* Feature list with gradient dots */}
                  <ul className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1 sm:gap-y-2 mb-3 sm:mb-5">
                    {exp.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-white/60"
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Book Now bar -- transforms to full-width on hover */}
                  <div className="relative h-9 sm:h-10 overflow-hidden rounded-lg">
                    {/* Default state */}
                    <div className="absolute inset-0 flex items-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-full">
                      <span className="text-sm font-semibold text-ocean-400 flex items-center gap-2">
                        Book Now
                        <i className="fas fa-arrow-right text-xs" />
                      </span>
                    </div>

                    {/* Hover state: full-width bottom bar */}
                    <div className="absolute inset-0 flex items-center justify-center glass rounded-lg opacity-0 translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-ocean-500/10">
                      <span className="text-sm font-semibold text-white flex items-center gap-3">
                        Book Now
                        <motion.i
                          className="fas fa-arrow-right text-xs text-ocean-300"
                          initial={false}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Subtle border glow on hover ── */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(0,168,232,0.2), 0 0 40px rgba(0,168,232,0.08)",
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
