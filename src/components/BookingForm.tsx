"use client";

import React, { useState } from "react";
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
} from "react-icons/fi";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import { roomsData } from "@/data/rooms";

interface BookingFormProps {
  initialRoom?: string;
  variant?: "hero" | "card" | "page";
  className?: string;
  onSuccess?: () => void;
}

interface FormState {
  fullName: string;
  mobile: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  preferredRoom: string;
  specialRequest: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  children?: string;
}

export default function BookingForm({
  initialRoom = "",
  variant = "hero",
  className = "",
  onSuccess,
}: BookingFormProps) {
  const todayStr = "2026-10-28";
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobile: "",
    checkIn: "2026-10-29",
    checkOut: "2026-10-31",
    adults: "2",
    children: "0",
    preferredRoom: initialRoom || "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters";
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    if (!formData.mobile.trim()) {
      errs.mobile = "Please enter your mobile number";
    } else if (cleanMobile.length < 8 || cleanMobile.length > 15) {
      errs.mobile = "Please enter a valid 8-15 digit phone number";
    }

    if (!formData.checkIn) {
      errs.checkIn = "Please select check-in date";
    } else if (formData.checkIn < todayStr) {
      errs.checkIn = "Check-in cannot be in the past";
    }

    if (!formData.checkOut) {
      errs.checkOut = "Please select check-out date";
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = "Check-out must be after check-in date";
    }

    const adultsNum = parseInt(formData.adults, 10);
    if (isNaN(adultsNum) || adultsNum < 1) {
      errs.adults = "At least 1 adult required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build the formatted enquiry message
    const roomName =
      roomsData.find((r) => r.slug === formData.preferredRoom || r.name === formData.preferredRoom)?.name ||
      formData.preferredRoom ||
      "Any Available Room";

    const specialReqLine = formData.specialRequest.trim()
      ? `Special Request: ${formData.specialRequest.trim()}\n`
      : "";

    const message = `Hello ${resortConfig.name},

I would like to enquire about a stay.

Guest Name: ${formData.fullName.trim()}
Mobile: ${formData.mobile.trim()}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Adults: ${formData.adults}
Children: ${formData.children}
Preferred Room: ${roomName}
${specialReqLine}
Please confirm availability and booking details.

Thank you.`;

    const url = buildWhatsAppUrl(message);

    // Direct browser handoff to WhatsApp
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
        className={`w-full transition-all duration-300 ${
          variant === "hero"
            ? "bg-[#10251C]/80 backdrop-blur-md p-3.5 sm:p-4 md:p-5 rounded-xl shadow-2xl border border-[#C9A568]/35"
            : variant === "card"
            ? "bg-[#10251C] text-white p-6 sm:p-8 rounded-2xl border border-[#C9A568]/30 shadow-xl"
            : "bg-[#142E23] text-white p-6 sm:p-10 rounded-2xl border border-[#C9A568]/40 shadow-2xl"
        }`}
      >
        {variant !== "hero" && (
          <div className="mb-6 pb-4 border-b border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C9A568]">
              Reserve Your Forest Stay
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white mt-1">
              WhatsApp Booking Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Direct enquiry with our resort desk. We will confirm room availability and details instantly.
            </p>
          </div>
        )}

        {/* Top Grid: Dates and Guests */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 ${variant === "hero" ? "gap-2 sm:gap-2.5 mb-2" : "gap-3 sm:gap-4 mb-3 sm:mb-4"}`}>
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkIn"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiCalendar className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Check-in Date</span>
            </label>
            <div className="relative">
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                min={todayStr}
                value={formData.checkIn}
                onChange={handleChange}
                className={`w-full bg-[#0A1812]/75 border ${
                  errors.checkIn ? "border-red-400 focus:ring-red-400" : "border-white/20 focus:border-[#C9A568]"
                } ${variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"} text-white focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
                required
              />
            </div>
            {errors.checkIn && (
              <span className="text-red-300 text-[10px] mt-0.5 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5" /> {errors.checkIn}
              </span>
            )}
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkOut"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiCalendar className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Check-out Date</span>
            </label>
            <div className="relative">
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                min={formData.checkIn || todayStr}
                value={formData.checkOut}
                onChange={handleChange}
                className={`w-full bg-[#0A1812]/75 border ${
                  errors.checkOut ? "border-red-400 focus:ring-red-400" : "border-white/20 focus:border-[#C9A568]"
                } ${variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"} text-white focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
                required
              />
            </div>
            {errors.checkOut && (
              <span className="text-red-300 text-[10px] mt-0.5 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5" /> {errors.checkOut}
              </span>
            )}
          </div>

          {/* Adults Count */}
          <div className="flex flex-col">
            <label
              htmlFor="adults"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiUsers className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Adults</span>
            </label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className={`w-full bg-[#0A1812]/75 border border-white/20 focus:border-[#C9A568] ${
                variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"
              } text-white focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                <option key={num} value={num} className="bg-[#10251C] text-white">
                  {num} {num === 1 ? "Adult" : "Adults"}
                </option>
              ))}
            </select>
          </div>

          {/* Children Count */}
          <div className="flex flex-col">
            <label
              htmlFor="children"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiUsers className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Children</span>
            </label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className={`w-full bg-[#0A1812]/75 border border-white/20 focus:border-[#C9A568] ${
                variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"
              } text-white focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num} className="bg-[#10251C] text-white">
                  {num} {num === 1 ? "Child" : "Children"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Second Row: Guest Name, Mobile, Preferred Room */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${variant === "hero" ? "gap-2 sm:gap-2.5 mb-2.5" : "gap-3 sm:gap-4 mb-4"}`}>
          {/* Guest Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiUser className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Your Name</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full bg-[#0A1812]/75 border ${
                errors.fullName ? "border-red-400 focus:ring-red-400" : "border-white/20 focus:border-[#C9A568]"
              } ${variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"} text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
              required
            />
            {errors.fullName && (
              <span className="text-red-300 text-[10px] mt-0.5 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5" /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col">
            <label
              htmlFor="mobile"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiPhone className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Mobile Number</span>
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter your number (e.g. +91...)"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full bg-[#0A1812]/75 border ${
                errors.mobile ? "border-red-400 focus:ring-red-400" : "border-white/20 focus:border-[#C9A568]"
              } ${variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"} text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
              required
            />
            {errors.mobile && (
              <span className="text-red-300 text-[10px] mt-0.5 flex items-center gap-1">
                <FiAlertCircle className="w-2.5 h-2.5" /> {errors.mobile}
              </span>
            )}
          </div>

          {/* Preferred Room */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <label
              htmlFor="preferredRoom"
              className={`${variant === "hero" ? "text-[10px] mb-1" : "text-[11px] mb-1.5"} uppercase tracking-wider font-medium text-[#FAF8F5]/85 flex items-center gap-1`}
            >
              <FiHome className={`${variant === "hero" ? "w-3 h-3" : "w-3.5 h-3.5"} text-[#C9A568]`} />
              <span>Preferred Room (Optional)</span>
            </label>
            <select
              id="preferredRoom"
              name="preferredRoom"
              value={formData.preferredRoom}
              onChange={handleChange}
              className={`w-full bg-[#0A1812]/75 border border-white/20 focus:border-[#C9A568] ${
                variant === "hero" ? "rounded-md px-2.5 py-1.5 text-xs" : "rounded-lg px-3 py-2.5 text-sm"
              } text-white focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all`}
            >
              <option value="" className="bg-[#10251C] text-white">
                Select Room / Any Room
              </option>
              {roomsData.map((room) => (
                <option key={room.id} value={room.slug} className="bg-[#10251C] text-white">
                  {room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Optional Special Request (visible when in full variant or on focus) */}
        {variant !== "hero" && (
          <div className="mb-4">
            <label
              htmlFor="specialRequest"
              className="text-[11px] uppercase tracking-wider font-medium text-[#FAF8F5]/80 mb-1.5 flex items-center gap-1.5"
            >
              <FiMessageSquare className="w-3.5 h-3.5 text-[#C9A568]" />
              <span>Special Requests or Questions (Optional)</span>
            </label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              rows={2}
              placeholder="e.g. Early check-in, dietary preferences, extra bed..."
              value={formData.specialRequest}
              onChange={handleChange}
              className="w-full bg-[#0A1812]/70 border border-white/15 focus:border-[#C9A568] rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C9A568] transition-all resize-none"
            />
          </div>
        )}

        {/* Submit Button (WhatsApp Click-to-Chat) */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2.5 ${
              variant === "hero"
                ? "py-3 px-4 rounded-xl text-xs sm:text-sm tracking-wider"
                : "py-3.5 px-6 rounded-xl text-sm md:text-base tracking-wider"
            } font-bold uppercase text-[#071F1A] bg-[#E8BD78] hover:bg-[#DCA65E] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer`}
          >
            <FaWhatsapp className={`${variant === "hero" ? "w-4 h-4" : "w-5 h-5"} text-[#071F1A] group-hover:scale-110 transition-transform`} />
            <span>Book on WhatsApp</span>
            <FiArrowRight className={`${variant === "hero" ? "w-4 h-4" : "w-4 h-4"} text-[#071F1A] group-hover:translate-x-1 transition-transform`} />
          </button>
        </div>

        <p className={`${variant === "hero" ? "text-[9px] mt-2" : "text-[10px] mt-3"} text-white/50 text-center tracking-wide`}>
          Direct WhatsApp connection to Aaranya Front Desk. No advance card required online.
        </p>
      </form>

      {/* Confirmation feedback banner */}
      {showSuccessModal && (
        <div className="mt-4 p-4 rounded-xl bg-[#26382E] border border-[#25D366]/40 text-white flex items-start gap-3 shadow-lg">
          <FiCheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-semibold text-white">Opening WhatsApp...</span>
            <p className="text-white/80 mt-0.5">
              Your booking details have been prepared for {resortConfig.name}. If WhatsApp did not open automatically,{" "}
              <a
                href={buildWhatsAppUrl(
                  `Hello ${resortConfig.name}, I would like to enquire about a stay. Name: ${formData.fullName}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C9A568] font-medium"
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
