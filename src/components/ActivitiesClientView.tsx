"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  FiClock,
  FiMapPin,
  FiCheck,
  FiX,
  FiInfo,
  FiUsers,
  FiChevronDown,
  FiSearch,
  FiTag,
} from "react-icons/fi";
import { FaWhatsapp, FaFire, FaMusic, FaGamepad } from "react-icons/fa";
import {
  LuFlame,
  LuCompass,
  LuMountain,
  LuSparkles,
  LuDroplets,
  LuTrees,
  LuWaves,
} from "react-icons/lu";
import {
  activitiesData,
  activityCategories,
  ActivityItem,
  ActivityCategory,
} from "@/data/activities";
import { buildWhatsAppUrl, openDirectWhatsApp } from "@/config/resort";

const categoryIcons: Record<string, React.ReactNode> = {
  All: <LuSparkles className="w-4 h-4" />,
  "Wellness & Leisure": <LuDroplets className="w-4 h-4" />,
  "Nature & Adventure": <LuMountain className="w-4 h-4" />,
  "Culinary & Evenings": <LuFlame className="w-4 h-4" />,
  "Resort Experiences": <LuTrees className="w-4 h-4" />,
};

// 6 Key Headline Shortcuts for instant navigation
const headlineHighlights = [
  { id: "swimming-pool", label: "Swimming Pool", icon: <LuWaves className="w-3.5 h-3.5" />, tag: "Infinity Pool" },
  { id: "campfire-with-music", label: "Campfire with Music", icon: <FaMusic className="w-3.5 h-3.5" />, tag: "Acoustic Night" },
  { id: "indoor-games", label: "Indoor Games", icon: <FaGamepad className="w-3.5 h-3.5" />, tag: "Atrium Lounge" },
  { id: "jeep-safari", label: "Jeep Safari", icon: <LuMountain className="w-3.5 h-3.5" />, tag: "4x4 Adventure" },
  { id: "plantation-walk", label: "Plantation Walk", icon: <LuTrees className="w-3.5 h-3.5" />, tag: "Guided Estate" },
  { id: "private-digital-glass-bridge", label: "Private Digital Glass Bridge", icon: <LuCompass className="w-3.5 h-3.5" />, tag: "Paid", isPaid: true },
];

const timelineSchedule = [
  {
    time: "07:00 AM – 08:30 AM",
    title: "Guided Tea & Spice Plantation Walk",
    description: "Stroll along dew-drenched tea slopes, discover fragrant spices, and learn tea harvesting.",
    icon: <LuTrees className="w-5 h-5 text-[#D6AD68]" />,
    location: "Adjoining Tea Estates",
    tag: "Complimentary Guided",
  },
  {
    time: "10:00 AM – 01:00 PM",
    title: "Hillside Infinity Swimming Pool",
    description: "Invigorating swim overlooking panoramic forest canopies and misty mountain ridges.",
    icon: <LuWaves className="w-5 h-5 text-[#D6AD68]" />,
    location: "Hillside Pool Deck & Terrace",
    tag: "Complimentary Pool",
  },
  {
    time: "02:30 PM – 04:30 PM",
    title: "4x4 Mountain Jeep Safari",
    description: "Thrilling off-road mountain trail through rugged tracks, misty hills, and scenic forest viewpoints.",
    icon: <LuMountain className="w-5 h-5 text-[#D6AD68]" />,
    location: "Attamala Trails & Ridges",
    tag: "Complimentary Experience",
  },
  {
    time: "04:30 PM – 06:00 PM",
    title: "Private Digital Glass Bridge Skywalk",
    description: "Breathtaking cantilevered digital glass bridge skywalk experience suspended high over emerald gorges.",
    icon: <LuCompass className="w-5 h-5 text-[#D6AD68]" />,
    location: "Attamala / Glass Bridge Deck",
    tag: "Paid Activity",
  },
  {
    time: "07:30 PM – 10:00 PM",
    title: "Campfire with Music",
    description: "Unwind around the crackling natural stone fire pit with ambient acoustic tunes and cool mountain air.",
    icon: <FaFire className="w-5 h-5 text-[#E8BD78]" />,
    location: "Open-Air Campfire Deck",
    tag: "Complimentary Nightly",
  },
  {
    time: "09:30 PM – 10:30 PM",
    title: "Indoor Games Lounge Leisure",
    description: "Wind down the day with friendly Carrom matches, Table Tennis, Chess, and family board games.",
    icon: <FaGamepad className="w-5 h-5 text-[#D6AD68]" />,
    location: "Cathedral Timber Atrium",
    tag: "All-Weather Recreation",
  },
];

