"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ArticlesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main>
      {/* ── HERO with image background ── */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/marine-2.webp"
          alt="Articles"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/70 to-deep-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-950/60 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-48 h-48 border border-ocean-400/10 rounded-full hidden lg:block" />
        <div className="absolute top-32 right-20 w-24 h-24 border border-teal-400/10 rounded-full hidden lg:block" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-32">
          <motion.nav
            className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <span className="text-ocean-400">Articles</span>
          </motion.nav>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            From the Deep
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-[1.1] mb-5 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Dive Into Our <span className="text-gradient">Stories</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Expert insights, underwater adventures, and everything you need to know before taking the plunge.
          </motion.p>

          {/* Article count badge */}
          <motion.div
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <span className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" />
            <span className="text-white/50 text-sm">{articles.length} articles published</span>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE — magazine-style ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-ocean-400 to-teal-400 rounded-full" />
            <span className="text-ocean-400 text-xs font-semibold uppercase tracking-[0.2em]">Featured Story</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
          >
            <Link
              href={`/articles/${featured.slug}`}
              className="group relative grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden"
            >
              {/* Image — 7 cols */}
              <div className="lg:col-span-7 relative h-56 sm:h-80 lg:h-[500px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-deep-950 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/30 to-transparent lg:hidden" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${featured.tagColor} text-white shadow-lg`}
                  >
                    {featured.tag}
                  </span>
                </div>

                {/* Large number watermark */}
                <div className="absolute bottom-4 left-6 hidden lg:block">
                  <span className="font-[family-name:var(--font-display)] text-[120px] font-bold text-white/[0.04] leading-none select-none">
                    01
                  </span>
                </div>
              </div>

              {/* Content — 5 cols */}
              <div className="lg:col-span-5 relative bg-white/[0.03] backdrop-blur-sm p-5 sm:p-8 lg:p-14 flex flex-col justify-center lg:border-l border-white/[0.04]">
                {/* Decorative corner */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-ocean-400/20 rounded-tr-lg group-hover:border-ocean-400/40 transition-colors duration-500 hidden sm:block" />

                <div className="flex items-center gap-3 text-white/30 text-xs mb-6">
                  <i className="far fa-calendar text-ocean-400/60" />
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <i className="far fa-clock text-ocean-400/60" />
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-5 leading-tight group-hover:text-ocean-200 transition-colors duration-300">
                  {featured.title}
                </h2>

                <p className="text-white/45 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8 line-clamp-3 sm:line-clamp-none">
                  {featured.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-5 sm:mb-8">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">
                    ES
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{featured.author}</p>
                    <p className="text-white/25 text-xs hidden sm:block">Experience Scuba Team</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-ocean-400 text-sm font-semibold">
                  <span className="group-hover:tracking-wider transition-all duration-300">Read Full Article</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.06] group-hover:ring-ocean-400/25 transition-all duration-500 pointer-events-none" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── REMAINING ARTICLES ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-ocean-400 to-teal-400 rounded-full" />
            <span className="text-ocean-400 text-xs font-semibold uppercase tracking-[0.2em]">More Stories</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group relative block rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-ocean-400/20 transition-all duration-500 h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950/90 via-deep-950/30 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${article.tagColor} text-white`}
                      >
                        {article.tag}
                      </span>
                    </div>

                    {/* Number watermark */}
                    <div className="absolute bottom-2 right-4">
                      <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-white/[0.06] select-none">
                        0{i + 2}
                      </span>
                    </div>

                    {/* Read time badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium glass text-white/60">
                        <i className="far fa-clock text-ocean-400/60" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-white/25 text-xs mb-3">{article.date}</p>

                    <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-ocean-200 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 flex items-center justify-center text-white font-bold text-[8px]">
                          ES
                        </div>
                        <span className="text-white/30 text-xs">{article.author}</span>
                      </div>
                      <svg
                        className="w-4 h-4 text-ocean-400/50 group-hover:text-ocean-400 transform group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Subtle left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-ocean-400/0 to-transparent group-hover:via-ocean-400/40 transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/40 via-deep-950 to-teal-900/40" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Ready to Start Your <span className="text-gradient">Adventure?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Stop reading about diving and start experiencing it. Book your first dive with us today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <motion.a
              href="tel:+916364360134"
              className="btn-shimmer inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,168,232,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fas fa-phone" />
              Call +91 6364360134
            </motion.a>
            <motion.a
              href="https://wa.me/916364360134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold glass text-white/80"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fab fa-whatsapp text-[#25D366]" />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
