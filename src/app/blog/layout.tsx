import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import GrainyGradient from "@/components/reactbits/GrainyGradient";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <GrainyGradient />
      <nav className="sticky top-0 z-50 border-b border-[#E8B8A8]/40 bg-[#FDF0EC]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <Link href="/">
            <Image
              src="/image/Asset/KUMA.png"
              width={68}
              height={30}
              alt="Kuma"
              className="object-contain transition-opacity hover:opacity-75"
            />
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[#9A5848] transition-colors hover:bg-[#FAE4DC] hover:text-[#2A1010]"
          >
            บทความทั้งหมด
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