const faqs = [
  {
    question: "Is the Private Digital Glass Bridge included or a Paid Activity?",
    answer:
      "The Private Digital Glass Bridge is a Paid Activity. Attraction entry tickets and private taxi transport are arranged on request through our resort travel desk with priority slots. All other resort activities are complimentary and included in your stay.",
  },
  {
    question: "Are the other activities like Swimming Pool, Campfire, Jeep Safari, Indoor Games, and Plantation Walk complimentary?",
    answer:
      "Yes! All other resort activities — Hillside Infinity Swimming Pool, Campfire with Music, Indoor Games Lounge, 4x4 Mountain Jeep Safari, and Guided Plantation Walk — are complimentary for in-house guests and included in your stay. Only the Glass Bridge is a paid activity.",
  },
  {
    question: "What are the timings and features of the Hillside Infinity Swimming Pool?",
    answer:
      "Our adult hillside infinity swimming pool is open daily from 07:00 AM to 06:30 PM, featuring multi-tier water filtration, comfortable poolside sun loungers, fresh towels, and panoramic mountain views.",
  },
  {
    question: "Is the Campfire with Music hosted every night?",
    answer:
      "Yes, weather permitting! Our natural stone fire pit is lit nightly from 07:30 PM to 10:00 PM, accompanied by ambient acoustic music and soothing playlists. Compliments of the resort, hot Wayanad spiced tea is served around the fire.",
  },
  {
    question: "Which games are available in the Indoor Games Lounge?",
    answer:
      "Our soaring timber cathedral atrium houses tournament-grade Carrom boards, Table Tennis (Ping Pong), Foosball table, Chess boards, Scrabble, Monopoly, Uno, and a curated book library. All indoor games are complimentary for in-house guests.",
  },
  {
    question: "How do we arrange the 4x4 Mountain Jeep Safari and Plantation Walk?",
    answer:
      "Both activities are arranged directly by our front desk team. Plantation walks depart directly from the resort garden terraces, and 4x4 mountain jeep safaris can be reserved with our front desk upon check-in or via WhatsApp.",
  },
];

