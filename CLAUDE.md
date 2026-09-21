# KUMA Portfolio — CLAUDE.md

> ไฟล์นี้สรุปโครงสร้างและบริบทของโปรเจคสำหรับ AI assistant
> อ่านก่อนทุกครั้งที่จะแก้ไขโค้ด

---

## 👤 เจ้าของและตำแหน่งของเว็บ

- **ชื่อ**: KUMA (Pongtiwat Suriyarangsri)
- **เว็บ**: https://www.kumadesign.dev (Vercel; DNS อยู่ที่ Cloudflare; โดเมนเปล่า `kumadesign.dev` redirect ไป `www`)
- **ตำแหน่ง**: ฟรีแลนซ์รับออกแบบและพัฒนาเว็บไซต์ เว็บแอป และระบบหลังบ้าน อยู่จันทบุรี รับงานทุกพื้นที่ แต่ทำการตลาดเน้นผู้ประกอบการจันทบุรี
- **ราคาเริ่มต้น**: 2,500 บาท (`startingRate` ใน `src/data/site.ts`)
- **ช่องทางติดต่อ**: อีเมลและฟอร์มเท่านั้น (`ptsuriyarangsri@gmail.com`) — **ไม่มี LINE** ห้ามใส่กลับมา
- **ห้ามแสดงรูปหน้าเจ้าของเว็บ** ทุกที่ ใช้มาสคอตหมี KUMA แทน
- ผลงานทุกชิ้นออกในนามเว็บนี้ ประเภทงานเป็น Full-Stack
- **ห้ามใส่เว็บ มรภ.รำไพพรรณี (www2.rbru.ac.th) เป็นผลงานบนเว็บไซต์**
- ราคา: เริ่มต้น 2,500 บาท (ไม่รวมโดเมน/โฮสติ้ง), ระบบหลังบ้านแก้เองได้ +5,000 บาทขึ้นไป, ดูแลรายเดือน (ลูกค้าส่งข้อมูล KUMA อัปเดตให้) สอบถามราคา
- นัดเจอคุยงานได้ในจันทบุรี จังหวัดอื่นคุยออนไลน์
- บริการที่ประกาศว่า "เร็ว ๆ นี้": ระบบจัดการเกษตรอัจฉริยะ (`comingSoonService` ใน `src/data/site.ts`)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js App Router (v16) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Animation | Motion (`motion/react`) ผ่าน `src/components/motion/` + `MotionConfig reducedMotion="user"` |
| Icons | lucide-react |
| Form | Server Action + zod + Resend (`src/app/contact/actions.ts`) |
| Font | Kanit ผ่าน `next/font` |
| Package manager | pnpm 10 (`pnpm-lock.yaml` เป็น lock file เดียว) |

---

## 📁 โครงสร้างไฟล์

```
src/
├── app/
│   ├── layout.tsx            ← metadata หลัก, JSON-LD, header/footer/ContactBar
│   ├── globals.css           ← design tokens (kuma-*), bg-dots, honey-drip, focus, reduced motion
│   ├── page.tsx              ← หน้าแรก (hero หมีเขียนโค้ด, ผลงาน, บริการ, ขั้นตอน, FAQ, บทความ, CTA)
│   ├── work/page.tsx         ← รวมผลงาน
│   ├── work/[slug]/page.tsx  ← รายละเอียดผลงาน (สร้างจาก case-studies.ts)
│   ├── services/page.tsx     ← บริการ + ราคาเริ่มต้น
│   ├── chanthaburi/page.tsx  ← หน้า local SEO "รับทำเว็บไซต์ จันทบุรี" (ราคา, พื้นที่ให้บริการ, FAQ)
│   ├── process/page.tsx      ← ขั้นตอน 4 ขั้น + FAQ ทั้งหมด (#faq)
│   ├── about/page.tsx
│   ├── contact/              ← ฟอร์ม (client), layout.tsx มี metadata, actions.ts ส่งอีเมล
│   ├── blog/page.tsx         ← หน้ารวมบทความ (สร้างจาก articles.ts)
│   ├── blog/<slug>/page.tsx  ← บทความแต่ละเรื่อง ใช้ ArticleShell
│   ├── sitemap.ts, robots.ts ← สร้างจากข้อมูลใน src/data
├── components/
│   ├── site/                 ← SiteHeader, SiteFooter, ContactBar, PageIntro, CtaBlock, WorkShowcase, HeroArt, styles.ts
│   ├── motion/               ← MotionProvider, Reveal (โผล่ตอนเลื่อนถึง), Float (ลอยเบา ๆ), Breathe
│   ├── Blog/ArticleShell.tsx ← layout บทความ + ArticleSection, ArticleCode, ArticleCallout + JSON-LD BlogPosting
│   ├── faq/FAQAccordion.tsx
│   └── process/Timeline.tsx  ← ขั้นตอนพร้อมรูปหมี 4 ท่า
├── data/
│   ├── site.ts               ← siteUrl, startingRate, contact, navItems, ข้อความที่ใช้ซ้ำ
│   ├── case-studies.ts, articles.ts, services.ts, process.ts, faq.ts
│   └── testimonials.ts       ← ยังว่าง (ยังไม่มีรีวิวจริง)
└── lib/                      ← utils.ts (cn), email.ts (Resend)

public/image/
├── illustrations/            ← ภาพหมี KUMA (.webp) ที่ใช้บนเว็บ
├── work/                     ← ภาพหน้าจอผลงาน 1440×810
├── Asset/                    ← โลโก้ KUMA.png + สติกเกอร์ขนมที่ยังใช้อยู่
├── loader/firework.png       ← พื้นหลัง hero
└── og-cover.jpg              ← รูปตอนแชร์ลิงก์ 1200×630
```

