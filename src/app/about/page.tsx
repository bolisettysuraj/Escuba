"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const features = [
  {
    icon: "fa-shield-alt",
    title: "Safety & Training",
    desc: "Every dive follows strict PADI safety protocols. Our instructors are certified professionals who prioritize your safety above all else.",
  },
  {
    icon: "fa-tools",
    title: "State-of-art Equipment",
    desc: "We invest in top-tier, regularly serviced dive gear so you can focus on the experience while we handle the rest.",
  },
  {
    icon: "fa-seedling",
    title: "Environmental Commitment",
    desc: "We are dedicated to protecting the marine ecosystem. Every dive is conducted with minimal environmental impact.",
  },
  {
    icon: "fa-sliders-h",
    title: "Customized Experiences",
    desc: "From beginner introductions to advanced expeditions, we tailor every dive to match your skill level and interests.",
  },
];

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "15+", label: "Dive Sites" },
  { value: "10,000+", label: "Happy Divers" },
  { value: "5", label: "TripAdvisor Awards" },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-950 via-deep-900 to-ocean-900/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32">
          <motion.nav
            className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[7px]" />
            <span className="text-ocean-400">About Us</span>
          </motion.nav>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            Who We Are
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            About <span className="text-gradient">Experience Scuba</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Your gateway to the breathtaking underwater world of the Andaman Islands since 2011.
          </motion.p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                A Legacy of <span className="text-gradient">Excellence</span> Since 2011
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">
                Experience Scuba is a PADI-certified dive centre nestled in the pristine waters of the Andaman Islands. As a proud affiliate of Experience Andamans, we have been delivering world-class underwater experiences for over a decade.
              </p>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">
                Our journey began in 2011 with a simple mission: to share the magic of the underwater world with everyone, regardless of swimming ability or experience level. Today, that mission remains at the heart of everything we do.
              </p>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                From non-swimmers taking their very first breath underwater to certified divers exploring advanced sites, our team of PADI-certified instructors and dive masters ensures every experience is safe, memorable, and truly extraordinary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="glass-strong rounded-2xl p-8 sm:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  To make the underwater world accessible to everyone while maintaining the highest standards of safety, professionalism, and environmental responsibility.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "fa-certificate", text: "PADI Certified Dive Centre" },
                    { icon: "fa-users", text: "Affiliate of Experience Andamans" },
                    { icon: "fa-history", text: "Operating since 2011" },
                    { icon: "fa-globe-asia", text: "Based in Havelock Island, Andaman" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                        <i className={`fas ${item.icon} text-ocean-400 text-sm`} />
                      </div>
                      <span className="text-white/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              We combine passion, expertise, and the best equipment to deliver unforgettable diving experiences
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-strong rounded-2xl p-6 sm:p-8 text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-5"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,168,232,0.15)" }}
                >
                  <i className={`fas ${f.icon} text-ocean-400 text-xl`} />
                </motion.div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Recognition
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Awards & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Our commitment to excellence has been recognized by travellers and tourism authorities alike
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              className="glass-strong rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mx-auto mb-5">
                <i className="fas fa-award text-white text-2xl" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                TripAdvisor Travelers&apos; Choice
              </h3>
              <p className="text-gold-400 font-semibold text-sm mb-2">2019 &mdash; 2024</p>
              <p className="text-white/40 text-sm leading-relaxed">
                Consistently recognized as one of the top diving experiences in the Andaman Islands by travellers worldwide.
              </p>
            </motion.div>

            <motion.div
              className="glass-strong rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mx-auto mb-5">
                <i className="fas fa-medal text-white text-2xl" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                Gold Level Recognition
              </h3>
              <p className="text-gold-400 font-semibold text-sm mb-2">Andaman Tourism</p>
              <p className="text-white/40 text-sm leading-relaxed">
                Awarded Gold-level status by the Andaman Tourism Department for excellence in service and safety standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 via-deep-950 to-teal-900/20" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-strong rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center py-8 sm:py-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient font-[family-name:var(--font-display)] mb-2">
                  {s.value}
                </div>
                <div className="text-white/40 text-xs sm:text-sm uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            Ready to Dive With <span className="text-gradient">Us?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Whether you&apos;re a first-time diver or a seasoned pro, we have the perfect underwater adventure waiting for you
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
