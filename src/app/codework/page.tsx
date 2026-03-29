import ShinyText from "@/components/reactbits/ShinyText";

const projects: {
  title: string;
  desc: string;
  stack: string[];
  type: string;
}[] = [
  // TODO: เพิ่มผลงานจริงที่นี่
];

export default function CodeworkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      {/* Hero banner — dark code style */}
      <div className="mb-12 overflow-hidden rounded-3xl bg-[#2A1010]/90 border border-[#C86858]/25">
        {/* Editor bar */}
        <div className="flex items-center gap-1.5 bg-[#3A1818]/70 px-5 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#E8A888]/50" />
          <span className="h-3 w-3 rounded-full bg-[#E8C4A0]/50" />
          <span className="h-3 w-3 rounded-full bg-[#B8E8A0]/50" />
          <span className="ml-3 font-mono text-[10px] text-[#C86858]/50">portfolio.tsx</span>
        </div>
        <div className="px-7 py-8">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[#C86858]/60">
            // Full-Stack Designer & Developer
          </p>
          <h1 className="font-mono text-3xl font-bold text-[#FAD4C0] md:text-4xl">
            งานของฉัน
          </h1>
          <p className="mt-3 font-mono text-sm text-[#C89888]">
            <span className="text-[#E8A888]">stack</span>
            <span className="text-[#9A6858]">:</span>{" "}
            <span className="text-[#E8D4A0]">[&quot;Figma&quot;, &quot;Next.js&quot;, &quot;React&quot;, &quot;Laravel&quot;, &quot;Tailwind&quot;]</span>
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {["ทั้งหมด", "UI/UX", "Frontend", "Full-Stack"].map((f) => (
          <button
            key={f}
            className="rounded-full border border-[#E8B8A8]/60 px-4 py-1.5 text-xs font-medium text-[#9A5848] transition-colors hover:bg-[#FAE4DC] hover:text-[#2A1010] first:bg-[#2A1010] first:text-[#FAD4C0] first:border-[#2A1010]"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {projects.length === 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            { type: "UI/UX", label: "UI/UX Design" },
            { type: "Frontend", label: "Frontend Dev" },
            { type: "Full-Stack", label: "Full-Stack" },
            { type: "UI/UX", label: "UI/UX Design" },
          ].map((p, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/50 backdrop-blur-sm"
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video overflow-hidden bg-[#2A1010]/10 flex items-center justify-center">
                <span className="font-mono text-xs text-[#C86858]/40">// ภาพงาน {i + 1}</span>
              </div>
              {/* Info */}
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[#2A1010]/8 px-2.5 py-0.5 text-[10px] font-semibold text-[#C86858] border border-[#C86858]/20">
                    {p.label}
                  </span>
                </div>
                <p className="font-semibold text-[#2A1010]">ชื่อโปรเจค — เร็วๆ นี้</p>
                <p className="mt-1 text-xs text-[#9A6858]">รายละเอียดโปรเจค</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Next.js", "Figma"].map((t) => (
                    <span key={t} className="rounded-full bg-[#E8B8A8]/40 px-2 py-0.5 text-[10px] text-[#7A4838]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/50">
              <div className="p-5">
                <span className="rounded-full bg-[#C86858]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#C86858]">
                  {p.type}
                </span>
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

      {/* CTA */}
      <div className="mt-14 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-7 text-center backdrop-blur-sm">
        <p className="text-sm text-[#9A6858] mb-3">สนใจจ้างงาน หรืออยากคุยเรื่องโปรเจค?</p>
        <a
          href="mailto:ptsuriyarangsri@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-[#2A1010] px-5 py-2.5 text-sm font-semibold text-[#FAD4C0] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white"
        >
          <ShinyText text="ติดต่อฉัน →" speed={3} color="#FAD4C0" shineColor="#FFF0E8" />
        </a>
      </div>
    </main>
  );
}
