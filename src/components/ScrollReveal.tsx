"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Observe reveal elements
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add("visible"), delay);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Parallax effect on scroll for ambient orbs
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.1");
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Mouse move tilt effect on glass cards
    const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = (e.clientX - centerX) / rect.width;
        const distY = (e.clientY - centerY) / rect.height;
        const isNear =
          Math.abs(e.clientX - centerX) < rect.width * 1.5 &&
          Math.abs(e.clientY - centerY) < rect.height * 1.5;

        if (isNear) {
          card.style.transform = `perspective(800px) rotateY(${distX * 3}deg) rotateX(${-distY * 3}deg) scale(1.01)`;
        } else {
          card.style.transform = "";
        }
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        card.style.transform = "";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return null;
}
