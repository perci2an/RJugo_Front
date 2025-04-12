import Image from "next/image";

export const metadata = {
  title: "404 - 페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-14 bg-gradient-to-br from-[#fefcfb] via-[#ece9f1] to-[#d9e1f2] text-center animate-fadeIn">
      <Image
        className="absolute top-28"
        src="/img/logo2.png"
        alt="banner image"
        width={210}
        height={210}
      />

      <h1 className="text-9xl font-extrabold text-[#7f5af0] drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 animate-bounce">
        이 페이지는 존재하지 않아요
      </h2>
      <p className="text-lg text-slate-600 mb-6 max-w-xl">
        주소를 잘못 입력하셨거나, 더 이상 존재하지 않는 페이지일 수 있어요.
        <br />
        아래 버튼을 눌러 홈으로 돌아가볼까요?
      </p>
      <a
        href="/"
        className="mt-2 inline-block px-8 py-4 bg-[#7f5af0] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#6c4cd9] transition-transform transform hover:scale-105 active:scale-95"
      >
        홈으로 이동하기
      </a>
    </div>
  );
}
