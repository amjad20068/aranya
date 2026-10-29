"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiArrowRight } from "react-icons/fi";
import { resortConfig } from "@/config/resort";
import { roomsData } from "@/data/rooms";

export default function Footer() {
  const currentYear = 2026;
  const hasInstagram = Boolean(resortConfig.social.instagram && resortConfig.social.instagram.trim() !== "");
  const hasFacebook = Boolean(resortConfig.social.facebook && resortConfig.social.facebook.trim() !== "");

  return (
    <footer className="bg-[#10251C] text-[#FAF8F5] relative overflow-hidden border-t border-[#C9A568]/20">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A568]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#26382E]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="relative h-14 w-56">
              <Image
                src="/images/logo/aaranya-navbar-logo.webp"
                alt="AARANYA Official Logo"
                fill
                sizes="224px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-[#FAF8F5]/75 leading-relaxed pt-2">
              Discover a peaceful forest retreat nestled amidst misty hills, evergreen canopies, and authentic luxury hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {hasInstagram && (
                <a
                  href={resortConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#10251C] hover:bg-[#C9A568] hover:border-[#C9A568] transition-all duration-300"
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
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#10251C] hover:bg-[#C9A568] hover:border-[#C9A568] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              )}
              <a
                href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello AARANYA, I would like to enquire about staying at your resort.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif-luxury text-lg text-[#E0C087] tracking-wider mb-5 flex items-center gap-2">
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>Rooms & Suites</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>Resort Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>About Aaranya</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]/40 group-hover:bg-[#C9A568] transition-colors" />
                  <span>Contact & Enquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Accommodations */}
          <div>
            <h4 className="font-serif-luxury text-lg text-[#E0C087] tracking-wider mb-5">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {roomsData.slice(0, 4).map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms?select=${room.slug}`}
                    className="text-[#FAF8F5]/75 hover:text-[#E0C087] transition-colors flex items-center justify-between group"
                  >
                    <span>{room.name}</span>
                    <FiArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C9A568] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A568] hover:text-[#FAF8F5] transition-colors font-medium"
                >
                  <span>Explore all room types</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & WhatsApp Booking */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-lg text-[#E0C087] tracking-wider mb-5">
              Direct Contact
            </h4>

            <div className="space-y-3 text-sm text-[#FAF8F5]/80">
              <a
                href={`https://wa.me/${resortConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#25D366] transition-colors group"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/50">WhatsApp Booking</div>
                  <div className="font-medium text-white">{resortConfig.displayWhatsapp}</div>
                </div>
              </a>

              <a
                href={`tel:${resortConfig.phone}`}
                className="flex items-start gap-3 hover:text-[#E0C087] transition-colors group"
              >
                <FiPhone className="w-4 h-4 text-[#C9A568] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/50">Phone Call</div>
                  <div className="font-medium text-white">{resortConfig.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${resortConfig.email}`}
                className="flex items-start gap-3 hover:text-[#E0C087] transition-colors group"
              >
                <FiMail className="w-4 h-4 text-[#C9A568] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/50">Email Enquiry</div>
                  <div className="text-white text-xs break-all">{resortConfig.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <FiMapPin className="w-4 h-4 text-[#C9A568] mt-0.5 shrink-0" />
                <div className="text-xs leading-relaxed">
                  {resortConfig.location.fullAddress}
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="pt-2">
              <Link
                href="/#booking"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold uppercase tracking-wider text-[#10251C] bg-[#C9A568] hover:bg-[#E0C087] transition-all shadow-md"
              >
                <FiCalendar className="w-3.5 h-3.5" />
                <span>Reserve via WhatsApp</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Editorial */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 gap-4">
          <p>© {currentYear} {resortConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#C9A568]/70 tracking-widest uppercase text-[10px]">
              Quiet Luxury in Nature
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Check-in: {resortConfig.timings.checkIn} | Check-out: {resortConfig.timings.checkOut}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
