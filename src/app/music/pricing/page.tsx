export default function MusicPricingPage() {
  const services = [
    {
      title: "แต่งเพลง",
      description: "แต่งเนื้อร้องและทำนอง",
      startingPrice: "เริ่มต้น ฿—",
    },
    {
      title: "เขียนเนื้อเพลง",
      description: "เขียน lyrics ตามโจทย์",
      startingPrice: "เริ่มต้น ฿—",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#C07B2A] text-sm font-medium tracking-widest uppercase mb-2">
          Pricing
        </p>
        <h1 className="text-4xl font-bold text-[#3D1F00]">ราคางานดนตรี</h1>
        <p className="text-[#8B5E3C] mt-3 max-w-xl">
          ราคาเริ่มต้น — สนใจทักมาคุยได้เลย
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-[#FFF0CC] border border-[#E8C99A] rounded-2xl p-6 flex flex-col gap-3"
          >
            <h2 className="text-lg font-bold text-[#3D1F00]">{s.title}</h2>
            <p className="text-[#8B5E3C] text-sm leading-relaxed flex-1">
              {s.description}
            </p>
            <p className="text-[#C07B2A] font-semibold">{s.startingPrice}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
