import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { LuTrees, LuMountain, LuLeaf, LuHeartHandshake } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { resortConfig } from "@/config/resort";

export const metadata: Metadata = {
  title: "About Us | A Retreat in Nature | Aaranya Misty Valley",
  description:
    "Aaranya is a serene forest retreat surrounded by lush greenery, misty hills, and tranquil landscapes. Experience the perfect blend of nature, comfort, and warm hospitality.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#F7F3EC]">
      {/* 1. Page Hero Header Matching Reference Image (Bottom Left Panel) */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & Our Story CTA */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block">
                ABOUT AARANYA
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#092C24] font-normal leading-[1.12] tracking-tight">
                A Retreat<br />
                in Nature
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#77766E] leading-relaxed font-light">
                Aaranya is a serene forest retreat surrounded by lush greenery, misty hills, and tranquil landscapes. Experience the perfect blend of nature, comfort, and warm hospitality.
              </p>
              <div className="pt-2">
                <a
                  href="#story-details"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Our Story</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Genuine Resort Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-[#E6DED1]">
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
            <div className="relative aspect-[4/5] sm:aspect-[4/4.8] rounded-2xl overflow-hidden shadow-sm border border-[#E6DED1]">
              <Image
                src="/images/pages/aaranya-villas-walkway-2k.webp"
                alt="Aaranya luxury villas amidst lush nature and paved garden walkway"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#061F1A] text-white p-5 rounded-2xl shadow-xl border border-[#D6AD68]/30 max-w-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#D6AD68] font-semibold block mb-1">
                Quiet Luxury
              </span>
              <p className="font-serif-luxury text-base text-[#FAF8F5]">
                Architecture deliberately shaped to frame the hillside canopy and mountain mist.
              </p>
            </div>
          </div>

          {/* Right Column: Living in Harmony with Nature */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
              Our Vision
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#092C24] font-normal leading-[1.15]">
              Living in Harmony with Nature
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#77766E] leading-relaxed font-light">
              Named after the ancient Sanskrit word for forest, <strong className="font-medium text-[#092C24]">Aaranya</strong> represents an intimate bond with the untamed natural world. Situated amidst misty slopes and lush greenery, the resort was envisioned as an antidote to urban fatigue.
            </p>

            <p className="mt-3.5 text-sm sm:text-base text-[#77766E] leading-relaxed font-light">
              Rather than overwhelming the terrain, our architecture embraces the contours of the hill. Multi-tiered pavilions, extensive glass fronts, and natural wooden textures allow the landscape to remain the primary focus of your stay.
            </p>

            <div className="mt-8 space-y-3.5 border-t border-[#E6DED1] pt-6">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#092C24]/10 text-[#092C24] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#092C24]">
                    Clean Mountain Air & Cool Microclimate
                  </h4>
                  <p className="text-xs text-[#77766E] mt-0.5 font-light">
                    Positioned at an elevation where crisp breezes and morning mist are daily companions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#092C24]/10 text-[#092C24] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#092C24]">
                    Preservation of Forest Canopy
                  </h4>
                  <p className="text-xs text-[#77766E] mt-0.5 font-light">
                    Surrounding native trees and biodiversity have been respected throughout development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#092C24]/10 text-[#092C24] flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#092C24]">
                    Authentic Host Hospitality
                  </h4>
                  <p className="text-xs text-[#77766E] mt-0.5 font-light">
                    Attentive, personal service committed to guest comfort, discretion, and responsiveness.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Resort Ambience Showcase */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#061F1A] text-white border border-[#D6AD68]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D6AD68] block mb-2">
                Resort Ambience
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                Feel the Calm of the Mist
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-3 leading-relaxed font-light">
                Step outside to hear birdsong, watch clouds weave between high branches, and enjoy the cool, quiet mountain climate. Here, every moment is an invitation to slow down.
              </p>

              <div className="mt-6">
                <a
                  href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello Aaranya Resort, I would like to enquire about visiting and staying.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] transition-all shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#061F1A]" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black">
                <Image
                  src="/images/pages/aaranya-sea-of-clouds-2k.webp"
                  alt="Dramatic rolling sea of clouds and mountain forest at Aaranya Misty Valley Resort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-[center_55%]"
                />
              </div>
              <p className="text-[11px] text-[#FAF8F5]/60 text-center mt-2.5 font-light">
                Panoramic morning view of the rolling sea of clouds captured at Aaranya Misty Valley Resort.
              </p>
            </div>

          </div>
        </div>

        {/* Four Pillars of Aaranya */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
              Our Pillars
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#092C24]">
              The Values That Guide Us
            </h2>
            <p className="text-sm text-[#77766E] mt-2 font-light">
              Our commitment to keeping Aaranya an authentic nature retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded-2xl border border-[#E6DED1] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center mb-4">
                <LuTrees className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#092C24] mb-2">
                Pure Nature
              </h4>
              <p className="text-xs text-[#77766E] leading-relaxed font-light">
                Total immersion in forest scenery, natural flora, and cool highland atmosphere.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E6DED1] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center mb-4">
                <LuMountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#092C24] mb-2">
                Thoughtful Spaces
              </h4>
              <p className="text-xs text-[#77766E] leading-relaxed font-light">
                Architectural design with generous glass, solid wood, and spacious viewing balconies.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E6DED1] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center mb-4">
                <LuLeaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#092C24] mb-2">
                Eco Sensibility
              </h4>
              <p className="text-xs text-[#77766E] leading-relaxed font-light">
                Minimal disturbance to surrounding forest life, supporting clean and quiet living.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E6DED1] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center mb-4">
                <LuHeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#092C24] mb-2">
                Warm Care
              </h4>
              <p className="text-xs text-[#77766E] leading-relaxed font-light">
                Hospitality that values genuine guest comfort, discretion, and responsiveness.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
