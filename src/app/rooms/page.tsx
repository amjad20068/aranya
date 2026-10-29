import React, { Suspense } from "react";
import type { Metadata } from "next";
import RoomsClientView from "./RoomsClientView";

export const metadata: Metadata = {
  title: "Comfort in Every Stay | Accommodations & Rooms",
  description:
    "Thoughtfully designed rooms that blend modern comforts with the calm of nature. Discover a stay made for relaxation and memorable moments at Aaranya Misty Valley Resort.",
};

export default function RoomsPage() {
  return (
    <div className="pb-20 bg-[#FAF8F5]">
      <Suspense fallback={<div className="min-h-screen pt-32 text-center text-[#10251C]">Loading accommodations...</div>}>
        <RoomsClientView />
      </Suspense>
    </div>
  );
}
