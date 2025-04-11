"use client";

import { useState } from "react";
import InfoCard from "./InfoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "서울 동아리 ON",
    subtitle: "서울 동아리 ON",
    location: "서울시",
    bgColor: "bg-green-500",
  },
  {
    title: "청년 부동산 중개 보수 및 이사비 지원사업",
    subtitle: "청년 부동산 중개보수 및 이사...",
    location: "서울시",
    bgColor: "bg-indigo-500",
  },
  {
    title: "서울시 청년수당",
    subtitle: "서울시 청년수당",
    location: "서울시",
    bgColor: "bg-indigo-500",
  },
  {
    title: "송파 청년출발지원금",
    subtitle: "송파 청년출발지원금",
    location: "송파구",
    bgColor: "bg-green-500",
  },
  {
    title: "추가 정책 1",
    subtitle: "추가 정책 1 부제목",
    location: "서대문구",
    bgColor: "bg-purple-500",
  },
  {
    title: "추가 정책 2",
    subtitle: "추가 정책 2 부제목",
    location: "강남구",
    bgColor: "bg-blue-500",
  },
  {
    title: "추가 정책 3",
    subtitle: "추가 정책 3 부제목",
    location: "은평구",
    bgColor: "bg-yellow-500",
  },
  {
    title: "추가 정책 4",
    subtitle: "추가 정책 4 부제목",
    location: "성동구",
    bgColor: "bg-pink-500",
  },
  {
    title: "추가 정책 5",
    subtitle: "추가 정책 5 부제목",
    location: "노원구",
    bgColor: "bg-red-500",
  },
  {
    title: "추가 정책 6",
    subtitle: "추가 정책 6 부제목",
    location: "용산구",
    bgColor: "bg-emerald-500",
  },
];

export default function InfoSlider() {
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
