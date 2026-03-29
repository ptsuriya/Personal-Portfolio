export default function DesignPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#C07B2A] text-sm font-medium tracking-widest uppercase mb-2">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-[#3D1F00]">งานของฉัน</h1>
        <p className="text-[#8B5E3C] mt-3 max-w-xl">
          ผลงาน UI/UX Design และ Frontend Development
        </p>
      </div>

      {/* Placeholder grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-[#FFF0CC] border border-[#E8C99A] rounded-2xl aspect-video flex items-center justify-center"
          >
            <p className="text-[#8B5E3C] text-sm">ผลงาน {i} — เร็วๆ นี้</p>
          </div>
        ))}
      </div>
    </main>
  );
}
