"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCoffee } from "react-icons/fi";
import {
  LuTrees,
  LuMountain,
  LuBedDouble,
} from "react-icons/lu";
import gsap from "gsap";
import { resortConfig } from "@/config/resort";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
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
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
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
      className="relative min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-28 pb-4 sm:pb-6 overflow-hidden bg-[#061F1A]"
    >
      {/* Background Image: Crisp authentic resort villa photograph optimized for all devices */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero/aaranya-resort-villa-4k.webp"
          alt="Aaranya Misty Valley Resort nestled amidst lush green canopy and misty hills"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center"
        />

        {/* Directional gradient: gentle left-to-center shading for text readability while leaving villa completely sunlit & clear */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[48%] bg-gradient-to-r from-[#061F1A]/95 via-[#061F1A]/70 via-55% to-transparent pointer-events-none" />

        {/* Subtle bottom edge blend for the feature highlight strip */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#061F1A]/95 via-[#061F1A]/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Core Content - Clean, elegant editorial text with CTA buttons */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-10 lg:py-16">
        <div className="max-w-xl lg:max-w-[560px]">
          {/* Eyebrow: AARANYA — MISTY VALLEY RESORT */}
          <div ref={eyebrowRef} className="flex items-center gap-2.5 mb-3">
            <span className="w-6 sm:w-7 h-[1px] bg-[#D6AD68]" />
            <span className="font-sans-luxury text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#D6AD68]">
              {resortConfig.name}
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal text-white tracking-tight leading-[1.12] sm:leading-[1.08] drop-shadow-sm"
          >
            Nature&rsquo;s Peace.
            <br />
            Your Perfect Stay.
          </h1>

          {/* Subtitle / Description */}
          <p
            ref={descRef}
            className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-[#FAF8F5]/90 max-w-lg font-light leading-relaxed drop-shadow"
          >
            {resortConfig.heroDescription}
          </p>

          {/* Action Buttons: Explore Now & View More */}
          <div
            ref={ctaRef}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="#about"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-lg shadow-[#061F1A]/40 hover:shadow-xl hover:shadow-[#D6AD68]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Now</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/rooms"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#FAF8F5] bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#D6AD68]/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View More</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Booking anchor to ensure navbar links scroll gracefully */}
      <div id="booking" className="absolute -bottom-2" />

      {/* Feature Badges Bar */}
      <div
        ref={badgesRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-3 sm:pt-4 border-t border-white/10"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs text-[#FAF8F5]/85 font-normal">
          
          {/* Left Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <LuTrees className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6AD68]" />
              <span className="tracking-wide text-[11px] sm:text-xs">Peaceful Location</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <LuMountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6AD68]" />
              <span className="tracking-wide text-[11px] sm:text-xs">Nature Views</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <LuBedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6AD68]" />
              <span className="tracking-wide text-[11px] sm:text-xs">Comfortable Rooms</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <FiCoffee className="w-4 h-4 text-[#D6AD68]" />
              <span className="tracking-wide text-xs">Relaxing Stay</span>
            </div>
          </div>

          {/* Right Highlight Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[#D6AD68] tracking-wider sm:tracking-widest uppercase text-[9px] sm:text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD68]" />
            <span>A Hidden Gem in Nature</span>
          </div>

        </div>
      </div>
    </section>
  );
}
