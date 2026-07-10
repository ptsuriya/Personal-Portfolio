export interface Service {
  slug: 'ui-ux' | 'frontend' | 'fullstack';
  icon: string;
  title: string;
  tagline: string;
  startingPrice: number | null;
  priceNote?: string;
  timeline: string;
  deliverables: string[];
  bestFor: string[];
  tags: string[];
}

export const services: Service[] = [
  {
    slug: 'ui-ux',
    icon: '🎨',
    title: 'UI/UX Design',
    tagline: 'ออกแบบหน้าตาเว็บ/แอปให้ใช้งานง่าย สวยและเข้ากับแบรนด์',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '2–3 สัปดาห์',
    deliverables: [
      'Wireframe (low-fi) สำหรับทุกหน้า',
      'High-fidelity UI design ใน Figma',
      'Design system + component library',
      'Prototype คลิกได้',
      'Design handoff สำหรับ developer',
    ],
    bestFor: [
      'Startup ที่ต้องการ MVP',
      'รีดีไซน์เว็บเดิมให้ดูทันสมัย',
      'ทำ design system สำหรับทีม',
    ],
    tags: ['Figma', 'Penpot', 'Design System', 'Prototype'],
  },
  {
    slug: 'frontend',
    icon: '⚡',
    title: 'Frontend Development',
    tagline: 'พัฒนาเว็บที่เร็ว ตอบสนองดี และดูแลง่ายในระยะยาว',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '3–5 สัปดาห์',
    deliverables: [
      'เว็บไซต์ Next.js + TypeScript',
      'Responsive ทุกขนาดหน้าจอ',
      'SEO + performance optimization',
      'Animation + interaction',
      'Deploy บน Vercel + DNS setup',
    ],
    bestFor: [
      'มี design พร้อม อยากแปลงเป็นเว็บจริง',
      'อยากย้ายจาก WordPress/Wix มาแพลตฟอร์มที่เร็วขึ้น',
      'Landing page สำหรับแคมเปญ',
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
  },
  {
    slug: 'fullstack',
    icon: '🚀',
    title: 'Full-Stack Package',
    tagline: 'รับครบจบที่เดียว — ตั้งแต่ออกแบบถึง deploy',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '6–10 สัปดาห์',
    deliverables: [
      'ทุกอย่างใน UI/UX + Frontend',
      'Backend API (Next.js Server Actions / Laravel)',
      'Database design + migration',
      'Authentication + role management',
      'Admin dashboard (ถ้าต้องการ)',
      'Documentation + handover session',
    ],
    bestFor: [
      'โปรเจกต์ที่ยังไม่มี design และไม่มีทีม dev',
      'Internal tool สำหรับธุรกิจ',
      'Web app ที่ต้องการ user system',
    ],
    tags: ['Next.js', 'Laravel', 'Figma', 'Database', 'Auth'],
  },
];
