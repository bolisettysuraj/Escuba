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
    display = `${Math.floor(count / 1000)}k`;
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

  const stats = [
    { value: 15, label: "Dive Sites" },
    { value: 13, label: "Years Exp" },
    { value: 10000, label: "Happy Divers" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-b from-deep-950/60 via-deep-950/10 to-deep-950" />
          <div className="absolute inset-0 bg-deep-950/20" />
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
          <div className="absolute inset-0 bg-gradient-to-b from-deep-950/70 via-deep-950/25 to-deep-950" />
          <div className="absolute inset-0 bg-deep-950/15" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(1,10,19,0.5) 100%)" }} />
        </div>
      </motion.div>

      {/* Ambient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 -left-20 md:-left-32 w-52 md:w-96 h-52 md:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,168,232,0.15), transparent)" }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 md:-right-32 w-44 md:w-80 h-44 md:h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.12), transparent)" }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: contentY, opacity }}
      >
        {/* ── MOBILE ── */}
        {isMobile && (
          <motion.div
            className="px-5 pb-10 pt-28"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] text-ocean-300 mb-5"
            >
              <i className="fas fa-award text-gold-400 text-[10px]" />
              TripAdvisor Choice 2019 – 2024
            </motion.div>

            <motion.h1 variants={titleReveal} className="font-[family-name:var(--font-display)] mb-4">
              <span className="block text-[1.8rem] sm:text-[2.2rem] font-bold text-white leading-[1.05]">
                Dive Into
              </span>
              <span className="block text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-bold text-gradient leading-[1.05]">
                The Deep
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-sm leading-relaxed mb-7 max-w-[280px]">
              Explore the Andaman&apos;s underwater world with the most trusted PADI certified dive centre
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3 mb-8">
              <motion.a
                href="#experiences"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25"
                whileTap={{ scale: 0.96 }}
              >
                Explore <i className="fas fa-arrow-right text-xs" />
              </motion.a>
              <motion.a
                href="tel:+916364360134"
                className="w-14 h-[46px] rounded-full glass flex items-center justify-center text-white/80"
                whileTap={{ scale: 0.92 }}
              >
                <i className="fas fa-phone text-sm" />
              </motion.a>
              <motion.a
                href="https://wa.me/916364360134"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-[46px] rounded-full flex items-center justify-center text-white"
                style={{ background: "rgba(37,211,102,0.2)", border: "1px solid rgba(37,211,102,0.3)" }}
                whileTap={{ scale: 0.92 }}
              >
                <i className="fab fa-whatsapp text-lg" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex items-center justify-between glass rounded-2xl px-4 py-3.5"
            >
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-white/10" />}
                  <div className="text-center flex-1">
                    <div className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-display)]">
                      <AnimatedCounter target={s.value} />
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-white/35 uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Google Rating */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center mt-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <i className="fab fa-google text-white/70 text-xs" />
                <span className="text-white font-bold text-sm font-[family-name:var(--font-display)] leading-none">4.9</span>
                <div className="flex items-center gap-px">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star text-gold-400 text-[8px]" />
                  ))}
                </div>
                <span className="text-white/35 text-[10px] leading-none">on Google</span>
              </div>
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
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-ocean-300"
            >
              <i className="fas fa-award text-gold-400 text-xs" />
              TripAdvisor Travelers&apos; Choice 2019 – 2024
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
              className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white/50 mb-10 leading-relaxed"
            >
              Discover the breathtaking underwater world of the Andaman Islands with the most trusted PADI certified dive centre
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-14">
              <motion.a
                href="#experiences"
                className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25 btn-shimmer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,168,232,0.4), 0 0 80px rgba(0,168,232,0.15)" }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Experiences
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#about"
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/90 border border-white/10 backdrop-blur-md"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-play text-xs opacity-70 group-hover:opacity-100 transition-opacity" />
                Our Story
              </motion.a>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-8 lg:gap-12 rounded-2xl px-8 py-5 border border-white/[0.08]"
              style={{ background: "rgba(1, 10, 19, 0.5)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-8 lg:gap-12">
                  {i > 0 && <div className="w-px h-12 bg-white/10" />}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
                      <AnimatedCounter target={s.value} />
                    </div>
                    <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Google Rating */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center mt-6"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass">
                <i className="fab fa-google text-white/70 text-sm" />
                <span className="text-white font-bold text-lg font-[family-name:var(--font-display)] leading-none">4.9</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star text-gold-400 text-xs" />
                  ))}
                </div>
                <span className="text-white/40 text-sm leading-none">on Google</span>
              </div>
            </motion.div>
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
