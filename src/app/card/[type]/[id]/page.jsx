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
        <p>
          📍 지역:{" "}
          {Array.isArray(card.location)
            ? card.location.join(", ")
            : card.location}
        </p>
        <p>
          🗂️ 분야:{" "}
          {Array.isArray(card.category)
            ? card.category.join(", ")
            : card.category}
        </p>
        <p>
          👤 연령: {Array.isArray(card.age) ? card.age.join(", ") : card.age}
        </p>
        <p>
          👍 추천 상대:{" "}
          {Array.isArray(card.status) ? card.status.join(", ") : card.status}
        </p>
        <p>내용: {card.details}</p>
      </div>
    </div>
  );
}
