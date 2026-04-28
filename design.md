# KUMA Portfolio Redesign Direction

## Goal

ปรับเว็บไซต์จากภาพรวมแบบหลายตัวตนให้เป็นพอร์ตสายเทคโนโลยีอย่างชัดเจน โดยเล่า KUMA ในฐานะ **UI/UX Designer + Frontend Developer** ที่มีงานเขียนเป็นพื้นที่อธิบายวิธีคิด กระบวนการทำงาน และการเรียนรู้

ทิศทางใหม่คือไม่นำเสนอด้านเพลงอีกต่อไป ทั้งใน hero, navigation, blog category, service, pricing และ about page เพื่อให้ผู้ว่าจ้างหรือคนอ่านเข้าใจทันทีว่าเว็บนี้เน้น:

- ผลงานออกแบบและพัฒนาเว็บไซต์
- บทความด้าน design, frontend, workflow และเครื่องมือ
- ประวัติ/ทักษะ/บริการสำหรับงานเทคโนโลยี

## Positioning

### One-liner

KUMA คือ designer-developer ที่เปลี่ยนไอเดียให้เป็น interface ที่ใช้งานได้จริง พร้อมเล่า process ผ่านบทความที่อ่านง่ายและนำไปใช้ต่อได้

### Keywords

- UI/UX Design
- Frontend Development
- Next.js / React / Tailwind CSS
- Design System
- Case Study
- Technical Writing
- Thai Creator / Builder

### What To Remove Completely

- ทุก section/card ที่สื่อถึงงานเพลง
- ทุกคำที่เกี่ยวกับ songwriting, Pop R&B, เพลงของฉัน, ฟัง
- Music pricing page จากโครง public site
- Music tags ใน blog filter
- Personal bio ที่บอกว่าทำเพลงหรือรับงานเพลง
- CTA หรือ social context ที่พาคนไปเข้าใจว่า KUMA ยังทำสายเพลง

## Information Architecture

### Primary Navigation

แนะนำให้เหลือ 4 เมนูหลัก:

1. `หน้าแรก`
2. `ผลงาน`
3. `บทความ`
4. `ประวัติ`

CTA หลัก:

- `ติดต่อทำงาน`

### Route Plan

| Route | Purpose | Notes |
| --- | --- | --- |
| `/` | Tech-focused hub | แนะนำตัว + featured work + latest posts |
| `/codework` | Portfolio / case studies | เปลี่ยนชื่อ display เป็น "ผลงาน" |
| `/blog` | Articles | เน้น design/dev/workflow |
| `/codework/resume` | Resume / about | รวม skill, tools, experience |
| `/codework/pricing` | Services | ใช้เมื่อพร้อมลงแพ็กเกจจริง |
| `/musicwork` | Remove หรือ redirect | ไม่เป็นส่วนหนึ่งของแบรนด์ใหม่ |
| `/musicwork/pricing` | Remove หรือ redirect | ไม่ควร public |

## Homepage Structure

### 1. Hero

หน้าแรกควรสื่อสารภายใน 5 วินาทีว่า KUMA ทำอะไรและเหมาะกับใคร

**Layout**

- ซ้าย: profile / identity block
- ขวา: interactive terminal หรือ project preview stack
- ใต้ hero: quick links ไปผลงาน, บทความ, ติดต่อ

**Suggested Copy**

Eyebrow:

`UI/UX Designer & Frontend Developer`

Headline:

`ออกแบบ interface ให้ชัด และพัฒนาให้ใช้งานได้จริง`

Supporting copy:

`ฉันช่วยเปลี่ยนไอเดียให้เป็นเว็บ แอป และประสบการณ์ดิจิทัลที่ดูดี ใช้งานง่าย และต่อยอดด้วยโค้ดได้`

Primary CTA:

`ดูผลงาน`

Secondary CTA:

`อ่านบทความ`

### 2. Featured Work

แทนที่การ์ดเดิมที่เกี่ยวกับเพลงด้วย section/card สำหรับงานเด่น 2-3 ชิ้น

Card information:

- Project title
- Type: UI/UX, Frontend, Full-stack
- Short outcome
- Stack
- CTA: `อ่านเคสงาน`

หากยังไม่มีงานจริง ให้ใช้ "case study coming soon" แบบดู intentional เช่น:

`กำลังเรียบเรียงเคสงานจากโปรเจคจริง`

### 3. Writing / Blog Preview

ทำให้บทความเป็นเสาหลักของเว็บ ไม่ใช่ placeholder

Suggested categories:

- `Design`
- `Frontend`
- `Case Study`
- `Workflow`
- `Tools`

