"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowRight, FiTag } from "react-icons/fi";
import { activitiesData } from "@/data/activities";

export default function HomeActivitiesSection() {
  const signatureActivities = activitiesData;

  return (
    <section
      id="activities"
      className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E6DED1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-3"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block">
              RESORT EXPERIENCES & ADVENTURES
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#092C24] font-normal tracking-tight leading-[1.12]">
              Unforgettable Activities in the Valley
            </h2>
            <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
              Every day at Aaranya brings fresh excitement — whether swimming in the hillside infinity pool,
              gathering around musical campfires, enjoying indoor games, exploring in 4x4 jeeps, taking guided plantation walks, or walking the digital glass bridge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore All Activities</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* 7 Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {signatureActivities.map((act, idx) => {
            const isGlassBridge = act.isPaid || act.id === "digital-glass-bridge" || act.id === "private-digital-glass-bridge" || act.id === "private-glass-bridge";

            return (
              <motion.article
                key={act.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 transform-gpu ${
                  isGlassBridge
                    ? "border-[#D6AD68] shadow-md ring-1 ring-[#D6AD68]/30 sm:col-span-2 lg:col-span-1"
                    : "border-[#E6DED1] shadow-sm hover:shadow-xl hover:border-[#D6AD68]/60"
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#061F1A]">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  {/* Badge */}
                  {act.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-md ${
                        act.isPaid
                          ? "bg-[#D6AD68] text-[#061F1A] border border-[#F0CA8A]"
                          : "bg-[#E8BD78] text-[#061F1A]"
                      }`}
                    >
                      {act.badge}
                    </span>
                  )}

                  {/* Inclusion / Paid Tag */}
                  <span
                    className={`absolute top-3 right-3 px-2 py-0.5 rounded-lg text-[10px] font-semibold backdrop-blur-md ${
                      act.isPaid
                        ? "bg-[#8C5D19]/90 text-white border border-[#E8BD78]/60"
                        : "bg-[#092C24]/85 text-[#E8BD78] border border-[#D6AD68]/40"
                    }`}
                  >
                    {act.isPaid ? "Paid" : "Included in Stay"}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#77766E]">
                      <span className="font-semibold text-[#A68346] uppercase tracking-wider">
                        {act.category}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-lg text-[#092C24] font-medium group-hover:text-[#A68346] transition-colors line-clamp-1">
                      {act.title}
                    </h3>

                    {/* Subtle paid badge directly under title */}
                    {act.isPaid ? (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FFF8EB] border border-[#E8BD78]/60 text-[10px] font-bold text-[#8C5D19]">
                        <FiTag className="w-2.5 h-2.5" />
                        <span>Paid</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-800">
                        <span>Complimentary</span>
                      </div>
                    )}

                    <p className="text-xs text-[#77766E] font-light leading-relaxed line-clamp-2">
                      {act.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E6DED1]/60 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#092C24]">
                      {act.isPaid ? (
                        <span className="text-[#8C5D19] font-bold uppercase tracking-wider text-[10px]">Paid</span>
                      ) : (
                        <span className="text-emerald-800 text-[11px]">Complimentary</span>
                      )}
                    </span>
                    <Link
                      href="/activities"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#A68346] hover:text-[#092C24] transition-colors"
                    >
                      <span>Explore</span>
                      <FiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
