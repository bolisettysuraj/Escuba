"use client";
import { motion } from "framer-motion";

export default function ParallaxDivider() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Background with gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/60 via-deep-950 to-teal-900/60" />
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ocean-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500/15 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-ocean-500/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-ocean-300/70 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <i className="fas fa-water text-ocean-400/50" />
          <span>Book Your Underwater Journey</span>
        </motion.div>

        <motion.h2
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to Take the <br className="hidden sm:block" /><span className="text-gradient">Plunge?</span>
        </motion.h2>

        <motion.p
          className="text-white/40 text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          From beginner adventures to professional certifications &mdash; your unforgettable underwater story starts with one call
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
  );
}
