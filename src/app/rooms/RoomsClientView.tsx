"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { roomsData } from "@/data/rooms";
import RoomCard from "@/components/RoomCard";
import BookingForm from "@/components/BookingForm";

const roomFilterTabs = [
  "All Rooms",
  "Deluxe Room",
  "Premium Room",
  "Family Room",
  "Luxury Valley Suite",
  "Forest View Cottage",
] as const;

export default function RoomsClientView() {
  const [activeTab, setActiveTab] = useState<string>("All Rooms");
  const searchParams = useSearchParams();

  useEffect(() => {
    const select = searchParams.get("select");
    if (select) {
      const matched = roomsData.find(
        (r) => r.slug === select || r.id === select
      );
      if (matched) {
        setActiveTab(matched.name);
      }
    }
  }, [searchParams]);

  const filteredRooms = roomsData.filter((room) => {
    if (activeTab === "All Rooms") {
      return true;
    }
    return room.name.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div>
      {/* Rooms Hero matching Reference Top-Right Panel */}
      <section className="relative min-h-[460px] md:min-h-[520px] flex items-center text-white overflow-hidden mb-12 bg-[#071F1A]">
        {/* Large room background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pages/rooms-hero.webp"
            alt="Aaranya Luxury Bedroom Suite with Forest View"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradients for readability on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071F1A]/95 via-[#071F1A]/70 via-55% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A]/80 via-transparent to-[#071F1A]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12">
          <div className="max-w-xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8BD78] block mb-3">
              OUR ROOMS
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              Comfort in<br />
              <span className="font-normal text-[#E8BD78]">Every Stay.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#FAF8F5]/90 leading-relaxed font-light">
              Thoughtfully designed rooms that blend modern comforts with the calm of nature. Discover a stay made for relaxation and memorable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs matching the reference collage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {roomFilterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A568] ${
                  isActive
                    ? "bg-[#10251C] text-[#E0C087] border border-[#C9A568]/60 shadow-md font-semibold"
                    : "bg-white text-[#343B35] border border-black/10 hover:border-[#C9A568]/40 hover:bg-[#FAF8F5]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Direct Booking Section */}
        <div className="mt-20 bg-[#10251C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#C9A568]/30">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E0C087]">
              Direct WhatsApp Enquiry
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-1">
              Need Help Choosing a Room?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-2">
              Our front desk team is ready on WhatsApp to assist with room selections, group stays, and special arrangements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BookingForm variant="card" />
          </div>
        </div>
      </div>
    </div>
  );
}
