"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiX,
  FiUsers,
  FiMaximize,
  FiEye,
  FiCalendar,
} from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { Room } from "@/data/rooms";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import BookingForm from "./BookingForm";

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomDetailModal({
  room,
  isOpen,
  onClose,
}: RoomDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showBookingInline, setShowBookingInline] = useState(false);

  if (!room) return null;

  const images = room.galleryImages.length > 0 ? room.galleryImages : [room.image];

  const handleDirectWhatsApp = () => {
    const msg = `Hello ${resortConfig.name},

I would like to enquire about booking the ${room.name}.
Room: ${room.name} (${room.capacity.bed})
Guest capacity: ${room.capacity.adults} Adults, ${room.capacity.children} Children.

Please let me know availability and stay details.

Thank you.`;

    const url = buildWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#343B35] rounded-3xl shadow-2xl overflow-hidden border border-[#C9A568]/30 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#10251C]/70 hover:bg-[#10251C] text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close room details"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
                {/* Left: Room Media Gallery */}
                <div className="lg:col-span-7 bg-[#10251C] p-6 flex flex-col justify-between">
                  <div>
                    {/* Main Active Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-[#C9A568]/20 bg-black/40">
                      <Image
                        src={images[activeImageIndex] || room.image}
                        alt={`${room.name} photograph`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#10251C]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#E0C087] border border-[#C9A568]/30">
                        {room.view}
                      </div>
                    </div>

                    {/* Image Thumbnail Strip */}
                    {images.length > 1 && (
                      <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                        {images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                              activeImageIndex === idx
                                ? "border-[#C9A568] scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${room.name} thumbnail ${idx + 1}`}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Room Quick Specs */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-white/90 text-xs">
                    <div className="flex items-center gap-2">
                      <FiUsers className="w-4 h-4 text-[#C9A568]" />
                      <span>{room.capacity.adults} Adults, {room.capacity.children} Child</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMaximize className="w-4 h-4 text-[#C9A568]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiEye className="w-4 h-4 text-[#C9A568]" />
                      <span>{room.capacity.bed}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Room Information & WhatsApp Enquiry */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A68346]">
                      Accommodation Details
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#10251C] mt-1">
                      {room.name}
                    </h3>
                    <p className="font-serif-luxury italic text-sm text-[#A68346] mb-3">
                      {room.subtitle}
                    </p>

                    <p className="text-sm text-[#343B35]/85 leading-relaxed mb-5">
                      {room.detailedDescription}
                    </p>

                    {/* Confirmed Amenities List */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#10251C] mb-3">
                        Included Room Amenities
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-[#343B35]">
                        {room.amenities.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#10251C]/10 text-[#10251C] flex items-center justify-center shrink-0 text-[10px]">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Room Highlights */}
                    <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#C9A568]/30 mb-6 text-xs text-[#343B35]">
                      <span className="font-semibold text-[#10251C] block mb-1">
                        Resort Highlight
                      </span>
                      <span>Quiet hillside orientation with fresh mountain mist and peaceful seclusion.</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-4 border-t border-black/10">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5C] shadow-md hover:shadow-lg transition-all"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>Enquire on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setShowBookingInline(!showBookingInline)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#10251C] border border-[#10251C]/30 hover:bg-[#10251C]/5 transition-all"
                    >
                      <FiCalendar className="w-4 h-4 text-[#A68346]" />
                      <span>{showBookingInline ? "Hide Date Form" : "Custom Dates Enquiry"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Inline Form if requested */}
              {showBookingInline && (
                <div className="p-6 bg-[#10251C] text-white border-t border-[#C9A568]/30">
                  <BookingForm
                    variant="card"
                    initialRoom={room.slug}
                    onSuccess={() => setShowBookingInline(false)}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
