"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";
import { resortConfig } from "@/config/resort";

export default function ContactEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message or query";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = [
      "Hello AARANYA — Misty Valley Resort,",
      "",
      "I would like to get in touch.",
      "",
      `Your Name: ${formData.name}`,
      `Mobile Number: ${formData.mobile}`,
      `Message: ${formData.message}`,
      "",
      "Please respond when convenient.",
      "Thank you!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-black/5"
      noValidate
    >
      <div className="space-y-5">
        {/* Your Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#10251C] mb-2"
          >
            Your Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
              <FiUser className="w-4 h-4" />
            </div>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="Enter your name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 focus:border-[#C9A568] focus:ring-1 focus:ring-[#C9A568] text-sm text-[#10251C] placeholder:text-black/40 transition-colors"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="contact-mobile"
            className="block text-xs font-semibold uppercase tracking-wider text-[#10251C] mb-2"
          >
            Mobile Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
              <FiPhone className="w-4 h-4" />
            </div>
            <input
              id="contact-mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: "" });
              }}
              placeholder="Enter your number"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 focus:border-[#C9A568] focus:ring-1 focus:ring-[#C9A568] text-sm text-[#10251C] placeholder:text-black/40 transition-colors"
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#10251C] mb-2"
          >
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
              <FiMessageSquare className="w-4 h-4" />
            </div>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="How can we help you?"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 focus:border-[#C9A568] focus:ring-1 focus:ring-[#C9A568] text-sm text-[#10251C] placeholder:text-black/40 transition-colors resize-none"
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Send on WhatsApp Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071F1A] bg-[#E8BD78] hover:bg-[#DCA65E] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4 text-[#071F1A]" />
            <span>Send on WhatsApp</span>
            <span className="text-base leading-none">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}
