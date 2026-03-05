"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
            className="text-white/50 text-lg sm:text-xl max-w-2xl"
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
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Professional instruction and all equipment included in every package
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link
                  href={`/non-swimmers/${exp.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                >
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.shortTitle}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/20 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-md`}>
                      {exp.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-deep-900/80 backdrop-blur-sm border-t border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                        <i className={`fas ${exp.icon} text-ocean-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                        {exp.shortTitle}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-white/30">
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-clock text-ocean-500/60" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-arrows-alt-v text-ocean-500/60" />
                        {exp.depth}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white/30 text-xs">Starting from</span>
                        <span className="text-white font-bold text-lg ml-2 font-[family-name:var(--font-display)]">
                          &#8377;{exp.price}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors">
                        View Details
                        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
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
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">
                Even if you do not know how to swim, you can still experience the wonders of the underwater world. Our professional PADI-certified instructors guide you through every step.
              </p>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8">
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
                      <p className="text-white/40 text-sm">{f.desc}</p>
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
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
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
