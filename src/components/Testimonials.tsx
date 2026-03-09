"use client";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const testimonials = [
  {
    text: "I had an unforgettable experience with Experience Scuba in Havelock. The team was professional, and the instructors made me feel safe and confident throughout the entire dive.",
    name: "Ramesh S",
    role: "First-time Diver",
    initials: "RS",
  },
  {
    text: "My first ever diving experience was with Experience Scuba, and it exceeded all my expectations. The instructors were patient, ensuring I was comfortable throughout the dive.",
    name: "Priya M",
    role: "Shore Diving",
    initials: "PM",
  },
  {
    text: "Amazing Experience!! From the moment we arrived, the Experience Scuba team made sure we had everything we needed. The staff was extremely knowledgeable and friendly.",
    name: "Rahul T",
    role: "Boat Diving",
    initials: "RT",
  },
  {
    text: "The Advanced Open Water course changed my perspective on diving. The instructors pushed me to become a better, more confident diver. Highly recommended!",
    name: "Anil K",
    role: "PADI Certified",
    initials: "AK",
  },
  {
    text: "We took our kids for the Bubble Maker program and they absolutely loved it! The team was incredibly patient and made sure everyone had a blast.",
    name: "Sneha D",
    role: "Family Trip",
    initials: "SD",
  },
];

const AUTOPLAY_DURATION = 5000;
const ease = [0.16, 1, 0.3, 1] as const;

/* ── Typewriter word reveal ─────────────────────────────── */
function TypewriterText({ text, isActive }: { text: string; isActive: boolean }) {
  const words = useMemo(() => text.split(" "), [text]);

  if (!isActive) {
    return (
      <p className="text-white/50 text-sm sm:text-base leading-relaxed italic line-clamp-3">
        &ldquo;{text}&rdquo;
      </p>
    );
  }

  return (
    <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed italic">
      <span className="text-white/60">&ldquo;</span>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.35,
            delay: i * 0.04,
            ease,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
      <span className="text-white/60">&rdquo;</span>
    </p>
  );
}

/* ── Animated star rating ───────────────────────────────── */
function StarRating({ active, delay = 0 }: { active: boolean; delay?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.i
          key={i}
          className="fas fa-star text-gold-400"
          initial={{ opacity: 0.3, scale: 0.6 }}
          animate={
            active
              ? { opacity: 1, scale: 1 }
              : { opacity: 0.3, scale: 0.7 }
          }
          transition={{
            duration: 0.4,
            delay: active ? delay + i * 0.07 : 0,
            ease: "backOut",
          }}
          style={{ fontSize: active ? 14 : 10 }}
        />
      ))}
    </div>
  );
}

/* ── Progress bar ───────────────────────────────────────── */
function ProgressBar({ resetKey, paused }: { resetKey: number; paused: boolean }) {
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (paused) {
      progress.set(0);
      return;
    }
    progress.set(0);
    const startTime = Date.now();

    const frame = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / AUTOPLAY_DURATION, 1);
      progress.set(pct);
      if (pct < 1) {
        rafId = requestAnimationFrame(frame);
      }
    };

    let rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [resetKey, paused, progress]);

  return (
    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-ocean-500 to-teal-500"
        style={{ width }}
      />
    </div>
  );
}

