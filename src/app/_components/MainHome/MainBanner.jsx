import Link from "next/link";

const BannerCard = ({ title, label, bgColor }) => {
  return (
    <li
      className={`flex flex-col gap-1 p-[55px] rounded-[35px] ${bgColor} text-center`}
    >
      <span className="text-base text-white">{label}</span>
      <strong className="relative block my-[25px] mb-[35px] pb-[250px] font-bold text-[2rem] text-white">
        {title}
      </strong>
      <button className="block w-[300px] h-[65px] leading-[65px] text-[1.3rem] bg-white/10 text-white rounded-[15px] transition-transform duration-300 hover:scale-105">
        바로가기
      </button>
    </li>
  );
};

export default function MainBanner() {
  return (
    <div className="flex flex-col text-center justify-center items-center text-nowrap w-full py-2 gap-7">
      <button className="text-[32px] font-semibold">
        <Link href="/">알받기</Link>
      </button>

      <div className="text-[#121212] font-light leading-[4.3rem] text-[3rem]">
        <h2>
          <strong className="font-semibold">서울</strong>이{" "}
          <strong className="font-semibold">청년</strong>을 위해 <br />
          무얼 하는지 <span className="inline">한눈에 보여줄게!</span>
        </h2>
      </div>

      <p className="mt-2 text-[1.3rem] text-[#6d6d71]">
        알받기에 오신 것을 환영합니다
      </p>

      <ul className="flex justify-center gap-[50px] m-[60px]">
        <BannerCard
          title="정책정보"
          label="청년몽땅정보통 메인"
          bgColor="bg-[#0085e4]"
        />
        <BannerCard
          title="금융정보"
          label="청년몽땅정보통 메인"
          bgColor="bg-[#5c44f3]"
        />
      </ul>
    </div>
  );
}
