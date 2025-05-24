// /app/card/[type]/[id]/page.jsx
import fs from "fs";
import path from "path";

export default async function CardDetailPage({ params }) {
  const { type, id } = params; // type: "policy" or "finance"

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
      <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
      <p className="text-gray-700 mb-6">{card.description}</p>
      <div className="text-sm text-gray-500">
        <p>📍 지역: {card.location}</p>
        <p>🗂️ 분야: {card.category}</p>
        <p>👤 연령: {card.age}</p>
        <p>내용: {card.details}</p>
      </div>
    </div>
  );
}
