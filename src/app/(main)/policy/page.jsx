"use client";

import { useState } from "react";
import PolicyFilterBar from "../../_components/CustomFilter/PolicyFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

import policyDummyData from "../../_data/policyDummyData";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({
    지역: [],
    분야: [],
    취업상태: [],
    연령: [],
  });

  const [filteredData, setFilteredData] = useState(
    policyDummyData.slice(0, 10)
  );

  const handleSearch = () => {
    const matched = policyDummyData.filter((item) => {
      return (
        (selectedFilters.지역.length === 0 ||
          selectedFilters.지역.includes(item.location)) &&
        (selectedFilters.분야.length === 0 ||
          selectedFilters.분야.includes(item.분야)) &&
        (selectedFilters.취업상태.length === 0 ||
          selectedFilters.취업상태.includes(item.취업상태)) &&
        (selectedFilters.연령.length === 0 ||
          selectedFilters.연령.includes(item.연령))
      );
    });

    setFilteredData(matched);
  };

  return (
    <main>
      <div
        className="w-screen py-16 mt-8 text-white text-center text-[40px] font-light"
        style={{
          backgroundImage: "url('/img/policyBanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatedText
          text={`몰랐다면 지금이 기회, 알고 있었다면 더 잘 쓰는 방법!\n청년을 위한 혜택, 모르면 손해예요.`}
        />
      </div>

      <PolicyFilterBar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        onSearch={handleSearch}
      />

      <TrendText />

      <AnimatedOnScroll>
        <InfoSlide data={filteredData} />
      </AnimatedOnScroll>
    </main>
  );
}
