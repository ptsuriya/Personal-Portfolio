import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/site/PageIntro';
import CtaBlock from '@/components/site/CtaBlock';
import { bodyText, container, sectionTitle } from '@/components/site/styles';
import { workingValues } from '@/data/site';
import { cn } from '@/lib/utils';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'เกี่ยวกับ KUMA ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี',
  description: 'รู้จัก KUMA ฟรีแลนซ์ในจันทบุรีที่รับออกแบบและพัฒนาเว็บไซต์ให้ลูกค้าทุกพื้นที่ วิธีคิด สิ่งที่ให้ความสำคัญ และเครื่องมือที่ใช้ทำงาน',
  alternates: { canonical: '/about' },
};

const disciplines = {
  'Product & UX': ['User Flow', 'Wireframe', 'UI Design', 'Design System', 'Prototype'],
  Engineering: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
  'Data & Delivery': ['API Integration', 'Database', 'Authentication', 'SEO', 'Deployment'],
};

const principles = ['Business-first scope', 'Human-friendly interfaces', 'Maintainable codebase', 'Practical technology choices'];

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="ฟรีแลนซ์รับเขียนเว็บที่เข้าใจทั้งธุรกิจและโค้ด"
        description="kumadesign.dev คืองานฟรีแลนซ์ของ KUMA ในจันทบุรี รับทำเว็บไซต์และเว็บแอปแบบครบขั้นตอนให้ลูกค้าทุกพื้นที่ ตั้งแต่ช่วยคิดโครงสร้าง ออกแบบหน้าจอ เขียนโปรแกรม เชื่อมต่อระบบ ไปจนถึงเปิดใช้งานจริง"
        sticker="/image/illustrations/page-about.webp"
      />

      <section aria-labelledby="think-title" className={cn(container, 'grid gap-14 py-16 lg:grid-cols-12 lg:items-center lg:py-24')}>
        <Reveal as="figure" rotate={-10} y={40} className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <div className="-rotate-2 rounded-2xl border-2 border-kuma-bark bg-white p-3 pb-14 shadow-[8px_8px_0_0_#2A1010]">
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-kuma-gold p-6">
              <Image src="/image/illustrations/process-2-design.webp" alt="KUMA มาสคอตหมีกำลังออกแบบหน้าเว็บ" width={865} height={900} sizes="(min-width: 1024px) 300px, 70vw" className="h-auto w-[90%]" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-4 text-center text-lg font-extrabold text-kuma-bark">Design clearly. Build deliberately.</figcaption>
          </div>
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 bg-kuma-gold/80" />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 id="think-title" className={sectionTitle}>การเขียนโปรแกรมที่ดี เริ่มจากการเข้าใจปัญหา</h2>
          <p className={cn(bodyText, 'mt-5')}>
            ทุกโปรเจกต์เริ่มจากการคุยกับผู้เกี่ยวข้อง ทำความเข้าใจผู้ใช้ และจัดลำดับสิ่งที่จำเป็นจริง ๆ จากนั้นจึงเลือกเทคโนโลยีที่เหมาะสม ไม่สร้างระบบใหญ่เกินโจทย์ และไม่ทิ้งลูกค้าไว้กับโค้ดที่ดูแลต่อไม่ได้
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-kuma-line pt-6 sm:grid-cols-2">
            {principles.map((item) => (
              <li key={item} className="flex items-center gap-3 text-kuma-cocoa">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-kuma-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="values-title" className="border-y-2 border-kuma-bark bg-kuma-bark text-kuma-cream">
        <div className={cn(container, 'py-16 lg:py-24')}>
          <h2 id="values-title" className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">สิ่งที่ให้ความสำคัญในทุกโปรเจกต์</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {workingValues.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 0.12} hover={{ y: -6 }} className="rounded-2xl border-2 border-kuma-cream/15 p-6">
                <h3 className="text-xl font-bold text-kuma-gold">{value.title}</h3>
                <p className="mt-3 leading-7 text-[#E8C4A0]">{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="skills-title" className={cn(container, 'py-16 lg:py-24')}>
        <h2 id="skills-title" className={sectionTitle}>ทำได้ครบตั้งแต่ออกแบบถึงขึ้นระบบ</h2>
        <dl className="mt-12 border-t border-kuma-line">
          {Object.entries(disciplines).map(([category, items]) => (
            <div key={category} className="grid gap-3 border-b border-kuma-line py-6 md:grid-cols-12 md:gap-10">
              <dt className="text-lg font-semibold text-kuma-bark md:col-span-3">{category}</dt>
              <dd className="flex flex-wrap gap-2 md:col-span-9">
                {items.map((item) => (
                  <span key={item} className="rounded-full border-2 border-kuma-bark bg-white px-3 py-1 text-[15px] text-kuma-cocoa">{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBlock
        title="มีโจทย์ระบบที่อยากคุย?"
        description="ส่งรายละเอียดเบื้องต้นมาได้เลย KUMA จะช่วยประเมิน scope และแนะนำจุดเริ่มต้นให้"
        actionLabel="เริ่มต้นคุยกัน"
      />
    </main>
  );
}
