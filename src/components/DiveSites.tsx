"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const sites = [
  { name: "Nemo Reef", depth: "5-18m", desc: "Vibrant clownfish colonies and stunning coral formations", image: "/images/divesite-1.webp", large: true },
  { name: "The Wall", depth: "10-30m", desc: "Dramatic vertical drop-off teeming with marine life", image: "/images/divesite-2.webp" },
  { name: "Johnny's Gorge", depth: "12-25m", desc: "Encounter manta rays and whale sharks in season", image: "/images/marine-1.webp" },
  { name: "Inchkeith Wreck", depth: "18-28m", desc: "Historic WWII shipwreck covered in beautiful corals", image: "/images/marine-4.webp" },
];

const allSiteNames = [
  "Nemo Reef", "The Wall", "Dixon's Pinnacle", "Pilot Reef", "Inchkeith Wreck",
  "White House Rock", "Jackson's Bar", "Johnny's Gorge", "Broken Ledge",
  "Minerva Ledge", "Aquarium", "The Slope", "Red Light House", "Tribe Gate", "Turtle Beach",
];

export default function DiveSites() {
  return (
    <section id="divesites" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-ocean-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Explore Havelock Island
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stunning <span className="text-gradient">Dive Sites</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            15+ magnificent underwater locations waiting to be explored
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          className="mb-12 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-950 to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...allSiteNames, ...allSiteNames].map((site, i) => (
              <span
                key={`${site}-${i}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full glass text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors cursor-default"
              >
                <i className="fas fa-map-marker-alt text-ocean-500 text-xs" />
                {site}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sites.map((site, i) => (
            <motion.div
              key={site.name}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                site.large ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div
                className={`relative ${
                  site.large ? "aspect-[3/4] lg:aspect-auto lg:h-full min-h-[300px]" : "aspect-[4/3]"
                } overflow-hidden`}
              >
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <motion.span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-ocean-300 mb-3"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,168,232,0.15)" }}
                  >
                    <i className="fas fa-arrows-alt-v" />
                    {site.depth}
                  </motion.span>
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-1 group-hover:text-ocean-300 transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-white/40 text-sm">{site.desc}</p>
                </div>
              </div>

              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,168,232,0.2), 0 0 30px rgba(0,168,232,0.06)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
