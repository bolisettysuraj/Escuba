"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need to know swimming?",
    a: "No, swimming skills are not mandatory for beginner scuba diving experience in the Andamans. Our certified instructors will guide you through every step, ensuring you feel completely comfortable and safe underwater.",
    icon: "fa-person-swimming",
  },
  {
    q: "What is the age requirement?",
    a: "Ages 12-50 years can dive without a medical certificate (if healthy). Ages 51-60 require a medical fitness certificate. For children, we offer special PADI Bubble Maker and Seal Team programs.",
    icon: "fa-user-shield",
  },
  {
    q: "How long does a dive session take?",
    a: "Beginner sessions take about half a day including training and the actual dive. Advanced certification courses range from 4 to 30 days depending on the program level.",
    icon: "fa-clock",
  },
  {
    q: "What's included in the dive package?",
    a: "Everything you need - all dive equipment, professional instruction from certified dive masters, a personal guide, and complimentary underwater photographs and videos of your entire experience.",
    icon: "fa-box-open",
  },
  {
    q: "Is scuba diving safe?",
    a: "Absolutely. We follow strict PADI safety protocols, use regularly maintained equipment, and a certified Dive Master personally accompanies every diver. Your safety is our highest priority.",
    icon: "fa-shield-alt",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Got <span className="text-gradient">Questions?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Everything you need to know before your dive. Can&apos;t find what
              you&apos;re looking for? We&apos;re always happy to help.
            </p>

            {/* Quick contact card */}
            <motion.div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "rgba(1, 10, 19, 0.6)",
                border: "1px solid rgba(0, 168, 232, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <i className="fas fa-headset text-white text-sm" />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Still have questions?</h4>
                  <p className="text-white/40 text-xs">Our team responds within minutes</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="tel:+916364360134"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,168,232,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-phone text-xs" />
                  Call Us
                </motion.a>
                <motion.a
                  href="https://wa.me/916364360134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold glass text-white/80"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fab fa-whatsapp text-[#25D366]" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* FAQ list - 3 cols */}
          <motion.div
            className="lg:col-span-3 space-y-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`rounded-xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
                  open === i ? "shadow-lg shadow-ocean-500/5" : ""
                }`}
                style={{
                  background:
                    open === i
                      ? "rgba(0, 168, 232, 0.04)"
                      : "rgba(255, 255, 255, 0.02)",
                  border: `1px solid ${
                    open === i
                      ? "rgba(0, 168, 232, 0.15)"
                      : "rgba(255, 255, 255, 0.05)"
                  }`,
                }}
                onClick={() => setOpen(open === i ? null : i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                whileHover={open !== i ? { backgroundColor: "rgba(255,255,255,0.03)" } : {}}
              >
                <button className="w-full flex items-center gap-4 p-5 sm:p-6 text-left">
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      open === i
                        ? "bg-gradient-to-br from-ocean-500 to-teal-500 shadow-md shadow-ocean-500/20"
                        : "glass"
                    }`}
                    animate={open === i ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <i
                      className={`fas ${faq.icon} text-sm ${
                        open === i ? "text-white" : "text-ocean-400/60"
                      }`}
                    />
                  </motion.div>

                  <span
                    className={`flex-1 font-medium transition-colors duration-300 ${
                      open === i ? "text-white" : "text-white/70"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      open === i ? "bg-ocean-500/20" : "bg-white/5"
                    }`}
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i
                      className={`fas fa-chevron-down text-xs transition-colors ${
                        open === i ? "text-ocean-400" : "text-white/30"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pl-[76px] sm:pl-[88px] pb-6">
                        <p className="text-white/40 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
