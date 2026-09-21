import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, MessageSquareText, Receipt, Store } from 'lucide-react';
import PageIntro from '@/components/site/PageIntro';
import WorkShowcase from '@/components/site/WorkShowcase';
import CtaBlock from '@/components/site/CtaBlock';
import ComingSoonBanner from '@/components/site/ComingSoonBanner';
import FAQAccordion from '@/components/faq/FAQAccordion';
import Reveal from '@/components/motion/Reveal';
import { bodyText, buttonClass, container, sectionTitle, stickerCard } from '@/components/site/styles';
import { caseStudies } from '@/data/case-studies';
import { businessArticles } from '@/data/articles';
import { faqs, type FAQItem } from '@/data/faq';
import { adminAddonRate, chanthaburiDistricts, contact, siteUrl, startingRate } from '@/data/site';
import { cn } from '@/lib/utils';

const baht = (value: number) => value.toLocaleString('th-TH');

const title = `รับทำเว็บไซต์ จันทบุรี เริ่มต้น ${baht(startingRate)} บาท`;
const description = `ฟรีแลนซ์รับทำเว็บไซต์ในจันทบุรี นัดเจอคุยงานได้ คุยกับคนออกแบบและเขียนเว็บโดยตรง ราคาเริ่มต้น ${baht(startingRate)} บาท รับทำเว็บบริษัท ร้านค้า สวนผลไม้ ร้านพลอย ที่พัก และธุรกิจทุกอำเภอ`;

export const metadata: Metadata = {
  title,
  description,
  keywords: ['รับทำเว็บไซต์ จันทบุรี', 'รับทำเว็บ จันทบุรี', 'ทำเว็บไซต์ จันทบุรี', 'ฟรีแลนซ์ทำเว็บ จันทบุรี', 'ออกแบบเว็บไซต์ จันทบุรี', 'จ้างทำเว็บไซต์ จันทบุรี'],
  alternates: { canonical: '/chanthaburi' },
  openGraph: { title, description, url: '/chanthaburi' },
};

const reasons = [
  {
    icon: MapPin,
    title: 'นัดเจอคุยงานในจันทบุรีได้',
    description: 'ไม่ต้องคุยผ่านเซลส์หรือคอลเซ็นเตอร์ต่างจังหวัด นัดคุยที่ร้านหรือสถานที่ที่สะดวกได้',
  },
  {
    icon: MessageSquareText,
    title: 'คุยกับคนทำโดยตรง',
    description: 'คนที่รับ brief คือคนออกแบบและเขียนเว็บเอง เรื่องที่คุยจึงไม่ตกหล่นระหว่างทาง',
  },
  {
    icon: Receipt,
    title: `ราคาเริ่มต้น ${baht(startingRate)} บาท`,
    description: 'สรุปขอบเขตงานและราคาให้ชัดก่อนเริ่ม ถ้าขอบเขตเปลี่ยนจะคุยเรื่องราคาก่อนเสมอ',
  },
  {
    icon: Store,
    title: 'เข้าใจธุรกิจในพื้นที่',
    description: 'สวนผลไม้ ล้ง ร้านพลอย ที่พัก ร้านอาหาร และของฝาก แต่ละแบบต้องการข้อมูลบนเว็บไม่เหมือนกัน',
  },
];

const pricing = [
  {
    name: 'เว็บไซต์เริ่มต้น',
    price: `${baht(startingRate)} บาท`,
    note: 'ราคาเริ่มต้น ราคาจริงตามจำนวนหน้าและฟังก์ชัน',
    items: ['ออกแบบหน้าตาให้เข้ากับธุรกิจ', 'ใช้งานง่ายบนมือถือ', 'วางพื้นฐาน SEO ให้ Google เข้าใจเว็บ'],
    featured: true,
  },
  {
    name: 'ระบบหลังบ้านแก้เองได้',
    price: `+${baht(adminAddonRate)} บาทขึ้นไป`,
    note: 'สำหรับธุรกิจที่อยากเพิ่มหรือแก้ข้อมูลเองบ่อย ๆ',
    items: ['แก้ข้อความ รูป และสินค้าได้เอง', 'ไม่ต้องรู้เรื่องโค้ด'],
    featured: false,
  },
  {
    name: 'ดูแลรายเดือน',
    price: 'สอบถามราคา',
    note: 'สำหรับคนที่ไม่อยากวุ่นวายกับระบบ',
    items: ['ส่งข้อมูลหรือรูปมา KUMA อัปเดตและขึ้นระบบให้', 'ไม่ต้องเรียนวิธีใช้ระบบหลังบ้าน'],
    featured: false,
  },
];

