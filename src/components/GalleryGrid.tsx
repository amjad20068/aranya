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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 md:mb-8">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-[#E8BD78] cursor-pointer ${
                  isSelected
                    ? "bg-[#E8BD78] text-[#071F1A] font-bold shadow-md"
                    : isDark
                    ? "bg-white/10 hover:bg-white/20 text-[#FAF8F5]/85 hover:text-white border border-white/10 hover:border-[#E8BD78]/40"
                    : "bg-white/80 hover:bg-white text-[#343B35] border border-black/5 hover:border-[#E8BD78]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Images: 4 Columns matching Reference Image */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5"
      >
        <AnimatePresence>
          {displayImages.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-black/5 hover:border-[#C9A568]/50"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay & Hover Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251C]/90 via-[#10251C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#E0C087] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif-luxury text-base sm:text-lg text-white font-medium">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#E0C087] mt-2">
                  <FiMaximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand view</span>
                </div>
              </div>

              {/* Top View Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiEye className="w-4 h-4 text-[#C9A568]" />
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
