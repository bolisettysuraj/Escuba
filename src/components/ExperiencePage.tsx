"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ExperienceData } from "@/data/experiences";
import PageFAQ from "@/components/PageFAQ";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ExperiencePage({ data }: { data: ExperienceData }) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/50 to-deep-950/10" />
          <div className="absolute inset-0 bg-deep-950/25" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 pt-28 sm:pt-32">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <Link href="/non-swimmers" className="hover:text-ocean-400 transition-colors">Non Swimmers</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <span className="text-ocean-400 truncate">{data.shortTitle}</span>
          </motion.nav>

          <motion.div
            className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${data.color} mb-3 sm:mb-4`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            {data.tag}
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 max-w-3xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {data.title}
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

      {/* ── QUICK STATS BAR (mobile-friendly) ── */}
      <section className="relative -mt-6 sm:-mt-8 z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <div className="glass-strong rounded-2xl grid grid-cols-3 divide-x divide-white/5">
            {[
              { icon: "fa-clock", value: data.duration, label: "Duration" },
              { icon: "fa-arrows-alt-v", value: data.depth, label: "Depth" },
              { icon: "fa-tag", value: `₹${data.price}`, label: "From" },
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

      {/* ── MOBILE CTA (sticky, shown only on mobile) ── */}
      <div className="lg:hidden sticky top-[72px] z-30 px-4 pt-3 pb-2 bg-deep-950/90 backdrop-blur-md border-b border-white/5">
        <div className="flex gap-2">
          <a
            href="tel:+916364360134"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20"
          >
            <i className="fas fa-phone text-xs" />
            Book Now
          </a>
          <a
            href="https://wa.me/916364360134"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 rounded-xl flex items-center justify-center text-white"
            style={{ background: "rgba(37,211,102,0.2)", border: "1px solid rgba(37,211,102,0.3)" }}
          >
            <i className="fab fa-whatsapp text-lg" />
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* ── Left: Content (2 cols on lg) ── */}
            <div className="lg:col-span-2 space-y-12 sm:space-y-16">

              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5">
                  About This <span className="text-gradient">Experience</span>
                </h2>
                <div className="space-y-4">
                  {data.longDescription.map((p, i) => (
                    <p key={i} className="text-white/50 text-sm sm:text-base leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* What's Included — shown inline on mobile, sidebar on desktop */}
              <motion.div
                className="lg:hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white mb-5">
                  What&apos;s <span className="text-gradient">Included</span>
                </h2>
                <div className="grid grid-cols-2 gap-2.5">
                  {data.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 glass rounded-lg px-3 py-3">
                      <i className="fas fa-check text-teal-400 text-xs mt-0.5 shrink-0" />
                      <span className="text-white/60 text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How It Works */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
                  How It <span className="text-gradient">Works</span>
                </h2>

                {/* Mobile: vertical timeline / Desktop: 2x2 grid */}
                <div className="sm:hidden space-y-1">
                  {data.steps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      {/* Timeline line */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500/20 to-teal-500/20 flex items-center justify-center shrink-0 border border-ocean-500/20">
                          <span className="text-ocean-400 font-bold text-xs">{i + 1}</span>
                        </div>
                        {i < data.steps.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-ocean-500/20 to-transparent min-h-[40px]" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                        <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop/tablet grid */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-4">
                  {data.steps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      className="glass rounded-xl p-5 group hover:bg-white/[0.04] transition-colors"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-500/20 to-teal-500/20 flex items-center justify-center shrink-0">
                          <i className={`fas ${step.icon} text-ocean-400 text-sm`} />
                        </div>
                        <span className="text-ocean-400/40 text-[10px] font-bold uppercase tracking-wider">Step {i + 1}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-1.5">{step.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
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
                  Why Choose <span className="text-gradient">This Dive</span>
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

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-5 sm:mb-6">
                  Requirements & <span className="text-gradient">Eligibility</span>
                </h2>
                <div className="space-y-2.5">
                  {data.requirements.map((r, i) => (
                    <motion.div
                      key={r.label}
                      className="flex items-start gap-3 sm:gap-4 glass rounded-lg px-4 sm:px-5 py-3.5"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-ocean-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fas fa-user-check text-ocean-400 text-xs" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold text-sm">{r.label}</h4>
                        <p className="text-white/40 text-xs sm:text-sm mt-0.5">{r.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right: Sidebar (desktop only) ── */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Pricing card */}
                <motion.div
                  className="glass-strong rounded-2xl p-7 gradient-border"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                  <div className="text-center mb-6">
                    <span className="text-white/40 text-sm">Starting from</span>
                    <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-white mt-1">
                      &#8377;{data.price}
                    </div>
                    <span className="text-white/25 text-xs">per person</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { icon: "fa-clock", text: `Duration: ${data.duration}` },
                      { icon: "fa-arrows-alt-v", text: `Depth: ${data.depth}` },
                      { icon: "fa-camera", text: "Photos & videos included" },
                      { icon: "fa-shield-alt", text: "PADI certified instructors" },
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
                    <i className="fas fa-phone text-xs" />
                    Book Now
                  </motion.a>

                  <motion.a
                    href="https://wa.me/916364360134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass text-white/80 mt-3"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fab fa-whatsapp text-[#25D366]" />
                    WhatsApp Us
                  </motion.a>
                </motion.div>

                {/* What's included */}
                <motion.div
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2.5">
                    {data.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/50">
                        <i className="fas fa-check text-teal-400 text-xs mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(1, 10, 19, 0.6)",
                    border: "1px solid rgba(0, 168, 232, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease }}
                >
                  <h3 className="text-white font-semibold text-sm mb-3">Need Help?</h3>
                  <p className="text-white/40 text-xs mb-4 leading-relaxed">
                    Our team responds within minutes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+916364360134" className="flex items-center gap-2 text-white/50 hover:text-ocean-400 transition-colors">
                      <i className="fas fa-phone text-ocean-400/60 text-xs" />
                      +91 6364360134
                    </a>
                    <a href="tel:+919632362244" className="flex items-center gap-2 text-white/50 hover:text-ocean-400 transition-colors">
                      <i className="fas fa-phone text-ocean-400/60 text-xs" />
                      +91 9632362244
                    </a>
                    <a href="mailto:experiencescubadive.andaman@gmail.com" className="flex items-center gap-2 text-white/50 hover:text-ocean-400 transition-colors break-all">
                      <i className="fas fa-envelope text-ocean-400/60 text-xs shrink-0" />
                      <span className="text-xs">experiencescubadive.andaman@gmail.com</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={data.faqs} title="Experience" />

      {/* ── CTA BANNER ── */}
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
            Ready to Dive In?
          </motion.h2>
          <motion.p
            className="text-white/40 text-base sm:text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            Book your {data.shortTitle} experience today and discover the underwater world of Havelock Island
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
              <i className="fas fa-phone" />
              Call to Book
            </motion.a>
            <Link
              href="/non-swimmers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-md"
            >
              <i className="fas fa-arrow-left text-xs" />
              All Experiences
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
