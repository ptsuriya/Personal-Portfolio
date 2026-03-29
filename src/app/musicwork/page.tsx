const songs: { title: string; youtubeUrl: string }[] = [
  // TODO: เพิ่มเพลงจริงที่นี่
];

const collaborators: { name: string; role: string }[] = [
  // TODO: เพิ่มพันธมิตรที่นี่
];

export default function MusicworkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      {/* Hero banner — gradient rose */}
      <div
        className="relative mb-12 overflow-hidden rounded-3xl"
        style={{ background: "linear-gradient(135deg, #C86858 0%, #9A4858 55%, #6A3048 100%)" }}
      >
        {/* Vinyl circles deco */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-white/8" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border-[16px] border-white/8" />
        <div className="pointer-events-none absolute right-8 top-8 h-10 w-10 rounded-full bg-white/10" />

        <div className="relative px-8 py-10">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Songwriting</p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">เพลงของฉัน</h1>
          <p className="mt-2 text-sm text-white/70">Pop R&B · YouTube</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Pop", "R&B", "Thai", "Songwriter"].map((t) => (
              <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/85">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Artist Bio */}
      <section className="mb-10 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-7 backdrop-blur-sm">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">Artist Bio</p>
        <p className="leading-relaxed text-sm text-[#9A6858]">— เพิ่ม Artist Bio ที่นี่ —</p>
      </section>

      {/* Songs */}
      <section className="mb-10">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">ผลงานเพลง</p>
        {songs.length === 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-4 backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C86858] to-[#6A3048]">
                  <span className="text-xl text-white">🎵</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#2A1010]">ชื่อเพลง {i}</p>
                  <p className="text-xs text-[#9A6858] mt-0.5">เพิ่มลิงก์ YouTube</p>
                </div>
                <span className="flex-shrink-0 rounded-full border border-[#C86858]/30 px-3 py-1 text-xs text-[#C86858]">
                  ▶ ฟัง
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {songs.map((s, i) => (
              <a
                key={i}
                href={s.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C86858] to-[#6A3048]">
                  <span className="text-xl text-white">🎵</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#2A1010] truncate">{s.title}</p>
                  <p className="text-xs text-[#9A6858] mt-0.5">YouTube</p>
                </div>
                <span className="flex-shrink-0 rounded-full bg-[#C86858] px-3 py-1 text-xs font-medium text-white">▶ ฟัง</span>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Collaborators */}
      <section>
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C86858]">พันธมิตร</p>
        {collaborators.length === 0 ? (
          <p className="text-sm text-[#9A6858]/60">— เพิ่มข้อมูลพันธมิตรที่นี่ —</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {collaborators.map((c, i) => (
              <div key={i} className="rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 px-4 py-3">
                <p className="font-semibold text-sm text-[#2A1010]">{c.name}</p>
                <p className="text-xs text-[#9A6858]">{c.role}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
