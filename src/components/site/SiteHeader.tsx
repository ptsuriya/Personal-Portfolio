'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Menu, X } from 'lucide-react';
import { contact, navItems } from '@/data/site';
import { buttonClass, container } from './styles';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-kuma-line/60 bg-kuma-cream/90 backdrop-blur-md">
      <div className={cn(container, 'flex h-16 items-center gap-6 lg:h-20')}>
        <Link href="/" className="relative block h-10 w-20 shrink-0 rounded-md" onClick={() => setOpen(false)}>
          <Image src="/image/Asset/KUMA.png" alt="KUMA หน้าแรก" fill sizes="80px" className="object-contain" priority />
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className="relative rounded-lg px-3 py-2 text-[15px] font-medium text-kuma-clay transition-colors hover:text-kuma-bark aria-[current=page]:text-kuma-bark aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-kuma-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/contact" className={buttonClass('primary', 'min-h-11 px-4 text-sm sm:text-[15px]')} onClick={() => setOpen(false)}>
            ขอใบเสนอราคา
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-kuma-bark/15 text-kuma-bark lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'ปิดเมนู' : 'เปิดเมนู'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="เมนูหลัก" className="border-t border-kuma-line/60 bg-kuma-cream lg:hidden">
          <ul className={cn(container, 'py-3')}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="flex min-h-12 items-center border-b border-kuma-line/50 text-lg font-medium text-kuma-cocoa aria-[current=page]:text-kuma-amber-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="flex min-h-12 items-center gap-2 break-all text-lg font-medium text-kuma-cocoa">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
