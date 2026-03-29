'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface NavItem {
  href: string
  label: string
}

interface PillNavProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { href: '/blog', label: 'บทความ' },
]

export default function PillNav({ items = defaultItems }: PillNavProps) {
  return (
    <motion.header
      className="sticky top-4 z-50 flex justify-center px-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex items-center gap-5 rounded-full border border-[#C88D14]/75 bg-[linear-gradient(180deg,rgba(255,243,206,0.98)_0%,rgba(238,198,93,0.95)_100%)] px-5 py-3 shadow-[0_14px_34px_rgba(154,104,10,0.2)] backdrop-blur-xl">
        <Link href="/">
          <Image
            src="/image/Asset/KUMA.png"
            width={68}
            height={30}
            alt="Kuma logo"
            className="object-contain drop-shadow-[0_4px_12px_rgba(154,104,10,0.18)] transition-transform duration-300 hover:scale-[1.03]"
            priority
          />
        </Link>

        <div className="h-5 w-px bg-[#D9A63D]" />

        {items.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
          >
            <Link
              href={item.href}
              className="inline-flex items-center rounded-full bg-transparent px-2.5 py-1 text-base font-semibold leading-none tracking-[0.01em] text-[#5D3903] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8E5400] hover:text-[#FFF8E8] hover:shadow-[0_8px_18px_rgba(115,72,4,0.32)]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  )
}
