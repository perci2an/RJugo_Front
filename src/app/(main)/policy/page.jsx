import PolicyFilterBar from "../../_components/CustomFilter/PolicyFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

export default function Home() {
  return (
    <main>
      <AnimatedText
        text={`몰랐다면 지금이 기회, 알고 있었다면 더 잘 쓰는 방법!\n청년을 위한 혜택, 모르면 손해예요 🌟`}
        className="w-screen bg-[#2cb67d] py-16 mt-8 text-white text-center text-[40px] font-light"
      />

      <PolicyFilterBar />
      <TrendText />

      <AnimatedOnScroll>
        <InfoSlide />
      </AnimatedOnScroll>
    </main>
  );
}
