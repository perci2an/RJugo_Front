"use client";

import { useState, useRef, useEffect } from "react";

export default function CustomFilterBar() {
  return (
    <div className="flex items-center mt-24 mb-20 bg-white rounded-full border overflow-visible w-fit mx-auto shadow-sm divide-x text-base">
      <div className="flex items-center px-6 py-4 bg-gray-800 text-white rounded-l-2xl font-semibold">
        맞춤형 정책검색
      </div>

      <FilterBox label="서울시" options={["서울시", "부산시", "대구시"]} />
      <FilterBox
        label="취업상태 선택"
        options={["재직자", "구직자", "학생", "무직"]}
      />
      <FilterBox
        label="연령 선택"
        options={["19~24", "25~29", "30~34", "35~39"]}
      />

      <div className="flex items-center px-4 py-4">
        <input
          type="text"
          placeholder="정책명을 입력해주세요."
          className="outline-none border-none placeholder-gray-500 w-48"
        />
      </div>

      <button className="flex items-center px-6 py-4 bg-gray-800 text-white rounded-r-2xl font-semibold hover:bg-gray-700">
        검색
      </button>
    </div>
  );
}

function FilterBox({ label, options, isCheckbox = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(isCheckbox ? [] : "");
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const buttonRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (open && buttonRef.current) {
      setDropdownWidth(buttonRef.current.offsetWidth);
    }
  }, [open]);

  const handleClick = (option) => {
    if (isCheckbox) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    } else {
      setSelected(option);
      setOpen(false);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 10);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={buttonRef}
        className="px-6 py-4 text-base font-medium hover:bg-gray-100 whitespace-nowrap w-full cursor-pointer"
      >
        {label}
      </div>

      {open && (
        <div
          className="absolute top-full mt-1 bg-white border border-gray-200 rounded-lg shadow z-10"
          style={{ width: dropdownWidth }}
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
            >
              {isCheckbox ? (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-indigo-500"
                    checked={selected.includes(option)}
                    onChange={() => handleClick(option)}
                  />
                  {option}
                </label>
              ) : (
                <span onClick={() => handleClick(option)}>{option}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
