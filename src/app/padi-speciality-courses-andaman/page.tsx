"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { specialtyCourses } from "@/data/specialtyCourses";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SpecialtyCoursesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-deep-950 to-teal-900/60" />
        <div className="absolute inset-0 bg-deep-950/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-sm text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[8px]" />
            <span className="text-ocean-400">PADI Specialty Courses</span>
          </motion.div>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            Advanced Training
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            PADI <span className="text-gradient">Specialty Courses</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            24 specialized courses to master specific diving skills
          </motion.p>
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Explore All <span className="text-gradient">Specialties</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Take your diving to the next level with PADI specialty certifications
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {specialtyCourses.map((course, i) => (
              <motion.div
                key={course.name}
                className="glass rounded-xl p-5 group hover:bg-white/[0.04] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                  <i className={`fas ${course.icon} text-ocean-400 text-sm`} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 font-[family-name:var(--font-display)] leading-snug">
                  {course.name}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  {course.description}
                </p>
                <a
                  href="https://wa.me/916364360134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors"
                >
                  Contact to Enroll
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                </a>
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
            Ready to <span className="text-gradient">Specialize?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Contact us to learn about availability, pricing, and schedules for any specialty course
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
