import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Layers3,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react';
import InfiniteMarquee from '@/components/reactbits/InfiniteMarquee';
import { services } from '@/data/services';
import { processSteps } from '@/data/process';

const serviceHighlights = [
  {
    label: '01 / เว็บไซต์ธุรกิจ',
    title: 'เว็บที่ทำให้คนเข้าใจคุณเร็วขึ้น',
    description: 'วางโครงสร้าง เนื้อหา และหน้าตาให้ธุรกิจดูน่าเชื่อถือ พร้อมต่อยอด SEO ได้',
  },
  {
    label: '02 / เว็บแอป',
    title: 'ระบบที่ช่วยให้ทีมทำงานลื่นขึ้น',
    description: 'ออกแบบ flow และพัฒนา dashboard, portal หรือระบบเฉพาะทางให้ใช้งานจริง',
  },
  {
    label: '03 / UI/UX',
    title: 'เปลี่ยนไอเดียให้เป็นหน้าจอที่ใช้ได้',
    description: 'ตั้งแต่ user flow, wireframe ถึง design system และ handoff ให้ทีม dev',
  },
];

const trustPoints = [
  'คุย scope และงบประมาณก่อนเริ่มงาน',
  'มี staging ให้ตรวจงานระหว่างทาง',
  'ส่งมอบโค้ด เอกสาร และดูแลหลังเปิดใช้',
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B5E3C]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C86858]/30 bg-[#FFF8F0]/70 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7AA36F] shadow-[0_0_0_4px_rgba(122,163,111,0.14)]" />
              เปิดรับโปรเจกต์ใหม่
            </span>
            <span className="hidden text-[#C07B2A] sm:inline">KUMA / DIGITAL BUILD STUDIO</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#24110B] sm:text-7xl lg:text-[clamp(4.5rem,7.5vw,7.4rem)]">
            มีโจทย์เว็บ?
            <span className="mt-2 block text-[#C86858]">เริ่มคุยกับ KUMA.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#6F4638] sm:text-lg">
            รับออกแบบและพัฒนาเว็บไซต์ เว็บแอป และระบบหลังบ้านสำหรับธุรกิจที่อยากเปลี่ยนไอเดียให้เป็นของที่ใช้งานได้จริง
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24110B] px-6 py-3.5 text-sm font-semibold text-[#FFF7E8] shadow-[0_16px_30px_rgba(36,17,11,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C86858] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86858] focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
              ส่ง brief ให้ประเมิน
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C86858]/35 bg-[#FFF8F0]/60 px-6 py-3.5 text-sm font-semibold text-[#7A4838] transition-all duration-300 hover:-translate-y-1 hover:border-[#C86858] hover:bg-[#FAE4DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86858] focus-visible:ring-offset-2"
            >
              ดูบริการ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl gap-3 border-t border-[#E8B8A8]/60 pt-5 sm:grid-cols-3 sm:gap-5">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-2 text-xs leading-5 text-[#7A4838]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7AA36F]" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#E8B8A8]/50 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#E7C36D]/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#24110B]/20 bg-[#24110B] p-5 shadow-[0_32px_80px_rgba(42,16,16,0.2)] sm:p-7">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#C86858]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#7AA36F]/15 blur-3xl" />

            <div className="relative flex items-center justify-between border-b border-[#FAD4C0]/15 pb-4 text-[10px] uppercase tracking-[0.2em] text-[#E8C4A0]/70">
              <span>Brand-led digital work</span>
              <span>Available / 2026</span>
            </div>

            <div className="relative flex min-h-[360px] flex-col items-center justify-center py-12 sm:min-h-[430px]">
              <div className="absolute inset-10 rounded-full border border-[#FAD4C0]/10" />
              <div className="absolute inset-20 rounded-full border border-dashed border-[#FAD4C0]/10" />
              <div className="relative z-10 aspect-[2/1] w-[min(76%,310px)]">
                <Image
                  src="/image/Asset/KUMA.png"
                  alt="KUMA logo"
                  fill
                  sizes="(min-width: 640px) 310px, 76vw"
                  className="object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.28)]"
                  priority
                />
              </div>
              <p className="relative z-10 mt-10 text-center text-sm font-medium tracking-[0.16em] text-[#FAD4C0]">DESIGN CLEARLY.<br />BUILD DELIBERATELY.</p>
            </div>

            <div className="relative grid grid-cols-2 gap-3 border-t border-[#FAD4C0]/15 pt-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E8C4A0]/60">What we make</p>
                <p className="mt-1 text-sm font-semibold text-[#FFF7E8]">Websites / Systems</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E8C4A0]/60">Next step</p>
                <p className="mt-1 text-sm font-semibold text-[#FAD4C0]">Send your brief ↗</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#C86858]/25 bg-[#FFF0CC] px-4 py-3 shadow-[0_12px_26px_rgba(154,104,10,0.14)] sm:left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8B5E3C]">01 / intake</p>
            <p className="mt-1 text-sm font-semibold text-[#24110B]">เล่าโจทย์ของคุณได้เลย</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8B8A8]/55 bg-[#FFF8F0]/55">
        <div className="mx-auto grid w-full max-w-7xl gap-px px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Layers3, label: 'เว็บไซต์ที่ชัดเจน', detail: 'Corporate site / Landing page' },
            { icon: Sparkles, label: 'ประสบการณ์ที่ดี', detail: 'UI/UX / Design system' },
            { icon: Clock3, label: 'พร้อมเปิดใช้งาน', detail: 'Build / QA / Launch' },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-4 border-[#E8B8A8]/55 px-2 py-6 md:border-r md:px-6 md:py-8 md:first:pl-0 md:last:border-r-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#24110B] text-[#FAD4C0]"><Icon className="h-4 w-4" /></span>
              <div><p className="text-sm font-semibold text-[#24110B]">{label}</p><p className="mt-0.5 text-xs text-[#8B5E3C]">{detail}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <header className="max-w-2xl">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">Pick your starting point</p>
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-5xl">อยากให้ KUMA ช่วยเรื่องไหน?</h2>
          <p className="mt-4 text-sm leading-7 text-[#7A4838] sm:text-base">เลือกบริการที่ใกล้กับโจทย์ที่สุด แล้วส่งรายละเอียดมาให้ช่วยประเมิน scope และงบประมาณ</p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item, index) => (
            <Link
              key={item.label}
              href={`/services#${services[index].slug}`}
              className={`group flex min-h-[290px] flex-col rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86858] focus-visible:ring-offset-2 ${index === 1 ? 'border-[#24110B] bg-[#24110B] text-[#FFF7E8] shadow-[0_20px_50px_rgba(36,17,11,0.14)]' : 'border-[#E8B8A8]/65 bg-[#FFF8F0]/65 text-[#24110B]'}`}
            >
              <div className="flex items-start justify-between gap-4"><span className={`font-mono text-[10px] tracking-[0.18em] ${index === 1 ? 'text-[#E8C4A0]' : 'text-[#A94E43]'}`}>{item.label}</span><ArrowUpRight className={`h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${index === 1 ? 'text-[#FAD4C0]' : 'text-[#A94E43]'}`} /></div>
              <div className="mt-auto"><h3 className="max-w-xs text-xl font-bold leading-snug">{item.title}</h3><p className={`mt-3 text-sm leading-7 ${index === 1 ? 'text-[#E8C4A0]' : 'text-[#7A4838]'}`}>{item.description}</p><span className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold ${index === 1 ? 'text-[#FAD4C0]' : 'text-[#A94E43]'}`}>ดูรายละเอียด <ArrowRight className="h-3.5 w-3.5" /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-28">
        <div className="rounded-[1.75rem] border border-[#24110B]/20 bg-[#24110B] p-7 text-[#FFF7E8] sm:p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C4A0]">Why KUMA</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em]">รับงานแบบเข้าใจโจทย์<br /><span className="text-[#F3B19B]">ไม่ใช่แค่รับทำตามสั่ง</span></h2>
          <p className="mt-5 text-sm leading-7 text-[#E8C4A0]">ทุกโปรเจกต์เริ่มจาก business goal ที่ชัด แล้วค่อยเลือก design และเทคโนโลยีที่เหมาะสม เพื่อให้ของที่สร้างช่วยธุรกิจได้จริง</p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FAD4C0] transition-colors hover:text-white">รู้จักวิธีทำงานของเรา <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-[1.75rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/65 p-7 sm:p-9">
          <div className="flex items-end justify-between gap-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A94E43]">How it works</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B]">จาก brief สู่เว็บพร้อมใช้</h2></div><Link href="/process" className="hidden items-center gap-1 text-xs font-semibold text-[#A94E43] hover:text-[#24110B] sm:inline-flex">ดูทั้งหมด <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => <div key={step.step} className="border-t border-[#E8B8A8]/65 pt-4"><p className="font-mono text-[10px] text-[#A94E43]">{step.icon} / {step.duration}</p><h3 className="mt-2 text-base font-bold text-[#24110B]">{step.title}</h3><p className="mt-1 text-xs leading-6 text-[#7A4838]">{step.deliverable}</p></div>)}
          </div>
          <Link href="/process" className="mt-7 inline-flex items-center gap-1 text-xs font-semibold text-[#A94E43] hover:text-[#24110B] sm:hidden">ดูขั้นตอนทั้งหมด <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#C86858]/30 bg-[#F3D1C0] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[34px] border-[#C86858]/15" />
          <div className="absolute -bottom-32 right-24 h-56 w-56 rounded-full bg-[#FFF0CC]/60 blur-2xl" />
          <div className="relative max-w-2xl"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4B3F]">Your project starts here</p><h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#24110B] sm:text-6xl">มีโปรเจกต์อยู่ในหัวแล้วหรือยัง?</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#6F4638] sm:text-base">เล่าเป้าหมาย ประเภทงาน และช่วงเวลาที่อยากเริ่มมาได้เลย คุยเบื้องต้นฟรี ไม่มีข้อผูกมัด</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24110B] px-6 py-3.5 text-sm font-semibold text-[#FFF7E8] transition-all hover:-translate-y-1 hover:bg-[#C86858]"><Mail className="h-4 w-4" />เริ่มคุยเรื่องงาน</Link><Link href="/process#faq" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#8B4B3F]/35 px-6 py-3.5 text-sm font-semibold text-[#6F4638] transition-all hover:-translate-y-1 hover:bg-[#FFF0CC]/50">คำถามที่พบบ่อย <ArrowRight className="h-4 w-4" /></Link></div></div>
        </div>
      </section>

      <InfiniteMarquee text="KUMA / WEB DESIGN • FRONTEND DEVELOPMENT • WEB APPLICATION • รับโปรเจกต์ใหม่ •" className="py-3" speed={30} color="#C86858" />

      <footer className="border-t border-[#E8A888]/30 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-[#8C4D40] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><span className="relative block h-[42px] w-[84px]"><Image src="/image/Asset/KUMA.png" alt="KUMA" fill sizes="84px" className="object-contain" /></span><span>รับออกแบบและพัฒนาเว็บสำหรับธุรกิจ</span></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/services" className="hover:text-[#C86858]">บริการ</Link><Link href="/work" className="hover:text-[#C86858]">โซลูชัน</Link><Link href="/process" className="hover:text-[#C86858]">กระบวนการ</Link><Link href="/contact" className="hover:text-[#C86858]">ติดต่อ</Link></div>
        </div>
      </footer>
    </main>
  );
}
