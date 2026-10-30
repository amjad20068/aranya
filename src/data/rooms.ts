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
    image: "/images/rooms/aaranya-canopy-bedroom-suite-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-canopy-bedroom-suite-2k.webp",
      "/images/rooms/aaranya-canopy-bed-suite-view-2k.webp",
      "/images/rooms/aaranya-luxury-marble-bathroom-2k.webp",
      "/images/rooms/aaranya-canopy-bed-detail-2k.webp",
      "/images/gallery/aaranya-private-mountain-balcony-2k.webp",
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
      "Artisanal Wooden Furnishings",
      "Wardrobe & Luggage Area",
      "Electric Kettle & Tea/Coffee Station",
      "Wi-Fi Available",
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
    image: "/images/rooms/aaranya-luxury-suite-interior-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-luxury-suite-interior-2k.webp",
      "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
      "/images/rooms/aaranya-luxury-marble-bathroom-2k.webp",
      "/images/rooms/aaranya-marble-suite-vanity-2k.webp",
      "/images/gallery/aaranya-private-mountain-balcony-2k.webp",
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
      "Designer Italian Marble Bathroom",
      "Ambient Bedside Backlighting",
      "Spacious Wardrobe & Luggage Area",
      "Premium Bathroom Toiletries",
      "Writing Desk with Nature View",
      "Wi-Fi Available",
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
    image: "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
      "/images/gallery/aaranya-timber-cathedral-mezzanine-2k.webp",
      "/images/gallery/aaranya-cathedral-atrium-lounge-2k.webp",
      "/images/rooms/aaranya-marble-suite-vanity-2k.webp",
      "/images/gallery/aaranya-villa-courtyard-view-2k.webp",
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
      "Spacious Family Marble Bathroom",
      "In-room Dining Table Setup",
      "Wi-Fi Available",
      "Safety Features for Children",
    ],
    features: [
      "Expansive floor plan for children",
      "Floor-to-ceiling glass framing",
      "Quiet family-friendly wing",
      "Convenient access to dining deck",
    ],
  },
];
