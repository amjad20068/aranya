import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  LuTrees,
  LuMountain,
  LuBedDouble,
  LuCoffee,
  LuCompass,
  LuWind,
  LuHeart,
  LuSun,
  LuCheck,
} from "react-icons/lu";
import { resortConfig, buildWhatsAppUrl } from "@/config/resort";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services & Curated Experiences | Aaranya Misty Valley Resort",
  description:
    "Enjoy a range of thoughtful retreats crafted to make your stay comfortable, relaxing, and truly memorable at Aaranya Misty Valley Resort.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  FiCoffee: <LuCoffee className="w-5 h-5 text-[#A68346]" />,
  FiSun: <LuSun className="w-5 h-5 text-[#A68346]" />,
  FiCompass: <LuCompass className="w-5 h-5 text-[#A68346]" />,
  FiWind: <LuWind className="w-5 h-5 text-[#A68346]" />,
  FiHeart: <LuHeart className="w-5 h-5 text-[#A68346]" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F5F1E8]">
      {/* 1. Services Main View matching Reference Image (Bottom Middle Panel) */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description & Feature Strip */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-2">
                  OUR SERVICES
                </span>
                <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#10251C] font-normal tracking-tight leading-[1.12]">
                  Thoughtful<br />
                  <span className="italic font-light text-[#A68346]">Experiences</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#343B35]/85 leading-relaxed font-light">
                Enjoy a range of thoughtful retreats crafted to make your stay comfortable, relaxing, and truly memorable.
              </p>

              {/* Feature Strip matching Reference Panel */}
              <div className="pt-4 border-t border-black/10">
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 rounded-2xl bg-white/70 border border-black/5 shadow-sm divide-x divide-black/10">
                  <div className="flex flex-col items-center flex-1 px-2 text-center">
                    <LuTrees className="w-5 h-5 text-[#A68346] mb-1.5" />
                    <span className="text-[11px] font-semibold text-[#10251C]">Peaceful Location</span>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-2 text-center">
                    <LuMountain className="w-5 h-5 text-[#A68346] mb-1.5" />
                    <span className="text-[11px] font-semibold text-[#10251C]">Nature Views</span>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-2 text-center">
                    <LuBedDouble className="w-5 h-5 text-[#A68346] mb-1.5" />
                    <span className="text-[11px] font-semibold text-[#10251C]">Comfortable Rooms</span>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-2 text-center">
                    <LuCoffee className="w-5 h-5 text-[#A68346] mb-1.5" />
                    <span className="text-[11px] font-semibold text-[#10251C]">Relaxing Stay</span>
                  </div>
                </div>
              </div>

              {/* Direct Enquiry Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello Aaranya Resort, I would like to enquire about your services and stay experiences.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#071F1A] bg-[#E8BD78] hover:bg-[#DCA65E] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#071F1A]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="#experiences"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#10251C] border border-black/15 hover:bg-black/5 transition-all"
                >
                  <span>Explore All Services</span>
                </a>
              </div>
            </div>

            {/* Right Column: Large Nature-Facing Balcony Terrace Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A568]/30">
                <Image
                  src="/images/gallery/aaranya-valley-mist-balcony.webp"
                  alt="Aaranya Nature-Facing Balcony with Valley View"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Curated Retreat Experiences from servicesData */}
      <section id="experiences" className="py-16 bg-white/70 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68346] block mb-2">
              CURATED COMFORTS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#10251C] font-normal tracking-tight">
              Signature Experiences & Amenities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#343B35]/80 leading-relaxed font-light">
              Every detail at Aaranya is tuned to the natural surroundings—from fresh mountain morning dining to tranquil sunset viewing terraces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const iconNode = serviceIcons[service.iconName] || <LuCoffee className="w-5 h-5 text-[#A68346]" />;
              const whatsappUrl = buildWhatsAppUrl(
                `Hello Aaranya Resort,\n\nI would like to enquire about: ${service.title} (${service.category}).\n\nPlease share details and availability.\n\nThank you!`
              );

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:border-[#C9A568]/40 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-[#10251C]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-[#FAF8F5] border border-white/10">
                        {service.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-black/5 flex items-center justify-center shrink-0">
                          {iconNode}
                        </div>
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10251C]">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#343B35]/80 leading-relaxed mb-4">
                        {service.detailedDescription}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-black/5">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#343B35]/85">
                            <LuCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom WhatsApp action */}
                  <div className="p-6 pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#10251C] bg-[#FAF8F5] hover:bg-[#C9A568] hover:text-[#10251C] border border-black/10 hover:border-[#C9A568] transition-all shadow-sm"
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#16A34A] group-hover:text-[#10251C]" />
                      <span>Enquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom WhatsApp banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#10251C] text-white text-center border border-[#C9A568]/30">
            <div className="max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E0C087]">
                Connect with Front Desk
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mt-2">
                Plan Your Stay Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-2 leading-relaxed">
                Our front desk team is always ready on WhatsApp to share local guides, meal arrangements, and room choices.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${resortConfig.whatsappNumber}?text=${encodeURIComponent("Hello Aaranya Resort, I would like to enquire about your services and book a stay.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#10251C] bg-[#C9A568] hover:bg-[#E0C087] transition-all shadow-md"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <span>Explore Rooms</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
