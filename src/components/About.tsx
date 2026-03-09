"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images side */}
          <motion.div
            className="relative px-4 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-ocean-900/30">
              <Image
                src="/images/about-main.jpeg"
                alt="Scuba diving in Andaman"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating secondary image */}
            <motion.div
              className="absolute -bottom-8 right-0 sm:right-[-1rem] lg:right-[-2rem] w-40 sm:w-52 aspect-square rounded-xl overflow-hidden border-4 border-deep-950 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/images/about-secondary.jpeg" alt="Coral reef" fill className="object-cover" sizes="220px" />
            </motion.div>

            {/* PADI Badge */}
            <motion.div
              className="absolute top-6 right-2 sm:right-[-1rem] rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg shadow-black/20"
              style={{ background: "rgba(4,18,36,0.9)", border: "1px solid rgba(0,168,232,0.15)" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center">
                <i className="fas fa-certificate text-white text-sm" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">PADI</div>
                <div className="text-white/50 text-xs">Certified Centre</div>
              </div>
            </motion.div>

            {/* Since badge */}
            <motion.div
              className="absolute bottom-12 left-2 sm:left-[-1rem] rounded-xl px-5 py-3 text-center shadow-lg shadow-black/30"
              style={{ background: "rgba(1, 10, 19, 0.85)", border: "1px solid rgba(0, 168, 232, 0.15)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-white/40 text-xs uppercase tracking-wider">Since</div>
              <div className="text-2xl font-bold text-gradient font-[family-name:var(--font-display)]">2011</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Gateway to the{" "}
              <span className="text-gradient">Underwater World</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">
              Experience Scuba is your gateway to exploring the breathtaking underwater world of the Andaman Islands. As a PADI-certified centre established in 2011, we bring over a decade of expertise to every dive.
            </p>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8">
              Recognized with multiple TripAdvisor Travelers&apos; Choice Awards and Gold-level recognition from Andaman Tourism.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "fa-shield-alt", title: "Safety First", desc: "PADI compliance with strict safety protocols" },
                { icon: "fa-users", title: "Expert Instructors", desc: "Certified Dive Masters on every dive" },
                { icon: "fa-camera", title: "Full Package", desc: "Equipment, photos & videos all included" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 group-hover:bg-ocean-500/15 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <i className={`fas ${f.icon} text-ocean-400 group-hover:text-ocean-300 transition-colors`} />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-ocean-300 transition-colors duration-300">{f.title}</h4>
                    <p className="text-white/45 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#experiences"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20 btn-shimmer"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0,168,232,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Discover More <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
