"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const contactCards = [
  {
    icon: "fa-phone",
    title: "Phone",
    lines: [
      { text: "+91 6364360134", href: "tel:+916364360134" },
      { text: "+91 9632362244", href: "tel:+919632362244" },
    ],
  },
  {
    icon: "fa-envelope",
    title: "Email",
    lines: [
      {
        text: "experiencescubadive.andaman@gmail.com",
        href: "mailto:experiencescubadive.andaman@gmail.com",
      },
    ],
  },
  {
    icon: "fa-map-marker-alt",
    title: "Location",
    lines: [
      {
        text: "Vijaynagar, Beach No.5, Havelock Island, Andaman and Nicobar Islands 744211",
        href: "",
      },
      {
        text: "Opposite Eldorado Resort",
        href: "",
      },
    ],
  },
];

const socialLinks = [
  { icon: "fab fa-whatsapp", label: "WhatsApp", href: "https://wa.me/916364360134" },
  { icon: "fab fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fab fa-instagram", label: "Instagram", href: "#" },
  { icon: "fab fa-youtube", label: "YouTube", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            <span className="text-ocean-400">Contact Us</span>
          </motion.nav>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            Reach Out
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Have questions or ready to book your dive? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="glass-strong rounded-2xl p-6 sm:p-8 text-center"
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
                  <i className={`fas ${card.icon} text-ocean-400 text-xl`} />
                </motion.div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1">
                  {card.lines.map((line, j) =>
                    line.href ? (
                      <a
                        key={j}
                        href={line.href}
                        className="block text-white/50 text-sm hover:text-ocean-400 transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={j} className="text-white/50 text-sm">
                        {line.text}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── MAP & FORM GRID ── */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              className="glass-strong rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.123456789!2d93.0!3d11.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHavelock+Island!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Experience Scuba Location - Havelock Island"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              className="glass-strong rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white mb-2">
                Send Us a <span className="text-gradient">Message</span>
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { type: "text", placeholder: "Your Name", icon: "fa-user" },
                  { type: "tel", placeholder: "Phone Number", icon: "fa-phone" },
                  { type: "email", placeholder: "Email Address", icon: "fa-envelope" },
                ].map((field, i) => (
                  <motion.div
                    key={field.placeholder}
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  >
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.06] transition-all duration-300"
                    />
                    <i
                      className={`fas ${field.icon} absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs`}
                    />
                  </motion.div>
                ))}

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.44 }}
                >
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-sm text-white/25 focus:text-white focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.06] transition-all duration-300 appearance-none"
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
                  transition={{ duration: 0.4, delay: 0.52 }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/50 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  />
                  <i className="fas fa-comment absolute left-4 top-4 text-white/20 text-xs" />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20"
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,168,232,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <>
                      <i className="fas fa-check" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <i className="fas fa-paper-plane text-xs" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 via-deep-950 to-teal-900/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Follow Us on <span className="text-gradient">Social Media</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Stay connected and see what&apos;s happening underwater
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-white/50 hover:text-white hover:bg-ocean-500/20 transition-all duration-300"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08, ease: "backOut" }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${s.icon} text-lg`} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
