export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'process' | 'tech' | 'general';
}

export const faqs: FAQItem[] = [
  {
    id: 'price-fixed',
    question: 'ราคาเป็นแบบ fixed price หรือคิดเป็นชั่วโมง?',
    answer:
      'ส่วนใหญ่จะเป็น fixed price หลังคุยขอบเขตงานชัดเจน เพื่อให้วางแผนงบประมาณได้ง่าย ในกรณีงานที่ scope เปลี่ยนเร็วหรือเป็น maintenance จะเป็นรายชั่วโมงหรือ retainer',
    category: 'pricing',
  },
  {
    id: 'payment',
    question: 'ขอชำระเงินแบบไหน?',
    answer:
      'แบ่งเป็น 2-3 งวด ขึ้นกับขนาดงาน — โดยทั่วไป 50% เริ่มงาน, 50% ส่งงาน สำหรับโปรเจกต์ใหญ่จะแบ่งตาม milestone',
    category: 'pricing',
  },
  {
    id: 'timeline',
    question: 'งานใช้เวลานานแค่ไหน?',
    answer:
      'UI/UX 2-3 สัปดาห์, Frontend dev 3-5 สัปดาห์, Web app 6-10 สัปดาห์ — ขึ้นกับ scope จริงและการตอบกลับจากฝั่งลูกค้า',
    category: 'process',
  },
  {
    id: 'revisions',
    question: 'แก้งานได้กี่รอบ?',
    answer:
      'รวมการแก้ไขใหญ่ 2 รอบในราคา และแก้รายละเอียดเล็กๆ ได้ตลอดในช่วงรับงาน หากเปลี่ยน scope ใหญ่จะคุยปรับราคาก่อน',
    category: 'process',
  },
  {
    id: 'communication',
    question: 'ติดต่อกันยังไง?',
    answer:
      'หลักๆ ใช้ LINE หรือ email สำหรับเรื่องวันต่อวัน, นัด video call ทุก 1-2 สัปดาห์เพื่อ review งาน, มี Notion/Figma comment สำหรับ feedback บนงานจริง',
    category: 'process',
  },
  {
    id: 'tech-stack',
    question: 'ใช้ tech stack อะไรบ้าง?',
    answer:
      'Frontend: Next.js, React, TypeScript, Tailwind CSS — Backend: Next.js Server Actions, Laravel — Design: Figma, Penpot — Deploy: Vercel, DigitalOcean',
    category: 'tech',
  },
  {
    id: 'design-no-dev',
    question: 'รับเฉพาะ design ไม่ทำ dev ได้ไหม?',
    answer:
      'ได้ เลือกบริการ Product UI/UX ได้เลย ทีมจะส่ง design + handoff document ให้ developer นำไปสร้างต่อ',
    category: 'general',
  },
  {
    id: 'maintenance',
    question: 'หลังส่งงานมี maintenance ไหม?',
    answer:
      'มี — รับประกันแก้ bug ฟรี 30 วันหลังส่งงาน, หลังจากนั้นสามารถดูแลต่อเป็น retainer รายเดือนหรือคิดตามงาน',
    category: 'general',
  },
];
