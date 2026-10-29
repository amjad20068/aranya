import React from "react";
import type { Metadata } from "next";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Aaranya Misty Valley",
  description:
    "We'd love to hear from you. For booking enquiries or any questions about Aaranya Misty Valley Resort, feel free to reach out directly via WhatsApp or call.",
};

export default function ContactPage() {
  const hasInstagram = Boolean(resortConfig.social.instagram && resortConfig.social.instagram.trim() !== "");
  const hasFacebook = Boolean(resortConfig.social.facebook && resortConfig.social.facebook.trim() !== "");

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F3EC]">
      {/* Main Contact Section Matching Reference Image (Bottom Right Panel) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Eyebrow, Heading, Subtitle & Direct Contact Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
                  CONTACT US
                </span>
                <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#092C24] font-normal tracking-tight leading-[1.12]">
                  Get in Touch
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-[#77766E] leading-relaxed font-light">
                  We&rsquo;d love to hear from you. For booking enquiries or any questions, feel free to reach out.
                </p>
              </div>

              {/* Direct Details List matching Reference */}
              <div className="space-y-4 pt-2">
                {/* Call Us */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#092C24]">
                  <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766E] block font-medium">
                      Call Us
                    </span>
                    <a
                      href={`tel:${resortConfig.phone}`}
                      className="font-medium text-[#092C24] hover:text-[#D6AD68] transition-colors"
                    >
                      {resortConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#092C24]">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766E] block font-medium">
                      WhatsApp
                    </span>
                    <a
                      href={buildWhatsAppUrl("Hello Aaranya Resort, I would like to get in touch.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#092C24] hover:text-[#25D366] transition-colors"
                    >
                      {resortConfig.displayWhatsapp}
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#092C24]">
                  <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766E] block font-medium">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${resortConfig.email}`}
                      className="font-medium text-[#092C24] hover:text-[#D6AD68] transition-colors"
                    >
                      {resortConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#092C24]">
                  <div className="w-10 h-10 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766E] block font-medium">
                      Location
                    </span>
                    <span className="font-medium text-[#092C24]">
                      {resortConfig.location.fullAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons matching Reference */}
              {(hasInstagram || hasFacebook) && (
                <div className="pt-3 flex items-center gap-3">
                  {hasInstagram && (
                    <a
                      href={resortConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-[#E6DED1] hover:border-[#D6AD68] hover:bg-[#D6AD68] hover:text-[#061F1A] text-[#092C24] flex items-center justify-center transition-all shadow-sm"
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
                      className="w-10 h-10 rounded-full bg-white border border-[#E6DED1] hover:border-[#D6AD68] hover:bg-[#D6AD68] hover:text-[#061F1A] text-[#092C24] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}

              {/* Timings Note */}
              <div className="pt-4 border-t border-[#E6DED1] flex items-center gap-6 text-xs text-[#77766E] font-light">
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4 text-[#D6AD68]" />
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
    </div>
  );
}
