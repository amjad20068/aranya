export interface ActivityItem {
  id: string;
  slug: string;
  title: string;
  category: "Resort Experiences" | "Nature & Adventure" | "Wellness & Leisure" | "Culinary & Evenings";
  shortDescription: string;
  detailedDescription: string;
  image: string;
  timings?: string;
  duration?: string;
  location?: string;
  suitableFor: string;
  includedInStay: boolean;
  isPaid?: boolean;
  paidNotice?: string;
  pricingNote: string;
  badge?: string;
  highlights: string[];
}

export const activityCategories = [
  "All",
  "Wellness & Leisure",
  "Nature & Adventure",
  "Culinary & Evenings",
  "Resort Experiences",
] as const;

export type ActivityCategory = (typeof activityCategories)[number];

export const activitiesData: ActivityItem[] = [
  // 1. Swimming Pool
  {
    id: "swimming-pool",
    slug: "swimming-pool",
    title: "Hillside Infinity Swimming Pool",
    category: "Wellness & Leisure",
    shortDescription:
      "Crystal-clear hillside infinity pool looking directly onto dramatic misty mountain ridges and evergreen forest horizons.",
    detailedDescription:
      "Perched gracefully along the mountain slope with an unobstructed view of the Western Ghats, our adult infinity pool offers the sensation of floating high above the valley. Enjoy an invigorating morning swim as dawn mist clears from the peaks, or unwind on comfortable poolside loungers with fresh tropical juices.",
    image: "/images/activities/aaranya-swimming-pool.webp",
    suitableFor: "All In-House Guests & Adults",
    includedInStay: true,
    isPaid: false,
    pricingNote: "Complimentary for All Guests",
    badge: "Adult Infinity Pool",
    highlights: [
      "Unobstructed panoramic mountain horizon views while swimming",
      "Crystal-clear mountain-fresh water with multi-tier hygienic filtration",
      "Poolside sun loungers, shaded pergola deck, and fresh pool towels",
      "Calm adult swimming environment designed for relaxation and rejuvenation",
      "Magnificent sunset and golden hour photography vantage point",
    ],
  },

  // 2. Campfire with Music
  {
    id: "campfire-with-music",
    slug: "campfire-with-music",
    title: "Campfire with Music",
    category: "Culinary & Evenings",
    shortDescription:
      "Warm starlit campfire gatherings featuring ambient acoustic music, mountain breeze, hot beverages, and crackling pine embers.",
    detailedDescription:
      "As dusk blankets Attamala and cool mountain mist rolls across the trees, gather around our open-air natural stone fire pit. Enjoy soulful acoustic music playlists and weekend live guitar sessions under starlit skies. Relish steaming cups of authentic Wayanad ginger tea, roasted marshmallows, and friendly conversations in the cozy mountain chill.",
    image: "/images/activities/aaranya-campfire-night.webp",
    suitableFor: "Families, Couples & Friends",
    includedInStay: true,
    isPaid: false,
    pricingNote: "Complimentary for In-House Guests",
    badge: "Music & Bonfire",
    highlights: [
      "Authentic open-air natural stone fire pit with mountain panorama",
      "Curated ambient acoustic music & relaxing hillside evening tunes",
      "Complimentary hot herbal tea & evening refreshments",
      "Fairy lights and warm lanterns creating an enchanting twilight mood",
      "Perfect for family gatherings, couples, and friendly conversations",
    ],
  },

  // 3. Indoor Games
  {
    id: "indoor-games",
    slug: "indoor-games",
    title: "Indoor Games",
    category: "Resort Experiences",
    shortDescription:
      "Soaring timber glasshouse lounge featuring Carrom, Table Tennis, Foosball, Chess, and classic family board games.",
    detailedDescription:
      "Step into our high-ceiling timber atrium and indoor games arena overlooking misty forests. Challenge friends and family to high-energy table tennis matches, test your skills on tournament-grade carrom boards, enjoy foosball, or relax over strategic chess games. Complete with a cozy reading library and board games, it is the ultimate recreation hub for all age groups, rain or shine.",
    image: "/images/activities/aaranya-indoor-games.webp",
    suitableFor: "All Ages, Kids & Groups",
    includedInStay: true,
    isPaid: false,
    pricingNote: "Complimentary for In-House Guests",
    badge: "Indoor Fun • All Weather",
    highlights: [
      "Tournament-grade Carrom boards, Table Tennis & Foosball tables",
      "Classic wooden Chess sets & family board games (Monopoly, Uno, Scrabble, Jenga)",
      "Soaring double-height timber architecture with panoramic forest glass windows",
      "Curated reading corner with fiction, travel, and Kerala wildlife books",
      "Ideal entertainment spot during misty rain showers and cozy afternoons",
    ],
  },

  // 4. Jeep Safari
  {
    id: "jeep-safari",
    slug: "jeep-safari",
    title: "4x4 Mountain Jeep Safari",
    category: "Nature & Adventure",
    shortDescription:
      "An exhilarating open-top 4x4 off-road safari traversing rugged mountain tracks, misty ridges, and cascading forest streams.",
    detailedDescription:
      "Experience the wild untamed side of Wayanad with an open-top four-wheel-drive safari. Led by seasoned local off-road drivers, traverse steep rocky mountain trails, splash across pristine forest brooks, and arrive at remote cliff-edge viewpoints overlooking deep cloud-filled canyons of Attamala and Meppadi.",
    image: "/images/activities/aaranya-wayanad-jeep-safari.webp",
    suitableFor: "Adventure Seekers, Families & Groups",
    includedInStay: true,
    isPaid: false,
    pricingNote: "Complimentary Experience",
    badge: "Thrilling Mountain Trail",
    highlights: [
      "Adventurous 4x4 Jeep ride over scenic off-road forest terrain",
      "Stunning stops at Attamala Viewpoint and hidden ridge panoramas",
      "Visit hidden mountain brooks and forest waterfalls",
      "Expert, safe local drivers with deep knowledge of Wayanad terrain",
      "Ideal for photography enthusiasts and group memories",
    ],
  },

  // 5. Plantation Walk
  {
    id: "plantation-walk",
    slug: "plantation-walk",
    title: "Guided Tea & Spice Plantation Walk",
    category: "Nature & Adventure",
    shortDescription:
      "Scenic stroll through rolling emerald tea slopes with estate naturalists explaining traditional tea harvesting and regional spices.",
    detailedDescription:
      "Step straight from Aaranya into adjacent emerald tea garden slopes. Accompanied by our knowledgeable estate naturalists, learn how two leaves and a bud are plucked, understand orthodox vs CTC tea crafting, discover wild cardamom, pepper, and cinnamon, and capture breathtaking photos against rolling green hills kissed by morning dew.",
    image: "/images/activities/aaranya-tea-plantation-walk.webp",
    suitableFor: "All Age Groups & Nature Lovers",
    includedInStay: true,
    isPaid: false,
    pricingNote: "Complimentary Guided Tour",
    badge: "Signature Nature Walk",
    highlights: [
      "Guided walk through historical rolling tea plantations",
      "Hands-on tea plucking demonstration with traditional woven baskets",
      "Discover exotic native spices including pepper vines, cardamom & cinnamon",
      "Spectacular photography viewpoints over undulating green valleys",
      "Freshly brewed authentic orthodox tea tasting on return",
    ],
  },

  // 6. Digital Glass Bridge (PAID ACTIVITY)
  {
    id: "digital-glass-bridge",
    slug: "digital-glass-bridge",
    title: "Digital Glass Bridge",
    category: "Nature & Adventure",
    shortDescription:
      "Walk above the clouds on the breathtaking digital glass bridge skywalk cantilevered high over misty mountain valleys.",
    detailedDescription:
      "Feel the rush of adrenaline as you step onto the transparent cantilevered digital glass bridge soaring over lush emerald canopies and 100-foot forest depths. Looking down through clear reinforced digital glass onto floating clouds and cascading waterfalls is one of Wayanad's most iconic experiences. We organize private transport, priority entry passes, and guide support for a seamless excursion.",
    image: "/images/activities/aaranya-glass-bridge.webp",
    suitableFor: "Adventure Seekers, Couples & Families",
    includedInStay: false,
    isPaid: true,
    paidNotice: "Paid Activity • Special entry passes & transport charged extra",
    pricingNote: "Paid Activity (Entry Pass & Cab Arranged)",
    badge: "Digital Glass Skywalk",
    highlights: [
      "Cantilevered transparent digital glass skywalk high above deep rainforest gorges",
      "Spectacular 360-degree panoramic viewpoints of misty mountain ridges",
      "Hassle-free private resort cab transfer and priority ticket arrangements",
      "Unbelievable photo & video opportunities walking suspended in the air",
      "Engineered with triple-laminated high-tensile structural safety glass",
    ],
  },

  // 7. Tea Plantation Zipline & Giant Swing (PAID ACTIVITY)
  {
    id: "zipline-giant-swing",
    slug: "zipline-giant-swing",
    title: "Tea Plantation Zipline & Giant Swing",
    category: "Nature & Adventure",
    shortDescription:
      "Soar above rolling emerald tea plantations on an exhilarating long-distance zipline and sky-high giant swing.",
    detailedDescription:
      "Feel the ultimate rush of flying through crisp mountain air suspended high over Wayanad's rolling emerald tea gardens. The high-altitude zipline and giant swing offer heart-pumping thrills with panoramic views of Attamala's mist-covered hills. Priority ride passes, equipment safety briefing, and cab transfers are seamlessly arranged through Aaranya.",
    image: "/images/gallery/aaranya-tea-plantation-giant-swing-zipline.webp",
    suitableFor: "Adventure Seekers & Families",
    includedInStay: false,
    isPaid: true,
    paidNotice: "Paid Activity • Tickets & ride passes arranged on request",
    pricingNote: "Paid Activity (Passes Arranged)",
    badge: "Thrilling Zipline",
    highlights: [
      "High-speed zipline soaring high above lush green tea estates",
      "Sky-high open-air giant swing with breathtaking valley drop views",
      "Certified safety harnesses, double-cable redundancy & trained instructors",
      "Spectacular photo and video vantage points over tea gardens",
      "Hassle-free transport arrangements via Aaranya front desk",
    ],
  },

  // 8. Estate Sky Zip Cycling (PAID ACTIVITY)
  {
    id: "sky-zip-cycling",
    slug: "sky-zip-cycling",
    title: "Estate Sky Zip Cycling",
    category: "Nature & Adventure",
    shortDescription:
      "Pedal across aerial cables suspended high above rolling emerald tea hills with sweeping 360-degree mountain vistas.",
    detailedDescription:
      "Take your adventure to new heights with sky zip cycling. Suspended securely on high-tensile steel cables, pedal across open valleys overlooking vibrant tea carpets and misty ridges. A one-of-a-kind aerial experience perfect for adventure seekers, couples, and photography lovers.",
    image: "/images/gallery/aaranya-tea-plantation-zip-cycling.webp",
    suitableFor: "Adventure Enthusiasts & Couples",
    includedInStay: false,
    isPaid: true,
    paidNotice: "Paid Activity • Ride tickets arranged on request",
    pricingNote: "Paid Activity (Passes Arranged)",
    badge: "Aerial Sky Cycling",
    highlights: [
      "Unique bicycle ride suspended on high-tension cables over tea slopes",
      "Unmatched aerial perspective of tea estate contours",
      "International standard safety wire harness and helmet protection",
      "Perfect adrenaline-filled experience for adventurous travelers",
      "Guided assistance and priority pass booking via Aaranya concierge",
    ],
  },
];
