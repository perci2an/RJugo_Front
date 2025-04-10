import Link from "next/link";
import Image from "next/image";

const BannerCard = ({ title, label, bgColor, href, imageSrc }) => {
  return (
    <li
      className={`flex flex-col gap-1 p-[50px] rounded-[35px] ${bgColor} text-center items-center`}
    >
      <span className="text-base text-white">{label}</span>
      <strong className="relative block my-[8px] mb-[20px] font-bold text-[2rem] text-white">
        {title}
      </strong>
      <Image src={imageSrc} alt="banner image" width={250} height={250} />
      <Link
        href={href}
        className="flex items-center justify-center w-[330px] h-[70px] leading-[65px] text-[1.5rem] mt-[32px] 
             bg-white/15 hover:bg-white/30 
             text-white rounded-[15px] text-center 
             transition-all duration-300 hover:scale-105"
      >
        바로가기
      </Link>
    </li>
  );
};

export default function MainBanner() {
  return (
    <div className="flex flex-col text-center justify-center items-center text-nowrap w-full py-2 gap-6">
      <Image src="/img/logo2.png" alt="banner image" width={140} height={140} />

      <div className="text-[#121212] font-light leading-[4rem] text-[3rem]">
        <h2>
          <strong className="font-semibold">서울</strong>이{" "}
          <strong className="font-semibold">청년</strong>을 위해 <br />
          무얼 하는지 <span className="inline">한눈에 보여줄게!</span>
        </h2>
      </div>

      <p className="mb-[-10px] text-[1.3rem] text-[#6d6d71]">
        알받기에 오신 것을 환영합니다
      </p>

      <ul className="flex justify-center w-full gap-[50px] mt-[40px] my-[60px]">
        <BannerCard
          title="정책정보"
          label="몰랐던 기회, 지금 열려요!"
          bgColor="bg-[#2cb67d]"
          href="/policy"
          imageSrc="/img/policy.png"
        />
        <BannerCard
          title="금융정보"
          label="내 지갑을 위한 머니꿀팁"
          bgColor="bg-[#7f5af0]"
          href="/finance"
          imageSrc="/img/finance.png"
        />
      </ul>

      <p className="mt-[-20px] text-[0.8rem] text-[#6d6d71]">
        &copy; INDUK UNIVERSITY COMPUTER SOFTWARE ALBAKKI PROJECT.
      </p>
    </div>
  );
}
