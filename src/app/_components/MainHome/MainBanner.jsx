import Link from "next/link";
import Image from "next/image";

const BannerCard = ({ title, label, bgColor, imageSrc }) => {
  return (
    <li
      className={`flex flex-col gap-1 p-[80px] rounded-[35px] ${bgColor} text-center items-center`}
    >
      <span className="text-2xl text-white">{label}</span>
      <strong className="relative block my-[25px] mb-[40px] font-bold text-[2.7rem] text-white">
        {title}
      </strong>
      <Image src={imageSrc} alt="banner image" width={350} height={370} />
      <button className="block w-[400px] h-[80px] leading-[65px] text-[1.5rem] mt-[30px] bg-white/10 text-white rounded-[15px] transition-transform duration-300 hover:scale-105">
        바로가기
      </button>
    </li>
  );
};

export default function MainBanner() {
  return (
    <div className="flex flex-col text-center justify-center items-center text-nowrap w-full py-2 gap-9">
      <button className="text-[40px] font-semibold">
        <Link href="/">알받기</Link>
      </button>

      <div className="text-[#121212] font-light leading-[4.5rem] text-[4rem]">
        <h2>
          <strong className="font-semibold">서울</strong>이{" "}
          <strong className="font-semibold">청년</strong>을 위해 <br />
          무얼 하는지 <span className="inline">한눈에 보여줄게!</span>
        </h2>
      </div>

      <p className="mt-2 text-[1.7rem] text-[#6d6d71]">
        알받기에 오신 것을 환영합니다
      </p>

      <ul className="flex justify-center w-full gap-[65px] m-[60px]">
        <BannerCard
          title="정책정보"
          label="청년몽땅정보통 메인"
          bgColor="bg-[#0085e4]"
          imageSrc="/img/policy.png"
        />
        <BannerCard
          title="금융정보"
          label="청년몽땅정보통 메인"
          bgColor="bg-[#5c44f3]"
          imageSrc="/img/finance.png"
        />
      </ul>
    </div>
  );
}
