import type { Metadata } from 'next';
import ArticleShell, { ArticleCode, ArticleSection } from '@/components/Blog/ArticleShell';

export const metadata: Metadata = {
  title: 'จดแต่ไม่ต้องจำด้วย Obsidian',
  description: 'แนวทางใช้ Obsidian เป็น external memory ด้วย Markdown, properties, internal links และ workflow ที่ค้นคืนได้',
  alternates: { canonical: '/blog/obsidian' },
};

const toc = [
  { href: '#idea', label: 'จดเพื่อคืนพื้นที่สมอง' },
  { href: '#vault', label: 'เริ่มจาก Vault ที่เรียบง่าย' },
  { href: '#note', label: 'รูปแบบ note ที่ค้นคืนได้' },
  { href: '#links', label: 'เชื่อมความรู้ด้วย links' },
  { href: '#workflow', label: 'Workflow จดและทบทวน' },
];

export default function ObsidianArticle() {
  return (
    <ArticleShell
      eyebrow="Knowledge system / external memory"
      title="จดแต่ไม่ต้องจำด้วย Obsidian"
      description="เปลี่ยนเรื่องที่ต้องจำให้กลายเป็นไฟล์ที่ค้นได้ เชื่อมกันได้ และส่งต่อให้ตัวเองหรือ agent ใช้ต่อได้ โดยไม่ต้องสร้างระบบซับซ้อนตั้งแต่วันแรก"
      tags={['Obsidian', 'Markdown', 'Knowledge base', 'External memory']}
      toc={toc}
      sources={[
        { label: 'Obsidian: how data is stored', href: 'https://obsidian.md/help/data-storage' },
        { label: 'Obsidian: internal links', href: 'https://obsidian.md/help/links' },
        { label: 'Obsidian: properties', href: 'https://obsidian.md/help/properties' },
      ]}
    >
      <ArticleSection id="idea" eyebrow="01 / THE PRINCIPLE" title="จดเพื่อคืนพื้นที่สมอง ไม่ใช่สร้างงานเพิ่ม">
        <p>Obsidian เหมาะกับการเป็น <strong className="text-[#24110B]">external memory</strong>: ความรู้เก็บเป็นไฟล์ Markdown แบบ plain text ในโฟลเดอร์ที่เรียกว่า vault. คุณจึงเปิด แก้ ค้นหา หรือ version-control ด้วยเครื่องมืออื่นได้ด้วย ไม่ได้ถูกขังอยู่ในฐานข้อมูลปิด</p>
        <div className="grid gap-4 sm:grid-cols-3">{[
          ['Capture', 'จดสิ่งที่เกิดขึ้นทันที โดยยังไม่ต้องจัดหมวดให้สมบูรณ์'],
          ['Connect', 'เชื่อม note ที่เกี่ยวข้องด้วย wikilink และดู backlinks'],
          ['Recall', 'ค้นคืนจากชื่อ, properties, tags, headings และบริบทที่เชื่อมไว้'],
        ].map(([title, description]) => <div key={title} className="rounded-2xl border border-[#E8B8A8]/55 bg-[#FFF8F0]/70 p-4"><h3 className="font-bold text-[#24110B]">{title}</h3><p className="mt-1 text-sm leading-7 text-[#7A4838]">{description}</p></div>)}</div>
        <p className="rounded-xl border border-[#C86858]/25 bg-[#F3D1C0] px-4 py-3 text-sm leading-7 text-[#7A4838]">กติกาที่ช่วยให้จดได้นาน: note ใหม่ต้องมี next action หรือ link อย่างน้อยหนึ่งอย่าง ไม่ต้องจัดระเบียบทุกอย่างตอน capture</p>
      </ArticleSection>

      <ArticleSection id="vault" eyebrow="02 / VAULT DESIGN" title="เริ่มจาก Vault ที่เรียบง่าย">
        <p>อย่าเริ่มด้วย plugin จำนวนมาก ให้สร้างโครงสร้างที่สื่อความหมายและค้นได้ก่อน. Vault เป็น folder บน local file system และ Obsidian จะสร้างโฟลเดอร์ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">.obsidian</code> สำหรับ settings ของ vault</p>
        <ArticleCode>{'KUMA-Vault/\n├── 00 Inbox/          # สิ่งที่ยังไม่ triage\n├── 10 Projects/       # งานที่มีจุดจบ เช่น client หรือ feature\n├── 20 Areas/          # เรื่องที่ต้องดูแลต่อเนื่อง\n├── 30 Knowledge/      # หลักการ, reference, notes ที่ใช้ซ้ำ\n├── 90 Archive/        # งานที่จบหรือไม่ active แล้ว\n└── 99 Attachments/    # ภาพ, PDF และไฟล์แนบ'}</ArticleCode>
        <p>ตั้งชื่อ folder ตามการใช้งานจริงของคุณ ไม่ต้องเลียนแบบระบบคนอื่น. ถ้าซิงก์ด้วย Git ให้ระวังไฟล์ workspace ที่เปลี่ยนบ่อย และอย่าเก็บ secret, token หรือข้อมูลส่วนตัวที่ไม่ควร sync ไว้ใน vault</p>
      </ArticleSection>

      <ArticleSection id="note" eyebrow="03 / NOTE FORMAT" title="รูปแบบ note ที่ค้นคืนได้">
        <p>ใช้ properties แบบ YAML สำหรับข้อมูลสั้นและเป็นโครงสร้าง เช่น type, status, project, created และ next. เนื้อหาหลักยังคงเป็น Markdown ที่อ่านได้โดยคนและ agent</p>
        <ArticleCode>{'---\ntype: decision\nstatus: active\nproject: personal-portfolio\ntags:\n  - architecture\n  - handoff\ncreated: 2026-07-22\nnext: ตรวจบน mobile และบันทึกผล QA\n---\n\n# เลือกใช้ static article routes\n\n## Context\nบทความต้องมี metadata แยก route และไม่เพิ่มใน navbar\n\n## Decision\nใช้ static route ใต้ `src/app/blog/`\n\n## Evidence\n- `npm run build` ผ่าน\n- browser ตรวจ console และ mobile overflow แล้ว\n\n## Next\n- เพิ่ม related links ในคลังบทความ'}</ArticleCode>
        <p>Properties ควรเป็น atomic data ไม่ใช่ย่อหน้าที่ยาว. รายละเอียด เหตุผล และหลักฐานให้อยู่ใน body เพื่อให้อ่านง่ายและไม่ทำให้ metadata กลายเป็นกองข้อความที่ใช้ซ้ำไม่ได้</p>
      </ArticleSection>

      <ArticleSection id="links" eyebrow="04 / LINKING" title="เชื่อมความรู้ด้วย links">
        <p>ใช้ <code className="rounded bg-[#F3D1C0] px-1.5 py-0.5 font-mono text-xs">[[ชื่อ note]]</code> เมื่อต้องการเชื่อม note ภายใน vault. Obsidian รองรับทั้ง Wikilinks และ Markdown links และสามารถอัปเดต internal links เมื่อ rename note หากเปิด setting ที่เกี่ยวข้อง</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/55 bg-[#FFF8F0]/70 p-4"><h3 className="font-bold text-[#24110B]">ลิงก์ไปยัง note</h3><ArticleCode>{'[[Projects/Personal Portfolio]]\n[[Knowledge/Playwright QA]]'}</ArticleCode></div>
          <div className="min-w-0 rounded-2xl border border-[#E8B8A8]/55 bg-[#FFF8F0]/70 p-4"><h3 className="font-bold text-[#24110B]">ลิงก์ไปยัง heading</h3><ArticleCode>{'[[Personal Portfolio#Decision]]\n[[Playwright QA#Mobile checks]]'}</ArticleCode></div>
        </div>
        <p>ลิงก์ทุกอันควรตอบคำถามว่า “ทำไม note นี้เกี่ยวข้องกับ note นั้น” ถ้าเป็นแค่การยัด link เพื่อให้ graph สวย ระบบจะโตเร็วแต่ค้นคืนยาก</p>
      </ArticleSection>

      <ArticleSection id="workflow" eyebrow="05 / DAILY LOOP" title="Workflow จดและทบทวนแบบไม่เหนื่อย">
        <ol className="list-decimal space-y-3 pl-5"><li><strong className="text-[#24110B]">Capture:</strong> จดลง `00 Inbox` ภายในหนึ่งนาที ไม่หยุดเพื่อจัด format</li><li><strong className="text-[#24110B]">Clarify:</strong> เปลี่ยนชื่อ note ให้ค้นเจอ และเติม context ที่ขาด</li><li><strong className="text-[#24110B]">Connect:</strong> เพิ่ม link ไปยัง project, area หรือความรู้เดิม</li><li><strong className="text-[#24110B]">Commit:</strong> เติม next action หรือ decision ที่ทำให้ note มีประโยชน์ต่อการกลับมาอ่าน</li><li><strong className="text-[#24110B]">Review:</strong> สัปดาห์ละครั้งจัด Inbox, archive ของจบ และตรวจ note ที่ยังมี status active</li></ol>
        <ArticleCode>{'เปิด Obsidian แล้วสร้าง note ใหม่ใน 00 Inbox\nจดสิ่งที่เพิ่งเรียนรู้โดยไม่ต้องจัดหมวด\nก่อนปิดวัน: ตั้งชื่อ note, เติม type/status, link ไปยัง project ที่เกี่ยวข้อง\nทุกสัปดาห์: เคลียร์ Inbox และสรุปเฉพาะสิ่งที่ต้องใช้ต่อ\n\nกติกาสำหรับ agent:\nอ่านเฉพาะ vault path ที่อนุญาต\nห้ามแก้ note ที่ไม่อยู่ใน scope\nห้ามสรุปข้อมูลลับลงใน note ใหม่\nรายงานไฟล์ที่อ่านและไฟล์ที่เปลี่ยนทุกครั้ง'}</ArticleCode>
      </ArticleSection>
    </ArticleShell>
  );
}
