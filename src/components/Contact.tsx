"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const contactCards = [
  {
    icon: "fa-phone",
    title: "Call Us",
    description: "Speak directly with our dive team",
    lines: [
      { text: "+91 6364360134", href: "tel:+916364360134" },
      { text: "+91 9632362244", href: "tel:+919632362244" },
    ],
    gradient: "from-ocean-500 to-ocean-400",
  },
  {
    icon: "fa-envelope",
    title: "Email Us",
    description: "Get a detailed response",
    lines: [
      {
        text: "experiencescubadive.andaman@gmail.com",
        href: "mailto:experiencescubadive.andaman@gmail.com",
      },
    ],
    gradient: "from-teal-500 to-teal-400",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Visit Us",
    description: "Come see us in person",
    lines: [
      {
        text: "Vijaynagar, Beach No.5, Havelock Island, Andaman & Nicobar Islands 744211",
        href: "",
      },
    ],
    gradient: "from-coral-500 to-coral-400",
  },
];

const socials = [
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    hoverBg: "rgba(37,211,102,0.2)",
    hoverColor: "#25D366",
    href: "https://wa.me/916364360134",
  },
  {
    icon: "fab fa-facebook-f",
    label: "Facebook",
    hoverBg: "rgba(59,89,152,0.2)",
    hoverColor: "#3B5998",
    href: "#",
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    hoverBg: "rgba(225,48,108,0.2)",
    hoverColor: "#E1306C",
    href: "#",
  },
  {
    icon: "fab fa-youtube",
    label: "YouTube",
    hoverBg: "rgba(255,0,0,0.15)",
    hoverColor: "#FF0000",
    href: "#",
  },
  {
    icon: "fas fa-map-marked-alt",
    label: "Google Maps",
    hoverBg: "rgba(66,133,244,0.2)",
    hoverColor: "#4285F4",
    href: "#",
  },
];

