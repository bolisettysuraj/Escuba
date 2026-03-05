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
  },
  {
    title: "Boat Diving",
    tag: "Premium",
    icon: "fa-ship",
    image: "/images/boat-diving.webp",
    desc: "Taken by boat to stunning dive locations. See marine life in deeper waters with incredible visibility.",
    features: ["Deeper dive sites", "Boat ride included", "Photos & videos included"],
    featured: true,
    color: "from-ocean-500 to-teal-500",
  },
  {
    title: "Snorkeling",
    tag: "Fun & Easy",
    icon: "fa-person-swimming",
    image: "/images/snorkeling.webp",
    desc: "Float on the surface and witness stunning coral gardens and colorful fish below. Perfect for families.",
    features: ["Surface-level fun", "Family friendly", "Gear provided"],
    color: "from-teal-400 to-emerald-500",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            For Non-Swimmers & Beginners
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Unforgettable <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            No swimming skills needed. Just bring your sense of adventure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl overflow-hidden ${
                exp.featured ? "ring-1 ring-ocean-400/30 shadow-lg shadow-ocean-500/10" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/20 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-md`}>
                  {exp.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <i className={`fas ${exp.icon} text-ocean-400`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{exp.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {exp.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <i className="fas fa-check text-teal-400 text-xs" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-400 group/link"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <i className="fas fa-arrow-right text-xs" />
                </motion.a>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.15), 0 0 30px rgba(0,168,232,0.05)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
