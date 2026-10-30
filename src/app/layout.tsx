import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import {
  SITE_URL,
  defaultSeoKeywords,
  getResortJsonLd,
  getWebSiteJsonLd,
  getOrganizationJsonLd,
} from "@/config/seo";
import { resortConfig } from "@/config/resort";

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
  themeColor: "#061F1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AARANYA — Misty Valley Resort | Luxury Nature Resort in Wayanad, Kerala",
    template: "%s | AARANYA — Misty Valley Resort",
  },
  description:
    "Discover AARANYA — Misty Valley Resort in Attamala, Meppadi, Wayanad. A tranquil luxury forest retreat offering panoramic misty valley views, bespoke architectural rooms, and warm hospitality.",
  keywords: defaultSeoKeywords,
  authors: [{ name: resortConfig.name, url: SITE_URL }],
  creator: resortConfig.name,
  publisher: resortConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AARANYA — Misty Valley Resort | Luxury Nature Resort in Wayanad",
    description:
      "A serene luxury forest retreat surrounded by lush greenery, misty hills, and warm hospitality in Attamala, Meppadi, Wayanad, Kerala.",
    url: SITE_URL,
    siteName: resortConfig.name,
    images: [
      {
        url: "/images/hero/aaranya-resort-villa-4k.webp",
        width: 1920,
        height: 1080,
        alt: "AARANYA Misty Valley Resort architectural building in lush nature",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AARANYA — Misty Valley Resort | Wayanad, Kerala",
    description:
      "A serene luxury forest retreat surrounded by lush greenery, misty hills, and warm hospitality.",
    images: ["/images/hero/aaranya-resort-villa-4k.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resortJsonLd = getResortJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resortJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
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
