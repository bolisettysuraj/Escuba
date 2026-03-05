export interface ExperienceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  tag: string;
  icon: string;
  image: string;
  heroImage: string;
  color: string;
  price: string;
  duration: string;
  depth: string;
  description: string;
  longDescription: string[];
  includes: string[];
  highlights: string[];
  requirements: { label: string; value: string }[];
  steps: { title: string; desc: string; icon: string }[];
}

export const experiences: ExperienceData[] = [
  {
    slug: "shore-scuba-diving",
    title: "PADI Discover Shore Scuba Diving in Andaman Islands",
    shortTitle: "PADI Discover Shore Diving",
    tagline: "Beach entry dive, perfect for first-timers",
    tag: "Most Popular",
    icon: "fa-water",
    image: "/images/shore-diving.webp",
    heroImage: "/images/shore-diving.webp",
    color: "from-cyan-500 to-blue-600",
    price: "3,500",
    duration: "2-3 Hours",
    depth: "6-12 Meters",
    description:
      "Shore diving is one of the easiest and beginner-friendly ways to experience Scuba Diving. Enter the water directly from the beach, guided by our certified PADI instructors into a magical underwater world.",
    longDescription: [
      "Perfect for first-timers, shore scuba diving lets you enter the water directly from the beach or shore. No boat required — just walk in and start exploring the underwater world of Havelock Island.",
      "Havelock Island features crystal-clear waters and incredible marine biodiversity, offering coral gardens visible just meters from shore. Our certified instructors ensure your complete safety while you discover the vibrant reef life below.",
      "Even if you do not know how to swim, you can still experience the wonders of the underwater world. Our professional instructors will guide you through basic safety rules and underwater skills including breathing techniques, mask clearing, and hand signal communication.",
    ],
    includes: [
      "All scuba diving equipment",
      "Professional PADI certified instructor",
      "Dedicated underwater guide",
      "Underwater photographs & videos",
      "Pre-dive safety briefing & training",
      "Shallow water practice session",
    ],
    highlights: [
      "Direct shore entry — no boat needed",
      "Calm, sheltered diving areas",
      "Minimal wave conditions",
      "No swimming skills required",
      "Coral gardens meters from shore",
      "Professional safety accompaniment",
    ],
    requirements: [
      { label: "Ages 12-50", value: "No medical certificate needed (if healthy)" },
      { label: "Ages 51-60", value: "Valid medical fitness certificate required" },
      { label: "Above 60", value: "Not recommended" },
      { label: "Medical conditions", value: "Asthma, heart issues require physician consultation" },
    ],
    steps: [
      {
        title: "Safety Briefing",
        desc: "Learn breathing techniques, underwater hand signals, regulator handling, mask clearing, and buoyancy control.",
        icon: "fa-chalkboard-teacher",
      },
      {
        title: "Shallow Water Practice",
        desc: "Rehearse all skills in calm, sheltered shore areas before your actual dive.",
        icon: "fa-swimmer",
      },
      {
        title: "The Dive",
        desc: "Explore coral reefs at 6-12 meters depth, spot colorful fish and stunning marine life with your guide.",
        icon: "fa-fish",
      },
      {
        title: "Photos & Memories",
        desc: "Receive professional underwater photographs and videos of your entire diving experience.",
        icon: "fa-camera",
      },
    ],
  },
  {
    slug: "boat-scuba-diving-havelock",
    title: "PADI Discover Boat Scuba Diving in Andaman Islands",
    shortTitle: "PADI Discover Boat Diving",
    tagline: "Deeper dive sites with boat ride included",
    tag: "Premium",
    icon: "fa-ship",
    image: "/images/boat-diving.webp",
    heroImage: "/images/boat-diving.webp",
    color: "from-ocean-500 to-teal-500",
    price: "4,500",
    duration: "3-4 Hours",
    depth: "10-18 Meters",
    description:
      "For those who want to explore dive sites further from the shore, boat diving takes you to stunning offshore locations. See marine life in deeper waters with incredible visibility.",
    longDescription: [
      "Boat-based scuba diving takes you beyond the shore to explore unique underwater locations that are only accessible by boat. Travel to stunning offshore dive sites and discover the deeper marine world of Havelock Island.",
      "Participants travel by comfortable dive boat to remote offshore locations, accessing deeper waters teeming with diverse marine life. The boat ride itself offers scenic ocean views and a relaxing start to your adventure.",
      "Even if you do not know how to swim, our professional instructors provide complete guidance. From pre-dive safety training to the actual dive, a certified PADI instructor stays with you throughout the entire experience.",
    ],
    includes: [
      "All scuba diving equipment",
      "Professional PADI certified instructor",
      "Dedicated underwater guide",
      "Underwater photographs & videos",
      "Pre-dive briefing & safety training",
      "Boat transportation to dive site",
      "Comfortable onboard relaxation area",
    ],
    highlights: [
      "Explore unique offshore dive sites",
      "Encounter exotic sea creatures in deeper waters",
      "Scenic boat ride to dive location",
      "Comfortable gear setup onboard",
      "Greater marine biodiversity",
      "Professional safety supervision throughout",
    ],
    requirements: [
      { label: "Ages 12-50", value: "No medical certificate needed (if healthy)" },
      { label: "Ages 51-60", value: "Valid medical fitness certificate required" },
      { label: "Above 60", value: "Not recommended" },
      { label: "Medical conditions", value: "Asthma, heart issues require physician consultation" },
    ],
    steps: [
      {
        title: "Safety Briefing",
        desc: "Complete pre-dive training covering breathing, hand signals, equipment use, and safety protocols.",
        icon: "fa-chalkboard-teacher",
      },
      {
        title: "Boat Transfer",
        desc: "Enjoy a scenic boat ride to your offshore dive site with equipment setup onboard.",
        icon: "fa-ship",
      },
      {
        title: "The Dive",
        desc: "Explore stunning underwater landscapes at 10-18 meters, guided by your personal instructor.",
        icon: "fa-fish",
      },
      {
        title: "Photos & Memories",
        desc: "Receive professional underwater photographs and videos captured during your dive.",
        icon: "fa-camera",
      },
    ],
  },
  {
    slug: "skin-diver-snorkeling-havelock",
    title: "PADI Skin Diver (Snorkeling) in Havelock Island",
    shortTitle: "PADI Skin Diver (Snorkeling)",
    tagline: "Surface-level exploration, great for families",
    tag: "Fun & Easy",
    icon: "fa-person-swimming",
    image: "/images/snorkeling.webp",
    heroImage: "/images/snorkeling.webp",
    color: "from-teal-400 to-emerald-500",
    price: "1,500",
    duration: "1-2 Hours",
    depth: "Surface Level",
    description:
      "Float on the surface and witness stunning coral gardens and colorful fish below. Learn proper snorkeling techniques and breath-holding skills — perfect for families.",
    longDescription: [
      "The PADI Skin Diver program enables you to dive below the surface, extend your breath-holding capacity, and gain the skills needed to explore the underwater world safely — all without scuba equipment.",
      "Using just a mask, fins, and snorkel, you'll discover the incredible coral gardens and vibrant marine life of Havelock Island from the surface. Our instructors teach you advanced snorkeling techniques and underwater navigation.",
      "This is the perfect option for families, those who want a lighter introduction to the underwater world, or anyone not ready for full scuba diving. It's fun, safe, and fits perfectly into your vacation plans.",
    ],
    includes: [
      "High-quality snorkeling equipment",
      "Professional PADI certified instructor",
      "Dedicated in-water guide",
      "Underwater photographs & videos",
      "Safety training & protocols",
      "Skill development session",
    ],
    highlights: [
      "No scuba tanks needed",
      "Family-friendly activity",
      "Learn advanced snorkeling techniques",
      "Breath control & underwater navigation",
      "Equipment maintenance knowledge",
      "Marine ecosystem awareness",
    ],
    requirements: [
      { label: "Minimum age", value: "12 years" },
      { label: "Ages 12-50", value: "No medical certificate needed (if healthy)" },
      { label: "Ages 51-60", value: "Valid medical fitness certificate required" },
      { label: "Above 60", value: "Not recommended" },
    ],
    steps: [
      {
        title: "Equipment Briefing",
        desc: "Learn snorkel gear preparation, proper usage, and fitting for a comfortable experience.",
        icon: "fa-chalkboard-teacher",
      },
      {
        title: "Skill Training",
        desc: "Practice advanced snorkeling techniques, breath control, and underwater navigation in shallow water.",
        icon: "fa-swimmer",
      },
      {
        title: "Guided Snorkeling",
        desc: "Explore coral gardens and marine life with your guide, using your new skills.",
        icon: "fa-fish",
      },
      {
        title: "Photos & Memories",
        desc: "Take home professional photographs and videos of your snorkeling adventure.",
        icon: "fa-camera",
      },
    ],
  },
];

export function getExperienceBySlug(slug: string): ExperienceData | undefined {
  return experiences.find((e) => e.slug === slug);
}
