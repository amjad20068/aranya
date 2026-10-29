import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { LuTrees, LuMountain, LuLeaf, LuHeartHandshake } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import { resortConfig } from "@/config/resort";

import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us | A Retreat in Nature | Aaranya Misty Valley",
  description:
    "Aaranya is a serene forest retreat surrounded by lush greenery, misty hills, and tranquil landscapes. Experience the perfect blend of nature, comfort, and warm hospitality.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#F5F1E8]">
      {/* 1. Page Hero Header Matching Image 3 Reference (Bottom Left Panel) */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & Our Story CTA */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block">
                ABOUT AARANYA
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#10251C] font-normal leading-[1.12] tracking-tight">
                A Retreat<br />
                in Nature
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#343B35]/85 leading-relaxed font-light">
                Aaranya is a serene forest retreat surrounded by lush greenery, misty hills, and tranquil landscapes. Experience the perfect blend of nature, comfort, and warm hospitality.
              </p>
              <div className="pt-2">
                <a
                  href="#story-details"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#071F1A] bg-[#E8BD78] hover:bg-[#DCA65E] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Our Story</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Genuine Resort Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A568]/30">
                <Image
                  src="/images/pages/about-resort.webp"
                  alt="Aaranya Misty Valley Resort nestled amidst lush greenery"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Expanded Story & Vision Section */}
      <div id="story-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Property Architecture Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A568]/30">
              <Image
                src="/images/gallery/aaranya-architecture-facade.webp"
                alt="Contemporary architecture at Aaranya"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#10251C] text-white p-5 rounded-2xl shadow-xl border border-[#C9A568]/40 max-w-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A568] font-semibold block mb-1">
                Quiet Luxury
              </span>
              <p className="font-serif-luxury text-base text-[#FAF8F5]">
                Architecture deliberately shaped to frame the hillside canopy and mountain mist.
              </p>
            </div>
          </div>

          {/* Right Column: Living in Harmony with Nature */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-2">
              Our Vision
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#10251C] font-normal leading-[1.15]">
              Living in Harmony with Nature
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#343B35]/85 leading-relaxed">
              Named after the ancient Sanskrit word for forest, <strong className="font-medium text-[#10251C]">Aaranya</strong> represents an intimate bond with the untamed natural world. Situated amidst misty slopes and lush greenery, the resort was envisioned as an antidote to urban fatigue.
            </p>

            <p className="mt-3.5 text-sm sm:text-base text-[#343B35]/85 leading-relaxed">
              Rather than overwhelming the terrain, our architecture embraces the contours of the hill. Multi-tiered pavilions, extensive glass fronts, and natural wooden textures allow the landscape to remain the primary focus of your stay.
            </p>

            <div className="mt-8 space-y-3.5 border-t border-black/10 pt-6">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#10251C]">
                    Clean Mountain Air & Cool Microclimate
                  </h4>
                  <p className="text-xs text-[#343B35]/75 mt-0.5">
                    Positioned at an elevation where crisp breezes and morning mist are daily companions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#10251C]">
                    Preservation of Forest Canopy
                  </h4>
                  <p className="text-xs text-[#343B35]/75 mt-0.5">
                    Surrounding native trees and biodiversity have been respected throughout development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#10251C]">
                    Authentic Host Hospitality
                  </h4>
                  <p className="text-xs text-[#343B35]/75 mt-0.5">
                    Attentive, personal service committed to guest comfort, privacy, and well-being.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Video / Visual Ambience Showcase */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#10251C] text-white border border-[#C9A568]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E0C087] block mb-2">
                Resort Ambience
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                Feel the Calm of the Mist
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-3 leading-relaxed">
                Step outside to hear birdsong, watch clouds weave between high branches, and enjoy the cool, quiet mountain climate. Here, every moment is an invitation to slow down.
              </p>

              <div className="mt-6">
                <a
                  href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello Aaranya Resort, I would like to enquire about visiting and staying.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#10251C] bg-[#C9A568] hover:bg-[#E0C087] transition-all shadow-md"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* High-Resolution Visual Ambience Showcase */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <Image
                  src="/images/gallery/aaranya-valley-mist-balcony.webp"
                  alt="Authentic misty forest canopy at Aaranya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#FAF8F5]/60 text-center mt-2.5 font-light">
                Panoramic morning view captured from the private viewing decks of Aaranya Misty Valley Resort.
              </p>
            </div>

          </div>
        </div>

        {/* Four Pillars of Aaranya */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Our Pillars"
            title="The Values That Guide Us"
            description="Our commitment to keeping Aaranya an authentic nature retreat."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center mb-4">
                <LuTrees className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-medium text-[#10251C] mb-2">
                Pure Nature
              </h4>
              <p className="text-xs text-[#343B35]/80 leading-relaxed">
                Total immersion in forest scenery, natural flora, and cool highland atmosphere.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center mb-4">
                <LuMountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-medium text-[#10251C] mb-2">
                Thoughtful Spaces
              </h4>
              <p className="text-xs text-[#343B35]/80 leading-relaxed">
                Architectural design with generous glass, solid wood, and spacious viewing balconies.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center mb-4">
                <LuLeaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-medium text-[#10251C] mb-2">
                Eco Sensibility
              </h4>
              <p className="text-xs text-[#343B35]/80 leading-relaxed">
                Minimal disturbance to surrounding forest life, supporting clean and quiet living.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#A68346] flex items-center justify-center mb-4">
                <LuHeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-medium text-[#10251C] mb-2">
                Warm Care
              </h4>
              <p className="text-xs text-[#343B35]/80 leading-relaxed">
                Hospitality that values genuine guest comfort, discretion, and responsiveness.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
