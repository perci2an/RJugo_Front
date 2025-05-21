import PolicyFilterBar from "../../_components/CustomFilter/PolicyFilterBar";
import AnimatedText from "../../_components/AnimatedText";
import TrendText from "../../_components/TrendText";
import InfoSlide from "../../_components/InfoCard/InfoSlider";
import AnimatedOnScroll from "../../_components/AnimatedOnScroll";

export default function Home() {
  const 지역 = ["서울특별시", "경기도", "강원도", "충청도", "전라도", "경상도"];
  const 분야 = ["일자리", "주거", "교육", "생활지원", "대외활동", "문화/예술"];
  const 취업상태 = ["재직자", "구직자", "학생", "무직"];
  const 연령 = ["19~24", "25~29", "30~34", "35~39"];

  const 타이틀 = [
    "청년 취업 성공 패키지",
    "청년 주거 지원 사업",
    "청년 창업 지원 프로그램",
    "문화예술 청년 아카데미",
    "지역 기반 청년 커뮤니티 지원",
    "자립준비청년 자산형성 지원",
    "공공기관 청년 인턴십",
    "청년 마을 만들기 프로젝트",
    "취업준비생 면접복 대여",
    "청년 정신건강 지원",
    "디지털 인재 양성 캠프",
    "해외 취업 지원 프로그램",
    "청년 전세자금 대출 지원",
    "예술청년 창작 공간 제공",
    "청년 대상 비건 요리 교실",
    "농촌 체험형 인턴십",
    "도시재생 청년 참여단",
    "취업 박람회 입장 지원",
    "청년 여행비 지원 프로젝트",
    "영상 콘텐츠 제작 지원 사업",
    "청년 과학 창의 캠프",
    "청년 정치 참여 활성화",
    "청년 독서 문화 지원",
    "마을 축제 청년기획단",
    "기초생활 청년 주거 보조금",
    "지자체 연계 직무 체험",
    "자율학습 스터디룸 지원",
    "공공기관 연계 취업 지원",
    "청년 기후 행동단",
    "비영리단체 청년 활동가 모집",
    "지역 문화 기획 청년단",
    "청년 기자단 운영 사업",
    "AI 역량 강화 교육",
    "청년 도시 농업 체험단",
    "전통시장 서포터즈 모집",
    "청년 예술축제 서포터즈",
    "스마트 팜 창업 지원",
    "청년 복지 멘토링 사업",
    "지역 봉사 활동 참여 포인트제",
    "SNS 콘텐츠 공모전",
    "청년 범죄예방 아이디어 공모전",
    "외국인 청년 교류 프로그램",
    "마을 청년 동아리 지원",
    "청년 과학 해커톤",
    "문화재 해설 청년 교육",
    "지방정착 청년 장려금",
    "지역 영화제 청년 프로그래머",
    "스타트업 멘토링 캠프",
    "청년 환경지킴이 모집",
    "도서관 청년 크리에이터",
    "지역 관광 해설사 양성",
    "청년 금융 교육 프로그램",
    "게임 기획 창작캠프",
    "청년 보건소 심리 상담",
    "저소득 청년 식비 지원",
    "1인 가구 청년 생활 안전 지원",
    "청년 정책 제안 경진대회",
    "청년 해외 탐방단",
    "지역 혁신 해커톤",
    "청년 푸드트럭 창업 지원",
    "IT 창의 융합 캠프",
    "청년 역사 문화 탐방",
    "1인가구 청년 자립 패키지",
    "디자인 포트폴리오 클리닉",
    "청년 주말농장 체험단",
    "도심 속 청년 캠핑 프로그램",
    "지역 농산물 콘텐츠 마케팅단",
    "반려동물 청년 돌봄 교육",
    "영상 촬영 기술 실습 프로그램",
    "웹툰 창작 실전 캠프",
    "지역 공방 체험 프로그램",
    "지속가능 마을 디자인 프로젝트",
  ];

  const imageExtensions = [".jpeg", ".jpg", ".png"];

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const policyData = Array.from({ length: 70 }, (_, i) => {
    const extension = getRandomItem(imageExtensions);
    return {
      id: i + 1,
      title: 타이틀[i % 타이틀.length],
      location: getRandomItem(지역),
      category: getRandomItem(분야),
      employment: getRandomItem(취업상태),
      ageRange: getRandomItem(연령),
      bgImage: `/img/CardImage/Policy/${(i % 10) + 1}${extension}`,
    };
  });

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
