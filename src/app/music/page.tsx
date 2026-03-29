export default function MusicPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#C07B2A] text-sm font-medium tracking-widest uppercase mb-2">
          Songwriting
        </p>
        <h1 className="text-4xl font-bold text-[#3D1F00]">เพลงของฉัน</h1>
        <p className="text-[#8B5E3C] mt-3 max-w-xl">
          Pop R&B · YouTube
        </p>
      </div>

      {/* Artist Bio */}
      <section className="bg-[#FFF0CC] border border-[#E8C99A] rounded-2xl p-8 mb-10">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-3">
          Artist Bio
        </h2>
        <p className="text-[#8B5E3C] leading-relaxed">
          — เพิ่ม Artist Bio ที่นี่ —
        </p>
      </section>

      {/* Songs placeholder */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-6">
          ผลงานเพลง
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#FFF0CC] border border-[#E8C99A] rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5C9A0] flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎵</span>
              </div>
              <div>
                <p className="font-semibold text-[#3D1F00]">ชื่อเพลง {i}</p>
                <p className="text-[#8B5E3C] text-sm">เพิ่มลิงก์ YouTube</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborators placeholder */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#C07B2A] mb-6">
          พันธมิตร
        </h2>
        <p className="text-[#8B5E3C] text-sm">— เพิ่มข้อมูลพันธมิตรที่นี่ —</p>
      </section>
    </main>
  );
}
