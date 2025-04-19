import { FaGithub, FaBlog } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-screen h-px bg-gray-300 mt-5" />

      <footer className="w-screen bg-gradient-to-t from-[#f5f5f5] via-[#eeeeee] to-[#e8e8e8] pt-10 pb-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left text-[#6d6d71]">
          <div className="flex flex-col justify-start items-start">
            <div className="w-40 h-20 relative mb-3">
              <Image
                src="/img/logo2.png"
                alt="알주고 로고"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} 알주고 팀
            </p>
            <p className="text-sm">청년 맞춤형 정책 추천 플랫폼</p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-[#3a3a3a] whitespace-nowrap">
            <p className="font-semibold text-[#111111] text-xl">
              빛나라 청춘아! 빛나라 내 인생아!!💪
            </p>
            <div className="space-y-1 text-base leading-relaxed text-[#3a3a3a]">
              <p className="text-sm text-[#4a4a4a]">
                열심히 살고 있는지, 잘하고 있는지 고민하는 건 자연스러운
                일입니다.
              </p>
              <p className="text-sm text-[#4a4a4a]">
                그만큼 잘하고 있고, 가고 있는 길이 맞다는 뜻이에요.
              </p>
              <p className="text-sm text-[#4a4a4a]">잘하고 있어요, 당신.</p>
            </div>
            <p className="text-[#4c5c68] font-medium mt-4 text-sm sm:text-base">
              #청년힘내요 #힘내자청춘 #내일은더나은날
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-3">
            <p className="text-base font-semibold text-[#121212]">Follow us</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/perci2an/RJugo_Front"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#121212] transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://181022.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tistory Blog"
                className="hover:text-[#121212] transition-colors"
              >
                <FaBlog size={28} />
              </a>
            </div>
            <p className="text-xs text-right leading-relaxed text-[#6d6d71] mt-3">
              문의: psmim1216@naver.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