const localFaqIds = ['meet-in-person', 'hosting', 'self-edit', 'timeline', 'payment'];

export default function ChanthaburiPage() {
  const localFaqs = localFaqIds
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => faq !== undefined);
  const localWork = caseStudies.filter((study) => study.slug === 'chak-thai-herbs');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'รับทำเว็บไซต์ จันทบุรี',
    serviceType: 'Website Design and Development',
    url: `${siteUrl}/chanthaburi`,
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: 'จังหวัดจันทบุรี' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: startingRate, priceCurrency: 'THB' },
    },
  };

  return (
    <main className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageIntro
        title={
          <>
            รับทำเว็บไซต์ จันทบุรี
            <br />
            <span className="whitespace-nowrap">โดยฟรีแลนซ์คนจันท์</span>
          </>
        }
        description={`KUMA ออกแบบและพัฒนาเว็บไซต์ให้ธุรกิจในจันทบุรี นัดเจอคุยงานได้ คุยกับคนทำโดยตรง ราคาเริ่มต้น ${baht(startingRate)} บาท`}
        sticker="/image/illustrations/hero-bear.webp"
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact" className={buttonClass('primary', 'min-h-14 px-7 text-base')}>
            ขอใบเสนอราคาฟรี
          </Link>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('นัดคุยทำเว็บไซต์ จันทบุรี')}`} className={buttonClass('secondary', 'min-h-14 px-7 text-base')}>
            นัดเจอคุยงาน
          </a>
        </div>
      </PageIntro>

      {/* Why a local freelancer */}
      <section aria-labelledby="why-local-title" className={cn(container, 'py-20 lg:py-28')}>
        <Reveal className="max-w-2xl">
          <h2 id="why-local-title" className={sectionTitle}>ทำไมจ้างฟรีแลนซ์คนจันท์</h2>
          <p className={cn(bodyText, 'mt-4')}>บริษัทรับทำเว็บทั่วประเทศทำหน้าแบบเดียวกันทุกจังหวัด แต่ธุรกิจในจันทบุรีได้ประโยชน์จากคนที่อยู่ในพื้นที่และคุยกันได้ง่ายกว่า</p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title: reasonTitle, description: reasonText }, index) => (
            <Reveal as="li" key={reasonTitle} delay={index * 0.1} hover={{ y: -6 }} className={cn(stickerCard, 'p-6 sm:p-7')}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-kuma-bark bg-kuma-gold text-kuma-bark">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-kuma-bark">{reasonTitle}</h3>
              <p className="mt-2 leading-7 text-kuma-clay">{reasonText}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section aria-labelledby="pricing-title" className="border-y-2 border-kuma-bark bg-kuma-gold">
        <div className={cn(container, 'py-20 lg:py-28')}>
          <Reveal className="max-w-2xl">
            <h2 id="pricing-title" className={sectionTitle}>ราคาทำเว็บไซต์ จันทบุรี</h2>
            <p className="mt-4 text-base leading-8 text-kuma-cocoa">ราคาเริ่มต้นไม่รวมค่าโดเมนและโฮสติ้ง ซึ่งจ่ายแยกตามผู้ให้บริการ KUMA ช่วยแนะนำและตั้งค่าให้</p>
          </Reveal>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <Reveal
                as="li"
                key={plan.name}
                delay={index * 0.12}
                y={40}
                hover={{ y: -8 }}
                className={cn(stickerCard, 'flex flex-col p-6 sm:p-7', plan.featured ? 'bg-kuma-bark text-kuma-cream shadow-[6px_6px_0_0_#C07B2A]' : 'bg-kuma-cream')}
              >
                <h3 className={cn('text-lg font-bold', plan.featured ? 'text-kuma-gold' : 'text-kuma-clay')}>{plan.name}</h3>
                <p className={cn('mt-2 text-3xl font-extrabold', plan.featured ? 'text-kuma-cream' : 'text-kuma-bark')}>{plan.price}</p>
                <p className={cn('mt-2 text-sm leading-6', plan.featured ? 'text-[#E8C4A0]' : 'text-kuma-clay')}>{plan.note}</p>
                <ul className={cn('mt-5 space-y-2 border-t-2 border-dashed pt-5', plan.featured ? 'border-kuma-cream/20' : 'border-kuma-line')}>
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-7">
                      <Check className={cn('mt-1.5 h-4 w-4 shrink-0', plan.featured ? 'text-kuma-gold' : 'text-kuma-amber-deep')} strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12">
            <Link href="/contact" className={buttonClass('primary')}>
              ขอประเมินราคางานของคุณ
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Local work */}
      <section aria-labelledby="local-work-title" className={cn(container, 'py-20 lg:py-28')}>
        <Reveal className="mb-16 max-w-2xl">
          <h2 id="local-work-title" className={sectionTitle}>ผลงานในจันทบุรี</h2>
          <p className={cn(bodyText, 'mt-4')}>
            ทะเบียนสมุนไพรชุมชนของตำบลชากไทย อำเภอเขาคิชฌกูฏ ดูผลงานอื่นได้ที่{' '}
            <Link href="/work" className="font-semibold text-kuma-amber-deep underline decoration-kuma-gold decoration-2 underline-offset-4">หน้าผลงาน</Link>
          </p>
        </Reveal>
        <WorkShowcase studies={localWork} />
        <ComingSoonBanner className="mt-20" />
      </section>

      {/* Service area */}
      <section aria-labelledby="area-title" className="border-t-2 border-dashed border-kuma-line">
        <div className={cn(container, 'grid gap-10 py-20 lg:grid-cols-12 lg:items-center lg:py-24')}>
          <Reveal className="lg:col-span-5">
            <h2 id="area-title" className={sectionTitle}>รับทำเว็บไซต์ทุกอำเภอในจันทบุรี</h2>
            <p className={cn(bodyText, 'mt-4')}>นัดเจอคุยงานได้ทั่วจังหวัด ส่วนลูกค้าจังหวัดอื่นคุยผ่านอีเมลและวิดีโอคอล ทำงานได้ครบทุกขั้นตอนเหมือนกัน</p>
          </Reveal>
          <ul className="flex flex-wrap gap-3 lg:col-span-7">
            {chanthaburiDistricts.map((district, index) => (
              <Reveal as="li" key={district} delay={index * 0.05} y={12} className="inline-flex items-center gap-2 rounded-full border-2 border-kuma-bark bg-white px-4 py-2 font-medium text-kuma-bark">
                <MapPin className="h-4 w-4 text-kuma-amber-deep" aria-hidden="true" />
                อ.{district}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="local-faq-title" className="bg-kuma-honey/60">
        <div className={cn(container, 'grid gap-10 py-20 lg:grid-cols-12 lg:py-24')}>
          <Reveal className="lg:col-span-4">
            <h2 id="local-faq-title" className={sectionTitle}>คำถามก่อนจ้างทำเว็บ</h2>
            <p className={cn(bodyText, 'mt-4')}>เรื่องที่ผู้ประกอบการในจันทบุรีถามบ่อยก่อนเริ่มงาน</p>
          </Reveal>
          <Reveal y={40} className={cn(stickerCard, 'px-6 py-2 lg:col-span-8')}>
            <FAQAccordion items={localFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Guides */}
      <section aria-labelledby="local-guides-title" className={cn(container, 'py-20 lg:py-24')}>
        <Reveal>
          <h2 id="local-guides-title" className="text-2xl font-extrabold text-kuma-bark sm:text-3xl">อ่านก่อนตัดสินใจ</h2>
        </Reveal>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {businessArticles.map((article, index) => (
            <Reveal as="li" key={article.slug} delay={index * 0.12} hover={{ y: -6 }}>
              <Link href={`/blog/${article.slug}`} className={cn(stickerCard, 'group flex h-full items-center gap-5 p-5 sm:p-6')}>
                {article.illustration && <Image src={article.illustration} alt="" width={160} height={160} className="h-20 w-20 shrink-0 object-contain" />}
                <span className="flex-1 text-lg font-extrabold leading-snug text-kuma-bark group-hover:text-kuma-amber-deep">{article.title}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-kuma-amber-deep transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBlock title="เริ่มทำเว็บไซต์ให้ธุรกิจในจันทบุรี" description="เล่าว่าธุรกิจของคุณทำอะไรและอยากให้เว็บช่วยเรื่องไหน KUMA จะประเมินราคาให้ฟรี และนัดเจอคุยรายละเอียดในจันทบุรีได้" />
    </main>
  );
}
