"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-ocean-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png"
              alt="Experience Scuba"
              width={160}
              height={40}
              className="h-14 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Your gateway to the breathtaking underwater world of the Andaman
              Islands. PADI certified dive centre with 13+ years of experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-gold-400">
                <i className="fas fa-award" /> TripAdvisor 2024
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-gold-400">
                <i className="fas fa-medal" /> Tourism Gold
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Non-Swimmers", href: "#experiences" },
                { label: "PADI Courses", href: "#courses" },
                { label: "Dive Sites", href: "#divesites" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-ocean-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Experiences
            </h4>
            <ul className="space-y-2.5">
              {[
                "Shore Diving",
                "Boat Diving",
                "Snorkeling",
                "Kids Programs",
                "Specialty Courses",
              ].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-ocean-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-white/40">
              <p className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-ocean-500/60 mt-1 shrink-0" />
                Beach No.5, Havelock Island, Andaman
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-ocean-500/60 shrink-0" />
                <a href="tel:+916364360134" className="hover:text-ocean-400 transition-colors">
                  +91 6364360134
                </a>
              </p>
              <p className="flex items-start gap-2">
                <i className="fas fa-envelope text-ocean-500/60 mt-1 shrink-0" />
                <a
                  href="mailto:experiencescubadive.andaman@gmail.com"
                  className="hover:text-ocean-400 transition-colors break-all"
                >
                  experiencescubadive.andaman@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/30 text-sm">
            &copy; 2026 Experience Scuba. All Rights Reserved.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "fab fa-whatsapp", label: "WhatsApp" },
              { icon: "fab fa-facebook-f", label: "Facebook" },
              { icon: "fab fa-instagram", label: "Instagram" },
              { icon: "fab fa-youtube", label: "YouTube" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/30 hover:text-white hover:bg-ocean-500/20 transition-all duration-300"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${s.icon} text-sm`} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
