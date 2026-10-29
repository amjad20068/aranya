import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10251C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aaranyamistyvalleyresort.com"),
  title: {
    default: "AARANYA — Misty Valley Resort | Luxury Forest Retreat",
    template: "%s | AARANYA — Misty Valley Resort",
  },
  description:
    "Discover AARANYA — Misty Valley Resort. A tranquil luxury forest retreat nestled in pristine misty hills, offering panoramic nature views, bespoke architectural rooms, and warm hospitality.",
  keywords: [
    "Aaranya Misty Valley Resort",
    "Luxury Forest Resort",
    "Misty Valley Kerala",
    "Nature Stay Western Ghats",
    "Hillside Eco Resort",
    "Valley View Rooms",
    "Forest Retreat Booking",
  ],
  authors: [{ name: "Aaranya Misty Valley Resort" }],
  openGraph: {
    title: "AARANYA — Misty Valley Resort | Luxury Forest Retreat",
    description:
      "Escape into nature and stay in luxury. Discover peaceful hillsides, misty canopies, and serene hospitality.",
    url: "https://aaranyamistyvalleyresort.com",
    siteName: "AARANYA — Misty Valley Resort",
    images: [
      {
        url: "/images/hero/aaranya-resort-villa-4k.webp",
        width: 1200,
        height: 630,
        alt: "AARANYA Misty Valley Resort architectural building in lush nature",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AARANYA — Misty Valley Resort",
    description:
      "A serene luxury forest retreat surrounded by lush greenery, misty hills, and warm hospitality.",
    images: ["/images/hero/aaranya-resort-villa-4k.webp"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#343B35] font-sans-luxury antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
