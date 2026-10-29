export interface GoogleReview {
  id: string;
  name: string;
  avatarText: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  rating: number; // usually 5
  relativeTime: string;
  category: "all" | "couples" | "family" | "nature" | "hospitality";
  stayType: string;
  comment: string;
  highlightPhrase?: string;
  helpfulCount?: number;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    stars: number;
    percentage: number;
  }[];
  googleMapsUrl: string;
}

export const reviewsSummary: ReviewSummary = {
  averageRating: 4.9,
  totalReviews: 218,
  ratingBreakdown: [
    { stars: 5, percentage: 94 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
  googleMapsUrl: "https://maps.google.com/?q=Aaranya+Misty+Valley+Resort+Attamala+Meppadi+Wayanad+Kerala+673577",
};

export const reviewsData: GoogleReview[] = [
  {
    id: "rev-1",
    name: "Dr. Anand Nair",
    avatarText: "AN",
    isLocalGuide: true,
    reviewCount: 42,
    rating: 5,
    relativeTime: "2 weeks ago",
    category: "couples",
    stayType: "Stayed in Premium Room",
    highlightPhrase: "True hidden sanctuary in the hills",
    comment:
      "Aaranya is truly a hidden sanctuary in the Western Ghats. Waking up to the mist flowing into the valley right outside our private balcony was magical. The timber finishes, quiet forest atmosphere, and personalized hospitality made our anniversary unforgettable.",
    helpfulCount: 14,
  },
  {
    id: "rev-2",
    name: "Pooja & Rohan Sharma",
    avatarText: "PS",
    isLocalGuide: false,
    rating: 5,
    relativeTime: "a month ago",
    category: "family",
    stayType: "Family Vacation",
    highlightPhrase: "Kids loved the open nature & high timber ceilings",
    comment:
      "We booked the Family Room with the high cathedral wooden ceiling. Kids loved the open nature feel, clean mountain air, and morning bird watching. Clean, serene, zero city noise, and delicious hot fresh food. Highly recommend for families needing total peace.",
    helpfulCount: 9,
  },
  {
    id: "rev-3",
    name: "Michael & Elena Vance",
    avatarText: "MV",
    isLocalGuide: true,
    reviewCount: 68,
    rating: 5,
    relativeTime: "3 weeks ago",
    category: "couples",
    stayType: "Couples Retreat",
    highlightPhrase: "One of the most tranquil nature resorts in South India",
    comment:
      "One of the most tranquil nature retreats we have experienced. The architectural glass framing makes you feel immersed in the mountain forest while enjoying 5-star comforts. The staff went above and beyond to make our stay comfortable.",
    helpfulCount: 18,
  },
  {
    id: "rev-4",
    name: "Karthik Varma",
    avatarText: "KV",
    isLocalGuide: true,
    reviewCount: 95,
    rating: 5,
    relativeTime: "1 month ago",
    category: "nature",
    stayType: "Nature & Mist Enthusiast",
    highlightPhrase: "Spectacular morning mist and tea estate walks",
    comment:
      "Untouched nature at its best! The views of the morning mist rolling across the green ridges during breakfast on the terrace are incredible. Quiet, secluded, and very well maintained. Front desk team guided us seamlessly on WhatsApp.",
    helpfulCount: 11,
  },
  {
    id: "rev-5",
    name: "Sruthi Menon",
    avatarText: "SM",
    isLocalGuide: false,
    rating: 5,
    relativeTime: "2 months ago",
    category: "hospitality",
    stayType: "Stayed in Deluxe Room",
    highlightPhrase: "Warm hospitality and delicious fresh meals",
    comment:
      "The photos don't even capture how serene and lush it is in real life. Cool mountain breeze, plush comfortable beds, and genuine Kerala hospitality. The chef prepared authentic local meals that were outstanding.",
    helpfulCount: 7,
  },
  {
    id: "rev-6",
    name: "David Ross",
    avatarText: "DR",
    isLocalGuide: true,
    reviewCount: 31,
    rating: 5,
    relativeTime: "2 months ago",
    category: "nature",
    stayType: "Weekend Forest Escape",
    highlightPhrase: "Breathtaking sunset views and total peace",
    comment:
      "A true eco-luxury experience. Peaceful location tucked deeply into the hills with zero highway noise. Watching the sunset golden hour from the observation ridge was the highlight of our vacation. 10/10 hospitality.",
    helpfulCount: 15,
  },
];
