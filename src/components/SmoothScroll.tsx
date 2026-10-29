"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { openDirectWhatsApp } from "@/config/resort";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Configure Lenis with velvet-smooth exponential momentum curve
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Expose lenis instance to window for modals / drawers to pause if necessary
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Connect Lenis to GSAP's optimized ticker for butter-smooth 60/120fps synchronization
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for all on-page hash anchors (#about, #rooms, #services, #contact, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -75,
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    // Universal direct WhatsApp handler for all WhatsApp links across the site
    const handleWhatsAppClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const isWhatsApp =
        href.includes("api.whatsapp.com") ||
        href.includes("wa.me") ||
        href.startsWith("whatsapp:");

      if (isWhatsApp) {
        e.preventDefault();
        let message = "";
        try {
          if (href.includes("?")) {
            const urlObj = new URL(href, window.location.origin);
            message = urlObj.searchParams.get("text") || "";
          }
        } catch {
          // fallback if url format varies
        }
        openDirectWhatsApp(message);
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });
    document.addEventListener("click", handleWhatsAppClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("click", handleWhatsAppClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Smooth scroll to top on page navigation
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
