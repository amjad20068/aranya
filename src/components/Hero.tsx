"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCoffee } from "react-icons/fi";
import {
  LuTrees,
  LuMountain,
  LuBedDouble,
  LuMouse,
} from "react-icons/lu";
import gsap from "gsap";
import { resortConfig } from "@/config/resort";
import BookingForm from "./BookingForm";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          bookingRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[780px] lg:h-[860px] flex flex-col justify-between pt-24 md:pt-28 pb-4 overflow-hidden bg-[#071F1A]"
    >
      {/* Background Image: The authentic panoramic resort landscape from Reference Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero/aaranya-resort-hero.webp"
          alt="Aaranya Misty Valley Resort nestled amidst lush green canopy and misty hills"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional gradient to darken the left side for crisp text readability while keeping the building on the right luminous */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F1A]/95 via-[#071F1A]/70 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent via-20% to-[#071F1A]/50" />
      </div>

      {/* Hero Core Content - Left Aligned to match Reference Image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-2xl lg:max-w-[620px]">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[1px] bg-[#E8BD78]" />
            <span className="font-sans-luxury text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E8BD78]">
              {resortConfig.name}
            </span>
          </div>

          {/* Headline (Matching Reference Image: "Nature's Peace. / Your Perfect Stay.") */}
          <h1
            ref={headlineRef}
            className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal text-white tracking-tight leading-[1.08] drop-shadow-md"
          >
            Nature&rsquo;s Peace.
            <br />
            <span className="font-normal text-[#E8BD78]">Your Perfect Stay.</span>
          </h1>

          {/* Subtitle / Description */}
          <p
            ref={descRef}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#FAF8F5]/90 max-w-xl font-light leading-relaxed drop-shadow"
          >
            {resortConfig.heroDescription}
          </p>

          {/* Floating Glassmorphic Booking Widget (Contained on the left) */}
          <div id="booking" ref={bookingRef} className="mt-5 sm:mt-6 max-w-[560px]">
            <BookingForm variant="hero" />
          </div>
        </div>
      </div>

      {/* Feature Badges Bar (Matching Image 3 exactly at bottom of Hero) */}
      <div
        ref={badgesRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 pt-4 border-t border-white/10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#FAF8F5]/80 font-medium">
          
          {/* Left Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <LuTrees className="w-4 h-4 text-[#C9A568]" />
              <span className="tracking-wide">Peaceful Location</span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <LuMountain className="w-4 h-4 text-[#C9A568]" />
              <span className="tracking-wide">Nature Views</span>
            </div>

            <div className="flex items-center gap-2">
              <LuBedDouble className="w-4 h-4 text-[#C9A568]" />
              <span className="tracking-wide">Comfortable Rooms</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <FiCoffee className="w-4 h-4 text-[#C9A568]" />
              <span className="tracking-wide">Relaxing Stay</span>
            </div>
          </div>

          {/* Center Scroll Indicator */}
          <Link
            href="#rooms"
            className="hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#E8BD78] hover:text-white transition-colors"
          >
            <LuMouse className="w-4 h-4 animate-bounce text-[#E8BD78]" />
            <span>Scroll Down</span>
          </Link>

          {/* Right Highlight Badge */}
          <div className="flex items-center gap-2 text-[#C9A568] tracking-widest uppercase text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A568]" />
            <span>A Hidden Gem in Nature</span>
          </div>

        </div>
      </div>
    </section>
  );
}
