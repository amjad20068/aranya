"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiX,
  FiUsers,
  FiMaximize,
  FiEye,
  FiCalendar,
  FiUser,
  FiPhone,
  FiArrowLeft,
  FiArrowRight,
  FiAlertCircle,
  FiMessageSquare,
  FiChevronDown,
  FiHome,
} from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { Room } from "@/data/rooms";
import { resortConfig, buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";

interface TypeOrSelectInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (val: string) => void;
  options: number[];
  unitSingle?: string;
  unitPlural?: string;
  min?: number;
  max?: number;
  placeholder?: string;
}

function TypeOrSelectInput({
  id,
  name,
  value,
  onChange,
  options,
  unitSingle = "",
  unitPlural = "",
  min = 0,
  max = 50,
  placeholder = "0",
}: TypeOrSelectInputProps) {
  const numVal = parseInt(value, 10);
  const unitText = !isNaN(numVal) && numVal === 1 ? (unitSingle || unitPlural) : (unitPlural || unitSingle);

  return (
    <div className="relative flex items-center w-full min-w-0">
      <input
        type="number"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 max-w-full bg-white border border-[#E6DED1] focus:border-[#D6AD68] rounded-lg pl-2.5 pr-12 py-1.5 text-xs text-[#092C24] font-medium focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      {/* Suffix label & dropdown chevron on the right */}
      <div className="absolute right-0 inset-y-0 flex items-center pr-2 pointer-events-none gap-1">
        {unitText && (
          <span className="text-[10px] font-normal text-[#77766E] truncate">
            {unitText}
          </span>
        )}
        <FiChevronDown className="w-3 h-3 text-[#77766E] shrink-0" />
      </div>

      {/* Clickable select overlay over the chevron & unit area */}
      <select
        aria-label={`Select ${unitPlural || name || ""}`}
        value={options.includes(Number(value)) ? value : ""}
        onChange={(e) => {
          if (e.target.value !== "") onChange(e.target.value);
        }}
        className="absolute right-0 inset-y-0 w-16 opacity-0 cursor-pointer"
        title="Click to select from list or type number directly on the left"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((num) => (
          <option key={num} value={num} className="bg-white text-[#092C24]">
            {num} {unitSingle ? (num === 1 ? unitSingle : unitPlural) : ""}
          </option>
        ))}
      </select>
    </div>
  );
}

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomDetailModal({
  room,
  isOpen,
  onClose,
}: RoomDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"details" | "form">("details");

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    members: "2",
    adults: "2",
    kids6to12: "0",
    kids0to6: "0",
    rooms: "1",
    fullName: "",
    mobile: "",
    specialRequest: "",
  });
  const [minDate, setMinDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen && room) {
      setViewMode("details");
      setActiveImageIndex(0);
      setErrors({});

      const now = new Date();
      const todayStr = now.toISOString().split("T")[0];
      const nextDay = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      setMinDate(todayStr);
      setFormData({
        checkIn: todayStr,
        checkOut: nextDay,
        members: String(room.capacity?.adults || 2),
        adults: String(room.capacity?.adults || 2),
        kids6to12: "0",
        kids0to6: "0",
        rooms: "1",
        fullName: "",
        mobile: "",
        specialRequest: "",
      });
    }
  }, [isOpen, room]);

  if (!room) return null;

  const images = room.galleryImages.length > 0 ? room.galleryImages : [room.image];

  const handleDirectWhatsApp = () => {
    const msg = `Hello ${resortConfig.name},

I would like to enquire about booking the ${room.name}.
Room: ${room.name} (${room.capacity.bed} • ${room.view})
Guest capacity: ${room.capacity.adults} Adults, ${room.capacity.children} Children.

Please let me know availability and stay details.

Thank you.`;

    openDirectWhatsApp(msg);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleMembersChange = (val: string) => {
    setFormData((prev) => ({ ...prev, members: val }));
  };

  const handleAdultsChange = (val: string) => {
    setFormData((prev) => {
      const a = parseInt(val, 10) || 0;
      const k1 = parseInt(prev.kids6to12, 10) || 0;
      const k2 = parseInt(prev.kids0to6, 10) || 0;
      return {
        ...prev,
        adults: val,
        members: String(Math.max(1, a + k1 + k2)),
      };
    });
    if (errors.adults) setErrors((prev) => ({ ...prev, adults: "" }));
  };

  const handleRoomsChange = (val: string) => {
    setFormData((prev) => ({ ...prev, rooms: val }));
  };

  const handleKids6to12Change = (val: string) => {
    setFormData((prev) => {
      const a = parseInt(prev.adults, 10) || 0;
      const k1 = parseInt(val, 10) || 0;
      const k2 = parseInt(prev.kids0to6, 10) || 0;
      return {
        ...prev,
        kids6to12: val,
        members: String(Math.max(1, a + k1 + k2)),
      };
    });
  };

  const handleKids0to6Change = (val: string) => {
    setFormData((prev) => {
      const a = parseInt(prev.adults, 10) || 0;
      const k1 = parseInt(prev.kids6to12, 10) || 0;
      const k2 = parseInt(val, 10) || 0;
      return {
        ...prev,
        kids0to6: val,
        members: String(Math.max(1, a + k1 + k2)),
      };
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name";
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    if (!formData.mobile.trim()) {
      errs.mobile = "Please enter your mobile number";
    } else if (cleanMobile.length < 8 || cleanMobile.length > 15) {
      errs.mobile = "Enter valid mobile number";
    }

    if (!formData.checkIn) {
      errs.checkIn = "Select check-in";
    }
    if (!formData.checkOut) {
      errs.checkOut = "Select check-out";
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = "Must be after check-in";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return dateStr;
    };

    const numAdults = parseInt(formData.adults, 10) || 1;
    const numKids6to12 = parseInt(formData.kids6to12, 10) || 0;
    const numKids0to6 = parseInt(formData.kids0to6, 10) || 0;
    const totalMembers =
      formData.members && formData.members.trim() !== ""
        ? formData.members.trim()
        : String(numAdults + numKids6to12 + numKids0to6);

    const lines: string[] = [
      "*Enquiry*",
      `Name : ${formData.fullName.trim()}`,
      `Number: ${formData.mobile.trim()}`,
      `Check In Date: ${formatDate(formData.checkIn)}`,
      `Check Out Date: ${formatDate(formData.checkOut)}`,
      `Number of Members: ${totalMembers}`,
      `Number of Adults[12y above]: ${formData.adults}`,
      `Number of kids [6-12]: ${formData.kids6to12}`,
      `Kids [0-6]: ${formData.kids0to6}`,
      `No of Rooms: ${formData.rooms}`,
      `Room: ${room.name}`,
    ];

    if (formData.specialRequest.trim()) {
      lines.push(`Special Request: ${formData.specialRequest.trim()}`);
    }

    const message = lines.join("\n");
    openDirectWhatsApp(message);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="min-h-full flex items-center justify-center p-2.5 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#20231F] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#E6DED1] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#061F1A]/70 hover:bg-[#061F1A] text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                aria-label="Close room details"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div data-lenis-prevent className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] sm:max-h-[88vh] overflow-y-auto overscroll-contain">
                {/* Left: Room Media Gallery */}
                <div className="lg:col-span-7 bg-[#061F1A] p-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    {/* Main Active Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-[#D6AD68]/20 bg-black/40">
                      <Image
                        src={images[activeImageIndex] || room.image}
                        alt={`${room.name} photograph`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#061F1A]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#E8BD78] border border-[#D6AD68]/30">
                        {room.view}
                      </div>
                    </div>

                    {/* Image Thumbnail Strip */}
                    {images.length > 1 && (
                      <div data-lenis-prevent className="flex gap-2.5 mt-3 overflow-x-auto pb-1 touch-pan-x">
                        {images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                              activeImageIndex === idx
                                ? "border-[#D6AD68] scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${room.name} thumbnail ${idx + 1}`}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Room Quick Specs */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-white/90 text-xs font-light">
                    <div className="flex items-center gap-2">
                      <FiUsers className="w-4 h-4 text-[#D6AD68]" />
                      <span>{room.capacity.adults} Adults, {room.capacity.children} Child</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMaximize className="w-4 h-4 text-[#D6AD68]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiEye className="w-4 h-4 text-[#D6AD68]" />
                      <span>{room.capacity.bed}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Room Information OR WhatsApp Enquiry Form */}
                <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-[#FAF8F5] min-h-[460px]">
                  <AnimatePresence mode="wait">
                    {viewMode === "details" ? (
                      <motion.div
                        key="details-view"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <div>
                          <span className="text-[11px] font-medium uppercase tracking-widest text-[#A68346]">
                            Accommodation Details
                          </span>
                          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#092C24] mt-1">
                            {room.name}
                          </h3>
                          <p className="font-serif-luxury italic text-sm text-[#A68346] mb-3">
                            {room.subtitle}
                          </p>

                          <p className="text-sm text-[#77766E] leading-relaxed mb-5 font-light">
                            {room.detailedDescription}
                          </p>

                          {/* Confirmed Amenities List */}
                          <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#092C24] mb-3">
                              Included Amenities
                            </h4>
                            <ul className="grid grid-cols-1 gap-2 text-xs text-[#20231F] font-light">
                              {room.amenities.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <span className="w-4 h-4 rounded-full bg-[#092C24]/10 text-[#092C24] flex items-center justify-center shrink-0 text-[10px]">
                                    ✓
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Room Highlights */}
                          <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E6DED1] mb-6 text-xs text-[#20231F] font-light">
                            <span className="font-semibold text-[#092C24] block mb-1">
                              Resort Highlight
                            </span>
                            <span>Quiet hillside orientation with fresh mountain mist and peaceful seclusion.</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2 pt-4 border-t border-[#E6DED1]">
                          <button
                            type="button"
                            onClick={() => setViewMode("form")}
                            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all cursor-pointer group"
                          >
                            <FaWhatsapp className="w-4 h-4 text-[#061F1A] group-hover:scale-110 transition-transform" />
                            <span>Enquire on WhatsApp</span>
                            <FiArrowRight className="w-4 h-4 text-[#061F1A] group-hover:translate-x-1 transition-transform" />
                          </button>

                          <button
                            type="button"
                            onClick={handleDirectWhatsApp}
                            className="w-full text-center text-[11px] text-[#A68346] hover:text-[#092C24] transition-colors py-1 cursor-pointer font-medium"
                          >
                            Direct WhatsApp enquiry without dates →
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form-view"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <form onSubmit={handleFormSubmit} noValidate className="flex flex-col justify-between h-full">
                          <div>
                            {/* Top Header with Back Button */}
                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E6DED1]">
                              <button
                                type="button"
                                onClick={() => setViewMode("details")}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092C24] hover:text-[#D6AD68] transition-colors cursor-pointer group"
                              >
                                <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                                <span>Back to Details</span>
                              </button>
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D6AD68] bg-[#061F1A] px-2.5 py-1 rounded-full">
                                {room.name}
                              </span>
                            </div>

                            <div className="mb-4">
                              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-[#A68346]">
                                Reserve Your Stay
                              </span>
                              <h4 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#092C24] mt-0.5">
                                WhatsApp Booking Enquiry
                              </h4>
                              <p className="text-xs text-[#77766E] font-light mt-0.5">
                                Enter your stay dates & details to send via WhatsApp.
                              </p>
                            </div>

                            {/* Dates Grid */}
                            <div className="grid grid-cols-2 gap-2.5 mb-3 w-full min-w-0">
                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiCalendar className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Check-in</span>
                                </label>
                                <input
                                  type="date"
                                  name="checkIn"
                                  min={minDate}
                                  value={formData.checkIn}
                                  onChange={handleFormChange}
                                  className={`w-full min-w-0 max-w-full bg-white border ${
                                    errors.checkIn ? "border-red-400" : "border-[#E6DED1] focus:border-[#D6AD68]"
                                  } rounded-lg px-2.5 py-1.5 text-xs text-[#092C24] focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [appearance:none] [-webkit-appearance:none]`}
                                  required
                                />
                                {errors.checkIn && (
                                  <span className="text-red-500 text-[9px] mt-0.5 flex items-center gap-0.5">
                                    <FiAlertCircle className="w-2.5 h-2.5" /> {errors.checkIn}
                                  </span>
                                )}
                              </div>

                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiCalendar className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Check-out</span>
                                </label>
                                <input
                                  type="date"
                                  name="checkOut"
                                  min={formData.checkIn || minDate}
                                  value={formData.checkOut}
                                  onChange={handleFormChange}
                                  className={`w-full min-w-0 max-w-full bg-white border ${
                                    errors.checkOut ? "border-red-400" : "border-[#E6DED1] focus:border-[#D6AD68]"
                                  } rounded-lg px-2.5 py-1.5 text-xs text-[#092C24] focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [appearance:none] [-webkit-appearance:none]`}
                                  required
                                />
                                {errors.checkOut && (
                                  <span className="text-red-500 text-[9px] mt-0.5 flex items-center gap-0.5">
                                    <FiAlertCircle className="w-2.5 h-2.5" /> {errors.checkOut}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Row 2: Number of Members & No of Rooms */}
                            <div className="grid grid-cols-2 gap-2.5 mb-2.5 w-full min-w-0">
                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center justify-between">
                                  <span className="flex items-center gap-1">
                                    <FiUsers className="w-3 h-3 text-[#D6AD68]" />
                                    <span>Members</span>
                                  </span>
                                  <span className="text-[9px] text-[#77766E] font-normal lowercase">
                                    (total)
                                  </span>
                                </label>
                                <TypeOrSelectInput
                                  id="modal-members"
                                  name="members"
                                  value={formData.members}
                                  onChange={handleMembersChange}
                                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20]}
                                  unitSingle="Member"
                                  unitPlural="Members"
                                  min={1}
                                  max={50}
                                  placeholder="2"
                                />
                              </div>

                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiHome className="w-3 h-3 text-[#D6AD68]" />
                                  <span>No of Rooms</span>
                                </label>
                                <TypeOrSelectInput
                                  id="modal-rooms"
                                  name="rooms"
                                  value={formData.rooms}
                                  onChange={handleRoomsChange}
                                  options={[1, 2, 3, 4, 5, 6, 8, 10]}
                                  unitSingle="Room"
                                  unitPlural="Rooms"
                                  min={1}
                                  max={20}
                                  placeholder="1"
                                />
                              </div>
                            </div>

                            {/* Row 3: Adults [12y+] & Kids [6-12] */}
                            <div className="grid grid-cols-2 gap-2.5 mb-2.5 w-full min-w-0">
                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiUsers className="w-3 h-3 text-[#D6AD68]" />
                                  <span className="truncate">Adults [12y+]</span>
                                </label>
                                <TypeOrSelectInput
                                  id="modal-adults"
                                  name="adults"
                                  value={formData.adults}
                                  onChange={handleAdultsChange}
                                  options={[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]}
                                  unitSingle="Adult"
                                  unitPlural="Adults"
                                  min={1}
                                  max={50}
                                  placeholder="1"
                                />
                              </div>

                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiUsers className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Kids [6-12]</span>
                                </label>
                                <TypeOrSelectInput
                                  id="modal-kids-6-12"
                                  name="kids6to12"
                                  value={formData.kids6to12}
                                  onChange={handleKids6to12Change}
                                  options={[0, 1, 2, 3, 4, 5, 6, 8]}
                                  unitSingle="Kid"
                                  unitPlural="Kids"
                                  min={0}
                                  max={20}
                                  placeholder="0"
                                />
                              </div>
                            </div>

                            {/* Row 4: Kids [0-6] */}
                            <div className="grid grid-cols-2 gap-2.5 mb-3 w-full min-w-0">
                              <div className="min-w-0 w-full">
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiUsers className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Kids [0-6]</span>
                                </label>
                                <TypeOrSelectInput
                                  id="modal-kids-0-6"
                                  name="kids0to6"
                                  value={formData.kids0to6}
                                  onChange={handleKids0to6Change}
                                  options={[0, 1, 2, 3, 4, 5, 6, 8]}
                                  unitSingle="Kid"
                                  unitPlural="Kids"
                                  min={0}
                                  max={20}
                                  placeholder="0"
                                />
                              </div>
                            </div>

                            {/* Contact Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                              <div>
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiUser className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Your Name</span>
                                </label>
                                <input
                                  type="text"
                                  name="fullName"
                                  placeholder="Full name"
                                  value={formData.fullName}
                                  onChange={handleFormChange}
                                  className={`w-full bg-white border ${
                                    errors.fullName ? "border-red-400" : "border-[#E6DED1] focus:border-[#D6AD68]"
                                  } rounded-lg px-2.5 py-1.5 text-xs text-[#092C24] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all`}
                                  required
                                />
                                {errors.fullName && (
                                  <span className="text-red-500 text-[9px] mt-0.5 flex items-center gap-0.5">
                                    <FiAlertCircle className="w-2.5 h-2.5" /> {errors.fullName}
                                  </span>
                                )}
                              </div>

                              <div>
                                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                  <FiPhone className="w-3 h-3 text-[#D6AD68]" />
                                  <span>Mobile Number</span>
                                </label>
                                <input
                                  type="tel"
                                  name="mobile"
                                  placeholder="Mobile number"
                                  value={formData.mobile}
                                  onChange={handleFormChange}
                                  className={`w-full bg-white border ${
                                    errors.mobile ? "border-red-400" : "border-[#E6DED1] focus:border-[#D6AD68]"
                                  } rounded-lg px-2.5 py-1.5 text-xs text-[#092C24] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all`}
                                  required
                                />
                                {errors.mobile && (
                                  <span className="text-red-500 text-[9px] mt-0.5 flex items-center gap-0.5">
                                    <FiAlertCircle className="w-2.5 h-2.5" /> {errors.mobile}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Optional Special Request */}
                            <div className="mb-4">
                              <label className="text-[10px] uppercase tracking-wider font-semibold text-[#092C24] mb-1 flex items-center gap-1">
                                <FiMessageSquare className="w-3 h-3 text-[#D6AD68]" />
                                <span>Special Request (Optional)</span>
                              </label>
                              <textarea
                                name="specialRequest"
                                rows={2}
                                placeholder="e.g. Extra bed, arrival time, meal preferences..."
                                value={formData.specialRequest}
                                onChange={handleFormChange}
                                className="w-full bg-white border border-[#E6DED1] focus:border-[#D6AD68] rounded-lg px-2.5 py-1.5 text-xs text-[#092C24] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all resize-none"
                              />
                            </div>
                          </div>

                          {/* Submit WhatsApp Button */}
                          <div className="pt-2 border-t border-[#E6DED1]">
                            <button
                              type="submit"
                              className="w-full min-h-[48px] sm:min-h-[52px] py-3 sm:py-3.5 px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] cursor-pointer group"
                            >
                              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-[#061F1A] shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-center leading-tight">Send Enquiry on WhatsApp</span>
                              <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#061F1A] shrink-0 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
