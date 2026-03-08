"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass-strong rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <motion.div
              className="p-8 sm:p-10 lg:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Get In Touch
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Start Your <span className="text-gradient">Adventure</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Ready to explore the underwater world? Contact us to book your
                dive or get answers to your questions.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: "fa-phone",
                    title: "Call Us",
                    lines: [
                      { text: "+91 6364360134", href: "tel:+916364360134" },
                      { text: "+91 9632362244", href: "tel:+919632362244" },
                    ],
                  },
                  {
                    icon: "fa-envelope",
                    title: "Email Us",
                    lines: [
                      {
                        text: "experiencescubadive.andaman@gmail.com",
                        href: "mailto:experiencescubadive.andaman@gmail.com",
                      },
                    ],
                  },
                  {
                    icon: "fa-map-marker-alt",
                    title: "Visit Us",
                    lines: [
                      {
                        text: "Vijaynagar, Beach No.5, Havelock Island, Andaman & Nicobar Islands 744211",
                        href: "",
                      },
                    ],
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,168,232,0.15)" }}
                    >
                      <i className={`fas ${item.icon} text-ocean-400`} />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      {item.lines.map((line, j) =>
                        line.href !== "" ? (
                          <a
                            key={j}
                            href={line.href}
                            className="block text-white/40 text-sm hover:text-ocean-400 transition-colors"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <p key={j} className="text-white/40 text-sm">
                            {line.text}
                          </p>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: "fab fa-whatsapp", label: "WhatsApp", hoverBg: "rgba(37,211,102,0.2)", hoverColor: "#25D366" },
                  { icon: "fab fa-facebook-f", label: "Facebook", hoverBg: "rgba(59,89,152,0.2)", hoverColor: "#3B5998" },
                  { icon: "fab fa-instagram", label: "Instagram", hoverBg: "rgba(225,48,108,0.2)", hoverColor: "#E1306C" },
                  { icon: "fab fa-youtube", label: "YouTube", hoverBg: "rgba(255,0,0,0.15)", hoverColor: "#FF0000" },
                  { icon: "fas fa-map-marked-alt", label: "Google Maps", hoverBg: "rgba(66,133,244,0.2)", hoverColor: "#4285F4" },
                ].map((s, i) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 transition-all duration-300"
                    aria-label={s.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.06, ease: "backOut" }}
                    whileHover={{ scale: 1.15, y: -3, backgroundColor: s.hoverBg }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${s.icon} text-sm`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form side */}
            <motion.div
              className="p-8 sm:p-10 lg:p-12 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                Book Your Dive
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { type: "text", placeholder: "Your Name", icon: "fa-user" },
                  {
                    type: "tel",
                    placeholder: "Phone Number",
                    icon: "fa-phone",
                  },
                  {
                    type: "email",
                    placeholder: "Email Address",
                    icon: "fa-envelope",
                  },
                ].map((field, i) => (
                  <motion.div
                    key={field.placeholder}
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  >
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] transition-all duration-300"
                    />
                    <i
                      className={`fas ${field.icon} absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xs peer-focus:text-ocean-400 transition-colors`}
                    />
                  </motion.div>
                ))}

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.59 }}
                >
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3.5 pl-11 text-sm text-white/30 focus:text-white focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] transition-all duration-300 appearance-none"
                  >
                    <option value="" disabled>
                      Select Experience
                    </option>
                    <option className="bg-deep-900 text-white">Shore Diving</option>
                    <option className="bg-deep-900 text-white">Boat Diving</option>
                    <option className="bg-deep-900 text-white">Snorkeling</option>
                    <option className="bg-deep-900 text-white">Open Water Diver Course</option>
                    <option className="bg-deep-900 text-white">Advanced Open Water</option>
                    <option className="bg-deep-900 text-white">Other Course</option>
                  </select>
                  <i className="fas fa-water absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.67 }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] transition-all duration-300 resize-none"
                  />
                  <i className="fas fa-comment absolute left-4 top-4 text-white/20 text-xs" />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white shadow-lg shadow-ocean-500/20 transition-all duration-300 ${
                    submitted
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/20"
                      : "bg-gradient-to-r from-ocean-500 to-teal-500 btn-shimmer"
                  }`}
                  whileHover={!loading && !submitted ? { scale: 1.02, boxShadow: "0 15px 40px rgba(0,168,232,0.35)" } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.span
                        key="loading"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <motion.i
                          className="fas fa-circle-notch"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </motion.span>
                    ) : submitted ? (
                      <motion.span
                        key="success"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <motion.i
                          className="fas fa-check-circle"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                        Sent Successfully!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="default"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Send Enquiry
                        <i className="fas fa-paper-plane text-xs" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
