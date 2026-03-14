"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
  {
    title: "Non-Swimmers & Beginners",
    subtitle: "No experience needed",
    href: "/non-swimmers",
    icon: "fa-water",
    image: "/images/shore-diving.webp",
    price: "1,500",
    color: "from-cyan-500 to-blue-600",
    features: ["Shore & boat diving", "Snorkeling", "All equipment included"],
    number: "01",
  },
  {
    title: "PADI Scuba Courses",
    subtitle: "Get certified worldwide",
    href: "/courses",
    icon: "fa-certificate",
    image: "/images/boat-diving.webp",
    price: "8,000",
    color: "from-ocean-500 to-teal-500",
    features: ["Open Water to Divemaster", "Internationally recognized", "Expert instructors"],
    number: "02",
  },
  {
    title: "PADI Specialty Courses",
    subtitle: "Master advanced skills",
    href: "/padi-speciality-courses-andaman",
    icon: "fa-star",
    image: "/images/marine-1.webp",
    price: "8,000",
    color: "from-teal-400 to-emerald-500",
    features: ["Deep diving", "Night diving", "Wreck diving & more"],
    number: "03",
  },
];

export default function DiveCategories() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Ambient blurs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-ocean-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-teal-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Choose Your Path
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Whether you&apos;re a first-timer or a seasoned diver, we have the perfect program for you
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={cat.href}
                className="group relative block rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[360px]"
              >
                {/* Background image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/70 to-deep-950/20" />
                  <div className="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/20 transition-colors duration-700" />
                </div>

                {/* Left accent line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] z-10">
                  <div className={`w-full bg-gradient-to-b ${cat.color} rounded-full transition-all duration-500 ease-out group-hover:h-2/3 h-1/4`} />
                </div>

                {/* Large decorative number */}
                <div className="absolute top-3 right-4 z-[1] pointer-events-none select-none">
                  <span
                    className="font-[family-name:var(--font-display)] font-bold text-white/[0.06] leading-none"
                    style={{ fontSize: "5.5rem" }}
                  >
                    {cat.number}
                  </span>
                </div>

                {/* Top: Price pill */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1.5 rounded-full flex items-center gap-1.5" style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span className="text-white/90 text-[11px] font-medium">From</span>
                    <span className="text-gold-400 font-bold text-sm">&#8377;{cat.price}</span>
                    <span className="text-white/90 text-[10px] font-medium">/ person</span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 flex flex-col justify-end">
                  {/* Icon + title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-ocean-500/20 transition-colors duration-300">
                      <i className={`fas ${cat.icon} text-ocean-400 text-sm group-hover:text-ocean-300 transition-colors`} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-ocean-100 transition-colors duration-300">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-white/50 text-xs sm:text-sm mb-3">
                    {cat.subtitle}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="relative h-9 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-full">
                      <span className="text-sm font-semibold text-ocean-400 flex items-center gap-2">
                        Book Now
                        <i className="fas fa-arrow-right text-xs" />
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center glass rounded-lg opacity-0 translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-ocean-500/10">
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        Book Now
                        <i className="fas fa-arrow-right text-xs text-ocean-300" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.2), 0 0 40px rgba(0,168,232,0.08)",
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
