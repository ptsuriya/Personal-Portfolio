# KUMA Portfolio — AGENTS.md

> ไฟล์นี้สรุปโครงสร้างและบริบทของโปรเจคทั้งหมดสำหรับ AI assistant
> อ่านก่อนทุกครั้งที่จะแก้ไขโค้ด

---

## 👤 เจ้าของโปรเจค

- **ชื่อ**: KUMA (Pongtiwat Suriyarangsri)
- **อีเมล**: ptsuriyarangsri@gmail.com
- **โดเมน (เป้าหมาย)**: https://kumadesign.dev
- **อาชีพ**: UI/UX Designer, Frontend Developer, Pop R&B Songwriter
- **เครื่องมือออกแบบ**: Canva, Figma, Penpot
- **สแตกโค้ด**: React, Next.js, Tailwind CSS, Bootstrap, PHP, Laravel

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js App Router (v16+) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion v12 |
| Icons | lucide-react |
| UI Primitives | @base-ui/react, class-variance-authority |
| HTTP Client | axios |
| Font | Kanit (Thai/Latin) + Geist (monospace fallback) |
| Package Manager | บน lock files มีทั้ง bun, pnpm, npm (ใช้ `npm run dev`) |

---

## 📁 โครงสร้างไฟล์ที่สำคัญ

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, SEO metadata (lang="th")
│   ├── globals.css         ← Tailwind imports, CSS variables, keyframes
│   ├── page.tsx            ← หน้า Hub หลัก (Landing page)
│   ├── blog/
│   │   ├── layout.tsx
│   │   └── page.tsx        ← Blog placeholder (ยังไม่มี content)
│   ├── codework/
│   │   ├── layout.tsx      ← Sub-nav: ผลงาน / ราคา / ประวัติ
│   │   ├── page.tsx        ← Portfolio grid (placeholder cards)
│   │   ├── pricing/page.tsx ← Pricing tiers (ยังไม่มีราคาจริง)
│   │   └── resume/page.tsx ← Resume (placeholder)
│   └── musicwork/
│       ├── layout.tsx      ← Sub-nav: เพลงของฉัน / ราคา
│       ├── page.tsx        ← Songs list + Artist Bio (placeholder)
│       └── pricing/page.tsx ← Music pricing (placeholder)
│
├── components/
│   ├── LoadingScreen/
│   │   ├── Loading.tsx     ← Bear unboxing animation (3 phases)
│   │   └── Loading.css     ← Legacy CSS (อาจไม่ได้ใช้แล้ว)
│   ├── Navbars/
│   │   └── Navbars.css     ← Legacy CSS (อาจไม่ได้ใช้แล้ว)
│   ├── Scroll-observer.tsx
│   ├── ui/
│   │   └── button.tsx      ← shadcn Button component
│   └── reactbits/          ← Custom animation/UI components
│       ├── PillNav.tsx     ← Sticky pill navigation (homepage)
│       ├── GlareCard.tsx   ← 3D tilt + glare card effect
│       ├── GrainyGradient.tsx ← Fixed background with grain texture
│       ├── InfiniteMarquee.tsx ← Scrolling text ticker
│       ├── ShinyText.tsx   ← Sweeping shine text animation
│       ├── SplitText.tsx   ← Character-by-character reveal (Framer Motion)
│       ├── TextType.tsx    ← Typewriter cycling text
│       └── CurvedLoop.tsx  ← (usage TBD)
│
├── lib/
│   └── utils.ts            ← cn() helper (clsx + tailwind-merge)
│
public/
├── image/
│   ├── Asset/KUMA.png      ← Logo ใน navbar
│   ├── Line/profile.jpg    ← Profile photo (OG image ด้วย)
│   └── loader/
│       ├── Box.png         ← Loading screen: กล่องปิด
│       ├── unbox.png       ← Loading screen: กล่องเปิด
│       ├── inbox.png       ← Loading screen: หมีพุ่งออก
│       └── firework.png    ← Loading screen: ดอกไม้ไฟ
```

---

## 🎨 Design System & Color Palette

### "Honey Bear" Theme (Warm Terracotta/Cream)
```
Background:    #FDF6EC  (cream)
Surface:       #FFF0CC  (honey light)
Text:          #3D1F00  (dark brown)
Dark panel:    #2A1010  (near-black red)
Accent:        #C07B2A, #C86858  (honey/terracotta)
Soft:          #F5C9A0, #FAE4DC, #FAD4C0
Border:        #E8C99A, #E8B8A8, #E7B2A4
```

### CSS Variables
กำหนดใน `globals.css` ผ่าน `@theme` block และ `:root {}` ใช้ oklch color space  
ตัวแปร: `--color-bg`, `--color-surface`, `--color-text`, `--color-accent`, `--color-soft`

### Keyframe Animations (globals.css)
| ชื่อ | ใช้กับใคร |
|------|----------|
| `shoot-out` | หมีพุ่งออกจากกล่อง loading |
| `popout` | ดอกไม้ไฟ loading |
| `float-cloud` | (สำรอง) |
| `marquee-scroll` | InfiniteMarquee |
| `shiny-sweep` | ShinyText |
| `box-shake` | กล่อง loading เขย่า |

---

## 🗺️ Routes ที่มีอยู่

| Route | สถานะ | หมายเหตุ |
|-------|-------|---------|
| `/` | ✅ สมบูรณ์ | Landing Hub page |
| `/blog` | ⏳ Placeholder | ยังไม่มี posts, รอ MDX |
| `/codework` | ⏳ Placeholder | `projects[]` array ว่าง |
| `/codework/pricing` | ⏳ Placeholder | ราคาแสดง `฿—` |
| `/codework/resume` | ⏳ Placeholder | ข้อมูลรอเติม |
| `/musicwork` | ⏳ Placeholder | `songs[]` ว่าง, Bio ว่าง |
| `/musicwork/pricing` | ⏳ Placeholder | รอข้อมูล |

---

## 🧩 Component Reference

### `<LoadingScreen />`
- **ที่อยู่**: `src/components/LoadingScreen/Loading.tsx`
- **ใช้ใน**: `src/app/page.tsx` (homepage เท่านั้น)
- **การทำงาน**: 3 phases — `box` → `shake` (400ms) → `unbox` (1100ms) → `hidden` (2400ms)
- **Assets**: `/image/loader/{Box,unbox,inbox,firework}.png`

### `<PillNav />`
- **ที่อยู่**: `src/components/reactbits/PillNav.tsx`
- **ใช้ใน**: `src/app/page.tsx`
- **theme**: Honey gold (#FFF3CE background, border #C88D14)
- **รับ props**: `items?: NavItem[]` (default คือ `[{ href: '/blog', label: 'บทความ' }]`)
- **Logo**: `/image/Asset/KUMA.png`

### `<GlareCard />`
- **ใช้ใน**: Homepage hero cards, codework links
- **effect**: 3D tilt + radial glare ตาม mouse position
- **Props**: `children`, `className?`

### `<GrainyGradient />`
- **ใช้ใน**: Homepage background + codework/musicwork layouts
- **เป็น**: `fixed inset-0 -z-10` — ไม่กิน scroll space
- **ประกอบด้วย**: base cream + 3 gradient orbs + SVG grain overlay (opacity 22%)

### `<SplitText />`
- **Props**: `text`, `delay?` (ms per char), `duration?`, `startDelay?`
- **ใต้ฝากระโปรง**: Framer Motion, character-by-character reveal (blur + slide up)

### `<TextType />`
- **Props**: `texts[]`, `speed?` (ms per char), `pauseDuration?`
- **การทำงาน**: Typewriter effect วนซ้ำใน array

### `<ShinyText />`
- **Props**: `text`, `className?`, `speed?`, `color?`, `shineColor?`
- **effect**: Moving shine gradient sweep บน text

### `<InfiniteMarquee />`
- **Props**: `text`, `className?`, `speed?`, `color?`
- **ใช้ใน**: Footer marquee บน homepage

---

## 📐 Layout Patterns

### Homepage (/)
```
<LoadingScreen />          ← Full-screen overlay, auto-dismiss
<main relative flex min-h-screen>
  <GrainyGradient />       ← fixed background
  <PillNav />              ← sticky top pill nav
  <section flex-1>
    <div max-w-[860px] grid md:grid-cols-2>
      <GlareCard>          ← Profile card (left, full height)
        [Photo + Name + TextType + ShinyText + Contact icons]
      </GlareCard>
      <div grid md:grid-rows-[7fr_3fr]>
        <Link /codework>   ← Code card (dark, code snippet style)
        <Link /musicwork>  ← Music card (rose gradient)
      </div>
    </div>
  </section>
  <InfiniteMarquee />
  <footer />
