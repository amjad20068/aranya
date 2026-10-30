import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AARANYA — Misty Valley Resort",
    short_name: "Aaranya",
    description:
      "A serene luxury forest retreat in pristine misty hills of the Western Ghats, Kerala. Bespoke architectural rooms and warm hospitality.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EC",
    theme_color: "#092C24",
    orientation: "portrait",
    categories: ["travel", "hospitality", "lifestyle"],
    lang: "en-IN",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