---

## 🎨 Design System

- สไตล์ "สติกเกอร์หมีน้ำผึ้ง": ขอบหนา `border-2 border-kuma-bark`, เงาทึบแบบ offset, ปุ่มกดแล้วยุบ
- สีใช้ token `kuma-*` จาก `globals.css` เท่านั้น: `cream #FDF6EC`, `honey #FFF0CC`, `gold #EEC65D`, `bark #2A1010`, `cocoa #3D1F00`, `clay #7A4838`, `amber #C07B2A`, `amber-deep #8E5400`, `terra #C86858`, `line #E8C99A`, `sand #FAE4DC` — ห้ามใช้สี generic
- ใช้ helper จาก `src/components/site/styles.ts`: `buttonClass(variant)`, `stickerCard`, `container`, `sectionTitle`, `bodyText`
- ภาพหมีใหม่ต้องเข้าชุดเดิม: หมีขาวครีม หูสีพีช ตาดำคล้ายแว่นกันแดด ภาพเวกเตอร์สติกเกอร์ ขอบน้ำตาลเข้ม ไม่มีตัวหนังสือ บันทึกเป็น `.webp` ใน `public/image/illustrations/`
- Motion แบบ "มีชีวิตชีวาแต่ไม่รก": hero เปิดตัวเป็นจังหวะ, section โผล่ตอนเลื่อนถึงด้วย `Reveal`, สติกเกอร์/มาสคอตลอยเบา ๆ ด้วย `Float`, การ์ดยกตัวตอน hover — ห้ามใส่ animation วนตลอดเวลาที่รบกวนการอ่าน และต้องเคารพ reduced motion

---

## ✍️ การเพิ่มเนื้อหา

- **ผลงานใหม่**: เพิ่มใน `src/data/case-studies.ts` + ภาพปก 1440×810 ใน `public/image/work/` — หน้า `/work`, หน้ารายละเอียด และ sitemap จะอัปเดตเอง
- **บทความใหม่**: สร้าง `src/app/blog/<slug>/page.tsx` ด้วย `ArticleShell` (ใส่ `slug`, `published`, `sources`) แล้วเพิ่มรายการใน `src/data/articles.ts`
- บทความสำหรับลูกค้าให้เขียนถึงผู้ประกอบการจันทบุรี ห้ามแต่งตัวเลขสถิติ อ้างอิงแหล่งทางการเสมอ

---

## 🔎 SEO

- ทุกหน้ามี `metadata` ของตัวเอง (title, description, canonical); หน้า contact อยู่ใน `contact/layout.tsx`
- canonical ใช้ `siteUrl` (`https://www.kumadesign.dev`) ถ้าเปลี่ยนโดเมนหลักใน Vercel ให้แก้ค่าเดียวนี้
- JSON-LD: Organization + ProfessionalService ใน `layout.tsx`, BlogPosting ใน `ArticleShell`

---

## 🚀 Dev Commands

```bash
pnpm install     # ติดตั้ง dependency
pnpm dev         # dev server http://localhost:3000
pnpm build       # production build
pnpm lint        # ESLint
```

Deploy: push ขึ้น `main` แล้ว Vercel deploy อัตโนมัติ

---

## 📝 หมายเหตุสำหรับ AI

- Thai ใช้ใน UI copy, code/comments เป็นภาษาอังกฤษได้
- ใส่ `'use client'` เฉพาะไฟล์ที่ใช้ hooks หรือ motion ตรง ๆ; หน้า server ใช้ wrapper ใน `components/motion/` แทน
- Path alias `@/` → `src/`
- ใช้ `next/image` สำหรับรูป

---


## Global development preferences

### Communication style

- ตอบแบบกระชับ ตรงประเด็น มั่นใจ สุภาพ และใช้งานง่าย
- ใช้โทนแบบแฟนหนุ่มที่มีวุฒิภาวะ: ดูแลผู้ใช้ proactively, practical, ไม่เวิ่นเว้อ
- เริ่มด้วยผลลัพธ์หรือข้อสรุปก่อน แล้วค่อยอธิบายขั้นตอนที่จำเป็น
- ถ้าไม่แน่ใจ ให้บอกตรง ๆ ห้ามแต่งข้อมูลหรือทำเหมือนสำเร็จทั้งที่ยังไม่ได้ตรวจสอบ

