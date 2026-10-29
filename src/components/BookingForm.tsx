"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiCalendar,
  FiUser,
  FiPhone,
  FiHome,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import { roomsData } from "@/data/rooms";

interface BookingFormProps {
  initialRoom?: string;
  variant?: "hero" | "card" | "page";
  className?: string;
  hideHeader?: boolean;
  onSuccess?: () => void;
}

interface FormState {
  fullName: string;
  mobile: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  kids6to12: string;
  kids0to5: string;
  rooms: string;
  preferredRoom: string;
  specialRequest: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  rooms?: string;
}

interface TypeOrSelectInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: number[];
  unitSingle?: string;
  unitPlural?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  variant?: "hero" | "card" | "page";
  theme?: "dark" | "light";
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
  variant = "hero",
  theme = "dark",
}: TypeOrSelectInputProps) {
  const isDark = theme === "dark";
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
        className={`h-11 sm:h-12 w-full min-w-0 max-w-full ${
          isDark
            ? "bg-[#031410]/80 border-white/15 text-white focus:border-[#D6AD68]"
            : "bg-white border-[#E6DED1] text-[#092C24] focus:border-[#D6AD68]"
        } border rounded-xl pl-3 pr-12 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      />

      {/* Suffix label & dropdown chevron on the right */}
      <div className="absolute right-0 inset-y-0 flex items-center pr-2.5 pointer-events-none gap-1">
        {unitText && (
          <span className={`text-[11px] font-normal truncate max-w-[42px] ${isDark ? "text-white/60" : "text-[#77766E]"}`}>
            {unitText}
          </span>
        )}
        <FiChevronDown
          className={`w-3.5 h-3.5 shrink-0 ${
            isDark ? "text-[#D6AD68]" : "text-[#77766E]"
          }`}
        />
      </div>

      {/* Clickable select overlay over the chevron & unit area */}
      <select
        aria-label={`Select ${unitPlural || name}`}
        value={options.includes(Number(value)) ? value : ""}
        onChange={(e) => {
          if (e.target.value !== "") onChange(e.target.value);
        }}
        className="absolute right-0 inset-y-0 w-16 opacity-0 cursor-pointer"
        title="Click to select from list or type number directly"
      >
        <option value="" disabled>
          Select {unitPlural || name}
        </option>
        {options.map((num) => (
          <option
            key={num}
            value={num}
            className={isDark ? "bg-[#061F1A] text-white" : "bg-white text-[#092C24]"}
          >
            {num} {unitSingle ? (num === 1 ? unitSingle : unitPlural) : ""}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function BookingForm({
  initialRoom = "",
  variant = "hero",
  className = "",
  hideHeader = false,
  onSuccess,
}: BookingFormProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobile: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    kids6to12: "0",
    kids0to5: "0",
    rooms: "1",
    preferredRoom: initialRoom || "",
    specialRequest: "",
  });

  const [minDate, setMinDate] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Set initial dates inside useEffect to satisfy Next.js 16 prerender checks
  useEffect(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    const nextDay = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    setMinDate(todayStr);
    setFormData((prev) => ({
      ...prev,
      checkIn: prev.checkIn || todayStr,
      checkOut: prev.checkOut || nextDay,
    }));
  }, []);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name";
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    if (!formData.mobile.trim()) {
      errs.mobile = "Please enter your mobile number";
    } else if (cleanMobile.length < 8 || cleanMobile.length > 15) {
      errs.mobile = "Please enter a valid mobile number";
    }

    if (!formData.checkIn) {
      errs.checkIn = "Select check-in";
    }

    if (!formData.checkOut) {
      errs.checkOut = "Select check-out";
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = "Check-out must be after check-in";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleAdultsChange = (val: string) => {
    setFormData((prev) => ({ ...prev, adults: val }));
    if (errors.adults) setErrors((prev) => ({ ...prev, adults: undefined }));
  };

  const handleRoomsChange = (val: string) => {
    setFormData((prev) => ({ ...prev, rooms: val }));
  };

  const handleKids6to12Change = (val: string) => {
    setFormData((prev) => ({ ...prev, kids6to12: val }));
  };

  const handleKids0to5Change = (val: string) => {
    setFormData((prev) => ({ ...prev, kids0to5: val }));
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const roomName =
      roomsData.find((r) => r.slug === formData.preferredRoom || r.name === formData.preferredRoom)?.name ||
      formData.preferredRoom ||
      "Any Available Room";

    const lines: string[] = [
      "*Enquiry*",
      `Name : ${formData.fullName.trim()}`,
      `Number: ${formData.mobile.trim()}`,
      `Check In Date: ${formatDate(formData.checkIn)}`,
      `Check Out Date: ${formatDate(formData.checkOut)}`,
      `Number of Adults[12y above]: ${formData.adults}`,
      `Number of kids 6-12: ${formData.kids6to12}`,
      `Kids 0-5: ${formData.kids0to5}`,
      `No of Rooms: ${formData.rooms}`,
    ];

    if (roomName && roomName !== "Any Available Room") {
      lines.push(`Preferred Room: ${roomName}`);
    }
    if (formData.specialRequest.trim()) {
      lines.push(`Special Request: ${formData.specialRequest.trim()}`);
    }

    const message = lines.join("\n");
    const url = buildWhatsAppUrl(message);

    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = url;
    }

    setIsSubmitting(false);
    setShowSuccessModal(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className={`relative ${className}`}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`w-full transition-all duration-300 overflow-hidden ${
          variant === "hero"
            ? "bg-[#061F1A]/85 backdrop-blur-md p-3.5 sm:p-4 md:p-5 rounded-2xl shadow-2xl border border-[#D6AD68]/30"
            : variant === "card"
            ? hideHeader
              ? "bg-[#031713]/85 backdrop-blur-sm p-3.5 sm:p-6 md:p-8 rounded-2xl border border-[#D6AD68]/25 shadow-xl"
              : "bg-[#061F1A] text-white p-4 sm:p-8 rounded-2xl border border-[#D6AD68]/30 shadow-xl"
            : "bg-[#092C24] text-white p-5 sm:p-10 rounded-2xl border border-[#D6AD68]/35 shadow-2xl"
        }`}
      >
        {!hideHeader && variant !== "hero" && (
          <div className="mb-6 pb-4 border-b border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D6AD68]">
              Reserve Your Forest Stay
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mt-1">
              WhatsApp Booking Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
              Direct enquiry with our resort desk. We will confirm room availability and details instantly.
            </p>
          </div>
        )}

        {/* Row 1: Check In, Check Out, Adults, Rooms (2 cols on mobile, 4 cols on md+) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-3 sm:mb-4 w-full min-w-0">
          {/* Check-in Date */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="checkIn"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Check In</span>
            </label>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              min={minDate}
              value={formData.checkIn}
              onChange={handleChange}
              className={`h-11 sm:h-12 w-full min-w-0 max-w-full bg-[#031410]/80 border ${
                errors.checkIn ? "border-red-400 focus:ring-red-400" : "border-white/15 focus:border-[#D6AD68]"
              } rounded-xl px-2.5 sm:px-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [color-scheme:dark] [appearance:none] [-webkit-appearance:none]`}
              required
            />
            {errors.checkIn && (
              <span className="text-red-300 text-[10px] mt-1 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5 shrink-0" /> {errors.checkIn}
              </span>
            )}
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="checkOut"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Check Out</span>
            </label>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              min={formData.checkIn || minDate}
              value={formData.checkOut}
              onChange={handleChange}
              className={`h-11 sm:h-12 w-full min-w-0 max-w-full bg-[#031410]/80 border ${
                errors.checkOut ? "border-red-400 focus:ring-red-400" : "border-white/15 focus:border-[#D6AD68]"
              } rounded-xl px-2.5 sm:px-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [color-scheme:dark] [appearance:none] [-webkit-appearance:none]`}
              required
            />
            {errors.checkOut && (
              <span className="text-red-300 text-[10px] mt-1 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5 shrink-0" /> {errors.checkOut}
              </span>
            )}
          </div>

          {/* Adults */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="adults"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Adults (12y+)</span>
            </label>
            <TypeOrSelectInput
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleAdultsChange}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20]}
              unitSingle="Adult"
              unitPlural="Adults"
              min={1}
              max={50}
              placeholder="1"
              variant={variant}
              theme="dark"
            />
          </div>

          {/* No of Rooms */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="rooms"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiHome className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">No. of Rooms</span>
            </label>
            <TypeOrSelectInput
              id="rooms"
              name="rooms"
              value={formData.rooms}
              onChange={handleRoomsChange}
              options={[1, 2, 3, 4, 5, 6, 8, 10]}
              unitSingle="Room"
              unitPlural="Rooms"
              min={1}
              max={20}
              placeholder="1"
              variant={variant}
              theme="dark"
            />
          </div>
        </div>

        {/* Row 2: Kids 6-12, Kids 0-5, Room Type (spans 2 cols on mobile and desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-3 sm:mb-4 w-full min-w-0">
          {/* Kids 6-12 */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="kids6to12"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Kids (6-12 Yrs)</span>
            </label>
            <TypeOrSelectInput
              id="kids6to12"
              name="kids6to12"
              value={formData.kids6to12}
              onChange={handleKids6to12Change}
              options={[0, 1, 2, 3, 4, 5, 6, 8]}
              unitSingle="Kid"
              unitPlural="Kids"
              min={0}
              max={20}
              placeholder="0"
              variant={variant}
              theme="dark"
            />
          </div>

          {/* Kids 0-5 */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="kids0to5"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Kids (0-5 Yrs)</span>
            </label>
            <TypeOrSelectInput
              id="kids0to5"
              name="kids0to5"
              value={formData.kids0to5}
              onChange={handleKids0to5Change}
              options={[0, 1, 2, 3, 4, 5, 6, 8]}
              unitSingle="Kid"
              unitPlural="Kids"
              min={0}
              max={20}
              placeholder="0"
              variant={variant}
              theme="dark"
            />
          </div>

          {/* Preferred Room Type - spans 2 cols */}
          <div className="flex flex-col col-span-2 min-w-0 w-full">
            <label
              htmlFor="preferredRoom"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiHome className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span className="truncate">Room Type (Optional)</span>
            </label>
            <select
              id="preferredRoom"
              name="preferredRoom"
              value={formData.preferredRoom}
              onChange={handleChange}
              className="h-11 sm:h-12 w-full min-w-0 max-w-full bg-[#031410]/80 border border-white/15 focus:border-[#D6AD68] rounded-xl px-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all cursor-pointer [color-scheme:dark]"
            >
              <option value="" className="bg-[#061F1A] text-white">
                Any Available Room
              </option>
              {roomsData.map((room) => (
                <option key={room.id} value={room.slug} className="bg-[#061F1A] text-white">
                  {room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Guest Name and Mobile Number (1 col each on mobile, 2 cols each on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 w-full min-w-0">
          {/* Guest Name */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="fullName"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiUser className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span>Full Name</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className={`h-11 sm:h-12 w-full bg-[#031410]/80 border ${
                errors.fullName ? "border-red-400 focus:ring-red-400" : "border-white/15 focus:border-[#D6AD68]"
              } rounded-xl px-3.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all`}
              required
            />
            {errors.fullName && (
              <span className="text-red-300 text-[10px] mt-1 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5 shrink-0" /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col min-w-0 w-full">
            <label
              htmlFor="mobile"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiPhone className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span>WhatsApp / Contact Number</span>
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.mobile}
              onChange={handleChange}
              className={`h-11 sm:h-12 w-full min-w-0 max-w-full bg-[#031410]/80 border ${
                errors.mobile ? "border-red-400 focus:ring-red-400" : "border-white/15 focus:border-[#D6AD68]"
              } rounded-xl px-3.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all`}
              required
            />
            {errors.mobile && (
              <span className="text-red-300 text-[10px] mt-1 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5 shrink-0" /> {errors.mobile}
              </span>
            )}
          </div>
        </div>

        {/* Row 4: Special Request */}
        {variant !== "hero" && (
          <div className="mb-4 min-w-0 w-full">
            <label
              htmlFor="specialRequest"
              className="h-5 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5]/85 mb-1.5"
            >
              <FiMessageSquare className="w-3.5 h-3.5 text-[#D6AD68] shrink-0" />
              <span>Special Requests or Notes (Optional)</span>
            </label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              rows={2}
              placeholder="e.g. Early check-in, anniversary setup, dietary preferences..."
              value={formData.specialRequest}
              onChange={handleChange}
              className="w-full bg-[#031410]/80 border border-white/15 focus:border-[#D6AD68] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all resize-none"
            />
          </div>
        )}

        {/* Row 5: Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 sm:h-14 w-full flex items-center justify-center gap-2.5 rounded-xl font-bold uppercase tracking-wider text-[#061F1A] bg-gradient-to-r from-[#E8BD78] via-[#E2B36B] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-lg shadow-[#D6AD68]/15 hover:shadow-[#D6AD68]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer text-xs sm:text-sm md:text-base"
          >
            <FaWhatsapp className="w-5 h-5 text-[#061F1A] group-hover:scale-110 transition-transform" />
            <span>Check Availability on WhatsApp</span>
            <FiArrowRight className="w-4 h-4 text-[#061F1A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>

      {/* Confirmation feedback banner */}
      {showSuccessModal && (
        <div className="mt-4 p-4 rounded-xl bg-[#203B31] border border-[#25D366]/40 text-white flex items-start gap-3 shadow-lg">
          <FiCheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-semibold text-white">Opening WhatsApp...</span>
            <p className="text-white/80 mt-0.5 font-light">
              Your booking enquiry has been prepared for {resortConfig.name}. If WhatsApp did not open automatically,{" "}
              <a
                href={buildWhatsAppUrl(
                  `*Enquiry*\nName : ${formData.fullName}\nNumber: ${formData.mobile}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#E8BD78] font-medium"
              >
                click here to open chat
              </a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
