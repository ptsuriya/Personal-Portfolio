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
    slug: 'fullstack',
    icon: '⌘',
    title: 'Web Application Development',
    tagline: 'รับเขียนเว็บแอป ระบบสมาชิก และระบบหลังบ้านให้ธุรกิจ',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '6–10 สัปดาห์',
    deliverables: [
      'วิเคราะห์ scope และวาง technical flow',
      'เขียน Frontend + Backend + Database',
      'Authentication และ role management',
      'Admin dashboard หรือระบบหลังบ้าน',
      'Deploy, documentation และ handoff',
    ],
    bestFor: [
      'ธุรกิจที่ต้องการเว็บแอปเฉพาะทาง',
      'ทีมที่ต้องการทำ MVP ให้เร็ว',
      'ระบบหลังบ้านและ internal tools',
    ],
    tags: ['Next.js', 'React', 'Laravel', 'Database', 'Auth'],
  },
  {
    slug: 'frontend',
    icon: '↗',
    title: 'Corporate Website & Landing Page',
    tagline: 'รับเขียนเว็บบริษัทและ Landing Page ที่เร็ว ดูดี และสร้างความน่าเชื่อถือ',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '3–5 สัปดาห์',
    deliverables: [
      'เว็บไซต์ Next.js + TypeScript',
      'Responsive ทุกขนาดหน้าจอ',
      'เชื่อมต่อ API และระบบหลังบ้าน',
      'SEO, accessibility และ performance',
      'Deploy บน Vercel + documentation',
    ],
    bestFor: [
      'ธุรกิจที่ต้องการเว็บใหม่',
      'เว็บไซต์องค์กรหรือ product marketing',
      'Landing Page สำหรับแคมเปญ',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    slug: 'ui-ux',
    icon: '□',
    title: 'UI/UX Design สำหรับเว็บไซต์',
    tagline: 'วางโครงสร้างและออกแบบหน้าเว็บให้พร้อมนำไปเขียนโค้ด',
    startingPrice: null,
    priceNote: 'เริ่มต้น',
    timeline: '2–3 สัปดาห์',
    deliverables: [
      'User flow และ information architecture',
      'Wireframe และ high-fidelity UI ใน Figma',
      'Design system และ component library',
      'Prototype สำหรับทดสอบและ review',
      'Design handoff สำหรับทีม developer',
    ],
    bestFor: [
      'ทีมที่มีเว็บเดิมและต้องการ redesign',
      'Startup ที่กำลังทำ MVP',
      'โปรเจกต์ที่ต้องการวาง UX ก่อนเริ่มเขียนเว็บ',
    ],
    tags: ['Figma', 'UX Flow', 'Design System', 'Prototype'],
  },
];
