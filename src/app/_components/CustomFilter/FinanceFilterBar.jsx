"use client";

import React, { useState, useRef, useEffect } from "react";
import { BookOpen, Search, X } from "lucide-react";
import FilterSection from "./FilterSection";

const financeFilterConfig = {
  은행: ["NH농협", "국민", "신한", "우리", "수협", "기업"],
  투자형태: ["주식", "채권", "부동산", "펀드"],
  수익률: ["5% 이하", "5%~10%", "10% 이상"],
  기간: ["1개월 이하", "3개월 이하", "6개월 이하", "1년 이상"],
};

export default function FinanceFilterBar() {
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef(null);

  const [selected, setSelected] = useState({
    은행: [],
    투자형태: [],
    수익률: [],
    기간: [],
  });

  const toggleSelection = (section, value) => {
    setSelected((prev) => ({
      ...prev,
      [section]: prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value],
    }));
  };

  const removeTag = (section, value) => {
    setSelected((prev) => ({
      ...prev,
      [section]: prev[section].filter((v) => v !== value),
    }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCount = Object.values(selected).flat().length;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20" ref={inputRef}>
      <div className="bg-white shadow-md border border-gray-300 rounded-xl flex items-center w-full px-0 py-0 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 bg-[#4A5353] text-white font-semibold text-base rounded-l-xl">
          맞춤형 금융검색 <BookOpen className="w-4 h-4 text-[#E2C044]" />
        </div>

        <div
          className="flex flex-wrap gap-2 flex-1 px-4 min-h-[48px] items-center cursor-pointer"
          onClick={() => setShowFilters(true)}
        >
          {selectedCount === 0 ? (
            <span className="text-gray-400 text-base">필터를 선택해주세요</span>
          ) : (
            Object.entries(selected).map(([section, items]) =>
              items.map((item) => (
                <span
                  key={`${section}-${item}`}
                  className="flex items-center gap-1 bg-gray-200 text-sm px-3 py-1 rounded-full"
                >
                  {item}
                  <X
                    size={14}
                    className="cursor-pointer text-gray-500 hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(section, item);
                    }}
                  />
                </span>
              ))
            )
          )}
        </div>

        <div className="flex items-center gap-2 px-6 py-4 bg-[#4A5353] text-white font-semibold text-base rounded-r-xl hover:bg-gray-700">
          <Search className="w-4 h-4 text-[#E2C044]" />
          검색
        </div>
      </div>

      {showFilters && (
        <div className="absolute z-20 w-full mt-2 bg-white text-gray-800 border border-gray-200 rounded-xl shadow-lg p-6 space-y-6">
          {Object.entries(financeFilterConfig).map(([section, options]) => (
            <FilterSection
              key={section}
              title={section}
              options={options}
              selected={selected[section]}
              onToggle={(value) => toggleSelection(section, value)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
