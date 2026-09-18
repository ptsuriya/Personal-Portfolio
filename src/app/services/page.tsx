import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PageIntro from '@/components/site/PageIntro';
import CtaBlock from '@/components/site/CtaBlock';
import { buttonClass, container } from '@/components/site/styles';
import { services } from '@/data/services';
import { serviceIllustrations as serviceArt, startingRate, workingPromises } from '@/data/site';
import { cn } from '@/lib/utils';
import Reveal from '@/components/motion/Reveal';
import Float from '@/components/motion/Float';

export const metadata: Metadata = {
  title: 'บริการรับทำเว็บไซต์ เริ่มต้น 2,500 บาท',
  description: 'บริการฟรีแลนซ์รับทำเว็บบริษัท Landing Page เว็บแอป ระบบหลังบ้าน และออกแบบ UI/UX งานเริ่มต้น 2,500 บาท พร้อมระยะเวลาและสิ่งที่จะได้รับของแต่ละบริการ',
  alternates: { canonical: '/services' },
};

function formatPrice(price: number | null, note?: string) {
  if (price === null) return 'ขอใบเสนอราคา';
  return `${note ?? ''} ฿${price.toLocaleString('th-TH')}`.trim();
}

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        title="บริการฟรีแลนซ์รับเขียนเว็บไซต์"
        description={`รับทำเว็บบริษัท, Landing Page, เว็บแอป และระบบหลังบ้านแบบครบขั้นตอน งานเริ่มต้น ${startingRate.toLocaleString('th-TH')} บาท ราคาจริงขึ้นอยู่กับจำนวนหน้า ฟังก์ชัน และความซับซ้อนของระบบ`}
        sticker="/image/illustrations/page-services.webp"
      >
        <nav aria-label="บริการทั้งหมด" className="mt-8 flex flex-wrap gap-3">
          {services.map((service) => (
            <a key={service.slug} href={`#${service.slug}`} className="inline-flex min-h-11 items-center rounded-full border-2 border-kuma-bark bg-white px-4 text-[15px] font-medium text-kuma-bark shadow-[3px_3px_0_0_#2A1010] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-kuma-honey hover:shadow-[2px_2px_0_0_#2A1010]">
              {service.title}
            </a>
          ))}
        </nav>
      </PageIntro>

      <div className={container}>
        {services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-title`}
            className="grid scroll-mt-24 gap-10 border-b-2 border-dashed border-kuma-line py-16 last:border-b-0 lg:grid-cols-12 lg:py-20"
          >
            <Reveal x={-40} y={0} className="lg:col-span-5">
              <Float distance={8} duration={4.5} className="mb-5 w-28">
                <Image src={serviceArt[service.slug]} alt="" width={900} height={900} className="h-28 w-28 object-contain" />
              </Float>
              <h2 id={`${service.slug}-title`} className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-kuma-bark sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-kuma-clay">{service.tagline}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-kuma-line pt-6">
                <div>
                  <dt className="text-sm text-kuma-clay">ราคา</dt>
                  <dd className="mt-1 text-lg font-semibold text-kuma-bark">{formatPrice(service.startingPrice, service.priceNote)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-kuma-clay">ระยะเวลา</dt>
                  <dd className="mt-1 text-lg font-semibold text-kuma-bark">{service.timeline}</dd>
                </div>
              </dl>
              <Link href={`/contact?type=${service.slug}`} className={buttonClass('primary', 'mt-8')}>
                ขอประเมินราคางานนี้
              </Link>
            </Reveal>

            <Reveal delay={0.15} className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              <div>
                <h3 className="font-semibold text-kuma-bark">สิ่งที่จะได้รับ</h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-kuma-cocoa">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-kuma-amber" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-kuma-bark">เหมาะกับ</h3>
                <ul className="mt-4 space-y-3">
                  {service.bestFor.map((item) => (
                    <li key={item} className="leading-7 text-kuma-clay">{item}</li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-kuma-line pt-4 text-sm leading-7 text-kuma-clay">
                  เครื่องมือ: {service.tags.join(', ')}
                </p>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <section aria-label="สิ่งที่ได้ทุกงาน" className="border-t border-kuma-line/70 bg-white/40">
        <ul className={cn(container, 'grid gap-8 py-12 sm:grid-cols-3')}>
          {workingPromises.map((promise, index) => (
            <Reveal as="li" key={promise.title} delay={index * 0.12}>
              <p className="text-lg font-semibold text-kuma-bark">{promise.title}</p>
              <p className="mt-1 leading-7 text-kuma-clay">{promise.description}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBlock
        title="ยังไม่แน่ใจว่าเว็บแบบไหนเหมาะกับธุรกิจ?"
        description="ส่งรายละเอียดมาให้ KUMA ช่วยประเมินได้ฟรี ไม่มีค่าใช้จ่ายในการคุยเบื้องต้น"
      />
    </main>
  );
}
