import Link from "next/link";

export default function InfoCard({ id, title, location, bgImage }) {
  return (
    <Link href={`/card/${id}`}>
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
          <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded w-fit shadow">
            📍 {location}
          </span>
          <span className="text-sm text-[#2cb67d] mt-2 font-medium group-hover:text-[#7f5af0] transition-colors duration-300">
            청년들이 최다방문한 정책
          </span>
          <h4 className="text-base font-semibold mt-1 text-gray-800 truncate">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
