/**
 * AARANYA — MISTY VALLEY RESORT
 * Central Configuration File
 *
 * Update this file to configure resort details, contact information,
 * social links, and WhatsApp booking credentials.
 */

export interface ResortConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  whatsappNumber: string; // International format without + or spaces for wa.me API
  displayWhatsapp: string;
  phone: string;
  email: string;
  location: {
    estate: string;
    region: string;
    state: string;
    country: string;
    fullAddress: string;
    mapQueryUrl?: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  timings: {
    checkIn: string;
    checkOut: string;
  };
  amenities: {
    id: string;
    label: string;
    description: string;
  }[];
}

export const resortConfig: ResortConfig = {
  name: "AARANYA — MISTY VALLEY RESORT",
  shortName: "Aaranya",
  tagline: "Escape Into Nature. Stay In Luxury.",
  heroHeadline: "Nature's Peace.\nYour Perfect Stay.",
  heroDescription:
    "A serene retreat in the heart of nature, where lush greenery, misty hills and warm hospitality come together for an unforgettable experience.",
  // Official WhatsApp number matching Reference Image (+91 96785 41280)
  whatsappNumber: "919678541280",
  displayWhatsapp: "+91 96785 41280",
  phone: "+91 96785 41280",
  email: "info@aaranyaresort.com",
  location: {
    estate: "Misty Valley",
    region: "Nature Reserve",
    state: "Kerala / Western Ghats",
    country: "India",
    fullAddress: "Misty Valley, High Ranges, Kerala",
    mapQueryUrl: "https://maps.google.com/?q=Aaranya+Misty+Valley+Resort",
  },
  social: {
    // Leave empty ("") if no verified profile is available to safely hide or disable links
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  timings: {
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
  },
  amenities: [
    {
      id: "peaceful-location",
      label: "Peaceful Location",
      description: "Tucked inside lush virgin hillside forest away from city noise.",
    },
    {
      id: "nature-views",
      label: "Nature Views",
      description: "Panoramic vistas of misty valleys, tea estates, and evergreen canopy.",
    },
    {
      id: "comfortable-rooms",
      label: "Comfortable Rooms",
      description: "Thoughtfully crafted luxury rooms with expansive glass windows and balconies.",
    },
    {
      id: "relaxing-stay",
      label: "Relaxing Stay",
      description: "Unwind with authentic hospitality, cool mountain breezes, and birdsong.",
    },
  ],
};

/**
 * Helper to build the official WhatsApp Click-to-Chat URL
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = resortConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}
