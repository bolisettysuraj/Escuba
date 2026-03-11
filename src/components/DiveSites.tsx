"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Difficulty = "Easy" | "Moderate" | "Advanced";

interface Site {
  name: string;
  depth: string;
  depthMin: number;
  depthMax: number;
  desc: string;
  image: string;
  large?: boolean;
  difficulty: Difficulty;
}

const sites: Site[] = [
  {
    name: "Nemo Reef",
    depth: "5-18m",
    depthMin: 5,
    depthMax: 18,
    desc: "Vibrant clownfish colonies and stunning coral formations",
    image: "/images/divesite-1.webp",
    large: true,
    difficulty: "Easy",
  },
  {
    name: "The Wall",
    depth: "10-30m",
    depthMin: 10,
    depthMax: 30,
    desc: "Dramatic vertical drop-off teeming with marine life",
    image: "/images/divesite-2.webp",
    difficulty: "Moderate",
  },
  {
    name: "Johnny's Gorge",
    depth: "12-25m",
    depthMin: 12,
    depthMax: 25,
    desc: "Encounter manta rays and whale sharks in season",
    image: "/images/marine-1.webp",
    difficulty: "Advanced",
  },
  {
    name: "Inchkeith Wreck",
    depth: "18-28m",
    depthMin: 18,
    depthMax: 28,
    desc: "Historic WWII shipwreck covered in beautiful corals",
    image: "/images/marine-4.webp",
    difficulty: "Advanced",
  },
];

const allSiteNames = [
  "Nemo Reef",
  "The Wall",
  "Dixon's Pinnacle",
  "Pilot Reef",
  "Inchkeith Wreck",
  "White House Rock",
  "Jackson's Bar",
  "Johnny's Gorge",
  "Broken Ledge",
  "Minerva Ledge",
  "Aquarium",
  "The Slope",
  "Red Light House",
  "Tribe Gate",
  "Turtle Beach",
];

const difficultyConfig: Record<
  Difficulty,
  { label: string; dots: number; color: string; glow: string }
> = {
  Easy: {
    label: "Easy",
    dots: 1,
    color: "bg-teal-400",
    glow: "shadow-[0_0_6px_rgba(45,212,191,0.5)]",
  },
  Moderate: {
    label: "Moderate",
    dots: 2,
    color: "bg-gold-400",
    glow: "shadow-[0_0_6px_rgba(251,191,36,0.5)]",
  },
  Advanced: {
    label: "Advanced",
    dots: 3,
    color: "bg-coral-400",
    glow: "shadow-[0_0_6px_rgba(255,107,107,0.5)]",
  },
};

/* ── Compass Rose SVG ── */
function CompassRose() {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      className="w-16 h-16 sm:w-20 sm:h-20 opacity-30"
      initial={{ rotate: -20, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 0.3 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    >
      {/* outer ring */}
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="none"
        stroke="url(#compassGrad)"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* tick marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="40"
          y1="6"
          x2="40"
          y2={angle % 90 === 0 ? "14" : "10"}
          stroke="url(#compassGrad)"
          strokeWidth={angle % 90 === 0 ? "1.5" : "0.8"}
          opacity={angle % 90 === 0 ? "0.8" : "0.4"}
          transform={`rotate(${angle} 40 40)`}
        />
      ))}
      {/* N pointer */}
      <polygon
        points="40,10 44,28 40,24 36,28"
        fill="url(#compassGrad)"
        opacity="0.7"
      />
      {/* S pointer */}
      <polygon
        points="40,70 44,52 40,56 36,52"
        fill="rgba(255,255,255,0.15)"
      />
      {/* E/W pointers */}
      <polygon
        points="70,40 52,44 56,40 52,36"
        fill="rgba(255,255,255,0.15)"
      />
      <polygon
        points="10,40 28,44 24,40 28,36"
        fill="rgba(255,255,255,0.15)"
      />
      {/* center dot */}
      <circle cx="40" cy="40" r="2" fill="url(#compassGrad)" opacity="0.6" />
      {/* cardinal labels */}
      <text
        x="40"
        y="22"
        textAnchor="middle"
        fill="url(#compassGrad)"
        fontSize="6"
        fontWeight="bold"
        opacity="0.8"
      >
        N
      </text>
      <text
        x="40"
        y="64"
        textAnchor="middle"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
      >
        S
      </text>
      <text
        x="63"
        y="42"
        textAnchor="middle"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
      >
        E
      </text>
      <text
        x="17"
        y="42"
        textAnchor="middle"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
      >
        W
      </text>
      <defs>
        <linearGradient id="compassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00a8e8" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/* ── Depth Gauge ── */
