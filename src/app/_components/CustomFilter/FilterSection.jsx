"use client";

import React from "react";

export default function FilterSection({ title, options, selected, onToggle }) {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-2 text-black">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              type="button"
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                onToggle(option);
              }}
              className={`px-3 py-1 rounded-full text-sm border transition
                ${
                  isSelected
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white text-black border-gray-300 hover:bg-gray-500 hover:text-white hover:border-gray-500"
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
