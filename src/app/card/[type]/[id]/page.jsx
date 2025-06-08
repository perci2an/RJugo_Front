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
      <div className="text-center mt-20 text-red-500 text-lg">
        해당 정책을 찾을 수 없습니다.
      </div>
    );
  }

  const jsonData = fs.readFileSync(filePath, "utf8");
  const card = JSON.parse(jsonData);

  // 필드 매핑: 정책 or 금융 구분해서 레이블 출력
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
    <div className="p-6 max-w-2xl mx-auto">
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          className="mb-6 w-full h-64 object-cover rounded-xl shadow"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
      <p className="text-gray-700 mb-6">{card.description}</p>

      <div className="text-sm text-gray-500 space-y-1">
        {fields.map(({ label, value }, index) => (
          <p key={index}>
            {label}: {Array.isArray(value) ? value.join(", ") : value}
          </p>
        ))}
        <p>내용: {card.details}</p>
      </div>
    </div>
  );
}
