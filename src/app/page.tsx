import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import { roomsData } from "@/data/rooms";
import HomeGalleryCarousel from "@/components/HomeGalleryCarousel";

export default function HomePage() {
  // 3 Rooms matching Reference Image Panel 1: Deluxe, Premium, Family
  const featuredRooms = roomsData.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section matching Reference Image Panel 1 */}
      <Hero />

      {/* 2. Our Rooms Section matching Reference Image Panel 1 */}
      <section
        id="rooms"
        className="py-16 md:py-24 bg-[#F5F1E8] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Eyebrow, Heading, Description & Button matching Reference Image */}
            <div className="lg:col-span-3 xl:col-span-3.5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-2">
                  OUR ROOMS
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#10251C] tracking-tight leading-[1.12]">
                  Stay Close to Nature
                </h2>
                <p className="text-sm sm:text-base text-[#343B35]/85 mt-4 leading-relaxed font-light">
                  Beautifully designed rooms with modern comforts, blending with the natural surroundings. Experience a stay that brings you closer to nature.
                </p>
              </div>

              <div>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#071F1A] bg-[#E8BD78] hover:bg-[#DCA65E] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>View All Rooms</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Room Cards arranged horizontally matching Reference Image */}
            <div className="lg:col-span-9 xl:col-span-8.5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {featuredRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Gallery Preview matching Reference Image Panel 1 (Dark Green Background with 2-Column Layout) */}
      <section
        id="gallery"
        className="py-16 md:py-24 bg-[#10251C] text-white relative overflow-hidden border-t border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeGalleryCarousel />
        </div>
      </section>
    </>
  );
}
