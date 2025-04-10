"use client";

import React, { useState, useEffect } from "react";

export default function AnimatedText({ text, className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <h2 className={`overflow-hidden ${className}`}>
      {text.split("\n").map((line, lineIndex) => (
        <span key={lineIndex} className="block whitespace-pre">
          {Array.from(line).map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 animate-reveal"
              style={{
                animationDelay: `${(lineIndex * 50 + charIndex) * 0.03}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
