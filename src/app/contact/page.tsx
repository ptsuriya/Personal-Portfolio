'use client';
import { useActionState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Send, Calendar, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { submitContact, type ContactFormState } from './actions';

const initialState: ContactFormState = { ok: false };

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialState,
  );

  const fieldErrors = state.fieldErrors ?? {};
  const submitted = state.ok && !isPending;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86858]">Contact</p>
        <h1 className="text-3xl font-bold text-[#2A1010] sm:text-4xl">เริ่มโปรเจกต์กับ KUMA</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7A4838] sm:text-base">
          กรอกฟอร์มสั้นๆ บอกเล่าโปรเจกต์ของคุณ ผมจะตอบกลับภายใน 1-2 วันทำการพร้อมข้อเสนอเบื้องต้น
          ไม่มีค่าใช้จ่ายในการให้คำปรึกษาเบื้องต้น
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <section className="rounded-3xl border border-[#E8B8A8]/60 bg-[#FFF6F0]/70 p-6 backdrop-blur-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2A1010] text-[#FAD4C0]">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h2 className="text-2xl font-bold text-[#2A1010]">ขอบคุณครับ!</h2>
              <p className="max-w-md text-sm leading-relaxed text-[#7A4838]">
                ได้รับข้อความแล้ว — ผมจะตอบกลับภายใน 1-2 วันทำการ
                ในระหว่างนี้คุณสามารถดู{' '}
                <Link href="/work" className="font-semibold text-[#C86858] underline-offset-4 hover:underline">
                  ผลงานที่ผ่านมา
                </Link>{' '}
                หรือ{' '}
                <Link href="/process" className="font-semibold text-[#C86858] underline-offset-4 hover:underline">
                  ขั้นตอนการทำงาน
                </Link>{' '}
                ได้
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5" noValidate>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="ชื่อ"
                  name="name"
                  type="text"
                  required
                  placeholder="ชื่อ-นามสกุล"
                  error={fieldErrors.name}
                />
                <Field
                  label="อีเมล"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  error={fieldErrors.email}
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider text-[#C86858]">
                  ประเภทงาน <span className="text-[#C86858]">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="rounded-xl border border-[#E8B8A8] bg-white/80 px-4 py-3 text-sm text-[#2A1010] outline-none transition-colors focus:border-[#C86858] focus:bg-white"
                >
                  <option value="" disabled>
                    เลือกประเภทงาน
                  </option>
                  <option value="ui-ux">🎨 UI/UX Design</option>
                  <option value="frontend">⚡ Frontend Development</option>
                  <option value="fullstack">🚀 Full-Stack Package</option>
                  <option value="consult">💬 Consulting / ปรึกษา</option>
                  <option value="other">อื่นๆ</option>
                </select>
                {fieldErrors.projectType && (
                  <p className="text-xs text-[#C86858]">{fieldErrors.projectType}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="งบประมาณ (ถ้ามี)"
                  name="budget"
                  type="text"
                  placeholder="เช่น 50,000 - 100,000"
                  error={fieldErrors.budget}
                />
                <Field
                  label="ช่วงเวลาที่ต้องการ"
                  name="timeline"
                  type="text"
                  placeholder="เช่น เริ่มเดือนหน้า, ASAP"
                  error={fieldErrors.timeline}
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#C86858]">
                  เล่ารายละเอียดโปรเจกต์ <span className="text-[#C86858]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="เป้าหมายโปรเจกต์, กลุ่มเป้าหมาย, อ้างอิงเว็บที่ชอบ..."
                  className="resize-none rounded-xl border border-[#E8B8A8] bg-white/80 px-4 py-3 text-sm text-[#2A1010] outline-none transition-colors focus:border-[#C86858] focus:bg-white"
                />
                {fieldErrors.message && (
                  <p className="text-xs text-[#C86858]">{fieldErrors.message}</p>
                )}
              </div>

              {state.error && !state.fieldErrors && (
                <p className="rounded-xl bg-[#C86858]/10 px-4 py-3 text-sm text-[#8B3024]">{state.error}</p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2A1010] px-6 py-3.5 text-sm font-semibold text-[#FAD4C0] transition-all hover:-translate-y-0.5 hover:bg-[#C86858] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isPending ? 'กำลังส่ง...' : 'ส่งข้อความ'}
              </button>

              <p className="text-xs text-[#9A6858]">
                ข้อมูลของคุณจะถูกส่งโดยตรงไปที่ ptsuriyarangsri@gmail.com — จะไม่เก็บไว้บนเซิร์ฟเวอร์
              </p>
            </form>
          )}
        </section>

        <aside className="space-y-4">
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="อีเมล"
            value="ptsuriyarangsri@gmail.com"
            href="mailto:ptsuriyarangsri@gmail.com"
          />
          <ContactCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="LINE"
            value="@kuma.design"
            href="https://line.me/ti/p/~kuma.design"
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="โทรศัพท์"
            value="ขอเบอร์ผ่าน LINE/Email"
            href="mailto:ptsuriyarangsri@gmail.com"
          />

          <div
            id="booking"
            className="rounded-2xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#2A1010_0%,#4A201B_100%)] p-6 text-[#FAD4C0]"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C86858] text-white">
              <Calendar className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-lg font-bold">นัดคุย 30 นาที (ฟรี)</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#E8C4A0]">
              ถ้าอยากคุยก่อนตัดสินใจ จองเวลานัดวิดีโอคอลได้ฟรี ไม่มีค่าใช้จ่าย ไม่กดดัน
            </p>
            <a
              href="mailto:ptsuriyarangsri@gmail.com?subject=ขอนัดคุย%2030%20นาที"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C86858] bg-[#C86858]/20 px-4 py-2.5 text-sm font-semibold transition-all hover:bg-[#C86858] hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              จองเวลา
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

function Field({ label, name, type, required, placeholder, error }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-[#C86858]">
        {label} {required && <span>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-[#E8B8A8] bg-white/80 px-4 py-3 text-sm text-[#2A1010] outline-none transition-colors focus:border-[#C86858] focus:bg-white"
      />
      {error && <p className="text-xs text-[#C86858]">{error}</p>}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/50 p-4 transition-all hover:-translate-y-0.5 hover:border-[#D8987A] hover:bg-[#FAE4DC]/80"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2A1010] text-[#FAD4C0]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">{label}</p>
        <p className="truncate text-sm font-medium text-[#2A1010]">{value}</p>
      </div>
    </a>
  );
}
