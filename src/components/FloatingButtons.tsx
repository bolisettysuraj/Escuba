"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/916364360134"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
        whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(37,211,102,0.5)" }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-whatsapp text-2xl" />
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-ocean-500/30"
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
