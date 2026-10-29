export interface GalleryItem {
  id: string;
  title: string;
  category: "Property" | "Rooms" | "Interiors" | "Nature" | "Amenities" | "Experiences";
  src: string;
  alt: string;
  featured?: boolean;
}

export const galleryCategories = [
  "All",
  "Property",
  "Rooms",
  "Interiors",
  "Nature",
  "Amenities",
  "Experiences",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData: GalleryItem[] = [
  {
    id: "g-resort-day",
    title: "Aaranya Villa Nestled in Hillside Forest",
    category: "Property",
    src: "/images/gallery/aaranya-resort-day.webp",
    alt: "Aaranya Misty Valley Resort nestled amidst lush green forest and tea garden hills",
    featured: true,
  },
  {
    id: "g-premium-room",
    title: "Premium Room with Ambient Backlighting",
    category: "Interiors",
    src: "/images/rooms/premium-room.webp",
    alt: "Premium Room featuring ambient wooden headboard lighting and valley terrace view",
    featured: true,
  },
  {
    id: "g-balcony-view",
    title: "Morning Mist from the Viewing Balcony",
    category: "Nature",
    src: "/images/gallery/aaranya-valley-mist-balcony.webp",
    alt: "Dense morning fog drifting gently over the valley seen from private balcony",
    featured: true,
  },
  {
    id: "g-hilltop-sunset",
    title: "Golden Hour Glow Over the Mountain Crest",
    category: "Experiences",
    src: "/images/gallery/aaranya-hilltop-sunset.webp",
    alt: "Warm golden sunlight bathing the misty valley peaks at sunset",
    featured: true,
  },
  {
    id: "g-forest-hillside",
    title: "Deep Evergreen Forest Canopy",
    category: "Nature",
    src: "/images/gallery/aaranya-forest-hillside.webp",
    alt: "Towering tropical trees and lush green hillside canopy",
    featured: true,
  },
  {
    id: "g-resort-panoramic",
    title: "Panoramic Valley & Mist View",
    category: "Property",
    src: "/images/gallery/aaranya-resort-panoramic.webp",
    alt: "Panoramic view of misty mountain ridges and tea slopes",
    featured: true,
  },
  {
    id: "g-morning-mist",
    title: "Ethereal Blue Mountain Ridges",
    category: "Nature",
    src: "/images/gallery/aaranya-morning-mist.webp",
    alt: "Layered mountain ridges emerging through morning clouds",
    featured: true,
  },
  {
    id: "g-tea-estate-slope",
    title: "Adjoining Hillside Slopes",
    category: "Nature",
    src: "/images/gallery/aaranya-tea-estate-slope.webp",
    alt: "Verdant tea estate and forest hillside bordering the resort",
    featured: true,
  },
  {
    id: "g-deluxe-bedroom",
    title: "Deluxe Bedroom with Panoramic Nature Window",
    category: "Rooms",
    src: "/images/rooms/deluxe-room.webp",
    alt: "Deluxe Room with warm wooden accents and expansive window looking out over trees",
  },
  {
    id: "g-family-room",
    title: "Family Room with High Timber Ceiling",
    category: "Rooms",
    src: "/images/rooms/family-room.webp",
    alt: "Family Room with high A-frame wooden ceiling and dramatic valley viewpoint",
  },
  {
    id: "resort-panoramic",
    title: "Resort Panorama & Surrounding Forest",
    category: "Property",
    src: "/images/gallery/aaranya-resort-panoramic.webp",
    alt: "Panoramic view of Aaranya Resort nestled in tranquil emerald mountain landscape",
  },
  {
    id: "terrace-deck-view",
    title: "Open-Air Observation Deck",
    category: "Amenities",
    src: "/images/gallery/aaranya-terrace-view.webp",
    alt: "Observation deck with open view of the misty valley",
    featured: true,
  },
  {
    id: "bedroom-suite-cozy",
    title: "Cozy Suite Interiors with Natural Wood",
    category: "Interiors",
    src: "/images/gallery/aaranya-bedroom-suite.webp",
    alt: "Luxury suite interior with timber accents and soft organic bedding",
  },
  {
    id: "tea-estate-slope",
    title: "Adjoining Tea Gardens & Plantation Slopes",
    category: "Nature",
    src: "/images/gallery/aaranya-tea-estate-slope.webp",
    alt: "Rolling tea bushes and manicured green slopes bordering the resort",
  },
  {
    id: "hilltop-sunset",
    title: "Golden Hour Glow Over the Mountain Crest",
    category: "Experiences",
    src: "/images/gallery/aaranya-hilltop-sunset.webp",
    alt: "Warm golden sunlight bathing the misty valley peaks at sunset",
    featured: true,
  },
  {
    id: "dining-terrace-deck",
    title: "Valley View Dining & Coffee Terrace",
    category: "Amenities",
    src: "/images/gallery/aaranya-dining-terrace.webp",
    alt: "Scenic outdoor dining deck overlooking forested slopes",
  },
  {
    id: "nature-walkway-trail",
    title: "Canopy Walkway & Estate Trails",
    category: "Experiences",
    src: "/images/gallery/aaranya-nature-walkway.webp",
    alt: "Pathways winding through tropical flora and shady canopy",
  },
  {
    id: "morning-mist-canopy",
    title: "Ethereal Morning Cloudscape",
    category: "Nature",
    src: "/images/gallery/aaranya-morning-mist.webp",
    alt: "Low-hanging clouds moving across mountain ridges",
  },
  {
    id: "luxury-stay-exterior",
    title: "Multilevel Hillside Architecture",
    category: "Property",
    src: "/images/gallery/aaranya-luxury-stay-exterior.webp",
    alt: "Exterior view showcasing the tiered architectural layout of Aaranya",
  },
  {
    id: "lounge-valley-retreat",
    title: "Intimate Relaxation Lounge",
    category: "Amenities",
    src: "/images/gallery/aaranya-valley-retreat-lounge.webp",
    alt: "Indoor seating area with large windows welcoming natural mountain sunlight",
  },
];