function DepthGauge({ depthMin, depthMax }: { depthMin: number; depthMax: number }) {
  const maxDepth = 40;
  const topPct = (depthMin / maxDepth) * 100;
  const bottomPct = (depthMax / maxDepth) * 100;

  return (
    <div className="flex items-stretch gap-2 h-full">
      {/* gauge track */}
      <div className="relative w-1.5 rounded-full bg-white/[0.06] h-full min-h-[60px] overflow-hidden">
        {/* water fill */}
        <motion.div
          className="absolute left-0 right-0 rounded-full"
          style={{
            top: `${topPct}%`,
            bottom: `${100 - bottomPct}%`,
            background:
              "linear-gradient(to bottom, rgba(0,168,232,0.6), rgba(45,212,191,0.4))",
            boxShadow: "0 0 8px rgba(0,168,232,0.3)",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        />
        {/* top marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-ocean-400"
          style={{ top: `${topPct}%` }}
        />
        {/* bottom marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-teal-400"
          style={{ top: `${bottomPct}%` }}
        />
      </div>
      {/* labels */}
      <div className="flex flex-col justify-between text-[10px] font-medium tracking-wide">
        <span className="text-ocean-300">{depthMin}m</span>
        <span className="text-teal-400">{depthMax}m</span>
      </div>
    </div>
  );
}

/* ── Difficulty Badge ── */
function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = difficultyConfig[difficulty];
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              dot <= config.dots
                ? `${config.color} ${config.glow}`
                : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
        {config.label}
      </span>
    </div>
  );
}

