import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageIntro from '@/components/site/PageIntro';
import WorkShowcase from '@/components/site/WorkShowcase';
import CtaBlock from '@/components/site/CtaBlock';
import { bodyText, container, sectionTitle } from '@/components/site/styles';
import { caseStudies } from '@/data/case-studies';
import { cn } from '@/lib/utils';

const solutionCards = [
  { type: 'เว็บบริษัท', title: 'Corporate Website', description: 'เว็บไซต์บริษัทที่เล่า value proposition ชัด สร้างความน่าเชื่อถือ และพร้อมต่อยอดด้าน SEO' },
  { type: 'Landing Page', title: 'Campaign Landing Page', description: 'หน้าเว็บโฟกัส conversion สำหรับเปิดตัวสินค้า แคมเปญ หรือเก็บ leads' },
  { type: 'เว็บแอป', title: 'Web Application', description: 'เว็บสำหรับลูกค้า สมาชิก หรือทีมงานที่ต้องการ login, workflow และข้อมูลแบบ real-time' },
  { type: 'ระบบหลังบ้าน', title: 'Internal System', description: 'ระบบหลังบ้านสำหรับจัดการข้อมูล อนุมัติงาน ติดตามสถานะ และลดขั้นตอน manual' },
  { type: 'เว็บแอป', title: 'Dashboard & Portal', description: 'หน้า dashboard และ portal ที่ช่วยให้ทีมเห็นภาพเดียวกันและตัดสินใจได้เร็วขึ้น' },
];

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        title="รับเขียนเว็บไซต์ให้ธุรกิจของคุณ"
        description="ตั้งแต่เว็บบริษัทที่ช่วยสร้างความน่าเชื่อถือ ไปจนถึงเว็บแอปและระบบหลังบ้านที่ช่วยให้ทีมทำงานเร็วขึ้น"
        sticker="/image/illustrations/page-work.webp"
      />

      <section aria-labelledby="cases-title" className={cn(container, 'py-20 lg:py-28')}>
        <h2 id="cases-title" className={cn(sectionTitle, 'mb-16 lg:mb-20')}>ผลงานที่ขึ้นใช้งานจริง</h2>
        <WorkShowcase studies={caseStudies} />
      </section>

      <section aria-labelledby="solutions-title" className="border-t border-kuma-line/70">
        <div className={cn(container, 'grid gap-10 py-16 lg:grid-cols-12 lg:py-24')}>
          <div className="lg:col-span-4">
            <h2 id="solutions-title" className={sectionTitle}>งานแบบไหนที่รับทำ</h2>
            <p className={cn(bodyText, 'mt-4')}>ถ้าโจทย์ของคุณใกล้กับแบบใดแบบหนึ่ง ส่งรายละเอียดมาคุยกันได้เลย</p>
          </div>
          <ul className="border-t border-kuma-line lg:col-span-8">
            {solutionCards.map((solution) => (
              <li key={solution.title} className="border-b border-kuma-line">
                <Link href="/contact" className="group grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="text-sm text-kuma-clay">{solution.type}</span>
                  <span>
                    <span className="block text-xl font-semibold text-kuma-bark group-hover:text-kuma-amber-deep">{solution.title}</span>
                    <span className="mt-1 block leading-7 text-kuma-clay">{solution.description}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-kuma-amber-deep">
                    คุยเรื่องระบบนี้
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        title="มีเว็บที่อยากเริ่มทำแล้วหรือยัง?"
        description="ส่งรายละเอียดคร่าว ๆ มาให้ KUMA ช่วยประเมิน scope และวางแนวทางเริ่มต้นได้เลย"
        actionLabel="ขอประเมินราคา"
      />
    </main>
  );
}
