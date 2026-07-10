import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Timeline from '@/components/process/Timeline';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { processSteps } from '@/data/process';
import { faqs } from '@/data/faq';

const FAQ_CATEGORIES = [
  { id: 'pricing' as const, label: 'ราคา & การชำระ' },
  { id: 'process' as const, label: 'ขั้นตอนการทำงาน' },
  { id: 'tech' as const, label: 'เทคโนโลยี' },
  { id: 'general' as const, label: 'ทั่วไป' },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">How I Work</p>
        <h1 className="text-3xl font-bold text-[#2A1010] sm:text-4xl">ขั้นตอนการทำงาน</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7A4838] sm:text-base">
          กระบวนการ 4 ขั้นตอนที่ใช้กับทุกโปรเจกต์ — โปร่งใส ส่ง deliverable ทุกขั้น และปรับเร็วเมื่อเจอข้อมูลใหม่
        </p>
      </header>

      <section className="mb-16">
        <Timeline steps={processSteps} />
      </section>

      <section className="mb-16">
        <header className="mb-6">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">FAQ</p>
          <h2 className="text-2xl font-bold text-[#2A1010] sm:text-3xl">คำถามที่พบบ่อย</h2>
        </header>

        {FAQ_CATEGORIES.map((cat) => {
          const items = faqs.filter((f) => f.category === cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} className="mb-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#9A5848]">{cat.label}</h3>
              <FAQAccordion items={items} />
            </div>
          );
        })}
      </section>

      <section className="rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,rgba(250,228,220,0.8)_0%,rgba(255,246,242,0.7)_100%)] p-8 text-center backdrop-blur-sm">
        <p className="text-3xl">💬</p>
        <h3 className="mt-2 text-xl font-bold text-[#2A1010]">มีคำถามอื่น?</h3>
        <p className="mt-2 text-sm text-[#7A4838]">ทักมาคุยฟรี ไม่มีค่าใช้จ่าย</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2A1010] px-6 py-3 text-sm font-semibold text-[#FAD4C0] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white"
        >
          ติดต่อ KUMA
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
