import AnimatedText from "../../../_components/AnimatedText";

export default function Home() {
  return (
    <main>
      <div
        className="w-screen py-16 mt-8 text-white text-center text-[40px] font-light"
        style={{
          backgroundImage: "url('/img/financeBanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatedText text={`금융 상세 페이지입니다`} />
      </div>
    </main>
  );
}
