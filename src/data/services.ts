export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  iconName: "FiCoffee" | "FiSun" | "FiCompass" | "FiWind" | "FiHeart" | "FiSmile" | "FiDroplet" | "FiHome";
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "valley-dining",
    title: "Panoramic Glass Dining",
    category: "Culinary & Ambience",
    shortDescription:
      "Wholesome home-style meals and refreshing beverages served against panoramic misty landscapes in our glass restaurant.",
    detailedDescription:
      "Savor freshly prepared Kerala specialties and wholesome regional delicacies crafted with fresh ingredients. Dine within our signature panoramic glass-enclosed restaurant deck as morning mist drifts across the valley, or enjoy an intimate evening meal under the stars.",
    image: "/images/gallery/aaranya-glass-dining-deck-2k.webp",
    iconName: "FiCoffee",
    highlights: [
      "Panoramic glass dining deck overlooking forested ridges",
      "Authentic local cuisine and seasonal specialties",
      "Complimentary morning tea & plantation coffee",
      "In-room dining option for private relaxation",
    ],
  },
  {
    id: "hillside-pool",
    title: "Hillside Infinity Swimming Pool",
    category: "Wellness & Leisure",
    shortDescription:
      "Crystal clear swimming pool and sun terrace set against expansive mountain ridge panoramas.",
    detailedDescription:
      "Immerse yourself in our open-air hillside swimming pool framed by native tropical trees and sweeping horizons. Whether starting your day with a morning dip or relaxing on the sun deck with cool mountain breezes, the pool offers refreshing rejuvenation.",
    image: "/images/gallery/aaranya-poolside-mountain-panorama-2k.webp",
    iconName: "FiDroplet",
    highlights: [
      "Crystal clear mountain view swimming pool",
      "Spacious tiled sun deck with stainless steel ladders",
      "Unobstructed panoramic mountain valley horizon",
      "Shaded architectural lounge overhang for relaxation",
    ],
  },
  {
    id: "private-balconies",
    title: "Private Mountain Balconies",
    category: "Stay Experience",
    shortDescription:
      "Exclusive viewing balconies providing uninterrupted vistas of floating mist and evergreen ridges.",
    detailedDescription:
      "Every accommodation at Aaranya is deliberately oriented toward the natural slopes. Step out onto your personal sit-out with a hot cup of tea to watch the valley transform from golden dawn to starry forest dusk.",
    image: "/images/gallery/aaranya-private-mountain-balcony-2k.webp",
    iconName: "FiSun",
    highlights: [
      "Direct sunrise & valley views",
      "Comfortable wooden sit-out chairs",
      "Pure, unpolluted mountain breeze",
      "Zero noise pollution",
    ],
  },
  {
    id: "forest-jacuzzi",
    title: "Forest-View Hydrotherapy Jacuzzi",
    category: "Luxury Wellness",
    shortDescription:
      "Deep-soak corner jacuzzi hydrotherapy tub overlooking lush rainforest canopy and mountain slopes.",
    detailedDescription:
      "Experience ultimate relaxation in our luxury sunken jacuzzi bathtub. Set beside floor-to-ceiling corner glass windows framed with black granite and modern fixtures, you can soak in warm water while immersed in the serenity of the surrounding forest canopy.",
    image: "/images/gallery/aaranya-jacuzzi-nature-view-2k.webp",
    iconName: "FiDroplet",
    highlights: [
      "Private corner jacuzzi with panoramic forest views",
      "Therapeutic hydromassage water jets",
      "Black granite surround & designer chrome fixtures",
      "Absolute privacy amidst nature",
    ],
  },
  {
    id: "estate-trails",
    title: "Estate Nature Walks & Gardens",
    category: "Outdoor Leisure",
    shortDescription:
      "Peaceful strolls through lush cobblestone pathways, manicured golden cypress, and vibrant flora.",
    detailedDescription:
      "Explore the tranquil pathways winding through the property. Breathe in the crisp fragrance of wild flowers, native trees, and adjacent tea garden slopes while spotting indigenous birds that call this sanctuary home.",
    image: "/images/gallery/aaranya-manicured-garden-pathway-2k.webp",
    iconName: "FiCompass",
    highlights: [
      "Gentle winding cobblestone paths suitable for all ages",
      "Manicured golden cypress, coleus & tropical flora",
      "Adjoining lush tea garden perspectives",
      "Pure serenity away from city traffic",
    ],
  },
  {
    id: "cathedral-lounges",
    title: "Cathedral Timber Atrium Lounges",
    category: "Architecture & Solitude",
    shortDescription:
      "High-ceiling timber atrium and glasshouse viewing lounges designed for reading and quiet contemplation.",
    detailedDescription:
      "Our expansive architectural lounge features soaring vaulted timber cathedral ceilings, expansive multi-story glass facades, and comfortable sitting parlors. Relax with a book, enjoy peaceful conversations, or gaze at the shifting clouds outside.",
    image: "/images/gallery/aaranya-cathedral-atrium-lounge-2k.webp",
    iconName: "FiHome",
    highlights: [
      "Soaring double-height timber cathedral ceilings",
      "Full-height panoramic glass facade facing mountain ranges",
      "Rattan sitting parlor with ambient mountain light",
      "Quiet haven for reading and relaxation",
    ],
  },
  {
    id: "restful-solitude",
    title: "Sea of Clouds & Mountain Retreat",
    category: "Wellness & Solitude",
    shortDescription:
      "A peaceful environment curated for true mental unwinding, reading, and deep restorative sleep.",
    detailedDescription:
      "Aaranya is purposefully secluded to offer sanctuary from urban chaos. Immerse yourself in the calming rhythm of nature — early morning sea of clouds blanketing the valley, soft rustling leaves, and absolute nighttime stillness.",
    image: "/images/gallery/aaranya-sea-of-clouds-valley-2k.webp",
    iconName: "FiWind",
    highlights: [
      "Spectacular natural sea of clouds phenomenon",
      "Unmatched tranquility for reading & mindfulness",
      "Cool mountain microclimate year-round",
      "Cozy architectural villa interiors",
    ],
  },
  {
    id: "dedicated-hospitality",
    title: "Attentive Host Hospitality",
    category: "Guest Care",
    shortDescription:
      "Warm, responsive care from our on-ground team to ensure your stay is seamless and memorable.",
    detailedDescription:
      "Our gracious team is committed to making you feel thoroughly welcomed. From pre-arrival directions and WhatsApp support to tailored room preparations, we attend to your needs with warm, genuine care.",
    image: "/images/gallery/aaranya-villa-viewing-terrace-2k.webp",
    iconName: "FiHeart",
    highlights: [
      "Prompt WhatsApp assistance prior to and during your stay",
      "Assistance with route planning & local sightseeing tips",
      "Daily attentive room housekeeping",
      "Warm hospitality tailored to your preferences",
    ],
  },
];
