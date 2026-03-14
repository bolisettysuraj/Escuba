"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const customerPhotos = [
  { src: "/images/about-main.jpeg", alt: "Happy diver underwater", span: "col-span-2 row-span-2" },
  { src: "/images/shore-diving.webp", alt: "Shore diving experience", span: "col-span-1 row-span-1" },
  { src: "/images/boat-diving.webp", alt: "Boat diving adventure", span: "col-span-1 row-span-1" },
  { src: "/images/snorkeling.webp", alt: "Snorkeling fun", span: "col-span-1 row-span-2" },
  { src: "/images/marine-1.webp", alt: "Marine life encounter", span: "col-span-1 row-span-1" },
  { src: "/images/about-secondary.jpeg", alt: "Diving group photo", span: "col-span-1 row-span-1" },
];

const similarOptions = [
  {
    title: "PADI Courses",
    desc: "Get certified with internationally recognized PADI courses — from Open Water to Divemaster.",
    icon: "fa-certificate",
    href: "/courses",
    color: "from-ocean-500 to-teal-500",
    image: "/images/boat-diving.webp",
  },
  {
    title: "Kids Diving",
    desc: "PADI Bubble Maker and Seal Team programs designed specially for young adventurers aged 8+.",
    icon: "fa-child",
    href: "/kids",
    color: "from-teal-400 to-emerald-500",
    image: "/images/kids-diving.webp",
  },
  {
    title: "Dive Sites",
    desc: "Explore 15+ stunning dive sites around Havelock Island — coral reefs, walls, and wrecks.",
    icon: "fa-map-marked-alt",
    href: "/dive-sites",
    color: "from-cyan-500 to-blue-600",
    image: "/images/divesite-1.webp",
  },
];

export default function NonSwimmersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/shore-diving.webp"
            alt="Scuba Diving for Non-Swimmers"
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
            <span className="text-ocean-400">Non Swimmers</span>
          </motion.div>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            For Non-Swimmers & Beginners
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Scuba Diving for <span className="text-gradient">Non-Swimmers</span> and Beginners
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg sm:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Even if you do not know how to swim, you can still experience the wonders of the underwater world. No experience needed — just bring your sense of adventure.
          </motion.p>
        </div>
      </section>

      {/* Experiences */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Professional instruction and all equipment included in every package
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex"
              >
                <Link
                  href={`/non-swimmers/${exp.slug}`}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden block flex flex-col w-full"
                >
                  {/* Image */}
                  <div className="relative h-28 sm:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.shortTitle}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 33vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/20 to-transparent" />
                    <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-md`}>
                      {exp.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-2.5 sm:p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5 flex-1 flex flex-col">
                    {/* Mobile: compact title only */}
                    <div className="hidden sm:flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                        <i className={`fas ${exp.icon} text-ocean-400`} />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white font-[family-name:var(--font-display)]">
                        {exp.shortTitle}
                      </h3>
                    </div>
                    {/* Mobile title */}
                    <h3 className="sm:hidden text-[11px] font-bold text-white font-[family-name:var(--font-display)] mb-1.5 leading-tight">
                      {exp.shortTitle}
                    </h3>

                    <p className="text-white/40 text-[9px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none flex-1">{exp.description}</p>

                    {/* Meta - hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-4 mb-4 text-xs text-white/30">
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-clock text-ocean-500/60" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-arrows-alt-v text-ocean-500/60" />
                        {exp.depth}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="hidden sm:inline text-white/50 text-xs">Starting from</span>
                        <span className="text-gold-400 font-bold text-xs sm:text-lg sm:ml-2 font-[family-name:var(--font-display)]">
                          &#8377;{exp.price}
                        </span>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors">
                        View Details
                        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                      </span>
                      <i className="sm:hidden fas fa-arrow-right text-[8px] text-ocean-400" />
                    </div>
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

      {/* Info section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Can&apos;t Swim? <span className="text-gradient">No Problem!</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4">
                Even if you do not know how to swim, you can still experience the wonders of the underwater world. Our professional PADI-certified instructors guide you through every step.
              </p>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                You&apos;ll learn basic safety rules and underwater skills including breathing techniques, mask clearing, and hand signal communication before ever entering the water.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "fa-shield-alt", title: "PADI Safety Standards", desc: "All dives follow strict PADI safety protocols" },
                  { icon: "fa-user-friends", title: "Personal Instructor", desc: "A certified instructor stays with you the entire time" },
                  { icon: "fa-camera", title: "Everything Included", desc: "Equipment, training, photos & videos — all included" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0">
                      <i className={`fas ${f.icon} text-ocean-400`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                      <p className="text-white/50 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-main.jpeg"
                  alt="Non-swimmer diving experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-4 sm:-left-6 rounded-xl px-5 py-3 text-center shadow-lg shadow-black/30"
                style={{ background: "rgba(1, 10, 19, 0.85)", border: "1px solid rgba(0, 168, 232, 0.15)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-white/40 text-xs uppercase tracking-wider">Trusted Since</div>
                <div className="text-2xl font-bold text-gradient font-[family-name:var(--font-display)]">2011</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Pictures */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Real Moments
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Divers in <span className="text-gradient">Action</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Photos from real diving sessions with our happy customers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
            {customerPhotos.map((photo, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden group ${photo.span}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-deep-950/20 group-hover:bg-deep-950/10 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 2px rgba(0,168,232,0.3)" }} />
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
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              More ways to explore the underwater world of the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {similarOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex"
              >
                <Link
                  href={option.href}
                  className="group relative block rounded-xl sm:rounded-2xl overflow-hidden flex flex-col w-full"
                >
                  {/* Image */}
                  <div className="relative h-28 sm:h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-2.5 sm:p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5 flex-1 flex flex-col">
                    {/* Desktop */}
                    <div className="hidden sm:flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${option.color} shadow-lg`}>
                        <i className={`fas ${option.icon} text-white text-sm`} />
                      </div>
                      <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                        {option.title}
                      </h3>
                    </div>
                    {/* Mobile */}
                    <h3 className="sm:hidden text-[11px] font-bold text-white font-[family-name:var(--font-display)] mb-1.5 leading-tight">
                      {option.title}
                    </h3>

                    <p className="text-white/50 text-[9px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none flex-1">
                      {option.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors mt-auto">
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
            Ready to Take the <span className="text-gradient">Plunge?</span>
          </motion.h2>
          <motion.p
            className="text-white/50 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            From beginner adventures to professional certifications — your underwater story starts with one call
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
              href="https://wa.me/916364360134?text=Hi%20Experience%20Scuba!%20I'm%20interested%20in%20diving%20in%20Havelock%20Island.%20Could%20you%20share%20more%20details%20about%20your%20experiences%20and%20availability%3F"
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
