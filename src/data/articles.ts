export interface ArticleData {
  slug: string;
  title: string;
  tag: string;
  tagColor: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    type: "paragraph" | "heading" | "list" | "quote";
    text?: string;
    items?: string[];
  }[];
}

export const articles: ArticleData[] = [
  {
    slug: "ultimate-guide-scuba-diving-andaman",
    title: "The Ultimate Guide to Scuba Diving in the Andaman Islands",
    tag: "Guide",
    tagColor: "from-ocean-400 to-ocean-600",
    excerpt:
      "Discover crystal-clear waters, vibrant coral reefs, and an underwater paradise that rivals the best dive destinations in the world.",
    image: "/images/divesite-2.webp",
    date: "Mar 5, 2026",
    readTime: "8 min read",
    author: "Experience Scuba",
    content: [
      {
        type: "paragraph",
        text: "The Andaman Islands, tucked away in the Bay of Bengal, are one of India's best-kept secrets for scuba diving. With over 500 species of coral, visibility reaching 30 meters on a good day, and a thriving marine ecosystem untouched by mass tourism, this archipelago offers an underwater experience that rivals top destinations like the Maldives and the Great Barrier Reef.",
      },
      {
        type: "heading",
        text: "Why the Andaman Islands?",
      },
      {
        type: "paragraph",
        text: "Unlike many popular dive destinations around the world, the Andaman Islands remain relatively undiscovered. This means healthier reefs, fewer crowds underwater, and an authentic experience that feels like you've stumbled upon a hidden world. The warm tropical waters (26-30\u00B0C year-round) make it comfortable to dive without a thick wetsuit, and the biodiversity here is simply extraordinary.",
      },
      {
        type: "list",
        items: [
          "Over 500 species of vibrant coral formations",
          "Visibility ranging from 15 to 30+ meters",
          "Water temperatures of 26-30\u00B0C year-round",
          "Home to manta rays, reef sharks, sea turtles, and whale sharks",
          "15+ unique dive sites around Havelock Island alone",
          "Suitable for complete beginners to advanced divers",
        ],
      },
      {
        type: "heading",
        text: "Best Time to Dive",
      },
      {
        type: "paragraph",
        text: "The Andaman diving season runs from October to May, with the best conditions typically between December and April. During these months, the seas are calm, visibility is at its peak, and you're most likely to encounter pelagic species like manta rays and whale sharks. The monsoon season (June to September) brings rougher seas and reduced visibility, making diving difficult or impossible.",
      },
      {
        type: "heading",
        text: "Top Dive Sites in Havelock",
      },
      {
        type: "paragraph",
        text: "Havelock Island (now officially Swaraj Dweep) is the diving capital of the Andamans. From the famous Nemo Reef\u2014teeming with anemones and clownfish\u2014to the dramatic vertical drop-off at The Wall, there's a dive site for every skill level. Dixson's Pinnacle offers deep-water encounters with large pelagics, while Aquarium is perfect for beginners with its shallow, colorful coral gardens.",
      },
      {
        type: "quote",
        text: "Diving in the Andamans feels like entering a world that time forgot. The reefs are pristine, the marine life is abundant, and every dive brings something unexpected.",
      },
      {
        type: "heading",
        text: "What to Expect on Your First Dive",
      },
      {
        type: "paragraph",
        text: "If you're a complete beginner, don't worry \u2014 the Andamans are one of the best places in the world to learn. PADI Discover Scuba Diving programs let you experience scuba without any prior certification. You'll start with a safety briefing, practice basic skills in shallow water, and then descend with a certified instructor who stays with you throughout the entire dive.",
      },
      {
        type: "paragraph",
        text: "For certified divers, the Andamans offer everything from leisurely reef dives to challenging drift dives and deep wreck explorations. Multi-day dive packages let you cover multiple sites and make the most of your time underwater. Night dives reveal an entirely different ecosystem, with bioluminescent plankton, hunting octopuses, and sleeping sea turtles.",
      },
      {
        type: "heading",
        text: "Getting Here",
      },
      {
        type: "paragraph",
        text: "The Andaman Islands are accessible by flight from major Indian cities (Chennai, Kolkata, Delhi, Bangalore) to Port Blair's Veer Savarkar International Airport. From Port Blair, Havelock Island is reached by a 90-minute ferry ride or a short seaplane hop. We recommend spending at least 3-4 days to fully enjoy the diving experience.",
      },
    ],
  },
  {
    slug: "non-swimmers-explore-ocean",
    title: "Why Non-Swimmers Can Still Explore the Ocean",
    tag: "Beginners",
    tagColor: "from-teal-400 to-teal-500",
    excerpt:
      "Think you need to be an Olympic swimmer to scuba dive? Think again. Here's how anyone can experience the underwater world safely.",
    image: "/images/snorkeling.webp",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    author: "Experience Scuba",
    content: [
      {
        type: "paragraph",
        text: "One of the biggest misconceptions about scuba diving is that you need to be a strong swimmer to do it. In reality, thousands of non-swimmers discover the underwater world every year through introductory dive programs designed specifically for people with zero swimming experience. At Experience Scuba, some of our most memorable dives have been with guests who had never even put their face in water before.",
      },
      {
        type: "heading",
        text: "How Is This Possible?",
      },
      {
        type: "paragraph",
        text: "Scuba diving and swimming are fundamentally different activities. When you swim, you rely on your own buoyancy and physical effort to stay afloat. In scuba diving, your equipment does all the work. A BCD (Buoyancy Control Device) keeps you perfectly weighted, your tank provides unlimited breathing air, and your wetsuit adds natural buoyancy. You don't need to tread water or float on your own \u2014 the gear handles everything.",
      },
      {
        type: "quote",
        text: "I was terrified of water my whole life. My instructor was so patient and reassuring that within 20 minutes I was breathing underwater like I'd been doing it forever. It changed my entire perspective.",
      },
      {
        type: "heading",
        text: "The Safety Process",
      },
      {
        type: "paragraph",
        text: "Before any non-swimmer enters the water, our PADI-certified instructors conduct a thorough safety briefing that covers everything you need to know. This isn't a rushed five-minute talk \u2014 it's a comprehensive session where you learn breathing techniques, hand signals, how to clear your mask, and what to do in any situation. You then practice every skill in shallow, calm water until you feel completely comfortable.",
      },
      {
        type: "list",
        items: [
          "Comprehensive 30-45 minute safety briefing on land",
          "Practice all skills in waist-deep water first",
          "One-on-one instructor accompaniment throughout the dive",
          "Gradual descent \u2014 you control the pace entirely",
          "Instructor holds your hand and monitors you constantly",
          "You can surface at any time if you feel uncomfortable",
        ],
      },
      {
        type: "heading",
        text: "Shore Diving: The Perfect Starting Point",
      },
      {
        type: "paragraph",
        text: "For non-swimmers, shore diving is the ideal introduction. You walk into the water directly from the beach, which means there's no intimidating boat jump. The entry is gradual, giving your body and mind time to adjust. The dive sites accessible from shore in Havelock are surprisingly rich \u2014 within just a few meters from the beach, you'll find coral gardens teeming with tropical fish.",
      },
      {
        type: "heading",
        text: "Real Stories from Non-Swimmers",
      },
      {
        type: "paragraph",
        text: "Over our 13+ years of operations, we've guided thousands of non-swimmers through their first underwater experience. Many of them describe it as life-changing. Some have gone on to get certified and become regular divers. Others simply treasure the memory of that one magical moment when they breathed underwater for the first time and saw a clownfish hiding in an anemone.",
      },
      {
        type: "paragraph",
        text: "The ocean doesn't care whether you can swim 50 laps in a pool. All it asks is that you come with an open mind and a sense of wonder. Our job is to make sure you're safe while you discover that the underwater world is far more welcoming than you ever imagined.",
      },
    ],
  },
  {
    slug: "top-marine-species-havelock",
    title: "Top 5 Marine Species You'll Encounter in Havelock",
    tag: "Marine Life",
    tagColor: "from-coral-400 to-coral-500",
    excerpt:
      "From majestic manta rays to playful sea turtles, meet the incredible creatures waiting beneath the Andaman waves.",
    image: "/images/marine-5.webp",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    author: "Experience Scuba",
    content: [
      {
        type: "paragraph",
        text: "Havelock Island sits at the crossroads of the Andaman Sea and the Bay of Bengal, creating a unique marine environment that attracts an astonishing variety of sea life. Whether you're on a beginner shore dive or an advanced deep dive, the waters around Havelock never fail to deliver extraordinary encounters. Here are five species that make diving here truly unforgettable.",
      },
      {
        type: "heading",
        text: "1. Green & Hawksbill Sea Turtles",
      },
      {
        type: "paragraph",
        text: "Sea turtles are perhaps the most iconic marine creatures you'll encounter in Havelock. Both green turtles and hawksbill turtles are commonly spotted at almost every dive site around the island. These gentle, ancient creatures glide through the water with remarkable grace, and they're surprisingly comfortable around divers. At sites like Turtle Beach and Nemo Reef, it's not uncommon to see multiple turtles on a single dive, munching on sponges and coral or simply cruising through the blue.",
      },
      {
        type: "heading",
        text: "2. Manta Rays",
      },
      {
        type: "paragraph",
        text: "Spotting a manta ray is one of diving's ultimate bucket-list moments, and Havelock delivers. These majestic creatures, with wingspans reaching up to 5 meters, visit the deeper dive sites around the island between December and April. Dixson's Pinnacle and Johnny's Gorge are prime manta territory. Watching a manta ray swoop past you in the blue, completely silent, is a feeling that stays with you forever. They often circle back for a second look at divers, seemingly as curious about us as we are about them.",
      },
      {
        type: "heading",
        text: "3. Reef Sharks",
      },
      {
        type: "paragraph",
        text: "Blacktip and whitetip reef sharks are regular visitors at Havelock's deeper dive sites. Despite their fearsome reputation (mostly thanks to Hollywood), reef sharks are shy, elegant creatures that pose no danger to divers. They typically range from 1 to 1.5 meters in length and are often seen patrolling the reef edges or resting on sandy bottoms. Sites like The Wall and Jackson's Bar offer consistent shark sightings, especially in the early morning hours.",
      },
      {
        type: "heading",
        text: "4. Clownfish & Anemone Gardens",
      },
      {
        type: "paragraph",
        text: "Thanks to a certain animated movie, clownfish are probably the most requested species among beginner divers. Havelock doesn't disappoint \u2014 Nemo Reef is named precisely because of its extraordinary concentration of anemone gardens hosting multiple species of clownfish. Watching these tiny, feisty fish dart in and out of their anemone homes is endlessly entertaining. Each anemone hosts a family with a strict hierarchy, and the fish will even come right up to your mask to investigate.",
      },
      {
        type: "heading",
        text: "5. Whale Sharks",
      },
      {
        type: "paragraph",
        text: "The holy grail of Andaman diving. Whale sharks \u2014 the world's largest fish, reaching lengths of over 12 meters \u2014 make seasonal appearances in Andaman waters, typically between February and May. While sightings can't be guaranteed, divers at Havelock have reported encounters at sites like Minerva Ledge and in the open waters between islands. Swimming alongside a whale shark is one of the most humbling experiences nature can offer. Despite their enormous size, they're gentle filter feeders that glide through the water with surprising delicacy.",
      },
      {
        type: "quote",
        text: "Every dive in Havelock tells a different story. One day you're eye to eye with a curious sea turtle, the next you're watching a manta ray dance in the blue. That's the magic of these waters.",
      },
      {
        type: "heading",
        text: "When to See What",
      },
      {
        type: "list",
        items: [
          "Sea Turtles: Year-round, virtually every dive",
          "Manta Rays: December to April at deeper sites",
          "Reef Sharks: Year-round, best at dawn dives",
          "Clownfish: Year-round at Nemo Reef and shallow sites",
          "Whale Sharks: February to May, rare but spectacular",
        ],
      },
      {
        type: "paragraph",
        text: "The marine biodiversity of Havelock extends far beyond these five species. On any given dive, you might also encounter eagle rays, barracuda schools, moray eels, octopuses, cuttlefish, nudibranch, and hundreds of species of tropical reef fish. Each dive site has its own character and resident creatures, making every descent a new adventure.",
      },
    ],
  },
  {
    slug: "choose-first-padi-certification",
    title: "How to Choose Your First PADI Certification Course",
    tag: "Certification",
    tagColor: "from-gold-400 to-gold-500",
    excerpt:
      "Open Water, Advanced, or Rescue? We break down every PADI level so you can pick the perfect course for your diving journey.",
    image: "/images/boat-diving.webp",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    author: "Experience Scuba",
    content: [
      {
        type: "paragraph",
        text: "So you've done a Discover Scuba Dive, fallen in love with the underwater world, and now you want to take the plunge into certification. But with multiple PADI levels available, choosing the right course can feel overwhelming. This guide breaks down every option so you can make an informed decision that matches your goals, time, and budget.",
      },
      {
        type: "heading",
        text: "PADI Scuba Diver \u2014 The Quick Start",
      },
      {
        type: "paragraph",
        text: "If you're short on time but want more than just an introductory dive, the PADI Scuba Diver certification is your answer. This is essentially the first half of the Open Water course \u2014 you'll learn fundamental dive theory, complete confined water sessions, and do 2 open water dives. The certification allows you to dive to 12 meters with a PADI professional. It's perfect for vacationers who want meaningful underwater access without committing to a full course.",
      },
      {
        type: "list",
        items: [
          "Duration: 2 days",
          "Max depth: 12 meters",
          "Must dive with a PADI professional",
          "Can be upgraded to Open Water later",
          "Ideal for: Time-limited travelers",
        ],
      },
      {
        type: "heading",
        text: "PADI Open Water Diver \u2014 The Gold Standard",
      },
      {
        type: "paragraph",
        text: "This is the certification most divers start with, and for good reason. The PADI Open Water Diver course is recognized worldwide and qualifies you to dive independently (with a buddy) to 18 meters. The course covers dive theory, equipment knowledge, safety protocols, and navigation. You'll complete 5 confined water sessions and 4 open water dives over 3-4 days. Once certified, you can dive at any dive center in the world \u2014 your certification never expires.",
      },
      {
        type: "quote",
        text: "Getting my Open Water certification in the Andamans was the best decision I ever made. Learning to dive surrounded by sea turtles and coral reefs made the theory sessions worth every minute.",
      },
      {
        type: "heading",
        text: "PADI Advanced Open Water \u2014 Level Up",
      },
      {
        type: "paragraph",
        text: "Already Open Water certified and hungry for more? The Advanced course is designed to expand your skills and confidence through 5 adventure dives, including mandatory deep diving (to 30 meters) and underwater navigation. The remaining 3 dives are your choice from specialties like night diving, wreck diving, drift diving, and more. There's no exam \u2014 it's all about logging diverse diving experiences under professional supervision.",
      },
      {
        type: "list",
        items: [
          "Duration: 2-3 days",
          "Max depth: 30 meters",
          "5 adventure dives (2 mandatory + 3 elective)",
          "No classroom exams",
          "Prerequisite: Open Water certification",
          "Ideal for: Divers wanting deeper access and variety",
        ],
      },
      {
        type: "heading",
        text: "PADI Rescue Diver \u2014 The Game Changer",
      },
      {
        type: "paragraph",
        text: "Ask any diver which course changed them the most, and they'll likely say Rescue. This course transforms you from a good diver into a confident one. You'll learn to recognize and manage stress in others, handle emergencies, and perform rescue scenarios. It's challenging, sometimes intense, but incredibly rewarding. The Emergency First Response (EFR) certification is a prerequisite, teaching you CPR and first aid skills that are valuable far beyond diving.",
      },
      {
        type: "heading",
        text: "PADI Divemaster \u2014 Go Professional",
      },
      {
        type: "paragraph",
        text: "The Divemaster certification is your entry into the professional level of diving. As a PADI Divemaster, you can lead certified divers, assist with courses, and work at dive centers worldwide. The course covers dive theory at an advanced level, develops your leadership skills, and requires demonstrating excellent water skills. It's a significant time commitment (typically 4-6 weeks) but opens up a world of career possibilities.",
      },
      {
        type: "heading",
        text: "Which Course Is Right for You?",
      },
      {
        type: "paragraph",
        text: "If this is your first certification and you have 3-4 days, go Open Water. It's the foundation everything else builds on. If you're time-limited, Scuba Diver gets you underwater with the option to upgrade later. Already certified and visiting the Andamans? The Advanced course lets you access deeper, more spectacular sites during your trip. And if you dream of making diving your life, start planning your path toward Divemaster.",
      },
      {
        type: "paragraph",
        text: "At Experience Scuba, we offer every PADI course from complete beginner to professional. Our instructors will help you choose the right level based on your experience, goals, and available time. The ocean is waiting \u2014 your certification is just the key to unlock it.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug);
}
