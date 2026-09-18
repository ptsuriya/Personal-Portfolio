import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ขอใบเสนอราคาทำเว็บไซต์',
  description: 'ส่งรายละเอียดเว็บไซต์ที่อยากทำให้ KUMA ประเมินราคาฟรี ตอบกลับภายใน 1-2 วันทำการ งานเริ่มต้น 2,500 บาท หรืออีเมลคุยงานได้โดยตรง',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
