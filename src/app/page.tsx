"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPhone, FiMail, FiMapPin, FiCoffee } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { LuTrees, LuMountain, LuBedDouble, LuWifi } from "react-icons/lu";
import { motion } from "motion/react";
import { getFaqJsonLd } from "@/config/seo";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import HomeGalleryCarousel from "@/components/HomeGalleryCarousel";
import InstagramSection from "@/components/InstagramSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";
import { roomsData } from "@/data/rooms";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";

export default function HomePage() {
  const featuredRooms = roomsData.slice(0, 3);
  const hasInstagram = Boolean(resortConfig.social.instagram && resortConfig.social.instagram.trim() !== "");
  const hasFacebook = Boolean(resortConfig.social.facebook && resortConfig.social.facebook.trim() !== "");

  return (
    <>
      {/* FAQ Schema for Search Engine Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd()) }}
      />

      {/* 1. Hero Section matching Reference Image Panel 1 */}
      <Hero />

      {/* 2. Our Rooms Section matching Reference Image Panel 1 */}
      <section
        id="rooms"
        className="py-16 md:py-24 bg-[#F7F3EC] relative overflow-hidden border-b border-[#E6DED1]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Eyebrow, Heading, Description & Button */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 xl:col-span-3.5 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
                  OUR ROOMS
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#092C24] tracking-tight leading-[1.12]">
                  Stay Close to Nature
                </h2>
                <p className="text-sm sm:text-base text-[#77766E] mt-4 leading-relaxed font-light">
                  Beautifully designed rooms with modern comforts, blending with the natural surroundings. Experience a stay that brings you closer to nature.
                </p>
              </div>

              <div>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>View All Rooms</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: 3 Room Cards with Staggered Premium Reveal */}
            <div className="lg:col-span-9 xl:col-span-8.5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {featuredRooms.map((room, idx) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.75,
                      delay: idx * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <RoomCard room={room} />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Section matching Reference Image Panel (Bottom Left) */}
      <section
        id="about"
        className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E6DED1]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description, Our Story Button */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-5"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block">
                ABOUT AARANYA
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#092C24] leading-[1.12] tracking-tight">
                A Retreat<br />
                in Nature
              </h2>
              <p className="text-sm sm:text-base text-[#77766E] leading-relaxed font-light">
                Aaranya is a serene forest retreat surrounded by lush greenery, misty hills, and tranquil landscapes. Experience the perfect blend of nature, comfort, and warm hospitality.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Our Story</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Genuine Resort Villa Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative w-full"
            >
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full min-h-[240px] sm:min-h-[320px] rounded-2xl overflow-hidden border border-[#E6DED1] shadow-sm group bg-[#F7F3EC]">
                <Image
                  src="/images/pages/about-resort.webp"
                  alt="Aaranya Misty Valley Resort nestled amidst lush greenery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Our Services Section matching Reference Image Panel (Bottom Middle) */}
      <section
        id="services"
        className="py-16 md:py-24 bg-[#F7F3EC] relative overflow-hidden border-b border-[#E6DED1]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description, Highlight Strip, CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
                  OUR SERVICES
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#092C24] tracking-tight leading-[1.12]">
                  Thoughtful Experiences
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#77766E] leading-relaxed font-light">
                Enjoy a range of thoughtful services centered to make your stay comfortable, relaxing, and truly memorable.
              </p>

              {/* Feature Icons Strip matching Reference Panel with Integrated Wi-Fi Facility */}
              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 py-3.5 px-4 rounded-xl bg-white/80 border border-[#E6DED1]">
                  <div className="flex flex-col items-center text-center">
                    <LuTrees className="w-5 h-5 text-[#D6AD68] mb-1.5" />
                    <span className="text-[11px] font-medium text-[#092C24]">Peaceful Location</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <LuMountain className="w-5 h-5 text-[#D6AD68] mb-1.5" />
                    <span className="text-[11px] font-medium text-[#092C24]">Nature Views</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <LuBedDouble className="w-5 h-5 text-[#D6AD68] mb-1.5" />
                    <span className="text-[11px] font-medium text-[#092C24]">Comfortable Rooms</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <FiCoffee className="w-5 h-5 text-[#D6AD68] mb-1.5" />
                    <span className="text-[11px] font-medium text-[#092C24]">Relaxing Stay</span>
                  </div>

                  <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
                    <LuWifi className="w-5 h-5 text-[#D6AD68] mb-1.5" />
                    <span className="text-[11px] font-medium text-[#092C24]">Wi-Fi Available</span>
                  </div>
                </div>
              </div>

              {/* Direct Enquiry Button */}
              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Explore All Services</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={buildWhatsAppUrl("Hello Aaranya Resort, I would like to enquire about your services and stay experiences.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-[#092C24] border border-[#092C24]/20 hover:bg-[#092C24]/5 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Sea of Clouds Panoramic Valley View */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative w-full"
            >
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full min-h-[240px] sm:min-h-[320px] rounded-2xl overflow-hidden border border-[#E6DED1] shadow-sm group bg-[#F7F3EC]">
                <Image
                  src="/images/pages/aaranya-sea-of-clouds-2k.webp"
                  alt="Aaranya Sea of Clouds Valley View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Gallery Preview matching Reference Image (Dark Green Background with Carousel) */}
      <section
        id="gallery"
        className="py-16 md:py-24 bg-[#061F1A] text-white relative overflow-hidden border-t border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeGalleryCarousel />
        </div>
      </section>

      {/* 6. Instagram Stories & Valley Highlights Section */}
      <InstagramSection />

      {/* 7. Google Reviews & Guest Testimonials Section */}
      <GoogleReviewsSection />

      {/* 8. Contact Section matching Reference Image Panel (Bottom Right) */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Contact details, Socials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
                  CONTACT US
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#092C24] tracking-tight leading-[1.12]">
                  Get in Touch
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#77766E] leading-relaxed font-light">
                  We&rsquo;d love to hear from you. For booking enquiries or any questions, feel free to reach out.
                </p>
              </div>

              {/* Direct Details List */}
              <div className="space-y-4 pt-2">
                {/* Call Us */}
                <div className="flex items-center gap-3.5 text-sm text-[#092C24]">
                  <div className="w-9 h-9 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
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
                <div className="flex items-center gap-3.5 text-sm text-[#092C24]">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
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
                <div className="flex items-center gap-3.5 text-sm text-[#092C24]">
                  <div className="w-9 h-9 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
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
                <div className="flex items-center gap-3.5 text-sm text-[#092C24]">
                  <div className="w-9 h-9 rounded-full bg-[#092C24]/5 text-[#D6AD68] flex items-center justify-center shrink-0">
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
                <div className="pt-2 flex items-center gap-3">
                  {hasInstagram && (
                    <a
                      href={resortConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white border border-[#E6DED1] hover:border-[#D6AD68] hover:bg-[#D6AD68] hover:text-[#061F1A] text-[#092C24] flex items-center justify-center transition-all shadow-sm"
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
                      className="w-9 h-9 rounded-full bg-white border border-[#E6DED1] hover:border-[#D6AD68] hover:bg-[#D6AD68] hover:text-[#061F1A] text-[#092C24] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right Column: Contact Enquiry Form matching Reference Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <ContactEnquiryForm />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
