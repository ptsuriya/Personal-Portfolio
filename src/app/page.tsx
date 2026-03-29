import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen/Loading";
import PillNav from "@/components/reactbits/PillNav";
import SplitText from "@/components/reactbits/SplitText";
import TextType from "@/components/reactbits/TextType";
import ShinyText from "@/components/reactbits/ShinyText";
import GlareCard from "@/components/reactbits/GlareCard";
import InfiniteMarquee from "@/components/reactbits/InfiniteMarquee";
import GrainyGradient from "@/components/reactbits/GrainyGradient";

const iconClassName = "h-[18px] w-[18px]";

const contactIcons = [
  {
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.09-.73.09-.73 1.2.09 1.84 1.22 1.84 1.22 1.08 1.81 2.82 1.29 3.5.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.15 0 0 1-.31 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.63.24 2.85.12 3.15.76.83 1.22 1.89 1.22 3.19 0 4.56-2.81 5.55-5.49 5.85.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.5 4.79 5.75V21h-4v-5.72c0-1.36-.03-3.11-1.95-3.11-1.95 0-2.25 1.47-2.25 3V21h-4z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.86L6.08 22H3l7.24-8.28L.8 2h6.4l4.42 6.2L18.9 2Zm-1.09 18h1.72L6.26 3.9H4.41Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.53-1.46H16.7V5a20 20 0 0 0-2.48-.13c-2.45 0-4.12 1.45-4.12 4.14V11H7.3v3h2.8v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: "LINE",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M20.7 10.7c0-4.3-4.3-7.8-9.7-7.8S1.3 6.4 1.3 10.7c0 3.8 3.4 7 8 7.6.3.1.7.4.8.7l.1 1.7c0 .2.1.9.8.4l1.9-1.2c.2-.1.6-.2.9-.1 4.1-.6 7.1-3.6 7.1-7.1Zm-13-1.5c0 .2-.2.4-.4.4H5.7v1h1.6c.2 0 .4.2.4.4s-.2.4-.4.4H5.7v1h1.6c.2 0 .4.2.4.4s-.2.4-.4.4H5.2c-.2 0-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4h2.1c.2 0 .4.2.4.4Zm2.4 3.5c0 .2-.2.4-.4.4s-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4s.4.2.4.4Zm3.7 0c0 .2-.2.4-.4.4h-.1l-1.8-2.4v2c0 .2-.2.4-.4.4s-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4h.1l1.8 2.4v-2c0-.2.2-.4.4-.4s.4.2.4.4Zm3.2 0c0 .2-.2.4-.4.4h-2c-.2 0-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4s.4.2.4.4v3h1.6c.2 0 .4.2.4.4Z" />
      </svg>
    ),
  },
  { label: "Email", icon: <Mail className={iconClassName} strokeWidth={2} aria-hidden="true" /> },
  { label: "Phone", icon: <Phone className={iconClassName} strokeWidth={2} aria-hidden="true" /> },
];

