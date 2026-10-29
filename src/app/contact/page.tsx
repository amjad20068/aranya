import React from "react";
import type { Metadata } from "next";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import BookingForm from "@/components/BookingForm";
import { resortConfig } from "@/config/resort";

import ContactEnquiryForm from "@/components/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Aaranya Misty Valley",
  description:
    "We'd love to hear from you. For booking enquiries or any questions about Aaranya Misty Valley Resort, feel free to reach out directly via WhatsApp or call.",
};

export default function ContactPage() {
  const hasInstagram = Boolean(resortConfig.social.instagram && resortConfig.social.instagram.trim() !== "");
  const hasFacebook = Boolean(resortConfig.social.facebook && resortConfig.social.facebook.trim() !== "");

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F5F1E8]">
      {/* Main Contact Section Matching Image 3 Reference (Bottom Right Panel) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Eyebrow, Heading, Subtitle & Direct Contact Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-2">
                  CONTACT US
                </span>
                <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#10251C] font-normal tracking-tight leading-[1.12]">
                  Get in Touch
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-[#343B35]/85 leading-relaxed font-light">
                  We&rsquo;d love to hear from you. For booking enquiries or any questions, feel free to reach out.
                </p>
              </div>

              {/* Direct Details List matching Reference */}
              <div className="space-y-4 pt-2">
                {/* Call Us */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#10251C]">
                  <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#10251C] flex items-center justify-center shrink-0">
                    <FiPhone className="w-4 h-4 text-[#A68346]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#343B35]/70 block font-medium">
                      Call Us
                    </span>
                    <a
                      href={`tel:${resortConfig.phone}`}
                      className="font-medium text-[#10251C] hover:text-[#A68346] transition-colors"
                    >
                      {resortConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#10251C]">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#343B35]/70 block font-medium">
                      WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello Aaranya Resort, I would like to get in touch.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#10251C] hover:text-[#25D366] transition-colors"
                    >
                      {resortConfig.displayWhatsapp}
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#10251C]">
                  <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#10251C] flex items-center justify-center shrink-0">
                    <FiMail className="w-4 h-4 text-[#A68346]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#343B35]/70 block font-medium">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${resortConfig.email}`}
                      className="font-medium text-[#10251C] hover:text-[#A68346] transition-colors"
                    >
                      {resortConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#10251C]">
                  <div className="w-10 h-10 rounded-full bg-[#10251C]/10 text-[#10251C] flex items-center justify-center shrink-0">
                    <FiMapPin className="w-4 h-4 text-[#A68346]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#343B35]/70 block font-medium">
                      Location
                    </span>
                    <span className="font-medium text-[#10251C]">
                      {resortConfig.location.fullAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons matching Reference */}
              {(hasInstagram || hasFacebook) && (
                <div className="pt-4 flex items-center gap-3">
                  {hasInstagram && (
                    <a
                      href={resortConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-black/10 hover:border-[#C9A568] hover:bg-[#C9A568] hover:text-[#10251C] text-[#10251C] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  )}
                  {hasFacebook && (
                    <a
                      href={resortConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-black/10 hover:border-[#C9A568] hover:bg-[#C9A568] hover:text-[#10251C] text-[#10251C] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}

              {/* Timings Note */}
              <div className="pt-4 border-t border-black/10 flex items-center gap-6 text-xs text-[#343B35]/80">
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4 text-[#A68346]" />
                  <span>Check-in: {resortConfig.timings.checkIn}</span>
                </div>
                <div>
                  <span>Check-out: {resortConfig.timings.checkOut}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form matching Reference Image */}
            <div className="lg:col-span-6">
              <ContactEnquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* Booking Form for Date-Specific Room Enquiries */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10251C] text-white rounded-3xl p-8 sm:p-12 border border-[#C9A568]/30">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E0C087]">
              Need Specific Dates & Rooms?
            </span>
            <h3 className="font-serif-luxury text-3xl font-normal text-white mt-1">
              Check Stay Availability
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-2">
              Select your arrival dates and preferred room type to receive direct confirmation from our reservation desk.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BookingForm variant="card" />
          </div>
        </div>
      </section>
    </div>
  );
}
