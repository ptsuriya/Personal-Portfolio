export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  deliverable: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Scope',
    duration: '3–5 วัน',
    deliverable: 'Project brief + ใบเสนอราคา',
    description:
      'คุยเป้าหมายและ scope งาน — ใครคือผู้ใช้, ปัญหาคืออะไร, ความสำเร็จวัดยังไง — แล้วทำใบเสนอราคาที่ชัดเจน',
    icon: '01',
  },
  {
    step: 2,
    title: 'Product & System Design',
    duration: '1–3 สัปดาห์',
    deliverable: 'Wireframe → UI design → Prototype',
    description:
      'ทำ wireframe ก่อน เพื่อตกลงเรื่อง flow และ layout จากนั้นค่อยลง UI ละเอียด — review กันทุก 3-4 วัน เพื่อปรับเร็ว',
    icon: '02',
  },
  {
    step: 3,
    title: 'Development & QA',
    duration: '2–6 สัปดาห์',
    deliverable: 'Staging URL + repository',
    description:
      'พัฒนาเป็น component-based, push ขึ้น staging ตั้งแต่วันแรก — ลูกค้าเห็น progress ได้ตลอด, ทดสอบ + แก้ไปเรื่อยๆ',
    icon: '03',
  },
  {
    step: 4,
    title: 'Launch & Handoff',
    duration: '3–5 วัน',
    deliverable: 'Production site + documentation',
    description:
      'Deploy production, ตั้งค่า domain + analytics, ส่งมอบ documentation + handover session — รับประกัน bug 30 วัน',
    icon: '04',
  },
];
