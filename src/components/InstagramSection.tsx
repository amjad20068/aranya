"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import { resortConfig } from "@/config/resort";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  location: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/images/gallery/aaranya-resort-day.webp",
    caption: "Waking up enveloped by lush rainforest canopies and fresh morning air.",
    location: "Aaranya Villa",
  },
  {
    id: "ig-2",
    image: "/images/gallery/aaranya-valley-mist-balcony.webp",
    caption: "Front row seat to floating mountain mist and tranquil forest silence.",
    location: "Private Balcony",
  },
  {
    id: "ig-3",
    image: "/images/gallery/aaranya-hilltop-sunset.webp",
    caption: "Golden hour painting the Western Ghats ridges in warm amber light.",
    location: "Observation Ridge",
  },
  {
    id: "ig-4",
    image: "/images/gallery/aaranya-bedroom-suite.webp",
    caption: "Handcrafted timber warmth and floor-to-ceiling glass nature framing.",
    location: "Luxury Suite",
  },
  {
    id: "ig-5",
    image: "/images/gallery/aaranya-tea-estate-slope.webp",
    caption: "Peaceful morning strolls along adjoining tea garden trails.",
    location: "Estate Trails",
  },
  {
    id: "ig-6",
    image: "/images/gallery/aaranya-dining-terrace.webp",
    caption: "Fresh plantation tea and breakfast served against panoramic vistas.",
    location: "Dining Deck",
  },
];

export default function InstagramSection() {
  const instagramUrl = resortConfig.social.instagram || "https://www.instagram.com/";

  return (
    <section className="py-16 md:py-24 bg-[#092C24] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaInstagram className="w-4 h-4 text-[#D6AD68]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D6AD68]">
                INSTAGRAM @AARANYA_MISTYVALLEY
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.12]">
              Moments Shared from the Mist
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/75 mt-2.5 max-w-xl font-light leading-relaxed">
              Tag <span className="text-[#E8BD78] font-medium">@aaranyaresort</span> or use <span className="text-[#E8BD78] font-medium">#AaranyaMoments</span> on your journey through the valley.
            </p>
          </div>

          <div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FaInstagram className="w-4 h-4 text-[#061F1A]" />
              <span>Follow on Instagram</span>
              <FiArrowUpRight className="w-4 h-4 text-[#061F1A]" />
            </a>
          </div>
        </div>

        {/* 6-Column Grid of Curated Posts with Smooth Staggered Reveal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#061F1A] border border-white/10 hover:border-[#D6AD68]/60 transition-all duration-500 shadow-sm block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Refined Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-[#061F1A]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#D6AD68]">
                    <FaInstagram className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D6AD68] font-medium">
                    {post.location}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] text-[#FAF8F5]/90 line-clamp-3 leading-snug font-light">
                    {post.caption}
                  </p>
                  <span className="text-[10px] text-[#E8BD78] font-medium block mt-1">
                    View on Instagram →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
