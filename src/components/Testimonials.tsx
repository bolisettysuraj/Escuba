"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
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

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 overflow-hidden" aria-label="Customer testimonials">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            What Divers Say
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Diver <span className="text-gradient">Stories</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-strong rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-ocean-500/50 focus:ring-offset-2 focus:ring-offset-transparent" tabIndex={0} onKeyDown={handleKeyDown} role="region" aria-roledescription="carousel">
            {/* Quote icon */}
            <motion.i
              className="fas fa-quote-left text-6xl sm:text-7xl absolute top-4 left-6 sm:top-6 sm:left-8"
              style={{ background: "linear-gradient(135deg, rgba(0,168,232,0.12), rgba(45,212,191,0.06))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.i
                  key={i}
                  className="fas fa-star text-gold-400 text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08, ease: "backOut" }}
                />
              ))}
            </div>

            {/* Text with AnimatePresence for smooth transitions */}
            <div className="relative min-h-[80px] sm:min-h-[100px] flex items-center justify-center" aria-live="polite">
              <AnimatePresence custom={direction} mode="wait">
                <motion.p
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white/70 text-base sm:text-lg leading-relaxed italic px-2"
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="mt-8 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].initials}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ocean-500/30 to-teal-500/30 blur-md -z-10" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[current].name}
                  </div>
                  <div className="text-white/40 text-sm flex items-center gap-1.5">
                    <span className="w-3 h-px bg-ocean-500/50" />
                    {testimonials[current].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots & nav */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous"
              >
                <i className="fas fa-arrow-left text-xs" />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-gradient-to-r from-ocean-500 to-teal-500"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={goToNext}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <i className="fas fa-arrow-right text-xs" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
