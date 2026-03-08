"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { DiveSiteData } from "@/data/diveSites";
import PageFAQ from "@/components/PageFAQ";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const difficultyColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-500",
  "Beginner-Intermediate": "from-green-500 to-ocean-500",
  Intermediate: "from-ocean-500 to-blue-500",
  Advanced: "from-orange-500 to-amber-500",
  "All Levels": "from-teal-400 to-emerald-500",
};

export default function DiveSitePage({ data }: { data: DiveSiteData }) {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/50 to-deep-950/10" />
          <div className="absolute inset-0 bg-deep-950/25" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 pt-28 sm:pt-32">
          <motion.nav
            className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <Link href="/dive-sites" className="hover:text-ocean-400 transition-colors">Dive Sites</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <span className="text-ocean-400 truncate">{data.name}</span>
          </motion.nav>

          <motion.div
            className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${difficultyColors[data.difficulty] || "from-ocean-500 to-teal-500"} mb-3 sm:mb-4`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            {data.difficulty}
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 max-w-3xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {data.name}
          </motion.h1>

          <motion.p
            className="text-white/50 text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative -mt-6 sm:-mt-8 z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <div className="glass-strong rounded-2xl grid grid-cols-3 divide-x divide-white/5">
            {[
              { icon: "fa-arrows-alt-v", value: data.depth, label: "Depth Range" },
              { icon: "fa-signal", value: data.difficulty, label: "Level" },
              { icon: "fa-map-marker-alt", value: "Havelock", label: "Location" },
            ].map((s) => (
              <div key={s.label} className="text-center py-4 sm:py-5 px-2">
                <i className={`fas ${s.icon} text-ocean-400 text-sm mb-1.5 block`} />
                <div className="text-white font-bold text-sm sm:text-base font-[family-name:var(--font-display)]">{s.value}</div>
                <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-12 sm:space-y-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5">
                  About <span className="text-gradient">{data.name}</span>
                </h2>
                <div className="space-y-4">
                  {data.longDescription.map((p, i) => (
                    <p key={i} className="text-white/50 text-sm sm:text-base leading-relaxed">{p}</p>
                  ))}
                </div>
              </motion.div>

              {/* Marine Life */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5 sm:mb-6">
                  Marine <span className="text-gradient">Life</span>
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {data.marineLife.map((species, i) => (
                    <motion.span
                      key={species}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                    >
                      <i className="fas fa-fish text-ocean-400 text-xs" />
                      {species}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5 sm:mb-6">
                  Site <span className="text-gradient">Highlights</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {data.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      className="flex items-center gap-3 glass rounded-lg px-4 py-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <i className="fas fa-check-circle text-teal-400 text-sm shrink-0" />
                      <span className="text-white/60 text-sm">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Best For */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5 sm:mb-6">
                  Best <span className="text-gradient">For</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {data.bestFor.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/70 font-medium"
                    >
                      <i className="fas fa-star text-gold-400 text-xs" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <motion.div
                  className="glass-strong rounded-2xl p-7 gradient-border"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-4">
                    Dive This Site
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: "fa-arrows-alt-v", text: `Depth: ${data.depth}` },
                      { icon: "fa-signal", text: `Level: ${data.difficulty}` },
                      { icon: "fa-map-marker-alt", text: "Havelock Island, Andaman" },
                      { icon: "fa-shield-alt", text: "PADI certified instructors" },
                      { icon: "fa-camera", text: "Photos & videos included" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3 text-sm text-white/50">
                        <i className={`fas ${item.icon} text-ocean-400/70 text-xs w-4 text-center`} />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="tel:+916364360134"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20 btn-shimmer"
                    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,168,232,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fas fa-phone text-xs" /> Book This Dive
                  </motion.a>
                  <motion.a
                    href="https://wa.me/916364360134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass text-white/80 mt-3"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fab fa-whatsapp text-[#25D366]" /> WhatsApp Us
                  </motion.a>
                </motion.div>

                {/* Contact */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(1, 10, 19, 0.6)", border: "1px solid rgba(0, 168, 232, 0.1)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease }}
                >
                  <h3 className="text-white font-semibold text-sm mb-3">Need Help?</h3>
                  <p className="text-white/40 text-xs mb-4 leading-relaxed">Our team responds within minutes.</p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+916364360134" className="flex items-center gap-2 text-white/50 hover:text-ocean-400 transition-colors">
                      <i className="fas fa-phone text-ocean-400/60 text-xs" /> +91 6364360134
                    </a>
                    <a href="tel:+919632362244" className="flex items-center gap-2 text-white/50 hover:text-ocean-400 transition-colors">
                      <i className="fas fa-phone text-ocean-400/60 text-xs" /> +91 9632362244
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={data.faqs} title="Dive Site" />

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/40 via-deep-950 to-teal-900/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            Ready to Explore <span className="text-gradient">{data.name}?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-base sm:text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            Book your dive at {data.name} today and discover the underwater wonders of Havelock Island
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <motion.a
              href="tel:+916364360134"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25 btn-shimmer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,168,232,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fas fa-phone" /> Call to Book
            </motion.a>
            <Link
              href="/dive-sites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-md"
            >
              <i className="fas fa-arrow-left text-xs" /> All Dive Sites
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
