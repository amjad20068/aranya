"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiX, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import BookingForm from "@/components/BookingForm";
import { resortConfig, buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = "",
}: BookingModalProps) {
  // Prevent body scrolling and pause Lenis while modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "unset";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "unset";
      lenis?.start();
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
          aria-modal="true"
          role="dialog"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            data-lenis-prevent
            className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto overscroll-contain bg-[#061F1A] border border-[#D6AD68]/35 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 text-white my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6AD68]"
              aria-label="Close booking window"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10 mb-4 sm:mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-[1px] bg-[#E8BD78]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BD78]">
                  Direct Reservation
                </span>
              </div>
              <h2
                id="booking-modal-title"
                className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal text-white"
              >
                Book Your Stay
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-1 font-light leading-relaxed">
                Check real-time availability and receive instant quote & confirmation directly on WhatsApp.
              </p>
            </div>

            {/* The Booking Form */}
            <div className="w-full">
              <BookingForm
                variant="card"
                hideHeader={true}
                initialRoom={initialRoom}
                onSuccess={() => {
                  setTimeout(() => {
                    onClose();
                  }, 1800);
                }}
              />
            </div>

            {/* Quick Direct WhatsApp Link for guests who prefer a direct message */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF8F5]/70">
              <span>Prefer instant assistance without filling form?</span>
              <a
                href={buildWhatsAppUrl("Hello Aaranya Resort, I would like to check room availability for an upcoming stay.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  openDirectWhatsApp("Hello Aaranya Resort, I would like to check room availability for an upcoming stay.");
                }}
                className="inline-flex items-center gap-1.5 text-[#E8BD78] hover:text-white font-semibold transition-colors underline underline-offset-4"
              >
                <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

