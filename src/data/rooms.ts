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
    id: "executive-room",
    slug: "executive-room",
    name: "Executive Room",
    subtitle: "Tranquil Forest & Valley Overlook",
    shortDescription:
      "Spacious and elegant room with nature views and modern executive amenities.",
    detailedDescription:
      "Awaken to misty mountain breezes and lush rainforest vistas. The Executive Room features expansive panoramic glass windows, a plush king bed, private attached bathroom, and bespoke timber finishes designed to keep you seamlessly connected to the natural world.",
    image: "/images/rooms/aaranya-canopy-bedroom-suite-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-canopy-bedroom-suite-2k.webp",
      "/images/rooms/aaranya-canopy-bed-suite-view-2k.webp",
      "/images/rooms/aaranya-luxury-marble-bathroom-2k.webp",
      "/images/rooms/aaranya-canopy-bed-detail-2k.webp",
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
      "Artisanal Wooden Furnishings",
      "Wardrobe & Luggage Area",
      "Electric Kettle & Tea/Coffee Station",
      "Wi-Fi Available",
      "Daily Housekeeping",
      "Attached Luxury Bathroom",
    ],
    features: [
      "Plush organic cotton linens",
      "Artisanal wooden furnishings",
      "Quiet hillside orientation",
      "Complimentary morning tea/coffee",
    ],
  },
  {
    id: "executive-with-balcony-room",
    slug: "executive-with-balcony-room",
    name: "Executive with Balcony Room",
    subtitle: "Private Balcony Overlooking Misty Canopy",
    shortDescription:
      "A perfect blend of executive comfort with a private viewing balcony and serene surroundings.",
    detailedDescription:
      "Crafted for discerning travelers seeking quiet refinement and fresh mountain air, the Executive with Balcony Room features warm wooden headboard accents, ambient soft lighting, and direct sliding glass doors opening to a private sit-out balcony overlooking the mist-shrouded valley canopy.",
    image: "/images/rooms/aaranya-luxury-suite-interior-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-luxury-suite-interior-2k.webp",
      "/images/gallery/aaranya-private-mountain-balcony-2k.webp",
      "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
      "/images/rooms/aaranya-luxury-marble-bathroom-2k.webp",
      "/images/rooms/aaranya-marble-suite-vanity-2k.webp",
    ],
    capacity: {
      adults: 2,
      children: 1,
      bed: "Luxury King Bed",
    },
    size: "420 sq.ft",
    view: "Valley & Mist Canopy View",
    amenities: [
      "Private Sit-out Balcony with Outdoor Chairs",
      "Designer Italian Marble Bathroom",
      "Ambient Bedside Backlighting",
      "Spacious Wardrobe & Luggage Area",
      "Premium Bathroom Toiletries",
      "Writing Desk with Nature View",
      "Wi-Fi Available",
      "Intercom & Room Service",
    ],
    features: [
      "Private mountain viewing balcony",
      "Direct sunrise & valley panorama",
      "Eco-conscious natural materials",
      "Sound-insulated glass architecture",
    ],
  },
  {
    id: "executive-with-balcony-with-bath-tub",
    slug: "executive-with-balcony-with-bath-tub",
    name: "Executive with Balcony with Bath Tub",
    subtitle: "Luxury Hillside Retreat with Balcony & Deep Soak Bathtub",
    shortDescription:
      "Ultimate luxury featuring a private viewing balcony and an indulgent bathtub overlooking nature.",
    detailedDescription:
      "The pinnacle of relaxation at Aaranya, the Executive with Balcony with Bath Tub pairs sophisticated high-ceiling timber interiors with a private open-air viewing balcony and a deep-soaking bathtub overlooking pristine greenery. Relax in warm soothing water after a day of hillside exploration, then unwind on your private balcony surrounded by cool mountain mist.",
    image: "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
    galleryImages: [
      "/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp",
      "/images/rooms/aaranya-jacuzzi-nature-view-2k.webp",
      "/images/gallery/aaranya-private-mountain-balcony-2k.webp",
      "/images/gallery/aaranya-timber-cathedral-mezzanine-2k.webp",
      "/images/rooms/aaranya-marble-suite-vanity-2k.webp",
    ],
    capacity: {
      adults: 2,
      children: 2,
      bed: "Luxury King Bed / Extra Bed Available",
    },
    size: "550 sq.ft",
    view: "Panoramic Hillside & Forest View",
    amenities: [
      "Deep-Soaking Designer Bathtub with Nature View",
      "Private Viewing Balcony with Panoramic Vista",
      "High Vaulted Timber A-Frame Ceiling",
      "Spacious Italian Marble Bathroom",
      "In-room Relaxation Seating",
      "Premium Bathrobes & Organic Toiletries",
      "Wi-Fi Available",
      "Electric Kettle & Tea/Coffee Station",
    ],
    features: [
      "Deep soak bathtub overlooking forest canopy",
      "Private outdoor balcony with seating",
      "Vaulted cathedral timber ceiling",
      "Unmatched serenity and hillside privacy",
    ],
  },
];
