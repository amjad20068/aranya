"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/92 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
          <span className="text-xs tracking-widest text-white/60 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6AD68] cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-[#D6AD68] hover:text-[#061F1A] text-white flex items-center justify-center transition-all border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#D6AD68] cursor-pointer"
          aria-label="Previous image"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-[#D6AD68] hover:text-[#061F1A] text-white flex items-center justify-center transition-all border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#D6AD68] cursor-pointer"
          aria-label="Next image"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <div
          className="relative z-40 max-w-5xl max-h-[85vh] w-full px-4 sm:px-8 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-[#D6AD68]/20 bg-black/50"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Caption & Category */}
          <div className="mt-4 text-center max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D6AD68] bg-[#061F1A] px-3 py-1 rounded-full border border-[#D6AD68]/30 inline-block mb-1.5">
              {currentImage.category}
            </span>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-normal text-white">
              {currentImage.title}
            </h3>
            <p className="text-xs text-white/70 mt-1 max-w-lg mx-auto font-light">
              {currentImage.alt}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
