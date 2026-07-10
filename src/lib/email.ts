import { Resend } from 'resend';

let cached: Resend | null = null;

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cached) cached = new Resend(key);
  return cached;
}

export const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'ptsuriyarangsri@gmail.com';
export const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';
