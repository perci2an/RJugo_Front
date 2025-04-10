"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // 외부 클릭 시 모달 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {isOpen && (
          <div
            ref={modalRef}
            className="absolute right-0 top-[70px] bg-white shadow-xl rounded-[25px] w-[280px] p-5 z-50 transition-all duration-300"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <ModalItem src="/img/icon1.png" label="Gmail" />
              <ModalItem src="/img/icon2.png" label="Drive" />
              <ModalItem src="/img/icon3.png" label="YouTube" />
              {/* 필요한 만큼 더 추가 가능 */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Modal 항목 (JSX 버전)
function ModalItem({ src, label }) {
  return (
    <div className="flex flex-col items-center text-sm">
      <Image src={src} alt={label} width={40} height={40} />
      <span className="mt-1">{label}</span>
    </div>
  );
}
