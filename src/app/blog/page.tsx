import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brackets,
  Database,
  FileCode2,
  FileText,
  GitPullRequest,
  Languages,
  MonitorCheck,
  Palette,
  Puzzle,
  Search,
  ServerCog,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claude / Codex Config: Skills และ MCP',
  description: 'คู่มือเลือก ติดตั้ง และเรียกใช้ Skills กับ MCP สำหรับ Claude และ Codex',
};

type GuideItem = {
  name: string;
  source: string;
  href: string;
  role: string;
  install: string;
  use: string;
  note?: string;
};

const skillGroups = [
  {
    id: 'laravel',
    icon: ServerCog,
    eyebrow: '01 / BACKEND',
    title: 'Laravel',
    description: 'ใช้เมื่อทำ Laravel feature, วาง architecture หรือ review ความปลอดภัยของระบบฝั่ง server',
    items: [
      {
        name: 'laravel-specialist',
        source: 'jeffallan / claude-skills',
        href: 'https://www.skills.sh/jeffallan/claude-skills/laravel-specialist',
        role: 'ผู้เชี่ยวชาญ Laravel สำหรับ routing, controller, model, service, queue และการตั้งค่าแอป',
        install: 'npx skills add https://www.skills.sh/jeffallan/claude-skills/laravel-specialist',
        use: 'ใช้เมื่อขอให้สร้างหรือแก้ feature Laravel โดยระบุ route, model, migration และ test ที่เกี่ยวข้อง',
        note: 'ให้ agent อ่านโครงสร้างโปรเจกต์และ version ของ Laravel ก่อนแก้โค้ดเสมอ',
      },
      {
        name: 'laravel-patterns',
        source: 'affaan-m / everything-claude-code',
        href: 'https://www.skills.sh/affaan-m/everything-claude-code/laravel-patterns',
        role: 'ช่วยเลือก pattern สำหรับ Eloquent, service layer, validation, caching, events และ queues',
        install: 'npx skills add https://www.skills.sh/affaan-m/everything-claude-code/laravel-patterns',
        use: 'เรียกใช้ตอนวางโครงสร้าง feature ใหม่หรือ review ว่า logic ควรอยู่ controller, service, action หรือ job',
      },
      {
        name: 'laravel-security',
        source: 'affaan-m / everything-claude-code',
        href: 'https://www.skills.sh/affaan-m/everything-claude-code/laravel-security',
        role: 'ตรวจ authentication, authorization, CSRF, XSS, mass assignment, API และการจัดการข้อมูลลับ',
        install: 'npx skills add https://www.skills.sh/affaan-m/everything-claude-code/laravel-security',
        use: 'เรียกใช้เป็นรอบ security review ก่อน merge หรือก่อน deploy โดยขอให้รายงาน path, impact และวิธีแก้',
        note: 'Skill ช่วย review แต่ไม่แทนการทดสอบ penetration test หรือการตรวจ production config',
      },
    ],
  },
  {
    id: 'react',
    icon: Brackets,
    eyebrow: '02 / FRONTEND ENGINEERING',
    title: 'React / Next.js',
    description: 'ใช้รักษาคุณภาพ React และ Next.js ให้เร็ว อ่านง่าย และไม่เพิ่ม client-side work โดยไม่จำเป็น',
    items: [
      {
        name: 'vercel-react-best-practices',
        source: 'vercel-labs / agent-skills',
        href: 'https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices',
        role: 'แนวทาง performance จาก Vercel เช่น ลด waterfall, ลด bundle, จัดการ Server/Client Component และ re-render',
        install: 'npx skills add https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices',
        use: 'เรียกใช้ตอนสร้างหรือ refactor component ด้วยคำสั่ง เช่น “review หน้านี้ตาม React performance rules และแก้เฉพาะจุดที่มีหลักฐาน”',
        note: 'เหมาะกับการ review performance ไม่ใช่เหตุผลให้เปลี่ยน architecture ทั้งโปรเจกต์โดยไม่มี measurement',
      },
    ],
  },
  {
    id: 'testing',
    icon: MonitorCheck,
    eyebrow: '03 / BROWSER TESTING',
    title: 'Playwright สำหรับ browser QA',
    description: 'ใช้สำรวจเว็บไซต์, สร้าง E2E test, ตรวจ interaction และ review ความเสถียรของชุดทดสอบ Playwright',
    items: [
      {
        name: 'playwright-cli',
        source: 'microsoft / playwright-cli',
        href: 'https://www.skills.sh/microsoft/playwright-cli/playwright-cli',
        role: 'ควบคุม browser จาก terminal ด้วยคำสั่งกว่า 40 แบบ เช่น เปิดหน้า, click, fill form, snapshot, console, network และ tracing',
        install: 'npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli',
        use: 'เรียกใช้เมื่ออยากตรวจ flow แบบ interactive อย่างรวดเร็ว เช่น “ใช้ playwright-cli เปิด /blog/rbruskill ตรวจสารบัญและถ่าย snapshot ก่อนและหลังคลิก”',
        note: 'Skill นี้เป็นคู่มือให้ agent ใช้ CLI ไม่ได้ติดตั้งตัวคำสั่งให้เอง; ถ้าไม่มีคำสั่งให้ตรวจ npx ก่อน แล้วใช้ `npx playwright cli` หรือทำตาม installation ของ CLI',
      },
      {
        name: 'playwright-best-practices',
        source: 'currents-dev / playwright-best-practices-skill',
        href: 'https://www.skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices',
        role: 'คู่มือเขียน, debug และดูแล Playwright tests ครอบคลุม locator, assertion, fixture, Page Object Model, flaky test, responsive, accessibility และ CI',
        install: 'npx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices',
        use: 'เรียกใช้ตอนสร้างหรือ review test เช่น “ใช้ playwright-best-practices ตรวจ selector, wait, isolation และ retry ของ test นี้ แล้วแก้เฉพาะจุด”',
        note: 'หลังแก้ test ให้รัน `npx playwright test --reporter=list` และทำซ้ำหลายรอบสำหรับ flow สำคัญ ไม่ถือว่า generate ผ่านจนกว่าจะ execute จริง',
      },
      {
        name: 'playwright-generate-test',
        source: 'github / awesome-copilot',
        href: 'https://www.skills.sh/github/awesome-copilot/playwright-generate-test',
        role: 'สร้าง Playwright test จาก scenario โดยให้ agent สำรวจและทำตามขั้นตอนผ่าน Playwright MCP ก่อนเขียนไฟล์ TypeScript ลงโฟลเดอร์ tests',
        install: 'npx skills add https://github.com/github/awesome-copilot --skill playwright-generate-test',
        use: 'เรียกใช้เมื่อมี scenario ชัดเจน เช่น “ใช้ playwright-generate-test สร้าง test เปิดหน้าแรก → เปิดบทความ → กดสารบัญ → ตรวจ URL และรัน test ให้ผ่าน”',
        note: 'ต้องมี Playwright MCP ที่เชื่อมต่อได้ และควรตรวจ generated locator, assertion และ test data ก่อนนำไปใช้ใน CI',
      },
      {
        name: 'playwright-explore-website',
        source: 'github / awesome-copilot',
        href: 'https://www.skills.sh/github/awesome-copilot/playwright-explore-website',
        role: 'สำรวจเว็บไซต์จาก URL แล้วหา 3–5 user flows, บันทึก element/locator/expected outcome และเสนอ test case ต่อจากสิ่งที่พบ',
        install: 'npx skills add https://github.com/github/awesome-copilot --skill playwright-explore-website',
        use: 'เรียกใช้ก่อน generate test เช่น “ใช้ playwright-explore-website สำรวจ http://localhost:3000 โดยห้าม submit ข้อมูลจริง สรุป flow และ locator ที่พบ”',
        note: 'ควรกำหนด URL, environment, account และสิ่งที่ห้ามทำให้ชัด; skill นี้จะใช้ Playwright MCP และปิด browser context เมื่อสำรวจเสร็จ',
      },
    ],
  },
  {
    id: 'utils',
    icon: Wrench,
    eyebrow: '04 / PLANNING & CLARITY',
    title: 'Utility: Grill skills',
    description: 'ใช้ตรวจความชัดของ requirement และ stress-test แผนก่อนลงมือ โดยเลือกความเข้มตามขนาดและความเสี่ยงของงาน',
    items: [
      {
        name: 'grill-me',
        source: 'mattpocock / skills',
        href: 'https://www.skills.sh/mattpocock/skills/grill-me',
        role: 'สัมภาษณ์ requirement หรือ design แบบถามทีละคำถาม ไล่ decision tree และให้ agent อ่าน codebase เพื่อตอบสิ่งที่ค้นพบได้เอง',
        install: 'npx skills add https://github.com/mattpocock/skills --skill grill-me',
        use: 'ใช้กับงานเล็กหรือ scope ชัดแต่มีจุดที่ต้องยืนยัน เช่น “ใช้ grill-me ตรวจ acceptance criteria ของหน้า contact ก่อนแก้โค้ด” แล้วเริ่ม session ด้วย `/grilling`',
        note: 'ควรถามทีละข้อและยังไม่ implement จนกว่าจะได้ shared understanding; ไม่ใช่คำสั่งให้ถามทุกเรื่องที่อ่านจาก codebase ได้แล้ว',
      },
      {
        name: 'grill-with-docs',
        source: 'mattpocock / skills',
        href: 'https://www.skills.sh/mattpocock/skills/grill-with-docs',
        role: 'stress-test แผนกับ domain model, glossary และ ADR พร้อมบันทึกคำศัพท์ใน CONTEXT.md และการตัดสินใจสำคัญเป็น ADR เมื่อจำเป็น',
        install: 'npx skills add https://github.com/mattpocock/skills --skill grill-with-docs',
        use: 'ใช้กับงานใหญ่ หลายไฟล์ หรือ requirement ยังไม่ชัด เช่น “ใช้ grill-with-docs ตรวจ redesign นี้กับโครงสร้าง repo และบันทึก decision ที่ย้อนกลับยาก”',
        note: 'ให้เขียน CONTEXT.md/ADR เฉพาะเมื่อมีคำศัพท์หรือ decision ที่ตกผลึกจริง และต้องตรวจ diff ของเอกสารก่อนยอมรับ',
      },
      {
        name: 'grilling',
        source: 'mattpocock / skills',
        href: 'https://www.skills.sh/mattpocock/skills/grilling',
        role: 'แกนกลางของเทคนิค interview แบบ one-question-at-a-time ที่ skills อื่นเรียกใช้เพื่อคลี่ dependency และยืนยันความเข้าใจร่วมกัน',
        install: 'npx skills add https://github.com/mattpocock/skills --skill grilling',
        use: 'เรียกตรงด้วย `/grilling` เมื่อต้องการ stress-test แผนอย่างเดียว หรือให้ `grill-me` / `grill-with-docs` เป็น entry point ตามลักษณะงาน',
        note: 'เป็น primitive ที่อยู่เบื้องหลัง ไม่ใช่ workflow แทน grill-me หรือ grill-with-docs ทุกกรณี',
      },
    ],
  },
  {
    id: 'shadcn',
    icon: Puzzle,
    eyebrow: '05 / UI COMPONENTS',
    title: 'shadcn/ui และ Stitch',
    description: 'ใช้เมื่อต้องสร้าง UI component ที่เข้ากับ design system หรือแปลง design ให้เป็นโค้ดที่ดูแลต่อได้',
    items: [
      {
        name: 'shadcn/ui',
        source: 'shadcn / ui',
        href: 'https://www.skills.sh/shadcn/ui/shadcn',
        role: 'ค้นหา ติดตั้ง และประกอบ component จาก shadcn/ui ให้เข้ากับโปรเจกต์ Tailwind และ components.json',
        install: 'pnpm dlx skills add shadcn/ui',
        use: 'เรียกใช้ด้วย “ค้นหา dialog ที่เหมาะกับโปรเจกต์นี้” หรือ “เพิ่ม button และ form โดยรักษา token เดิม”',
        note: 'Skill กับ shadcn MCP ทำงานคนละชั้น: Skill ให้หลักคิด ส่วน MCP ค้นหา/ติดตั้ง registry ได้โดยตรง',
      },
      {
        name: 'shadcn-ui จาก Google Stitch',
        source: 'google-labs-code / stitch-skills',
        href: 'https://github.com/google-labs-code/stitch-skills',
        role: 'ช่วยแปลงหน้าจอหรือแนวทางจาก Stitch ให้เป็น React component ที่ใช้ shadcn/ui',
        install: 'npx skills add https://github.com/google-labs-code/stitch-skills --skill shadcn-ui',
        use: 'เรียกใช้เมื่อมี design reference จาก Stitch แล้วต้องการให้แยกเป็น component, responsive state และไฟล์ในโปรเจกต์จริง',
        note: 'ตรวจ spacing, responsive และ accessibility หลัง generate ทุกครั้ง อย่าวางใจ output โดยไม่ QA',
      },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    eyebrow: '06 / FRONTEND · UI · UX',
    title: 'Frontend และ UI/UX',
    description: 'ใช้กำหนด visual direction, information hierarchy และตรวจว่า UI ใช้งานได้จริง ไม่ใช่แค่สวยในภาพ',
    items: [
      {
        name: 'frontend-design',
        source: 'anthropics / skills',
        href: 'https://www.skills.sh/anthropics/skills/frontend-design',
        role: 'วางทิศทาง visual, typography, palette, layout และ signature ของหน้าเว็บให้มีเอกลักษณ์',
        install: 'npx skills add https://www.skills.sh/anthropics/skills/frontend-design',
        use: 'เรียกใช้ก่อนเริ่ม redesign เพื่อให้ agentเสนอ design thesis, token, wireframe และข้อวิจารณ์ก่อนเขียนโค้ด',
      },
      {
        name: 'ui-ux-pro-max',
        source: 'nextlevelbuilder / ui-ux-pro-max-skill',
        href: 'https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max',
        role: 'ค้นหาแนวทาง style, color, typography, UX, interaction และ accessibility ตามประเภทผลิตภัณฑ์',
        install: 'npx skills add https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max',
        use: 'เรียกใช้ตอนเลือก design system หรือ audit หน้า เช่น “ตรวจ mobile layout, contrast, focus state และ touch target”',
      },
      {
        name: 'web-design-guidelines',
        source: 'vercel-labs / web-interface-guidelines',
        href: 'https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines',
        role: 'ตรวจ UI ตาม Web Interface Guidelines โดยเน้น usability, accessibility, responsive และ interaction states',
        install: 'npx skills add https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines',
        use: 'เรียกใช้หลัง implement ด้วยการระบุไฟล์หรือ pattern ที่ต้องการ review แล้วให้รายงานแบบ path:line',
      },
      {
        name: 'design-an-interface',
        source: 'mattpocock / skills',
        href: 'https://github.com/mattpocock/skills',
        role: 'ช่วยเปลี่ยน requirement ให้เป็น interface ที่มี hierarchy, states, copy และ interaction ชัดเจน',
        install: 'npx skills add https://github.com/mattpocock/skills --skill design-an-interface',
        use: 'เรียกใช้เมื่อมี requirement แต่ยังไม่มี screen structure โดยขอให้เสนอ interface contract ก่อนลง component',
      },
    ],
  },
  {
    id: 'documents',
    icon: FileText,
    eyebrow: '07 / DOCUMENTS',
    title: 'PDF และเอกสาร',
    description: 'ใช้เมื่ออ่าน PDF, สร้างเอกสาร หรือทำงานกับ PDF ที่ต้องตรวจทั้งข้อมูลและ layout',
    items: [
      {
        name: 'pdf',
        source: 'anthropics / skills',
        href: 'https://www.skills.sh/anthropics/skills/pdf',
        role: 'อ่าน, extract, สร้าง, render และตรวจ PDF โดยให้ความสำคัญกับ layout จริงของเอกสาร',
        install: 'npx skills add https://www.skills.sh/anthropics/skills/pdf',
        use: 'เรียกใช้เมื่อต้องการ “extract ตารางจาก PDF”, “สร้าง PDF one-pager” หรือ “render ตรวจทุกหน้า”',
        note: 'ถ้า layout สำคัญ ต้องตรวจด้วยภาพ ไม่พอแค่อ่านข้อความที่ extract ได้',
      },
      {
        name: 'react-pdf',
        source: 'vercel-labs / json-render',
        href: 'https://www.skills.sh/vercel-labs/json-render/react-pdf',
        role: 'สร้าง PDF จาก React/json-render specification ให้มี component และ layout ที่นำกลับมาใช้ซ้ำได้',
        install: 'npx skills add https://www.skills.sh/vercel-labs/json-render --skill react-pdf',
        use: 'เรียกใช้เมื่อมี JSON spec หรือ React component แล้วต้องการ render เป็นเอกสาร PDF พร้อมตรวจผลลัพธ์',
      },
    ],
  },
  {
    id: 'thai',
    icon: Languages,
    eyebrow: '08 / COMMUNICATION',
    title: 'Thai Interpreter',
    description: 'ใช้เป็นชั้นช่วยตีความ requirement ภาษาไทยให้ agent เข้าใจเจตนา ขอบเขต และคำที่มีความหมายเฉพาะ',
    items: [
      {
        name: 'thai-interpreter',
        source: 'nxdus / thai-interpreter',
        href: 'https://www.skills.sh/nxdus/thai-interpreter/thai-interpreter',
        role: 'แปลและ normalize prompt ภาษาไทยเป็น intent ที่ชัด พร้อมรักษาคำศัพท์ทางธุรกิจและ technical context',
        install: 'npx skills add https://www.skills.sh/nxdus/thai-interpreter/thai-interpreter',
        use: 'เรียกใช้เมื่อ requirement ภาษาไทยกำกวม หรือมีคำเฉพาะ เช่น workflow, สิทธิ์, งวดงาน และ acceptance criteria',
        note: 'ยังต้องยืนยันกับผู้ใช้เมื่อคำกำกวมกระทบ scope, เงิน, ข้อมูล หรือ production',
      },
    ],
  },
];

const mcpGroups = [
  {
    id: 'laravel-boost',
    icon: Database,
    eyebrow: 'A / LARAVEL',
    name: 'Laravel Boost',
    source: 'Official Laravel',
    href: 'https://laravel.com/docs/13.x/boost',
    role: 'MCP และ documentation API ที่ช่วยให้ agent เข้าใจ route, model, migration, config, log และ version ของ Laravel ในโปรเจกต์จริง',
    install: 'composer require laravel/boost --dev\nphp artisan boost:install',
    use: '“ใช้ Boost ตรวจ route และ model ที่เกี่ยวข้องกับ feature นี้ แล้วสรุปผลก่อนแก้”',
    note: 'รันใน Laravel project และเลือก skills ที่ตรงกับ package ที่ตรวจพบ อย่าให้ agent เดา schema จากชื่อไฟล์อย่างเดียว',
  },
  {
    id: 'shadcn-mcp',
    icon: Puzzle,
    eyebrow: 'B / COMPONENT REGISTRY',
    name: 'shadcn/ui MCP',
    source: 'Official shadcn/ui',
    href: 'https://ui.shadcn.com/docs/mcp',
    role: 'ให้ agent browse, search และติดตั้ง component จาก shadcn registry หรือ registry ภายในทีมผ่าน natural language',
    install: 'pnpm dlx shadcn@latest mcp init --client codex',
    use: '“ค้นหา card และ dialog จาก registry แล้วเพิ่มเข้าหน้า contact โดยใช้ style ของโปรเจกต์นี้”',
    note: 'Codex อาจต้องเพิ่ม config ใน ~/.codex/config.toml เองตามเอกสาร client แล้ว restart หลังแก้ config',
  },
  {
    id: 'reactbits-mcp',
    icon: Sparkles,
    eyebrow: 'C / ANIMATION',
    name: 'React Bits MCP',
    source: 'Community MCP server',
    href: 'https://github.com/ceorkm/reactbits-mcp-server',
    role: 'ค้นหา component แบบ animated จาก React Bits พร้อม source code และ demo เพื่อเลือกใช้ให้เข้ากับ UI',
    install: 'ติดตั้ง MCP server ตาม README ของ repository ที่เลือก\nแล้วเพิ่ม server เข้า config ของ Claude / Codex',
    use: '“ค้นหา animated hero ที่เหมาะกับเว็บรับงานโทน warm แล้วแสดง source, dependency และข้อจำกัด responsive”',
    note: 'มีหลาย community implementation ให้ตรวจ source, license และ dependency ก่อนนำมาใช้จริง',
  },
  {
    id: 'chrome-devtools',
    icon: MonitorCheck,
    eyebrow: 'D / BROWSER QA',
    name: 'Chrome DevTools MCP',
    source: 'Official Chrome DevTools',
    href: 'https://github.com/ChromeDevTools/chrome-devtools-mcp',
    role: 'ตรวจ DOM, console, network, performance, screenshot, accessibility และ Lighthouse จาก browser จริง',
    install: 'codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest',
    use: '“เปิด localhost:3000 ตรวจ console/network และทำ Lighthouse mobile พร้อมรายงาน issue ที่แก้ได้”',
    note: 'ต้องมี Node.js รุ่นที่รองรับและ Chrome current stable; ใช้กับข้อมูลที่อนุญาตให้ browser เข้าถึงเท่านั้น',
  },
  {
    id: 'playwright',
    icon: Search,
    eyebrow: 'E / E2E TESTING',
    name: 'Playwright MCP',
    source: 'Official Microsoft Playwright',
    href: 'https://github.com/microsoft/playwright-mcp',
    role: 'ควบคุม browser เพื่อทำ E2E, responsive test, form test และตรวจ flow แบบผู้ใช้จริง',
    install: 'codex mcp add playwright -- npx @playwright/mcp@latest',
    use: '“ทดสอบ login → กรอก form → submit → ตรวจ success state ที่ desktop และ mobile”',
    note: 'ใช้ test account และข้อมูลจำลอง แยกจาก production account เพื่อป้องกัน side effect',
  },
  {
    id: 'github',
    icon: GitPullRequest,
    eyebrow: 'F / REPOSITORY',
    name: 'GitHub MCP',
    source: 'Official GitHub MCP Server',
    href: 'https://github.com/github/github-mcp-server',
    role: 'อ่าน issue, PR, repository, workflow และข้อมูล GitHub เพื่อทำงานร่วมกับทีม',
    install: 'เก็บ GITHUB_PERSONAL_ACCESS_TOKEN ไว้นอก repo\nแล้วรัน GitHub MCP server ผ่าน Docker ตาม official config',
    use: '“อ่าน review comments ของ PR นี้ แล้วสรุปเฉพาะ actionable items โดยยังไม่แก้หรือ push”',
    note: 'ให้ token สิทธิ์น้อยที่สุด, ไม่ใส่ token ใน source/log และอย่าเปิด write toolset ถ้าไม่จำเป็น',
  },
  {
    id: 'filesystem',
    icon: FileCode2,
    eyebrow: 'G / LOCAL FILES',
    name: 'Filesystem MCP',
    source: 'Official MCP servers',
    href: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    role: 'อ่าน, เขียน, ค้นหา, list และดู metadata ของไฟล์ใน directory ที่อนุญาต',
    install: 'เพิ่ม server โดยอนุญาตเฉพาะ workspace ที่ต้องใช้\nnpx -y @modelcontextprotocol/server-filesystem /path/to/workspace',
    use: '“ค้นหาไฟล์ config ที่เกี่ยวข้อง แล้วอ่านเฉพาะไฟล์ใน workspace นี้”',
    note: 'อย่าให้สิทธิ์ home directory หรือ root กว้างเกินงาน และใช้ read-only เมื่อทำ audit',
  },
  {
    id: 'figma',
    icon: Palette,
    eyebrow: 'H / DESIGN SOURCE',
    name: 'Figma Dev Mode MCP',
    source: 'Official Figma',
    href: 'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server',
    role: 'อ่าน design, variables, components และ inspect details จาก Figma Dev Mode เพื่อส่งต่อเป็นโค้ด',
    install: 'เปิดใช้ Figma Dev Mode MCP ตามคู่มือ Figma\nจากนั้นเชื่อมต่อ MCP client ที่รองรับ',
    use: '“อ่าน frame นี้ สรุป token, spacing และ component state แล้วทำ React component ตาม design”',
    note: 'ต้องมีสิทธิ์เข้าถึงไฟล์ Figma และควรระบุ frame/version ที่ต้องการให้ชัด',
  },
  {
    id: 'pdf-reader',
    icon: FileText,
    eyebrow: 'I / PDF DATA',
    name: 'PDF Reader MCP',
    source: 'Community PDF reader MCP',
    href: 'https://github.com/SylphxAI/pdf-reader-mcp',
    role: 'extract text, search, อ่านตาราง และดึงข้อมูลจาก PDF ให้ agent ใช้งานต่อได้',
    install: 'ติดตั้ง MCP server ตาม README ของ repository\nแล้วกำหนด path หรือ resource ที่อนุญาตให้เข้าถึง',
    use: '“ค้นหาคำว่า acceptance criteria ใน PDF แล้วสรุปเลขหน้าและข้อความที่เกี่ยวข้อง”',
    note: 'ถ้าต้องรักษา layout หรือฟอร์ม ต้องใช้ PDF skill/render ตรวจภาพร่วมด้วย',
  },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-3 min-w-0 max-w-full overflow-x-auto rounded-2xl border border-[#3D1F00]/15 bg-[#24110B] p-4 font-mono text-xs leading-6 text-[#FAD4C0]">
      <code translate="no">{children}</code>
    </pre>
  );
}

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <article className="min-w-0 rounded-[1.5rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 shadow-[0_14px_35px_rgba(120,64,40,0.04)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-[-0.02em] text-[#24110B]">{item.name}</h3>
        <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-1 rounded-full border border-[#A94E43]/30 px-3 py-2 text-xs font-semibold text-[#7A3D35] transition-colors hover:border-[#A94E43] hover:bg-[#FAE4DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86858]">
          เปิดแหล่งอ้างอิง <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A94E43]">{item.source}</p>

      <dl className="mt-5 min-w-0 space-y-4 text-sm leading-7">
        <div className="min-w-0"><dt className="font-semibold text-[#24110B]">ทำหน้าที่อะไร</dt><dd className="min-w-0 text-[#7A4838]">{item.role}</dd></div>
        <div className="min-w-0"><dt className="font-semibold text-[#24110B]">ติดตั้งอย่างไร</dt><dd className="min-w-0"><CodeBlock>{item.install}</CodeBlock></dd></div>
        <div className="min-w-0"><dt className="font-semibold text-[#24110B]">เรียกใช้งานอย่างไร</dt><dd className="min-w-0 text-[#7A4838]">{item.use}</dd></div>
      </dl>

      {item.note && <p className="mt-5 rounded-xl border border-[#E8C99A]/70 bg-[#FFF0CC]/55 px-3 py-2 text-xs leading-6 text-[#7A4838]"><span className="font-semibold text-[#8B4B3F]">หมายเหตุ: </span>{item.note}</p>}
    </article>
  );
}

