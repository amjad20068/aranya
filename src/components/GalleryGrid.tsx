"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMaximize2, FiEye } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { galleryData, galleryCategories, GalleryCategory, GalleryItem } from "@/data/gallery";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  initialCategory?: GalleryCategory;
  limit?: number;
  showFilters?: boolean;
  theme?: "light" | "dark";
}

export default function GalleryGrid({
  initialCategory = "All",
  limit,
  showFilters = true,
  theme = "dark",
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredImages = galleryData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = displayImages.findIndex((i) => i.id === item.id);
    setActiveImageIndex(originalIndex !== -1 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  const isDark = theme === "dark";

  return (
    <div>
      {/* Category Filter Pills matching Reference Image */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 md:mb-10">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-[#D6AD68] cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] text-[#061F1A] font-semibold shadow-sm"
                    : isDark
                    ? "bg-white/10 hover:bg-white/15 text-[#FAF8F5]/85 hover:text-white border border-white/10 hover:border-[#D6AD68]/40"
                    : "bg-white/80 hover:bg-white text-[#20231F] border border-[#E6DED1] hover:border-[#D6AD68]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Images: Editorial layout matching Reference Image */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5"
      >
        <AnimatePresence>
          {displayImages.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#092C24] shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer border border-white/10 hover:border-[#D6AD68]/50"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay & Hover Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061F1A]/90 via-[#061F1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#D6AD68] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif-luxury text-sm sm:text-base text-white font-medium">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#D6AD68] mt-1.5">
                  <FiMaximize2 className="w-3.5 h-3.5" />
                  <span>Click to view photo</span>
                </div>
              </div>

              {/* Top View Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiEye className="w-4 h-4 text-[#D6AD68]" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Component */}
      <Lightbox
        images={displayImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </div>
  );
}