/* ── Pill Strip ── */
function PillStrip({
  activeSite,
  onSelect,
}: {
  activeSite: string | null;
  onSelect: (name: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const isFeatured = (name: string) => sites.some((s) => s.name === name);

  return (
    <div className="relative">
      {/* Fade edges */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-deep-950 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-deep-950 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allSiteNames.map((name) => {
          const isActive = activeSite === name;
          const featured = isFeatured(name);
          return (
            <motion.button
              key={name}
              onClick={() => onSelect(name)}
              className={`relative flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-ocean-500/20 text-ocean-300 border border-ocean-500/40"
                  : featured
                  ? "glass text-white/70 hover:text-white hover:bg-white/[0.06]"
                  : "glass text-white/45 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow:
                      "0 0 16px rgba(0,168,232,0.2), inset 0 0 0 1px rgba(0,168,232,0.15)",
                  }}
                  layoutId="pillGlow"
                  transition={{ duration: 0.35, ease }}
                />
              )}
              <i
                className={`fas fa-map-marker-alt text-xs ${
                  isActive
                    ? "text-ocean-400"
                    : featured
                    ? "text-ocean-500/70"
                    : "text-white/20"
                }`}
              />
              {name}
              {featured && !isActive && (
                <span className="w-1 h-1 rounded-full bg-ocean-500/50" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function DiveSites() {
  const [activeSite, setActiveSite] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handlePillSelect = (name: string) => {
    setActiveSite((prev) => (prev === name ? null : name));
    // Scroll the matching card into view if it exists
    const siteIndex = sites.findIndex((s) => s.name === name);
    if (siteIndex !== -1) {
      const el = document.getElementById(`dive-card-${siteIndex}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Card perspective/overlap calculations per card
  const getCardTransform = (index: number) => {
    const rotations = [-2, 1.5, -1, 2];
    return {
      rotateY: rotations[index] || 0,
    };
  };

  return (
    <section id="divesites" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-ocean-500/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header with Compass ── */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Compass Rose */}
          <div className="flex justify-center mb-5">
            <CompassRose />
          </div>

          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Explore Havelock Island
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stunning <span className="text-gradient">Dive Sites</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            15+ magnificent underwater locations waiting to be explored
          </p>
        </motion.div>

        {/* ── Interactive Pill Strip ── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <PillStrip activeSite={activeSite} onSelect={handlePillSelect} />
        </motion.div>

        {/* ── Card Grid with Perspective/Overlap ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-4"
          style={{ perspective: "1200px" }}
        >
          {sites.map((site, i) => {
            const cardTransform = getCardTransform(i);
            const isHighlighted =
              activeSite === site.name || activeSite === null;
            const isHovered = hoveredCard === site.name;

            return (
              <motion.div
                key={site.name}
                id={`dive-card-${i}`}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  site.large
                    ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[360px] sm:min-h-[400px] lg:min-h-[500px]"
                    : "min-h-[280px] sm:min-h-[280px]"
                }`}
                initial={{ opacity: 0, y: 60, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease,
                }}
                whileHover={{
                  y: -12,
                  rotateY: cardTransform.rotateY,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                onHoverStart={() => setHoveredCard(site.name)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{
                  transformStyle: "preserve-3d",
                  opacity: isHighlighted ? 1 : 0.4,
                  transition: "opacity 0.4s ease",
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-95" : "opacity-80"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(1,10,19,0.95) 0%, rgba(1,10,19,0.5) 40%, rgba(1,10,19,0.15) 70%, transparent 100%)",
                  }}
                />

                {/* Top-right: Difficulty badge */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    className="glass-strong rounded-full px-3 py-1.5"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                  >
                    <DifficultyBadge difficulty={site.difficulty} />
                  </motion.div>
                </div>

                {/* Top-left: Depth gauge glass card */}
                <div className="absolute top-4 left-4 z-10">
                  <motion.div
                    className="glass-strong rounded-xl px-3 py-3 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease }}
                  >
                    <DepthGauge
                      depthMin={site.depthMin}
                      depthMax={site.depthMax}
                    />
                  </motion.div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <h3 className="text-lg sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-1.5 group-hover:text-ocean-300 transition-colors duration-300 leading-tight">
                    {site.name}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
                    {site.desc}
                  </p>

                  {/* Explore button -- appears on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease }}
                      >
                        <Link
                          href="/dive-sites"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ocean-500/20 border border-ocean-500/30 text-ocean-300 text-sm font-semibold hover:bg-ocean-500/30 transition-all duration-300 backdrop-blur-sm"
                        >
                          Explore Site
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow:
                      "inset 0 0 0 1px rgba(0,168,232,0.25), 0 0 40px rgba(0,168,232,0.08), 0 8px 32px rgba(0,0,0,0.3)",
                  }}
                />

                {/* gradient-border pseudo */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    background:
                      "linear-gradient(135deg, rgba(0,168,232,0.2) 0%, rgba(45,212,191,0.12) 50%, transparent 100%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── View All CTA ── */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <Link href="/dive-sites">
            <motion.span
              className="group/cta relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white btn-shimmer overflow-hidden cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,168,232,0.15) 0%, rgba(45,212,191,0.1) 100%)",
                border: "1px solid rgba(0,168,232,0.25)",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 30px rgba(0,168,232,0.2), 0 0 60px rgba(0,168,232,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* compass icon */}
              <svg
                className="w-5 h-5 text-ocean-400 group-hover/cta:rotate-45 transition-transform duration-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon
                  points="12,2 14,10 12,8 10,10"
                  fill="currentColor"
                  stroke="none"
                  opacity="0.7"
                />
                <polygon
                  points="12,22 14,14 12,16 10,14"
                  fill="currentColor"
                  stroke="none"
                  opacity="0.3"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>

              <span>
                View All{" "}
                <span className="text-gradient font-bold">15+ Sites</span>
              </span>

              <svg
                className="w-4 h-4 text-ocean-400 group-hover/cta:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
