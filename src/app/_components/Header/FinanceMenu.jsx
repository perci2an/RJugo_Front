export default function FinanceMenu() {
  const MenuItem = ({ src, label, description, url }) => (
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

  return (
    <div className="absolute right-0 top-[70px] w-[360px] p-1 bg-white border-[3px] border-gray-300 rounded-[30px] z-50">
      <div className="border-[1.5px] border-dashed border-gray-200 rounded-[27px] px-5 pt-5 pb-3">
        <p className="w-full text-center pt-2 text-xl font-bold text-gray-700 tracking-tight leading-snug">
          알아두면 좋은 금융 정보
        </p>
        <div className="bg-white rounded-[27px] p-2 grid grid-cols-3 gap-x-10 gap-y-6 mt-4 text-center">
          <MenuItem
            src="/img/MenuLogo/financePolicy.png"
            label="서민금융진흥원"
            description="지원 금융제도 안내"
            url="https://www.kinfa.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/fss.png"
            label="금융감독원"
            description="금융 교육자료 제공"
            url="https://www.fss.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/bok.png"
            label="한국은행"
            description="경제 흐름 리포트"
            url="https://www.bok.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/kb.png"
            label="국민은행"
            description="청년 금융상품 정보"
            url="https://obank.kbstar.com/"
          />
          <MenuItem
            src="/img/MenuLogo/shinhan.png"
            label="신한은행"
            description="청년 적금 혜택 안내"
            url="https://www.shinhan.com/"
          />
          <MenuItem
            src="/img/MenuLogo/hana.png"
            label="하나은행"
            description="청년 지원 상품 모음"
            url="https://www.kebhana.com/"
          />
        </div>
      </div>
    </div>
  );
}
