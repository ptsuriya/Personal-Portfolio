const services = [
  {
    icon: "✍️",
    title: "แต่งเพลง",
    desc: "แต่งเนื้อร้องและทำนองตามโจทย์",
    price: "เริ่มต้น ฿—",
  },
  {
    icon: "📝",
    title: "เขียนเนื้อเพลง",
    desc: "เขียน lyrics อย่างเดียว",
    price: "เริ่มต้น ฿—",
  },
];

export default function MusicPricingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Pricing</p>
        <h1 className="text-3xl font-bold text-[#2A1010]">ราคางานดนตรี</h1>
        <p className="mt-2 text-sm text-[#9A6858]">ราคาเริ่มต้น — ติดต่อมาเพื่อคุยรายละเอียด</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/60 p-6 backdrop-blur-sm"
          >
            <span className="text-3xl">{s.icon}</span>
            <div className="flex-1">
              <h2 className="font-bold text-[#2A1010]">{s.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-[#9A6858]">{s.desc}</p>
            </div>
            <p className="font-semibold text-[#C86858]">{s.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/60 p-6 text-center">
        <p className="mb-2 text-sm text-[#9A6858]">ทักมาคุยก่อนได้เลย</p>
        <a href="mailto:ptsuriyarangsri@gmail.com" className="font-medium text-[#C86858] hover:underline underline-offset-4 text-sm">
          ptsuriyarangsri@gmail.com →
        </a>
      </div>
    </main>
  );
}
