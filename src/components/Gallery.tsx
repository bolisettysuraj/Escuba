"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface GalleryItem {
  name: string;
  scientific: string;
  image: string;
  span: string;
  mobileSpan?: string;
}

const items: GalleryItem[] = [
  {
    name: "Manta Ray",
    scientific: "Mobula birostris",
    image: "/images/marine-1.webp",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Sea Turtle",
    scientific: "Chelonia mydas",
    image: "/images/marine-2.webp",
    span: "md:col-span-2",
  },
  {
    name: "Coral Gardens",
    scientific: "Acropora spp.",
    image: "/images/marine-3.webp",
    span: "",
  },
  {
    name: "Tropical Fish",
    scientific: "Amphiprion ocellaris",
    image: "/images/marine-4.webp",
    span: "",
  },
  {
    name: "Whale Shark",
    scientific: "Rhincodon typus",
    image: "/images/marine-5.webp",
    span: "md:col-span-2",
  },
  {
    name: "Zebra Shark",
    scientific: "Stegostoma tigrinum",
    image: "/images/marine-6.webp",
    span: "",
  },
];

/* ── Individual gallery card with parallax ── */
function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      {/* Parallax image wrapper */}
      <motion.div className="absolute inset-[-12%]" style={{ y }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </motion.div>

      {/* Base gradient — always visible, keeps bottom readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-950/60 via-transparent to-transparent" />

      {/* Hover overlay — deep blue gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-ocean-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image counter pill — top-right */}
      <div className="absolute top-3 right-3 z-10">
        <div className="glass rounded-full px-2.5 py-1 text-[10px] font-medium text-white/60 tracking-wide">
          {index + 1}/{items.length}
        </div>
      </div>

      {/* Center "View" button — fades in on hover */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          className="flex items-center gap-2 glass-strong rounded-full px-5 py-2.5 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 pointer-events-auto"
          aria-hidden="true"
        >
          {/* Zoom-in icon */}
          <svg
            className="w-4 h-4 text-ocean-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.35-4.35M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
            View
          </span>
        </motion.div>
      </div>

      {/* Species label — slides up from bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-white font-semibold text-sm sm:text-base drop-shadow-lg group-hover:text-ocean-300 transition-colors duration-300 font-[family-name:var(--font-display)]">
            {item.name}
          </h3>
          <p className="text-white/0 group-hover:text-white/50 text-xs italic tracking-wide transition-all duration-500 delay-75 mt-0.5 translate-y-3 group-hover:translate-y-0">
            {item.scientific}
          </p>
        </div>
      </div>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(0,168,232,0.25), 0 0 30px rgba(0,168,232,0.08)",
        }}
      />
    </motion.div>
  );
}

/* ── Main Gallery section ── */
export default function Gallery() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Ambient blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-ocean-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-teal-400/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-block text-ocean-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Underwater Wonders
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Marine Life <span className="text-gradient">Gallery</span>
          </h2>

          {/* Decorative line element */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-ocean-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-400/60" />
            <div className="h-px w-20 bg-gradient-to-r from-ocean-400/50 via-teal-400/40 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400/50" />
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 sm:gap-4">
          {items.map((item, i) => (
            <GalleryCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
