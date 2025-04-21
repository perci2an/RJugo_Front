import PolicyFilterBar from "../../_components/CustomFilter/PolicyFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

export default function Home() {
  const policyData = [
    {
      title: "청년 교육단원 통합 모집",
      location: "서울시",
      bgImage: "/img/CardImage/Policy/1.jpeg",
    },
    {
      title: "마포 청년정책 네트워크 신규위원 모집",
      location: "서울시",
      bgImage: "/img/CardImage/Policy/7.jpg",
    },
    {
      title: "2025 마포 사진 학교",
      location: "서울시",
      bgImage: "/img/CardImage/Policy/10.png",
    },
    {
      title: "서울시 청년 인생 설계 학교",
      location: "송파구",
      bgImage: "/img/CardImage/Policy/6.jpg",
    },
    {
      title: "해치 콘텐츠 공모전",
      location: "서대문구",
      bgImage: "/img/CardImage/Policy/5.jpg",
    },
    {
      title: "2025 결혼검진",
      location: "강남구",
      bgImage: "/img/CardImage/Policy/8.jpg",
    },
    {
      title: "자립준비청년 재보호제도",
      location: "은평구",
      bgImage: "/img/CardImage/Policy/2.jpeg",
    },
    {
      title: "알고가는 중앙부처 청년정책",
      location: "성동구",
      bgImage: "/img/CardImage/Policy/4.jpeg",
    },
    {
      title: "[CJ] 나눔 냉장고",
      location: "노원구",
      bgImage: "/img/CardImage/Policy/9.jpg",
    },
    {
      title: "누구나 즐기는 문화가 있는 날",
      location: "용산구",
      bgImage: "/img/CardImage/Policy/3.jpeg",
    },
  ];

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

      <PolicyFilterBar />
      <TrendText />

      <AnimatedOnScroll>
        <InfoSlide data={policyData} />
      </AnimatedOnScroll>
    </main>
  );
}
