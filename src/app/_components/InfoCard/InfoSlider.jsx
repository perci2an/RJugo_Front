"use client";

import { useState } from "react";
import InfoCard from "./InfoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InfoSlider({ data }) {
  const [startIndex, setStartIndex] = useState(0);

  const CARD_WIDTH = 270;
  const CARD_GAP = 20;
  const VISIBLE_COUNT = 4;
  const maxIndex = data.length - VISIBLE_COUNT;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  return (
    <div className="w-full flex justify-center items-center px-10 space-x-4">
      <button
        onClick={handlePrev}
        className="p-2 rounded-full border shadow-md hover:bg-gray-100 disabled:opacity-30 z-10"
        disabled={startIndex === 0}
      >
        <ChevronLeft />
      </button>

      <div className="relative w-[1130px] overflow-hidden py-10">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {data.map((item, idx) => (
            <div key={idx} className="min-w-[270px] flex-shrink-0">
              <InfoCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="p-2 rounded-full border shadow-md hover:bg-gray-100 disabled:opacity-30 z-10"
        disabled={startIndex === maxIndex}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
