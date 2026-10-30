import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aaranyamistyvalleyresort.com";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero/aaranya-resort-villa-4k.webp`,
        `${baseUrl}/images/pages/about-resort.webp`,
        `${baseUrl}/images/gallery/aaranya-valley-mist-balcony.webp`,
        `${baseUrl}/images/logo/aaranya-brand-logo.png`,
      ],
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/images/pages/rooms-hero.webp`,
        `${baseUrl}/images/rooms/deluxe-room.jpg`,
        `${baseUrl}/images/rooms/premium-room.jpg`,
        `${baseUrl}/images/rooms/family-room.jpg`,
      ],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/gallery/aaranya-resort-day.webp`,
        `${baseUrl}/images/gallery/aaranya-valley-mist-balcony.webp`,
        `${baseUrl}/images/gallery/aaranya-hilltop-sunset.webp`,
        `${baseUrl}/images/gallery/aaranya-forest-hillside.webp`,
        `${baseUrl}/images/gallery/aaranya-dining-terrace.webp`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/gallery/aaranya-dining-terrace.webp`,
        `${baseUrl}/images/gallery/aaranya-valley-mist-balcony.webp`,
        `${baseUrl}/images/gallery/aaranya-nature-walkway.webp`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/images/pages/about-resort.webp`,
        `${baseUrl}/images/gallery/aaranya-architecture-facade.webp`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/hero/aaranya-resort-villa-4k.webp`,
      ],
    },
  ];
}
