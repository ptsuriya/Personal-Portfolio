import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Code2, FileText, Layers3, Mail, MessageCircle, Phone, Send } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen/Loading";
import SplitText from "@/components/reactbits/SplitText";
import TextType from "@/components/reactbits/TextType";
import ShinyText from "@/components/reactbits/ShinyText";
import GlareCard from "@/components/reactbits/GlareCard";
import InfiniteMarquee from "@/components/reactbits/InfiniteMarquee";
import TestimonialMarquee from "@/components/testimonials/TestimonialMarquee";
import { services } from "@/data/services";
import { featuredCaseStudies } from "@/data/case-studies";
import { testimonials } from "@/data/testimonials";

const iconClassName = "h-[18px] w-[18px]";

const contactIcons = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.09-.73.09-.73 1.2.09 1.84 1.22 1.84 1.22 1.08 1.81 2.82 1.29 3.5.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.15 0 0 1-.31 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.63.24 2.85.12 3.15.76.83 1.22 1.89 1.22 3.19 0 4.56-2.81 5.55-5.49 5.85.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.5 4.79 5.75V21h-4v-5.72c0-1.36-.03-3.11-1.95-3.11-1.95 0-2.25 1.47-2.25 3V21h-4z" />
      </svg>
    ),
  },
  { label: "Email", href: "mailto:ptsuriyarangsri@gmail.com", icon: <Mail className={iconClassName} strokeWidth={2} aria-hidden="true" /> },
  { label: "LINE", href: "https://line.me/", icon: <MessageCircle className={iconClassName} strokeWidth={2} aria-hidden="true" /> },
  { label: "Phone", href: "mailto:ptsuriyarangsri@gmail.com", icon: <Phone className={iconClassName} strokeWidth={2} aria-hidden="true" /> },
];

