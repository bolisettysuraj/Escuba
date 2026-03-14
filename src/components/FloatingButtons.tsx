"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const formFields = [
  { type: "text" as const, placeholder: "Your Name", icon: "fa-user", label: "Full Name", id: "popup-name" },
  { type: "tel" as const, placeholder: "Phone Number", icon: "fa-phone", label: "Phone Number", id: "popup-phone" },
  { type: "email" as const, placeholder: "Email Address", icon: "fa-envelope", label: "Email Address", id: "popup-email" },
];

const allOptions = [
  "Shore Diving",
  "Boat Diving",
  "Snorkeling",
  "PADI Discover Scuba Dive",
  "Open Water Diver Course",
  "Advanced Open Water",
  "Rescue Diver Course",
  "Dive Master Course",
  "Kids Diving",
  "Other",
];

function getPageContext(pathname: string) {
  if (pathname.startsWith("/non-swimmers")) {
    return {
      waMessage: encodeURIComponent(
        "Hi Experience Scuba! I'm interested in scuba diving for non-swimmers in Havelock Island. Could you share details about your beginner experiences and availability?"
      ),
      defaultOption: pathname.includes("shore") ? "Shore Diving"
        : pathname.includes("boat") ? "Boat Diving"
        : pathname.includes("snorkeling") || pathname.includes("skin-diver") ? "Snorkeling"
        : pathname.includes("padi-discover") ? "PADI Discover Scuba Dive"
        : "",
    };
  }
  if (pathname.startsWith("/courses")) {
    return {
      waMessage: encodeURIComponent(
        "Hi Experience Scuba! I'm interested in PADI certification courses in Havelock Island. Could you share details about your courses, schedule and pricing?"
      ),
      defaultOption: pathname.includes("open-water") && !pathname.includes("advanced") ? "Open Water Diver Course"
        : pathname.includes("advanced") ? "Advanced Open Water"
        : pathname.includes("rescue") ? "Rescue Diver Course"
        : pathname.includes("dive-master") ? "Dive Master Course"
        : "",
    };
  }
  if (pathname.startsWith("/kids")) {
    return {
      waMessage: encodeURIComponent(
        "Hi Experience Scuba! I'm interested in kids diving programs in Havelock Island. Could you share details about Bubble Maker and Seal Team programs?"
      ),
      defaultOption: "Kids Diving",
    };
  }
  return {
    waMessage: encodeURIComponent(
      "Hi Experience Scuba! I'm interested in diving in Havelock Island. Could you share more details about your experiences and availability?"
    ),
    defaultOption: "",
  };
}

