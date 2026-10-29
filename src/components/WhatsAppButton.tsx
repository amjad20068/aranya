"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = `Hello ${resortConfig.name}, I would like to enquire about a stay at your resort.`;
  const whatsappUrl = buildWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block bg-[#10251C] text-white text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-[#C9A568]/40 animate-fade-in whitespace-nowrap">
          <span className="font-medium text-[#E0C087]">Enquire via WhatsApp</span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Contact Aaranya Misty Valley Resort on WhatsApp"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
        
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
