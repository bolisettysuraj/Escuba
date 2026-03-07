export interface KidsProgramData {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  icon: string;
  color: string;
  price: string;
  duration: string;
  depth: string;
  minAge: string;
  description: string;
  longDescription: string[];
  includes: string[];
  highlights: string[];
  steps: { title: string; desc: string; icon: string }[];
  requirements: { label: string; value: string }[];
  faqs: { q: string; a: string; icon?: string }[];
}

export const kidsPrograms: KidsProgramData[] = [
  {
    slug: "padi-seal-team-kids-havelock",
    title: "PADI Seal Team Program for Kids in Havelock Island",
    shortTitle: "PADI Seal Team",
    tag: "Ages 8+",
    icon: "fa-child",
    color: "from-teal-400 to-emerald-500",
    price: "5,000",
    duration: "Half Day",
    depth: "Pool / Shallow Water",
    minAge: "8 Years",
    description:
      "A fantastic way to introduce kids to the world of scuba diving through exciting underwater AquaMissions in a safe, controlled environment.",
    longDescription: [
      "The PADI Seal Team program is a fantastic way of introducing kids to the world of scuba diving through structured, exciting AquaMissions. In a safe pool or shallow water environment, young explorers learn fundamental dive skills while having an incredible amount of fun.",
      "Kids complete exciting AquaMissions that include exploring simulated shipwrecks, learning underwater navigation, practicing buoyancy skills, and developing foundational diving abilities. Each mission is designed to build confidence and skills progressively.",
      "Under the supervision of certified PADI instructors, your child will experience the thrill of breathing underwater, learn about marine life, and develop a lifelong love for the ocean — all in a completely safe and controlled setting.",
    ],
    includes: [
      "All scuba diving equipment (child-sized)",
      "Professional PADI instructor",
      "AquaMission materials",
      "Pool/shallow water access",
      "Safety briefing and training",
      "Certificate of completion",
      "Underwater photos",
    ],
    highlights: [
      "Safe, controlled pool environment",
      "Exciting AquaMission challenges",
      "Builds confidence underwater",
      "Professional PADI instructors",
      "Foundation for future diving",
      "Fun and educational experience",
    ],
    steps: [
      {
        title: "Introduction",
        desc: "Meet the instructor, learn about equipment, and get comfortable with the gear in a fun, engaging way.",
        icon: "fa-handshake",
      },
      {
        title: "Basic Skills",
        desc: "Learn to breathe underwater, clear masks, and control buoyancy — all presented as exciting challenges.",
        icon: "fa-swimmer",
      },
      {
        title: "AquaMissions",
        desc: "Complete themed underwater missions including wreck exploration, navigation, and marine life identification.",
        icon: "fa-flag",
      },
      {
        title: "Celebration",
        desc: "Receive completion certificate, share underwater photos, and celebrate becoming a PADI Seal Team member!",
        icon: "fa-award",
      },
    ],
    requirements: [
      { label: "Minimum Age", value: "8 years old" },
      { label: "Swimming", value: "Basic water comfort required" },
      { label: "Health", value: "Must be in good general health" },
      { label: "Parent Consent", value: "Parental consent form required" },
    ],
    faqs: [
      {
        q: "What age can my child participate?",
        a: "Children must be at least 8 years old to participate in the PADI Seal Team program. There is no upper age limit for children, making it suitable for kids and young teens alike.",
        icon: "fa-child",
      },
      {
        q: "Is it safe?",
        a: "Absolutely. All activities take place in a controlled pool or shallow water environment under certified PADI instructor supervision. Safety is our highest priority and every session follows strict PADI safety protocols.",
        icon: "fa-shield-alt",
      },
      {
        q: "Does my child need to know how to swim?",
        a: "Basic water comfort is required, but your child does not need to be an expert swimmer. Our instructors will assess your child's comfort level and provide additional support as needed throughout the program.",
        icon: "fa-person-swimming",
      },
      {
        q: "What should my child bring?",
        a: "Just swimwear and a towel. All scuba equipment in child sizes is provided by Experience Scuba, including masks, fins, wetsuits, and tanks designed for young divers.",
        icon: "fa-suitcase",
      },
      {
        q: "Can parents watch?",
        a: "Yes, parents are welcome to observe from the poolside or shore area. Many parents enjoy watching their children's excitement as they complete AquaMissions and learn new underwater skills.",
        icon: "fa-eye",
      },
    ],
  },
  {
    slug: "padi-bubble-maker-for-kids-havelock",
    title: "PADI Bubble Maker for Kids in Havelock Island",
    shortTitle: "PADI Bubble Maker",
    tag: "Ages 8+",
    icon: "fa-baby",
    color: "from-cyan-400 to-blue-500",
    price: "3,500",
    duration: "1-2 Hours",
    depth: "Max 2 Meters",
    minAge: "8 Years",
    description:
      "The perfect introduction to scuba diving for young adventurers. Kids experience breathing underwater in shallow water (max 2 meters) under professional supervision.",
    longDescription: [
      "The PADI Bubble Maker program introduces young divers (ages 8+) to the experience of breathing underwater in a completely safe, controlled, shallow water environment with a maximum depth of just 2 meters.",
      "Kids learn essential skills including how to use a regulator, clear a mask, basic breathing techniques, and the dos and don'ts of diving — all while having an incredible amount of fun. The program builds confidence and curiosity about the underwater world.",
      "Under the watchful eye of a certified PADI instructor, your child will blow their first bubbles underwater, learn about marine life, and discover the magic of the underwater world in the safest possible way.",
    ],
    includes: [
      "All scuba diving equipment (child-sized)",
      "Professional PADI instructor",
      "Shallow water access (max 2m)",
      "Safety briefing and training",
      "Certificate of completion",
      "Underwater photos",
    ],
    highlights: [
      "Maximum depth of only 2 meters",
      "Perfect first scuba experience",
      "Builds water confidence",
      "Professional PADI instruction",
      "Fun and safe environment",
      "Marine life awareness",
    ],
    steps: [
      {
        title: "Meet & Greet",
        desc: "A friendly introduction where kids meet their instructor and learn about the exciting adventure ahead.",
        icon: "fa-handshake",
      },
      {
        title: "Equipment Fun",
        desc: "Try on child-sized gear and learn how to breathe through a regulator — presented as a fun game.",
        icon: "fa-mask-snorkel",
      },
      {
        title: "Bubble Time",
        desc: "Enter shallow water (max 2m) and experience the magic of breathing underwater for the first time!",
        icon: "fa-water",
      },
      {
        title: "Celebration",
        desc: "Receive a PADI Bubble Maker certificate and share the excitement of their underwater adventure.",
        icon: "fa-award",
      },
    ],
    requirements: [
      { label: "Minimum Age", value: "8 years old" },
      { label: "Swimming", value: "Basic water comfort required" },
      { label: "Health", value: "Must be in good general health" },
      { label: "Parent Consent", value: "Parental consent form required" },
    ],
    faqs: [
      {
        q: "What is the maximum depth?",
        a: "Bubble Maker activities take place in a maximum depth of 2 meters, ensuring a completely safe and controlled environment for young children to experience breathing underwater.",
        icon: "fa-arrows-alt-v",
      },
      {
        q: "How long does the program last?",
        a: "The entire Bubble Maker experience takes about 1-2 hours, including the introduction, equipment familiarization, the in-water session, and the celebration with certificates.",
        icon: "fa-clock",
      },
      {
        q: "Is my child too young for this?",
        a: "Children must be at least 8 years old to participate in the Bubble Maker program. If your child is younger, we recommend waiting until they reach the minimum age to ensure their safety and enjoyment.",
        icon: "fa-child",
      },
      {
        q: "What will my child learn?",
        a: "Kids learn to breathe through a regulator, clear a mask, and basic underwater skills — all presented as fun games. They will also develop water confidence and gain an introduction to the underwater world.",
        icon: "fa-graduation-cap",
      },
      {
        q: "Do I need to sign any forms?",
        a: "Yes, a parental consent form is required before participation. This form covers medical history and consent for your child to take part in the supervised underwater activities.",
        icon: "fa-file-signature",
      },
    ],
  },
];

export function getKidsProgramBySlug(slug: string): KidsProgramData | undefined {
  return kidsPrograms.find((p) => p.slug === slug);
}
