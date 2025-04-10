import Image from "next/image";

export default function Menu() {
  return (
    <div className="absolute right-0 top-[70px] w-[300px] p-1 bg-white border-[3px] border-gray-300 rounded-[30px] z-50">
      <div className="bg-white rounded-[27px] p-6 border-[1.5px] border-dashed border-gray-200 grid grid-cols-3 gap-4 text-center">
        <MenuItem src="/img/egg.png" label="Gmail" />
        <MenuItem src="/img/egg.png" label="Drive" />
        <MenuItem src="/img/egg.png" label="YouTube" />
        <MenuItem src="/img/egg.png" label="Gmail" />
        <MenuItem src="/img/egg.png" label="Drive" />
        <MenuItem src="/img/egg.png" label="YouTube" />
        <MenuItem src="/img/egg.png" label="Gmail" />
        <MenuItem src="/img/egg.png" label="Drive" />
        <MenuItem src="/img/egg.png" label="YouTube" />
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
