"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface NavChild {
  name: string;
  desc: string;
  price: string;
  href: string;
  icon?: string;
  image?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Non Swimmers",
    href: "/non-swimmers",
    children: [
      {
        name: "PADI Discover Shore Diving",
        desc: "Beach entry dive, perfect for first-timers",
        price: "3,500",
        href: "/non-swimmers/shore-scuba-diving",
        icon: "fa-water",
        image: "/images/shore-diving.webp",
      },
      {
        name: "PADI Discover Boat Diving",
        desc: "Deeper dive sites with boat ride included",
        price: "4,500",
        href: "/non-swimmers/boat-scuba-diving-havelock",
        icon: "fa-ship",
        image: "/images/boat-diving.webp",
      },
      {
        name: "PADI Discover Scuba Dive",
        desc: "Complete PADI DSD experience",
        price: "4,000",
        href: "/non-swimmers/padi-discover-scuba-dive-havelock",
        icon: "fa-certificate",
        image: "/images/boat-diving.webp",
      },
      {
        name: "PADI Skin Diver (Snorkeling)",
        desc: "Surface-level fun, great for families",
        price: "1,500",
        href: "/non-swimmers/skin-diver-snorkeling-havelock",
        icon: "fa-person-swimming",
        image: "/images/snorkeling.webp",
      },
    ],
  },
  {
    label: "Scuba Courses",
    href: "/courses",
    children: [
      {
        name: "PADI Open Water Diver",
        desc: "Your first certification to 18 meters",
        price: "28,000",
        href: "/courses/padi-open-water-diving-course",
      },
      {
        name: "PADI Advanced Open Water",
        desc: "Expand skills with deep & navigation dives",
        price: "22,000",
        href: "/courses/padi-advanced-open-water-diving-course",
      },
      {
        name: "PADI Adventure Diver",
        desc: "Try 3 specialty dives",
        price: "15,000",
        href: "/courses/padi-adventure-diver-course",
      },
      {
        name: "PADI Rescue Diver",
        desc: "Manage dive emergencies",
        price: "25,000",
        href: "/courses/padi-rescue-diver-course",
      },
      {
        name: "PADI Dive Master",
        desc: "First professional level certification",
        price: "55,000",
        href: "/courses/padi-dive-master-course",
      },
      {
        name: "PADI Scuba Diver",
        desc: "Shorter certification, dive to 12m",
        price: "20,000",
        href: "/courses/padi-scuba-diver-course",
      },
      {
        name: "Emergency First Response",
        desc: "CPR and first aid training",
        price: "8,000",
        href: "/courses/padi-emergency-first-repsonse-provider",
      },
    ],
  },
  { label: "Speciality Courses", href: "/padi-speciality-courses-andaman" },
  { label: "Dive Sites", href: "/dive-sites" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "py-1.5 sm:py-2 shadow-xl shadow-black/30" : "py-2 sm:py-4"
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
        <nav aria-label="Main navigation" className="max-w-7xl mx-auto pl-2 pr-3 sm:pl-4 sm:pr-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 z-[110] relative">
            <Image
              src="/logo.png"
              alt="Experience Scuba"
              width={160}
              height={40}
              className="h-12 sm:h-16 lg:h-[72px] w-auto"
              priority
            />
            <span className="w-px h-6 sm:h-8 lg:h-10 bg-white/15 shrink-0" />
            <Image
              src="/PADI.png"
              alt="PADI Certified"
              width={80}
              height={40}
              className="h-7 sm:h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDesktopDropdown(item.label)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`nav-link px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-white/[0.06] flex items-center gap-1.5 ${
                    isActive(item.href)
                      ? "active text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <i
                      className={`fas fa-chevron-down text-[9px] transition-all duration-300 ${
                        openDesktopDropdown === item.label ? "rotate-180 opacity-100" : "opacity-40"
                      }`}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown — names only */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 pt-1 transition-all duration-300 ${
                      openDesktopDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                    style={{ zIndex: 200 }}
                  >
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
                      {item.children.map((child, ci) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.06] hover:pl-6 transition-all duration-300 group/item"
                          style={{ transitionDelay: openDesktopDropdown === item.label ? `${ci * 30}ms` : "0ms" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-ocean-500/30 group-hover/item:bg-ocean-400 group-hover/item:shadow-md group-hover/item:shadow-ocean-400/50 transition-all duration-300 group-hover/item:scale-150" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 z-[110] relative">
            <a
              href="tel:+916364360134"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-md shadow-ocean-500/20 hover:shadow-lg hover:shadow-ocean-500/40 transition-all duration-300 hover:scale-105 btn-shimmer"
            >
              <i className="fas fa-phone text-xs" />
              Book Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
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
      </header>

      {/* Mobile Menu — rendered OUTSIDE header for proper z-index stacking */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        className={`lg:hidden fixed inset-0 z-[150] transition-all duration-500 ${
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
          className={`relative z-10 flex flex-col items-center h-full gap-2 px-8 pt-20 pb-8 overflow-y-auto transition-all duration-500 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white z-20"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-lg" />
          </button>

          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`w-full max-w-sm transition-all duration-500 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + idx * 80}ms` : "0ms",
              }}
            >
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-2 py-3"
                  >
                    <span className="text-xl font-[family-name:var(--font-display)] text-white/90 font-semibold">
                      {item.label}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeDropdown === item.label
                          ? "bg-ocean-500/20 rotate-180"
                          : "bg-white/5"
                      }`}
                    >
                      <i
                        className={`fas fa-chevron-down text-[10px] transition-colors ${
                          activeDropdown === item.label ? "text-ocean-400" : "text-white/30"
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-out ${
                      activeDropdown === item.label
                        ? "max-h-[700px] opacity-100 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,168,232,0.08)" }}>
                      {item.children.map((child, ci) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3.5 px-4 py-3.5 text-left transition-colors active:bg-white/[0.04]"
                          style={{
                            background: ci % 2 === 0 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.03)",
                            borderBottom: ci < (item.children?.length ?? 0) - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                          }}
                        >
                          {child.image ? (
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 mt-0.5">
                              <Image
                                src={child.image}
                                alt={child.name}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: "rgba(0,168,232,0.08)" }}
                            >
                              <i className={`fas ${child.icon || "fa-circle"} text-ocean-400 text-xs`} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white/85 leading-tight">
                              {child.name}
                            </div>
                            <div className="text-[11px] text-white/30 mt-1 leading-snug">
                              {child.desc}
                            </div>
                            <div className="text-[11px] font-bold text-teal-400/70 mt-1.5">
                              From &#8377;{child.price}
                            </div>
                          </div>
                          <i className="fas fa-chevron-right text-[9px] text-white/15 mt-2.5 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-2 py-3"
                >
                  {isActive(item.href) && (
                    <span className="w-1 h-6 rounded-full bg-gradient-to-b from-ocean-500 to-teal-500" />
                  )}
                  <span className={`text-xl font-[family-name:var(--font-display)] font-semibold ${
                    isActive(item.href) ? "text-white" : "text-white/70"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              )}
            </div>
          ))}

          {/* CTA buttons */}
          <div className="w-full max-w-sm mt-6 space-y-3">
            <a
              href="tel:+916364360134"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-r from-ocean-500 to-teal-500 text-white shadow-lg shadow-ocean-500/20"
            >
              <i className="fas fa-phone text-sm" />
              Book Now
            </a>
            <a
              href="https://wa.me/916364360134"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold text-white/80"
              style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.25)" }}
            >
              <i className="fab fa-whatsapp text-[#25D366] text-lg" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