export default function HubPage() {
  return (
    <>
      <LoadingScreen />

      <main className="relative flex min-h-screen flex-col">
        <section className="flex min-w-0 flex-1 items-center justify-center px-4 py-8 sm:px-6">
          <div className="grid min-w-0 w-full max-w-[860px] grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            <GlareCard className="rounded-3xl md:h-full">
              <div className="h-full min-w-0 overflow-hidden rounded-3xl border border-[#E7B2A4]/80 bg-[linear-gradient(180deg,rgba(255,246,242,0.94)_0%,rgba(251,229,221,0.88)_100%)] shadow-[0_24px_60px_rgba(184,108,86,0.12)] backdrop-blur-sm">
                <div className="relative h-[240px] overflow-hidden border-b border-[#E7B2A4]/70 sm:h-[280px]">
                  <Image
                    src="/image/Line/profile.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, 430px"
                    alt="KUMA — UI/UX & Frontend Freelance"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,13,13,0.02)_0%,rgba(37,13,13,0.35)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(252,237,231,0)_0%,rgba(252,237,231,0.82)_100%)]" />

                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#B8E8A0]/60 bg-[#1F2D1F]/85 px-3 py-1 text-[10px] font-semibold text-[#B8E8A0] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B8E8A0]" />
                    รับงานอยู่
                  </span>
                </div>

                <div className="flex min-w-0 flex-col gap-3 p-6 sm:p-7">
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
                        "Freelance UI/UX & Frontend",
                        "รับออกแบบ + พัฒนาเว็บ",
                        "Next.js / React / Tailwind",
                      ]}
                      speed={52}
                      pauseDuration={2200}
                    />
                  </div>

                  <ShinyText
                    text="รับออกแบบ UI/UX และพัฒนาเว็บ — สื่อสารง่าย ส่งงานตรงเวลา"
                    className="max-w-[30rem] text-[15px] leading-7 tracking-[0.005em] sm:text-base"
                    speed={3.5}
                    color="#915243"
                    shineColor="#C86858"
                  />

                  <div className="grid gap-2 pt-1 sm:grid-cols-2">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#2A1010] px-4 py-2 text-sm font-semibold text-[#FAD4C0] shadow-[0_10px_24px_rgba(42,16,16,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      ติดต่อ
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#E2B2A3]/80 bg-[#FFF4EE]/85 px-4 py-2 text-sm font-semibold text-[#8C4D40] shadow-[0_8px_20px_rgba(183,94,79,0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#F7DED5]"
                    >
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      ดูบริการ
                    </Link>
                  </div>

                  <div className="flex w-full max-w-full min-w-0 flex-wrap gap-2 pt-1 sm:flex-nowrap sm:overflow-x-auto sm:[-ms-overflow-style:none] sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
                    {contactIcons.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        title={item.label}
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2B2A3]/80 bg-[#FFF4EE]/85 text-[#8C4D40] shadow-[0_8px_20px_rgba(183,94,79,0.08)] transition-colors hover:bg-[#F7DED5] sm:h-10 sm:w-10"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GlareCard>

            <div className="grid gap-4 md:h-full md:grid-rows-[7fr_3fr]">
              <Link href="/work" className="group block h-full">
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
                        <p className="text-[10px] text-[#C89888]">Figma • Next.js • React • Tailwind • Laravel</p>
                      </div>
                    </div>
                    <div className="relative mx-5 mb-0 border-t border-[#C86858]/20" />
                    <div className="relative flex items-center gap-1.5 bg-[#3A1818]/60 px-4 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#E8A888]/50" />
                      <span className="h-2 w-2 rounded-full bg-[#E8C4A0]/50" />
                      <span className="h-2 w-2 rounded-full bg-[#B8E8A0]/50" />
                      <span className="ml-2 font-mono text-[9px] text-[#C86858]/50">kuma.freelance.ts</span>
                    </div>
                    <div className="relative px-5 py-3 font-mono text-[11px] leading-[1.8]">
                      <p>
                        <span className="text-[#E8A888]">const</span>{" "}
                        <span className="text-[#FAD4C0]">kuma</span>{" "}
                        <span className="text-[#C89888]">=</span> {"{"}
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">status</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#B8E8A0]">&quot;available_for_hire&quot;</span>
                        <span className="text-[#C89888]">,</span>
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">services</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#E8D4A0]">[&quot;UI/UX&quot;, &quot;Frontend&quot;, &quot;Full-Stack&quot;]</span>
                        <span className="text-[#C89888]">,</span>
                      </p>
                      <p className="pl-3">
                        <span className="text-[#F0B8A0]">based</span>
                        <span className="text-[#C89888]">:</span>{" "}
                        <span className="text-[#B8E8C8]">&quot;Bangkok, Thailand&quot;</span>
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

              <Link href="/services" className="group block h-full">
                <GlareCard className="h-full rounded-2xl">
                  <div className="relative flex h-full overflow-hidden rounded-2xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,rgba(255,240,204,0.92)_0%,rgba(250,228,220,0.88)_48%,rgba(253,246,236,0.95)_100%)] px-5 py-5 shadow-[0_18px_42px_rgba(184,108,86,0.12)]">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#C07B2A]/20" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,#C86858,transparent)] opacity-35" />

                    <div className="relative flex h-full w-full flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2A1010] text-[#FAD4C0]">
                              <Briefcase className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <h2 className="text-base font-bold text-[#2A1010]">บริการ & ราคา</h2>
                          </div>
                          <p className="text-xs leading-relaxed text-[#8B5E3C]">
                            UI/UX · Frontend · Full-Stack — เลือก package ได้
                          </p>
                        </div>
                        <span className="rounded-full border border-[#C86858]/20 bg-white/35 px-2.5 py-1 font-mono text-[9px] text-[#C86858]">
                          HIRE
                        </span>
                      </div>

                      <div className="grid gap-1.5">
                        {services.map((s) => (
                          <div
                            key={s.slug}
                            className="flex items-center justify-between rounded-xl border border-[#E8B8A8]/45 bg-white/30 px-3 py-2 text-xs text-[#6F4638]"
                          >
                            <span className="flex items-center gap-2">
                              <span>{s.icon}</span>
                              <span>{s.title}</span>
                            </span>
                            <Code2 className="h-3.5 w-3.5 text-[#C07B2A]" aria-hidden="true" />
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex justify-end pt-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#E8B8A8]/70 bg-[#2A1010] px-4 py-2 text-sm font-semibold text-[#FAD4C0] shadow-[0_10px_24px_rgba(42,16,16,0.16)] transition-all duration-300 group-hover:-translate-y-[1px] group-hover:bg-[#C86858] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(200,104,88,0.22)]">
                          <span>ดูแพ็คเกจ</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </GlareCard>
              </Link>
            </div>
          </div>
        </section>

        {/* Services preview section */}
        <section className="mx-auto w-full max-w-[1080px] px-6 py-16">
          <header className="mb-10 text-center">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Services</p>
            <h2 className="text-2xl font-bold text-[#2A1010] sm:text-3xl">3 บริการที่ KUMA รับ</h2>
            <p className="mt-2 text-sm text-[#7A4838]">เลือก package ที่ตรงกับโปรเจกต์ของคุณ</p>
          </header>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF6F0]/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D8987A] hover:shadow-[0_20px_50px_rgba(184,108,86,0.15)]"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-[#2A1010]">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#7A4838]">{s.tagline}</p>
                <p className="mt-4 text-xs text-[#9A6858]">⏱ {s.timeline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#C86858] transition-transform group-hover:translate-x-1">
                  ดูรายละเอียด <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured case studies (only if exists) */}
        {featuredCaseStudies.length > 0 && (
          <section className="mx-auto w-full max-w-[1080px] px-6 py-16">
            <header className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Selected Work</p>
                <h2 className="text-2xl font-bold text-[#2A1010] sm:text-3xl">ผลงานล่าสุด</h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#C86858] hover:underline underline-offset-4"
              >
                ดูทั้งหมด <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </header>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {featuredCaseStudies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[#E8B8A8]/60 bg-white/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D8987A]"
                >
                  <div
                    className="aspect-[16/10] bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.cover})` }}
                  />
                  <div className="p-5">
                    <span className="rounded-full border border-[#C86858]/20 bg-[#2A1010]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">
                      {c.type}
                    </span>
                    <h3 className="mt-2 font-semibold text-[#2A1010]">{c.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#9A6858]">{c.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials marquee */}
        {testimonials.length > 0 && (
          <section className="py-12">
            <header className="mx-auto mb-6 max-w-3xl px-6 text-center">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">
                Words from clients
              </p>
              <h2 className="text-2xl font-bold text-[#2A1010] sm:text-3xl">เสียงจากลูกค้า</h2>
            </header>
            <TestimonialMarquee testimonials={testimonials} />
          </section>
        )}

        {/* Final CTA */}
        <section className="mx-auto w-full max-w-[1080px] px-6 py-16">
          <div className="rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#2A1010_0%,#4A201B_100%)] p-10 text-center text-[#FAD4C0]">
            <p className="text-3xl">🚀</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">พร้อมเริ่มโปรเจกต์ของคุณ?</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#E8C4A0]">
              คุยฟรี 30 นาที ไม่มีค่าใช้จ่าย — บอกผมเลยว่าโปรเจกต์เป็นยังไง ผมตอบกลับใน 1-2 วัน
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C86858] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868] sm:w-auto"
              >
                <Send className="h-4 w-4" />
                ส่งข้อความ
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#FAD4C0]/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-[#FAD4C0] transition-all hover:bg-[#FAD4C0]/10 sm:w-auto"
              >
                จองเวลานัดคุย
              </Link>
            </div>
          </div>
        </section>

        <InfiniteMarquee
          text="UI/UX Design • Frontend Dev • Available for hire • รับงาน Freelance • Figma • Next.js • React • Tailwind CSS • Bangkok, Thailand"
          className="py-2"
          speed={28}
          color="#C86858"
        />

        <footer className="border-t border-[#E8A888]/30 px-6 py-8">
          <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#8C4D40]">
              <Link href="/work" className="hover:text-[#C86858]">ผลงาน</Link>
              <Link href="/services" className="hover:text-[#C86858]">บริการ</Link>
              <Link href="/process" className="hover:text-[#C86858]">ขั้นตอน</Link>
              <Link href="/about" className="hover:text-[#C86858]">เกี่ยวกับ</Link>
              <Link href="/contact" className="hover:text-[#C86858]">ติดต่อ</Link>
              <Link href="/blog" className="hover:text-[#C86858]">บทความ</Link>
            </div>
            <p className="text-[10px] text-[#A07868]/80">
              © {new Date().getFullYear()} KUMA Freelance · ptsuriyarangsri@gmail.com
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
