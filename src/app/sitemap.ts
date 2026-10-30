import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero/aaranya-resort-villa-4k.webp`,
        `${baseUrl}/images/pages/aaranya-sea-of-clouds-2k.webp`,
        `${baseUrl}/images/pages/about-resort.webp`,
        `${baseUrl}/images/logo/aaranya-brand-logo.png`,
      ],
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/images/rooms/aaranya-canopy-bedroom-suite-2k.webp`,
        `${baseUrl}/images/rooms/aaranya-luxury-suite-interior-2k.webp`,
        `${baseUrl}/images/rooms/aaranya-canopy-suite-timber-floor-2k.webp`,
      ],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/gallery/aaranya-poolside-mountain-panorama-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-jacuzzi-nature-view-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-glass-dining-deck-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-private-mountain-balcony-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-cathedral-atrium-lounge-2k.webp`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/gallery/aaranya-glass-dining-deck-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-poolside-mountain-panorama-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-jacuzzi-nature-view-2k.webp`,
        `${baseUrl}/images/gallery/aaranya-manicured-garden-pathway-2k.webp`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/images/pages/about-resort.webp`,
        `${baseUrl}/images/pages/aaranya-villas-walkway-2k.webp`,
        `${baseUrl}/images/pages/aaranya-sea-of-clouds-2k.webp`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/hero/aaranya-resort-villa-4k.webp`,
        `${baseUrl}/images/logo/aaranya-brand-logo.png`,
      ],
    },
  ];
}
