export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  galleryImages: string[];
  capacity: {
    adults: number;
    children: number;
    bed: string;
  };
  size: string;
  view: string;
  amenities: string[];
  features: string[];
}

export const roomsData: Room[] = [
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Room",
    subtitle: "Tranquil Forest & Valley Overlook",
    shortDescription:
      "Spacious and elegant rooms with nature views and modern amenities.",
    detailedDescription:
      "Awaken to misty mountain breezes and lush rainforest vistas. The Deluxe Room features expansive panoramic glass windows, a plush king bed, private attached bathroom, and bespoke timber finishes designed to keep you seamlessly connected to the natural world.",
    image: "/images/rooms/deluxe-room.jpg",
    galleryImages: [
      "/images/rooms/deluxe-room.jpg",
      "/images/gallery/aaranya-bedroom-suite.webp",
      "/images/gallery/aaranya-terrace-view.webp",
    ],
    capacity: {
      adults: 2,
      children: 1,
      bed: "King Bed",
    },
    size: "350 sq.ft",
    view: "Forest & Valley View",
    amenities: [
      "Panoramic Nature Glass Windows",
      "Private Viewing Balcony",
      "En-suite Bathroom with Hot Shower",
      "High-speed Wi-Fi",
      "Electric Kettle & Tea/Coffee Station",
      "Daily Housekeeping",
    ],
    features: [
      "Plush organic cotton linens",
      "Artisanal wooden furnishings",
      "Quiet hillside orientation",
      "Complimentary morning tea/coffee",
    ],
  },
  {
    id: "premium-room",
    slug: "premium-room",
    name: "Premium Room",
    subtitle: "Elegance Blended with Nature",
    shortDescription:
      "A perfect blend of comfort and serene surroundings.",
    detailedDescription:
      "Crafted for discerning travelers seeking quiet refinement, the Premium Room features warm wooden headboard accents, ambient soft lighting, and direct sliding glass doors opening to a private sit-out overlooking the mist-shrouded valley canopy.",
    image: "/images/rooms/premium-room.jpg",
    galleryImages: [
      "/images/rooms/premium-room.jpg",
      "/images/gallery/aaranya-cozy-interiors.webp",
      "/images/gallery/aaranya-valley-mist-balcony.webp",
    ],
    capacity: {
      adults: 2,
      children: 1,
      bed: "Luxury King Bed",
    },
    size: "420 sq.ft",
    view: "Valley & Mist Canopy View",
    amenities: [
      "Private Sit-out with Outdoor Chairs",
      "Ambient Bedside Backlighting",
      "Spacious Wardrobe & Luggage Area",
      "Premium Bathroom Toiletries",
      "Writing Desk with Nature View",
      "Intercom & Room Service",
    ],
    features: [
      "Direct sunrise / mountain view",
      "Eco-conscious natural materials",
      "Sound-insulated glass architecture",
      "Unmatched privacy",
    ],
  },
  {
    id: "family-room",
    slug: "family-room",
    name: "Family Room",
    subtitle: "Spacious Sanctuary for Loved Ones",
    shortDescription:
      "Ideal for families, with extra space and a relaxing atmosphere.",
    detailedDescription:
      "Designed specifically for families and small groups, this generous sanctuary features high vaulted timber ceilings, expansive floor-to-ceiling glass, multiple comfortable sleeping configurations, and a relaxed lounge corner.",
    image: "/images/rooms/family-room.jpg",
    galleryImages: [
      "/images/rooms/family-room.jpg",
      "/images/gallery/aaranya-wooden-cottage-room.webp",
      "/images/gallery/aaranya-resort-panoramic.webp",
    ],
    capacity: {
      adults: 4,
      children: 2,
      bed: "2 King Beds / Twin Setup",
    },
    size: "600 sq.ft",
    view: "Panoramic Hillside & Forest View",
    amenities: [
      "High Timber A-Frame Ceiling",
      "Separate Family Seating Area",
      "Dual Wardrobes & Storage",
      "Spacious Family Bathroom",
      "In-room Dining Table Setup",
      "Safety Features for Children",
    ],
    features: [
      "Expansive floor plan for children",
      "Floor-to-ceiling triangular glass framing",
      "Quiet family-friendly wing",
      "Convenient access to dining deck",
    ],
  },
  {
    id: "valley-suite",
    slug: "luxury-valley-suite",
    name: "Luxury Valley Suite",
    subtitle: "Peak Elevation & Endless Horizons",
    shortDescription:
      "Exclusive suite with wrap-around viewing terrace and living lounge.",
    detailedDescription:
      "Perched atop the resort's signature glass tower, the Luxury Valley Suite offers an uninterrupted 180-degree vista of floating clouds and emerald tea slopes. Features an intimate lounge area and private outdoor deck.",
    image: "/images/gallery/aaranya-valley-retreat-lounge.webp",
    galleryImages: [
      "/images/gallery/aaranya-valley-retreat-lounge.webp",
      "/images/gallery/aaranya-terrace-view.webp",
      "/images/gallery/aaranya-hilltop-sunset.webp",
    ],
    capacity: {
      adults: 2,
      children: 1,
      bed: "Grand King Bed",
    },
    size: "520 sq.ft",
    view: "Panoramic 180° Valley & Sunset View",
    amenities: [
      "Wrap-around Panoramic Balcony",
      "Dedicated Living & Coffee Lounge",
      "Luxury Stone Finish Bathroom",
      "Express WhatsApp Concierge",
      "In-suite Breakfast on Request",
      "Binoculars for Birdwatching",
    ],
    features: [
      "Highest elevation in the property",
      "Unobstructed sunrise & sunset views",
      "Signature bespoke wood craftsmanship",
    ],
  },
  {
    id: "forest-cottage",
    slug: "forest-view-cottage",
    name: "Forest View Cottage",
    subtitle: "Immersed in Indigenous Wilderness",
    shortDescription:
      "Secluded cottage surrounded by ancient trees and gentle mountain breeze.",
    detailedDescription:
      "Nestled gracefully amidst towering forest canopy, the Forest View Cottage is crafted with earthy stone and seasoned wood. Perfect for nature lovers who cherish tranquil seclusion and listening to the rustle of leaves.",
    image: "/images/gallery/aaranya-forest-hillside.webp",
    galleryImages: [
      "/images/gallery/aaranya-forest-hillside.webp",
      "/images/gallery/aaranya-nature-walkway.webp",
      "/images/gallery/aaranya-morning-mist.webp",
    ],
    capacity: {
      adults: 2,
      children: 1,
      bed: "Custom Timber King Bed",
    },
    size: "450 sq.ft",
    view: "Deep Forest & Plantation View",
    amenities: [
      "Independent Cottage Setting",
      "Stone-paved Private Sit-out",
      "Handmade Wooden Rocking Chairs",
      "En-suite Nature Bath",
      "Direct Trail Access",
      "Eco-friendly Room Amenities",
    ],
    features: [
      "Maximum privacy and seclusion",
      "Cool rainforest microclimate",
      "Surrounded by cardamom & coffee plantation foliage",
    ],
  },
];
