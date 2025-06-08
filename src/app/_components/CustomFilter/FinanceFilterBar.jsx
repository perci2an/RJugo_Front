"use client";

import React, { useState, useRef, useEffect } from "react";
import { BookOpen, Search, X } from "lucide-react";
import FilterSection from "./FilterSection";

const financeFilterConfig = {
  은행: ["NH농협", "국민", "신한", "우리", "수협", "기업", "카카오", "토스"],
  금리: ["기본 금리 높은 순", "최고 금리 높은 순"],
  가입기간: ["1개월", "3개월", "6개월", "1년", "1년 이상"],
  최소금액: [
    "만원 미만",
    "1만원 ~ 30만원",
    "30만원 ~ 50만원",
    "50만원 ~ 100만원",
    "100만원 초과",
  ],
};

export default function financeFilterBar({
  selectedFilters = {
    은행: [],
    금리: [],
    가입기간: [],
    최소금액: [],
  },
  setSelectedFilters,
  onSearch,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef(null);

  const toggleSelection = (section, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value],
    }));
  };

  const handleSearchClick = () => {
    setShowFilters(false);
    if (onSearch) onSearch();
  };

  const removeTag = (section, value) => {
    setSelectedFilters((prev) => ({
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

  const selectedCount = Object.values(selectedFilters ?? {}).flat().length;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20" ref={inputRef}>
      <div className="bg-white shadow-md border border-gray-300 rounded-xl flex items-center w-full px-0 py-0 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 bg-[#4A5353] text-white font-semibold text-base rounded-l-xl">
          맞춤형 정책검색 <BookOpen className="w-4 h-4 text-[#E2C044]" />
        </div>

        <div
          className="flex flex-wrap gap-2 flex-1 px-4 min-h-[48px] items-center cursor-pointer"
          onClick={() => setShowFilters(true)}
        >
          {selectedCount === 0 ? (
            <span className="text-gray-400 text-base">필터를 선택해주세요</span>
          ) : (
            Object.entries(selectedFilters).map(([section, items]) =>
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

        <button
          className="flex items-center gap-2 px-6 py-4 bg-[#4A5353] text-white font-semibold text-base rounded-r-xl hover:bg-gray-700"
          onClick={handleSearchClick}
        >
          <Search className="w-4 h-4 text-[#E2C044]" />
          검색
        </button>
      </div>

      {showFilters && (
        <div className="absolute z-20 w-full mt-2 bg-white text-gray-800 border border-gray-200 rounded-xl shadow-lg p-6 space-y-6">
          {Object.entries(financeFilterConfig).map(([section, options]) => (
            <FilterSection
              key={section}
              title={section}
              options={options}
              selected={selectedFilters?.[section] ?? []}
              onToggle={(value) => toggleSelection(section, value)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
