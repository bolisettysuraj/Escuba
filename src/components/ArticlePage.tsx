"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArticleData, articles } from "@/data/articles";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ArticlePage({ data }: { data: ArticleData }) {
  const relatedArticles = articles.filter((a) => a.slug !== data.slug).slice(0, 3);

  return (
    <main>
      {/* ── HERO — full-bleed image ── */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/60 to-deep-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-950/50 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-24 right-12 w-40 h-40 border border-white/[0.04] rounded-full hidden lg:block" />
        <div className="absolute top-36 right-24 w-20 h-20 border border-ocean-400/[0.08] rounded-full hidden lg:block" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-32">
          <motion.nav
            className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <Link href="/articles" className="hover:text-ocean-400 transition-colors">Articles</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <span className="text-ocean-400 truncate max-w-[200px]">{data.tag}</span>
          </motion.nav>

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            <span
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${data.tagColor} text-white shadow-lg`}
            >
              {data.tag}
            </span>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.15] mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {data.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap items-center gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 flex items-center justify-center text-white font-bold text-xs">
                ES
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium leading-tight">{data.author}</p>
                <p className="text-white/30 text-xs">Dive Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-white/35 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <i className="far fa-calendar text-ocean-400/50" />
                {data.date}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="far fa-clock text-ocean-400/50" />
                {data.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-ocean-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-40 w-[400px] h-[400px] bg-teal-500/[0.03] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Main content — 8 cols */}
            <motion.article
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              {/* Lead paragraph — larger */}
              {data.content[0]?.type === "paragraph" && (
                <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-[family-name:var(--font-display)] first-letter:font-bold first-letter:text-ocean-400 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1">
                  {data.content[0].text}
                </p>
              )}

              {/* Remaining blocks */}
              <div className="space-y-6">
                {data.content.slice(1).map((block, i) => {
                  switch (block.type) {
                    case "heading":
                      return (
                        <h2
                          key={i}
                          className="font-[family-name:var(--font-display)] text-lg sm:text-xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-2 sm:mb-3 leading-tight"
                        >
                          {block.text}
                        </h2>
                      );
                    case "paragraph":
                      return (
                        <p key={i} className="text-white/55 text-base sm:text-[17px] leading-[1.85]">
                          {block.text}
                        </p>
                      );
                    case "list":
                      return (
                        <ul key={i} className="space-y-3.5 pl-1 my-6">
                          {block.items?.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/55 text-base leading-relaxed">
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-ocean-400 to-teal-400 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    case "quote":
                      return (
                        <blockquote
                          key={i}
                          className="relative my-6 sm:my-10 p-5 sm:p-8 rounded-2xl glass border-l-[3px] border-ocean-400/40"
                        >
                          <i className="fas fa-quote-left absolute top-4 left-4 sm:top-5 sm:left-7 text-ocean-400/15 text-2xl sm:text-3xl" />
                          <p className="relative text-white/70 text-sm sm:text-base lg:text-lg italic leading-relaxed pl-4 sm:pl-4">
                            {block.text}
                          </p>
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* Tags / share bar */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-white/25 text-xs uppercase tracking-wider">Tags</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r ${data.tagColor} text-white`}>
                      {data.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase glass text-white/40">
                      Scuba Diving
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase glass text-white/40">
                      Andaman
                    </span>
                  </div>
                  <Link
                    href="/articles"
                    className="flex items-center gap-2 text-ocean-400 text-sm font-semibold hover:text-ocean-300 transition-colors"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    All Articles
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Sidebar — 4 cols */}
            <motion.aside
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
            >
              <div className="lg:sticky lg:top-28 space-y-5 sm:space-y-8">
                {/* Author card */}
                <div className="glass-strong rounded-2xl p-5 sm:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      ES
                    </div>
                    <div>
                      <p className="text-white font-semibold">{data.author}</p>
                      <p className="text-white/30 text-sm">PADI Certified Dive Centre</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    Sharing 13+ years of diving expertise from the pristine waters of Havelock Island, Andaman.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-ocean-400 text-sm font-semibold hover:text-ocean-300 transition-colors"
                  >
                    Learn about us
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Quick links */}
                <div className="glass-strong rounded-2xl p-5 sm:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-5">
                    Popular <span className="text-gradient">Articles</span>
                  </h3>
                  <div className="space-y-4">
                    {articles
                      .filter((a) => a.slug !== data.slug)
                      .slice(0, 3)
                      .map((a) => (
                        <Link
                          key={a.slug}
                          href={`/articles/${a.slug}`}
                          className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-300"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                            <Image src={a.image} alt={a.title} fill className="object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-white/70 text-sm font-medium leading-snug line-clamp-2 group-hover:text-ocean-200 transition-colors duration-200">
                              {a.title}
                            </p>
                            <p className="text-white/25 text-xs mt-1">{a.readTime}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* CTA card */}
                <div className="rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-500/20 to-teal-500/20" />
                  <div className="relative p-5 sm:p-8 glass-strong">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">
                      Ready to Dive?
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-5">
                      Experience the underwater world of the Andaman Islands with our expert team.
                    </p>
                    <a
                      href="https://wa.me/916364360134"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-ocean-500 to-teal-500 text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,168,232,0.3)] transition-shadow duration-300"
                    >
                      <i className="fab fa-whatsapp" />
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute bottom-1/3 -left-40 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-ocean-400 to-teal-400 rounded-full" />
            <span className="text-ocean-400 text-xs font-semibold uppercase tracking-[0.2em]">Continue Reading</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {relatedArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-ocean-400/20 transition-all duration-500 h-full"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950/80 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r ${article.tagColor} text-white`}
                      >
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-white/25 text-xs mb-2">{article.date} &middot; {article.readTime}</p>
                    <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-ocean-200 transition-colors duration-300 line-clamp-2 mb-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-ocean-400/60 group-hover:text-ocean-400 text-sm font-medium transition-colors duration-300">
                      <span>Read</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
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
            Stop reading about diving and start experiencing it. Book your first dive today.
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
