# kumadesign.dev

เว็บไซต์ของ KUMA ฟรีแลนซ์รับออกแบบและพัฒนาเว็บไซต์ในจันทบุรี — https://www.kumadesign.dev

Next.js (App Router) + TypeScript + Tailwind CSS v4, deploy บน Vercel

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm lint
```

- เนื้อหาหลักอยู่ใน `src/data/` (ผลงาน บทความ บริการ ขั้นตอน FAQ)
- โครงสร้างโปรเจกต์และแนวทางออกแบบดูที่ [CLAUDE.md](CLAUDE.md)
- ฟอร์มติดต่อส่งอีเมลผ่าน Resend: ตั้งค่า `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` ถ้าไม่ตั้ง ระบบจะ log ข้อความแทน
