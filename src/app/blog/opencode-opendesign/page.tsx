import type { Metadata } from 'next';
import ArticleShell, { ArticleCode, ArticleSection } from '@/components/Blog/ArticleShell';

export const metadata: Metadata = {
  title: 'ถ้าไม่ใช้ Claude: OpenCode + Open Design',
  description: 'ทางเลือกแบบ open-source และ local-first สำหรับ coding agent และงานออกแบบด้วย OpenCode กับ Open Design',
  alternates: { canonical: '/blog/opencode-opendesign' },
};

const toc = [
  { href: '#overview', label: 'เลือกเครื่องมือให้ถูกชั้น' },
  { href: '#opencode', label: 'OpenCode ทำหน้าที่อะไร' },
  { href: '#opendesign', label: 'Open Design ทำหน้าที่อะไร' },
  { href: '#setup', label: 'ติดตั้งและเริ่มใช้งาน' },
  { href: '#workflow', label: 'Workflow แนะนำ' },
];

export default function OpenCodeOpenDesignArticle() {
  return (
    <ArticleShell
      eyebrow="Alternative tools / coding + design"
      title="ถ้าไม่ใช้ Claude: OpenCode + Open Design"
      description="แยกให้ชัดว่า OpenCode คือ coding agent สำหรับทำงานกับโค้ด ส่วน Open Design คือ design workspace ที่ใช้ coding agent ที่คุณมีอยู่มาช่วยสร้างและตรวจ design artifact"
      tags={['OpenCode', 'Open Design', 'Local-first', 'BYOK']}
      toc={toc}
      sources={[
        { label: 'OpenCode official docs', href: 'https://opencode.ai/en/docs' },
        { label: 'Open Design official site', href: 'https://opendesigner.io/' },
        { label: 'Open Design GitHub', href: 'https://github.com/nexu-io/open-design' },
      ]}
    >
      <ArticleSection id="overview" eyebrow="01 / เลือกตามงาน" title="สองตัวนี้ไม่ได้ทำหน้าที่เหมือนกัน">
        <p><strong className="text-[#24110B]">OpenCode</strong> คือ coding agent แบบ open-source ที่ทำงานผ่าน terminal, desktop หรือ IDE extension และรองรับการเลือก provider/model หลายแบบ. <strong className="text-[#24110B]">Open Design</strong> คือ workspace สำหรับเปลี่ยน brief ให้เป็น design artifact โดยใช้ coding-agent CLI ที่มีอยู่เป็น engine</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A94E43]">Coding agent</p><h3 className="mt-3 text-xl font-bold text-[#24110B]">OpenCode</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">อ่าน repo, อธิบายโค้ด, วางแผน, แก้ไฟล์, รันคำสั่ง และตรวจผลใน terminal</p></div>
          <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/65 bg-[#FFF0CC]/60 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A94E43]">Design workspace</p><h3 className="mt-3 text-xl font-bold text-[#24110B]">Open Design</h3><p className="mt-2 text-sm leading-7 text-[#7A4838]">ล็อก brief, เลือก visual direction, ใช้ design system และ preview artifact ก่อนส่งต่อเป็นไฟล์</p></div>
        </div>
        <p className="rounded-xl border border-[#C86858]/25 bg-[#F3D1C0] px-4 py-3 text-sm leading-7 text-[#7A4838]">สรุปสั้น ๆ: ใช้ OpenCode เมื่อโจทย์คือ “ช่วยทำระบบ” และใช้ Open Design เมื่อโจทย์คือ “ช่วยทำ/ตรวจ design artifact” โดยทั้งคู่ยังต้องใช้ model provider และ API key ตามที่คุณเลือก</p>
      </ArticleSection>

      <ArticleSection id="opencode" eyebrow="02 / OPEN SOURCE CODING AGENT" title="OpenCode ทำหน้าที่อะไร">
        <p>OpenCode เป็น agent สำหรับทำงานใน project context. จุดสำคัญคือคุณเลือก provider ได้เอง จึงเหมาะกับคนที่ไม่ต้องการผูก workflow ไว้กับ Claude เพียงรายเดียว</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>ถามความสัมพันธ์ของไฟล์หรือ flow โดยอ้างไฟล์ด้วย <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">@path/to/file</code></li>
          <li>เริ่มจาก plan เมื่อ feature มีหลายจุด และใช้ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">/undo</code> หรือ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">/redo</code> เมื่อต้องย้อนหรือทำซ้ำการแก้ไข</li>
          <li>ระบุ scope, ไฟล์ที่อนุญาต, คำสั่งตรวจ และสิ่งที่ห้ามทำทุกครั้งที่ให้ agent แก้โค้ด</li>
        </ul>
        <ArticleCode>{`cd /path/to/project
opencode

# ใน TUI
/connect

อธิบายโครงสร้างโปรเจกต์นี้โดยอ่านเฉพาะ src/ และ package.json
ยังไม่ต้องแก้ไฟล์ สรุป entry points, data flow และคำสั่ง test ที่พบ`}</ArticleCode>
      </ArticleSection>

      <ArticleSection id="opendesign" eyebrow="03 / ARTIFACT-FIRST DESIGN" title="Open Design ทำหน้าที่อะไร">
        <p>Open Design ใช้ coding agent ที่ติดตั้งอยู่บนเครื่อง เช่น OpenCode, Codex หรือ CLI อื่นที่รองรับ มาช่วยผ่านวงจร brief → direction → plan → artifact preview. แนวคิดสำคัญคือ design system และ skill เป็นไฟล์ที่อ่าน แก้ และ version-control ได้</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Brief first', 'เก็บ surface, audience, tone, brand และข้อจำกัดก่อนให้ agent render'],
            ['Design system as Markdown', 'เก็บ token, typography, spacing, component และ anti-patterns ใน DESIGN.md'],
            ['Preview before ship', 'ตรวจ artifact ใน sandbox ก่อน export HTML, PDF, PPTX หรือ ZIP'],
            ['Local data', 'โปรเจกต์และ SQLite อยู่ในเครื่อง จึงควรจัดการ backup และ secret แยกจาก repo'],
          ].map(([title, description]) => <div key={title} className="rounded-2xl border border-[#E8B8A8]/55 bg-[#FFF8F0]/70 p-4"><h3 className="font-bold text-[#24110B]">{title}</h3><p className="mt-1 text-sm leading-7 text-[#7A4838]">{description}</p></div>)}
        </div>
      </ArticleSection>

      <ArticleSection id="setup" eyebrow="04 / SETUP" title="ติดตั้งและเริ่มใช้งาน">
        <p>ติดตั้ง OpenCode แบบ global แล้วเปิดใน project ที่ต้องการ. ถ้าใช้ macOS/Linux ใช้ installer หรือ Homebrew ได้; ถ้าต้องการใช้ Node.js ใช้ npm ได้ตามเอกสารทางการ</p>
        <ArticleCode>{`# OpenCode: เลือกวิธีใดวิธีหนึ่ง
curl -fsSL https://opencode.ai/install | bash

# หรือ
npm install -g opencode-ai

# หรือ macOS/Linux
brew install anomalyco/tap/opencode

# Open Design: รัน local workspace ตาม quickstart
git clone https://github.com/nexu-io/open-design.git
cd open-design
pnpm install
pnpm tools-dev run web`}</ArticleCode>
        <p>Open Design ต้องใช้ Node และ pnpm ตาม version ที่โครงการระบุ. หลัง daemon ทำงาน ให้ตรวจว่า OpenCode อยู่ใน <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">PATH</code> หรือใช้ BYOK endpoint ที่คุณอนุญาต. อย่าวาง API key ไว้ใน repo หรือ prompt</p>
      </ArticleSection>

      <ArticleSection id="workflow" eyebrow="05 / SAFE WORKFLOW" title="Workflow ที่เหมาะกับงานจริง">
        <ol className="list-decimal space-y-3 pl-5">
          <li><strong className="text-[#24110B]">OpenCode สำรวจ repo:</strong> ให้สรุปโครงสร้างและข้อจำกัดก่อนแก้</li>
          <li><strong className="text-[#24110B]">Open Design ล็อก brief:</strong> ระบุผู้ใช้, เป้าหมาย, content hierarchy, brand และ responsive states</li>
          <li><strong className="text-[#24110B]">เลือก artifact:</strong> ตรวจ HTML/preview และ design system ก่อนนำไปต่อใน Next.js หรือส่งให้ทีม dev</li>
          <li><strong className="text-[#24110B]">QA:</strong> เปิดหน้าใน browser, ตรวจ console, responsive, accessibility และ diff ของไฟล์ก่อน commit</li>
        </ol>
        <ArticleCode>{`ใช้ OpenCode อ่าน repo นี้ก่อน ห้ามแก้ไฟล์
จากนั้นใช้ Open Design ช่วยทำ landing page brief นี้
เป้าหมาย: เว็บไซต์รับงานสำหรับธุรกิจขนาดเล็ก
ส่งออก: design direction, DESIGN.md, responsive states และ artifact preview
หลังสร้างเสร็จให้ตรวจ contrast, keyboard focus, mobile overflow และสรุปไฟล์ที่เปลี่ยน
ห้ามใส่ API key ในไฟล์ และห้าม commit/push`}</ArticleCode>
      </ArticleSection>
    </ArticleShell>
  );
}
