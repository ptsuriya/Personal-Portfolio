const skills = {
  Design: ["Figma", "Penpot", "Canva", "UI/UX Design"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  Backend: ["PHP", "Laravel"],
  Other: ["Git", "Vercel"],
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Resume</p>
        <h1 className="text-3xl font-bold text-[#2A1010]">ประวัติการทำงาน</h1>
      </div>

      {/* About */}
      <section className="mb-8 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">เกี่ยวกับฉัน</p>
        <p className="leading-relaxed text-sm text-[#9A6858]">
          Poramart Tsuriyaransri (Kuma) — Full-Stack Designer & Developer
          ที่มีความสนใจในการออกแบบประสบการณ์ผู้ใช้และการพัฒนาเว็บแบบครบวงจร
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">ประสบการณ์</p>
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-[#2A1010]">— เพิ่มประสบการณ์ที่นี่ —</p>
                <p className="mt-0.5 text-xs text-[#9A6858]">ตำแหน่ง · บริษัท</p>
              </div>
              <span className="flex-shrink-0 rounded-full bg-[#E8B8A8]/40 px-2.5 py-0.5 text-[10px] text-[#7A4838]">
                ปี—
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">ทักษะ</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-4">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]/70">{cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-[#E8B8A8]/60 px-2.5 py-0.5 text-xs text-[#2A1010]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CV download */}
      <button
        disabled
        className="rounded-xl bg-[#2A1010] px-6 py-3 text-sm font-semibold text-[#FAD4C0] opacity-50 cursor-not-allowed"
      >
        ดาวน์โหลด CV (PDF) — เร็วๆ นี้
      </button>
    </main>
  );
}
