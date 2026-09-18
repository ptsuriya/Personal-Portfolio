'use client';
import { useActionState, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Send, Calendar, Loader2, CheckCircle2 } from 'lucide-react';
import { submitContact, type ContactFormState } from './actions';
import { contact } from '@/data/site';
import { buttonClass, container } from '@/components/site/styles';
import { cn } from '@/lib/utils';

const initialState: ContactFormState = { ok: false };

const inputClass =
  'w-full rounded-xl border-2 border-kuma-line bg-kuma-cream/40 px-4 py-3 text-base text-kuma-bark outline-none transition-colors placeholder:text-kuma-clay/60 focus:border-kuma-amber-deep aria-[invalid=true]:border-kuma-terra';

export default function ContactPage() {
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialState,
  );

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type');
    if (type) setSelectedProjectType(type);
  }, []);

  const fieldErrors = state.fieldErrors ?? {};
  const submitted = state.ok && !isPending;

  return (
    <main className={cn(container, 'grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16')}>
      <div className="lg:col-span-5">
        <Image src="/image/illustrations/page-contact.webp" alt="" width={762} height={900} priority aria-hidden="true" className="-ml-2 mb-4 h-auto w-32 sm:w-40" />
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-[-0.025em] text-kuma-bark sm:text-5xl">ขอประเมินราคาเว็บไซต์</h1>
        <p className="mt-6 text-lg leading-8 text-kuma-clay">
          กรอกฟอร์มสั้นๆ บอกโจทย์ของเว็บไซต์ KUMA จะตอบกลับภายใน 1-2 วันทำการพร้อมแนวทางและข้อเสนอเบื้องต้น
          ไม่มีค่าใช้จ่ายในการให้คำปรึกษาเบื้องต้น
        </p>

        <ul className="mt-10 border-t border-kuma-line">
          <ContactRow icon={<Mail className="h-5 w-5" />} label="อีเมล" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactRow icon={<Phone className="h-5 w-5" />} label="โทรศัพท์" value="นัดหมายผ่านอีเมล" href={`mailto:${contact.email}`} />
        </ul>

        <div id="booking" className="mt-10 rounded-3xl border-2 border-kuma-bark bg-kuma-bark p-6 text-kuma-cream shadow-[6px_6px_0_0_#C07B2A] sm:p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <Calendar className="h-5 w-5 text-kuma-honey" aria-hidden="true" />
            คุย brief 30 นาที (ฟรี)
          </h2>
          <p className="mt-3 leading-7 text-[#E8C4A0]">
            ถ้าอยากคุยก่อนตัดสินใจ จองเวลานัดวิดีโอคอลได้ฟรี ไม่มีค่าใช้จ่าย ไม่กดดัน
          </p>
          <a href={contact.bookingMailto} className={buttonClass('honey', 'mt-6')}>
            จองเวลา
          </a>
        </div>
      </div>

      <section aria-label="ฟอร์มขอประเมินราคา" className="h-fit rounded-3xl border-2 border-kuma-bark bg-white p-6 shadow-[8px_8px_0_0_#2A1010] sm:p-10 lg:col-span-7">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center" role="status">
            <CheckCircle2 className="h-12 w-12 text-[#7AA36F]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold text-kuma-bark">ได้รับข้อความแล้ว</h2>
            <p className="max-w-md leading-8 text-kuma-clay">
              KUMA จะตอบกลับภายใน 1-2 วันทำการ ในระหว่างนี้คุณสามารถดู{' '}
              <Link href="/work" className="font-semibold text-kuma-amber-deep underline-offset-4 hover:underline">
                ผลงานที่ผ่านมา
              </Link>{' '}
              หรือ{' '}
              <Link href="/process" className="font-semibold text-kuma-amber-deep underline-offset-4 hover:underline">
                ขั้นตอนการทำงาน
              </Link>{' '}
              ได้
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-6" noValidate>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="ชื่อ" name="name" type="text" autoComplete="name" required placeholder="ชื่อ-นามสกุล" error={fieldErrors.name} />
              <Field label="อีเมล" name="email" type="email" autoComplete="email" required placeholder="you@example.com" error={fieldErrors.email} />
            </div>

            <div className="grid gap-2">
              <label htmlFor="projectType" className="font-medium text-kuma-bark">
                ประเภทงาน <span className="text-kuma-terra">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={selectedProjectType}
                onChange={(event) => setSelectedProjectType(event.target.value)}
                aria-invalid={fieldErrors.projectType ? true : undefined}
                aria-describedby={fieldErrors.projectType ? 'projectType-error' : undefined}
                className={inputClass}
              >
                <option value="" disabled>
                  เลือกประเภทเว็บไซต์ที่ต้องการ
                </option>
                <option value="frontend">เว็บไซต์บริษัท / Landing Page</option>
                <option value="fullstack">Web App / ระบบหลังบ้าน</option>
                <option value="ui-ux">วางโครงสร้างและออกแบบ UI/UX</option>
                <option value="consult">ปรึกษาแนวทางเว็บไซต์</option>
                <option value="other">อื่นๆ</option>
              </select>
              {fieldErrors.projectType && (
                <p id="projectType-error" className="text-sm text-[#9A3B2E]">{fieldErrors.projectType}</p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="งบประมาณ (ถ้ามี)" name="budget" type="text" placeholder="เช่น 5,000 - 20,000" error={fieldErrors.budget} />
              <Field label="ช่วงเวลาที่ต้องการ" name="timeline" type="text" placeholder="เช่น เริ่มเดือนหน้า, ASAP" error={fieldErrors.timeline} />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="font-medium text-kuma-bark">
                เล่ารายละเอียดโปรเจกต์ <span className="text-kuma-terra">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="ธุรกิจของคุณคืออะไร, ต้องการให้เว็บช่วยเรื่องไหน, มีเว็บอ้างอิงหรือไม่..."
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                className={cn(inputClass, 'resize-y')}
              />
              {fieldErrors.message && (
                <p id="message-error" className="text-sm text-[#9A3B2E]">{fieldErrors.message}</p>
              )}
            </div>

            {state.error && !state.fieldErrors && (
              <p role="alert" className="rounded-xl bg-kuma-sand px-4 py-3 text-[#8B3024]">{state.error}</p>
            )}

            <div className="flex flex-col gap-4 border-t border-kuma-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-kuma-clay">ข้อมูลจะถูกส่งตรงถึง KUMA เพื่อใช้ประเมินงานเท่านั้น</p>
              <button type="submit" disabled={isPending} className={buttonClass('primary', 'shrink-0 disabled:cursor-not-allowed disabled:opacity-60')}>
                {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                {isPending ? 'กำลังส่ง...' : 'ขอประเมินราคา'}
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}

function Field({ label, name, type, required, placeholder, autoComplete, error }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="font-medium text-kuma-bark">
        {label} {required && <span className="text-kuma-terra">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
      />
      {error && <p id={`${name}-error`} className="text-sm text-[#9A3B2E]">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li className="border-b border-kuma-line">
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex min-h-16 items-center gap-4 py-3 transition-colors hover:text-kuma-amber-deep"
      >
        <span className="text-kuma-amber-deep" aria-hidden="true">{icon}</span>
        <span className="min-w-0">
          <span className="block text-sm text-kuma-clay">{label}</span>
          <span className="block break-all font-medium text-kuma-bark">{value}</span>
        </span>
      </a>
    </li>
  );
}
