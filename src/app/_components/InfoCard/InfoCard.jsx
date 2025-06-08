import Link from "next/link";

export default function InfoCard({
  id,
  type,
  title,
  location,
  category,
  bank,
  period,
  bgImage,
}) {
  const locationSource = location ?? bank;
  const locations = Array.isArray(locationSource)
    ? locationSource
    : locationSource?.split(",").map((loc) => loc.trim());

  const categorySource = category ?? period;
  const categories = Array.isArray(categorySource)
    ? categorySource
    : categorySource?.split(",").map((cat) => cat.trim());

  return (
    <Link href={`/card/${type}/${id}`}>
      <div className="w-[260px] h-[360px] rounded-2xl bg-white shadow-md border border-gray-200 relative overflow-hidden group transition-all duration-300 hover:bg-[#f9f9f9] hover:border-[#7f5af0] cursor-pointer">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#7f5af0] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
        <div className="h-3/5 rounded-t-2xl overflow-hidden relative">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-2/5 rounded-b-2xl group-hover:bg-[#f5f5f5] transition-colors duration-300">
          <div className="flex flex-wrap gap-1 mb-2">
            {locations?.map((loc, idx) => (
              <span
                key={idx}
                className="text-xs text-white bg-gray-800 px-2 py-1 rounded w-fit shadow"
              >
                📍 {loc}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {categories?.map((cat, idx) => (
              <span
                key={idx}
                className="text-sm text-[#2cb67d] font-medium group-hover:text-[#7f5af0] transition-colors duration-300"
              >
                #{cat}
              </span>
            ))}
          </div>
          <h4 className="text-base font-semibold mt-1 text-gray-800 truncate">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
