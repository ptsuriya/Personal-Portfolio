'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import GrainyGradient from "@/components/reactbits/GrainyGradient";

const navLinks = [
  { href: "/musicwork", label: "เพลงของฉัน" },
  { href: "/musicwork/pricing", label: "ราคา" },
];

export default function MusicworkLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      <GrainyGradient />
      <nav className="sticky top-0 z-50 border-b border-[#C86858]/20 bg-[#FDF0EC]/80 backdrop-blur-md">
        <div className="w-full mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <Link href="/">
            <Image
              src="/image/Asset/KUMA.png"
              width={68}
              height={30}
              alt="Kuma"
              className="object-contain transition-opacity hover:opacity-75"
              style={{ height: 'auto' }}
            />
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-[#C86858] to-[#9A4858] text-white"
                      : "text-[#9A5848] hover:bg-[#FAE4DC] hover:text-[#2A1010]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
}
