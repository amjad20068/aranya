"use client";

import React, { useState } from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { reviewsData, reviewsSummary, GoogleReview } from "@/data/reviews";
import { resortConfig, buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";

// Official Google "G" SVG Icon
function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.14C3.25 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.59H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.41l4.02-3.14z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.59l4.02 3.14c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

const filterCategories = [
  { id: "all", label: "All Reviews" },
  { id: "couples", label: "Couples & Retreats" },
  { id: "family", label: "Family Vacations" },
  { id: "nature", label: "Nature & Views" },
  { id: "hospitality", label: "Hospitality & Dining" },
] as const;

export default function GoogleReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredReviews = reviewsData.filter((rev) => {
    if (selectedCategory === "all") return true;
    return rev.category === selectedCategory;
  });

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[#F7F3EC] relative overflow-hidden border-t border-b border-[#E6DED1]/80"
    >
      {/* Decorative leaf watermark silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 opacity-[0.05] pointer-events-none select-none">
        <svg className="w-full h-auto text-[#625332]" viewBox="0 0 200 600" fill="currentColor">
          <path d="M-20,60 C50,80 110,140 120,210 C125,245 95,270 60,255 C25,240 -10,195 -20,160 Z M-30,240 C70,260 140,330 150,420 C155,465 110,500 70,475 C25,450 -20,380 -30,340 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Google Rating Score Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Heading and Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6DED1] shadow-xs mb-3.5">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#092C24]">
                Verified Google Reviews
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              <span className="text-[10px] text-[#16A34A] font-medium uppercase tracking-wider">
                4.9 / 5.0
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#092C24] tracking-tight leading-[1.12]">
              Loved by Guests,<br />
              <span className="font-normal text-[#A68346]">Blessed by Nature.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#77766E] mt-3.5 max-w-xl leading-relaxed font-light">
              Real impressions and heartfelt stories shared by travellers who experienced the peace, morning mist, and warm hospitality at Aaranya.
            </p>
          </motion.div>

          {/* Right Column: Google Rating Score Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl bg-white border border-[#E6DED1] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#092C24] text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                  <span className="text-2xl font-bold leading-none">
                    {reviewsSummary.averageRating}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#E8BD78] mt-0.5">
                    OUT OF 5
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-[#092C24] font-semibold">
                    Excellent &bull; {reviewsSummary.totalReviews}+ Reviews
                  </div>
                  <div className="text-[11px] text-[#77766E]">
                    Google Maps Verified Rating
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#E6DED1] sm:pl-5 w-full sm:w-auto">
                <a
                  href={reviewsSummary.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Review on Google</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#092C24] text-white shadow-sm font-semibold"
                    : "bg-white text-[#77766E] border border-[#E6DED1] hover:border-[#A68346]/50 hover:text-[#092C24]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 rounded-2xl bg-white border border-[#E6DED1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Reviewer Info + Google Icon */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8BD78] to-[#D6AD68] text-[#061F1A] font-bold text-xs flex items-center justify-center shrink-0 shadow-inner">
                        {review.avatarText}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#092C24] flex items-center gap-1.5">
                          <span>{review.name}</span>
                          <FiCheckCircle className="w-3.5 h-3.5 text-[#16A34A]" title="Verified Guest" />
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-[#77766E]">
                          {review.isLocalGuide && (
                            <span className="font-medium text-[#EA4335]">
                              Local Guide &bull; {review.reviewCount} reviews
                            </span>
                          )}
                          {!review.isLocalGuide && (
                            <span>{review.relativeTime}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0 border border-[#E6DED1]">
                      <GoogleIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Rating Stars & Stay Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-medium text-[#A68346] bg-[#F7F3EC] px-2.5 py-0.5 rounded-full border border-[#E6DED1]">
                      {review.stayType}
                    </span>
                  </div>

                  {/* Highlight phrase if any */}
                  {review.highlightPhrase && (
                    <div className="font-serif-luxury text-base text-[#092C24] font-medium mb-2 leading-snug">
                      &ldquo;{review.highlightPhrase}&rdquo;
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#77766E] leading-relaxed font-light">
                    {review.comment}
                  </p>
                </div>

                {/* Bottom Footer: Verification status */}
                <div className="mt-5 pt-3.5 border-t border-[#E6DED1]/70 flex items-center justify-between text-[11px] text-[#77766E]">
                  <span className="flex items-center gap-1">
                    <GoogleIcon className="w-3 h-3" />
                    <span>Posted on Google</span>
                  </span>
                  {review.helpfulCount && (
                    <span className="text-[10px] text-[#77766E]">
                      {review.helpfulCount} people found this helpful
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#092C24] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D6AD68]/30 shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span className="text-[11px] uppercase tracking-widest text-[#E8BD78] font-medium">
                Plan Your Experience
              </span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white">
              Ready to write your own story at Aaranya?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-1 max-w-xl font-light">
              Connect directly with our reservation desk on WhatsApp for live room availability and personalized stay assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl("Hello Aaranya Resort, I loved reading your guest reviews and would like to enquire about staying.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openDirectWhatsApp("Hello Aaranya Resort, I loved reading your guest reviews and would like to enquire about staying.");
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-md transition-all duration-200"
            >
              <FaWhatsapp className="w-4 h-4 text-[#061F1A]" />
              <span>Book on WhatsApp</span>
              <FiArrowRight className="w-4 h-4 text-[#061F1A]" />
            </a>

            <a
              href={reviewsSummary.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>View All 210+ Reviews</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
