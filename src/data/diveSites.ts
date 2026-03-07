export interface DiveSiteData {
  slug: string;
  name: string;
  title: string;
  depth: string;
  difficulty: string;
  description: string;
  longDescription: string[];
  marineLife: string[];
  highlights: string[];
  bestFor: string[];
  image: string;
  faqs: { q: string; a: string; icon?: string }[];
}

export const diveSites: DiveSiteData[] = [
  {
    slug: "nemo-reef-havelock-island",
    name: "Nemo Reef",
    title: "Nemo Reef Dive Site - Havelock Island",
    depth: "5-16m",
    difficulty: "Beginner",
    description: "Discover vibrant clownfish colonies and stunning coral formations at one of Havelock's most popular dive sites.",
    longDescription: [
      "Nemo Reef is a premier diving destination off Havelock Island, named after the clownfish species found in abundance in its coral gardens. The site features a flat sandy bottom with a gradual slope from shore, making it perfect for beginners.",
      "The reef boasts crystal-clear waters with excellent visibility, allowing divers to observe a stunning array of tropical marine life. From vibrant clownfish darting among anemones to graceful surgeonfish and curious pufferfish, every dive reveals new wonders.",
      "Whether you're a first-time diver or an experienced underwater explorer, Nemo Reef delivers an unforgettable experience with its accessible depth range and rich biodiversity.",
    ],
    marineLife: ["Clownfish", "Surgeonfish", "Pufferfish", "Goatfish", "Triggerfish", "Butterflyfish", "Parrotfish", "Sea Urchins", "Sea Cucumbers", "Octopus"],
    highlights: ["Abundant clownfish colonies", "Vibrant coral gardens", "Calm waters ideal for beginners", "Excellent underwater visibility", "Great for photography", "Accessible from shore"],
    bestFor: ["Beginners", "Discover Scuba Diving", "Snorkeling", "Underwater Photography"],
    image: "/images/divesite-1.webp",
    faqs: [
      {
        q: "What is the best time to dive at Nemo Reef?",
        a: "The best time to dive at Nemo Reef is from October to May, with November to February offering optimal visibility and calm sea conditions for the most enjoyable experience.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Nemo Reef?",
        a: "No certification is needed for Nemo Reef. As a beginner-friendly site, you can enjoy a Discover Scuba Diving experience with our PADI certified instructors guiding you throughout the dive.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Nemo Reef?",
        a: "Just bring your swimwear and a towel. All dive equipment including wetsuits, masks, fins, tanks, and regulators is provided by Experience Scuba.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Nemo Reef?",
        a: "Yes, professional underwater photos and videos are included in all our dive packages at Nemo Reef. You will receive high-quality memories of your dive experience.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Nemo Reef?",
        a: "Nemo Reef is accessible directly from the shore at Havelock Island. Our team handles all logistics, so you just need to show up and enjoy the dive.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "the-wall-havelock-island",
    name: "The Wall",
    title: "The Wall Dive Site - Havelock Island",
    depth: "10-30m",
    difficulty: "All Levels",
    description: "A dramatic vertical drop-off teeming with marine life, suitable for all skill levels with abundant coral coverage.",
    longDescription: [
      "The Wall is one of Havelock Island's most spectacular dive sites, featuring a dramatic vertical drop-off that creates a stunning underwater landscape. The wall face is covered in vibrant soft and hard corals, creating a living tapestry of color.",
      "This versatile site caters to all skill levels — beginners can explore the shallower sections along the reef top, while advanced divers can descend along the wall face to discover deeper marine ecosystems.",
      "The wall attracts a diverse range of marine species, from small reef fish to larger pelagic visitors. The currents along the wall bring nutrient-rich water, supporting an incredibly rich ecosystem.",
    ],
    marineLife: ["Reef Sharks", "Sea Turtles", "Barracuda", "Moray Eels", "Lionfish", "Groupers", "Nudibranchs", "Soft Corals", "Fan Corals", "Snappers"],
    highlights: ["Dramatic vertical wall formation", "Rich coral coverage", "Suitable for all levels", "Diverse marine encounters", "Excellent visibility", "Multiple depth options"],
    bestFor: ["All Levels", "Wall Diving", "Marine Photography", "Coral Exploration"],
    image: "/images/divesite-2.webp",
    faqs: [
      {
        q: "What is the best time to dive at The Wall?",
        a: "The Wall is best dived between October and May, with peak visibility from November to February. The calm seas and clear waters during this period make for exceptional wall diving conditions.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at The Wall?",
        a: "The Wall caters to all skill levels. Beginners can explore the shallow reef top through a Discover Scuba Diving program without certification, while the deeper wall sections are accessible to certified divers.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at The Wall?",
        a: "Just your swimwear and a towel — all dive equipment is provided by Experience Scuba. We supply everything you need for a safe and comfortable dive.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at The Wall?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The Wall's dramatic vertical formations make for spectacular photography.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to The Wall dive site?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team handles all logistics so you can focus on enjoying the dive.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "dixsons-pinnacle-havelock-island",
    name: "Dixsons Pinnacle",
    title: "Dixsons Pinnacle Dive Site - Havelock Island",
    depth: "12-30m",
    difficulty: "Advanced",
    description: "Home to vibrant corals and majestic marine life like manta rays and whale sharks in season.",
    longDescription: [
      "Dixsons Pinnacle is one of the most thrilling dive sites around Havelock Island, known for encounters with large pelagic species. This underwater pinnacle rises from deeper waters, creating a magnet for marine life.",
      "The pinnacle's walls are adorned with stunning coral formations, while the surrounding waters are frequently visited by manta rays, whale sharks (in season), and schools of large fish. It's a bucket-list dive for many visiting divers.",
      "Due to its depth and occasional currents, this site is best suited for advanced certified divers who can fully appreciate the spectacular underwater scenery and thrilling wildlife encounters.",
    ],
    marineLife: ["Manta Rays", "Whale Sharks (seasonal)", "Eagle Rays", "Reef Sharks", "Large Groupers", "Barracuda Schools", "Trevally", "Soft Corals", "Sea Fans", "Nudibranchs"],
    highlights: ["Manta ray encounters", "Whale shark sightings (seasonal)", "Stunning pinnacle formation", "Vibrant coral walls", "Large pelagic species", "Thrilling advanced dive"],
    bestFor: ["Advanced Divers", "Pelagic Encounters", "Deep Diving", "Adventure Diving"],
    image: "/images/marine-1.webp",
    faqs: [
      {
        q: "What is the best time to dive at Dixsons Pinnacle?",
        a: "The best season for diving at Dixsons Pinnacle is October to May. For the best chance of manta ray and whale shark sightings, plan your dive between December and February when visibility is at its peak.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Dixsons Pinnacle?",
        a: "Yes, Dixsons Pinnacle is an advanced dive site requiring an Advanced Open Water certification or equivalent. The depth and occasional currents make prior certification and experience essential.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for diving at Dixsons Pinnacle?",
        a: "Just bring your swimwear and a towel. All dive equipment including advanced gear is provided by Experience Scuba for your pinnacle dive.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Dixsons Pinnacle?",
        a: "Yes, professional underwater photos and videos are included in all dive packages at Dixsons Pinnacle. Our photographers capture the spectacular pelagic encounters and coral formations.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Dixsons Pinnacle?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our experienced crew will transport you safely to this offshore pinnacle site.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "pilot-reef-havelock-island",
    name: "Pilot Reef",
    title: "Pilot Reef Dive Site - Havelock Island",
    depth: "8-22m",
    difficulty: "Intermediate",
    description: "A vibrant coral outcrop with diverse marine life including the rare zebra shark.",
    longDescription: [
      "Pilot Reef is a vibrant coral outcrop that stands out for its exceptional biodiversity and the chance to spot rare marine species, including the elusive zebra shark. The reef structure provides shelter for an incredible variety of sea creatures.",
      "The site features a mix of hard and soft corals, creating a colorful underwater landscape that's a photographer's dream. Gentle currents bring nutrients that sustain the rich ecosystem.",
      "With a comfortable depth range suitable for intermediate divers, Pilot Reef offers the perfect balance of accessibility and excitement, with every dive holding the potential for rare wildlife encounters.",
    ],
    marineLife: ["Zebra Sharks", "Reef Fish", "Moray Eels", "Cuttlefish", "Lobsters", "Nudibranchs", "Hard Corals", "Soft Corals", "Stingrays", "Anemonefish"],
    highlights: ["Rare zebra shark sightings", "Diverse coral formations", "Rich biodiversity", "Excellent for photography", "Comfortable depth range", "Regular marine life encounters"],
    bestFor: ["Intermediate Divers", "Marine Life Spotting", "Photography", "Reef Exploration"],
    image: "/images/marine-2.webp",
    faqs: [
      {
        q: "What is the best time to dive at Pilot Reef?",
        a: "Pilot Reef is best visited between October and May. November to February provides the clearest visibility, increasing your chances of spotting the rare zebra shark.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Pilot Reef?",
        a: "Yes, Pilot Reef is an intermediate-level site. An Open Water Diver certification or equivalent is required to dive here safely and make the most of the experience.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Pilot Reef?",
        a: "Just bring your swimwear and a towel. All diving equipment is provided by Experience Scuba, so you can focus on enjoying the dive.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Pilot Reef?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. Pilot Reef's diverse marine life and corals offer fantastic photography opportunities.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Pilot Reef?",
        a: "Boat transfer from Havelock Island to Pilot Reef is included in your dive package. Our team takes care of all the logistics for a hassle-free experience.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "inchkeith-wreck-havelock-island",
    name: "Inchkeith Wreck",
    title: "Inchkeith Wreck Dive Site - Havelock Island",
    depth: "18-28m",
    difficulty: "Advanced",
    description: "Explore the wreck of a sunken cargo ship, now home to vibrant marine life and coral growth.",
    longDescription: [
      "The Inchkeith Wreck is a historic sunken cargo ship that has become one of the most fascinating dive sites in the Andaman Islands. The wreck now serves as an artificial reef, covered in beautiful corals and teeming with marine life.",
      "Divers can explore the exterior of the wreck, observing how nature has reclaimed the vessel. Schools of fish weave through the structure, while larger species patrol the surrounding waters.",
      "Due to its depth and the nature of wreck diving, this site is recommended for advanced certified divers. The wreck offers a unique blend of history and marine biology that makes every dive special.",
    ],
    marineLife: ["Groupers", "Snappers", "Batfish", "Lionfish", "Moray Eels", "Scorpionfish", "Coral Growth", "Sponges", "Barracuda", "Trevally"],
    highlights: ["Historic shipwreck exploration", "Beautiful coral-covered structure", "Rich marine ecosystem", "Unique wreck photography", "Historical significance", "Abundant fish life"],
    bestFor: ["Advanced Divers", "Wreck Diving", "Photography", "History Enthusiasts"],
    image: "/images/marine-4.webp",
    faqs: [
      {
        q: "What is the best time to dive the Inchkeith Wreck?",
        a: "The ideal time to dive the Inchkeith Wreck is from October to May, with November to February offering the best visibility for exploring the wreck's details and marine life.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive the Inchkeith Wreck?",
        a: "Yes, the Inchkeith Wreck is an advanced dive site. An Advanced Open Water certification or equivalent is required due to the depth and the specialized nature of wreck diving.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for the wreck dive?",
        a: "Just bring your swimwear and a towel. All dive equipment, including any wreck diving accessories, is provided by Experience Scuba.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at the Inchkeith Wreck?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The wreck's unique structure and marine life make for truly memorable photographs.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to the Inchkeith Wreck?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our crew will take you directly to the wreck site, handling all the logistics.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "white-house-rock-havelock-island",
    name: "White House Rock",
    title: "White House Rock Dive Site - Havelock Island",
    depth: "10-25m",
    difficulty: "Intermediate",
    description: "A towering underwater rock formation teeming with corals and marine life, with occasional dolphin sightings.",
    longDescription: [
      "White House Rock is a towering underwater rock formation that serves as a beacon for diverse marine life. The structure rises from the sea floor and is covered in stunning coral growth, creating a vibrant underwater oasis.",
      "The site is famous for its occasional dolphin sightings, adding an extra element of excitement to every dive. The rock formation creates interesting swim-throughs and overhangs that shelter a variety of creatures.",
      "With its moderate depth range and fascinating topography, White House Rock is an excellent site for intermediate divers looking for a memorable dive experience with potential big animal encounters.",
    ],
    marineLife: ["Dolphins (occasional)", "Sea Turtles", "Reef Sharks", "Snappers", "Fusiliers", "Sweetlips", "Coral Growth", "Anemones", "Clownfish", "Moray Eels"],
    highlights: ["Occasional dolphin sightings", "Towering rock formation", "Swim-throughs and overhangs", "Rich coral coverage", "Diverse marine encounters", "Stunning topography"],
    bestFor: ["Intermediate Divers", "Marine Life Spotting", "Rock Formations", "Photography"],
    image: "/images/marine-5.webp",
    faqs: [
      {
        q: "What is the best time to dive at White House Rock?",
        a: "White House Rock is best dived between October and May. The November to February window offers optimal visibility and the highest chances of dolphin sightings.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at White House Rock?",
        a: "Yes, White House Rock is an intermediate-level dive site. You will need an Open Water Diver certification or equivalent to dive at this location.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at White House Rock?",
        a: "Just your swimwear and a towel. All dive equipment is provided by Experience Scuba — we take care of everything.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at White House Rock?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The towering rock formations and marine life create stunning photo opportunities.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to White House Rock?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team handles all transportation and logistics for you.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "jacksons-bar-havelock-island",
    name: "Jacksons Bar",
    title: "Jacksons Bar Dive Site - Havelock Island",
    depth: "15-30m",
    difficulty: "Advanced",
    description: "Strong currents bring giant pelagics like manta rays, sharks, and barracudas to this thrilling site.",
    longDescription: [
      "Jacksons Bar is an adrenaline-pumping dive site where strong currents bring the ocean's larger inhabitants right to you. This is where experienced divers come for encounters with manta rays, reef sharks, and massive schools of barracuda.",
      "The site features a submerged bar formation that acts as a cleaning station and gathering point for large pelagic species. The current-swept waters ensure excellent visibility and bring nutrient-rich water that sustains a thriving ecosystem.",
      "This is an advanced dive site requiring good buoyancy control and experience with current diving. For those with the skills, Jacksons Bar delivers some of the most thrilling dive experiences in the Andaman Islands.",
    ],
    marineLife: ["Manta Rays", "Reef Sharks", "Barracuda Schools", "Giant Trevally", "Eagle Rays", "Tuna", "Jackfish", "Napoleon Wrasse", "Coral Formations", "Pelagic Fish"],
    highlights: ["Giant pelagic encounters", "Manta ray sightings", "Shark encounters", "Thrilling current diving", "Excellent visibility", "Advanced diver paradise"],
    bestFor: ["Advanced Divers", "Current Diving", "Big Animal Encounters", "Adrenaline Diving"],
    image: "/images/marine-3.webp",
    faqs: [
      {
        q: "What is the best time to dive at Jacksons Bar?",
        a: "Jacksons Bar is best dived from October to May. November to February brings the best visibility and calmer currents, though the site is thrilling year-round during the dive season.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Jacksons Bar?",
        a: "Yes, Jacksons Bar is an advanced dive site with strong currents. An Advanced Open Water certification and experience with current diving are required for safety.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for diving at Jacksons Bar?",
        a: "Just bring your swimwear and a towel. All dive equipment is provided by Experience Scuba, including gear suited for current diving conditions.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Jacksons Bar?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. Our photographers are experienced in capturing pelagic encounters in current conditions.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Jacksons Bar?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our experienced boat crew will navigate you safely to this thrilling dive site.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "johnnys-gorge-havelock-island",
    name: "Johnny's Gorge",
    title: "Johnny's Gorge Dive Site - Havelock Island",
    depth: "12-25m",
    difficulty: "Intermediate",
    description: "A vibrant dive site teeming with schools of fish, reef sharks, and occasional manta rays.",
    longDescription: [
      "Johnny's Gorge is one of the most popular dive sites in Havelock Island, known for its dramatic underwater gorge formation and incredible marine biodiversity. The gorge creates natural channels where fish congregate in massive schools.",
      "The site regularly hosts reef shark sightings and, during the right season, manta rays glide through the gorge in a truly spectacular display. The diverse topography includes overhangs, swim-throughs, and coral gardens.",
      "Suitable for intermediate and advanced divers, Johnny's Gorge consistently delivers exciting dive experiences with its combination of interesting topography and abundant marine life.",
    ],
    marineLife: ["Reef Sharks", "Manta Rays (seasonal)", "Schools of Fish", "Barracuda", "Trevally", "Sweetlips", "Groupers", "Sea Fans", "Soft Corals", "Nudibranchs"],
    highlights: ["Dramatic gorge formation", "Regular shark sightings", "Seasonal manta rays", "Massive fish schools", "Exciting topography", "Rich biodiversity"],
    bestFor: ["Intermediate Divers", "Shark Spotting", "Gorge Diving", "Marine Photography"],
    image: "/images/marine-1.webp",
    faqs: [
      {
        q: "What is the best time to dive at Johnny's Gorge?",
        a: "Johnny's Gorge is best dived from October to May. For seasonal manta ray sightings, plan your visit between December and February when visibility is also at its best.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Johnny's Gorge?",
        a: "Yes, Johnny's Gorge is suited for intermediate and advanced divers. An Open Water Diver certification or equivalent is required to dive this site.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Johnny's Gorge?",
        a: "Just your swimwear and a towel — all dive equipment is provided by Experience Scuba. We ensure you have everything needed for a great dive.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Johnny's Gorge?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The gorge's dramatic formations and shark encounters make for incredible photographs.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Johnny's Gorge?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team handles all the logistics, getting you to this popular site comfortably.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "broken-ledge-havelock-island",
    name: "Broken Ledge",
    title: "Broken Ledge Dive Site - Havelock Island",
    depth: "10-22m",
    difficulty: "Intermediate",
    description: "A rocky dive site with hidden canyons, vibrant reef fish, and giant moray eels.",
    longDescription: [
      "Broken Ledge is a fascinating dive site characterized by its broken rock formations that create hidden canyons, overhangs, and crevices. This complex topography provides shelter for an incredible variety of marine creatures.",
      "The site is particularly famous for its resident giant moray eels, which can often be spotted peering from their rocky hideouts. Vibrant reef fish swarm around the ledges, creating a kaleidoscope of color.",
      "The varied terrain makes every dive an exploration adventure, with new discoveries waiting around every corner. The moderate depth and generally calm conditions make this an excellent site for intermediate divers.",
    ],
    marineLife: ["Giant Moray Eels", "Reef Fish", "Scorpionfish", "Lobsters", "Shrimp", "Nudibranchs", "Octopus", "Sweetlips", "Snappers", "Hard Corals"],
    highlights: ["Giant moray eel encounters", "Hidden canyons and crevices", "Diverse topography", "Vibrant reef fish", "Macro photography opportunities", "Exploration diving"],
    bestFor: ["Intermediate Divers", "Macro Photography", "Exploration", "Reef Diving"],
    image: "/images/marine-6.webp",
    faqs: [
      {
        q: "What is the best time to dive at Broken Ledge?",
        a: "Broken Ledge is best explored between October and May. November to February provides the best underwater visibility for spotting marine life hiding in the canyons and crevices.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Broken Ledge?",
        a: "Yes, Broken Ledge is an intermediate-level dive site. An Open Water Diver certification or equivalent is needed to safely explore its rocky formations and hidden canyons.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Broken Ledge?",
        a: "Just bring your swimwear and a towel. All dive equipment is provided by Experience Scuba — we handle everything for your comfort.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Broken Ledge?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. Broken Ledge is especially great for macro photography of moray eels and nudibranchs.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Broken Ledge?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team manages all transportation so you can focus on the dive.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "minerva-ledge-havelock-island",
    name: "Minerva Ledge",
    title: "Minerva Ledge Dive Site - Havelock Island",
    depth: "8-20m",
    difficulty: "Beginner-Intermediate",
    description: "A beautiful site with vibrant coral gardens, schools of fish, and regular turtle sightings.",
    longDescription: [
      "Minerva Ledge is a beautiful dive site featuring expansive coral gardens and regular sightings of sea turtles. The ledge formation creates a gentle slope that's accessible to divers of varying experience levels.",
      "Schools of colorful fish patrol the reef, while sea turtles gracefully glide through the waters — a sight that never fails to amaze divers. The healthy coral coverage supports a thriving ecosystem.",
      "The calm conditions and moderate depth make this an excellent choice for newer certified divers looking to build experience, while still offering enough interest to keep seasoned divers engaged.",
    ],
    marineLife: ["Sea Turtles", "Schools of Fish", "Parrotfish", "Angelfish", "Butterflyfish", "Hard Corals", "Soft Corals", "Anemones", "Clownfish", "Stingrays"],
    highlights: ["Regular sea turtle sightings", "Vibrant coral gardens", "Schools of colorful fish", "Suitable for newer divers", "Gentle reef slope", "Relaxing dive experience"],
    bestFor: ["Beginner-Intermediate", "Turtle Spotting", "Coral Gardens", "Relaxed Diving"],
    image: "/images/divesite-1.webp",
    faqs: [
      {
        q: "What is the best time to dive at Minerva Ledge?",
        a: "Minerva Ledge is best visited from October to May, with November to February offering the clearest visibility and the most frequent sea turtle sightings.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Minerva Ledge?",
        a: "Minerva Ledge is suitable for beginners and intermediate divers. Newer certified divers can enjoy the shallower sections, while no certification is needed for a Discover Scuba Diving experience in the accessible areas.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Minerva Ledge?",
        a: "Just your swimwear and a towel. All dive equipment is provided by Experience Scuba, so you can arrive worry-free.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Minerva Ledge?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The sea turtles and coral gardens at Minerva Ledge make for beautiful photographs.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Minerva Ledge?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team arranges everything so you can enjoy a smooth journey to the site.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "aquarium-havelock-island",
    name: "Aquarium",
    title: "Aquarium Dive Site - Havelock Island",
    depth: "5-15m",
    difficulty: "Beginner",
    description: "Calm currents and vibrant marine life create an unforgettable, aquarium-like underwater experience.",
    longDescription: [
      "True to its name, Aquarium is a dive site that feels like swimming through a giant natural aquarium. The calm currents and crystal-clear waters provide exceptional visibility, allowing you to observe marine life in stunning detail.",
      "The shallow depth and gentle conditions make this one of the most beginner-friendly sites around Havelock Island. Colorful reef fish of every variety swarm around healthy coral formations, creating a mesmerizing underwater spectacle.",
      "This is the perfect site for first-time divers, underwater photography enthusiasts, and anyone who wants a relaxed, visually stunning dive experience in the heart of the Andaman Islands.",
    ],
    marineLife: ["Tropical Reef Fish", "Clownfish", "Parrotfish", "Butterflyfish", "Angelfish", "Damselfish", "Wrasse", "Healthy Corals", "Anemones", "Sea Stars"],
    highlights: ["Crystal-clear visibility", "Calm, gentle currents", "Abundant colorful fish", "Perfect for beginners", "Excellent for photography", "Aquarium-like experience"],
    bestFor: ["Beginners", "First-Time Divers", "Photography", "Snorkeling"],
    image: "/images/marine-2.webp",
    faqs: [
      {
        q: "What is the best time to dive at Aquarium?",
        a: "Aquarium is best dived between October and May. The November to February season offers crystal-clear visibility that truly lives up to the site's name.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Aquarium?",
        a: "No certification is needed for Aquarium. As one of the most beginner-friendly sites, it is perfect for a Discover Scuba Diving experience with our PADI certified instructors.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Aquarium?",
        a: "Just bring your swimwear and a towel. All dive and snorkeling equipment is provided by Experience Scuba for your convenience.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Aquarium?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. Aquarium's clear waters and vibrant marine life create picture-perfect conditions.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Aquarium dive site?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team takes care of all logistics so you can simply enjoy the experience.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "slope-havelock-island",
    name: "Slope",
    title: "Slope Dive Site - Havelock Island",
    depth: "8-25m",
    difficulty: "All Levels",
    description: "A gentle sloping reef with stunning corals and fish life, perfect for underwater photography.",
    longDescription: [
      "The Slope is a versatile dive site featuring a gradually descending reef that accommodates divers of all experience levels. The gentle gradient allows you to choose your comfortable depth while exploring the diverse marine ecosystem.",
      "The reef is blanketed in colorful hard and soft corals, creating a photogenic underwater landscape. Fish of all sizes inhabit the slope, from tiny gobies hiding in coral branches to larger predatory species patrolling the deeper sections.",
      "The predictable topography and generally calm conditions make this an excellent training site while still offering enough biodiversity and beauty to satisfy experienced divers looking for a relaxed dive.",
    ],
    marineLife: ["Reef Fish", "Groupers", "Angelfish", "Butterflyfish", "Nudibranchs", "Hard Corals", "Soft Corals", "Gobies", "Scorpionfish", "Sea Cucumbers"],
    highlights: ["Gradual depth progression", "Stunning coral coverage", "Great for all levels", "Perfect for photography", "Reliable dive conditions", "Rich biodiversity"],
    bestFor: ["All Levels", "Photography", "Training Dives", "Relaxed Diving"],
    image: "/images/marine-5.webp",
    faqs: [
      {
        q: "What is the best time to dive at Slope?",
        a: "Slope is best dived from October to May. November to February offers the most stable conditions and clearest visibility, making it ideal for photography and training dives.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Slope?",
        a: "Slope welcomes all levels. Beginners can enjoy a Discover Scuba Diving experience without certification, while certified divers can explore the deeper sections of the reef.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Slope?",
        a: "Just your swimwear and a towel — all dive equipment is provided by Experience Scuba. We ensure everything is ready for your dive.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Slope?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The Slope's photogenic coral landscape is perfect for stunning underwater shots.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Slope dive site?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team handles all transportation and logistics for a seamless experience.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "red-light-house-havelock-island",
    name: "Red Light House",
    title: "Red Light House Dive Site - Havelock Island",
    depth: "5-18m",
    difficulty: "Beginner",
    description: "A beginner-friendly dive site with vibrant marine life, best for photography.",
    longDescription: [
      "Red Light House is a beginner-friendly dive site located near the iconic lighthouse on Havelock Island. The shallow waters and calm conditions make it an ideal spot for new divers and underwater photographers alike.",
      "The site features colorful coral formations and a diverse array of tropical marine life. The excellent visibility and natural lighting conditions create perfect opportunities for stunning underwater photographs.",
      "Regular marine life sightings include schools of colorful reef fish, various coral species, and occasional visits from larger marine creatures. The accessible depth range ensures comfortable and enjoyable dives for everyone.",
    ],
    marineLife: ["Reef Fish", "Parrotfish", "Angelfish", "Butterflyfish", "Coral Formations", "Anemones", "Clownfish", "Nudibranchs", "Shrimp", "Starfish"],
    highlights: ["Beginner-friendly depth", "Excellent for photography", "Vibrant marine life", "Calm diving conditions", "Beautiful coral formations", "Near iconic lighthouse"],
    bestFor: ["Beginners", "Photography", "Discover Scuba Diving", "Snorkeling"],
    image: "/images/marine-3.webp",
    faqs: [
      {
        q: "What is the best time to dive at Red Light House?",
        a: "Red Light House is best dived between October and May. The November to February period offers the best natural lighting and visibility for underwater photography at this site.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Red Light House?",
        a: "No certification is needed. Red Light House is a beginner-friendly site perfect for Discover Scuba Diving experiences guided by our PADI certified instructors.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Red Light House?",
        a: "Just bring your swimwear and a towel. All dive equipment is provided by Experience Scuba — no need to worry about gear.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Red Light House?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. Red Light House is renowned for its excellent photography conditions.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Red Light House dive site?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team handles all logistics so you can enjoy a worry-free dive experience.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "tribe-gate-havelock-island",
    name: "Tribe Gate",
    title: "Tribe Gate Dive Site - Havelock Island",
    depth: "10-22m",
    difficulty: "Intermediate",
    description: "A vibrant reef with diverse marine life, perfect for spotting barracudas and larger fish.",
    longDescription: [
      "Tribe Gate is a vibrant reef system known for its diverse marine life and regular sightings of barracudas and other larger fish species. The reef structure creates natural gathering points for schools of predatory fish.",
      "The site offers a mix of coral gardens, sandy patches, and rocky formations that support a wide variety of marine ecosystems. Each section of the reef harbors different species, making for varied and exciting dives.",
      "With its moderate depth and interesting marine encounters, Tribe Gate is an excellent choice for intermediate divers who want to experience the thrill of spotting larger marine species in a manageable diving environment.",
    ],
    marineLife: ["Barracuda", "Trevally", "Reef Sharks", "Groupers", "Snappers", "Reef Fish", "Corals", "Sea Fans", "Moray Eels", "Cuttlefish"],
    highlights: ["Regular barracuda sightings", "Diverse reef structure", "Larger fish encounters", "Interesting topography", "Rich biodiversity", "Good visibility"],
    bestFor: ["Intermediate Divers", "Fish Spotting", "Reef Diving", "Photography"],
    image: "/images/marine-6.webp",
    faqs: [
      {
        q: "What is the best time to dive at Tribe Gate?",
        a: "Tribe Gate is best dived from October to May. For optimal visibility and the best barracuda sightings, visit between November and February.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Tribe Gate?",
        a: "Yes, Tribe Gate is an intermediate-level site. An Open Water Diver certification or equivalent is required to dive here and enjoy the larger marine life encounters.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Tribe Gate?",
        a: "Just your swimwear and a towel. All dive equipment is provided by Experience Scuba for your convenience and comfort.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Tribe Gate?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The barracuda schools and diverse reef life at Tribe Gate make for amazing photographs.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Tribe Gate?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team ensures smooth and comfortable transportation to the dive site.",
        icon: "fa-ship",
      },
    ],
  },
  {
    slug: "turtle-beach-havelock-island",
    name: "Turtle Beach",
    title: "Turtle Beach Dive Site - Havelock Island",
    depth: "5-18m",
    difficulty: "Beginner",
    description: "A vibrant reef with diverse marine life, perfect for spotting sea turtles.",
    longDescription: [
      "Turtle Beach dive site is named for its frequent sea turtle encounters, making it one of the most beloved dive sites in the Andaman Islands. The site offers a beautiful reef ecosystem in shallow, accessible waters.",
      "Green and hawksbill sea turtles are regularly spotted grazing on seagrass beds and resting among the coral formations. These graceful creatures are often comfortable around divers, allowing for close encounters and amazing photographs.",
      "The shallow depth and calm conditions make this an excellent site for beginners and snorkelers alike. Beyond turtles, the reef supports a diverse community of tropical fish and colorful corals.",
    ],
    marineLife: ["Green Sea Turtles", "Hawksbill Turtles", "Reef Fish", "Parrotfish", "Surgeonfish", "Corals", "Seagrass", "Anemones", "Clownfish", "Stingrays"],
    highlights: ["Frequent sea turtle encounters", "Shallow, beginner-friendly depth", "Beautiful coral reef", "Calm diving conditions", "Great for snorkeling too", "Unforgettable wildlife experience"],
    bestFor: ["Beginners", "Turtle Spotting", "Snorkeling", "Family-Friendly"],
    image: "/images/divesite-2.webp",
    faqs: [
      {
        q: "What is the best time to dive at Turtle Beach?",
        a: "Turtle Beach is best visited between October and May. November to February is the peak season with the clearest water and most frequent turtle sightings.",
        icon: "fa-calendar",
      },
      {
        q: "Do I need to be certified to dive at Turtle Beach?",
        a: "No certification is needed for Turtle Beach. As a beginner-friendly site, it is ideal for Discover Scuba Diving experiences and snorkeling with our PADI certified instructors.",
        icon: "fa-certificate",
      },
      {
        q: "What should I bring for my dive at Turtle Beach?",
        a: "Just bring your swimwear and a towel. All dive and snorkeling equipment is provided by Experience Scuba.",
        icon: "fa-suitcase",
      },
      {
        q: "Is underwater photography available at Turtle Beach?",
        a: "Yes, professional underwater photos and videos are included in all dive packages. The sea turtles at Turtle Beach provide unforgettable photo opportunities.",
        icon: "fa-camera",
      },
      {
        q: "How do I get to Turtle Beach dive site?",
        a: "Boat transfer from Havelock Island is included in your dive package. Our team takes care of all the logistics for a hassle-free experience.",
        icon: "fa-ship",
      },
    ],
  },
];

export function getDiveSiteBySlug(slug: string): DiveSiteData | undefined {
  return diveSites.find((s) => s.slug === slug);
}
