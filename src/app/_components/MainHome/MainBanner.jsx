import Link from "next/link";

export default function MainBanner() {
  return (
    <div className="flex flex-col text-center justify-center items-center text-nowrap py-2 gap-14">
      <button className="text-[32px] font-semibold">
        <Link href="/">알받기</Link>
      </button>
      <div>
        <div>
          <ul>
            <li>
              <Link href="/player-information">선수 정보</Link>
            </li>
            <li>
              <Link href="/top-ranking">탑랭킹</Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
