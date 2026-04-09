'use client'
import { useState } from "react";
import ShinyText from "@/components/reactbits/ShinyText";

const projects: {
  title: string;
  desc: string;
  stack: string[];
  type: string;
  emoji: string;
}[] = [
  // TODO: เพิ่มผลงานจริงที่นี่
];

const placeholderProjects = [
  { type: "UI/UX", label: "UI/UX Design", emoji: "🎨", color: "from-[#C86858]/20 to-[#9A4858]/10" },
  { type: "Frontend", label: "Frontend Dev", emoji: "⚡", color: "from-[#5878C8]/15 to-[#384898]/8" },
  { type: "Full-Stack", label: "Full-Stack", emoji: "🚀", color: "from-[#58A878]/15 to-[#386848]/8" },
  { type: "UI/UX", label: "UI/UX Design", emoji: "✦", color: "from-[#A858C8]/15 to-[#784898]/8" },
];

const filterTabs = ["ทั้งหมด", "UI/UX", "Frontend", "Full-Stack"];

export default function CodeworkPage() {
  const [activeFilter, setActiveFilter] = useState("ทั้งหมด");

  const filteredPlaceholders =
    activeFilter === "ทั้งหมด"
      ? placeholderProjects
      : placeholderProjects.filter((p) => p.type === activeFilter);
  return (
    <main className="w-full mx-auto max-w-5xl px-6 py-12">

      {/* ─── Hero ─── */}
      <div className="mb-6 overflow-hidden rounded-3xl bg-[#2A1010]/90 border border-[#C86858]/25 relative">
        {/* grid lines bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 30px, rgba(232,168,136,0.08) 31px, transparent 32px), repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(232,168,136,0.05) 61px, transparent 62px)",
          }}
        />
        {/* glow */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-15 rounded-full"
          style={{ background: "radial-gradient(circle, #C86858 0%, transparent 70%)" }}
        />

        {/* Editor bar */}
        <div className="relative flex items-center gap-1.5 bg-[#3A1818]/70 px-5 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#E8A888]/50" />
          <span className="h-3 w-3 rounded-full bg-[#E8C4A0]/50" />
          <span className="h-3 w-3 rounded-full bg-[#B8E8A0]/50" />
          <span className="ml-3 font-mono text-[10px] text-[#C86858]/60">portfolio.tsx</span>
        </div>

        <div className="relative px-8 py-10 md:py-12 flex flex-col items-center text-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#C86858]/60">
            // Full-Stack Designer &amp; Developer
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#FAD4C0] md:text-5xl leading-tight">
            งานของฉัน
          </h1>
          <p className="font-mono text-sm text-[#C89888] max-w-md">
            <span className="text-[#E8A888]">stack</span>
            <span className="text-[#9A6858]">:</span>{" "}
            <span className="text-[#E8D4A0]">[&quot;Figma&quot;, &quot;Next.js&quot;, &quot;React&quot;, &quot;Laravel&quot;, &quot;Tailwind&quot;]</span>
          </p>

          {/* Stats row */}
          <div className="mt-2 flex items-center gap-6 md:gap-10">
            {[
              { num: "UI/UX", label: "Design" },
              { num: "Frontend", label: "Developer" },
              { num: "Full-Stack", label: "Projects" },
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-0.5">
                <span className="font-mono text-base font-bold text-[#FAD4C0]">{s.num}</span>
                <span className="text-[10px] text-[#C89888]/70 tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Filter Tabs ─── */}
      <div className="mt-0 mb-8 flex justify-center flex-wrap gap-3">
        {filterTabs.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
              activeFilter === f
                ? "bg-[#2A1010] text-[#FAD4C0] border-[#2A1010] shadow-[0_4px_14px_rgba(42,16,16,0.25)]"
                : "border-[#E8B8A8]/60 text-[#9A5848] hover:bg-[#FAE4DC] hover:text-[#2A1010] hover:border-[#D8987A]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ─── Projects Grid ─── */}
      {projects.length === 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filteredPlaceholders.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(184,108,86,0.15)] hover:border-[#D8987A]/60"
            >
              {/* gradient tint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60`} />

              {/* Thumbnail placeholder */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E8D0C8]/30 flex flex-col items-center justify-center gap-2 border-b border-[#E8B8A8]/30">
                <span className="text-4xl opacity-30">{p.emoji}</span>
                <span className="font-mono text-[10px] text-[#C86858]/30">// ภาพงาน {i + 1}</span>
              </div>

              {/* Info */}
              <div className="relative p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#2A1010]/8 px-3 py-0.5 text-[10px] font-semibold text-[#C86858] border border-[#C86858]/20 tracking-wider uppercase">
                    {p.label}
                  </span>
                  <span className="text-xs text-[#C86858]/40 font-mono">00{i + 1}</span>
                </div>
                <p className="font-semibold text-[#2A1010]">ชื่อโปรเจค — เร็วๆ นี้</p>
                <p className="mt-1 text-xs text-[#9A6858] leading-relaxed">รายละเอียดโปรเจคจะปรากฏที่นี่</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Next.js", "Figma"].map((t) => (
                    <span key={t} className="rounded-full bg-[#E8B8A8]/40 px-2.5 py-0.5 text-[10px] text-[#7A4838]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/50 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[#C86858]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#C86858]">
                    {p.type}
                  </span>
                  <span className="text-xl">{p.emoji}</span>
                </div>
                <p className="mt-2 font-semibold text-[#2A1010]">{p.title}</p>
                <p className="mt-1 text-xs text-[#9A6858]">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-[#E8B8A8]/40 px-2 py-0.5 text-[10px] text-[#7A4838]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── CTA ─── */}
      <div className="mt-14 rounded-2xl border border-[#E8B8A8]/50 bg-[linear-gradient(135deg,rgba(250,228,220,0.7)_0%,rgba(255,246,242,0.6)_100%)] p-8 text-center backdrop-blur-sm">
        <p className="text-2xl mb-1">💼</p>
        <p className="font-semibold text-[#2A1010] mb-1">สนใจจ้างงาน?</p>
        <p className="text-sm text-[#9A6858] mb-4">ทักมาคุยได้เลย ยินดีรับงาน UI/UX, Frontend และ Full-Stack</p>
        <a
          href="mailto:ptsuriyarangsri@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-[#2A1010] px-6 py-2.5 text-sm font-semibold text-[#FAD4C0] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white hover:shadow-[0_8px_20px_rgba(200,104,88,0.3)]"
        >
          <ShinyText text="ติดต่อฉัน →" speed={3} color="#FAD4C0" shineColor="#FFF0E8" />
        </a>
      </div>
    </main>
  );
}
