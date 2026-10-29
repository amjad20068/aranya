"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Room } from "@/data/rooms";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import RoomDetailModal from "./RoomDetailModal";

interface RoomCardProps {
  room: Room;
  onSelectRoom?: (room: Room) => void;
}

export default function RoomCard({ room, onSelectRoom }: RoomCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello ${resortConfig.name},

I would like to enquire about booking the ${room.name}.
Room: ${room.name}
Preferred Bed: ${room.capacity.bed}

Please let me know availability and stay details.

Thank you.`;

    const url = buildWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpenDetails = () => {
    if (onSelectRoom) {
      onSelectRoom(room);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:border-[#C9A568]/40 flex flex-col justify-between">
        {/* Card Image Container */}
        <div
          onClick={handleOpenDetails}
          className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer bg-neutral-100"
        >
          <Image
            src={room.image}
            alt={`${room.name} at Aaranya Misty Valley Resort`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* View Badge */}
          <div className="absolute top-3 left-3 bg-[#10251C]/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-[#FAF8F5] border border-white/10">
            {room.view}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3
              onClick={handleOpenDetails}
              className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#10251C] hover:text-[#C9A568] transition-colors cursor-pointer"
            >
              {room.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#343B35]/80 mt-2 leading-relaxed">
              {room.shortDescription}
            </p>
          </div>

          {/* Bottom Action Row (Matching Reference Image: View Details link on left, green WhatsApp button on right) */}
          <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
            <button
              onClick={handleOpenDetails}
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#10251C] hover:text-[#A68346] transition-colors group/link focus:outline-none focus:ring-1 focus:ring-[#C9A568] rounded px-1"
              aria-label={`View details for ${room.name}`}
            >
              <span className="underline underline-offset-4 decoration-[#10251C]/50 hover:decoration-[#A68346]">View Details</span>
              <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </button>

            {/* Official Green WhatsApp Squircle Action Button matching Reference */}
            <button
              onClick={handleWhatsAppClick}
              className="w-9 h-9 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
              aria-label={`Book ${room.name} on WhatsApp`}
              title="Book on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <RoomDetailModal
        room={room}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
