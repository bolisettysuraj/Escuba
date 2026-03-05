"use client";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative py-6 md:hidden overflow-hidden">
      <div className="relative max-w-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-ocean-900/40"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="relative aspect-video bg-deep-900">
            <iframe
              src="https://www.youtube.com/embed/vPkikG3TTcY?autoplay=1&mute=1&loop=1&playlist=vPkikG3TTcY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Experience Scuba Dive Video"
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
