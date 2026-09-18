import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Mail, Star } from 'lucide-react';
import Timeline from '@/components/process/Timeline';
import FAQAccordion from '@/components/faq/FAQAccordion';
import WorkShowcase from '@/components/site/WorkShowcase';
import CtaBlock from '@/components/site/CtaBlock';
import { bodyText, buttonClass, container, sectionTitle, stickerCard } from '@/components/site/styles';
import { businessArticles } from '@/data/articles';
import { caseStudies } from '@/data/case-studies';
import { services, type Service } from '@/data/services';
import { processSteps } from '@/data/process';
import { faqs, type FAQItem } from '@/data/faq';
import { contact, serviceIllustrations as serviceArt, startingRate, trustPoints, workingValues } from '@/data/site';
import { cn } from '@/lib/utils';

// Labels match the project types in the contact form, so each option pre-selects it.
const briefStarters: { slug: Service['slug']; label: string }[] = [
  { slug: 'frontend', label: 'เว็บบริษัท / Landing Page' },
  { slug: 'fullstack', label: 'เว็บแอป / ระบบหลังบ้าน' },
  { slug: 'ui-ux', label: 'ออกแบบ UI/UX' },
];

// Finished client sites fanning up behind KUMA's laptop, left to right.
const fanLayout = [
  'left-[2%] bottom-[44%] -rotate-[12deg]',
  'left-[24%] bottom-[52%] rotate-0',
  'left-[46%] bottom-[44%] rotate-[12deg]',
];

const homeFaqIds = ['price-fixed', 'payment', 'timeline', 'revisions', 'maintenance'];
const rateLabel = startingRate.toLocaleString('th-TH');