/* ── Single testimonial card ────────────────────────────── */
function TestimonialCard({
  testimonial,
  isActive,
  onClick,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative w-full text-left rounded-2xl overflow-hidden transition-colors duration-500 cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 focus-visible:ring-offset-2 focus-visible:ring-offset-deep-950
        ${isActive ? "glass-strong" : "glass"}
      `}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.5,
      }}
      whileHover={!isActive ? { opacity: 0.7, scale: 0.97 } : {}}
      transition={{ duration: 0.5, ease }}
      layout
    >
      {/* Left accent border */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
        style={{
          background: "linear-gradient(to bottom, var(--color-ocean-500), var(--color-teal-500))",
        }}
        animate={
          isActive
            ? {
                opacity: [0.6, 1, 0.6],
                boxShadow: [
                  "0 0 8px rgba(0,168,232,0.3)",
                  "0 0 20px rgba(0,168,232,0.6)",
                  "0 0 8px rgba(0,168,232,0.3)",
                ],
              }
            : { opacity: 0.15, boxShadow: "0 0 0px transparent" }
        }
        transition={
          isActive
            ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.4 }
        }
      />

      {/* Large decorative quote watermark -- only on active card */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute top-3 right-4 pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 0.06, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.6, ease }}
          >
            <i
              className="fas fa-quote-right text-[80px] sm:text-[100px] lg:text-[120px]"
              style={{
                background: "linear-gradient(135deg, var(--color-ocean-400), var(--color-teal-400))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative p-5 sm:p-6 lg:p-8 pl-6 sm:pl-7 lg:pl-10">
        {/* Stars */}
        <div className="mb-3">
          <StarRating active={isActive} delay={0.15} />
        </div>

        {/* Testimonial text */}
        <div className={`mb-5 ${isActive ? "min-h-[80px]" : "min-h-0"}`}>
          <AnimatePresence mode="wait">
            <TypewriterText
              key={`${index}-${isActive}`}
              text={testimonial.text}
              isActive={isActive}
            />
          </AnimatePresence>
        </div>

        {/* Author row */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative">
            <motion.div
              className={`
                flex items-center justify-center rounded-full font-bold text-white
                ${isActive ? "w-14 h-14 sm:w-16 sm:h-16 text-base" : "w-10 h-10 text-xs"}
              `}
              style={{
                background: "linear-gradient(135deg, var(--color-ocean-500), var(--color-teal-500))",
              }}
              animate={{
                scale: isActive ? 1 : 0.85,
              }}
              transition={{ duration: 0.4, ease }}
            >
              {testimonial.initials}
            </motion.div>

            {/* Glowing ring around active avatar */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute -inset-1 rounded-full -z-10"
                  style={{
                    filter: "blur(6px)",
                    background: "linear-gradient(135deg, var(--color-ocean-500), var(--color-teal-500))",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Name & role */}
          <div>
            <motion.div
              className="font-semibold"
              animate={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.name}
            </motion.div>
            <motion.div
              className="text-sm flex items-center gap-1.5"
              animate={{ color: isActive ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="w-3 h-px"
                style={{ background: "var(--color-ocean-500)" }}
              />
              {testimonial.role}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ── Main Testimonials section ──────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute the 3 visible indices (prev, current, next) for desktop
  const visibleIndices = useMemo(() => {
    const prev = (current - 1 + testimonials.length) % testimonials.length;
    const next = (current + 1) % testimonials.length;
    return [prev, current, next];
  }, [current]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      setTimerKey((k) => k + 1);
    },
    []
  );

  const goToPrev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  const goToNext = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    },
    [goToPrev, goToNext]
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setTimerKey((k) => k + 1);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [paused, timerKey]);

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      aria-label="Customer testimonials"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            What Divers Say
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Diver <span className="text-gradient">Stories</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto text-sm sm:text-base">
            Real experiences from real divers who explored the Andaman waters with us
          </p>
        </motion.div>

        {/* ── Testimonial cards container ── */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonial carousel"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-deep-950 rounded-2xl"
        >
          {/* Desktop: 3-column grid showing prev / active / next */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch" aria-live="polite">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((idx, pos) => (
                <motion.div
                  key={`card-${idx}`}
                  layout
                  initial={{ opacity: 0, x: pos === 0 ? -40 : pos === 2 ? 40 : 0, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex"
                >
                  <TestimonialCard
                    testimonial={testimonials[idx]}
                    isActive={idx === current}
                    onClick={() => goTo(idx)}
                    index={idx}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: single card with slide animation */}
          <div className="lg:hidden" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${current}`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease }}
              >
                <TestimonialCard
                  testimonial={testimonials[current]}
                  isActive={true}
                  onClick={() => {}}
                  index={current}
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile swipe arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <i className="fas fa-arrow-left text-xs" />
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <i className="fas fa-arrow-right text-xs" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ── Progress bar ── */}
        <div className="mt-8 max-w-md mx-auto">
          <ProgressBar resetKey={timerKey} paused={paused} />
        </div>

        {/* ── Initials indicator nav ── */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              className={`
                relative rounded-full flex items-center justify-center font-bold transition-colors duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400
                ${
                  i === current
                    ? "w-10 h-10 text-xs text-white"
                    : "w-8 h-8 text-[10px] text-white/40 hover:text-white/70"
                }
              `}
              style={
                i === current
                  ? {
                      background: "linear-gradient(135deg, var(--color-ocean-500), var(--color-teal-500))",
                    }
                  : {
                      background: "rgba(255,255,255,0.06)",
                    }
              }
              animate={{
                scale: i === current ? 1.1 : 1,
              }}
              whileHover={{ scale: i === current ? 1.1 : 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease }}
              aria-label={`Go to testimonial by ${t.name}`}
              aria-current={i === current ? "true" : undefined}
            >
              {t.initials}

              {/* Active ring */}
              {i === current && (
                <motion.span
                  className="absolute -inset-[3px] rounded-full border-2"
                  style={{
                    borderColor: "var(--color-ocean-500)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* ── Google rating badge ── */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-6 text-white/30 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <i className="fab fa-google text-white/25" />
          <span>Rated</span>
          <span className="text-gold-400 font-semibold">5.0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fas fa-star text-gold-400 text-[10px]" />
            ))}
          </div>
          <span>on Google</span>
        </motion.div>
      </div>
    </section>
  );
}
