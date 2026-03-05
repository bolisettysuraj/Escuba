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
  },
  {
    title: "Advanced Open Water",
    level: "Intermediate",
    icon: "fa-compass",
    desc: "Expand your skills with deep diving, navigation, and specialty dives to 30 meters.",
    duration: "2-3 Days",
    dives: "5 Dives",
  },
  {
    title: "Adventure Diver",
    level: "Intermediate",
    icon: "fa-mountain",
    desc: "Try 3 different specialty dives and discover your underwater passion.",
    duration: "1-2 Days",
    dives: "3 Dives",
  },
  {
    title: "Rescue Diver",
    level: "Advanced",
    icon: "fa-life-ring",
    desc: "Learn to prevent and manage dive emergencies. A challenging but rewarding course.",
    duration: "3-4 Days",
    dives: "Scenario Dives",
  },
  {
    title: "Dive Master",
    level: "Professional",
    icon: "fa-crown",
    desc: "The first professional level. Lead dives, assist instructors, and make diving your career.",
    duration: "2-4 Weeks",
    dives: "60+ Dives",
  },
  {
    title: "Emergency First Response",
    level: "Essential",
    icon: "fa-first-aid",
    desc: "CPR and first aid training. Essential skills for diving and everyday life.",
    duration: "1 Day",
    dives: "Certification",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-500",
  Intermediate: "from-ocean-500 to-blue-500",
  Advanced: "from-orange-500 to-amber-500",
  Professional: "from-purple-500 to-violet-500",
  Essential: "from-rose-500 to-pink-500",
};

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Section separator */}
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className="group glow-card glass rounded-2xl p-6 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,168,232,0.08)" }}
            >
              {/* Level badge */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${
                  levelColors[course.level]
                } mb-4`}
              >
                {course.level}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-4 group-hover:bg-ocean-500/15 transition-colors duration-300">
                <i
                  className={`fas ${course.icon} text-xl text-ocean-400 group-hover:text-ocean-300 transition-colors`}
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                {course.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {course.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4 text-xs text-white/30">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-clock text-ocean-500/60" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-layer-group text-ocean-500/60" />
                  {course.dives}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-400 group-hover:text-ocean-300 transition-colors">
                View Details
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Kids programs banner */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-strong rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                For Young Explorers
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-3">
                Kids Programs
              </h3>
              <p className="text-white/40 leading-relaxed mb-5">
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
