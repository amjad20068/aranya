import React from "react";
import type { Metadata } from "next";
import ActivitiesClientView from "@/components/ActivitiesClientView";
import { resortConfig } from "@/config/resort";
import { SITE_URL, getBreadcrumbJsonLd, getWebPageJsonLd } from "@/config/seo";

export const metadata: Metadata = {
  title: "Activities & Adventures | Swimming Pool, Kids Pool, Glass Bridge, Campfire | Aaranya Resort Wayanad",
  description:
    "Explore activities at Aaranya Misty Valley Resort Wayanad: Hillside Infinity Swimming Pool, Kids Swimming Pool, Campfire with Music, Indoor Games, 4x4 Jeep Safari, Guided Plantation Walk & Private Digital Glass Bridge.",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    title: "Resort Activities & Adventures | Aaranya Misty Valley Resort Wayanad",
    description:
      "Infinity Swimming Pool, Kids Swimming Pool, Campfire with Music, Indoor Games, 4x4 Jeep Safari, Plantation Walk, and Private Digital Glass Bridge in Wayanad, Kerala.",
    url: `${SITE_URL}/activities`,
    siteName: resortConfig.name,
    images: [
      {
        url: "/images/activities/aaranya-glass-bridge.webp",
        width: 1920,
        height: 1080,
        alt: "Private Digital Glass Bridge Visit and Resort Activities at Aaranya Misty Valley Resort",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resort Activities & Adventures | Aaranya Misty Valley Resort",
    description:
      "Swimming Pool, Kids Swimming Pool, Campfire with Music, Indoor Games, 4x4 Jeep Safari, Plantation Walk & Private Digital Glass Bridge in Wayanad.",
    images: ["/images/activities/aaranya-glass-bridge.webp"],
  },
};

export default function ActivitiesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Activities", url: "/activities" },
  ]);

  const webPageJsonLd = getWebPageJsonLd(
    "Resort Activities & Nature Adventures | Aaranya Misty Valley Resort",
    "Discover captivating activities at Aaranya Misty Valley Resort in Wayanad: Hillside Infinity Swimming Pool, Kids Swimming Pool, Campfire with Music, Indoor Games, 4x4 Mountain Jeep Safari, Guided Plantation Walk, and Private Digital Glass Bridge.",
    "/activities"
  );

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Main Interactive Activities Component */}
      <ActivitiesClientView />
    </main>
  );
}
