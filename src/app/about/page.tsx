import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, ShieldCheck, Terminal, Users } from 'lucide-react';

const disciplines = {
  'Product & UX': ['User Flow', 'Wireframe', 'UI Design', 'Design System', 'Prototype'],
  Engineering: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
  'Data & Delivery': ['API Integration', 'Database', 'Authentication', 'SEO', 'Deployment'],
};

const values = [
  { icon: Terminal, title: 'คิดเป็นระบบ', desc: 'แยกปัญหาให้ชัดก่อนเริ่มเขียนโค้ด เพื่อให้ solution ไม่ซับซ้อนเกินจำเป็น' },
  { icon: Users, title: 'ทำงานร่วมกันได้จริง', desc: 'สื่อสารด้วย scope, milestone และ prototype ที่ทุกฝ่ายตรวจสอบได้' },
  { icon: ShieldCheck, title: 'ส่งมอบให้ดูแลต่อได้', desc: 'ให้ความสำคัญกับคุณภาพโค้ด เอกสาร และความพร้อมหลังเปิดใช้งาน' },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
      <header className="max-w-3xl">
        <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">About kumadesign.dev</p>
        <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-[#24110B] sm:text-6xl">ทีมรับเขียนเว็บที่เข้าใจทั้งธุรกิจและโค้ด</h1>
        <p className="mt-5 text-base leading-8 text-[#7A4838] sm:text-lg">kumadesign.dev รับทำเว็บไซต์และเว็บแอปแบบครบขั้นตอน ตั้งแต่ช่วยคิดโครงสร้าง ออกแบบหน้าจอ เขียนโปรแกรม เชื่อมต่อระบบ ไปจนถึงเปิดใช้งานจริง</p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex items-center justify-center rounded-3xl border border-[#24110B]/15 bg-[#24110B] p-10 text-center text-[#FFF7E8]">
          <div>
            <Image src="/image/Asset/KUMA.png" width={180} height={90} alt="kumadesign.dev" className="mx-auto h-auto w-44 object-contain brightness-0 invert" />
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">Web Development Studio</p>
            <p className="mt-4 text-sm leading-7 text-[#E8C4A0]">Design clearly.<br />Build deliberately.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/75 p-7 sm:p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#C86858]">How we think</p>
          <h2 className="mt-3 text-2xl font-bold text-[#24110B] sm:text-3xl">การเขียนโปรแกรมที่ดี เริ่มจากการเข้าใจปัญหา</h2>
          <p className="mt-4 text-sm leading-7 text-[#7A4838]">ทุกโปรเจกต์เริ่มจากการคุยกับผู้เกี่ยวข้อง ทำความเข้าใจผู้ใช้ และจัดลำดับสิ่งที่จำเป็นจริง ๆ จากนั้นจึงเลือกเทคโนโลยีที่เหมาะสม ไม่สร้างระบบใหญ่เกินโจทย์ และไม่ทิ้งทีมไว้กับโค้ดที่ดูแลต่อไม่ได้</p>
          <div className="mt-6 grid gap-3 text-sm text-[#3D1F00] sm:grid-cols-2">
            {['Business-first scope', 'Human-friendly interfaces', 'Maintainable codebase', 'Practical technology choices'].map((item) => <div key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#C86858]" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <header className="mb-7"><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Working principles</p><h2 className="text-3xl font-bold text-[#24110B]">สิ่งที่ให้ความสำคัญในทุกโปรเจกต์</h2></header>
        <div className="grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, desc }) => <article key={title} className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70 p-6"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAE4DC] text-[#C86858]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-bold text-[#24110B]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">{desc}</p></article>)}</div>
      </section>

      <section className="mt-16">
        <header className="mb-7"><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Capabilities</p><h2 className="text-3xl font-bold text-[#24110B]">ความสามารถที่รวมอยู่ในทีมเดียว</h2></header>
        <div className="grid gap-5 md:grid-cols-3">{Object.entries(disciplines).map(([category, items]) => <div key={category} className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF0CC]/60 p-6"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C86858]">{category}</p><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-[#E8B8A8]/70 bg-[#FDF6EC]/70 px-3 py-1.5 text-xs text-[#3D1F00]">{item}</span>)}</div></div>)}</div>
      </section>

      <section className="mt-16 rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#24110B_0%,#4A201B_100%)] p-8 text-center text-[#FFF7E8] sm:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C4A0]">Work with us</p>
        <h2 className="mt-3 text-3xl font-bold">มีโจทย์ระบบที่อยากคุย?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#E8C4A0]">ส่งรายละเอียดเบื้องต้นมาได้เลย ทีมจะช่วยประเมิน scope และแนะนำจุดเริ่มต้นให้</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C86858] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D87868]"><ArrowRight className="h-4 w-4" />เริ่มต้นคุยกัน</Link><a href="mailto:ptsuriyarangsri@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FAD4C0]/30 px-6 py-3 text-sm font-semibold text-[#FAD4C0] hover:bg-[#FAD4C0]/10"><Mail className="h-4 w-4" />ส่งอีเมล</a></div>
      </section>
    </main>
  );
}
