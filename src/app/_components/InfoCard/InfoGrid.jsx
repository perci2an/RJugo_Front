"use client";

import { useEffect, useRef, useState } from "react";
import InfoCard from "./InfoCard";

export default function InfoGrid({ data }) {
  const ITEMS_PER_LOAD = 12;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_LOAD);
  const observerRef = useRef(null);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_PER_LOAD, data.length));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [visibleItems, data]);

  useEffect(() => {
    setVisibleItems(ITEMS_PER_LOAD);
  }, [data]);

  return (
    <div className="px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
      {data.slice(0, visibleItems).map((item, idx) => (
        <InfoCard key={idx} {...item} />
      ))}
      <div ref={observerRef} className="h-1" />
    </div>
  );
}
