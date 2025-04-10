import Image from "next/image";

export default function Menu() {
  return (
    <div className="absolute right-0 top-[70px] w-[300px] p-1 bg-white border-[3px] border-gray-300 rounded-[30px] z-50">
      <div className="bg-white rounded-[27px] p-6 border-[1.5px] border-dashed border-gray-200 grid grid-cols-3 gap-4 text-center">
        <MenuItem src="/img/egg.png" label="일자리" />
        <MenuItem src="/img/egg.png" label="주거" />
        <MenuItem src="/img/egg.png" label="진로" />
        <MenuItem src="/img/egg.png" label="교육" />
        <MenuItem src="/img/egg.png" label="생활" />
        <MenuItem src="/img/egg.png" label="대외활동" />
        <MenuItem src="/img/egg.png" label="예술" />
        <MenuItem src="/img/egg.png" label="사회" />
        <MenuItem src="/img/egg.png" label="커뮤니티" />
        <MenuItem src="/img/egg.png" label="공간" />
        <MenuItem src="/img/egg.png" label="상담" />
      </div>
    </div>
  );
}

function MenuItem({ src, label }) {
  return (
    <div className="flex flex-col items-center text-sm hover:opacity-80 transition-opacity duration-200 cursor-pointer">
      <Image src={src} alt={label} width={40} height={40} />
      <span className="mt-1">{label}</span>
    </div>
  );
}
