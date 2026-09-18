import Image from 'next/image';
import Link from 'next/link';
import Breathe from '@/components/motion/Breathe';
import { contact, navItems, startingRate } from '@/data/site';
import { container } from './styles';
import { cn } from '@/lib/utils';

export default function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-kuma-bark bg-kuma-bark pb-28 text-kuma-cream lg:pb-0">
      {/* Sleeping bear resting on the footer edge */}
      <Breathe className="pointer-events-none absolute -top-[5.25rem] left-1/2 w-44 -translate-x-1/2 sm:left-auto sm:right-12 sm:w-56 sm:translate-x-0">
        <Image src="/image/illustrations/footer-sleeping.webp" alt="" width={900} height={599} aria-hidden="true" className="h-auto w-full" />
      </Breathe>
      <div className={cn(container, 'grid gap-10 pt-16 pb-14 md:grid-cols-12')}>
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex rounded-full border-2 border-kuma-gold bg-[#FFF3CE] px-4 py-1.5">
            <Image src="/image/Asset/KUMA.png" alt="KUMA หน้าแรก" width={96} height={48} className="h-10 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-[#E8C4A0]">
            ฟรีแลนซ์ในจันทบุรี รับงานทุกพื้นที่ ออกแบบและพัฒนาเว็บไซต์ เว็บแอป และระบบหลังบ้านสำหรับธุรกิจ คุยงานกับคนทำโดยตรงตั้งแต่ brief จนส่งมอบ
          </p>
          <p className="mt-4 inline-block rounded-full bg-kuma-gold px-4 py-1 font-semibold text-kuma-bark">
            เริ่มต้น {startingRate.toLocaleString('th-TH')} บาท
          </p>
        </div>

        <nav aria-label="เมนูท้ายเว็บ" className="md:col-span-3">
          <p className="font-semibold text-kuma-gold">เมนู</p>
          <ul className="mt-4 space-y-2 text-[#E8C4A0]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-kuma-cream">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-semibold text-kuma-gold">ติดต่อ</p>
          <ul className="mt-4 space-y-2 text-[#E8C4A0]">
            <li><Link href="/contact" className="transition-colors hover:text-kuma-cream">ขอใบเสนอราคา</Link></li>
            <li><a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-kuma-cream">{contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-kuma-cream/10">
        <p className={cn(container, 'py-5 text-sm text-[#C9A58A]')}>© {new Date().getFullYear()} kumadesign.dev</p>
      </div>
    </footer>
  );
}
