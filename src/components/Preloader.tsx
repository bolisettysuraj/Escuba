"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 600);
    const hideTimer = setTimeout(() => setHidden(true), 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-deep-950 transition-all duration-600 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <Image
        src="/logo.png"
        alt="Experience Scuba"
        width={180}
        height={50}
        className="h-10 sm:h-12 md:h-14 w-auto mb-8"
        priority
      />
      <div className="flex gap-2.5 mb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-ocean-500 to-teal-500"
            style={{
              animation: `loaderPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
