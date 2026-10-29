"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiUser, FiPhone, FiMessageSquare, FiArrowRight } from "react-icons/fi";
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
    if (!cleanMobile || cleanMobile.length < 8) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = [
      `Hello ${resortConfig.name},`,
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
      className="bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E6DED1] shadow-sm"
      noValidate
    >
      <div className="space-y-4 sm:space-y-5">
        {/* Your Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium uppercase tracking-wider text-[#092C24] mb-1.5"
          >
            Your Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#77766E]">
              <FiUser className="w-4 h-4 text-[#D6AD68]" />
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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors"
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
            className="block text-xs font-medium uppercase tracking-wider text-[#092C24] mb-1.5"
          >
            Mobile Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#77766E]">
              <FiPhone className="w-4 h-4 text-[#D6AD68]" />
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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors"
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
            className="block text-xs font-medium uppercase tracking-wider text-[#092C24] mb-1.5"
          >
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-0 pl-3.5 flex items-center pointer-events-none text-[#77766E]">
              <FiMessageSquare className="w-4 h-4 text-[#D6AD68]" />
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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DED1] focus:border-[#D6AD68] focus:ring-1 focus:ring-[#D6AD68] text-sm text-[#092C24] placeholder:text-[#77766E]/60 transition-colors resize-none"
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Send on WhatsApp Button matching Reference Image */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4 text-[#061F1A]" />
            <span>Send on WhatsApp</span>
            <FiArrowRight className="w-4 h-4 text-[#061F1A]" />
          </button>
        </div>
      </div>
    </form>
  );
}
