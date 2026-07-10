'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Database, LayoutPanelTop, ServerCog } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';

const filterTabs = ['ทั้งหมด', 'เว็บบริษัท', 'Landing Page', 'เว็บแอป', 'ระบบหลังบ้าน'] as const;

const solutionCards = [
  { type: 'เว็บบริษัท', icon: LayoutPanelTop, title: 'Corporate Website', description: 'เว็บไซต์บริษัทที่เล่า value proposition ชัด สร้างความน่าเชื่อถือ และพร้อมต่อยอดด้าน SEO' },
  { type: 'Landing Page', icon: LayoutPanelTop, title: 'Campaign Landing Page', description: 'หน้าเว็บโฟกัส conversion สำหรับเปิดตัวสินค้า แคมเปญ หรือเก็บ leads' },
  { type: 'เว็บแอป', icon: ServerCog, title: 'Web Application', description: 'เว็บสำหรับลูกค้า สมาชิก หรือทีมงานที่ต้องการ login, workflow และข้อมูลแบบ real-time' },
  { type: 'ระบบหลังบ้าน', icon: Database, title: 'Internal System', description: 'ระบบหลังบ้านสำหรับจัดการข้อมูล อนุมัติงาน ติดตามสถานะ และลดขั้นตอน manual' },
  { type: 'เว็บแอป', icon: BarChart3, title: 'Dashboard & Portal', description: 'หน้า dashboard และ portal ที่ช่วยให้ทีมเห็นภาพเดียวกันและตัดสินใจได้เร็วขึ้น' },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterTabs)[number]>('ทั้งหมด');
  const filteredCards = activeFilter === 'ทั้งหมด' ? solutionCards : solutionCards.filter((card) => card.type === activeFilter);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
      <section className="relative overflow-hidden rounded-3xl border border-[#24110B]/20 bg-[#24110B] px-6 py-12 text-[#FFF7E8] sm:px-10 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#C86858]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#7AA36F]/15 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C4A0]">Web development / solutions</p>
          <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-6xl">รับเขียนเว็บไซต์ให้ธุรกิจของคุณ</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#E8C4A0] sm:text-base">ตั้งแต่เว็บบริษัทที่ช่วยสร้างความน่าเชื่อถือ ไปจนถึงเว็บแอปและระบบหลังบ้านที่ช่วยให้ทีมทำงานเร็วขึ้น</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-2">
        {filterTabs.map((filter) => (
          <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${activeFilter === filter ? 'border-[#24110B] bg-[#24110B] text-[#FFF7E8]' : 'border-[#E8B8A8]/70 bg-[#FFF8F0]/60 text-[#8B5E3C] hover:border-[#C86858] hover:text-[#24110B]'}`}>
            {filter}
          </button>
        ))}
      </div>

      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        {caseStudies.length > 0 && activeFilter === 'ทั้งหมด' && caseStudies.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="group overflow-hidden rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70 transition-all hover:-translate-y-1 hover:border-[#C86858]/60">
            <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${study.cover})` }} />
            <div className="p-6"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C86858]">{study.type}</p><h2 className="mt-2 text-xl font-bold text-[#24110B]">{study.title}</h2><p className="mt-2 text-sm leading-7 text-[#7A4838]">{study.summary}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C86858]">อ่านเคสงาน <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
        ))}

        {filteredCards.map(({ type, icon: Icon, title, description }) => (
          <article key={title} className="group rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70 p-6 transition-all hover:-translate-y-1 hover:border-[#C86858]/60 hover:shadow-[0_20px_50px_rgba(184,108,86,0.12)]">
            <div className="flex items-start justify-between gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#24110B] text-[#FAD4C0]"><Icon className="h-5 w-5" /></span><span className="rounded-full border border-[#C86858]/25 bg-[#FAE4DC]/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#C86858]">{type}</span></div>
            <h2 className="mt-7 text-xl font-bold text-[#24110B]">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-[#7A4838]">{description}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C86858]">คุยเรื่องระบบนี้ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF0CC]/70 p-8 sm:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Start your website</p><h2 className="mt-2 text-2xl font-bold text-[#24110B]">มีเว็บที่อยากเริ่มทำแล้วหรือยัง?</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-[#7A4838]">ส่งรายละเอียดคร่าว ๆ มาให้ทีมช่วยประเมิน scope และวางแนวทางเริ่มต้นได้เลย</p></div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#24110B] px-5 py-3 text-sm font-semibold text-[#FFF7E8] transition-all hover:bg-[#C86858]">ขอประเมินราคา <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
