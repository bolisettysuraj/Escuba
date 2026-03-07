"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const levelColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-500",
  Intermediate: "from-ocean-500 to-blue-500",
  Advanced: "from-orange-500 to-amber-500",
  Professional: "from-purple-500 to-violet-500",
  Essential: "from-rose-500 to-pink-500",
};

const levelBg: Record<string, string> = {
  Beginner: "rgba(34,197,94,0.06)",
  Intermediate: "rgba(0,168,232,0.06)",
  Advanced: "rgba(249,115,22,0.06)",
  Professional: "rgba(168,85,247,0.06)",
  Essential: "rgba(244,63,94,0.06)",
};

export default function CoursesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-950 via-deep-900 to-ocean-900/30" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-32">
          <motion.div
            className="flex items-center gap-2 text-sm text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/" className="hover:text-ocean-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[8px]" />
            <span className="text-ocean-400">Scuba Courses</span>
          </motion.div>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            PADI Certified Programs
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            PADI Certified <span className="text-gradient">Courses</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            From your first breath underwater to becoming a Dive Master
          </motion.p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link
                  href={`/courses/${course.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                >
                  {/* Top accent line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${levelColors[course.level]}`} />

                  <div
                    className="p-6 h-full flex flex-col"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderLeft: "1px solid rgba(255,255,255,0.05)",
                      borderRight: "1px solid rgba(255,255,255,0.05)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "0 0 1rem 1rem",
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${levelColors[course.level]}`}
                      >
                        {course.level}
                      </div>
                      {course.tag && (
                        <span className="text-[10px] uppercase tracking-wider text-ocean-400 font-bold flex items-center gap-1">
                          <i className="fas fa-star text-[8px]" /> {course.tag}
                        </span>
                      )}
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                        style={{ background: levelBg[course.level] }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <i
                          className={`fas ${course.icon} text-lg text-ocean-400 group-hover:text-ocean-300 transition-colors`}
                        />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)] leading-tight">
                        {course.shortTitle}
                      </h3>
                    </div>

                    <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
                      {course.description}
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        { icon: "fa-clock", value: course.duration, label: "Duration" },
                        { icon: "fa-layer-group", value: course.dives, label: "Dives" },
                        { icon: "fa-arrows-alt-v", value: course.depth, label: "Max Depth" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center rounded-lg py-2.5 px-1"
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          <i className={`fas ${stat.icon} text-ocean-500/50 text-[10px] mb-1 block`} />
                          <div className="text-white text-xs font-semibold leading-tight">{stat.value}</div>
                          <div className="text-white/25 text-[9px] uppercase tracking-wider mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <span className="text-white/25 text-[10px] uppercase tracking-wider">From</span>
                        <div className="text-white font-bold text-lg font-[family-name:var(--font-display)]">
                          &#8377;{course.price}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors">
                        View Details
                        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.15), 0 0 30px rgba(0,168,232,0.06)" }}
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
            Ready to Get <span className="text-gradient">Certified?</span>
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
