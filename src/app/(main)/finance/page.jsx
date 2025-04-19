import FinanceFilterBar from "../../_components/CustomFilter/FinanceFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

export default function Home() {
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

      <FinanceFilterBar />
      <TrendText />

      <AnimatedOnScroll>
        <InfoSlide />
      </AnimatedOnScroll>
    </main>
  );
}
