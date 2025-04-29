"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import PolicyMenu from "./PolicyMenu";
import FinanceMenu from "./FinanceMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getMenuComponent = () => {
    if (pathname.startsWith("/finance")) return <FinanceMenu />;
    if (pathname.startsWith("/policy")) return <PolicyMenu />;
    return null;
  };

  return (
    <div className="flex justify-between items-center w-full text-nowrap py-2 gap-14 relative">
      <Link href="/">
        <Image src="/img/logo.png" alt="banner image" width={90} height={90} />
      </Link>

      <div className="relative">
        <div
          className="group inline-flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 hover:bg-[#e0e0e0]/40 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src="/img/menu.png" alt="menu icon" width={35} height={35} />
        </div>

        {isOpen && <div ref={modalRef}>{getMenuComponent()}</div>}
      </div>
    </div>
  );
}