export default function HubPage() {
  return (
    <>
      <LoadingScreen />

      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <GrainyGradient />
        <PillNav />

        <section className="flex flex-1 items-center justify-center px-6 py-8">
          <div className="grid w-full max-w-[860px] grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            <GlareCard className="rounded-3xl md:h-full">
              <div className="h-full overflow-hidden rounded-3xl border border-[#E7B2A4]/80 bg-[linear-gradient(180deg,rgba(255,246,242,0.94)_0%,rgba(251,229,221,0.88)_100%)] shadow-[0_24px_60px_rgba(184,108,86,0.12)] backdrop-blur-sm">
                <div className="relative h-[240px] overflow-hidden border-b border-[#E7B2A4]/70 sm:h-[280px]">
                  <Image
                    src="/image/Line/profile.jpg"
                    fill
                    alt="Kuma"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,13,13,0.02)_0%,rgba(37,13,13,0.35)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(252,237,231,0)_0%,rgba(252,237,231,0.82)_100%)]" />
                </div>

                <div className="flex flex-col gap-3 p-6 sm:p-7">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#B75E4F] sm:text-[13px]">
                    สวัสดี ฉันชื่อ
                  </p>

                  <div className="relative w-fit pr-10 sm:pr-14">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 -right-1 -translate-y-1/2 text-[44px] opacity-75 drop-shadow-[0_6px_18px_rgba(183,94,79,0.15)] sm:-right-3 sm:text-[58px]"
                    >
                      🐻
                    </span>
                    <h1 className="relative text-[52px] font-bold leading-[0.9] tracking-[-0.045em] text-[#2A1010] sm:text-[68px]">
                      <SplitText text="KUMA" delay={60} duration={700} startDelay={200} />
                    </h1>
                  </div>

                  <div className="min-h-[1.9rem] text-[17px] font-medium leading-relaxed text-[#8D4D40] sm:text-[18px]">
                    <TextType
                      texts={[
                        "หมีนักออกแบบ ที่แต่งเพลงเป็น(นิดหน่อย)",
                        "UI Designer & Frontend Developer",
                        "Pop R&B Songwriter",
                      ]}
                      speed={52}
                      pauseDuration={2200}
                    />
                  </div>

                  <ShinyText
                    text="สร้างประสบการณ์ดิจิทัล และเนื้อเพลงที่รู้สึก"
                    className="max-w-[30rem] text-[15px] leading-7 tracking-[0.005em] sm:text-base"
                    speed={3.5}
                    color="#915243"
                    shineColor="#C86858"
                  />

                  <div className="flex flex-nowrap gap-2 overflow-x-auto pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {contactIcons.map((item) => (
                      <span
                        key={item.label}
                        title={item.label}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2B2A3]/80 bg-[#FFF4EE]/85 text-[#8C4D40] shadow-[0_8px_20px_rgba(183,94,79,0.08)] transition-colors hover:bg-[#F7DED5]"
                      >
                        {item.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlareCard>

            <div className="grid gap-4 md:h-full md:grid-rows-[7fr_3fr]">
              <Link href="/codework" className="group block h-full">
                <GlareCard className="h-full rounded-2xl">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#C86858]/30 bg-[#2A1010]/90">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        background:
                          "repeating-linear-gradient(180deg, transparent 0px, transparent 26px, rgba(232,168,136,0.08) 27px, transparent 28px)",
                      }}
                    />
                    <div
                      className="pointer-events-none absolute right-0 bottom-0 h-40 w-40 opacity-20"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(232,168,136,0.2) 0%, rgba(232,168,136,0) 68%)",
                      }}
                    />

                    <div className="relative flex items-center gap-2.5 px-5 pt-4 pb-2">
                      <span className="text-xl">💻</span>
                      <div>
                        <p className="text-sm font-bold text-[#FAD4C0]">Full-Stack Designer & Developer</p>
                        <p className="text-[10px] text-[#C89888]">Canva • Figma • Penpot • React • Next.js • Laravel</p>
                      </div>
                    </div>
                    <div className="relative mx-5 mb-0 border-t border-[#C86858]/20" />
                    <div className="relative flex items-center gap-1.5 bg-[#3A1818]/60 px-4 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#E8A888]/50" />
                      <span className="h-2 w-2 rounded-full bg-[#E8C4A0]/50" />
                      <span className="h-2 w-2 rounded-full bg-[#B8E8A0]/50" />
                      <span className="ml-2 font-mono text-[9px] text-[#C86858]/50">kuma.design.ts</span>
                    </div>
                    <div className="relative px-5 py-3 font-mono text-[11px] leading-[1.8]">
                      <p>
                        <span className="text-[#E8A888]">const</span>{" "}
                        <span className="text-[#FAD4C0]">kuma</span>{" "}
                        <span className="text-[#C89888]">=</span> {"{"}
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">role</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#B8E8C8]">&quot;Full-Stack Designer &amp; Developer&quot;</span>
                        <span className="text-[#C89888]">,</span>
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">design</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#E8D4A0]">[&quot;Canva&quot;, &quot;Figma&quot;, &quot;Penpot&quot;]</span>
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">code</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#E8D4A0]">
                          [&quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind CSS&quot;, &quot;Bootstrap&quot;,
                          &quot;PHP&quot;, &quot;Laravel&quot;]
                        </span>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div className="relative mt-auto flex justify-end px-5 pb-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A888]/45 bg-[#4A201B] px-4 py-2 text-sm font-semibold text-[#FCE4D6] shadow-[0_10px_24px_rgba(10,6,6,0.22)] transition-all duration-300 group-hover:-translate-y-[1px] group-hover:border-[#F6B48C] group-hover:bg-[#C86858] group-hover:text-[#FFF7F1] group-hover:shadow-[0_12px_28px_rgba(200,104,88,0.28)]">
                        <ShinyText
                          text="ดูผลงาน"
                          className="font-inherit"
                          speed={2.5}
                          color="#FCE4D6"
                          shineColor="#FFF7F1"
                        />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </GlareCard>
              </Link>

              <Link href="/musicwork" className="group block h-full">
                <GlareCard className="h-full rounded-2xl">
                  <div
                    className="relative flex h-full overflow-hidden rounded-2xl px-5 py-5"
                    style={{
                      background: "linear-gradient(135deg, #C86858 0%, #9A4858 50%, #6A3048 100%)",
                    }}
                  >
                    <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full border-[14px] border-white/10" />
                    <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full border-[8px] border-white/10" />
                    <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white/10" />

                    <div className="relative flex h-full w-full flex-col">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xl">🎵</span>
                          <h2 className="text-base font-bold text-white">Songwriting</h2>
                        </div>
                        <p className="text-xs text-white/70">Pop R&B • เพลงของฉัน • เบื้องหลัง</p>
                        <div className="mt-2.5 flex gap-1.5">
                          {["Pop", "R&B", "Thai"].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex justify-end pt-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(60,22,44,0.22)] transition-all duration-300 group-hover:-translate-y-[1px] group-hover:bg-[#FFE4D6] group-hover:text-[#7A3048] group-hover:shadow-[0_12px_28px_rgba(255,228,214,0.26)]">
                          <span>ฟัง</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </GlareCard>
              </Link>
            </div>
          </div>
        </section>

        <InfiniteMarquee
          text="UI Designer • Songwriter • Frontend Dev • Kuma • Figma • Next.js • Pop R&B"
          className="py-2"
          speed={28}
          color="#C86858"
        />

        <footer className="border-t border-[#E8A888]/30 py-4 text-center text-[10px] text-[#A07868]/70">
          © {new Date().getFullYear()} Kuma • ptsuriyarangsri@gmail.com
        </footer>
      </main>
    </>
  );
}
