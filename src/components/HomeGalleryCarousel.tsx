"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiMaximize2 } from "react-icons/fi";
import { motion } from "motion/react";
import Lightbox from "./Lightbox";
import { galleryData, GalleryItem } from "@/data/gallery";

const homeGalleryItems: GalleryItem[] = galleryData;

export default function HomeGalleryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const handleCardClick = (idx: number) => {
    setActiveImageIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left Column: Eyebrow, Heading, Description & Controls matching Reference Image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-center space-y-5"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D6AD68] block mb-2">
            GALLERY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.12]">
            Moments at Aaranya
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed font-light">
          Explore the beauty of our property, rooms, and the stunning natural surroundings through our gallery.
        </p>

        {/* Navigation Controls: Circular arrows matching Reference Image */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full border border-white/20 hover:border-[#D6AD68] text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all focus:outline-none focus:ring-1 focus:ring-[#D6AD68] cursor-pointer"
            aria-label="Previous gallery slide"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full border border-white/20 hover:border-[#D6AD68] text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all focus:outline-none focus:ring-1 focus:ring-[#D6AD68] cursor-pointer"
            aria-label="Next gallery slide"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D6AD68] hover:text-[#E8BD78] transition-colors ml-3"
          >
            <span>Full Gallery</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

      {/* Right Column: Horizontal Scrollable Photography Strip */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-8 xl:col-span-8.5 min-w-0 overflow-hidden"
      >
        <div
          ref={scrollContainerRef}
          data-lenis-prevent
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {homeGalleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(idx)}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-[#D6AD68]/60 transition-all duration-500 cursor-pointer snap-start bg-[#092C24]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Gradient & Hover Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061F1A]/90 via-[#061F1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-wider text-[#D6AD68] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif-luxury text-base text-white font-medium">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#D6AD68] mt-2">
                  <FiMaximize2 className="w-3 h-3" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox for Home Gallery */}
      <Lightbox
        images={homeGalleryItems}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </div>
  );
}
