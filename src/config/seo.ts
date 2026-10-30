/**
 * AARANYA — MISTY VALLEY RESORT
 * Comprehensive SEO Configuration & Schema.org JSON-LD Structured Data
 */

import { resortConfig } from "@/config/resort";
import { roomsData } from "@/data/rooms";
import { reviewsSummary } from "@/data/reviews";

export const SITE_URL = "https://aaranyamistyvalleyresort.com";

export const defaultSeoKeywords = [
  "Aaranya Misty Valley Resort",
  "Aaranya Resort Wayanad",
  "Luxury Forest Resort Kerala",
  "Misty Valley Resort Western Ghats",
  "Best nature resorts in Wayanad Kerala",
  "Luxury eco resort with private balcony",
  "Forest view suites Western Ghats",
  "Honeymoon resort amidst misty mountains",
  "Attamala Meppadi resort booking",
  "Kerala luxury wilderness retreat",
  "Resort with tea garden & valley views",
  "Quiet secluded nature stay Kerala",
  "Family holiday resort Wayanad",
  "Direct WhatsApp resort booking",
];

/**
 * 1. Primary LodgingBusiness & Resort Schema for Google Knowledge Graph & Rich Snippets
 */
export function getResortJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Resort", "LodgingBusiness", "Hotel"],
    "@id": `${SITE_URL}/#resort`,
    name: resortConfig.name,
    alternateName: ["Aaranya Misty Valley Resort", "Aaranya Resort", "Aaranya Kerala"],
    legalName: resortConfig.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo/aaranya-brand-logo.png`,
      caption: `${resortConfig.name} Logo`,
      width: 512,
      height: 512,
    },
    image: [
      `${SITE_URL}/images/hero/aaranya-resort-villa-4k.webp`,
      `${SITE_URL}/images/pages/rooms-hero.webp`,
      `${SITE_URL}/images/gallery/aaranya-valley-mist-balcony.webp`,
      `${SITE_URL}/images/gallery/aaranya-architecture-facade.webp`,
      `${SITE_URL}/images/rooms/deluxe-room.jpg`,
      `${SITE_URL}/images/rooms/premium-room.jpg`,
      `${SITE_URL}/images/rooms/family-room.jpg`,
    ],
    description:
      "Aaranya is a serene luxury forest retreat nestled in pristine misty hills of the Western Ghats, Kerala. Offering panoramic valley views, bespoke architectural rooms with private sit-outs, and warm hospitality.",
    telephone: resortConfig.phone,
    email: resortConfig.email,
    priceRange: "₹₹₹ (₹4,500 - ₹12,000 per night)",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    checkinTime: "14:00",
    checkoutTime: "11:00",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewsSummary.averageRating.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewsSummary.totalReviews.toString(),
      reviewCount: reviewsSummary.totalReviews.toString(),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Misty Valley, Attamala, Meppadi",
      addressLocality: "Wayanad",
      addressRegion: "Kerala",
      postalCode: "673577",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.5512,
      longitude: 76.1324,
    },
    hasMap: reviewsSummary.googleMapsUrl,
    sameAs: [
      resortConfig.social.instagram,
      resortConfig.social.facebook,
      reviewsSummary.googleMapsUrl,
    ].filter(Boolean),
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Panoramic Nature & Valley Views",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Mountain Balconies",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Complimentary High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Hot Water Shower & Luxury Toiletries",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Scenic Outdoor Valley Dining Deck",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Estate Nature Walking Trails",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Tea / Coffee Maker in Rooms",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Attentive Daily Housekeeping & Room Service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free On-Site Guest Parking",
        value: true,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: resortConfig.phone,
        contactType: "reservations",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Hindi", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: resortConfig.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Hindi"],
      },
    ],
    containsPlace: roomsData.map((room) => ({
      "@type": "HotelRoom",
      name: room.name,
      description: room.detailedDescription,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: room.capacity.adults + room.capacity.children,
        minValue: 1,
      },
      bed: {
        "@type": "BedDetails",
        typeOfBed: room.capacity.bed,
        numberOfBeds: 1,
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: room.size,
      },
      image: `${SITE_URL}${room.image}`,
      amenityFeature: room.amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
        value: true,
      })),
    })),
  };
}

/**
 * 2. WebSite Schema with Search & Identity
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: resortConfig.name,
    alternateName: "Aaranya Misty Valley Resort Official Website",
    publisher: {
      "@id": `${SITE_URL}/#resort`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * 3. BreadcrumbList Schema generator
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * 4. FAQPage Schema for Google Rich Snippets
 */
export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the check-in and check-out timings at Aaranya Misty Valley Resort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Check-in is from ${resortConfig.timings.checkIn} and check-out is until ${resortConfig.timings.checkOut}. Early check-in or late check-out can be requested via our direct WhatsApp booking desk based on availability.`,
        },
      },
      {
        "@type": "Question",
        name: "How can I book a room or check stay availability at Aaranya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can instantly reserve or enquire about room availability by using our direct WhatsApp booking button on the website, calling our front desk at ${resortConfig.phone}, or submitting your travel dates in the booking enquiry form.`,
        },
      },
      {
        "@type": "Question",
        name: "What room types are available at Aaranya Misty Valley Resort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aaranya offers Deluxe Rooms with panoramic nature windows, Premium Rooms with ambient timber backlighting and private sit-outs, Family Rooms with cathedral timber ceilings, Luxury Valley Suites, and secluded Forest View Cottages.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Aaranya Misty Valley Resort located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aaranya is secluded in the misty highlands of Attamala, Meppadi, Wayanad, Kerala, bordering pristine forest canopies and tea plantation slopes in the Western Ghats.",
        },
      },
      {
        "@type": "Question",
        name: "Do the rooms have balconies with nature and valley views?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every room and suite at Aaranya is oriented towards natural slopes and forest ridges, featuring expansive glass framing and private viewing balconies overlooking the misty valley canopy.",
        },
      },
      {
        "@type": "Question",
        name: "Is dining available at the resort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Aaranya features an open-air scenic valley dining deck serving fresh regional Kerala delicacies, wholesome meals, and complimentary morning plantation tea and coffee.",
        },
      },
    ],
  };
}

/**
 * 5. ImageGallery Schema for the Gallery Page
 */
export function getGalleryJsonLd(images: { src: string; title: string; alt: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Aaranya Misty Valley Resort Photography & Scenic Views",
    description:
      "A curated collection of authentic photographs showcasing Aaranya's hillside architecture, valley mist views, luxury rooms, and tea plantation surroundings.",
    url: `${SITE_URL}/gallery`,
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${img.src}`,
      caption: img.title,
      description: img.alt,
    })),
  };
}

