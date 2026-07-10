import Link from 'next/link';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { services } from '@/data/services';

function formatPrice(price: number | null, note?: string) {
  if (price === null) return 'ขอใบเสนอราคา';
  return `${note ?? ''} ฿${price.toLocaleString('th-TH')}`.trim();
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Web development services</p>
        <h1 className="text-3xl font-bold tracking-[-0.025em] text-[#2A1010] sm:text-5xl">บริการรับเขียนเว็บไซต์</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7A4838] sm:text-base">
          รับทำเว็บบริษัท, Landing Page, เว็บแอป และระบบหลังบ้านแบบครบขั้นตอน
          ราคาจริงขึ้นอยู่กับจำนวนหน้า ฟังก์ชัน และความซับซ้อนของระบบ
        </p>
      </header>

      <section className="mb-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.slug}
            className="flex h-full flex-col gap-4 rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF6F0]/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D8987A] hover:shadow-[0_20px_50px_rgba(184,108,86,0.15)]"
          >
            <span className="text-4xl">{s.icon}</span>

            <header>
              <h2 className="text-xl font-bold text-[#2A1010]">{s.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-[#7A4838]">{s.tagline}</p>
            </header>

            <div className="flex flex-wrap items-baseline gap-2 border-y border-[#E8B8A8]/60 py-3">
              <span className="text-lg font-bold text-[#C86858]">{formatPrice(s.startingPrice, s.priceNote)}</span>
              <span className="text-xs text-[#9A6858]">· {s.timeline}</span>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">สิ่งที่จะได้รับ</p>
              <ul className="space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-[#3D1F00]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C86858]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">เหมาะกับ</p>
              <ul className="space-y-1">
                {s.bestFor.map((b) => (
                  <li key={b} className="text-xs text-[#7A4838]">
                    · {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#E8B8A8]/60 bg-white/40 px-2 py-0.5 text-[10px] text-[#7A4838]"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              href={`/contact?type=${s.slug}`}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#2A1010] px-5 py-3 text-sm font-semibold text-[#FAD4C0] transition-all hover:bg-[#C86858] hover:text-white"
            >
              ขอประเมินราคางานนี้
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>

      <section className="mb-12 overflow-hidden rounded-3xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/40 backdrop-blur-sm">
        <div className="grid divide-y divide-[#E8B8A8]/40 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-6 text-center">
            <p className="font-mono text-2xl text-[#C86858]">01</p>
            <p className="mt-2 text-sm font-bold text-[#2A1010]">Scope ชัดก่อนเริ่ม</p>
            <p className="mt-1 text-xs text-[#7A4838]">แยก deliverable และ milestone ให้ตรวจสอบได้</p>
          </div>
          <div className="p-6 text-center">
            <p className="font-mono text-2xl text-[#C86858]">02</p>
            <p className="mt-2 text-sm font-bold text-[#2A1010]">อัปเดตเป็นระยะ</p>
            <p className="mt-1 text-xs text-[#7A4838]">เห็น progress และทดสอบงานได้ระหว่างทาง</p>
          </div>
          <div className="p-6 text-center">
            <p className="font-mono text-2xl text-[#C86858]">03</p>
            <p className="mt-2 text-sm font-bold text-[#2A1010]">ส่งมอบพร้อมดูแลต่อ</p>
            <p className="mt-1 text-xs text-[#7A4838]">มี documentation และช่วงแก้ไข bug หลังส่งงาน</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#2A1010_0%,#4A201B_100%)] p-8 text-center text-[#FAD4C0]">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C4A0]">Need a website?</p>
        <h3 className="mt-2 text-2xl font-bold">ยังไม่แน่ใจว่าเว็บแบบไหนเหมาะกับธุรกิจ?</h3>
        <p className="mt-2 text-sm text-[#E8C4A0]">ส่งรายละเอียดมาให้ทีมช่วยประเมินได้ฟรี ไม่มีค่าใช้จ่ายในการคุยเบื้องต้น</p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact#booking"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C86858] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868] sm:w-auto"
          >
            <Calendar className="h-4 w-4" />
            นัดคุยเบื้องต้น
          </Link>
          <Link
            href="/process"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#FAD4C0]/40 bg-transparent px-6 py-3 text-sm font-semibold text-[#FAD4C0] transition-all hover:bg-[#FAD4C0]/10 sm:w-auto"
          >
            ดูขั้นตอนการทำงาน
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
