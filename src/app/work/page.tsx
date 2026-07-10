'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ShinyText from '@/components/reactbits/ShinyText';
import { caseStudies } from '@/data/case-studies';

const placeholderProjects = [
  { type: 'UI/UX', label: 'UI/UX Design', emoji: '🎨', color: 'from-[#C86858]/20 to-[#9A4858]/10' },
  { type: 'Frontend', label: 'Frontend Dev', emoji: '⚡', color: 'from-[#5878C8]/15 to-[#384898]/8' },
  { type: 'Full-Stack', label: 'Full-Stack', emoji: '🚀', color: 'from-[#58A878]/15 to-[#386848]/8' },
  { type: 'UI/UX', label: 'UI/UX Design', emoji: '✦', color: 'from-[#A858C8]/15 to-[#784898]/8' },
];

const filterTabs = ['ทั้งหมด', 'UI/UX', 'Frontend', 'Full-Stack'] as const;

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterTabs)[number]>('ทั้งหมด');

  const filteredCaseStudies =
    activeFilter === 'ทั้งหมด' ? caseStudies : caseStudies.filter((c) => c.type === activeFilter);

  const filteredPlaceholders =
    activeFilter === 'ทั้งหมด'
      ? placeholderProjects
      : placeholderProjects.filter((p) => p.type === activeFilter);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="mb-6 overflow-hidden rounded-3xl border border-[#C86858]/25 bg-[#2A1010]/90 relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'repeating-linear-gradient(180deg, transparent 0px, transparent 30px, rgba(232,168,136,0.08) 31px, transparent 32px), repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(232,168,136,0.05) 61px, transparent 62px)',
          }}
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #C86858 0%, transparent 70%)' }}
        />

        <div className="relative flex items-center gap-1.5 bg-[#3A1818]/70 px-5 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#E8A888]/50" />
          <span className="h-3 w-3 rounded-full bg-[#E8C4A0]/50" />
          <span className="h-3 w-3 rounded-full bg-[#B8E8A0]/50" />
          <span className="ml-3 font-mono text-[10px] text-[#C86858]/60">case-studies.tsx</span>
        </div>

        <div className="relative flex flex-col items-center gap-4 px-8 py-10 text-center md:py-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#C86858]/60">
            // Case Studies & Portfolio
          </p>
          <h1 className="font-mono text-4xl font-bold leading-tight text-[#FAD4C0] md:text-5xl">ผลงานที่ผ่านมา</h1>
          <p className="max-w-md font-mono text-sm text-[#C89888]">
            <span className="text-[#E8A888]">stack</span>
            <span className="text-[#9A6858]">:</span>{' '}
            <span className="text-[#E8D4A0]">[&quot;Figma&quot;, &quot;Next.js&quot;, &quot;React&quot;, &quot;Laravel&quot;, &quot;Tailwind&quot;]</span>
          </p>
        </div>
      </div>

      <div className="mt-0 mb-8 flex flex-wrap justify-center gap-3">
        {filterTabs.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
              activeFilter === f
                ? 'border-[#2A1010] bg-[#2A1010] text-[#FAD4C0] shadow-[0_4px_14px_rgba(42,16,16,0.25)]'
                : 'border-[#E8B8A8]/60 text-[#9A5848] hover:border-[#D8987A] hover:bg-[#FAE4DC] hover:text-[#2A1010]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filteredCaseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group block overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D8987A]/60 hover:shadow-[0_16px_40px_rgba(184,108,86,0.15)]"
            >
              <div
                className="relative aspect-[16/9] overflow-hidden border-b border-[#E8B8A8]/30 bg-cover bg-center"
                style={{ backgroundImage: `url(${c.cover})` }}
              />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full border border-[#C86858]/20 bg-[#2A1010]/8 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">
                    {c.type}
                  </span>
                  <span className="font-mono text-xs text-[#C86858]/40">{c.year}</span>
                </div>
                <h3 className="font-semibold text-[#2A1010]">{c.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#9A6858]">{c.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#E8B8A8]/40 px-2.5 py-0.5 text-[10px] text-[#7A4838]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filteredPlaceholders.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-white/30 backdrop-blur-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60`} />
              <div className="relative flex aspect-[16/9] flex-col items-center justify-center gap-2 overflow-hidden border-b border-[#E8B8A8]/30 bg-[#E8D0C8]/30">
                <span className="text-4xl opacity-30">{p.emoji}</span>
                <span className="font-mono text-[10px] text-[#C86858]/30">// case study {i + 1}</span>
              </div>
              <div className="relative p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-[#C86858]/20 bg-[#2A1010]/8 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">
                    {p.label}
                  </span>
                  <span className="font-mono text-xs text-[#C86858]/40">00{i + 1}</span>
                </div>
                <p className="font-semibold text-[#2A1010]">เร็วๆ นี้ — case study กำลังจะเปิดตัว</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9A6858]">
                  ระหว่างนี้ ทักมาขอดูผลงานเป็นรายชิ้นได้
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-14 rounded-2xl border border-[#E8B8A8]/50 bg-[linear-gradient(135deg,rgba(250,228,220,0.7)_0%,rgba(255,246,242,0.6)_100%)] p-8 text-center backdrop-blur-sm">
        <p className="mb-1 text-2xl">💼</p>
        <p className="mb-1 font-semibold text-[#2A1010]">มีโปรเจกต์ในใจอยู่แล้ว?</p>
        <p className="mb-4 text-sm text-[#9A6858]">บอกผมเลย — ตอบกลับใน 1-2 วัน ไม่มีค่าใช้จ่ายในการให้คำปรึกษา</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#2A1010] px-6 py-2.5 text-sm font-semibold text-[#FAD4C0] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white hover:shadow-[0_8px_20px_rgba(200,104,88,0.3)]"
        >
          <ShinyText text="เริ่มโปรเจกต์ →" speed={3} color="#FAD4C0" shineColor="#FFF0E8" />
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
