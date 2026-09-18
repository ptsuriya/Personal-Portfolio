/** Canonical site origin (Vercel redirects the bare domain to www). */
export const siteUrl = 'https://www.kumadesign.dev';

/** Minimum project rate in THB. */
export const startingRate = 2500;

/** Illustration per service slug (see src/data/services.ts). */
export const serviceIllustrations = {
  fullstack: '/image/illustrations/service-webapp.webp',
  frontend: '/image/illustrations/service-website.webp',
  'ui-ux': '/image/illustrations/service-uiux.webp',
} as const;

export const contact = {
  email: 'ptsuriyarangsri@gmail.com',
  bookingMailto: 'mailto:ptsuriyarangsri@gmail.com?subject=ขอนัดคุย%2030%20นาที',
};

export const navItems = [
  { href: '/work', label: 'ผลงาน' },
  { href: '/services', label: 'บริการ' },
  { href: '/process', label: 'ขั้นตอนทำงาน' },
  { href: '/about', label: 'เกี่ยวกับ' },
  { href: '/blog', label: 'บทความ' },
];

export const trustPoints = [
  'คุย scope และงบประมาณก่อนเริ่มงาน',
  'มี staging ให้ตรวจงานระหว่างทาง',
  'ส่งมอบโค้ด เอกสาร และดูแลหลังเปิดใช้',
];

export const workingPromises = [
  { title: 'Scope ชัดก่อนเริ่ม', description: 'แยก deliverable และ milestone ให้ตรวจสอบได้' },
  { title: 'อัปเดตเป็นระยะ', description: 'เห็น progress และทดสอบงานได้ระหว่างทาง' },
  { title: 'ส่งมอบพร้อมดูแลต่อ', description: 'มี documentation และช่วงแก้ไข bug หลังส่งงาน' },
];

export const workingValues = [
  { title: 'คิดเป็นระบบ', description: 'แยกปัญหาให้ชัดก่อนเริ่มเขียนโค้ด เพื่อให้ solution ไม่ซับซ้อนเกินจำเป็น' },
  { title: 'ทำงานร่วมกันได้จริง', description: 'สื่อสารด้วย scope, milestone และ prototype ที่ทุกฝ่ายตรวจสอบได้' },
  { title: 'ส่งมอบให้ดูแลต่อได้', description: 'ให้ความสำคัญกับคุณภาพโค้ด เอกสาร และความพร้อมหลังเปิดใช้งาน' },
];