const formFields = [
  {
    type: "text" as const,
    placeholder: "Your Name",
    icon: "fa-user",
    label: "Full Name",
    id: "contact-name",
  },
  {
    type: "tel" as const,
    placeholder: "Phone Number",
    icon: "fa-phone",
    label: "Phone Number",
    id: "contact-phone",
  },
  {
    type: "email" as const,
    placeholder: "Email Address",
    icon: "fa-envelope",
    label: "Email Address",
    id: "contact-email",
  },
];

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
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* ── Background image + dark overlay ── */}
      <div className="absolute inset-0">
        <img
          src="/images/marine-3.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950 via-deep-950/95 to-deep-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-950/80 via-transparent to-deep-950/80" />
      </div>

      {/* ── Decorative blurs ── */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-ocean-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Start Your <span className="text-gradient">Adventure</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to explore the underwater world? Contact us to book your dive
            or get answers to your questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* ═══════════════════ INFO SIDE (2 cols) ═══════════════════ */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {/* ── WhatsApp floating card ── */}
            <motion.a
              href="https://wa.me/916364360134"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/20 rounded-2xl" />
              <div className="relative flex items-center gap-4 p-5 sm:p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow duration-300">
                  <i className="fab fa-whatsapp text-white text-2xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-base mb-0.5">
                    Chat with us on WhatsApp
                  </h4>
                  <p className="text-green-300/60 text-sm">
                    Instant replies &bull; Available 8AM - 10PM
                  </p>
                </div>
                <i className="fas fa-arrow-right text-green-400/40 ml-auto text-sm group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </div>
              {/* pulse ring */}
              <div className="absolute top-4 right-4 w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
                <span className="absolute inset-0 rounded-full bg-green-400" />
              </div>
            </motion.a>

            {/* ── Contact info cards ── */}
            {contactCards.map((item, i) => (
              <motion.div
                key={item.title}
                className="group glass rounded-2xl p-5 sm:p-6 hover:bg-white/[0.06] transition-all duration-500 gradient-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}
                  >
                    <i className={`fas ${item.icon} text-white text-base`} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-bold text-base mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-white/30 text-xs mb-2">
                      {item.description}
                    </p>
                    {item.lines.map((line, j) =>
                      line.href !== "" ? (
                        <a
                          key={j}
                          href={line.href}
                          className="block text-white/60 text-sm hover:text-ocean-400 transition-colors duration-200 break-all"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p
                          key={j}
                          className="text-white/60 text-sm leading-relaxed"
                        >
                          {line.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ── Social strip ── */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65, ease }}
            >
              <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
                Follow us
              </p>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative flex items-center gap-0 h-10 rounded-full glass text-white/40 transition-all duration-300 overflow-hidden px-3"
                    aria-label={s.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + i * 0.06,
                      ease: "backOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: s.hoverBg,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i
                      className={`${s.icon} text-sm shrink-0 group-hover/social:text-white transition-colors duration-200`}
                      style={
                        {
                          "--hover-color": s.hoverColor,
                        } as React.CSSProperties
                      }
                    />
                    <span className="max-w-0 group-hover/social:max-w-[80px] overflow-hidden whitespace-nowrap text-xs text-white/70 transition-all duration-300 ease-out ml-0 group-hover/social:ml-2">
                      {s.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════════════════ FORM SIDE (3 cols) ═══════════════════ */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                Book Your Dive
              </h3>
              <p className="text-white/35 text-sm mb-8">
                Fill in your details and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {formFields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  >
                    <label
                      htmlFor={field.id}
                      className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block font-medium"
                    >
                      {field.label}
                    </label>
                    <div className="relative group/input">
                      {/* Left accent bar */}
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-ocean-500 to-teal-500 scale-y-0 group-focus-within/input:scale-y-100 transition-transform duration-300 origin-top" />
                      </div>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        aria-required="true"
                        className="peer w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08),0_0_30px_rgba(0,168,232,0.06)] transition-all duration-300"
                      />
                      <i
                        className={`fas ${field.icon} absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs peer-focus:text-ocean-400 transition-colors duration-200`}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Select */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.59 }}
                >
                  <label
                    htmlFor="contact-experience"
                    className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block font-medium"
                  >
                    Interested In
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-ocean-500 to-teal-500 scale-y-0 group-focus-within/input:scale-y-100 transition-transform duration-300 origin-top" />
                    </div>
                    <select
                      id="contact-experience"
                      required
                      aria-required="true"
                      defaultValue=""
                      className="peer w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3.5 pl-11 text-sm text-white/30 focus:text-white focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08),0_0_30px_rgba(0,168,232,0.06)] transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled>
                        Select Experience
                      </option>
                      <option className="bg-deep-900 text-white">
                        Shore Diving
                      </option>
                      <option className="bg-deep-900 text-white">
                        Boat Diving
                      </option>
                      <option className="bg-deep-900 text-white">
                        Snorkeling
                      </option>
                      <option className="bg-deep-900 text-white">
                        Open Water Diver Course
                      </option>
                      <option className="bg-deep-900 text-white">
                        Advanced Open Water
                      </option>
                      <option className="bg-deep-900 text-white">
                        Other Course
                      </option>
                    </select>
                    <i className="fas fa-water absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs peer-focus:text-ocean-400 transition-colors duration-200" />
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                  </div>
                </motion.div>

                {/* Textarea */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.67 }}
                >
                  <label
                    htmlFor="contact-message"
                    className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block font-medium"
                  >
                    Your Message
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-ocean-500 to-teal-500 scale-y-0 group-focus-within/input:scale-y-100 transition-transform duration-300 origin-top" />
                    </div>
                    <textarea
                      id="contact-message"
                      placeholder="Your Message"
                      rows={4}
                      aria-required="true"
                      className="peer w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08),0_0_30px_rgba(0,168,232,0.06)] transition-all duration-300 resize-none"
                    />
                    <i className="fas fa-comment absolute left-4 top-4 text-white/20 text-xs peer-focus:text-ocean-400 transition-colors duration-200" />
                  </div>
                </motion.div>

                {/* ── Submit button ── */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`group/btn relative w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-base font-bold text-white shadow-xl overflow-hidden transition-all duration-500 ${
                      submitted
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/25"
                        : "bg-gradient-to-r from-ocean-600 via-ocean-500 to-teal-500 shadow-ocean-500/25 hover:shadow-ocean-500/40"
                    }`}
                    style={
                      !submitted && !loading
                        ? {
                            backgroundSize: "200% 100%",
                            backgroundPosition: "0% 0%",
                          }
                        : undefined
                    }
                    whileHover={
                      !loading && !submitted
                        ? {
                            scale: 1.02,
                            backgroundPosition: "100% 0%",
                            boxShadow:
                              "0 20px 50px rgba(0,168,232,0.35), 0 0 80px rgba(0,168,232,0.12)",
                          }
                        : {}
                    }
                    whileTap={!loading ? { scale: 0.97 } : {}}
                  >
                    {/* shimmer sweep on hover */}
                    {!submitted && !loading && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
                    )}
                    {/* ripple ring on hover */}
                    {!submitted && !loading && (
                      <span className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        <span className="absolute inset-[-4px] rounded-2xl border-2 border-ocean-400/20 group-hover/btn:inset-[-8px] transition-all duration-500" />
                      </span>
                    )}
                    <AnimatePresence mode="wait">
                      {loading ? (
                        <motion.span
                          key="loading"
                          className="relative flex items-center gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <motion.i
                            className="fas fa-circle-notch"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Sending...
                        </motion.span>
                      ) : submitted ? (
                        <motion.span
                          key="success"
                          className="relative flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <motion.i
                            className="fas fa-check-circle text-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                          Sent Successfully!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          className="relative flex items-center gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          Send Enquiry
                          <i className="fas fa-paper-plane text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>

                {/* ── Response time indicator ── */}
                <motion.div
                  className="flex items-center justify-center gap-2 pt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <div className="flex items-center gap-2 text-white/25 text-xs">
                    <i className="fas fa-clock text-ocean-500/50" />
                    <span>We typically respond within 2 hours</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
