"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { diveSites } from "@/data/diveSites";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const allSiteNames = diveSites.map((s) => s.name);

const difficultyColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-500",
  "Beginner-Intermediate": "from-green-500 to-ocean-500",
  Intermediate: "from-ocean-500 to-blue-500",
  Advanced: "from-orange-500 to-amber-500",
  "All Levels": "from-teal-400 to-emerald-500",
};

const similarOptions = [
  {
    title: "Non-Swimmers",
    desc: "Shore diving, boat diving, and snorkeling for absolute beginners.",
    icon: "fa-water",
    href: "/non-swimmers",
    color: "from-cyan-500 to-blue-600",
    image: "/images/shore-diving.webp",
  },
  {
    title: "PADI Courses",
    desc: "Get certified — from Open Water to Divemaster.",
    icon: "fa-certificate",
    href: "/courses",
    color: "from-ocean-500 to-teal-500",
    image: "/images/boat-diving.webp",
  },
  {
    title: "Kids Diving",
    desc: "PADI Bubble Maker and Seal Team for young adventurers aged 8+.",
    icon: "fa-child",
    href: "/kids",
    color: "from-teal-400 to-emerald-500",
    image: "/images/kids-diving.webp",
  },
];

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
            className="text-white/70 text-lg sm:text-xl max-w-2xl"
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
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Discover our curated collection of spectacular underwater locations
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-6">
            {diveSites.map((site, i) => (
              <motion.div
                key={site.slug}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.08, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="flex"
              >
                <Link
                  href={`/dive-sites/${site.slug}`}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden block flex flex-col w-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Badges - desktop only */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2">
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-ocean-300">
                        <i className="fas fa-arrows-alt-v" />
                        {site.depth}
                      </span>
                      <span className={`inline-flex items-center px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[7px] sm:text-xs font-semibold text-white bg-gradient-to-r ${difficultyColors[site.difficulty] || "from-ocean-500 to-teal-500"}`}>
                        {site.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-2.5 sm:p-5 lg:p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5 flex-1 flex flex-col">
                    <h3 className="text-[10px] sm:text-lg font-bold text-white font-[family-name:var(--font-display)] mb-1 sm:mb-2 group-hover:text-ocean-300 transition-colors leading-tight">
                      {site.name}
                    </h3>
                    <p className="text-white/40 text-[8px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 flex-1">
                      {site.description}
                    </p>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors mt-auto">
                      Explore
                      <i className="fas fa-arrow-right text-[7px] sm:text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Border glow */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.15), 0 0 30px rgba(0,168,232,0.05)" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Similar Options */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Explore More
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              You Might Also <span className="text-gradient">Like</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {similarOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="flex"
              >
                <Link
                  href={option.href}
                  className="group relative block rounded-xl sm:rounded-2xl overflow-hidden flex flex-col w-full border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="relative h-28 sm:h-48 lg:h-52 overflow-hidden">
                    <Image src={option.image} alt={option.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${option.color} shadow-lg`}>
                      <i className={`fas ${option.icon} text-white text-xs sm:text-sm`} />
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-5 flex-1 flex flex-col">
                    <h3 className="text-[11px] sm:text-lg font-bold text-white font-[family-name:var(--font-display)] mb-1 sm:mb-2 leading-tight">{option.title}</h3>
                    <p className="text-white/45 text-[9px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none flex-1">{option.desc}</p>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors mt-auto">
                      Explore <i className="fas fa-arrow-right text-[7px] sm:text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.2), 0 0 30px rgba(0,168,232,0.06)" }} />
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
            className="text-white/50 text-lg mb-8 max-w-xl mx-auto"
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
              href="https://wa.me/916364360134?text=Hi%20Experience%20Scuba!%20I'm%20interested%20in%20diving%20in%20Havelock%20Island.%20Could%20you%20share%20more%20details%3F"
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