export default function ActivitiesClientView() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>("All");
  const [inclusionFilter, setInclusionFilter] = useState<"all" | "complimentary" | "paid">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredActivities = useMemo(() => {
    return activitiesData.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      // Inclusion match
      let matchesInclusion = true;
      if (inclusionFilter === "complimentary") {
        matchesInclusion = item.includedInStay === true && !item.isPaid;
      } else if (inclusionFilter === "paid") {
        matchesInclusion = item.isPaid === true || !item.includedInStay;
      }

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.highlights.some((h) => h.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesInclusion && matchesSearch;
    });
  }, [selectedCategory, inclusionFilter, searchQuery]);

  const scrollToActivity = (id: string) => {
    const el = document.getElementById(`activity-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* 1. Header Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#061F1A] text-white overflow-hidden border-b border-[#D6AD68]/20">
        {/* Background Image with Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/activities/aaranya-glass-bridge.webp"
            alt="Activities & Adventures at Aaranya Misty Valley Resort Wayanad"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-35 brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061F1A] via-[#061F1A]/85 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061F1A]/60 to-[#061F1A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D6AD68]/30 mb-5"
          >
            <LuSparkles className="w-3.5 h-3.5 text-[#E8BD78]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#E8BD78]">
              Resort Activities & Nature Adventures
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] max-w-4xl mx-auto leading-[1.12]"
          >
            Unforgettable Resort Activities & Nature Escapes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-[#FAF8F5]/85 max-w-3xl mx-auto leading-relaxed font-light"
          >
            From the hillside infinity swimming pool to starlit campfires with acoustic music,
            indoor games, thrilling 4x4 mountain jeep safari, guided plantation walks, and the private digital glass bridge skywalk.
          </motion.p>

          {/* 7 Headline Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto"
          >
            {headlineHighlights.map((hl) => (
              <button
                key={hl.id}
                onClick={() => scrollToActivity(hl.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all backdrop-blur-sm border ${
                  hl.isPaid
                    ? "bg-[#D6AD68]/20 border-[#E8BD78] text-[#E8BD78] hover:bg-[#D6AD68]/30 shadow-sm"
                    : "bg-white/10 border-white/20 text-[#FAF8F5] hover:bg-white/20"
                }`}
              >
                <span>{hl.icon}</span>
                <span>{hl.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    hl.isPaid ? "bg-[#E8BD78] text-[#061F1A] font-bold uppercase" : "bg-white/15 text-white/90"
                  }`}
                >
                  {hl.tag}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Experience Highlights Strip */}
      <section className="py-8 bg-[#092C24] text-white border-b border-[#D6AD68]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E8BD78]">
                Infinity Pool
              </span>
              <p className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 font-medium">
                Panoramic Valley Views
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E8BD78]">
                Nightly
              </span>
              <p className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 font-medium">
                Campfire with Acoustic Music
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E8BD78]">
                All-Weather
              </span>
              <p className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 font-medium">
                Indoor Games Lounge
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E8BD78]">
                Skywalk
              </span>
              <p className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 font-medium">
                Private Digital Glass Bridge (Paid)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search, Filter & Activities Grid */}
      <section className="py-16 md:py-24 bg-[#F7F3EC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Controls Area */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
                  CURATED EXPERIENCES
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#092C24] font-normal tracking-tight">
                  Explore Activities & Adventures
                </h2>
              </div>

              {/* Instant Search input */}
              <div className="relative w-full md:w-72">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A68346]" />
                <input
                  type="text"
                  placeholder="Search pool, safari, music..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E6DED1] text-xs sm:text-sm text-[#092C24] placeholder-[#77766E] focus:outline-none focus:border-[#D6AD68] transition-colors shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills & Inclusion Filter */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E6DED1]">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {activityCategories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-[#092C24] text-[#E8BD78] shadow-md shadow-[#092C24]/10"
                          : "bg-white/80 hover:bg-white text-[#20231F] border border-[#E6DED1] hover:border-[#D6AD68]/50"
                      }`}
                    >
                      <span>{categoryIcons[cat]}</span>
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>

              {/* Inclusions Filter (Free vs Paid) */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E6DED1] text-xs">
                <button
                  onClick={() => setInclusionFilter("all")}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    inclusionFilter === "all" ? "bg-[#092C24] text-white" : "text-[#77766E] hover:text-[#092C24]"
                  }`}
                >
                  All ({activitiesData.length})
                </button>
                <button
                  onClick={() => setInclusionFilter("complimentary")}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    inclusionFilter === "complimentary"
                      ? "bg-[#092C24] text-[#E8BD78]"
                      : "text-[#77766E] hover:text-[#092C24]"
                  }`}
                >
                  Included in Stay ({activitiesData.filter(a => !a.isPaid).length})
                </button>
                <button
                  onClick={() => setInclusionFilter("paid")}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    inclusionFilter === "paid"
                      ? "bg-[#D6AD68] text-[#061F1A] font-semibold"
                      : "text-[#77766E] hover:text-[#092C24]"
                  }`}
                >
                  Paid Activities ({activitiesData.filter(a => a.isPaid).length})
                </button>
              </div>
            </div>
          </div>

          {/* Activities Cards Grid */}
          {filteredActivities.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E6DED1] p-8">
              <p className="text-base text-[#77766E]">No activities match your search or filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setInclusionFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-[#092C24] text-[#E8BD78]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredActivities.map((activity, idx) => (
                <motion.article
                  id={`activity-${activity.id}`}
                  key={activity.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-500 scroll-mt-28 ${
                    activity.isPaid
                      ? "border-[#D6AD68] shadow-lg ring-1 ring-[#D6AD68]/40"
                      : "border-[#E6DED1] shadow-sm hover:shadow-xl hover:border-[#D6AD68]/60"
                  }`}
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#061F1A]">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    {/* Top Left Badge */}
                    {activity.badge && (
                      <span
                        className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold shadow-md tracking-wide ${
                          activity.isPaid
                            ? "bg-[#D6AD68] text-[#061F1A] border border-[#F0CA8A]"
                            : "bg-[#092C24] text-[#E8BD78] border border-[#D6AD68]/40"
                        }`}
                      >
                        {activity.badge}
                      </span>
                    )}

                    {/* Top Right Inclusion / Paid Tag */}
                    <span
                      className={`absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold backdrop-blur-md ${
                        activity.isPaid
                          ? "bg-[#8C5D19]/90 text-white border border-[#E8BD78]/60 shadow-md"
                          : "bg-[#092C24]/85 text-[#E8BD78] border border-[#D6AD68]/40"
                      }`}
                    >
                      {activity.isPaid ? "Paid" : "Included in Stay"}
                    </span>

                    {/* Location Badge bottom left */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/95">
                      <div className="flex items-center gap-1.5 truncate">
                        <FiMapPin className="w-3.5 h-3.5 text-[#E8BD78] shrink-0" />
                        <span className="truncate drop-shadow-md">{activity.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#FAF8F5]/90 shrink-0">
                        <FiClock className="w-3 h-3 text-[#D6AD68]" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Category & Timing Details */}
                      <div className="flex items-center justify-between text-xs text-[#77766E] border-b border-[#E6DED1]/60 pb-2.5">
                        <span className="font-semibold text-[#A68346] uppercase tracking-wider text-[11px]">
                          {activity.category}
                        </span>
                        <span className="text-[11px] text-[#77766E] font-medium">
                          {activity.timings}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#092C24] font-medium group-hover:text-[#A68346] transition-colors leading-snug">
                        {activity.title}
                      </h3>

                      {/* Subtle Paid / Complimentary label directly underneath the title */}
                      {activity.isPaid ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FFF8EB] border border-[#E8BD78]/70 text-[10px] font-bold text-[#8C5D19] w-fit shadow-xs">
                          <FiTag className="w-2.5 h-2.5 shrink-0" />
                          <span>Paid</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F4F9F6] border border-emerald-200 text-[10px] font-medium text-emerald-800 w-fit">
                          <span>Included in Stay • Complimentary</span>
                        </div>
                      )}

                      {/* Short Description */}
                      <p className="text-sm text-[#77766E] font-light leading-relaxed line-clamp-3">
                        {activity.shortDescription}
                      </p>

                      {/* 3 Key Highlights */}
                      <ul className="space-y-1.5 pt-1 text-xs text-[#20231F]/85">
                        {activity.highlights.slice(0, 3).map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <FiCheck className="w-3.5 h-3.5 text-[#D6AD68] mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="pt-3 border-t border-[#E6DED1]/60 flex items-center justify-between gap-2.5">
                      <span className="text-[11px] font-semibold text-[#092C24]">
                        {activity.isPaid ? (
                          <span className="text-[#8C5D19] bg-[#FFF8EB] border border-[#E8BD78]/60 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            Paid
                          </span>
                        ) : (
                          <span className="text-emerald-800 text-[11px] font-medium">Complimentary</span>
                        )}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalActivity(activity)}
                          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-[#092C24] bg-[#F7F3EC] hover:bg-[#E6DED1] transition-colors"
                        >
                          <FiInfo className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </button>

                        <a
                          href={buildWhatsAppUrl(
                            `Hello Aaranya Resort, I would like to enquire about the "${activity.title}" activity.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            openDirectWhatsApp(
                              `Hello Aaranya Resort, I would like to enquire about the "${activity.title}" activity.`
                            );
                          }}
                          className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-sm transition-all"
                          aria-label={`Enquire about ${activity.title} on WhatsApp`}
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                          <span>Enquire</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Special Spotlight: Private Digital Glass Bridge (Paid Activity Callout) */}
      <section className="py-14 bg-gradient-to-r from-[#061F1A] via-[#092C24] to-[#061F1A] text-white relative overflow-hidden border-y border-[#D6AD68]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6AD68]/20 border border-[#E8BD78] text-xs font-semibold text-[#E8BD78]">
                <span>⭐ FEATURED EXCURSION</span>
                <span>•</span>
                <span>PAID ACTIVITY</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5]">
                Private Digital Glass Bridge Skywalk
              </h2>
              <p className="text-sm sm:text-base text-[#FAF8F5]/85 font-light leading-relaxed max-w-2xl">
                Experience Wayanad’s most thrilling attraction — walking high above misty tea canyons on a cantilevered
                transparent digital glass deck. Please note: <strong>This is a Paid Activity</strong> with entry permits and private cab transfers organized directly through Aaranya’s travel desk.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FAF8F5]/90">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <FiCheck className="w-3.5 h-3.5 text-[#E8BD78]" /> Priority Ticket Booking
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <FiCheck className="w-3.5 h-3.5 text-[#E8BD78]" /> Private 4x4 / Cab Transfer
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <FiCheck className="w-3.5 h-3.5 text-[#E8BD78]" /> 100 ft Valley Views
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-[#D6AD68]/30 text-xs text-[#FAF8F5]/80 w-full sm:w-auto">
                <p className="font-semibold text-[#E8BD78] mb-1">Pricing & Booking Note</p>
                <p>Paid Activity • Entry tickets & cab transfers arranged on request.</p>
              </div>
              <a
                href={buildWhatsAppUrl("Hello Aaranya Resort, I would like to book tickets and transport for the Private Digital Glass Bridge Visit.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openDirectWhatsApp("Hello Aaranya Resort, I would like to book tickets and transport for the Private Digital Glass Bridge Visit.");
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-lg transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Book Glass Bridge Passes on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. A Day at Aaranya - Curated Daily Itinerary Timeline */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E6DED1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
              YOUR DAY IN THE VALLEY
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#092C24] font-normal tracking-tight">
              A Typical Day of Wonder at Aaranya
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
              Experience the perfect rhythm of mountain magic: from morning plantation walks and afternoon swimming pool relaxation
              to thrilling 4x4 safaris, the glass bridge, and starlit campfire acoustic melodies.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {timelineSchedule.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-[#E6DED1] shadow-sm hover:shadow-md hover:border-[#D6AD68]/50 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#092C24]/5 border border-[#092C24]/10 flex items-center justify-center">
                    {slot.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#A68346] px-2.5 py-1 rounded-md bg-[#F7F3EC] border border-[#E6DED1]">
                    {slot.time}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <h3 className="font-serif-luxury text-xl font-medium text-[#092C24]">
                    {slot.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#77766E] font-light leading-relaxed">
                  {slot.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#A68346] font-medium border-t border-[#E6DED1]/60">
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="w-3 h-3" />
                    <span>{slot.location}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E6DED1]">
                    {slot.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="py-16 md:py-24 bg-[#F7F3EC] border-t border-[#E6DED1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A68346] block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#092C24] font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-white border border-[#E6DED1] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[#092C24] text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 text-[#D6AD68] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 pt-0 text-sm text-[#77766E] font-light leading-relaxed border-t border-gray-100"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Concierge Banner Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#061F1A] text-white border border-[#D6AD68]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif-luxury text-2xl text-[#E8BD78]">
                Need a Custom Experience or Group Tour?
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light max-w-lg">
                Speak directly with our on-ground host on WhatsApp to arrange private jeep trekking,
                glass bridge passes, or family pool celebrations.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl("Hello Aaranya Resort, I would like to plan custom activities for our upcoming stay.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openDirectWhatsApp("Hello Aaranya Resort, I would like to plan custom activities for our upcoming stay.");
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] hover:from-[#F0CA8A] hover:to-[#E8BD78] shadow-md shrink-0 transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 7. Detail Modal */}
      <AnimatePresence>
        {activeModalActivity && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveModalActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E6DED1] shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalActivity(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Close activity details"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full bg-[#061F1A]">
                <Image
                  src={activeModalActivity.image}
                  alt={activeModalActivity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 650px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E8BD78] text-[#061F1A] inline-block">
                      {activeModalActivity.category}
                    </span>
                    {activeModalActivity.isPaid && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#8C5D19] text-[#FAF8F5] inline-block border border-[#E8BD78]/40">
                        Paid Activity
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                    {activeModalActivity.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Notice banner for Paid items */}
                {activeModalActivity.isPaid && (
                  <div className="p-3.5 rounded-xl bg-[#FFF8EB] border border-[#E8BD78] text-xs text-[#8C5D19] flex items-start gap-2.5">
                    <FiTag className="w-4 h-4 mt-0.5 shrink-0 text-[#A68346]" />
                    <div>
                      <strong className="font-semibold block">Notice: Paid Experience</strong>
                      <span>
                        {activeModalActivity.paidNotice ||
                          "This activity requires additional charges for entry passes, transport, or special reservations."}
                      </span>
                    </div>
                  </div>
                )}

                {/* Meta details strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#F7F3EC] text-xs">
                  <div>
                    <span className="text-[#77766E] block text-[10px] uppercase font-semibold">
                      Timings
                    </span>
                    <span className="font-medium text-[#092C24]">
                      {activeModalActivity.timings}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#77766E] block text-[10px] uppercase font-semibold">
                      Location
                    </span>
                    <span className="font-medium text-[#092C24]">
                      {activeModalActivity.location}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[#77766E] block text-[10px] uppercase font-semibold">
                      Pricing / Inclusions
                    </span>
                    <span className="font-semibold text-[#A68346]">
                      {activeModalActivity.pricingNote}
                    </span>
                  </div>
                </div>

                {/* Detailed Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A68346] mb-2">
                    About the Experience
                  </h4>
                  <p className="text-sm text-[#77766E] font-light leading-relaxed">
                    {activeModalActivity.detailedDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A68346] mb-2.5">
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#20231F]/85">
                    {activeModalActivity.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-[#D6AD68] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitability */}
                <div className="flex items-center gap-2 text-xs text-[#77766E] pt-2 border-t border-[#E6DED1]">
                  <FiUsers className="w-4 h-4 text-[#D6AD68]" />
                  <span>
                    <strong>Suitable for:</strong> {activeModalActivity.suitableFor}
                  </span>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Aaranya Resort, I would like to enquire / book the "${activeModalActivity.title}" activity.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      openDirectWhatsApp(
                        `Hello Aaranya Resort, I would like to enquire / book the "${activeModalActivity.title}" activity.`
                      );
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#061F1A] bg-gradient-to-r from-[#E8BD78] to-[#D6AD68] shadow-md hover:brightness-105 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Enquire This Activity on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setActiveModalActivity(null)}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold text-[#77766E] hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
