import Image from 'next/image';
import Link from 'next/link';
import Float from '@/components/motion/Float';
import Reveal from '@/components/motion/Reveal';
import { contact } from '@/data/site';
import { buttonClass, container } from './styles';
import { cn } from '@/lib/utils';

interface CtaBlockProps {
  title?: string;
  description?: string;
  actionLabel?: string;
}

export default function CtaBlock({
  title = 'มีงานเว็บอยากเริ่ม? คุยกับ KUMA ได้เลย',
  description = 'เล่าเป้าหมาย ประเภทงาน และช่วงเวลาที่อยากเริ่มมาได้เลย คุยเบื้องต้นฟรี ไม่มีข้อผูกมัด',
  actionLabel = 'ขอใบเสนอราคา',
}: CtaBlockProps) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t-2 border-kuma-bark bg-kuma-sand">
      <div className={cn(container, 'relative grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:py-28')}>
        <Reveal className="relative z-10 lg:col-span-7">
          <h2 id="cta-title" className="text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-kuma-bark sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-kuma-clay">{description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className={buttonClass('primary', 'min-h-14 px-8 text-base')}>
              {actionLabel}
            </Link>
            <a href={contact.bookingMailto} className={buttonClass('secondary', 'min-h-14 px-7 text-base')}>
              นัดคุย brief 30 นาที ฟรี
            </a>
          </div>
          <p className="mt-6 text-[15px] text-kuma-clay">
            หรืออีเมลตรงถึง{' '}
            <a href={`mailto:${contact.email}`} className="break-all font-semibold text-kuma-bark underline decoration-kuma-gold decoration-2 underline-offset-4">
              {contact.email}
            </a>
          </p>
        </Reveal>

        <div className="relative mx-auto aspect-square w-full max-w-sm lg:col-span-5" aria-hidden="true">
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-kuma-bark/25 bg-kuma-cream/60" />
          <Reveal x={80} y={0} rotate={8} className="absolute inset-x-[10%] bottom-[4%] w-[80%]">
            <Float distance={6} duration={3}>
              <Image src="/image/illustrations/cta-envelope.webp" alt="" width={766} height={900} className="h-auto w-full" />
            </Float>
          </Reveal>
          <Float className="absolute right-[4%] top-[6%] w-[16%]" distance={10} duration={3.2} sway={10}>
            <Image src="/image/Asset/24.png" alt="" width={120} height={120} className="h-auto w-full rotate-12" />
          </Float>
          <Float className="absolute left-[2%] top-[18%] w-[13%]" distance={8} duration={4} delay={0.6} sway={-10}>
            <Image src="/image/Asset/22.png" alt="" width={120} height={120} className="h-auto w-full -rotate-12" />
          </Float>
        </div>
      </div>
    </section>
  );
}
