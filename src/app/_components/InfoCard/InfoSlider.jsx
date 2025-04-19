"use client";

import { useState } from "react";
import InfoCard from "./InfoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "청년 교육단원 통합 모집",
    location: "서울시",
    bgImage: "/img/CardImage/1.jpeg",
  },
  {
    title: "마포 청년정책 네트워크 신규위원 모집",
    location: "서울시",
    bgImage: "/img/CardImage/7.jpg",
  },
  {
    title: "2025 마포 사진 학교",
    location: "서울시",
    bgImage: "/img/CardImage/10.png",
  },
  {
    title: "서울시 청년 인생 설계 학교",
    location: "송파구",
    bgImage: "/img/CardImage/6.jpg",
  },
  {
    title: "해치 콘텐츠 공모전",
    location: "서대문구",
    bgImage: "/img/CardImage/5.jpg",
  },
  {
    title: "2025 결혼검진",
    location: "강남구",
    bgImage: "/img/CardImage/8.jpg",
  },
  {
    title: "자립준비청년 재보호제도",
    location: "은평구",
    bgImage: "/img/CardImage/2.jpeg",
  },
  {
    title: "알고가는 중앙부처 청년정책",
    location: "성동구",
    bgImage: "/img/CardImage/4.jpeg",
  },
  {
    title: "[CJ] 나눔 냉장고",
    location: "노원구",
    bgImage: "/img/CardImage/9.jpg",
  },
  {
    title: "누구나 즐기는 문화가 있는 날",
    location: "용산구",
    bgImage: "/img/CardImage/3.jpeg",
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
