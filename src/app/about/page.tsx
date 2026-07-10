import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

const skills = {
  Design: ['Figma', 'Penpot', 'Canva', 'UI/UX Design', 'Design System'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  Backend: ['PHP', 'Laravel', 'Node.js', 'Server Actions'],
  Other: ['Git', 'Vercel', 'SEO', 'Performance'],
};

const principles = [
  {
    icon: '🎯',
    title: 'Communication ก่อน',
    desc: 'อัปเดตทุก 2-3 วัน ไม่ ghost ไม่หายไป — รู้สถานะงานตลอด',
  },
  {
    icon: '⏱',
    title: 'ส่งงานตรงเวลา',
    desc: 'ประมาณการณ์เผื่อไว้แล้ว ถ้าจะช้าจะแจ้งล่วงหน้าไม่ใช่วันส่ง',
  },
  {
    icon: '🔧',
    title: 'โค้ดดูแลต่อได้',
    desc: 'เขียน TypeScript + component-based ไม่ใช่ของใช้แล้วทิ้ง',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">About</p>
        <h1 className="text-3xl font-bold text-[#2A1010] sm:text-4xl">เกี่ยวกับ KUMA</h1>
      </header>

      <section className="mb-10 grid items-center gap-8 rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF6F0]/70 p-6 backdrop-blur-sm sm:p-8 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#E8B8A8]">
          <Image
            src="/image/Line/profile.jpg"
            fill
            alt="KUMA — Pongtiwat Suriyarangsri"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>

        <div>
          <p className="text-2xl font-bold text-[#2A1010]">Pongtiwat Suriyarangsri</p>
          <p className="text-sm text-[#9A6858]">UI/UX Designer & Frontend Developer · Bangkok, Thailand</p>

          <p className="mt-4 text-sm leading-relaxed text-[#3D1F00]">
            สวัสดีครับ ผม KUMA — ฟรีแลนซ์ที่ทำทั้ง design และ development
            จุดแข็งคือเข้าใจทั้งสองฝั่ง ทำให้ออกแบบได้สวยและทำได้จริง
            ไม่ส่งงานที่ dev ทำต่อไม่ได้ ไม่เขียนโค้ดที่ designer ดูแล้วเซ็ง
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#3D1F00]">
            ทำงานคนเดียวเลยตอบเร็ว ตัดสินใจไว ไม่มีเลเยอร์กลาง — เหมาะกับ startup ที่อยากได้เว็บคุณภาพ
            หรือทีมที่ต้องการ designer/dev ที่เข้ามาเสริมแบบยืดหยุ่น
          </p>
        </div>
      </section>

      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/50 p-5 backdrop-blur-sm"
          >
            <span className="text-2xl">{p.icon}</span>
            <h3 className="mt-2 text-base font-bold text-[#2A1010]">{p.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#7A4838]">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C86858]">ทักษะ</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <div
              key={cat}
              className="rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-5 backdrop-blur-sm"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]/70">{cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#E8B8A8]/60 bg-white/40 px-2.5 py-0.5 text-xs text-[#2A1010]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#2A1010_0%,#4A201B_100%)] p-8 text-center text-[#FAD4C0]">
        <h3 className="text-2xl font-bold">พร้อมจะเริ่มโปรเจกต์?</h3>
        <p className="mt-2 text-sm text-[#E8C4A0]">คุยฟรี ไม่มีค่าใช้จ่าย ตอบกลับใน 1-2 วัน</p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C86858] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868] sm:w-auto"
          >
            ติดต่อ KUMA
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:ptsuriyarangsri@gmail.com?subject=ขอ%20CV%20ของ%20KUMA"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#FAD4C0]/40 bg-transparent px-6 py-3 text-sm font-semibold text-[#FAD4C0] transition-all hover:bg-[#FAD4C0]/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            ขอ CV ทางอีเมล
          </a>
        </div>
      </section>
    </main>
  );
}
