"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Open Water Diver",
    level: "Beginner",
    icon: "fa-water",
    desc: "Your first certification. Learn to dive independently to 18 meters with a buddy.",
    duration: "4 Days",
    dives: "4 Dives",
    depth: "18m",
    price: "28,000",
  },
  {
    title: "Advanced Open Water",
    level: "Intermediate",
    icon: "fa-compass",
    desc: "Expand your skills with deep diving, navigation, and specialty dives to 30 meters.",
    duration: "2-3 Days",
    dives: "5 Dives",
    depth: "30m",
    price: "22,000",
    featured: true,
  },
  {
    title: "Adventure Diver",
    level: "Intermediate",
    icon: "fa-mountain",
    desc: "Try 3 different specialty dives and discover your underwater passion.",
    duration: "1-2 Days",
    dives: "3 Dives",
    depth: "18m",
    price: "15,000",
  },
  {
    title: "Rescue Diver",
    level: "Advanced",
    icon: "fa-life-ring",
    desc: "Learn to prevent and manage dive emergencies. A challenging but rewarding course.",
    duration: "3-4 Days",
    dives: "Scenario Dives",
    depth: "18m",
    price: "25,000",
  },
  {
    title: "Dive Master",
    level: "Professional",
    icon: "fa-crown",
    desc: "The first professional level. Lead dives, assist instructors, and make diving your career.",
    duration: "2-4 Weeks",
    dives: "60+ Dives",
    depth: "40m",
    price: "55,000",
    featured: true,
  },
  {
    title: "Emergency First Response",
    level: "Essential",
    icon: "fa-first-aid",
    desc: "CPR and first aid training. Essential skills for diving and everyday life.",
    duration: "1 Day",
    dives: "Certification",
    depth: "—",
    price: "8,000",
  },
];

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

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            PADI Certified Programs
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From your first breath underwater to becoming a Dive Master
          </p>
        </motion.div>

        {/* Course grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer gradient-border flex`}
              style={course.featured ? { animation: "glowPulse 4s ease-in-out infinite" } : {}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-full flex flex-col">
                {/* Top accent line */}
                <div className={`h-1 w-full bg-gradient-to-r ${levelColors[course.level]} group-hover:h-1.5 transition-all duration-300`} />

                <div
                  className="p-2.5 sm:p-6 flex-1 flex flex-col"
                  style={{
                    background: course.featured
                      ? "rgba(0,168,232,0.04)"
                      : "rgba(255,255,255,0.02)",
                    borderLeft: "1px solid rgba(255,255,255,0.05)",
                    borderRight: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "0 0 0.75rem 0.75rem",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <div
                      className={`inline-block px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[7px] sm:text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${
                        levelColors[course.level]
                      }`}
                    >
                      {course.level}
                    </div>
                    {course.featured && (
                      <span className="hidden sm:flex text-[10px] uppercase tracking-wider text-ocean-400 font-bold items-center gap-1">
                        <i className="fas fa-star text-[8px]" /> Popular
                      </span>
                    )}
                  </div>

                  {/* Icon + Title - Desktop */}
                  <div className="hidden sm:flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ background: levelBg[course.level] }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <i
                        className={`fas ${course.icon} text-base sm:text-lg text-ocean-400 group-hover:text-ocean-300 transition-colors`}
                      />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-display)] leading-tight min-w-0">
                      {course.title}
                    </h3>
                  </div>
                  {/* Mobile title */}
                  <h3 className="sm:hidden text-[10px] font-bold text-white font-[family-name:var(--font-display)] leading-tight mb-1.5">
                    {course.title}
                  </h3>

                  <p className="text-white/40 text-[8px] sm:text-sm leading-relaxed mb-2 sm:mb-5 flex-1 line-clamp-2 sm:line-clamp-none">
                    {course.desc}
                  </p>

                  {/* Stats row - hidden on mobile */}
                  <div className="hidden sm:grid grid-cols-3 gap-2 mb-5">
                    {[
                      { icon: "fa-clock", value: course.duration, label: "Duration" },
                      { icon: "fa-layer-group", value: course.dives, label: "Dives" },
                      { icon: "fa-arrows-alt-v", value: course.depth, label: "Max Depth" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center rounded-lg py-2.5 px-2 min-w-0 overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                      >
                        <i className={`fas ${stat.icon} text-ocean-500/60 text-[11px] mb-1.5 block`} />
                        <div className="text-white text-[11px] sm:text-xs font-bold leading-tight truncate">{stat.value}</div>
                        <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-wider mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2 pt-2 sm:pt-4 border-t border-white/5 mt-auto">
                    <div className="min-w-0 shrink-0">
                      <span className="hidden sm:block text-white/25 text-[10px] uppercase tracking-wider">From</span>
                      <div className="font-bold text-xs sm:text-xl font-[family-name:var(--font-display)] flex items-baseline gap-0.5">
                        <span className="text-white/50 text-[8px] sm:text-sm">&#8377;</span>
                        <span className="text-gold-400">{course.price}</span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-all px-3 sm:px-4 py-2 rounded-full group-hover:bg-ocean-500/10 shrink-0">
                      Enquire
                      <i className="fas fa-arrow-right text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <i className="sm:hidden fas fa-arrow-right text-[8px] text-ocean-400" />
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.15), 0 0 30px rgba(0,168,232,0.06)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Kids programs banner */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <div className="glass-strong rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 min-w-0">
              <span className="inline-block text-teal-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
                For Young Explorers
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                Kids Programs
              </h3>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5">
                Introduce your little ones to the underwater world with our PADI
                Seal Team and Bubble Maker programs. Safe, fun, and
                unforgettable.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-teal-300">
                  <i className="fas fa-child" /> PADI Seal Team
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-teal-300">
                  <i className="fas fa-baby" /> PADI Bubble Maker
                </span>
              </div>
            </div>
            <div className="w-full md:w-72 aspect-[4/3] rounded-xl overflow-hidden shrink-0 shadow-xl shadow-black/20">
              <Image
                src="/images/kids-diving.webp"
                alt="Kids scuba diving programs"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
