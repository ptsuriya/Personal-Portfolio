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
    title: 'Discovery',
    duration: '3–5 วัน',
    deliverable: 'Project brief + ใบเสนอราคา',
    description:
      'คุยเป้าหมายและ scope งาน — ใครคือผู้ใช้, ปัญหาคืออะไร, ความสำเร็จวัดยังไง — แล้วทำใบเสนอราคาที่ชัดเจน',
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Design',
    duration: '1–3 สัปดาห์',
    deliverable: 'Wireframe → UI design → Prototype',
    description:
      'ทำ wireframe ก่อน เพื่อตกลงเรื่อง flow และ layout จากนั้นค่อยลง UI ละเอียด — review กันทุก 3-4 วัน เพื่อปรับเร็ว',
    icon: '✏️',
  },
  {
    step: 3,
    title: 'Development',
    duration: '2–6 สัปดาห์',
    deliverable: 'Staging URL + repository',
    description:
      'พัฒนาเป็น component-based, push ขึ้น staging ตั้งแต่วันแรก — ลูกค้าเห็น progress ได้ตลอด, ทดสอบ + แก้ไปเรื่อยๆ',
    icon: '⚡',
  },
  {
    step: 4,
    title: 'Handoff',
    duration: '3–5 วัน',
    deliverable: 'Production site + documentation',
    description:
      'Deploy production, ตั้งค่า domain + analytics, ส่งมอบ documentation + handover session — รับประกัน bug 30 วัน',
    icon: '🚀',
  },
];
