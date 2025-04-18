import { FaGithub, FaBlog } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2937] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">알주고</h2>
          <p className="text-base text-gray-400">
            청년의 시작을 함께하는{" "}
            <span className="text-blue-400 font-medium">알주고</span> 💡
          </p>
          <p className="text-sm text-gray-400 italic">
            우리가 몰랐던 정보, <br className="md:hidden" />
            알주고가 알려줄게요.
          </p>
        </div>

        <div className="flex justify-center md:justify-center">
          <div className="w-28 h-28 relative">
            {/* <Image
              src="/img/egg.png"
              alt="알주고 캐릭터"
              layout="fill"
              objectFit="contain"
              priority
            /> */}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-4">
          <p className="text-sm text-gray-400">바로가기</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/your-team-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://your-teammate.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tistory Blog"
              className="hover:text-white transition-colors"
            >
              <FaBlog size={28} />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} 알주고 팀
            <br />
            청년을 위한 대학생 팀 프로젝트
          </p>
        </div>
      </div>
    </footer>
  );
}
