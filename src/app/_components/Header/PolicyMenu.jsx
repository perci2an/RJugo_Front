export default function Menu() {
  const MenuItem = ({ src, label, description, url }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center space-y-2 hover:opacity-80 transition-opacity duration-200"
      >
        <img src={src} alt={label} className="w-11 h-11 object-contain" />
        <p className="text-[12px] font-semibold text-gray-800">{label}</p>
        <p className="text-[10px] text-gray-500">{description}</p>
      </a>
    );
  };

  return (
    <div className="absolute right-0 top-[70px] w-[360px] p-1 bg-white border-[3px] border-gray-300 rounded-[30px] z-50">
      <div className="border-[1.5px] border-dashed border-gray-200 rounded-[27px] px-5 pt-5 pb-3">
        <p className="w-full text-center pt-2 text-xl font-bold text-gray-700 tracking-tight leading-snug">
          알아두면 좋은 공공정보 포털
        </p>
        <div className="bg-white rounded-[27px] p-2 grid grid-cols-3 gap-x-10 gap-y-6 mt-4 text-center">
          <MenuItem
            src="/img/MenuLogo/wellFunded.png"
            label="주택도시기금"
            description="청약 정보 및 지원 정책"
            url="https://nhuf.molit.go.kr"
          />
          <MenuItem
            src="/img/MenuLogo/youthPolicy.png"
            label="청년정책설명서"
            description="주요 청년 정책 일정 소개"
            url="https://youth.seoul.go.kr/mainB.do"
          />
          <MenuItem
            src="/img/MenuLogo/startUp.png"
            label="K-Startup"
            description="청년 창업자 지원 서비스"
            url="https://www.k-startup.go.kr"
          />
          <MenuItem
            src="/img/MenuLogo/welfare.png"
            label="복지로"
            description="다양한 복지 혜택 확인"
            url="https://www.bokjiro.go.kr/ssis-tbu/index.do"
          />
          <MenuItem
            src="/img/MenuLogo/government24.png"
            label="정부24"
            description="보조금 확인 및 신청"
            url="https://www.gov.kr"
          />
          <MenuItem
            src="/img/MenuLogo/allYoung.png"
            label="온통청년"
            description="더 많은 청년 정책"
            url="https://www.youthcenter.go.kr"
          />
          <MenuItem
            src="/img/MenuLogo/employment24.png"
            label="고용24"
            description="취업 지원 서비스 제공"
            url="https://work24.go.kr/cm/main.do"
          />
          <MenuItem
            src="/img/MenuLogo/youthFoundation.png"
            label="청년재단"
            description={
              <>
                청년을 위한 <br /> 다각적 지원 사업
              </>
            }
            url="https://kyf.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/scholarship.png"
            label="한국장학재단"
            description="학자금 지원과 멘토링"
            url="https://www.kosaf.go.kr/ko/main.do"
          />
        </div>
      </div>
    </div>
  );
}
