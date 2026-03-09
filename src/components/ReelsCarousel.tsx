"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const reels = [
  {
    url: "https://www.instagram.com/reel/DVJFv3bEcIC/",
    embed: "https://www.instagram.com/reel/DVJFv3bEcIC/embed/captioned",
    caption: "Explore the magic beneath the waves",
  },
  {
    url: "https://www.instagram.com/reel/DU491Qwgm2u/",
    embed: "https://www.instagram.com/reel/DU491Qwgm2u/embed/captioned",
    caption: "Dive into the crystal clear waters",
  },
  {
    url: "https://www.instagram.com/reel/DUIK1DQE1kX/",
    embed: "https://www.instagram.com/reel/DUIK1DQE1kX/embed/captioned",
    caption: "Discover incredible marine life",
  },
  {
    url: "https://www.instagram.com/reel/DTK_b79CcUN/",
    embed: "https://www.instagram.com/reel/DTK_b79CcUN/embed/captioned",
    caption: "Your underwater adventure starts here",
  },
  {
    url: "https://www.instagram.com/reel/DRweK11EvSM/",
    embed: "https://www.instagram.com/reel/DRweK11EvSM/embed/captioned",
    caption: "Making memories one dive at a time",
  },
];

export default function ReelsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft - 16, behavior: "smooth" });
    setActiveIndex(index);
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reels.length;
        scrollToIndex(next);
        return next;
      });
    }, 8000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth || 300;
      const gap = 20;
      const idx = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(idx, reels.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" aria-label="Instagram reels carousel">
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-ocean-500/5 rounded-full blur-3xl" />

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
            Follow Our Adventures
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Live the <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Watch our latest underwater adventures from Havelock Island
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-12 w-8 sm:w-16 bg-gradient-to-r from-deep-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-12 w-8 sm:w-16 bg-gradient-to-l from-deep-950 to-transparent z-10 pointer-events-none" />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onTouchStart={startAutoplay}
            onMouseDown={startAutoplay}
          >
            {reels.map((reel, i) => (
              <motion.a
                key={i}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center shrink-0 w-[280px] sm:w-[300px] rounded-2xl overflow-hidden relative group block"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-deep-900">
                  <iframe
                    src={reel.embed}
                    className="absolute border-0 pointer-events-none"
                    style={{
                      top: "-1px",
                      left: "-1px",
                      width: "calc(100% + 2px)",
                      height: "calc(100% + 2px)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    title={`Experience Scuba Reel ${i + 1}`}
                  />
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <p className="text-white text-sm font-medium leading-snug drop-shadow-lg">
                    {reel.caption}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-white/50 text-xs">
                    <i className="fab fa-instagram" />
                    View on Instagram
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <i className="fab fa-instagram text-2xl text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => {
                const prev = (activeIndex - 1 + reels.length) % reels.length;
                scrollToIndex(prev);
                startAutoplay();
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous reel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-arrow-left text-xs" />
            </motion.button>
            <div className="flex gap-2">
              {reels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollToIndex(i);
                    startAutoplay();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-gradient-to-r from-ocean-500 to-teal-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to reel ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={() => {
                const next = (activeIndex + 1) % reels.length;
                scrollToIndex(next);
                startAutoplay();
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next reel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-arrow-right text-xs" />
            </motion.button>
          </div>

          {/* Instagram CTA */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="https://www.instagram.com/experiencescuba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium text-white/70"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fab fa-instagram text-pink-400" />
              Follow us on Instagram
              <i className="fas fa-external-link-alt text-xs opacity-50" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