### Clarification and grilling

- งานเล็ก งานแก้เฉพาะจุด หรือขอบเขตชัดเจน: ใช้ skill `grill-me`
- งานใหญ่ หลายขั้นตอน หลายไฟล์ กระทบสถาปัตยกรรม หรือ requirement ยังไม่ชัด: ใช้ skill `grill-with-docs`
- ถ้าคำถามกำกวมแต่มีสมมติฐานที่ปลอดภัย ให้ระบุสมมติฐานแล้วทำต่อ
- ถ้าความกำกวมอาจทำให้งานผิดทิศ เสียข้อมูล เสียเงิน หรือเปลี่ยนระบบสำคัญ ให้ Grill ก่อน
- ถามเฉพาะคำถามที่จำเป็น ห้ามถามเรื่องที่ค้นพบได้จากโค้ด เอกสาร หรือบริบท
- หาก skill ที่ต้องใช้ไม่พร้อมใช้งาน ให้ทำตามหลักการเดียวกันแบบ manual และแจ้งสั้น ๆ

### MCP-first workflow

- สำหรับ Laravel, React, Next.js, ReactBits และ Tailwind ให้ตรวจหา MCP ที่เกี่ยวข้องก่อนใช้ skill
- ReactBits: ใช้ `reactbits` MCP สำหรับค้นหา component, source code และ demo
- React/Tailwind UI: ใช้ `shadcn` MCP เมื่อเกี่ยวข้อง
- Browser/UI testing: ใช้ `chrome-devtools` MCP ก่อน
- Diagram: ใช้ `drawio` MCP ก่อน
- หากไม่มี MCP ที่เหมาะสม ให้ใช้ installed skills
- ห้ามติดตั้ง MCP ใหม่ เว้นแต่ผู้ใช้สั่งโดยตรง

### Engineering rules

- ก่อนแก้โค้ด ให้ตรวจโครงสร้างโปรเจกต์ ไฟล์ที่เกี่ยวข้อง และเอกสารก่อน
- ห้ามข้ามพื้นฐาน: validation, error handling, security, testing และ edge cases
- แก้เฉพาะส่วนที่จำเป็น รักษาโค้ดเดิมของผู้ใช้ และหลีกเลี่ยง diff ที่ไม่เกี่ยวข้อง
- ห้ามเพิ่ม dependency หรือเปลี่ยนสถาปัตยกรรมโดยไม่จำเป็น
- ห้ามใช้คำสั่งทำลายข้อมูลหรือเขียนทับงานผู้ใช้โดยไม่มีคำสั่งชัดเจน
- ห้ามเดาข้อเท็จจริง สามารถตั้งสมมติฐานที่ปลอดภัยได้ แต่ต้องแจ้งให้ทราบ
- การเปลี่ยนแปลงที่กระทบพฤติกรรมให้ใช้ `tdd` เมื่อเหมาะสม
- หลังแก้เสร็จให้ใช้ `qa` และ/หรือ `code-review` ตามความเหมาะสม
- ตรวจสอบผลลัพธ์จริงก่อนบอกว่างานเสร็จ
- ห้าม commit, push, deploy หรือทำ external action เว้นแต่ผู้ใช้สั่ง

### Skill routing

- Bug หรือ error ที่ยังไม่ทราบสาเหตุ: ใช้ `triage` หรือ `diagnosing-bugs`
- ลงมือ implement ตาม requirement ที่ชัดเจน: ใช้ `implement`
- ค้นคว้าข้อมูลหรือเทคโนโลยีที่ไม่แน่ใจ: ใช้ `research`
- แปลง requirement เป็น specification: ใช้ `to-spec`
- งานยาวหรือ session เริ่มมีบริบทมาก: ใช้ `handoff`
- ใช้ subagent เฉพาะงานที่แยกอิสระได้จริง เช่น research, testing, audit หรือ review

### Efficiency

- อ่านเฉพาะไฟล์และเอกสารที่เกี่ยวข้อง
- หลีกเลี่ยงการโหลดข้อมูลซ้ำ
- งานใหญ่ให้แบ่งเป็น milestone ที่ตรวจสอบได้
- หาก session ยาว บริบทใกล้เต็ม หรือเริ่มมีความเสี่ยง ให้แนะนำ handoff หรือแบ่งงานเป็นหลาย session
- ก่อน handoff ให้สรุปเป้าหมาย สมมติฐาน ไฟล์ที่แก้ สิ่งที่เสร็จแล้ว และงานที่เหลือ
- รายงานตอนจบแบบสั้น ๆ: สิ่งที่เปลี่ยน, ไฟล์ที่เกี่ยวข้อง, การทดสอบ, และประเด็นที่ยังต้องตัดสินใจ
