import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full text-nowrap py-2 gap-14">
      <Link href="/">
        <Image src="/img/logo.png" alt="banner image" width={90} height={90} />
      </Link>
      <Image src="/img/menu.png" alt="banner image" width={35} height={35} />
    </div>
  );
}
