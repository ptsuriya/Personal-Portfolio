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
      <nav className="flex items-center gap-6 bg-[#FFF0CC]/80 backdrop-blur-md border border-[#E8C99A] rounded-full px-5 py-2.5 shadow-sm">
        <Link href="/">
          <Image
            src="/image/Asset/KUMA.png"
            width={68}
            height={30}
            alt="Kuma logo"
            className="object-contain"
            priority
          />
        </Link>

        <div className="h-4 w-px bg-[#E8C99A]" />

        {items.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-[#8B5E3C] hover:text-[#C07B2A] transition-colors px-1"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  )
}
