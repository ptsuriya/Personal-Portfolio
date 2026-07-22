'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
}

interface PillNavProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { href: '/services', label: 'บริการ' },
  { href: '/work', label: 'โซลูชัน' },
  { href: '/process', label: 'กระบวนการ' },
]

export default function PillNav({ items = defaultItems }: PillNavProps) {
  const pathname = usePathname()

  return (
    <motion.header
      className="sticky top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav aria-label="เมนูหลัก" className="flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-[#C88D14]/75 bg-[linear-gradient(180deg,rgba(255,243,206,0.98)_0%,rgba(238,198,93,0.95)_100%)] px-2 py-2 shadow-[0_14px_34px_rgba(154,104,10,0.2)] backdrop-blur-xl sm:gap-2 sm:rounded-full sm:px-4 sm:py-3">
        <Link href="/" className="shrink-0 px-2 sm:px-1">
          <span className="relative block h-[37px] w-[74px] sm:h-[42px] sm:w-[84px]">
            <Image
              src="/image/Asset/KUMA.png"
              alt="KUMA"
              fill
              sizes="(min-width: 640px) 84px, 74px"
              className="object-contain drop-shadow-[0_4px_12px_rgba(154,104,10,0.18)] transition-transform duration-300 hover:scale-[1.04]"
              priority
            />
          </span>
        </Link>

        <div className="mx-1 h-5 w-px shrink-0 bg-[#D9A63D]" />

        {items.map((item, i) => (
          <motion.div
            key={item.href}
            className={item.href === '/process' ? 'hidden sm:block' : undefined}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
          >
            <Link
              href={item.href}
              aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? 'page' : undefined}
              className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold leading-none tracking-[0.01em] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8E5400] hover:text-[#FFF8E8] hover:shadow-[0_8px_18px_rgba(115,72,4,0.32)] sm:px-3 sm:py-1.5 sm:text-sm ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? 'bg-[#8E5400] text-[#FFF8E8] shadow-[0_8px_18px_rgba(115,72,4,0.2)]' : 'bg-transparent text-[#5D3903]'}`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <Link href="/contact" className="ml-1 inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-[#24110B] px-3 py-2 text-xs font-semibold leading-none text-[#FFF7E8] transition-all hover:-translate-y-[1px] hover:bg-[#C86858] sm:px-4 sm:py-2 sm:text-sm">
          คุยโปรเจกต์
        </Link>
      </nav>
    </motion.header>
  )
}