</main>
```

### Codework Layout (/codework/*)
- Sticky top navbar: KUMA logo + 3 nav links (active = dark pill)
- `GrainyGradient` เป็น fixed background

### Musicwork Layout (/musicwork/*)
- Sticky top navbar: KUMA logo + 2 nav links (active = rose gradient pill)
- `GrainyGradient` เป็น fixed background

---

## ⚠️ สิ่งที่รู้ว่า Pending / TODO

1. **`projects[]` ใน `/codework/page.tsx`** — array ว่างเปล่า ต้องเติมผลงานจริง
2. **`songs[]` และ `collaborators[]` ใน `/musicwork/page.tsx`** — ว่างเปล่า ต้องเติม
3. **Artist Bio ใน `/musicwork/page.tsx`** — placeholder text อยู่
4. **ราคา** ใน pricing pages แสดงเป็น `฿—` ทั้งหมด
5. **Resume page** (`/codework/resume`) — ยังเป็น placeholder
6. **Blog** — ยังไม่มี MDX setup, post list ว่าง
7. **`package.json` name** ยังเป็น `"my-new-app-name"` (cosmetic)
8. **`page.module.css`** — ดูเหมือนไม่ได้ใช้ (leftover from Next.js template)
9. **Legacy CSS**: `LoadingScreen/Loading.css`, `Navbars/Navbars.css` — อาจลบได้

---

## 🚀 Dev Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # ESLint
```

Dev server: http://localhost:3000

---

## 📝 หมายเหตุสำหรับ AI

- **ภาษาในโค้ด**: Thai text ใช้ใน UI copy, ส่วน code/comments ผสม EN/TH
- **Tailwind**: ใช้ v4 ซึ่ง syntax อาจต่างจาก v3 เล็กน้อย (ใช้ `@import "tailwindcss"` แทน `@tailwind base/components/utilities`)
- **ห้าม** ใช้สี generic (red, blue) — ใช้ honeybear palette เสมอ
- **Font**: `Kanit` เป็น primary sans font (รองรับภาษาไทย), ตั้งใน `layout.tsx`
- **Client components**: ต้องใส่ `'use client'` เมื่อใช้ hooks, useState, framer-motion
- **Path alias**: `@/` map ไปที่ `src/`
- **Image**: ใช้ `next/image` เสมอ (รองรับ `fill` prop สำหรับ responsive)
- **อย่า revert** ไฟล์ที่ถูก delete ใน git worktree (ดู Codex.md หัวข้อ "Existing worktree changes")

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
