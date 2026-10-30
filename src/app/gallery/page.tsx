import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import GalleryGrid from "@/components/GalleryGrid";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import { galleryData } from "@/data/gallery";
import {
  SITE_URL,
  getBreadcrumbJsonLd,
  getGalleryJsonLd,
  getWebPageJsonLd,
} from "@/config/seo";

export const metadata: Metadata = {
  title: "Photo Gallery & Scenic Views | Aaranya Misty Valley Resort Wayanad",
  description:
    "Browse authentic photographs of Aaranya Misty Valley Resort in Wayanad: rolling sea of clouds, hillside villas, luxury bedrooms, infinity pool, and tea garden trails.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Resort Photography & Scenic Views | Aaranya Misty Valley Resort",
    description:
      "Explore high-resolution photographs of our luxury hillside architecture, valley mist views, and tranquil resort grounds in Wayanad.",
    url: `${SITE_URL}/gallery`,
    siteName: resortConfig.name,
    images: [
      {
        url: "/images/gallery/aaranya-sea-of-clouds-valley-2k.webp",
        width: 1920,
        height: 1080,
        alt: "Rolling sea of clouds at Aaranya Misty Valley Resort",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Aaranya Misty Valley Resort Wayanad",
    description:
      "Authentic photos of misty valleys, four-poster suites, and hillside pool views.",
    images: ["/images/gallery/aaranya-sea-of-clouds-valley-2k.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);
  const webPageJsonLd = getWebPageJsonLd(
    "Photo Gallery & Scenic Views | Aaranya Misty Valley Resort Wayanad",
    "Browse authentic photographs of Aaranya Misty Valley Resort in Wayanad: rolling sea of clouds, hillside villas, luxury bedrooms, infinity pool, and tea garden trails.",
    "/gallery"
  );
  const galleryJsonLd = getGalleryJsonLd(galleryData);

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#061F1A] text-white min-h-screen">
      {/* Structured Data for SEO & Image Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      {/* Header matching Reference Image (Middle Right Panel) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-10">
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D6AD68] block mb-2">
          GALLERY
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
          Moments at Aaranya
        </h1>
        <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed font-light">
          Explore the beauty of our property, rooms, and the stunning natural surroundings through our gallery.
        </p>
      </div>

      {/* Interactive Gallery with Category Filters & Lightbox on Dark Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid showFilters={true} theme="dark" />

        {/* Bottom Booking Invitation */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#092C24] text-white text-center border border-[#D6AD68]/20 relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D6AD68]">
              Experience It in Person
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white mt-2">
              Ready to Escape into Nature?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-3 leading-relaxed font-light">
              We look forward to welcoming you to the mist and tranquility of Aaranya. Reach out on WhatsApp to check room availability.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsAppUrl("Hello Aaranya Resort, I loved your gallery and would like to enquire about staying.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] transition-all shadow-md font-sans"
              >
                <FaWhatsapp className="w-4 h-4 text-[#061F1A]" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                <span>View Accommodations</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
