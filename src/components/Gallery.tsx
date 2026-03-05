"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { name: "Manta Ray", image: "/images/marine-1.webp", className: "row-span-2" },
  { name: "Sea Turtle", image: "/images/marine-2.webp", className: "" },
  { name: "Coral Gardens", image: "/images/marine-3.webp", className: "" },
  { name: "Tropical Fish", image: "/images/marine-4.webp", className: "col-span-2" },
  { name: "Whale Shark", image: "/images/marine-5.webp", className: "" },
  { name: "Zebra Shark", image: "/images/marine-6.webp", className: "row-span-2" },
];

export default function Gallery() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Underwater Wonders
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Marine Life <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${item.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, zIndex: 10, transition: { duration: 0.3 } }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-sm">
                  {item.name}
                </span>
              </div>
              {/* Subtle glow border */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.25)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
