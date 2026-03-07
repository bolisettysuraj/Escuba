"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const terms = [
  {
    title: "Certified Divers' Responsibility",
    icon: "fa-id-card",
    content:
      "Certified divers must carry valid certification and log books. It is the diver's responsibility to ensure their certification is current and recognized by PADI or equivalent agencies. Dive operators reserve the right to verify credentials before any dive.",
  },
  {
    title: "Medical & Safety Disclosures",
    icon: "fa-heartbeat",
    content:
      "All participants must honestly disclose any medical conditions, medications, or health concerns that may affect their ability to dive safely. Failure to disclose relevant medical information may result in cancellation without refund and releases the company from any liability.",
  },
  {
    title: "Scuba Training & Certification",
    icon: "fa-graduation-cap",
    content:
      "All training is conducted according to PADI standards. Certification is awarded only upon successful completion of all required knowledge development, confined water dives, and open water dives. The instructor reserves the right to withhold certification if a student does not meet the required standards.",
  },
  {
    title: "Medical Forms Are Mandatory",
    icon: "fa-file-medical",
    content:
      "Every participant must complete and sign the required PADI medical questionnaire before any dive activity. If any medical conditions are indicated, a physician's clearance letter will be required before participation. No exceptions will be made to this policy.",
  },
  {
    title: "Dive Site Changes",
    icon: "fa-map-marked-alt",
    content:
      "Dive sites may be changed without prior notice due to weather conditions, sea conditions, current patterns, or safety concerns. The dive team will always select the safest and most enjoyable alternative site available. No refunds will be issued due to dive site changes.",
  },
  {
    title: "Final Decision of Dive Professionals",
    icon: "fa-gavel",
    content:
      "The dive instructor or dive master has the final say on all matters related to the dive, including but not limited to dive depth, duration, buddy pairing, and whether a participant is fit to dive. Their decisions are made in the interest of safety and are non-negotiable.",
  },
  {
    title: "Issue Resolution",
    icon: "fa-handshake",
    content:
      "Any issues or complaints should be reported immediately to the dive centre management. We are committed to resolving concerns promptly and fairly. Issues reported after departure may be harder to investigate and resolve. We encourage open communication during your visit.",
  },
  {
    title: "External Delays",
    icon: "fa-clock",
    content:
      "Experience Scuba is not responsible for delays caused by external factors including but not limited to ferry schedules, weather conditions, government regulations, natural disasters, or other circumstances beyond our control. We will make reasonable efforts to reschedule affected activities.",
  },
  {
    title: "Right to Cancel Bookings",
    icon: "fa-ban",
    content:
      "Experience Scuba reserves the right to cancel any booking if safety conditions are not met, if a participant fails medical screening, or if the participant's behaviour poses a risk to themselves or others. In such cases, refund policies will apply as per the cancellation policy below.",
  },
  {
    title: "Limited Liability",
    icon: "fa-shield-alt",
    content:
      "Scuba diving is an adventure activity that carries inherent risks. By participating, you acknowledge and accept these risks. Experience Scuba's liability is limited to the cost of the service booked. We are not liable for any indirect, incidental, or consequential damages arising from participation in our activities.",
  },
  {
    title: "Handling Mistakes",
    icon: "fa-exclamation-triangle",
    content:
      "While we strive for perfection, mistakes can happen. If an error occurs on our part, we will make every reasonable effort to rectify the situation, whether through rescheduling, alternative arrangements, or appropriate compensation. We believe in fairness and accountability.",
  },
  {
    title: "Respect & Conduct",
    icon: "fa-users",
    content:
      "All participants are expected to treat staff, fellow divers, and the marine environment with respect. Any form of harassment, abusive behaviour, or deliberate damage to marine life or equipment will result in immediate termination of services without refund.",
  },
  {
    title: "Fairness & Accountability",
    icon: "fa-balance-scale",
    content:
      "We are committed to conducting our business with fairness, transparency, and accountability. We expect the same from our guests. Any disputes will be handled in good faith, with the goal of reaching a fair resolution for all parties involved.",
  },
  {
    title: "Cancellation Policy",
    icon: "fa-calendar-times",
    content:
      "Cancellations made within 48 hours of the scheduled activity will incur 100% charges with no refund. If a participant is found to be medically unfit during training or briefing, a 50% refund will be provided. Cancellations made more than 48 hours in advance are eligible for a full refund minus any applicable processing fees.",
  },
];

export default function TermsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] flex items-end overflow-hidden">
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
            <span className="text-ocean-400">Terms and Conditions</span>
          </motion.nav>

          <motion.span
            className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            Legal
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Terms and <span className="text-gradient">Conditions</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg sm:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Please read these terms carefully before booking any dive experience or course with Experience Scuba.
          </motion.p>
        </div>
      </section>

      {/* ── TERMS SECTIONS ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-sep absolute top-0 left-0 right-0" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ocean-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {terms.map((term, i) => (
              <motion.div
                key={term.title}
                className="glass-strong rounded-2xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3), ease }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0 mt-0.5">
                    <i className={`fas ${term.icon} text-ocean-400`} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-white mb-3">
                      <span className="text-ocean-400/60 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                      {term.title}
                    </h3>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── IMPORTANT NOTE ── */}
          <motion.div
            className="mt-12 glass-strong rounded-2xl p-6 sm:p-8 border-ocean-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center shrink-0">
                <i className="fas fa-info-circle text-white" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-2">
                  Important Note
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  By booking any service with Experience Scuba, you acknowledge that you have read, understood, and agree to abide by all the terms and conditions listed above. These terms are designed to ensure the safety and enjoyment of all participants. If you have any questions about these terms, please{" "}
                  <Link href="/contact" className="text-ocean-400 hover:text-ocean-300 transition-colors underline underline-offset-2">
                    contact us
                  </Link>{" "}
                  before making your booking.
                </p>
              </div>
            </div>
          </motion.div>
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
            Have <span className="text-gradient">Questions?</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            If you need any clarification on our terms and conditions, feel free to reach out to us
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,168,232,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-envelope" />
                Contact Us
              </motion.span>
            </Link>
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