function GroupSection({ group }: { group: typeof skillGroups[number] }) {
  const Icon = group.icon;

  return (
    <section id={group.id} className="scroll-mt-28 border-t border-[#E8B8A8]/55 pt-12">
      <header className="max-w-3xl">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#24110B] text-[#FAD4C0]"><Icon aria-hidden="true" className="h-4 w-4" /></span><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A94E43]">{group.eyebrow}</p></div>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">{group.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#7A4838] sm:text-base">{group.description}</p>
      </header>
      <div className="mt-7 grid min-w-0 gap-5">{group.items.map((item) => <GuideCard key={item.name} item={item} />)}</div>
    </section>
  );
}

function McpSection({ item }: { item: typeof mcpGroups[number] }) {
  const Icon = item.icon;

  return (
    <section id={item.id} className="scroll-mt-28 border-t border-[#E8B8A8]/55 pt-10">
      <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#24110B] text-[#FAD4C0]"><Icon aria-hidden="true" className="h-4 w-4" /></span><div className="min-w-0"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A94E43]">{item.eyebrow}</p><h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#24110B]">{item.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#7A4838]">{item.source}</p></div></div>
      <div className="mt-5 grid min-w-0 gap-4 rounded-[1.5rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 sm:grid-cols-2 sm:p-6">
        <div className="min-w-0"><p className="text-sm font-semibold text-[#24110B]">ทำหน้าที่อะไร</p><p className="mt-2 text-sm leading-7 text-[#7A4838]">{item.role}</p><a href={item.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-10 items-center gap-1 text-xs font-semibold text-[#7A3D35] hover:text-[#24110B]">อ่านเอกสารต้นทาง <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a></div>
        <div className="min-w-0"><p className="text-sm font-semibold text-[#24110B]">ติดตั้งอย่างไร</p><CodeBlock>{item.install}</CodeBlock><p className="mt-5 text-sm font-semibold text-[#24110B]">เรียกใช้งานอย่างไร</p><p className="mt-2 text-sm leading-7 text-[#7A4838]">{item.use}</p></div>
      </div>
      <p className="mt-3 text-xs leading-6 text-[#7A4838]"><span className="font-semibold text-[#8B4B3F]">หมายเหตุ: </span>{item.note}</p>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main id="content" className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <a href="#article" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#24110B] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#FFF7E8]">ข้ามไปยังเนื้อหาบทความ</a>
      <header className="relative overflow-hidden rounded-[2rem] border border-[#24110B]/20 bg-[#24110B] px-6 py-12 text-[#FFF7E8] shadow-[0_28px_70px_rgba(42,16,16,0.14)] sm:px-10 sm:py-16 lg:px-14">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[34px] border-[#C86858]/20" />
        <div className="pointer-events-none absolute -bottom-32 left-20 h-64 w-64 rounded-full bg-[#7AA36F]/15 blur-3xl" />
        <div className="relative max-w-4xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-[#E8C4A0]">KUMA notes / agent workflow</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl">Claude / Codex Config<br /><span className="text-[#F3B19B]">Skills และ MCP ใช้ยังไง?</span></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E8C4A0] sm:text-base">คู่มือรวม Skill และ MCP สำหรับงาน Laravel, React, UI/UX, planning, PDF, browser QA และ repository ตั้งแต่เลือกใช้ ติดตั้ง ไปจนถึงเขียน prompt ให้ agent ทำงานได้ตรงจุด</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#FAD4C0]"><span className="rounded-full border border-[#FAD4C0]/25 px-3 py-2">Skills 20 รายการ</span><span className="rounded-full border border-[#FAD4C0]/25 px-3 py-2">MCP 9 รายการ</span><span className="rounded-full border border-[#FAD4C0]/25 px-3 py-2">อัปเดต 22 ก.ค. 2026</span></div>
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="lg:sticky lg:top-28">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A94E43]">On this page</p>
          <nav aria-label="สารบัญบทความ" className="mt-4 grid gap-1 text-sm">
            <a href="#start" className="rounded-lg px-3 py-2 text-[#7A4838] hover:bg-[#FAE4DC] hover:text-[#24110B]">เริ่มต้น: Skill vs MCP</a>
            <a href="#using" className="rounded-lg px-3 py-2 text-[#7A4838] hover:bg-[#FAE4DC] hover:text-[#24110B]">วิธีเรียกใช้</a>
            <a href="#install-playwright" className="rounded-lg px-3 py-1.5 pl-6 text-xs text-[#8B5E3C] hover:bg-[#FAE4DC] hover:text-[#24110B]">ติดตั้ง Playwright ทั้งชุด</a>
            <a href="#agent-instructions" className="rounded-lg px-3 py-1.5 pl-6 text-xs text-[#8B5E3C] hover:bg-[#FAE4DC] hover:text-[#24110B]">Codex / Claude instructions</a>
            <a href="#skills" className="rounded-lg px-3 py-2 text-[#7A4838] hover:bg-[#FAE4DC] hover:text-[#24110B]">Skills</a>
            {skillGroups.map((group) => <a key={group.id} href={`#${group.id}`} className="rounded-lg px-3 py-1.5 pl-6 text-xs text-[#8B5E3C] hover:bg-[#FAE4DC] hover:text-[#24110B]">{group.title}</a>)}
            <a href="#mcps" className="rounded-lg px-3 py-2 text-[#7A4838] hover:bg-[#FAE4DC] hover:text-[#24110B]">MCP</a>
            <a href="#workflow" className="rounded-lg px-3 py-2 text-[#7A4838] hover:bg-[#FAE4DC] hover:text-[#24110B]">Workflow แนะนำ</a>
          </nav>
        </aside>

        <article id="article" className="min-w-0 scroll-mt-28">
          <section id="start" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-[#A94E43]"><BookOpen aria-hidden="true" className="h-4 w-4" /><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em]">Start here</p></div>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">Skill กับ MCP ต่างกันอย่างไร?</h2>
            <p className="mt-4 text-sm leading-8 text-[#7A4838] sm:text-base">ให้นึกว่า <strong className="text-[#24110B]">Skill คือคู่มือการคิด</strong> ส่วน <strong className="text-[#24110B]">MCP คือช่องทางให้ agent ต่อกับเครื่องมือ</strong> Skill บอกวิธีวิเคราะห์และมาตรฐานที่ควรใช้ ส่วน MCP ทำให้ agent อ่านไฟล์ ค้นหา component เปิด browser หรือเรียก API ภายนอกได้</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#24110B] text-[#FAD4C0]"><Wrench aria-hidden="true" className="h-4 w-4" /></span><h3 className="mt-4 text-lg font-bold text-[#24110B]">Skill = วิธีทำงาน</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">ติดตั้งเป็นไฟล์คำแนะนำ เช่น `SKILL.md` แล้ว agent เลือกใช้เมื่อโจทย์ตรงกับ description</p></div>
              <div className="rounded-[1.5rem] border border-[#E8B8A8]/65 bg-[#FFF0CC]/70 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C86858] text-white"><Terminal aria-hidden="true" className="h-4 w-4" /></span><h3 className="mt-4 text-lg font-bold text-[#24110B]">MCP = เครื่องมือที่เรียกได้</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">ติดตั้ง server และเพิ่มใน config ของ client จากนั้น agent จะเห็น tools/resources แล้วเรียกตามงาน</p></div>
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-[#24110B]/15 bg-[#24110B] p-5 text-[#FAD4C0] sm:p-6"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">ติดตั้ง Skill แบบทั่วไป</p><CodeBlock>{'npx skills add <skills.sh-url-or-owner/repo>\n\n# ถ้า repository มีหลาย skill\nnpx skills add <owner/repo> --skill <skill-name>'}</CodeBlock><p className="mt-3 text-xs leading-6 text-[#E8C4A0]">Skills CLI รองรับทั้งชื่อ owner/repo และ direct URL ของ skill page; หลังติดตั้งให้ restart agent ถ้า skill ยังไม่ปรากฏ</p></div>

            <section id="using" className="mt-8 scroll-mt-28 rounded-[1.5rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 sm:p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A94E43]">After install / วิธีเรียกใช้</p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#24110B]">ติดตั้งแล้วต้องเรียกใช้ยังไง?</h2>
              <p className="mt-3 text-sm leading-7 text-[#7A4838]">Skill มักถูกเลือกใช้อัตโนมัติเมื่อโจทย์ตรงกับคำอธิบาย แต่การระบุชื่อ skill หรือ MCP ใน prompt จะช่วยลดความกำกวม โดยเฉพาะงานที่มีความเสี่ยงหรือมีหลายเครื่องมือให้เลือก</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['1. ระบุชื่อ', '“ใช้ laravel-security ตรวจ feature นี้ก่อนแก้”'],
                  ['2. ระบุขอบเขต', '“อ่านเฉพาะ routes, controller และ test ที่เกี่ยวข้อง”'],
                  ['3. ระบุผลลัพธ์', '“รายงาน path, severity, patch และคำสั่ง test”'],
                ].map(([title, text]) => <div key={title} className="rounded-xl border border-[#E8B8A8]/55 bg-[#FFF0CC]/45 p-3"><p className="text-sm font-semibold text-[#24110B]">{title}</p><p className="mt-1 text-xs leading-6 text-[#7A4838]">{text}</p></div>)}
              </div>
              <CodeBlock>{'ใช้ skill frontend-design วาง design plan ก่อนเขียนหน้าใหม่\n\nใช้ Chrome DevTools MCP เปิด http://localhost:3000/blog/rbruskill\nตรวจ console, network, accessibility และ Lighthouse mobile\n\nใช้ Playwright MCP ทดสอบเปิดบทความ → กดสารบัญ → ตรวจว่า URL เปลี่ยนเป็น #laravel\nและไม่มี horizontal scroll'}</CodeBlock>
              <p className="mt-3 text-xs leading-6 text-[#7A4838]">หลังเพิ่ม MCP ให้ restart Claude หรือ Codex ก่อนใช้งาน; ใน Claude Code ใช้ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">/mcp</code> เพื่อตรวจสถานะ ส่วน Codex ให้ตรวจในรายการ MCP ที่เชื่อมต่ออยู่ แล้วเรียกผ่าน prompt ตามตัวอย่างด้านบน</p>

              <section id="install-playwright" className="mt-8 scroll-mt-28 border-t border-[#E8B8A8]/55 pt-7">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A94E43]">Install all four / project or machine</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#24110B]">Prompt ติดตั้ง Playwright skills ทั้งชุด</h3>
                <p className="mt-3 text-sm leading-7 text-[#7A4838]">Skills CLI ใช้ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">--global</code> หรือ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">-g</code> สำหรับระดับเครื่อง; ถ้าไม่ใส่ flag จะติดตั้งใน project scope จาก directory ปัจจุบัน. ตัวอย่างนี้เลือกทั้ง Codex และ Claude Code และใช้ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">--copy</code> เพื่อให้ไฟล์แยกจาก symlink และตรวจสอบได้ง่าย</p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF0CC]/45 p-4">
                    <p className="text-sm font-bold text-[#24110B]">ติดตั้งลงโปรเจกต์ปัจจุบัน</p>
                    <p className="mt-1 text-xs leading-6 text-[#7A4838]">รันจาก root ของ repo; เหมาะกับ skill ที่ต้องแชร์กับทีมและผูกกับโปรเจกต์นี้</p>
                    <CodeBlock>{'cd /path/to/project\n\nnpx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/github/awesome-copilot --skill playwright-generate-test --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/github/awesome-copilot --skill playwright-explore-website --agent codex --agent claude-code --copy --yes\n\nnpx skills list'}</CodeBlock>
                  </div>
                  <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF0CC]/45 p-4">
                    <p className="text-sm font-bold text-[#24110B]">ติดตั้งระดับเครื่อง</p>
                    <p className="mt-1 text-xs leading-6 text-[#7A4838]">ใส่ <code className="rounded bg-[#F3D1C0] px-1 py-0.5 font-mono text-[11px]">-g</code>; skill จะพร้อมใช้ข้ามทุกโปรเจกต์ของ user ตาม agent ที่เลือก</p>
                    <CodeBlock>{'npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli --global --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/currents-dev/playwright-best-practices-skill --skill playwright-best-practices --global --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/github/awesome-copilot --skill playwright-generate-test --global --agent codex --agent claude-code --copy --yes\nnpx skills add https://github.com/github/awesome-copilot --skill playwright-explore-website --global --agent codex --agent claude-code --copy --yes\n\nnpx skills list --global'}</CodeBlock>
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  <div className="min-w-0 rounded-2xl border border-[#24110B]/15 bg-[#24110B] p-5 text-[#FAD4C0]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">Prompt / project scope</p>
                    <CodeBlock>{'ติดตั้ง Playwright skills ทั้ง 4 ตัวนี้ลงในโปรเจกต์ปัจจุบัน\n\n1. https://www.skills.sh/microsoft/playwright-cli/playwright-cli\n2. https://www.skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices\n3. https://www.skills.sh/github/awesome-copilot/playwright-generate-test\n4. https://www.skills.sh/github/awesome-copilot/playwright-explore-website\n\nทำงานจาก project root และ target เฉพาะ Codex กับ Claude Code\nใช้ Skills CLI ที่รองรับ direct URL หรือ GitHub source พร้อม --skill\nหลังติดตั้งตรวจด้วย npx skills list ว่าครบทั้ง 4 ตัวและตรวจไฟล์ SKILL.md ใน project scope\nห้ามแก้ source code, ห้ามติดตั้ง MCP, ห้าม commit และห้าม push\nถ้าคำสั่งหรือ source ใดติดตั้งไม่ได้ ให้หยุดและรายงาน error จริงพร้อมคำสั่งที่ลอง'}</CodeBlock>
                  </div>
                  <div className="min-w-0 rounded-2xl border border-[#24110B]/15 bg-[#24110B] p-5 text-[#FAD4C0]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">Prompt / machine-wide scope</p>
                    <CodeBlock>{'ติดตั้ง Playwright skills ทั้ง 4 ตัวนี้ให้ใช้งานระดับเครื่องสำหรับ Codex กับ Claude Code\n\n1. https://www.skills.sh/microsoft/playwright-cli/playwright-cli\n2. https://www.skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices\n3. https://www.skills.sh/github/awesome-copilot/playwright-generate-test\n4. https://www.skills.sh/github/awesome-copilot/playwright-explore-website\n\nใช้ Skills CLI โดยใส่ --global และ --copy\nหลังติดตั้งตรวจ npx skills list --global และยืนยันว่า Codex เห็นใน ~/.codex/skills และ Claude Code เห็นใน ~/.claude/skills\nห้ามแก้ repo ปัจจุบัน, ห้ามติดตั้ง MCP, ห้าม commit และห้าม push\nถ้า global path ของ agent รุ่นที่ติดตั้งต่างจากนี้ ให้รายงาน path จริงแทนการเดา'}</CodeBlock>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[#C86858]/30 bg-[#F3D1C0] p-4">
                  <p className="text-sm font-bold text-[#24110B]">หลังติดตั้งให้เรียกใช้เป็นลำดับ</p>
                  <p className="mt-2 text-sm leading-7 text-[#7A4838]">เริ่มจาก <strong className="text-[#24110B]">playwright-explore-website</strong> เพื่อหา flow → ใช้ <strong className="text-[#24110B]">playwright-generate-test</strong> สร้าง test จาก scenario ที่ยืนยันแล้ว → ใช้ <strong className="text-[#24110B]">playwright-best-practices</strong> review locator และ assertion → ใช้ <strong className="text-[#24110B]">playwright-cli</strong> ตรวจ flow แบบ interactive หรือ debug console/network</p>
                  <CodeBlock>{'ใช้ playwright-explore-website สำรวจ http://localhost:3000/blog/rbruskill\nสรุป 3-5 flows พร้อม locator และ expected outcome โดยห้ามแก้ข้อมูลจริง\nจากนั้นใช้ playwright-generate-test สร้าง TypeScript test ลง tests/ และรันให้ผ่าน\nใช้ playwright-best-practices review test ที่สร้าง ตรวจ selector, wait, isolation และ assertion\nสุดท้ายใช้ playwright-cli เปิดหน้าเดียวกัน ตรวจ snapshot, console และ requests\nห้าม commit หรือ push จนกว่าจะรายงานผลทดสอบและ issue ที่ยังเหลือ'}</CodeBlock>
                </div>
              </section>
            </section>
          </section>

          <section id="agent-instructions" className="scroll-mt-28 mt-14 rounded-[2rem] border border-[#E8B8A8]/65 bg-[#FFF0CC]/55 p-6 sm:p-9">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">Custom instructions / agent rules</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">คำสั่งกลางสำหรับ Codex และ Claude</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#7A4838]">โปรเจกต์นี้ใช้ไฟล์แยกตาม agent แต่ใช้หลักการชุดเดียวกัน: Codex อ่าน <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">AGENTS.md</code> ส่วน Claude อ่าน <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">CLAUDE.md</code> ทั้งสองไฟล์มี communication style, clarification, MCP-first, engineering rules, skill routing และ verification rules แล้ว</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5"><h3 className="text-lg font-bold text-[#24110B]">งานเล็ก / scope ชัด</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">เลือก <strong className="text-[#24110B]">grill-me</strong> เพื่อถามเฉพาะจุดที่ยังต้องตัดสินใจ และให้ agent ค้นคำตอบจาก codebase ก่อนถามผู้ใช้</p><CodeBlock>{'ใช้ grill-me ตรวจ requirement นี้ก่อนแก้โค้ด\nถามทีละคำถามที่จำเป็นเท่านั้น\nเมื่อ shared understanding ชัดแล้วสรุป scope และค่อยเริ่ม implement'}</CodeBlock></div>
              <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5"><h3 className="text-lg font-bold text-[#24110B]">งานใหญ่ / หลายไฟล์ / ยังไม่ชัด</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">เลือก <strong className="text-[#24110B]">grill-with-docs</strong> เพื่อผูกแผนกับ domain model และบันทึกคำศัพท์หรือ decision ที่จำเป็นลงเอกสาร</p><CodeBlock>{'ใช้ grill-with-docs ตรวจแผนนี้กับ codebase, CONTEXT.md และ ADR ที่มีอยู่\nถามทีละข้อและเสนอคำตอบแนะนำ\nสร้างหรือแก้ CONTEXT.md/ADR เฉพาะเมื่อมี decision ที่ตกผลึกจริง'}</CodeBlock></div>
            </div>
            <div className="mt-5 rounded-2xl border border-[#C86858]/30 bg-[#F3D1C0] p-5"><p className="text-sm font-bold text-[#24110B]">ติดตั้ง utility skills ทั้ง 3 ตัวพร้อมกัน</p><p className="mt-2 text-sm leading-7 text-[#7A4838]">รันจาก project root เพื่อให้ใช้กับ Codex และ Claude Code ในโปรเจกต์นี้; เติม <code className="rounded bg-[#FFF8F0] px-1.5 py-0.5 font-mono text-[11px] text-[#6F3D32]">--global</code> ถ้าต้องการใช้ข้ามทุกโปรเจกต์</p><CodeBlock>{'npx skills add https://github.com/mattpocock/skills --skill grill-me --skill grill-with-docs --skill grilling --agent codex --agent claude-code --copy --yes\n\n# machine-wide\nnpx skills add https://github.com/mattpocock/skills --skill grill-me --skill grill-with-docs --skill grilling --global --agent codex --agent claude-code --copy --yes'}</CodeBlock></div>
            <div className="mt-5 rounded-2xl bg-[#24110B] p-5 text-[#FAD4C0]"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">Shared instruction files</p><CodeBlock>{'Codex:  AGENTS.md\nClaude: CLAUDE.md\n\nPrimitive ที่เรียกตรงได้: /grilling\nEntry points: grill-me สำหรับงานเล็ก, grill-with-docs สำหรับงานใหญ่\n\nห้าม commit, push, deploy หรือ external action เว้นแต่ผู้ใช้สั่ง\nหลังแก้เสร็จต้องตรวจผลจริงด้วย lint, build และ QA ตามความเสี่ยง'}</CodeBlock></div>
          </section>

          <div id="skills" className="scroll-mt-28 mt-14 border-t border-[#E8B8A8]/55 pt-12"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">Skills / operating knowledge</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">Skills ที่ควรมีในชุดทำงาน</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#7A4838]">เลือกติดตั้งตามงาน ไม่จำเป็นต้องลงทุกตัวพร้อมกัน และควรให้ agent อ่าน skill ที่เกี่ยวข้องก่อนเริ่ม implement หรือ audit</p></div>
          <div className="mt-2 space-y-12">{skillGroups.map((group) => <GroupSection key={group.id} group={group} />)}</div>

          <section id="mcps" className="scroll-mt-28 mt-16 border-t border-[#E8B8A8]/55 pt-12">
            <header className="max-w-3xl"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#24110B] text-[#FAD4C0]"><MonitorCheck aria-hidden="true" className="h-4 w-4" /></span><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A94E43]">MCP / connected tools</p></div><h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">MCP ที่ช่วยให้ agent ทำงานกับโลกจริง</h2><p className="mt-3 text-sm leading-7 text-[#7A4838] sm:text-base">MCP แต่ละตัวต้องเพิ่มเข้า client config แล้ว restart client การเรียกใช้งานส่วนใหญ่ทำผ่านภาษาธรรมชาติ โดยระบุ scope, path, environment และสิ่งที่ห้ามทำให้ชัด</p></header>
            <div className="mt-8 space-y-10">{mcpGroups.map((item) => <McpSection key={item.id} item={item} />)}</div>
          </section>

          <section id="workflow" className="scroll-mt-28 mt-16 rounded-[2rem] border border-[#C86858]/30 bg-[#F3D1C0] p-6 sm:p-9">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4B3F]">Recommended workflow</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B]">เรียกใช้เป็นลำดับแบบนี้</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['01', 'ทำความเข้าใจ repo', 'Filesystem MCP หรือ Laravel Boost อ่านโครงสร้าง, route, model, config และข้อจำกัดก่อน'],
                ['02', 'วางแนวทาง', 'ใช้ Laravel patterns, frontend-design หรือ UI/UX Pro Max ช่วย review ทางเลือกและ acceptance criteria'],
                ['03', 'ลงมือสร้าง', 'ให้ specialist skill และ shadcn/React skill ช่วย implement โดยแก้เฉพาะไฟล์ที่อยู่ใน scope'],
                ['04', 'ตรวจของจริง', 'ใช้ Chrome DevTools และ Playwright ตรวจ DOM, console, network, responsive, form และ Lighthouse'],
              ].map(([number, title, description]) => <div key={number} className="rounded-2xl border border-[#8B4B3F]/20 bg-[#FFF8F0]/55 p-4"><p className="font-mono text-xs text-[#A94E43]">{number}</p><h3 className="mt-2 text-base font-bold text-[#24110B]">{title}</h3><p className="mt-1 text-sm leading-7 text-[#7A4838]">{description}</p></div>)}
            </div>
            <div className="mt-7 rounded-2xl bg-[#24110B] p-5 text-[#FAD4C0]"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C4A0]">ตัวอย่าง prompt ที่ดี</p><p className="mt-3 text-sm leading-7">“ใช้ Laravel security และ patterns ตรวจ feature นี้ก่อนแก้โค้ด อ่านไฟล์ที่เกี่ยวข้องเท่านั้น สรุป risk เป็น path และ severity จากนั้นเสนอ patch พร้อม test ที่ต้องรัน ห้าม commit หรือ deploy”</p></div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-[#E8B8A8]/65 bg-[#FFF0CC]/55 p-6 sm:p-9">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">More notes / ARTICLES</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">บทความอื่นที่น่าอ่าน</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link href="/blog/opencode-opendesign" className="group min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 transition hover:-translate-y-1 hover:border-[#C86858]/60">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A94E43]">Alternative tools</p>
                <h3 className="mt-3 text-lg font-bold text-[#24110B]">OpenCode + Open Design</h3>
                <p className="mt-2 text-sm leading-6 text-[#7A4838]">ทางเลือกสำหรับคนที่อยากทำงานแบบ local-first และใช้ provider ของตัวเอง</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3D35]">อ่านบทความ <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
              <Link href="/blog/obsidian" className="group min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 transition hover:-translate-y-1 hover:border-[#C86858]/60">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A94E43]">Knowledge system</p>
                <h3 className="mt-3 text-lg font-bold text-[#24110B]">จดแต่ไม่ต้องจำด้วย Obsidian</h3>
                <p className="mt-2 text-sm leading-6 text-[#7A4838]">สร้างคลังความคิดที่ค้นเจอ เชื่อมโยงได้ และพกพาเป็นไฟล์ Markdown</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3D35]">อ่านบทความ <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
              <Link href="/blog/docmd" className="group min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 transition hover:-translate-y-1 hover:border-[#C86858]/60">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A94E43]">Handoff docs</p>
                <h3 className="mt-3 text-lg font-bold text-[#24110B]">ส่งต่องานด้วย docmd</h3>
                <p className="mt-2 text-sm leading-6 text-[#7A4838]">เปลี่ยน Markdown ให้เป็นเอกสารที่อ่านง่าย ค้นหาได้ และตรวจสอบต่อได้</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3D35]">อ่านบทความ <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-4 border-t border-[#E8B8A8]/55 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between"><Link href="/" className="inline-flex items-center gap-2 font-semibold text-[#7A3D35] hover:text-[#24110B]"><ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" />กลับหน้าแรก</Link><Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#7A3D35] hover:text-[#24110B]">คุยเรื่องโปรเจกต์ <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></section>
        </article>
      </div>
    </main>
  );
}
