export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  iconName: "FiCoffee" | "FiSun" | "FiCompass" | "FiWind" | "FiHeart" | "FiSmile";
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "valley-dining",
    title: "Scenic Valley Dining",
    category: "Culinary & Ambience",
    shortDescription:
      "Wholesome home-style meals and refreshing beverages served against panoramic misty landscapes.",
    detailedDescription:
      "Savor freshly prepared local and regional delicacies crafted with wholesome farm ingredients. Dine al fresco on our viewing deck as gentle morning breezes float across the valley, or enjoy an intimate evening meal under the canopy.",
    image: "/images/gallery/aaranya-dining-terrace.webp",
    iconName: "FiCoffee",
    highlights: [
      "Scenic outdoor dining deck",
      "Fresh local cuisine and seasonal specialties",
      "Complimentary morning tea & coffee",
      "In-room dining option for private relaxation",
    ],
  },
  {
    id: "private-balconies",
    title: "Private Mountain Balconies",
    category: "Stay Experience",
    shortDescription:
      "Exclusive viewing balconies providing uninterrupted vistas of floating mist and evergreen ridges.",
    detailedDescription:
      "Every room at Aaranya is deliberately oriented toward the natural slopes. Step out onto your personal sit-out with a hot cup of tea to watch the valley transform from golden dawn to starry forest dusk.",
    image: "/images/gallery/aaranya-valley-mist-balcony.webp",
    iconName: "FiSun",
    highlights: [
      "Direct sunrise & valley views",
      "Comfortable wooden sit-out chairs",
      "Pure, unpolluted mountain breeze",
      "Zero noise pollution",
    ],
  },
  {
    id: "estate-trails",
    title: "Estate Nature Walks",
    category: "Outdoor Leisure",
    shortDescription:
      "Peaceful strolls through lush plantation greenery, shade trees, and vibrant flora.",
    detailedDescription:
      "Explore the tranquil pathways winding through the property. Breathe in the crisp fragrance of wild flowers, native trees, and adjacent tea garden slopes while spotting indigenous birds that call this sanctuary home.",
    image: "/images/gallery/aaranya-nature-walkway.webp",
    iconName: "FiCompass",
    highlights: [
      "Gentle winding paths suitable for all ages",
      "Indigenous flora and birdwatching opportunities",
      "Adjoining lush tea garden perspectives",
      "Pure serenity away from city traffic",
    ],
  },
  {
    id: "restful-solitude",
    title: "Quiet Nature Retreat",
    category: "Wellness & Solitude",
    shortDescription:
      "A peaceful environment curated for true mental unwinding, reading, and deep restorative sleep.",
    detailedDescription:
      "Aaranya is purposefully secluded to offer sanctuary from urban chaos. Immerse yourself in the calming rhythm of nature — soft rainfall against glass, rustling leaves, and absolute nighttime stillness.",
    image: "/images/gallery/aaranya-forest-hillside.webp",
    iconName: "FiWind",
    highlights: [
      "Serene, secluded location",
      "Unmatched tranquility for reading & mindfulness",
      "Cool mountain microclimate",
      "Cozy architectural interiors",
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
    image: "/images/gallery/aaranya-resort-panoramic.webp",
    iconName: "FiHeart",
    highlights: [
      "Prompt WhatsApp assistance prior to and during your stay",
      "Assistance with route planning & local sightseeing tips",
      "Daily attentive room housekeeping",
      "Warm hospitality tailored to your preferences",
    ],
  },
];
