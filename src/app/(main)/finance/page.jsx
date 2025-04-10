import FilterBar from "../../_components/CustomFilter/FilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";

export default function Home() {
  return (
    <main>
      <AnimatedText
        text={`청춘의 무모함도 아름답지만, 준비된 청춘은 더욱 빛납니다.\n당신의 경제생활, 지금부터 우리가 도와드릴게요 🌱`}
        className="w-screen bg-[#7f5af0] py-16 mt-8 text-white text-center text-[40px] font-light"
      />

      <FilterBar />
      <TrendText />
    </main>
  );
}
