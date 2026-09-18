import type { Metadata } from 'next';
import Timeline from '@/components/process/Timeline';
import FAQAccordion from '@/components/faq/FAQAccordion';
import PageIntro from '@/components/site/PageIntro';
import CtaBlock from '@/components/site/CtaBlock';
import { container, sectionTitle } from '@/components/site/styles';
import { processSteps } from '@/data/process';
import { faqs } from '@/data/faq';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'ขั้นตอนการทำเว็บไซต์และคำถามที่พบบ่อย',
  description: 'ขั้นตอนทำเว็บไซต์ 4 ขั้นกับ KUMA ตั้งแต่คุยโจทย์ ออกแบบ พัฒนา จนส่งมอบ พร้อมคำตอบเรื่องราคา การชำระเงิน ระยะเวลา และการดูแลหลังส่งงาน',
  alternates: { canonical: '/process' },
};

const FAQ_CATEGORIES = [
  { id: 'pricing' as const, label: 'ราคา & การชำระ' },
  { id: 'process' as const, label: 'ขั้นตอนการทำงาน' },
  { id: 'tech' as const, label: 'เทคโนโลยี' },
  { id: 'general' as const, label: 'ทั่วไป' },
];

export default function ProcessPage() {
  return (
    <main>
      <PageIntro
        title="ทำงานเป็นระบบ ตั้งแต่โจทย์ถึง production"
        description="กระบวนการ 4 ขั้นตอนที่ช่วยให้ทั้งทีมเห็นภาพเดียวกัน ตัดสินใจได้เร็ว และตรวจสอบงานได้ตลอดทาง"
        sticker="/image/illustrations/page-process.webp"
      />

      <section aria-label="ขั้นตอนการทำงาน" className={cn(container, 'py-16 lg:py-24')}>
        <Timeline steps={processSteps} />
      </section>

      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 border-t border-kuma-line/70">
        <div className={cn(container, 'py-16 lg:py-24')}>
          <h2 id="faq-title" className={sectionTitle}>คำถามที่พบบ่อย</h2>
          <div className="mt-12 space-y-14">
            {FAQ_CATEGORIES.map((cat) => {
              const items = faqs.filter((f) => f.category === cat.id);
              if (items.length === 0) return null;
              return (
                <div key={cat.id} className="grid gap-4 lg:grid-cols-12 lg:gap-10">
                  <p className="text-lg font-semibold text-kuma-clay lg:col-span-3 lg:pt-5">{cat.label}</p>
                  <div className="lg:col-span-9">
                    <FAQAccordion items={items} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock title="มีคำถามอื่น?" description="ส่งโจทย์เบื้องต้นมาให้ KUMA ช่วยประเมินได้" actionLabel="คุยเรื่องโปรเจกต์" />
    </main>
  );
}
