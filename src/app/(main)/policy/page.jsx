"use client";

import { useState } from "react";
import PolicyFilterBar from "../../_components/CustomFilter/PolicyFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import InfoGrid from "../../_components/InfoCard/InfoGrid";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";
import { cardMeta } from "../../_data/policy-meta";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({
    지역: [],
    분야: [],
    취업상태: [],
    연령: [],
  });

  const [filteredData, setFilteredData] = useState(cardMeta.slice(0, 10));
  const [lastSearchedFilterEmpty, setLastSearchedFilterEmpty] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);

    const isEmptyFilter = Object.values(selectedFilters).every(
      (arr) => arr.length === 0
    );

    setLastSearchedFilterEmpty(isEmptyFilter);

    if (isEmptyFilter) {
      setFilteredData(cardMeta.slice(0, 10));
    } else {
      const matched = cardMeta.filter((item) => {
        const locationMatch =
          selectedFilters.지역.length === 0 ||
          selectedFilters.지역.every((val) =>
            (item.location ?? []).includes(val)
          );

        const categoryMatch =
          selectedFilters.분야.length === 0 ||
          selectedFilters.분야.every((val) =>
            (item.category ?? []).includes(val)
          );

        const statusMatch =
          selectedFilters.취업상태.length === 0 ||
          selectedFilters.취업상태.every((val) =>
            (item.status ?? []).includes(val)
          );

        const ageMatch =
          selectedFilters.연령.length === 0 ||
          selectedFilters.연령.every((val) => (item.age ?? []).includes(val));

        return locationMatch && categoryMatch && statusMatch && ageMatch;
      });

      setFilteredData(matched);
    }
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

      {!hasSearched || lastSearchedFilterEmpty ? (
        <>
          <TrendText />
          <AnimatedOnScroll key={JSON.stringify(filteredData)}>
            <InfoSlide data={filteredData} />
          </AnimatedOnScroll>
        </>
      ) : (
        // 필터가 적용된 검색 결과일 때는 무한 스크롤 리스트 컴포넌트 (예: InfoGrid)
        <InfoGrid data={filteredData} />
      )}
    </main>
  );
}
