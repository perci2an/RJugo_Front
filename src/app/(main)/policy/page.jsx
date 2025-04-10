import CustomFilter from "../../_components/CustomFilter";

export default function Home() {
  return (
    <main>
      <h2 className="w-screen bg-[#2cb67d] py-16 mt-8 text-white text-center text-[40px] font-light">
        몰랐다면 지금이 기회, 알고 있었다면 더 잘 쓰는 방법! <br />
        청년을 위한 혜택, 모르면 손해예요 🌟
      </h2>

      <CustomFilter />
    </main>
  );
}
