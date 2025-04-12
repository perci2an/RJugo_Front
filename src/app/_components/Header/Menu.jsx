import Image from "next/image";

export default function Menu() {
  const MenuItem = ({ src, label, description }) => {
    return (
      <div className="flex flex-col items-center text-center space-y-2">
        <img src={src} alt={label} className="w-14 h-14 object-contain" />
        <p className="text-[12px] font-semibold text-gray-800">{label}</p>
        <p className="text-[8px] text-gray-500">{description}</p>
      </div>
    );
  };

  return (
    <div className="absolute right-0 top-[70px] w-[300px] p-1 bg-white border-[3px] border-gray-300 rounded-[30px] z-50">
      <div className="border-[1.5px] border-dashed border-gray-200 rounded-[27px] p-5">
        <p className="w-full text-center pt-2 text-base font-semibold text-gray-800 tracking-wide">
          꼭 알아두면 좋은 공공정보 포털
        </p>
        <div className="bg-white rounded-[27px] p-2 grid grid-cols-3 gap-7 text-center">
          <MenuItem
            src="/img/egg.png"
            label="주택도시기금"
            description="청약 정보 및 지원 정책"
          />
          <MenuItem
            src="/img/egg.png"
            label="온통청년"
            description="더 많은 청년 정책"
          />
          <MenuItem
            src="/img/egg.png"
            label="K-Startup"
            description="청년 창업자 지원 서비스"
          />
          <MenuItem
            src="/img/egg.png"
            label="복지로"
            description="다양한 복지 혜택 확인"
          />
          <MenuItem
            src="/img/egg.png"
            label="정부24"
            description="보조금 확인 및 신청"
          />
          <MenuItem
            src="/img/egg.png"
            label="청년정책설명서"
            description="주요 청년 정책 일정 소개"
          />
          <MenuItem
            src="/img/egg.png"
            label="청년정책설명서"
            description="주요 청년 정책 일정 소개"
          />
          <MenuItem
            src="/img/egg.png"
            label="청년정책설명서"
            description="주요 청년 정책 일정 소개"
          />
          <MenuItem
            src="/img/egg.png"
            label="청년정책설명서"
            description="주요 청년 정책 일정 소개"
          />
        </div>
      </div>
    </div>
  );
}

function MenuItem({ src, label }) {
  return (
    <div className="flex flex-col items-center text-sm hover:opacity-80 transition-opacity duration-200 cursor-pointer">
      <Image src={src} alt={label} width={40} height={40} />
      <span className="mt-1">{label}</span>
    </div>
  );
}