export default function HomePage() {
  const homeFaqs = homeFaqIds
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => faq !== undefined);

  return (
    <main className="overflow-x-clip">
      {/* Hero: KUMA coding, with real client sites rising from the laptop */}
      <section className="bg-dots border-b-2 border-kuma-bark">
        <div className={cn(container, 'grid gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-16 lg:pb-20')}>
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-kuma-bark bg-white px-4 py-1.5 text-[15px] font-medium text-kuma-bark">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7AA36F] shadow-[0_0_0_3px_rgba(122,163,111,0.25)]" aria-hidden="true" />
              ฟรีแลนซ์จันทบุรี เปิดรับโปรเจกต์ใหม่
            </p>
            <h1 className="mt-6 text-[2.45rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-kuma-bark sm:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]">
              รับทำเว็บไซต์
              <br />
              คุยกับคนทำโดยตรง
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-kuma-clay">
              KUMA ฟรีแลนซ์ในจันทบุรี รับออกแบบและพัฒนาเว็บไซต์ เว็บแอป และระบบหลังบ้าน สำหรับธุรกิจที่อยากเปลี่ยนไอเดียให้เป็นของที่ใช้งานได้จริง ตั้งแต่คุย brief จนส่งมอบ
            </p>

            <div className="mt-9 max-w-xl">
              <p id="brief-starter" className="font-semibold text-kuma-bark">อยากเริ่มจากงานแบบไหน</p>
              <ul aria-labelledby="brief-starter" className={cn(stickerCard, 'mt-3 overflow-hidden')}>
                {briefStarters.map((starter) => {
                  const service = services.find((item) => item.slug === starter.slug);
                  return (
                    <li key={starter.slug} className="border-b-2 border-kuma-bark/10 last:border-b-0">
                      <Link
                        href={`/contact?type=${starter.slug}`}
                        className="group flex min-h-[4.5rem] items-center gap-4 px-4 py-2 transition-colors hover:bg-kuma-honey"
                      >
                        <Image src={serviceArt[starter.slug]} alt="" width={96} height={96} className="h-12 w-12 shrink-0 object-contain" />
                        <span className="flex-1">
                          <span className="block text-lg font-semibold text-kuma-bark">{starter.label}</span>
                          {service && <span className="block text-sm text-kuma-clay">ใช้เวลาประมาณ {service.timeline}</span>}
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-kuma-bark bg-kuma-gold transition-transform group-hover:translate-x-1" aria-hidden="true">
                          <ArrowRight className="h-4 w-4 text-kuma-bark" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-[15px] text-kuma-clay">
                ยังไม่แน่ใจ?{' '}
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 font-semibold text-kuma-amber-deep underline-offset-4 hover:underline">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  ส่งอีเมลถามก่อน
                </a>{' '}
                หรือ{' '}
                <a href="#work" className="font-semibold text-kuma-amber-deep underline-offset-4 hover:underline">ดูผลงานก่อน</a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              <Image src="/image/loader/firework.png" alt="" width={500} height={500} aria-hidden="true" className="absolute left-1/2 top-0 h-auto w-[92%] -translate-x-1/2 opacity-80" />
              <Image src="/image/Asset/22.png" alt="" width={120} height={120} aria-hidden="true" className="absolute right-[4%] top-[6%] h-auto w-[13%] rotate-12" />

              {caseStudies.slice(0, 3).map((study, index) => (
                <div key={study.slug} className={cn('absolute z-10 w-[52%] origin-bottom', fanLayout[index])}>
                  <Link
                    href={`/work/${study.slug}`}
                    style={{ animationDelay: `${200 + index * 160}ms` }}
                    className="kuma-rise block overflow-hidden rounded-xl border-2 border-kuma-bark bg-white shadow-[5px_5px_0_0_#2A1010]"
                  >
                    <Image
                      src={study.cover}
                      alt={`ผลงาน ${study.title.split(' — ')[0]}`}
                      width={1440}
                      height={810}
                      sizes="(min-width: 1024px) 300px, 56vw"
                      priority={index === 1}
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              ))}

              <Image src="/image/illustrations/hero-coding.webp" alt="" width={1000} height={766} priority aria-hidden="true" className="absolute bottom-0 left-1/2 z-20 h-auto w-[84%] -translate-x-1/2" />

              <p className="absolute left-[2%] top-[8%] z-30 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-kuma-bark bg-kuma-gold text-center text-kuma-bark shadow-[4px_4px_0_0_#2A1010] sm:h-32 sm:w-32">
                <span className="text-sm font-medium">เริ่มต้น</span>
                <span className="text-2xl font-extrabold leading-none sm:text-3xl">{rateLabel}</span>
                <span className="text-sm font-medium">บาท</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="วิธีทำงาน" className="bg-kuma-bark text-kuma-cream">
        <ul className={cn(container, 'flex flex-col gap-3 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between')}>
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-3 text-[15px] font-medium">
              <Star className="h-4 w-4 shrink-0 fill-kuma-gold text-kuma-gold" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" aria-labelledby="work-title" className={cn(container, 'scroll-mt-24 py-24 lg:py-32')}>
        <div className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-20">
          <div className="max-w-2xl">
            <h2 id="work-title" className={sectionTitle}>ผลงานที่ขึ้นใช้งานจริง</h2>
            <p className={cn(bodyText, 'mt-4')}>เว็บไซต์ที่ออกแบบและพัฒนาให้ลูกค้า ตั้งแต่บริษัทส่งออก โครงการชุมชน ไปจนถึงองค์กรไม่แสวงหากำไร</p>
          </div>
          <Link href="/work" className={buttonClass('secondary', 'self-start sm:self-auto')}>
            ผลงานทั้งหมด
          </Link>
        </div>
        <WorkShowcase studies={caseStudies} />
      </section>

      {/* Services on a honey band */}
      <section id="services" aria-labelledby="services-title" className="scroll-mt-24 border-t-2 border-kuma-bark bg-kuma-gold">
        <div className={cn(container, 'pt-20 pb-12 lg:pt-28')}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="services-title" className={sectionTitle}>อยากให้ KUMA ช่วยเรื่องไหน?</h2>
              <p className="mt-4 text-base leading-8 text-kuma-cocoa">
                งานเริ่มต้น {rateLabel} บาท ราคาจริงตามขอบเขตงาน เลือกบริการที่ใกล้กับโจทย์ที่สุด แล้วส่งรายละเอียดมาให้ช่วยประเมิน
              </p>
            </div>
            <Link href="/services" className={buttonClass('secondary', 'self-start sm:self-auto')}>
              รายละเอียดบริการ
            </Link>
          </div>

          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug} className={cn(stickerCard, 'flex flex-col bg-kuma-cream p-6', index === 1 && 'md:translate-y-6')}>
                <Image src={serviceArt[service.slug]} alt="" width={160} height={160} className="h-24 w-24 object-contain" />
                <h3 className="mt-4 text-2xl font-extrabold leading-snug text-kuma-bark">{service.title}</h3>
                <p className="mt-2 leading-7 text-kuma-clay">{service.tagline}</p>
                <ul className="mt-5 space-y-2 border-t-2 border-dashed border-kuma-line pt-5">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-7 text-kuma-cocoa">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-kuma-amber-deep" strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm text-kuma-clay">ใช้เวลา {service.timeline}</p>
                <Link href={`/contact?type=${service.slug}`} className={buttonClass('primary', 'mt-4 w-full')}>
                  ขอราคางานนี้
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="honey-drip h-14" aria-hidden="true" />

      {/* Process */}
      <section aria-labelledby="process-title" className={cn(container, 'py-16 lg:py-24')}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 id="process-title" className={sectionTitle}>จาก brief สู่เว็บพร้อมใช้</h2>
          <p className={cn(bodyText, 'mt-4')}>ทำงานเป็นขั้นตอน เห็นงานระหว่างทาง และรู้ว่าแต่ละช่วงจะได้อะไร</p>
        </div>
        <Timeline steps={processSteps} compact />
        <div className="mt-14 text-center">
          <Link href="/process" className={buttonClass('secondary')}>
            ดูขั้นตอนเต็ม
          </Link>
        </div>
      </section>

      {/* The person behind the work */}
      <section aria-labelledby="why-title" className="border-y-2 border-kuma-bark bg-kuma-bark text-kuma-cream">
        <div className={cn(container, 'grid gap-14 py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28')}>
          <figure className="relative mx-auto w-full max-w-sm lg:col-span-5">
            <div className="-rotate-3 rounded-2xl border-2 border-kuma-cream bg-kuma-cream p-3 pb-14 shadow-[8px_8px_0_0_#C07B2A]">
              <div className="flex aspect-[4/5] w-full items-end justify-center rounded-lg bg-kuma-gold p-6">
                <Image src="/image/illustrations/hero-bear.webp" alt="KUMA มาสคอตหมีของ kumadesign.dev" width={741} height={900} sizes="(min-width: 1024px) 300px, 70vw" className="h-auto w-[82%]" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-4 text-center text-lg font-extrabold text-kuma-bark">KUMA คนที่คุณจะคุยงานด้วย</figcaption>
            </div>
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-2 bg-kuma-gold/80" />
            <Image src="/image/Asset/33.png" alt="" width={140} height={140} aria-hidden="true" className="absolute -bottom-8 -right-6 h-auto w-24 rotate-12" />
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="why-title" className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              รับงานแบบเข้าใจโจทย์ ไม่ใช่แค่รับทำตามสั่ง
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#E8C4A0]">
              ทุกโปรเจกต์เริ่มจาก business goal ที่ชัด แล้วค่อยเลือก design และเทคโนโลยีที่เหมาะสม เพื่อให้ของที่สร้างช่วยธุรกิจได้จริง
            </p>
            <ul className="mt-8 space-y-4">
              {workingValues.map((value) => (
                <li key={value.title} className="rounded-2xl border-2 border-kuma-cream/15 p-5">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <Star className="h-4 w-4 fill-kuma-gold text-kuma-gold" aria-hidden="true" />
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#E8C4A0]">{value.description}</p>
                </li>
              ))}
            </ul>
            <Link href="/about" className={buttonClass('honey', 'mt-8')}>
              รู้จัก KUMA
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className={cn(container, 'grid gap-10 py-20 lg:grid-cols-12 lg:py-28')}>
        <div className="lg:col-span-4">
          <Image src="/image/Asset/21.png" alt="" width={140} height={140} aria-hidden="true" className="-ml-2 h-auto w-24 -rotate-6" />
          <h2 id="faq-title" className={cn(sectionTitle, 'mt-2')}>คำถามที่พบบ่อย</h2>
          <p className={cn(bodyText, 'mt-4')}>เรื่องราคา การชำระเงิน ระยะเวลา และการดูแลหลังส่งงาน</p>
          <Link href="/process#faq" className={buttonClass('secondary', 'mt-7')}>
            ดูคำถามทั้งหมด
          </Link>
        </div>
        <div className={cn(stickerCard, 'px-6 py-2 lg:col-span-8')}>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Guides for business owners — also internal links for SEO */}
      <section aria-labelledby="guides-title" className="border-t-2 border-kuma-bark bg-kuma-honey/60">
        <div className={cn(container, 'py-20 lg:py-24')}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="guides-title" className={sectionTitle}>อ่านก่อนทำเว็บ</h2>
              <p className={cn(bodyText, 'mt-4')}>คู่มือสั้น ๆ สำหรับผู้ประกอบการจันทบุรี เรื่องเว็บไซต์ธุรกิจและการทำให้ลูกค้าค้นเจอบน Google</p>
            </div>
            <Link href="/blog" className={buttonClass('secondary', 'self-start sm:self-auto')}>
              บทความทั้งหมด
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {businessArticles.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className={cn(stickerCard, 'group flex h-full items-center gap-5 p-5 sm:p-6')}>
                  {article.illustration && (
                    <Image src={article.illustration} alt="" width={160} height={160} className="h-24 w-24 shrink-0 object-contain" />
                  )}
                  <span>
                    <span className="block text-xl font-extrabold leading-snug text-kuma-bark group-hover:text-kuma-amber-deep">{article.title}</span>
                    <span className="mt-2 line-clamp-2 block text-[15px] leading-7 text-kuma-clay">{article.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock title="มีโปรเจกต์อยู่ในหัวแล้วหรือยัง?" />
    </main>
  );
}
