"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const titleReveal = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 1, ease } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};
const badgePop = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

function AnimatedCounter({ target, suffix = "+", isRating }: { target: number | string; suffix?: string; isRating?: boolean }) {
  const [count, setCount] = useState(0);
  const numericTarget = typeof target === "string" ? parseFloat(target) || 0 : target;

  useEffect(() => {
    let start = 0;
    const step = numericTarget / (1800 / 16);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += step;
        if (start >= numericTarget) {
          setCount(numericTarget);
          clearInterval(interval);
        } else {
          setCount(isRating ? parseFloat(start.toFixed(1)) : Math.floor(start));
        }
      }, 16);
    }, 1000);
    return () => clearTimeout(timer);
  }, [numericTarget, isRating]);

  let display: string | number;
  if (isRating) {
    display = count.toFixed(1);
  } else if (numericTarget >= 1000) {
    display = `${Math.floor(count / 1000)}K`;
  } else {
    display = count;
  }

  return (
    <>
      {display}
      <span className="text-ocean-400">{suffix}</span>
    </>
  );
}

function TrustBadges({ mobile = false }: { mobile?: boolean }) {
  const badges = [
    {
      icon: "fas fa-award",
      label: "TripAdvisor Travellers&apos; Choice",
      value: "2019 – 2025",
      gradient: "from-[#34e0a1] to-[#00af87]",
      glow: "rgba(52,224,161,0.25)",
      iconColor: "text-[#34e0a1]",
      borderColor: "rgba(52,224,161,0.25)",
      bgColor: "rgba(52,224,161,0.08)",
    },
    {
      icon: "fab fa-google",
      label: "Google Rated",
      value: "4.9",
      stars: true,
      gradient: "from-gold-400 to-[#f59e0b]",
      glow: "rgba(251,191,36,0.25)",
      iconColor: "text-gold-400",
      borderColor: "rgba(251,191,36,0.25)",
      bgColor: "rgba(251,191,36,0.08)",
    },
    {
      icon: "fas fa-users",
      label: "Happy Divers",
      value: "10,000+",
      gradient: "from-ocean-400 to-teal-400",
      glow: "rgba(0,168,232,0.25)",
      iconColor: "text-ocean-400",
      borderColor: "rgba(0,168,232,0.25)",
      bgColor: "rgba(0,168,232,0.08)",
    },
  ];

  if (mobile) {
    return (
      <div className="flex flex-col gap-2.5">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            variants={badgePop}
            className="flex items-center gap-3 rounded-xl px-4 py-3 backdrop-blur-xl"
            style={{
              background: `linear-gradient(135deg, rgba(1,10,19,0.85), rgba(1,10,19,0.7))`,
              border: `1px solid ${b.borderColor}`,
              boxShadow: `0 0 20px ${b.glow}, 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `linear-gradient(135deg, ${b.borderColor}, transparent)` }}
            >
              <i className={`${b.icon} ${b.iconColor} text-sm`} />
            </div>
            <div className="min-w-0">
              <div
                className="text-[10px] leading-none font-semibold mb-1.5 text-white/80"
                dangerouslySetInnerHTML={{ __html: b.label }}
              />
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-base font-[family-name:var(--font-display)] leading-none">
                  {b.value}
                </span>
                {b.stars && (
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <i key={j} className="fas fa-star text-gold-400 text-sm" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-5 lg:gap-6 flex-wrap">
      {badges.map((b, i) => (
        <motion.div
          key={i}
          variants={badgePop}
          className="group relative flex items-center gap-3.5 rounded-2xl px-5 py-4 cursor-default backdrop-blur-xl min-w-[200px]"
          style={{
            background: `linear-gradient(135deg, rgba(1,10,19,0.85), rgba(1,10,19,0.7))`,
            border: `1px solid ${b.borderColor}`,
            boxShadow: `0 0 30px ${b.glow}, 0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`,
            WebkitBackdropFilter: "blur(24px)",
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: `0 0 50px ${b.glow}, 0 8px 32px ${b.glow}, inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg, ${b.borderColor}, rgba(1,10,19,0.5))` }}
          >
            <i className={`${b.icon} ${b.iconColor} text-lg`} />
          </div>
          <div>
            <div
              className="text-xs leading-none font-semibold mb-1.5 text-white/80"
              dangerouslySetInnerHTML={{ __html: b.label }}
            />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base font-[family-name:var(--font-display)] leading-none">
                {b.value}
              </span>
              {b.stars && (
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <i key={j} className="fas fa-star text-gold-400 text-base" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentY = useTransform(scrollY, [0, 600], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* ── BACKGROUND ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* MOBILE: Full-bleed image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/about-main.jpeg"
            alt="Underwater diving"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-950/70 via-deep-950/50 to-deep-950/90" />
          <div className="absolute inset-0 bg-deep-950/40" />
        </div>

        {/* DESKTOP: YouTube video */}
        <div className="hidden md:block absolute inset-0 overflow-hidden bg-deep-950">
          <div className="absolute inset-[-15%] pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/vPkikG3TTcY?autoplay=1&mute=1&loop=1&playlist=vPkikG3TTcY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&start=2"
              title="Experience Scuba promotional video"
              className="w-full h-full"
              style={{ border: "none", transform: "scale(1.4)" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-950/75 via-deep-950/35 to-deep-950/85" />
          <div className="absolute inset-0 bg-deep-950/25" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 25%, rgba(1,10,19,0.5) 100%)" }} />
        </div>
      </motion.div>

      {/* Ambient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 -left-20 md:-left-32 w-52 md:w-96 h-52 md:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,168,232,0.2), transparent)" }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 md:-right-32 w-44 md:w-80 h-44 md:h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.15), transparent)" }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Extra accent orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 md:w-72 h-40 md:h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.08), transparent)" }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: contentY, opacity }}
      >
        {/* ── MOBILE ── */}
        {isMobile && (
            <motion.div
              className="relative z-10 w-full px-5"
              style={{ paddingTop: "90px", paddingBottom: "28px" }}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* PADI badge — bigger, glowing */}
              <motion.div variants={fadeUp} className="flex justify-center" style={{ marginBottom: "36px" }}>
                <div
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
                  style={{ background: "rgba(0,168,232,0.08)", border: "1px solid rgba(0,168,232,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 0 20px rgba(0,168,232,0.1)" }}
                >
                  <i className="fas fa-certificate text-ocean-400 text-sm" />
                  <span className="text-white text-xs font-bold tracking-wide">PADI 5-Star</span>
                  <span className="w-px h-4 bg-white/20" />
                  <i className="fas fa-map-marker-alt text-teal-400 text-[10px]" />
                  <span className="text-white/70 text-xs">Havelock Island</span>
                </div>
              </motion.div>

              {/* H1 — bigger, more dramatic */}
              <motion.h1 variants={titleReveal} className="font-[family-name:var(--font-display)] text-center" style={{ marginBottom: "32px" }}>
                <span className="block text-[2.2rem] font-bold text-white leading-[1.08] tracking-tight">
                  Dive Into The
                </span>
                <span className="block text-[3rem] font-bold leading-[0.95] tracking-tight">
                  <span className="text-gradient">Extraordinary</span>
                </span>
              </motion.h1>

              {/* Subtitle — slightly bigger */}
              <motion.p variants={fadeUp} className="text-white/75 text-[13px] leading-relaxed text-center mx-auto max-w-[320px]" style={{ marginBottom: "36px" }}>
                Andaman&apos;s most trusted dive centre — 13+ years of unforgettable underwater experiences
              </motion.p>

              {/* 3 trust cards — taller, more glow */}
              <motion.div variants={scaleIn} className="grid grid-cols-3 gap-2.5" style={{ marginBottom: "42px" }}>
                {[
                  { icon: "fas fa-award", value: "TripAdvisor", sub: "Choice 2019–2025", color: "rgba(52,224,161,0.12)", borderColor: "rgba(52,224,161,0.3)", iconColor: "text-[#34e0a1]", glow: "0 0 24px rgba(52,224,161,0.12)" },
                  { icon: "fab fa-google", value: "4.9 ★★★★★", sub: "Google Rated", color: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.3)", iconColor: "text-gold-400", glow: "0 0 24px rgba(251,191,36,0.1)" },
                  { icon: "fas fa-users", value: "10,000+", sub: "Happy Divers", color: "rgba(0,168,232,0.1)", borderColor: "rgba(0,168,232,0.3)", iconColor: "text-ocean-400", glow: "0 0 24px rgba(0,168,232,0.1)" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl py-4 px-2 text-center"
                    style={{
                      background: `linear-gradient(180deg, rgba(1,10,19,0.9), ${s.color})`,
                      border: `1px solid ${s.borderColor}`,
                      boxShadow: s.glow,
                    }}
                  >
                    <i className={`${s.icon} ${s.iconColor} text-xl mb-2 block`} />
                    <div className="text-white font-bold text-[11px] font-[family-name:var(--font-display)] leading-tight">{s.value}</div>
                    <div className="text-white/60 text-[9px] mt-1 leading-tight">{s.sub}</div>
                  </div>
                ))}
              </motion.div>

              {/* Call + WhatsApp — bigger, bolder */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+916364360134"
                  className="flex items-center justify-center gap-2.5 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-ocean-500 to-teal-500 shadow-xl shadow-ocean-500/30"
                >
                  <i className="fas fa-phone text-sm" /> Call Now
                </a>
                <a
                  href="https://wa.me/916364360134?text=Hi%20Experience%20Scuba!%20I'm%20interested%20in%20diving%20in%20Havelock%20Island.%20Could%20you%20share%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-4 rounded-2xl text-sm font-bold text-white"
                  style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.4)", boxShadow: "0 0 20px rgba(37,211,102,0.1)" }}
                >
                  <i className="fab fa-whatsapp text-[#25D366] text-lg" /> WhatsApp
                </a>
              </motion.div>
            </motion.div>
        )}

        {/* ── DESKTOP ── */}
        {!isMobile && (
          <motion.div
            className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* PADI Badge + Location */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(0,168,232,0.1)", border: "1px solid rgba(0,168,232,0.25)" }}>
                <i className="fas fa-certificate text-ocean-400 text-xs" />
                <span className="text-ocean-300 text-xs font-semibold uppercase tracking-wider">PADI 5-Star Dive Centre</span>
              </div>
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full glass">
                <i className="fas fa-map-marker-alt text-teal-400 text-xs" />
                <span className="text-white/60 text-xs font-medium">Havelock Island, Andaman</span>
              </div>
            </motion.div>

            <motion.h1 className="font-[family-name:var(--font-display)] mb-6">
              <motion.span
                variants={titleReveal}
                className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              >
                Dive Into The
              </motion.span>
              <motion.span
                variants={titleReveal}
                className="block text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-[1.1] mt-1"
              >
                Extraordinary
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white/80 mb-5 leading-relaxed"
            >
              Discover the breathtaking underwater world of the Andaman Islands with the most trusted PADI certified dive centre
            </motion.p>

            {/* Quick stats line */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 md:gap-6 mb-10 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-calendar-check text-ocean-400 text-xs" />
                13+ Years
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5">
                <i className="fas fa-users text-teal-400 text-xs" />
                10,000+ Divers
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5">
                <i className="fas fa-star text-gold-400 text-xs" />
                4.9 on Google
              </span>
            </motion.div>

            {/* Trust Badges - Desktop */}
            <TrustBadges />
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10"
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          animate={{ borderColor: ["rgba(255,255,255,0.15)", "rgba(0,168,232,0.4)", "rgba(255,255,255,0.15)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-ocean-400 to-teal-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.span
          className="text-[10px] text-white/30 uppercase tracking-[0.2em]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
