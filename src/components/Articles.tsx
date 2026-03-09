"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Articles() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-ocean-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-teal-400/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-ocean-400 mb-4">
            From the Deep
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dive Into Our{" "}
            <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm sm:text-base">
            Expert insights, underwater adventures, and everything you need to
            know before taking the plunge.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Featured / hero card — spans 7 columns */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]"
          >
            <Link href={`/articles/${articles[0].slug}`} className="absolute inset-0 z-20" aria-label={articles[0].title} />
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-ocean-400/30 rounded-tr-xl group-hover:border-ocean-400/60 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-3 sm:mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${articles[0].tagColor} text-white`}
                >
                  {articles[0].tag}
                </span>
                <span className="text-white/40 text-xs">{articles[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/40 text-xs">{articles[0].readTime}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3 group-hover:text-ocean-100 transition-colors duration-300">
                {articles[0].title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-4 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                {articles[0].excerpt}
              </p>

              {/* Read more link */}
              <div className="flex items-center gap-2 text-ocean-400 text-sm font-semibold">
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Read Article
                </span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/[0.06] group-hover:ring-ocean-400/30 transition-all duration-500" />
          </motion.article>

          {/* Right column — stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
                className="group relative flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-ocean-400/20 hover:bg-white/[0.06] transition-all duration-500"
              >
                <Link href={`/articles/${article.slug}`} className="absolute inset-0 z-10 rounded-2xl" aria-label={article.title} />
                {/* Thumbnail */}
                <div className="relative w-20 sm:w-28 shrink-0 rounded-xl overflow-hidden aspect-square">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Number badge */}
                  <div className="absolute inset-0 flex items-center justify-center bg-deep-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display text-3xl font-bold text-white/80">
                      0{i + 2}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r ${article.tagColor} text-white`}
                    >
                      {article.tag}
                    </span>
                    <span className="text-white/30 text-[11px]">{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-white leading-snug mb-1.5 group-hover:text-ocean-200 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-2 hidden sm:block">
                    {article.excerpt}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-2 flex items-center text-ocean-400/60 group-hover:text-ocean-400 transition-colors duration-300">
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Subtle side accent line */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] rounded-full bg-gradient-to-b from-transparent via-ocean-400/0 to-transparent group-hover:via-ocean-400/50 transition-all duration-500" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/articles"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-ocean-500 to-teal-500 text-white font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(0,168,232,0.3)] hover:scale-105 active:scale-[0.98] transition-all duration-300"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="section-sep mt-20 sm:mt-28" />
    </section>
  );
}
