export interface CourseData {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  level: string;
  icon: string;
  color: string;
  price: string;
  duration: string;
  depth: string;
  dives: string;
  minAge: string;
  prerequisites: string;
  description: string;
  longDescription: string[];
  includes: string[];
  highlights: string[];
  courseStructure: { title: string; desc: string; icon: string }[];
  requirements: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export const courses: CourseData[] = [
  {
    slug: "padi-open-water-diving-course",
    title: "PADI Open Water Diver Course in Andaman Islands",
    shortTitle: "PADI Open Water Diver",
    tag: "Most Popular",
    level: "Beginner",
    icon: "fa-water",
    color: "from-green-500 to-emerald-500",
    price: "28,000",
    duration: "3-4 Days",
    depth: "18 Meters",
    dives: "4 Open Water Dives",
    minAge: "12 Years",
    prerequisites: "Ability to swim",
    description:
      "The world's most popular scuba certification program. Learn to dive independently to 18 meters with a buddy. Your passport to explore the underwater world anywhere on the planet.",
    longDescription: [
      "The PADI Open Water Diver course is the world's most popular and widely recognized scuba diving certification. Under the guidance of a highly trained PADI Instructor, you will develop the skills and confidence to dive safely and independently at dive sites around the globe.",
      "This comprehensive course includes knowledge development through PADI eLearning (5-10 hours of self-paced study), confined water sessions where you practice essential skills, and four open water dives where you apply everything you've learned in the beautiful waters of Havelock Island.",
      "Upon completion, you'll receive a globally recognized PADI certification that never expires. If you've been inactive for 6+ months, the PADI ReActivate program helps you refresh your skills before diving again.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI eLearning materials",
      "PADI certification card",
      "Professional PADI instructor",
      "4 open water training dives",
      "Confined water training sessions",
      "Underwater photographs & videos",
    ],
    highlights: [
      "Globally recognized lifetime certification",
      "Dive independently to 18 meters",
      "Self-paced online learning component",
      "Crystal-clear Andaman waters for training",
      "Small group sizes for personalized attention",
      "Multiple dive sites around Havelock Island",
    ],
    courseStructure: [
      {
        title: "PADI eLearning",
        desc: "Complete 5-10 hours of self-paced online study covering dive theory, safety protocols, and equipment knowledge.",
        icon: "fa-laptop",
      },
      {
        title: "Confined Water Training",
        desc: "Practice essential skills like mask clearing, buoyancy control, and regulator recovery in shallow water.",
        icon: "fa-swimmer",
      },
      {
        title: "Open Water Dives",
        desc: "Complete 4 supervised ocean dives over 2 days, applying your skills in real diving conditions.",
        icon: "fa-water",
      },
      {
        title: "Certification",
        desc: "Receive your PADI Open Water Diver card — your passport to dive anywhere in the world.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Minimum Age", value: "12 years old" },
      { label: "Swimming Ability", value: "Swim 200m unassisted or 300m with mask, fins & snorkel" },
      { label: "Water Treading", value: "Tread water for 10 minutes without assistance" },
      { label: "Medical Fitness", value: "Medical clearance required — basic health questionnaire" },
    ],
    faqs: [
      { q: "How long does the course take?", a: "The course typically takes 3-4 days, including eLearning, confined water sessions, and 4 open water dives. The schedule is flexible based on your comfort level." },
      { q: "Do I need to know how to swim?", a: "Yes, you need to be able to swim 200 meters unassisted (or 300m with mask, fins & snorkel) and tread water for 10 minutes." },
      { q: "Does the certification expire?", a: "No, your PADI Open Water Diver certification never expires. However, if inactive for 6+ months, a PADI ReActivate refresher is recommended." },
    ],
  },
  {
    slug: "padi-advanced-open-water-diving-course",
    title: "PADI Advanced Open Water Diver Course in Andaman Islands",
    shortTitle: "PADI Advanced Open Water",
    tag: "Popular",
    level: "Intermediate",
    icon: "fa-compass",
    color: "from-ocean-500 to-blue-500",
    price: "22,000",
    duration: "2-3 Days",
    depth: "30 Meters",
    dives: "5 Adventure Dives",
    minAge: "12 Years",
    prerequisites: "PADI Open Water Diver certification",
    description:
      "Enhance your diving skills and confidence while exploring new dive adventures. Refine buoyancy, practice navigation, and engage in deep diving with specialty dive choices.",
    longDescription: [
      "The PADI Advanced Open Water Diver course helps you enhance your diving skills and confidence while exploring new dive adventures. You'll refine buoyancy control, practice navigation, and engage in deep diving while selecting three specialty dives from exciting options.",
      "This course includes five training dives — a mandatory Deep Dive and Underwater Navigation dive, plus three elective dives chosen from options like wreck diving, night diving, underwater photography, drift diving, and more.",
      "Complete the eLearning component (6-8 hours) at your own pace, then join us in Havelock Island for 2-4 days of in-water training across some of the most spectacular dive sites in the Andaman Islands.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI eLearning materials",
      "PADI certification card",
      "Professional PADI instructor",
      "5 adventure training dives",
      "Boat transportation to dive sites",
      "Underwater photographs & videos",
    ],
    highlights: [
      "Dive to 30 meters depth",
      "Choose from multiple specialty dive options",
      "Improve navigation and buoyancy skills",
      "Explore deeper and more diverse dive sites",
      "Small group sizes for better learning",
      "Stunning Andaman dive locations",
    ],
    courseStructure: [
      {
        title: "eLearning Phase",
        desc: "Complete 6-8 hours of online study covering deep diving theory, navigation, and specialty dive knowledge.",
        icon: "fa-laptop",
      },
      {
        title: "Deep Dive",
        desc: "Learn safe deep diving techniques below 18 meters, including pressure management and gas planning.",
        icon: "fa-arrow-down",
      },
      {
        title: "Navigation Dive",
        desc: "Master compass and natural navigation methods to confidently find your way underwater.",
        icon: "fa-compass",
      },
      {
        title: "Specialty Dives",
        desc: "Complete 3 elective dives from options like wreck, night, photography, drift, or peak performance buoyancy.",
        icon: "fa-star",
      },
    ],
    requirements: [
      { label: "Certification", value: "PADI Open Water Diver or Junior Open Water Diver" },
      { label: "Minimum Age", value: "12 years old (15+ for 30m depth; 12-14 limited to 21m)" },
      { label: "Medical Fitness", value: "Medical clearance required" },
      { label: "Equipment", value: "All equipment provided by Experience Scuba" },
    ],
    faqs: [
      { q: "What specialty dives can I choose?", a: "Options include wreck diving, night diving, underwater photography, drift diving, peak performance buoyancy, fish identification, and more." },
      { q: "Can 12-year-olds take this course?", a: "Yes, but divers aged 12-14 are limited to a maximum depth of 21 meters (70 feet). Those 15+ can dive to 30 meters." },
      { q: "Do I need to complete eLearning before arriving?", a: "Yes, completing the eLearning component (6-8 hours) before your arrival in Havelock allows you to maximize your time in the water." },
    ],
  },
  {
    slug: "padi-adventure-diver-course",
    title: "PADI Adventure Diver Course in Andaman Islands",
    shortTitle: "PADI Adventure Diver",
    tag: "Flexible",
    level: "Intermediate",
    icon: "fa-mountain",
    color: "from-ocean-500 to-blue-500",
    price: "15,000",
    duration: "1-2 Days",
    depth: "18 Meters",
    dives: "3 Adventure Dives",
    minAge: "12 Years",
    prerequisites: "PADI Open Water Diver certification",
    description:
      "Try 3 different specialty adventure dives and discover your underwater passion. A shorter alternative to the full Advanced Open Water course.",
    longDescription: [
      "The PADI Adventure Diver course is the perfect stepping stone between Open Water and Advanced Open Water certifications. Complete just 3 adventure dives to earn your certification and explore new types of diving.",
      "Choose from exciting dive types including deep diving, navigation, wreck diving, night diving, underwater photography, drift diving, and more. Each dive introduces you to a new specialty and expands your underwater horizons.",
      "This is an excellent option if you have limited time but want to expand your skills beyond basic Open Water diving. The dives can also be credited toward your Advanced Open Water certification later.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI certification card",
      "Professional PADI instructor",
      "3 adventure training dives",
      "Boat transportation to dive sites",
      "Underwater photographs & videos",
    ],
    highlights: [
      "Only 3 dives needed for certification",
      "Choose your own adventure dives",
      "Credits toward Advanced Open Water",
      "Perfect for limited time schedules",
      "Explore different diving specialties",
      "Beautiful Andaman dive sites",
    ],
    courseStructure: [
      {
        title: "Dive Selection",
        desc: "Choose 3 adventure dives from available specialty options based on your interests.",
        icon: "fa-list-check",
      },
      {
        title: "Briefing & Preparation",
        desc: "Receive detailed briefings on each dive type, covering skills, techniques, and safety protocols.",
        icon: "fa-chalkboard-teacher",
      },
      {
        title: "Adventure Dives",
        desc: "Complete your 3 chosen adventure dives under instructor supervision at stunning dive sites.",
        icon: "fa-water",
      },
      {
        title: "Certification",
        desc: "Receive your PADI Adventure Diver certification — credits apply toward Advanced Open Water.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Certification", value: "PADI Open Water Diver or equivalent" },
      { label: "Minimum Age", value: "12 years old" },
      { label: "Medical Fitness", value: "Medical clearance required" },
      { label: "Logged Dives", value: "Open Water certification dives completed" },
    ],
    faqs: [
      { q: "What's the difference from Advanced Open Water?", a: "Adventure Diver requires only 3 dives (vs 5 for Advanced). Your 3 dives can count toward Advanced Open Water if you decide to continue." },
      { q: "Which dives should I choose?", a: "Popular choices include Deep Dive, Navigation, and Night Dive. Your instructor can help you choose based on your interests and conditions." },
    ],
  },
  {
    slug: "padi-rescue-diver-course",
    title: "PADI Rescue Diver Course in Andaman Islands",
    shortTitle: "PADI Rescue Diver",
    tag: "Challenging",
    level: "Advanced",
    icon: "fa-life-ring",
    color: "from-orange-500 to-amber-500",
    price: "25,000",
    duration: "3-4 Days",
    depth: "18 Meters",
    dives: "Scenario-Based Dives",
    minAge: "12 Years",
    prerequisites: "PADI Advanced Open Water + EFR certification",
    description:
      "One of the most rewarding and transformative scuba programs. Learn to prevent and manage dive emergencies, rescue panicked divers, and develop leadership skills.",
    longDescription: [
      "The PADI Rescue Diver course is one of the most rewarding and transformative scuba diving programs, designed to elevate your confidence and competence underwater. You'll learn to look beyond yourself and consider the safety of others.",
      "This course covers self-rescue techniques, recognizing and managing diver stress, emergency management and equipment, and rescuing panicked and unresponsive divers. It's challenging but incredibly fulfilling.",
      "The course includes eLearning (6-10 hours), confined water training (1-2 days), and open water rescue scenarios (1 day). You'll practice real-world emergency situations in the safe waters of Havelock Island.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI eLearning materials",
      "PADI certification card",
      "Professional PADI instructor",
      "Confined water rescue training",
      "Open water rescue scenarios",
      "Emergency equipment training",
    ],
    highlights: [
      "Learn to manage dive emergencies",
      "Self-rescue techniques",
      "Rescue panicked and unresponsive divers",
      "Build leadership and decision-making skills",
      "Prerequisite for Dive Master certification",
      "Most rewarding PADI course",
    ],
    courseStructure: [
      {
        title: "eLearning Phase",
        desc: "Complete 6-10 hours of self-paced study on rescue theory, stress recognition, and emergency protocols.",
        icon: "fa-laptop",
      },
      {
        title: "Confined Water Training",
        desc: "Practice rescue skills including tired diver tows, panicked diver management, and equipment removal.",
        icon: "fa-swimmer",
      },
      {
        title: "Open Water Scenarios",
        desc: "Apply rescue skills in realistic simulated emergency situations in open water conditions.",
        icon: "fa-life-ring",
      },
      {
        title: "Certification",
        desc: "Demonstrate mastery of rescue skills and receive your PADI Rescue Diver certification.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Certification", value: "PADI Advanced Open Water Diver" },
      { label: "EFR Training", value: "Emergency First Response (Primary & Secondary Care) within 24 months" },
      { label: "Minimum Age", value: "12 years old" },
      { label: "Medical Fitness", value: "Medical clearance from physician required" },
    ],
    faqs: [
      { q: "Do I need EFR certification first?", a: "Yes, you must have completed EFR Primary and Secondary Care training within the past 24 months. We offer this course as well." },
      { q: "Is this course difficult?", a: "It's challenging but incredibly rewarding. Most divers say it's the best course they've ever taken. Your instructor guides you through every step." },
    ],
  },
  {
    slug: "padi-scuba-diver-course",
    title: "PADI Scuba Diver Course in Andaman Islands",
    shortTitle: "PADI Scuba Diver",
    tag: "Quick Start",
    level: "Beginner",
    icon: "fa-mask-snorkel",
    color: "from-green-500 to-emerald-500",
    price: "20,000",
    duration: "2 Days",
    depth: "12 Meters",
    dives: "2 Open Water Dives",
    minAge: "12 Years",
    prerequisites: "Ability to swim",
    description:
      "A shorter certification option that allows you to dive to 12 meters under the supervision of a PADI professional. Perfect if you have limited time.",
    longDescription: [
      "The PADI Scuba Diver course is a subset of the Open Water Diver course, designed for those with limited time who still want an internationally recognized certification. You'll learn the basics of scuba diving and earn a certification to dive to 12 meters.",
      "This accelerated program covers essential dive theory, confined water skills practice, and two open water dives. You can always upgrade to the full PADI Open Water Diver certification later by completing the additional requirements.",
      "Perfect for vacationers who want more than a discover scuba dive but don't have 3-4 days available. In just 2 days, you'll be a certified PADI Scuba Diver.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI eLearning materials",
      "PADI certification card",
      "Professional PADI instructor",
      "2 open water training dives",
      "Confined water training",
      "Underwater photographs & videos",
    ],
    highlights: [
      "Only 2 days to complete",
      "Internationally recognized certification",
      "Dive to 12 meters with PADI professional",
      "Upgrade to Open Water Diver anytime",
      "Great for limited vacation time",
      "All equipment and materials included",
    ],
    courseStructure: [
      {
        title: "eLearning",
        desc: "Complete the first 3 sections of PADI eLearning covering basic dive theory and safety.",
        icon: "fa-laptop",
      },
      {
        title: "Confined Water",
        desc: "Practice essential skills in shallow water under instructor guidance.",
        icon: "fa-swimmer",
      },
      {
        title: "Open Water Dives",
        desc: "Complete 2 supervised ocean dives applying your new skills.",
        icon: "fa-water",
      },
      {
        title: "Certification",
        desc: "Receive your PADI Scuba Diver card — dive to 12m under PADI professional supervision.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Minimum Age", value: "12 years old" },
      { label: "Swimming Ability", value: "Basic swimming skills required" },
      { label: "Medical Fitness", value: "Medical clearance required" },
      { label: "Time Needed", value: "Minimum 2 days" },
    ],
    faqs: [
      { q: "What's the difference from Open Water Diver?", a: "Scuba Diver is half the Open Water course — 2 dives instead of 4, max depth 12m instead of 18m, and you must dive with a PADI professional. You can upgrade anytime." },
      { q: "Can I dive independently?", a: "No, PADI Scuba Divers must dive under the direct supervision of a PADI professional. For independent diving, upgrade to Open Water Diver." },
    ],
  },
  {
    slug: "padi-dive-master-course",
    title: "PADI Dive Master Course in Andaman Islands",
    shortTitle: "PADI Dive Master",
    tag: "Professional",
    level: "Professional",
    icon: "fa-crown",
    color: "from-purple-500 to-violet-500",
    price: "55,000",
    duration: "2-4 Weeks",
    depth: "40 Meters",
    dives: "60+ Logged Dives",
    minAge: "18 Years",
    prerequisites: "PADI Rescue Diver + EFR + 40 logged dives",
    description:
      "The first professional level certification. Transform from experienced diver into a knowledgeable dive leader. Lead dives, assist instructors, and make diving your career.",
    longDescription: [
      "The PADI Dive Master course is your first step into professional diving. This intensive program transforms experienced recreational divers into knowledgeable dive leaders capable of supervising diving activities and assisting with scuba classes.",
      "Over 2-4 weeks, you'll complete extensive eLearning (12-20 hours), practical training including skill demonstrations, student assistance, dive briefings, rescue scenarios, and final evaluations including practical exams and mapping projects.",
      "Upon certification, you'll hold a globally recognized professional credential that enables you to work at dive centres worldwide. This is also the pathway to becoming a PADI Instructor.",
    ],
    includes: [
      "All scuba diving equipment",
      "PADI eLearning materials",
      "PADI certification card & professional membership",
      "Professional PADI instructor training",
      "Extensive in-water training",
      "Dive site management experience",
      "Accommodation assistance",
    ],
    highlights: [
      "First professional-level PADI certification",
      "Work at dive centres worldwide",
      "Lead certified divers on dives",
      "Assist PADI Instructors with courses",
      "Pathway to PADI Instructor certification",
      "Globally recognized professional credential",
    ],
    courseStructure: [
      {
        title: "eLearning Phase",
        desc: "Complete 12-20 hours of theory covering physics, physiology, equipment, safety, and dive planning.",
        icon: "fa-laptop",
      },
      {
        title: "Practical Training",
        desc: "2-4 weeks of skill demonstrations, student assistance, briefings, and rescue scenarios.",
        icon: "fa-swimmer",
      },
      {
        title: "Internship",
        desc: "Gain real-world experience assisting with courses, leading dives, and managing dive operations.",
        icon: "fa-users",
      },
      {
        title: "Final Evaluations",
        desc: "Complete practical exams, skill demonstrations, and mapping projects for certification.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Certification", value: "PADI Rescue Diver (or equivalent)" },
      { label: "EFR Training", value: "Emergency First Response within 24 months" },
      { label: "Minimum Age", value: "18 years old" },
      { label: "Logged Dives", value: "40 dives to begin, 60 dives to certify" },
      { label: "Medical Clearance", value: "Physician's clearance within 12 months" },
    ],
    faqs: [
      { q: "How many dives do I need?", a: "You need 40 logged dives to begin the course and 60 to certify. We can help you log additional dives during your training." },
      { q: "Can I work internationally?", a: "Yes! PADI Dive Master is recognized worldwide. You can work at dive centres in any country with this certification." },
      { q: "How long does the course take?", a: "Typically 2-4 weeks of intensive training. Some candidates extend with internship periods of several months for more experience." },
    ],
  },
  {
    slug: "padi-emergency-first-repsonse-provider",
    title: "PADI Emergency First Response (EFR) Course in Andaman Islands",
    shortTitle: "Emergency First Response",
    tag: "Essential",
    level: "Essential",
    icon: "fa-first-aid",
    color: "from-rose-500 to-pink-500",
    price: "8,000",
    duration: "1 Day",
    depth: "N/A",
    dives: "Certification Only",
    minAge: "12 Years",
    prerequisites: "None",
    description:
      "CPR and first aid training essential for diving and everyday life. Learn to provide emergency care confidently. Prerequisite for the PADI Rescue Diver course.",
    longDescription: [
      "The Emergency First Response (EFR) course teaches you essential CPR and first aid skills that are valuable both in diving and everyday life. This internationally recognized certification builds the confidence to respond to medical emergencies.",
      "The course covers Primary Care (CPR) including scene assessment, barrier use, and CPR techniques, as well as Secondary Care (First Aid) covering injury assessment, bandaging, splinting, and illness management.",
      "This is a prerequisite for the PADI Rescue Diver course. Even if you're not pursuing rescue certification, these life-saving skills are invaluable for any diver and for everyday situations.",
    ],
    includes: [
      "EFR training materials",
      "EFR certification card",
      "Professional EFR instructor",
      "CPR mannequin practice",
      "First aid kit training",
      "Scenario-based practice",
    ],
    highlights: [
      "Learn life-saving CPR techniques",
      "First aid for injuries and illness",
      "Prerequisite for Rescue Diver",
      "Skills valuable in everyday life",
      "Internationally recognized certification",
      "Complete in just 1 day",
    ],
    courseStructure: [
      {
        title: "Primary Care (CPR)",
        desc: "Learn scene assessment, CPR techniques, AED use, and choking management for life-threatening emergencies.",
        icon: "fa-heartbeat",
      },
      {
        title: "Secondary Care (First Aid)",
        desc: "Cover injury assessment, bandaging, splinting, and managing illnesses in non-life-threatening situations.",
        icon: "fa-first-aid",
      },
      {
        title: "Scenario Practice",
        desc: "Apply your skills in realistic simulated emergency scenarios with instructor feedback.",
        icon: "fa-user-shield",
      },
      {
        title: "Certification",
        desc: "Demonstrate competency and receive your EFR certification card.",
        icon: "fa-certificate",
      },
    ],
    requirements: [
      { label: "Minimum Age", value: "12 years old (no maximum age)" },
      { label: "Prerequisites", value: "None — open to everyone" },
      { label: "Medical Fitness", value: "No special medical requirements" },
      { label: "Time Needed", value: "1 full day" },
    ],
    faqs: [
      { q: "Do I need to be a diver?", a: "No! EFR is open to everyone. The skills are valuable for divers and non-divers alike." },
      { q: "How long is the certification valid?", a: "EFR certification is valid for 24 months. It must be current to enroll in the PADI Rescue Diver course." },
    ],
  },
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find((c) => c.slug === slug);
}
