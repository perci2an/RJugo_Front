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
          알고 쓰면 힘이 되는 금융 포털
        </p>
        <div className="bg-white rounded-[27px] p-2 grid grid-cols-3 gap-x-10 gap-y-6 mt-4 text-center">
          <MenuItem
            src="/img/MenuLogo/Finance/financialAgency.png"
            label="서민금융진흥원"
            description="금융지원 제도 안내"
            url="https://www.kinfa.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/financialSupervisory.png"
            label="금융감독원"
            description={
              <>
                금융 교육자료 및<br />
                소비자 권익 보호
              </>
            }
            url="https://www.fss.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/kBank.png"
            label="한국은행"
            description={
              <>
                국내외 경제 흐름과
                <br />
                통화정책 리포트 제공
              </>
            }
            url="https://www.bok.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/fine.png"
            label="파인정보포털"
            description={
              <>
                청년 대상 금융상품 및<br />
                비교 정보 제공
              </>
            }
            url="https://fine.fss.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/bankUnion.png"
            label="전국은행연합회"
            description={
              <>
                청년·대학생 대상
                <br />
                금융 혜택
              </>
            }
            url="https://www.kfb.or.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/krx.png"
            label="한국거래소"
            description="금융투자와 증권시장 정보"
            url="https://www.krx.co.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/kodit.png"
            label="신용보증기금"
            description={
              <>
                청년 창업, 중소기업
                <br />
                금융지원 안내
              </>
            }
            url="https://www.kodit.co.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/ministryOfFinance.png"
            label="기획재정부"
            description={
              <>
                국가 재정 정책과
                <br />
                청년 금융정책 소개
              </>
            }
            url="https://www.moef.go.kr/"
          />
          <MenuItem
            src="/img/MenuLogo/Finance/financial committee.png"
            label="금융위원회"
            description={
              <>
                청년을 위한
                <br />
                금융정책·규제 정보
              </>
            }
            url="https://www.fsc.go.kr/"
          />
        </div>
      </div>
    </div>
  );
}
