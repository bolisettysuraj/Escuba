"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  {
    label: "Non Swimmers",
    href: "#experiences",
    children: [
      "PADI Discover Shore Diving",
      "PADI Discover Boat Diving",
      "PADI Skin Diver (Snorkeling)",
    ],
  },
  {
    label: "Scuba Courses",
    href: "#courses",
    children: [
      "PADI Open Water Diver",
      "PADI Advanced Open Water",
      "PADI Adventure Diver",
      "PADI Rescue Diver",
      "PADI Dive Master",
      "PADI Scuba Diver",
      "Emergency First Response",
    ],
  },
  { label: "Dive Sites", href: "#divesites" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-2 shadow-xl shadow-black/30"
          : "py-4"
      }`}
      style={{
        background: scrolled
          ? "rgba(1, 10, 19, 0.85)"
          : "linear-gradient(to bottom, rgba(1,10,19,0.7), transparent)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 z-[110]">
          <Image
            src="/logo.png"
            alt="Experience Scuba"
            width={160}
            height={40}
            className="h-16 sm:h-[72px] w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDesktopDropdown(item.label)}
              onMouseLeave={() => setOpenDesktopDropdown(null)}
            >
              <a
                href={item.href}
                className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/[0.06] flex items-center gap-1.5"
              >
                {item.label}
                {item.children && (
                  <i
                    className={`fas fa-chevron-down text-[9px] opacity-50 transition-all duration-300 ${
                      openDesktopDropdown === item.label ? "rotate-180 opacity-100" : ""
                    }`}
                  />
                )}
              </a>

              {/* Desktop Dropdown */}
              {item.children && (
                <div
                  className={`absolute top-full left-0 pt-1 transition-all duration-300 ${
                    openDesktopDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2 pointer-events-none"
                  }`}
                  style={{ zIndex: 200 }}
                >
                  {/* Invisible bridge to prevent hover gap */}
                  <div className="h-1 w-full" />
                  <div
                    className="rounded-xl py-2 min-w-[260px] shadow-2xl shadow-black/50"
                    style={{
                      background: "rgba(4, 18, 36, 0.97)",
                      backdropFilter: "blur(30px)",
                      WebkitBackdropFilter: "blur(30px)",
                      border: "1px solid rgba(0, 168, 232, 0.12)",
                    }}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-ocean-500/40 group-hover/item:bg-ocean-400 group-hover/item:shadow-sm group-hover/item:shadow-ocean-400/50 transition-all" />
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 z-[110]">
          <a
            href="tel:+916364360134"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white hover:shadow-lg hover:shadow-ocean-500/30 transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-phone text-xs" />
            Book Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[105] transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(1, 10, 19, 0.97)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full gap-3 px-8 transition-all duration-500 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className="text-center w-full max-w-xs"
              style={{
                transitionDelay: mobileOpen ? `${idx * 60}ms` : "0ms",
              }}
            >
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className="text-2xl font-[family-name:var(--font-display)] text-white/90 hover:text-white py-2 flex items-center gap-2 mx-auto"
                  >
                    {item.label}
                    <i
                      className={`fas fa-chevron-down text-xs text-ocean-400 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-out ${
                      activeDropdown === item.label
                        ? "max-h-[300px] opacity-100 mt-1 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="rounded-xl py-2 px-4" style={{ background: "rgba(255,255,255,0.03)" }}>
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-ocean-300/70 hover:text-ocean-300"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-[family-name:var(--font-display)] text-white/90 hover:text-white py-2 block"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="tel:+916364360134"
            className="mt-8 flex items-center gap-2 px-8 py-3.5 rounded-full text-lg font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20"
          >
            <i className="fas fa-phone" />
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
