"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiCalendar, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { resortConfig, buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#061F1A]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D6AD68]/20"
            : "bg-[#061F1A]/85 backdrop-blur-md py-3.5 md:py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo matching Reference Image */}
          <NextLink
            href="/"
            className="relative h-11 md:h-12 w-48 md:w-56 flex items-center group focus:outline-none focus:ring-2 focus:ring-[#D6AD68]/50 rounded-lg p-0.5"
            aria-label="AARANYA Misty Valley Resort - Home"
          >
            <Image
              src="/images/logo/aaranya-navbar-logo.webp"
              alt="AARANYA Misty Valley Resort Official Logo"
              fill
              sizes="(max-width: 768px) 192px, 224px"
              className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide font-normal transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#E8BD78] font-medium"
                      : "text-[#FAF8F5]/85 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6AD68] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </NextLink>
              );
            })}
          </nav>

          {/* Desktop Socials & Book Your Stay CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-[#FAF8F5]/80">
              {hasInstagram && (
                <a
                  href={resortConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-white/10 hover:text-[#E8BD78] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D6AD68]"
                  aria-label="Visit Aaranya Instagram Page"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              )}
              {hasFacebook && (
                <a
                  href={resortConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-white/10 hover:text-[#E8BD78] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D6AD68]"
                  aria-label="Visit Aaranya Facebook Page"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="w-[1px] h-4 bg-white/20" />

            {/* Book Your Stay CTA Button matching Reference Image (Title Case, Gold, Rounded) */}
            <NextLink
              href="/#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D6AD68]"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#061F1A]" />
              <span>Book Your Stay</span>
            </NextLink>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <NextLink
              href="/#booking"
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#061F1A] bg-[#E8BD78] flex items-center gap-1.5"
            >
              <FiCalendar className="w-3 h-3" />
              <span>Book</span>
            </NextLink>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#FAF8F5] hover:text-[#E8BD78] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6AD68]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
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
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
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
                <NextLink
                  href="/#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] shadow-md"
                >
                  <FiCalendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </NextLink>

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
    </>
  );
}
