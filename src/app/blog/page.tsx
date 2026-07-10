import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, PenLine } from 'lucide-react';

const topics = [
  { icon: Code2, title: 'Frontend Engineering', description: 'บันทึกเรื่อง Next.js, React, performance และ component architecture' },
  { icon: PenLine, title: 'Product & Design', description: 'วิธีคิดเรื่อง user flow, design system และการออกแบบที่นำไปพัฒนาต่อได้' },
  { icon: BookOpen, title: 'Build Process', description: 'บทเรียนจากการวาง scope, ทำงานกับลูกค้า และส่งมอบซอฟต์แวร์' },
];

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
      <header className="max-w-3xl">
        <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Notes from the studio</p>
        <h1 className="text-4xl font-bold tracking-[-0.03em] text-[#24110B] sm:text-6xl">บทความและบันทึกการทำงาน</h1>
        <p className="mt-5 text-base leading-8 text-[#7A4838]">พื้นที่สำหรับเล่าวิธีคิดเบื้องหลังการทำเว็บไซต์ ตั้งแต่การแปลงโจทย์ธุรกิจให้เป็นหน้าเว็บ ไปจนถึงรายละเอียดเล็ก ๆ ในการเขียนโค้ด</p>
      </header>

      <section className="mt-12 grid gap-5 md:grid-cols-3">{topics.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70 p-6"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#24110B] text-[#FAD4C0]"><Icon className="h-5 w-5" /></span><h2 className="mt-5 text-lg font-bold text-[#24110B]">{title}</h2><p className="mt-2 text-sm leading-7 text-[#7A4838]">{description}</p></article>)}</section>

      <section className="mt-12 rounded-3xl border border-dashed border-[#C86858]/45 bg-[#FFF0CC]/60 p-8 text-center sm:p-12"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Publishing soon</p><h2 className="mt-3 text-2xl font-bold text-[#24110B]">กำลังเตรียมบทความชุดแรก</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#7A4838]">หัวข้อแรกจะเล่ากระบวนการเปลี่ยนจาก business requirement ให้กลายเป็น product ที่ทีมใช้งานได้จริง</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#24110B] px-5 py-3 text-sm font-semibold text-[#FFF7E8] hover:bg-[#C86858]">คุยเรื่องโปรเจกต์ <ArrowRight className="h-4 w-4" /></Link></section>
    </main>
  );
}
