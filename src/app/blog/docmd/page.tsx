import type { Metadata } from 'next';
import ArticleShell, { ArticleCode, ArticleSection } from '@/components/Blog/ArticleShell';

export const metadata: Metadata = {
  title: 'ทำเอกสารส่งต่อด้วย docmd',
  description: 'ใช้ docmd เปลี่ยน Markdown ให้เป็น documentation site สำหรับ handoff, onboarding, runbook และ AI context',
  alternates: { canonical: '/blog/docmd' },
};

const toc = [
  { href: '#why', label: 'ทำไมต้องทำเอกสารส่งต่อ' },
  { href: '#what', label: 'docmd ทำหน้าที่อะไร' },
  { href: '#setup', label: 'ติดตั้งและ preview' },
  { href: '#handoff', label: 'โครงสร้าง handoff doc' },
  { href: '#workflow', label: 'ส่งต่อแบบตรวจสอบได้' },
];

export default function DocmdArticle() {
  return (
    <ArticleShell
      eyebrow="Documentation / handoff"
      title="ทำเอกสารส่งต่อด้วย docmd"
      description="เอา Markdown ที่ทีมเขียนอยู่แล้วมาทำเป็น documentation site ที่ค้นได้ อ่านง่าย และส่งต่อให้คนหรือ AI agent ใช้ต่อได้โดยไม่ต้องเริ่มจาก framework ใหญ่"
      tags={['docmd', 'Markdown', 'Handoff', 'AI context']}
      toc={toc}
      sources={[
        { label: 'docmd official site', href: 'https://docmd.io/' },
        { label: 'docmd quick start', href: 'https://docs.docmd.io/getting-started/quick-start/' },
        { label: 'docmd CLI commands', href: 'https://docs.docmd.io/04/cli-commands/' },
        { label: 'docmd Markdown linking', href: 'https://docs.docmd.io/content/syntax/linking/' },
      ]}
    >
      <ArticleSection id="why" eyebrow="01 / HANDOFF PRINCIPLE" title="เอกสารส่งต่อที่ดีต้องทำให้คนใหม่เริ่มงานได้">
        <p>Handoff ไม่ใช่การ dump ทุกอย่างลงไฟล์ แต่คือการตอบคำถามที่คนรับช่วงต้องใช้ตัดสินใจ: งานนี้มีเป้าหมายอะไร, ตอนนี้อยู่ตรงไหน, ไฟล์ไหนคือ source of truth, ตรวจอย่างไร และอะไรยังเป็นความเสี่ยง</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Context', 'ทำไมงานนี้เกิดขึ้น และข้อจำกัดอะไรที่ห้ามละเมิด'],
            ['Current state', 'สิ่งที่เสร็จแล้ว, สิ่งที่ยังค้าง และหลักฐานล่าสุด'],
            ['How to verify', 'คำสั่ง test, route, browser flow หรือ screenshot ที่ใช้ยืนยัน'],
            ['Next move', 'ขั้นตอนถัดไปที่เล็กพอให้คนรับช่วงเริ่มได้ทันที'],
          ].map(([title, description]) => <div key={title} className="rounded-2xl border border-[#E8B8A8]/55 bg-[#FFF8F0]/70 p-4"><h3 className="font-bold text-[#24110B]">{title}</h3><p className="mt-1 text-sm leading-7 text-[#7A4838]">{description}</p></div>)}
        </div>
      </ArticleSection>

      <ArticleSection id="what" eyebrow="02 / WHAT IS DOCMD" title="docmd ทำหน้าที่อะไร">
        <p><strong className="text-[#24110B]">docmd</strong> เป็น documentation engine แบบ zero-config ที่อ่าน Markdown แล้วสร้าง static documentation site พร้อม navigation, search, SEO และ AI context. จุดเด่นสำหรับ handoff คือเอกสารยังเป็นไฟล์ Markdown ธรรมดา จึง review ด้วย Git และแก้ด้วย editor ใดก็ได้</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>ใช้กับโฟลเดอร์ Markdown ที่มีอยู่แล้ว ไม่จำเป็นต้องเปลี่ยนไปใช้ React หรือ Vue</li>
          <li>มี local full-text search และสร้าง <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">llms.txt</code> / <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">llms-full.txt</code> เพื่อเป็น context ให้ agent</li>
          <li>มี native MCP server สำหรับให้ agent search, read และ validate เอกสารจาก local workspace</li>
          <li>รองรับ callout, tabs, cards, Mermaid, OpenAPI, versioning และ deployment ผ่าน configuration เมื่อจำเป็น</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="setup" eyebrow="03 / QUICK START" title="ติดตั้งและ preview เอกสาร">
        <p>เริ่มในโฟลเดอร์ที่มี Markdown. docmd จะตรวจโฟลเดอร์เอกสารหรือไฟล์ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">.md</code> แล้วสร้าง navigation ให้. ถ้าพอร์ต 3000 ถูกใช้อยู่ ให้ระบุพอร์ตใหม่หรือใช้พอร์ตที่ CLI เลือกให้อัตโนมัติ</p>
        <ArticleCode>{`cd /path/to/documentation

# dev preview + watch files
npx @docmd/core dev

# build static site
npx @docmd/core build

# ผลลัพธ์เริ่มต้นอยู่ที่
./site/`}</ArticleCode>
        <p>อย่าเริ่มจากการทำหน้าเว็บสำหรับเอกสารเองถ้ายังไม่มีปัญหาเรื่อง layout. ให้เขียน Markdown ให้โครงสร้างดี แล้วค่อยเพิ่ม <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">docmd.config.js</code> เมื่อจำเป็นต้องกำหนด theme, output, version หรือ plugin</p>
      </ArticleSection>

      <ArticleSection id="handoff" eyebrow="04 / HANDOFF TEMPLATE" title="โครงสร้าง doc ที่คนอื่นเปิดแล้วไปต่อได้">
        <p>แยกเอกสารตามคำถาม ไม่ใช่ตามคนเขียน. ใช้ชื่อไฟล์ที่บอกลำดับการอ่าน และเก็บ decision ที่ย้อนกลับยากไว้เป็นเอกสารเฉพาะ</p>
        <ArticleCode>{`docs/
├── 00-overview.md       # เป้าหมาย, audience, scope
├── 01-current-state.md  # สิ่งที่เสร็จและหลักฐานล่าสุด
├── 02-architecture.md   # โครงสร้างระบบและ contract
├── 03-runbook.md        # คำสั่ง dev, test, deploy, rollback
├── 04-decisions.md      # decision และ trade-off ที่สำคัญ
├── 05-handoff.md        # งานค้าง, owner, next steps, blockers
└── assets/              # ภาพประกอบและไฟล์ที่อ้างอิง`}</ArticleCode>
        <ArticleCode>{`# Handoff: เพิ่มหน้า blog article

## Goal
เพิ่มบทความ 3 route โดยไม่เพิ่มรายการใน navbar

## Current state
- Routes: /blog/opencode-opendesign, /blog/obsidian, /blog/docmd
- npm run lint: pass
- npm run build: pass

## Files changed
- src/components/Blog/ArticleShell.tsx
- src/app/blog/opencode-opendesign/page.tsx

## Verify
1. เปิดแต่ละ route ใน browser
2. ตรวจ console และ mobile horizontal overflow
3. ตรวจ metadata และ external source links

## Next steps
- เพิ่ม article index ถ้าต้องการให้ค้นพบจาก /blog
- ตรวจเนื้อหาและอัปเดต source links ก่อน deploy`}</ArticleCode>
      </ArticleSection>

      <ArticleSection id="workflow" eyebrow="05 / DOCUMENTATION LOOP" title="ส่งต่อแบบตรวจสอบได้">
        <ol className="list-decimal space-y-3 pl-5"><li><strong className="text-[#24110B]">เขียนพร้อมโค้ด:</strong> ทุก feature ที่เปลี่ยน behavior ต้องอัปเดต overview, runbook หรือ decision ที่เกี่ยวข้อง</li><li><strong className="text-[#24110B]">ตรวจจาก clean checkout:</strong> ให้คนรับช่วงทำตามคำสั่งใน doc โดยไม่พึ่งความจำของผู้เขียน</li><li><strong className="text-[#24110B]">สร้าง site:</strong> รัน docmd dev เพื่ออ่านเหมือนผู้ใช้ และ docmd build เพื่อตรวจ output</li><li><strong className="text-[#24110B]">ส่งต่อหลักฐาน:</strong> แนบ commit/branch, test output, URL, known issues และ next step ที่มี owner</li></ol>
        <ArticleCode>{`ใช้ docmd ตรวจเอกสารใน docs/ นี้
ตรวจว่า navigation อ่านตามลำดับได้
ค้นคำว่า "Current state", "Verify", "Next steps" ในทุก handoff
ตรวจ broken links, code command ที่ไม่ตรงกับ package.json และ secret ที่เผลอหลุด
สรุปไฟล์ที่ขาดข้อมูล พร้อมเสนอ patch เฉพาะเอกสาร
ห้ามแก้ source code และห้าม deploy จนกว่าจะได้รับอนุญาต`}</ArticleCode>
      </ArticleSection>
    </ArticleShell>
  );
}
