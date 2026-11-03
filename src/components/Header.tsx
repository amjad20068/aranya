"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiCalendar, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { resortConfig, buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";
import BookingModal from "@/components/BookingModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to open-booking-modal global event and #booking hash
  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{ room?: string }>;
      if (customEvent.detail?.room) {
        setSelectedRoom(customEvent.detail.room);
      }
      setBookingModalOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpenBooking);

    if (typeof window !== "undefined" && window.location.hash === "#booking") {
      setBookingModalOpen(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === "#booking") {
        setBookingModalOpen(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpenBooking);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  const hasInstagram = Boolean(resortConfig.social.instagram && resortConfig.social.instagram.trim() !== "");
  const hasFacebook = Boolean(resortConfig.social.facebook && resortConfig.social.facebook.trim() !== "");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#061F1A]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#D6AD68]/20"
            : "bg-gradient-to-b from-[#061F1A]/90 via-[#061F1A]/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Brand Logo matching Reference Image */}
          <NextLink
            href="/"
            className="relative h-10 sm:h-11 md:h-12 w-40 sm:w-48 md:w-56 flex items-center group focus:outline-none focus:ring-2 focus:ring-[#D6AD68]/50 rounded-lg p-0.5 shrink-0"
            aria-label="AARANYA Misty Valley Resort - Home"
          >
            <Image
              src="/images/logo/aaranya-navbar-logo.webp"
              alt="AARANYA Misty Valley Resort Official Logo"
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm tracking-wide font-normal transition-colors duration-300 relative py-1 focus:outline-none focus:text-[#E8BD78] ${
                    isActive ? "text-[#E8BD78] font-medium" : "text-[#FAF8F5]/90 hover:text-[#E8BD78]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6AD68] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NextLink>
              );
            })}
          </nav>

          {/* Desktop Socials & Book Your Stay CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 text-white/80">
              {hasInstagram && (
                <a
                  href={resortConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8BD78] transition-colors p-1"
                  aria-label="Visit Aaranya Instagram Profile"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              )}
              {hasFacebook && (
                <a
                  href={resortConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8BD78] transition-colors p-1"
                  aria-label="Visit Aaranya Facebook Page"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="w-[1px] h-4 bg-white/20" />

            {/* Book Your Stay CTA Button */}
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D6AD68] cursor-pointer"
              aria-label="Book Your Stay"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#061F1A]" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold text-[#061F1A] bg-[#E8BD78] hover:bg-[#F0CA8A] flex items-center gap-1 sm:gap-1.5 shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer"
              aria-label="Book Your Stay"
            >
              <FiCalendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 sm:p-2 rounded-lg text-[#FAF8F5] hover:text-[#E8BD78] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6AD68] shrink-0 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              data-lenis-prevent
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#061F1A] border-l border-[#D6AD68]/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header in drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="relative h-10 w-44 flex-shrink-0">
                    <Image
                      src="/images/logo/aaranya-navbar-logo.webp"
                      alt="AARANYA Official Logo"
                      fill
                      sizes="176px"
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-col gap-3" aria-label="Mobile Navigation">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <NextLink
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm tracking-wide transition-all ${
                          isActive
                            ? "bg-white/10 text-[#E8BD78] font-medium pl-4"
                            : "text-[#FAF8F5]/85 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        <FiArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "text-[#D6AD68] translate-x-1" : "text-white/30"
                          }`}
                        />
                      </NextLink>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Actions in Drawer */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBookingModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <FiCalendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>

                <a
                  href={buildWhatsAppUrl("Hello AARANYA Resort, I would like to enquire about a stay.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    openDirectWhatsApp("Hello AARANYA Resort, I would like to enquire about a stay.");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-white border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Social Icons inside Mobile Drawer */}
                <div className="flex items-center justify-center gap-6 pt-2 text-[#FAF8F5]/70">
                  {hasInstagram && (
                    <a
                      href={resortConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-[#D6AD68] transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  )}
                  {hasFacebook && (
                    <a
                      href={resortConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-[#D6AD68] transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoom={selectedRoom}
      />
    </>
  );
}
