import React, { Suspense } from "react";
import type { Metadata } from "next";
import RoomsClientView from "./RoomsClientView";
import { SITE_URL, getBreadcrumbJsonLd, getWebPageJsonLd } from "@/config/seo";
import { resortConfig } from "@/config/resort";

export const metadata: Metadata = {
  title: "Luxury Rooms & Suites in Wayanad | Aaranya Misty Valley Resort",
  description:
    "Explore luxury accommodations at Aaranya Misty Valley Resort in Wayanad: Deluxe Rooms, Premium Suites with private balconies, and spacious Family Rooms with valley views.",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: "Luxury Rooms & Suites | Aaranya Misty Valley Resort Wayanad",
    description:
      "Thoughtfully designed rooms blending modern comforts with pristine misty valley views at Aaranya.",
    url: `${SITE_URL}/rooms`,
    siteName: resortConfig.name,
    images: [
      {
        url: "/images/rooms/aaranya-canopy-bedroom-suite-2k.webp",
        width: 1920,
        height: 1080,
        alt: "Deluxe Bedroom Suite at Aaranya Misty Valley Resort",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accommodations | Aaranya Misty Valley Resort Wayanad",
    description:
      "Deluxe Rooms, Premium Suites with private balconies, and cathedral-ceiling Family Rooms.",
    images: ["/images/rooms/aaranya-canopy-bedroom-suite-2k.webp"],
  },
};

export default function RoomsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Rooms & Suites", url: "/rooms" },
  ]);
  const webPageJsonLd = getWebPageJsonLd(
    "Luxury Rooms & Suites in Wayanad | Aaranya Misty Valley Resort",
    "Explore luxury accommodations at Aaranya Misty Valley Resort in Wayanad: Deluxe Rooms, Premium Suites with private balconies, and spacious Family Rooms with valley views.",
    "/rooms"
  );

  return (
    <div className="pb-20 bg-[#FAF8F5]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen pt-32 text-center text-[#10251C]">Loading accommodations...</div>}>
        <RoomsClientView />
      </Suspense>
    </div>
  );
}