Blog card ควรอ่านง่ายกว่า card งาน:

- วันที่
- หมวด
- ชื่อบทความ
- excerpt 2 บรรทัด
- reading time

### 4. Services Snapshot

สั้น กระชับ ไม่ต้องเป็น pricing เต็ม:

- UX/UI Design
- Frontend Implementation
- Design-to-Code
- Portfolio / Landing Page
- Design System Starter

CTA:

`คุยโปรเจค`

### 5. Footer

Marquee ควรเป็น tech identity:

`UI/UX Design • Frontend Dev • Next.js • React • Tailwind CSS • Figma • Design System • Case Study`

## Visual Direction

### Concept

ใช้ธีม Honey Bear ต่อได้ เพราะมีเอกลักษณ์และจำง่าย แต่เพิ่มความ "tech/editorial" ให้มากขึ้น ลดความน่ารักแบบ emoji-heavy และตัด mood ที่ทำให้นึกถึงงานเพลงออก

ภาพรวมควรเป็น:

- warm
- clean
- editorial
- technical but approachable
- playful เฉพาะจุด ไม่ใช่ทั้งหน้า

### Palette

คง base เดิม:

- Background: `#FDF6EC`
- Surface: `#FFF0CC`
- Text: `#3D1F00`
- Accent Honey: `#C07B2A`
- Terracotta: `#C86858`
- Dark Panel: `#2A1010`

เพิ่มสี tech accent แบบใช้ประหยัด:

- Code Green: `#7AA36F`
- Info Blue Gray: `#5D7C8A`
- Ink Brown: `#24110B`

ใช้ tech accent เฉพาะ:

- tags
- code syntax
- status dot
- small icons
- link hover

### Typography

- ใช้ `Kanit` ต่อสำหรับภาษาไทย
- ใช้ monospace เฉพาะ code snippets, labels, metadata, tags
- หลีกเลี่ยง heading ใหญ่เกินใน card เล็ก
- Blog content ควร line-height กว้าง อ่านสบาย

### Shape & Surface

- Card radius: 16-24px สำหรับ hero/card ใหญ่
- Button/tag radius: full pill ได้
- Border ใช้สีอุ่นโปร่งใส เช่น `#E8B8A8`
- Shadow เบาและอุ่น ไม่ทำให้ทุกอย่างลอยเท่ากัน

### Motion

คง motion ที่เป็น signature แต่ลดความถี่:

- Loading bear ใช้ได้บนหน้าแรก แต่ควรมี option ลดเวลาหรือแสดงเฉพาะครั้งแรก
- GlareCard ใช้กับ hero/project card เท่านั้น
- ShinyText ใช้เฉพาะ CTA หรือ keyword ไม่ควรใช้กับข้อความยาว
- Marquee ใช้เป็น footer identity line

## Component Direction

### PillNav

Update nav items:

```ts
[
  { href: "/codework", label: "ผลงาน" },
  { href: "/blog", label: "บทความ" },
  { href: "/codework/resume", label: "ประวัติ" },
]
```

CTA ทางขวา:

`ติดต่อ`

### Homepage Cards

Current:

- Profile card
- Codework card
- Musicwork card

New:

- Profile / intro card
- Featured work card
- Latest writing card

หรือถ้าอยากคง grid เดิม:

- Left large card: KUMA profile
- Right top card: Tech portfolio / featured project
- Right bottom card: Blog / notes / writing

### Blog Page

Remove tags:

- `#music`
- `#life` ถ้ายังไม่มี direction ชัด

Use:

- `#design`
- `#frontend`
- `#case-study`
- `#workflow`
- `#tools`

Empty state:

`กำลังเขียนบทความแรกเกี่ยวกับ design-to-code workflow`

### Codework Page

Rename display copy:

- `งานของฉัน` -> `ผลงานด้าน Design & Frontend`
- `Full-Stack Designer & Developer` ใช้ต่อได้
- Filter tabs: `ทั้งหมด`, `UI/UX`, `Frontend`, `Full-stack`, `Case Study`

Add project card fields:

- problem
- role
- stack
- year
- status
- link/demo

### Resume Page

ควรเป็นหน้าที่เล่าแบบ hiring-friendly:

- Intro
- Core skills
- Tools
- Selected experience
- Services
- Contact

## Content Strategy

### Blog Pillars

1. **Design Process**
   - wireframe
   - design system
   - user flow
   - UI critique

2. **Frontend Notes**
   - Next.js
   - Tailwind CSS
   - component patterns
   - animation

