export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#C07B2A] text-sm font-medium tracking-widest uppercase mb-2">
          Resume
        </p>
        <h1 className="text-4xl font-bold text-[#3D1F00]">ประวัติการทำงาน</h1>
      </div>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-4">
          เกี่ยวกับฉัน
        </h2>
        <p className="text-[#8B5E3C] leading-relaxed">
          Poramart Tsuriyaransri (Kuma) — UI Designer & Frontend Developer
          ที่มีความสนใจในการออกแบบประสบการณ์ผู้ใช้และการพัฒนาเว็บ
        </p>
      </section>

      {/* Experience placeholder */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-4">
          ประสบการณ์
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-[#E8C99A] pl-4">
            <p className="text-[#3D1F00] font-semibold">— เพิ่มประสบการณ์ที่นี่ —</p>
            <p className="text-[#8B5E3C] text-sm mt-1">ตำแหน่ง · บริษัท · ระยะเวลา</p>
          </div>
        </div>
      </section>

      {/* Skills placeholder */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-4">
          ทักษะ
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX Design"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-[#FFF0CC] border border-[#E8C99A] text-[#3D1F00] text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Download placeholder */}
      <div className="mt-8">
        <button
          disabled
          className="bg-[#C07B2A] text-[#FDF6EC] px-6 py-3 rounded-xl font-medium opacity-50 cursor-not-allowed text-sm"
        >
          ดาวน์โหลด CV (PDF) — เร็วๆ นี้
        </button>
      </div>
    </main>
  );
}
