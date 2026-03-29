import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/design", label: "งานของฉัน" },
  { href: "/design/pricing", label: "ราคา" },
  { href: "/design/resume", label: "ประวัติ" },
];

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <nav className="sticky top-0 z-50 bg-[#FDF6EC]/90 backdrop-blur-sm border-b border-[#E8C99A]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/image/Asset/KUMA.png"
              width={72}
              height={32}
              alt="Kuma logo"
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#8B5E3C] hover:text-[#C07B2A] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