3. **Design-to-Code**
   - แปลง Figma/Penpot เป็น React
   - ตั้ง token
   - ทำ responsive layout

4. **Case Studies**
   - เป้าหมายโปรเจค
   - constraint
   - decision
   - result

5. **Tools & Workflow**
   - Canva / Figma / Penpot
   - AI-assisted workflow
   - productivity สำหรับ designer-developer

### First 6 Article Ideas

1. `จากดีไซน์สู่โค้ด: วิธีคิดตอนแปลง UI เป็น React Component`
2. `จัด Tailwind class ยังไงให้หน้าเว็บอ่านง่ายและแก้ต่อได้`
3. `Portfolio ที่ดีควรเล่าอะไร นอกจากภาพสวย`
4. `เปรียบเทียบ Figma, Penpot, Canva ใน workflow ส่วนตัว`
5. `ทำ Hero Section ให้บอกตัวตนได้ภายใน 5 วินาที`
6. `Case Study: รีดีไซน์เว็บ KUMA ให้โฟกัสสาย Tech มากขึ้น`

## Copy Guidelines

### Tone

- เป็นกันเอง
- ชัด
- อุ่น
- มีความเป็น designer ที่เขียนโค้ดได้
- ไม่ขายของแข็งเกินไป

### Avoid

- คำที่ทำให้ focus กระจาย เช่น music, songwriter, Pop R&B ในทุกส่วนของเว็บ
- emoji เยอะเกินในหัวข้อสำคัญ
- placeholder ที่ดูเหมือนยังไม่พร้อม เช่น `฿—` โดยไม่มีคำอธิบาย

### Good Phrases

- `ออกแบบให้เข้าใจง่าย พัฒนาให้ใช้งานได้จริง`
- `จาก concept สู่ interface ที่พร้อมใช้งาน`
- `บันทึกการออกแบบและพัฒนาเว็บของ KUMA`
- `เคสงาน, บทความ, และ workflow ของ designer-developer`

## Implementation Priorities

### Phase 1: Refocus

- Remove all music-related links/cards/copy from homepage
- Update hero copy
- Update marquee text
- Update nav to portfolio/blog/resume/contact
- Remove `#music` from blog tags
- Remove or redirect `/musicwork` and `/musicwork/pricing`
- Rewrite bio so KUMA is no longer presented as a songwriter

### Phase 2: Portfolio Structure

- Add real project schema
- Create project card layout
- Prepare case study template
- Replace placeholders with "coming case studies" copy

### Phase 3: Blog Foundation

- Add MDX or static post data
- Create category filter
- Create post detail route
- Publish first 2-3 articles

### Phase 4: Services & Resume

- Rewrite resume page
- Replace pricing placeholder with service packages or inquiry-first service page
- Add contact CTA across pages

## Recommended Homepage Wireframe

```txt
┌─────────────────────────────────────────────────────────────┐
│ PillNav: KUMA | ผลงาน | บทความ | ประวัติ | ติดต่อ          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌─────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Profile / Intro          │ │ Featured Project / Code UI   │ │
│ │ KUMA                     │ │ project.preview.tsx          │ │
│ │ UI/UX + Frontend         │ │ ดูผลงาน                       │ │
│ │ CTA: ดูผลงาน             │ └─────────────────────────────┘ │
│ │ CTA: อ่านบทความ          │ ┌─────────────────────────────┐ │
│ │ Contact icons            │ │ Latest Writing               │ │
│ └─────────────────────────┘ │ บทความล่าสุด / notes          │ │
│                             │ อ่านบทความ                    │ │
│                             └─────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Featured Work: 2-3 cards                                    │
├─────────────────────────────────────────────────────────────┤
│ Latest Articles: 3 cards                                    │
├─────────────────────────────────────────────────────────────┤
│ Services Snapshot + Contact CTA                             │
├─────────────────────────────────────────────────────────────┤
│ Marquee + Footer                                            │
└─────────────────────────────────────────────────────────────┘
```

## Decision

แนะนำให้ตัดงานเพลงออกจากแบรนด์เว็บไซต์ทั้งหมด และเปลี่ยนเว็บเป็น **Tech Portfolio + Writing Hub** โดยยังเก็บความอบอุ่นแบบ KUMA ไว้ผ่านสี ภาพ profile และ micro-interaction

ผลลัพธ์ที่ควรได้คือเว็บที่ผู้เข้าชมตอบได้ทันทีว่า:

- KUMA ทำงานอะไร
- มี skill อะไร
- ดูผลงานได้ที่ไหน
- อ่านวิธีคิดได้ที่ไหน
- ติดต่อจ้างงานได้อย่างไร
