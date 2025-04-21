import FinanceFilterBar from "../../_components/CustomFilter/FinanceFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

export default function Home() {
  const financeData = [
    {
      title: "청년 전월세 지원 사업",
      location: "서울시",
      bgImage: "/img/CardImage/Finance/1.jpeg",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/2.jpeg",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/5.png",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/4.png",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/3.jpeg",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/6.png",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/7.png",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/8.jpeg",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/9.png",
    },
    {
      title: "자산형성 지원 프로그램",
      location: "부산시",
      bgImage: "/img/CardImage/Finance/10.png",
    },
  ];

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
        <InfoSlide data={financeData} />
      </AnimatedOnScroll>
    </main>
  );
}
