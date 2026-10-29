"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiUser,
  FiPhone,
  FiMessageSquare,
  FiCalendar,
  FiUsers,
  FiArrowRight,
  FiChevronDown,
  FiHome,
} from "react-icons/fi";
import { resortConfig, openDirectWhatsApp } from "@/config/resort";

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
  theme = "light",
}: TypeOrSelectInputProps) {
  const isDark = theme === "dark";
  const numVal = parseInt(value, 10);
  const unitText = !isNaN(numVal) && numVal === 1 ? (unitSingle || unitPlural) : (unitPlural || unitSingle);

  return (
    <div className="relative flex items-center w-full">
      <input
        type="number"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${
          isDark
            ? "bg-[#061F1A]/80 border-white/15 text-white focus:border-[#D6AD68]"
            : "bg-[#FAF8F5] border-[#E6DED1] text-[#092C24] focus:border-[#D6AD68]"
        } border rounded-xl pl-3 pr-16 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#D6AD68] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      />

      {/* Suffix label & dropdown chevron on the right */}
      <div className="absolute right-0 inset-y-0 flex items-center pr-2.5 pointer-events-none gap-1">
        {unitText && (
          <span className={`text-[11px] font-normal truncate ${isDark ? "text-white/60" : "text-[#77766E]"}`}>
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
        className="absolute right-0 inset-y-0 w-20 opacity-0 cursor-pointer"
        title="Click to select from list or type number directly on the left"
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

export default function ContactEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    kids6to12: "0",
    kids0to5: "0",
    rooms: "1",
    message: "",
  });

  const [minDate, setMinDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 8) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    if (!validate()) return;

    const lines: string[] = [
      "*Enquiry*",
      `Name : ${formData.name.trim()}`,
      `Number: ${formData.mobile.trim()}`,
      `Check In Date: ${formatDate(formData.checkIn)}`,
      `Check Out Date: ${formatDate(formData.checkOut)}`,
      `Number of Adults[12y above]: ${formData.adults}`,
      `Number of kids 6-12: ${formData.kids6to12}`,
      `Kids 0-5: ${formData.kids0to5}`,
      `No of Rooms: ${formData.rooms}`,
    ];

    if (formData.message.trim()) {
      lines.push(`Message: ${formData.message.trim()}`);
    }

    const formattedMessage = lines.join("\n");
    openDirectWhatsApp(formattedMessage);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E6DED1] shadow-sm"
      noValidate
    >
      <div className="space-y-4 sm:space-y-5">
        <div className="border-b border-[#E6DED1] pb-3 mb-1">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-1">
            RESERVATION & ENQUIRY
          </span>
          <h3 className="font-serif-luxury text-2xl text-[#092C24] font-normal">
            Book Your Stay / Get in Touch
          </h3>
        </div>

        {/* Name & Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiUser className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Name :</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="Enter your name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors"
              required
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Number */}
          <div>
            <label
              htmlFor="contact-mobile"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiPhone className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Number :</span>
            </label>
            <input
              id="contact-mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: "" });
              }}
              placeholder="Enter your number"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors"
              required
            />
            {errors.mobile && (
              <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* Check In Date & Check Out Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor="contact-checkin"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Check In Date</span>
            </label>
            <input
              id="contact-checkin"
              type="date"
              min={minDate}
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-xs sm:text-sm text-[#092C24]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-checkout"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiCalendar className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Check Out Date</span>
            </label>
            <input
              id="contact-checkout"
              type="date"
              min={formData.checkIn || minDate}
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-xs sm:text-sm text-[#092C24]"
            />
          </div>
        </div>

        {/* Number of Adults[12y above] & No of Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor="contact-adults"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Number of Adults [12y above]</span>
            </label>
            <TypeOrSelectInput
              id="contact-adults"
              name="adults"
              value={formData.adults}
              onChange={(val) => setFormData((prev) => ({ ...prev, adults: val }))}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20]}
              unitSingle="Adult"
              unitPlural="Adults"
              min={1}
              max={50}
              placeholder="1"
              theme="light"
            />
          </div>

          <div>
            <label
              htmlFor="contact-rooms"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiHome className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>No of Rooms</span>
            </label>
            <TypeOrSelectInput
              id="contact-rooms"
              name="rooms"
              value={formData.rooms}
              onChange={(val) => setFormData((prev) => ({ ...prev, rooms: val }))}
              options={[1, 2, 3, 4, 5, 6, 8, 10]}
              unitSingle="Room"
              unitPlural="Rooms"
              min={1}
              max={20}
              placeholder="1"
              theme="light"
            />
          </div>
        </div>

        {/* Number of kids 6-12 & Kids 0-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor="contact-kids-6-12"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Number of kids 6-12</span>
            </label>
            <TypeOrSelectInput
              id="contact-kids-6-12"
              name="kids6to12"
              value={formData.kids6to12}
              onChange={(val) => setFormData((prev) => ({ ...prev, kids6to12: val }))}
              options={[0, 1, 2, 3, 4, 5, 6, 8]}
              unitSingle="Kid"
              unitPlural="Kids"
              min={0}
              max={20}
              placeholder="0"
              theme="light"
            />
          </div>

          <div>
            <label
              htmlFor="contact-kids-0-5"
              className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
            >
              <FiUsers className="w-3.5 h-3.5 text-[#D6AD68]" />
              <span>Kids 0-5</span>
            </label>
            <TypeOrSelectInput
              id="contact-kids-0-5"
              name="kids0to5"
              value={formData.kids0to5}
              onChange={(val) => setFormData((prev) => ({ ...prev, kids0to5: val }))}
              options={[0, 1, 2, 3, 4, 5, 6, 8]}
              unitSingle="Kid"
              unitPlural="Kids"
              min={0}
              max={20}
              placeholder="0"
              theme="light"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#092C24] mb-1.5 flex items-center gap-1"
          >
            <FiMessageSquare className="w-3.5 h-3.5 text-[#D6AD68]" />
            <span>Special Requests / Message (Optional)</span>
          </label>
          <textarea
            id="contact-message"
            rows={3}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            placeholder="e.g. Preferred room type, dietary requirements, early check-in..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors resize-none"
          />
        </div>

        {/* Send on WhatsApp Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4 text-[#061F1A]" />
            <span>Send Enquiry on WhatsApp</span>
            <FiArrowRight className="w-4 h-4 text-[#061F1A]" />
          </button>
        </div>
      </div>
    </form>
  );
}
