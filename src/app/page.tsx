import Image from "next/image";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen/Loading";
import PillNav from "@/components/reactbits/PillNav";
import SplitText from "@/components/reactbits/SplitText";
import TextType from "@/components/reactbits/TextType";
import ShinyText from "@/components/reactbits/ShinyText";
import GlareCard from "@/components/reactbits/GlareCard";
import InfiniteMarquee from "@/components/reactbits/InfiniteMarquee";
import GrainyGradient from "@/components/reactbits/GrainyGradient";

export default function HubPage() {
  return (
    <>
      <LoadingScreen />

      <main className="relative min-h-screen flex flex-col overflow-hidden">
        <GrainyGradient />

        {/* Pill Nav */}
        <PillNav />

        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-7 pt-6 pb-4">

          {/* Profile + badge */}
          <div className="relative">
            <Image
              src="/image/Line/profile.jpg"
              width={120}
              height={120}
              alt="Kuma"
              className="rounded-full object-cover w-[120px] h-[120px] shadow-xl ring-[3px] ring-[#E8B870]/60"
              priority
            />
            <span className="absolute -bottom-2 -right-2 bg-[#F9EDD4] rounded-full text-xl shadow px-1">🐻</span>
          </div>

          {/* Text block */}
          <div className="flex flex-col items-center gap-2 -mt-1">
            <p className="text-[#C07B2A] text-[10px] font-semibold tracking-[0.3em] uppercase">
              สวัสดี ฉันชื่อ
            </p>

            {/* Big name */}
            <h1 className="text-[72px] md:text-[88px] font-bold leading-none tracking-tight text-[#2C1506]">
              <SplitText text="Kuma" delay={60} duration={700} startDelay={200} />
            </h1>

            {/* Tagline typewriter */}
            <div className="text-base md:text-lg text-[#9B6030] font-medium min-h-[1.6rem]">
              <TextType
                texts={[
                  "หมีนักออกแบบ ที่แต่งเพลงเป็น(นิดหน่อย)",
                  "UI Designer & Frontend Developer",
                  "Pop R&B Songwriter 🎵",
                ]}
                speed={52}
                pauseDuration={2200}
              />
            </div>

            {/* Shiny bio */}
            <ShinyText
              text="สร้างประสบการณ์ดิจิทัล และเนื้อเพลงที่รู้สึก"
              className="text-sm tracking-wide"
              speed={3.5}
              color="#A07848"
              shineColor="#D4952A"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full max-w-[380px]">
            <div className="flex-1 h-px bg-[#D4A868]/40" />
            <span className="text-[#D4A868] text-xs tracking-widest">มาทางไหนดี</span>
            <div className="flex-1 h-px bg-[#D4A868]/40" />
          </div>

          {/* Path Cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[420px]">
            <Link href="/design" className="block">
              <GlareCard className="rounded-2xl h-full">
                <div className="bg-[#FFFAF2]/75 border border-[#DDB96A]/50 rounded-2xl p-5 flex flex-col gap-3 text-left h-full backdrop-blur-sm">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h2 className="text-base font-bold text-[#2C1506]">Design & Dev</h2>
                    <p className="text-xs text-[#8B6040] mt-1 leading-relaxed">
                      UI/UX · Frontend · ราคา · ประวัติ
                    </p>
                  </div>
                  <ShinyText
                    text="ดูผลงาน →"
                    className="text-xs font-bold mt-auto"
                    speed={2.5}
                    color="#C07B2A"
                    shineColor="#FFD080"
                  />
                </div>
              </GlareCard>
            </Link>

            <Link href="/music" className="block">
              <GlareCard className="rounded-2xl h-full">
                <div className="bg-[#FFFAF2]/75 border border-[#DDB96A]/50 rounded-2xl p-5 flex flex-col gap-3 text-left h-full backdrop-blur-sm">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <h2 className="text-base font-bold text-[#2C1506]">Songwriting</h2>
                    <p className="text-xs text-[#8B6040] mt-1 leading-relaxed">
                      Pop R&B · เพลง · เบื้องหลัง
                    </p>
                  </div>
                  <ShinyText
                    text="ฟังเลย →"
                    className="text-xs font-bold mt-auto"
                    speed={2.5}
                    color="#C07B2A"
                    shineColor="#FFD080"
                  />
                </div>
              </GlareCard>
            </Link>
          </div>
        </section>

        {/* Marquee bottom */}
        <InfiniteMarquee
          text="UI Designer · Songwriter · Frontend Dev · Kuma · Figma · Next.js · Pop R&B"
          className="py-2"
          speed={28}
          color="#B07830"
        />

        {/* Footer */}
        <footer className="text-center py-4 text-[10px] text-[#A07848]/70 border-t border-[#D4A868]/30">
          © {new Date().getFullYear()} Kuma · ptsuriyarangsri@gmail.com
        </footer>
      </main>
    </>
  );
}
