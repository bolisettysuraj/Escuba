"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  { name: "Priya M", city: "Mumbai", action: "booked Shore Diving", initials: "PM", time: "2 hours ago" },
  { name: "Rahul K", city: "Delhi", action: "booked Open Water Course", initials: "RK", time: "3 hours ago" },
  { name: "Ananya S", city: "Bangalore", action: "booked Boat Diving", initials: "AS", time: "5 hours ago" },
  { name: "Vikram R", city: "Chennai", action: "enquired about Snorkeling", initials: "VR", time: "1 hour ago" },
  { name: "Meera J", city: "Pune", action: "booked Advanced Open Water", initials: "MJ", time: "4 hours ago" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const show = useCallback(() => {
    if (dismissed) return;
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, [dismissed]);

  useEffect(() => {
    const initial = setTimeout(() => show(), 6000);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      show();
    }, 18000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [show]);

  const msg = messages[index];

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-24 left-4 sm:left-6 z-40 max-w-[280px] sm:max-w-xs"
          initial={{ opacity: 0, x: -40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative flex items-center gap-3 rounded-2xl px-4 py-3 border border-white/10"
            style={{
              background: "rgba(2,20,36,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,168,232,0.08)",
            }}
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean-500 to-teal-500 flex items-center justify-center shrink-0 text-white text-[10px] font-bold">
              {msg.initials}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="text-white text-xs font-medium leading-tight">
                <span className="font-semibold">{msg.name}</span>
                <span className="text-white/50"> from {msg.city}</span>
              </p>
              <p className="text-ocean-400 text-[11px] font-medium mt-0.5">{msg.action}</p>
              <p className="text-white/30 text-[9px] mt-0.5">{msg.time}</p>
            </div>

            {/* Close */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-deep-900 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-times text-[7px]" />
            </button>

            {/* Accent line */}
            <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-ocean-500 to-teal-500"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
