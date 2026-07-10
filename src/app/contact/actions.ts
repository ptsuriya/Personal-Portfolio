'use server';
import { z } from 'zod';
import { getResend, CONTACT_TO, CONTACT_FROM } from '@/lib/email';

const ContactSchema = z.object({
  name: z.string().trim().min(2, 'กรุณากรอกชื่อ').max(100),
  email: z.string().trim().email('อีเมลไม่ถูกต้อง'),
  projectType: z.enum(['ui-ux', 'frontend', 'fullstack', 'consult', 'other']),
  budget: z.string().trim().max(50).optional(),
  timeline: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, 'กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร').max(4000),
  _gotcha: z.string().max(0).optional(),
});

export type ContactFormState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

const recentSubmissions = new Map<string, number>();

function rateLimit(key: string, windowMs = 60_000, max = 3): boolean {
  const now = Date.now();
  for (const [k, t] of recentSubmissions) {
    if (now - t > windowMs) recentSubmissions.delete(k);
  }
  const last = recentSubmissions.get(key) ?? 0;
  if (now - last < windowMs / max) return false;
  recentSubmissions.set(key, now);
  return true;
}

const PROJECT_LABELS: Record<string, string> = {
  'ui-ux': 'UI/UX Design',
  frontend: 'Frontend Development',
  fullstack: 'Full-Stack Package',
  consult: 'Consulting / ปรึกษา',
  other: 'อื่นๆ',
};

export async function submitContact(
  _prev: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    projectType: formData.get('projectType'),
    budget: formData.get('budget') ?? undefined,
    timeline: formData.get('timeline') ?? undefined,
    message: formData.get('message'),
    _gotcha: formData.get('_gotcha') ?? undefined,
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path.join('.');
      if (path) fieldErrors[path] = issue.message;
    }
    return { ok: false, error: 'กรอกข้อมูลไม่ถูกต้อง', fieldErrors };
  }

  if (parsed.data._gotcha) {
    return { ok: true };
  }

  if (!rateLimit(parsed.data.email)) {
    return { ok: false, error: 'คุณส่งบ่อยเกินไป กรุณารอสักครู่แล้วลองใหม่' };
  }

  const resend = getResend();

  const subject = `[KUMA Freelance] ${PROJECT_LABELS[parsed.data.projectType]} — ${parsed.data.name}`;
  const text = [
    `New inquiry from KUMA Freelance website`,
    ``,
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Project type: ${PROJECT_LABELS[parsed.data.projectType]}`,
    parsed.data.budget ? `Budget: ${parsed.data.budget}` : null,
    parsed.data.timeline ? `Timeline: ${parsed.data.timeline}` : null,
    ``,
    `Message:`,
    parsed.data.message,
  ]
    .filter(Boolean)
    .join('\n');

  if (!resend) {
    console.warn('[contact] RESEND_API_KEY not set — logging submission instead.');
    console.log('---NEW CONTACT SUBMISSION---');
    console.log(text);
    console.log('---END---');
    return { ok: true };
  }

  try {
    await resend.emails.send({
      from: `KUMA Freelance <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: parsed.data.email,
      subject,
      text,
    });
    return { ok: true };
  } catch (e) {
    console.error('[contact] Resend send failed:', e);
    return { ok: false, error: 'ส่งไม่สำเร็จ ลองอีกครั้งหรือส่งอีเมลตรงไปที่ ptsuriyarangsri@gmail.com' };
  }
}
