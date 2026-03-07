"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { diveSites } from "@/data/diveSites";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const allSiteNames = diveSites.map((s) => s.name);

const difficultyColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-500",
  "Beginner-Intermediate": "from-green-500 to-ocean-500",
  Intermediate: "from-ocean-500 to-blue-500",
  Advanced: "from-orange-500 to-amber-500",
  "All Levels": "from-teal-400 to-emerald-500",
};

export default function DiveSitesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/divesite-1.webp"
            alt="Dive Sites around Havelock Island"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/60 to-deep-950/20" />
          <div className="absolute inset-0 bg-deep-950/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32">
          <motion.div
            className="flex items-center gap-2 text-sm text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[8px]" />
            <span className="text-ocean-400">Dive Sites</span>
          </motion.div>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            Explore Havelock Island
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Stunning <span className="text-gradient">Dive Sites</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            15+ magnificent underwater locations around Havelock Island
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative py-8 overflow-hidden">
        <motion.div
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-950 to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...allSiteNames, ...allSiteNames].map((site, i) => (
              <span
                key={`${site}-${i}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full glass text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors cursor-default"
              >
                <i className="fas fa-map-marker-alt text-ocean-500 text-xs" />
                {site}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Dive Sites Grid */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              All <span className="text-gradient">Dive Sites</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Discover our curated collection of spectacular underwater locations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diveSites.map((site, i) => (
              <motion.div
                key={site.slug}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <Link
                  href={`/dive-sites/${site.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-ocean-300">
                        <i className="fas fa-arrows-alt-v" />
                        {site.depth}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${difficultyColors[site.difficulty] || "from-ocean-500 to-teal-500"}`}>
                        {site.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-5 sm:p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5">
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)] mb-2 group-hover:text-ocean-300 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                      {site.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors">
                      Explore Site
                      <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.15), 0 0 30px rgba(0,168,232,0.05)" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Explore the <span className="text-gradient">Deep?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Book your dive at any of our stunning sites and discover the underwater wonders of Havelock Island
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold glass text-white/80"
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
