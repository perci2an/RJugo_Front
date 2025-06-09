import Header from "../../../_components/Header/Header";
import Footer from "../../../_components/Footer";
import fs from "fs";
import path from "path";

export function generateStaticParams() {
  const policyDir = path.join(process.cwd(), "public", "data", "policy");
  const financeDir = path.join(process.cwd(), "public", "data", "finance");

  const policyFiles = fs.existsSync(policyDir)
    ? fs.readdirSync(policyDir).filter((file) => file.endsWith(".json"))
    : [];
  const financeFiles = fs.existsSync(financeDir)
    ? fs.readdirSync(financeDir).filter((file) => file.endsWith(".json"))
    : [];

  const policyParams = policyFiles.map((file) => ({
    type: "policy",
    id: file.replace(/\.json$/, ""),
  }));

  const financeParams = financeFiles.map((file) => ({
    type: "finance",
    id: file.replace(/\.json$/, ""),
  }));

  return [...policyParams, ...financeParams];
}

export default async function CardDetailPage({ params }) {
  const { type, id } = params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    type,
    `${id}.json`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-50">
        <p className="text-red-600 text-xl font-semibold">
          해당 정책을 찾을 수 없습니다.
        </p>
      </div>
    );
  }

  const jsonData = fs.readFileSync(filePath, "utf8");
  const card = JSON.parse(jsonData);

  const fields = [
    {
      label: type === "finance" ? "🏦 은행" : "📍 지역",
      value: card.bank ?? card.location ?? "정보 없음",
    },
    {
      label: type === "finance" ? "💰 금리" : "🗂️ 분야",
      value: card.rate ?? card.category ?? "정보 없음",
    },
    {
      label: type === "finance" ? "⏳ 가입기간" : "👤 연령",
      value: card.period ?? card.age ?? "정보 없음",
    },
    {
      label: type === "finance" ? "💵 최소금액" : "👍 추천 상대",
      value: card.amount ?? card.status ?? "정보 없음",
    },
  ];

  return (
    <html lang="en">
      <body>
        <main className="bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#e1e1e1]">
          <div className="flex flex-col items-center w-[1280px] mx-auto pt-5 px-16">
            <Header />

            <main className="flex-grow w-full max-w-6xl mx-auto px-6 md:px-12 py-12">
              <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-3">
                  {card.title}
                </h1>

                <p className="text-lg leading-relaxed text-gray-700 mb-10">
                  {card.description}
                </p>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {fields.map(({ label, value }, idx) => (
                    <div
                      key={idx}
                      className="bg-indigo-50 rounded-lg p-4 flex flex-col justify-center shadow-inner hover:shadow-md transition-shadow cursor-default"
                    >
                      <span className="text-indigo-600 font-semibold text-sm mb-1 select-none">
                        {label}
                      </span>
                      <span className="text-gray-800 text-base">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  ))}
                </section>

                <section
                  className="prose max-w-none text-gray-800"
                  dangerouslySetInnerHTML={{ __html: card.details }}
                />
              </article>
            </main>

            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
