"use client";

import { useState } from "react";
import FinanceFilterBar from "../../_components/CustomFilter/FinanceFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import InfoGrid from "../../_components/InfoCard/InfoGrid";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";
import { cardMeta } from "../../_data/finance-meta";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({
    은행: [],
    금리: [],
    가입기간: [],
    최소금액: [],
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
        const bankMatch =
          selectedFilters.은행.length === 0 ||
          selectedFilters.은행.every((val) => (item.bank ?? []).includes(val));

        const rateMatch =
          selectedFilters.금리.length === 0 ||
          selectedFilters.금리.every((val) => (item.rate ?? []).includes(val));

        const periodMatch =
          selectedFilters.가입기간.length === 0 ||
          selectedFilters.가입기간.every((val) =>
            (item.period ?? []).includes(val)
          );

        const amountMatch =
          selectedFilters.최소금액.length === 0 ||
          selectedFilters.최소금액.every((val) =>
            (item.amount ?? []).includes(val)
          );

        return bankMatch && rateMatch && periodMatch && amountMatch;
      });

      setFilteredData(matched);
    }
  };

  return (
    <main>
      <div
        className="w-screen py-16 mt-8 text-white text-center text-[40px] font-light"
        style={{
          backgroundImage: "url('/img/financeBanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatedText
          text={`청춘의 무모함도 아름답지만, 준비된 청춘은 더욱 빛납니다.\n당신의 경제생활, 지금부터 우리가 도와드릴게요.`}
        />
      </div>

      <FinanceFilterBar
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
        <AnimatedOnScroll key={JSON.stringify(filteredData)}>
          <InfoGrid data={filteredData} />
        </AnimatedOnScroll>
      )}
    </main>
  );
}
