import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  MonitorCog,
  Send,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import GlareCard from '@/components/reactbits/GlareCard';
import InfiniteMarquee from '@/components/reactbits/InfiniteMarquee';
import { services } from '@/data/services';
import { featuredCaseStudies } from '@/data/case-studies';

const capabilities = [
  {
    icon: MonitorCog,
    label: 'Business Website',
    title: 'เว็บไซต์บริษัทที่พร้อมสร้างความน่าเชื่อถือ',
    description: 'โครงสร้างชัด โหลดเร็ว และแก้ไขเนื้อหาต่อได้ง่ายเมื่อธุรกิจเติบโต',
  },
  {
    icon: Workflow,
    label: 'Web Application',
    title: 'ระบบออนไลน์ที่ลดงานซ้ำในทีม',
    description: 'ออกแบบ flow และพัฒนา dashboard, portal หรือเครื่องมือเฉพาะทางให้ใช้งานจริง',
  },
  {
    icon: Database,
    label: 'Internal Tools',
    title: 'ระบบหลังบ้านที่ทำงานแทน spreadsheet',
    description: 'จัดการข้อมูล สิทธิ์ผู้ใช้ และขั้นตอนทำงานไว้ในระบบเดียว',
  },
];

const stack = ['Next.js', 'React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Tailwind CSS'];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#C07B2A]/30 bg-[#FFF0CC]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5E3C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7AA36F]" />
            kumadesign.dev / web development
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#24110B] sm:text-6xl lg:text-7xl">
            รับเขียนเว็บไซต์
            <span className="block text-[#C86858]">ที่พร้อมใช้งานจริง</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#6F4638] sm:text-lg">
            kumadesign.dev รับเขียนเว็บไซต์บริษัท, Landing Page, เว็บแอป และระบบหลังบ้าน
            ตั้งแต่การวางโครงสร้าง เขียนโค้ด เชื่อมต่อระบบ จนถึง deploy ให้ธุรกิจใช้งานได้จริง
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#24110B] px-6 py-3.5 text-sm font-semibold text-[#FFF7E8] shadow-[0_12px_26px_rgba(36,17,11,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#C86858]"
            >
              <Send className="h-4 w-4" />
              ขอประเมินราคา
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C86858]/35 bg-[#FFF8F0]/70 px-6 py-3.5 text-sm font-semibold text-[#7A4838] transition-all hover:-translate-y-0.5 hover:border-[#C86858] hover:bg-[#FAE4DC]"
            >
              ดูบริการรับเขียนเว็บ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-xs text-[#7A4838] sm:grid-cols-3">
            {['ประเมิน scope ก่อนเริ่ม', 'อัปเดตงานทุก milestone', 'ส่งมอบพร้อมดูแลต่อ'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7AA36F]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <GlareCard className="rounded-3xl lg:min-h-[520px]">
          <div className="relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-3xl border border-[#3D1F00]/20 bg-[#24110B] shadow-[0_28px_70px_rgba(42,16,16,0.2)]">
            <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 80% 12%, #C86858 0%, transparent 34%), radial-gradient(circle at 10% 90%, #7AA36F 0%, transparent 30%)' }} />
            <div className="relative flex items-center justify-between border-b border-[#FAD4C0]/10 bg-[#2D1710]/80 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C86858]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E8C99A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7AA36F]" />
              </div>
              <span className="font-mono text-[10px] text-[#E8C4A0]/55">website-project.ts</span>
            </div>

            <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FAD4C0]/15 bg-[#FAD4C0]/10 text-[#FAD4C0]">
                    <Code2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8C4A0]/55">BUILD WITH PURPOSE</p>
                    <p className="mt-1 text-sm font-semibold text-[#FFF7E8]">จาก brief สู่เว็บไซต์ที่พร้อมเปิดใช้งาน</p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs leading-relaxed sm:text-sm">
                  <p><span className="text-[#E8A888]">const</span> <span className="text-[#FAD4C0]">project</span> <span className="text-[#C89888]">=</span> {'{'}</p>
                  <p className="pl-4"><span className="text-[#F0B8A0]">type</span><span className="text-[#C89888]">:</span> <span className="text-[#B8E8A0]">&quot;business_website&quot;</span><span className="text-[#C89888]">,</span></p>
                  <p className="pl-4"><span className="text-[#F0B8A0]">stack</span><span className="text-[#C89888]">:</span> <span className="text-[#E8D4A0]">[&quot;Next.js&quot;, &quot;React&quot;]</span><span className="text-[#C89888]">,</span></p>
                  <p className="pl-4"><span className="text-[#F0B8A0]">quality</span><span className="text-[#C89888]">:</span> <span className="text-[#B8E8C8]">&quot;fast_and_maintainable&quot;</span><span className="text-[#C89888]">,</span></p>
                  <p className="pl-4"><span className="text-[#F0B8A0]">status</span><span className="text-[#C89888]">:</span> <span className="text-[#B8E8A0]">&quot;รับโปรเจกต์ใหม่&quot;</span></p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="mt-12">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8C4A0]/55">CORE STACK</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="rounded-full border border-[#FAD4C0]/15 bg-[#FAD4C0]/8 px-3 py-1.5 font-mono text-[10px] text-[#FAD4C0]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlareCard>
      </section>

      <section className="border-y border-[#E8B8A8]/50 bg-[#FFF8F0]/45">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Globe2, label: 'Corporate Website', detail: 'เว็บบริษัทและ Landing Page' },
            { icon: Layers3, label: 'Web Application', detail: 'เว็บแอปและระบบสมาชิก' },
            { icon: ShieldCheck, label: 'Ready to Launch', detail: 'เร็ว responsive และดูแลต่อได้' },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-start gap-3 rounded-2xl border border-[#E8B8A8]/45 bg-[#FDF6EC]/70 p-4">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C07B2A]" />
              <div>
                <p className="text-sm font-semibold text-[#24110B]">{label}</p>
                <p className="mt-1 text-xs text-[#8B5E3C]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">What we build</p>
          <h2 className="text-3xl font-bold tracking-[-0.025em] text-[#24110B] sm:text-4xl">รับเขียนเว็บแบบไหนบ้าง</h2>
          <p className="mt-3 text-sm leading-7 text-[#7A4838]">เลือกประเภทงานที่ตรงกับธุรกิจ แล้วส่ง brief มาให้ช่วยประเมินได้เลย</p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, label, title, description }) => (
            <article key={label} className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#C86858]/55 hover:shadow-[0_20px_50px_rgba(184,108,86,0.14)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#24110B] text-[#FAD4C0]"><Icon className="h-5 w-5" /></span>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C86858]">{label}</p>
              <h3 className="mt-2 text-lg font-bold text-[#24110B]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#7A4838]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <header>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Services</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-[#24110B] sm:text-4xl">บริการรับเขียนเว็บไซต์</h2>
          </header>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C86858] hover:text-[#24110B]">
            ดูบริการทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services#${service.slug}`} className={`group rounded-3xl border p-6 transition-all hover:-translate-y-1 ${index === 0 ? 'border-[#24110B] bg-[#24110B] text-[#FFF7E8]' : 'border-[#E8B8A8]/60 bg-[#FFF8F0]/70 text-[#24110B]'}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-semibold">{service.icon}</span>
                <span className={`font-mono text-[10px] ${index === 0 ? 'text-[#E8C4A0]' : 'text-[#C86858]'}`}>0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{service.title}</h3>
              <p className={`mt-2 text-sm leading-7 ${index === 0 ? 'text-[#E8C4A0]' : 'text-[#7A4838]'}`}>{service.tagline}</p>
              <span className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold ${index === 0 ? 'text-[#FAD4C0]' : 'text-[#C86858]'}`}>ดูรายละเอียด <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="flex items-end justify-between gap-4">
            <header>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86858]">Selected work</p>
              <h2 className="text-3xl font-bold text-[#24110B]">ผลงานที่เลือกมาแนะนำ</h2>
            </header>
            <Link href="/work" className="text-sm font-semibold text-[#C86858]">ดูทั้งหมด</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group overflow-hidden rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF8F0]/70">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${study.cover})` }} />
                <div className="p-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C86858]">{study.type}</p><h3 className="mt-2 font-semibold text-[#24110B]">{study.title}</h3></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#24110B_0%,#4A201B_100%)] px-6 py-12 text-center text-[#FFF7E8] sm:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C4A0]">Ready to start?</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-[-0.025em] sm:text-4xl">พร้อมให้เว็บใหม่เริ่มทำงานแทนคุณหรือยัง?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#E8C4A0]">ส่งรายละเอียดงาน งบประมาณ และช่วงเวลาที่ต้องการมาได้เลย เราจะช่วยประเมินแนวทางให้</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C86858] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868]"><Send className="h-4 w-4" />ขอประเมินราคา</Link>
        </div>
      </section>

      <InfiniteMarquee text="รับเขียนเว็บไซต์ • Corporate Website • Landing Page • Web App • Next.js • React • kumadesign.dev" className="py-3" speed={30} color="#C86858" />

      <footer className="border-t border-[#E8A888]/30 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-[#8C4D40] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><Image src="/image/Asset/KUMA.png" width={64} height={32} alt="kumadesign.dev" className="h-7 w-auto object-contain" /><span>รับเขียนเว็บไซต์และเว็บแอป</span></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/work" className="hover:text-[#C86858]">ผลงาน</Link><Link href="/services" className="hover:text-[#C86858]">บริการ</Link><Link href="/process" className="hover:text-[#C86858]">กระบวนการ</Link><Link href="/contact" className="hover:text-[#C86858]">ติดต่อ</Link></div>
        </div>
      </footer>
    </main>
  );
}