export default function FloatingButtons() {
  const pathname = usePathname();
  const { waMessage, defaultOption } = getPageContext(pathname);
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 2500);
    }, 1200);
  };

  const buttons = [
    {
      key: "call",
      href: "tel:+916364360134",
      label: "Call Us",
      icon: "fas fa-phone",
      color: "from-ocean-500 to-ocean-600",
      glow: "rgba(0,168,232,0.35)",
      onClick: undefined as (() => void) | undefined,
      external: false,
    },
    {
      key: "enquire",
      href: undefined as string | undefined,
      label: "Enquire",
      icon: "fas fa-envelope",
      color: "from-teal-500 to-teal-400",
      glow: "rgba(45,212,191,0.35)",
      onClick: () => setShowForm(true),
      external: false,
    },
    {
      key: "whatsapp",
      href: `https://wa.me/916364360134?text=${waMessage}`,
      label: "WhatsApp",
      icon: "fab fa-whatsapp",
      color: "from-[#25D366] to-[#128C7E]",
      glow: "rgba(37,211,102,0.35)",
      onClick: undefined as (() => void) | undefined,
      external: true,
    },
  ];

  return (
    <>
      {/* ── Floating Contact Bar ── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2.5 sm:gap-3 rounded-full px-2.5 sm:px-3 py-2.5 sm:py-3 border border-white/10"
            style={{
              background: "rgba(1,10,19,0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
            initial={{ opacity: 0, y: 40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 40, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {buttons.map((c) =>
              c.onClick ? (
                <motion.button
                  key={c.key}
                  onClick={c.onClick}
                  className={`relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-white text-sm sm:text-base font-semibold bg-gradient-to-r ${c.color} transition-shadow duration-300 cursor-pointer`}
                  style={{ boxShadow: `0 4px 16px ${c.glow}` }}
                  whileHover={{ scale: 1.06, boxShadow: `0 6px 24px ${c.glow}` }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={c.label}
                >
                  <i className={`${c.icon} text-sm sm:text-base`} />
                  <span className="hidden sm:inline">{c.label}</span>
                </motion.button>
              ) : (
                <motion.a
                  key={c.key}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-white text-sm sm:text-base font-semibold bg-gradient-to-r ${c.color} transition-shadow duration-300`}
                  style={{ boxShadow: `0 4px 16px ${c.glow}` }}
                  whileHover={{ scale: 1.06, boxShadow: `0 6px 24px ${c.glow}` }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={c.label}
                >
                  <i className={`${c.icon} text-sm sm:text-base`} />
                  <span className="hidden sm:inline">{c.label}</span>
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Enquiry Popup Modal ── */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-deep-950/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-[61] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-md rounded-3xl border border-white/10 overflow-hidden"
                style={{
                  background: "rgba(2,20,36,0.97)",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,168,232,0.08)",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top gradient accent */}
                <div className="h-1 w-full bg-gradient-to-r from-ocean-500 via-teal-400 to-ocean-500" />

                {/* Close button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 z-10"
                  aria-label="Close"
                >
                  <i className="fas fa-times text-sm" />
                </button>

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-ocean-500/20">
                      <i className="fas fa-water text-white text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                      Quick Enquiry
                    </h3>
                    <p className="text-white/40 text-sm mt-1">
                      Fill in your details and we&apos;ll get back within 2 hours
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formFields.map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="text-white/50 text-[11px] uppercase tracking-wider mb-1 block font-medium"
                        >
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08)] transition-all duration-300"
                          />
                          <i className={`fas ${field.icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 text-xs`} />
                        </div>
                      </div>
                    ))}

                    {/* Experience select */}
                    <div>
                      <label
                        htmlFor="popup-experience"
                        className="text-white/50 text-[11px] uppercase tracking-wider mb-1 block font-medium"
                      >
                        Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="popup-experience"
                          required
                          defaultValue={defaultOption}
                          key={defaultOption}
                          className={`w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 pl-10 text-sm ${defaultOption ? "text-white" : "text-white/30"} focus:text-white focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08)] transition-all duration-300 appearance-none`}
                        >
                          <option value="" disabled>Select Experience</option>
                          {allOptions.map((exp) => (
                            <option key={exp} className="bg-deep-900 text-white">{exp}</option>
                          ))}
                        </select>
                        <i className="fas fa-water absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                        <i className="fas fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="popup-message"
                        className="text-white/50 text-[11px] uppercase tracking-wider mb-1 block font-medium"
                      >
                        Message (optional)
                      </label>
                      <textarea
                        id="popup-message"
                        placeholder="Any specific questions?"
                        rows={3}
                        className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-ocean-500/40 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.08)] transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 ${
                        submitted
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/25"
                          : "bg-gradient-to-r from-ocean-500 to-teal-500 shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40"
                      }`}
                      whileHover={!loading && !submitted ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.97 } : {}}
                    >
                      {loading ? (
                        <>
                          <motion.i
                            className="fas fa-circle-notch"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : submitted ? (
                        <>
                          <i className="fas fa-check-circle" />
                          Sent Successfully!
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <i className="fas fa-paper-plane text-xs" />
                        </>
                      )}
                    </motion.button>

                    {/* WhatsApp alternative */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex-1 h-px bg-white/[0.06]" />
                      <span className="text-white/25 text-[10px] uppercase tracking-wider">or</span>
                      <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    <a
                      href={`https://wa.me/916364360134?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-sm font-semibold text-white border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-300"
                    >
                      <i className="fab fa-whatsapp text-[#25D366] text-base" />
                      Chat on WhatsApp instead
                    </a>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-ocean-500/30"
            style={{ background: "rgba(1, 10, 19, 0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(0,168,232,0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-up text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
