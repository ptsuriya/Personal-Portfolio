export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  /** Who the article is written for; business guides are shown first. */
  audience: 'business' | 'dev';
  tags: string[];
  /** ISO date (YYYY-MM-DD). */
  published: string;
  illustration?: string;
}

export const articles: ArticleSummary[] = [
  {
    slug: 'why-business-needs-website',
    title: 'ทำไมธุรกิจของคุณถึงต้องมีเว็บไซต์',
    description:
      'เหตุผลที่ร้านค้า สวนผลไม้ ร้านพลอย ที่พัก และธุรกิจในจันทบุรีควรมีเว็บไซต์ของตัวเอง ทั้งเรื่องความน่าเชื่อถือ การถูกค้นเจอบน Google และการปิดการขาย พร้อมเช็กลิสต์ก่อนเริ่มทำเว็บ',
    audience: 'business',
    tags: ['ผู้ประกอบการจันทบุรี', 'เว็บไซต์ธุรกิจ', 'Google'],
    published: '2026-09-17',
    illustration: '/image/illustrations/page-work.webp',
  },
  {
    slug: 'website-seo-chanthaburi',
    title: 'ทำเว็บไซต์ให้ติด SEO ฉบับผู้ประกอบการจันทบุรี',
    description:
      'วิธีวางเว็บไซต์ธุรกิจให้ Google เข้าใจและค้นเจอ ตั้งแต่เลือกคำค้นท้องถิ่น โครงสร้างหน้า Title และ Meta Description ความเร็วบนมือถือ Google Business Profile ไปจนถึงการวัดผลด้วย Search Console',
    audience: 'business',
    tags: ['SEO', 'Local SEO', 'ผู้ประกอบการจันทบุรี'],
    published: '2026-09-17',
    illustration: '/image/illustrations/page-process.webp',
  },
  {
    slug: 'rbruskill',
    title: 'RBRU Skill: Claude / Codex Config และ MCP',
    description: 'วิธีติดตั้งและเรียกใช้ Skills กับ MCP สำหรับงาน Laravel, React, UI/UX, PDF และ browser QA',
    audience: 'dev',
    tags: ['Claude', 'Codex', 'MCP'],
    published: '2026-07-22',
  },
  {
    slug: 'opencode-opendesign',
    title: 'ถ้าไม่ใช้ Claude: OpenCode + Open Design',
    description: 'ทางเลือกแบบ open-source และ local-first สำหรับ coding agent และงานออกแบบด้วย OpenCode กับ Open Design',
    audience: 'dev',
    tags: ['OpenCode', 'Open Design'],
    published: '2026-07-22',
  },
  {
    slug: 'obsidian',
    title: 'จดแต่ไม่ต้องจำด้วย Obsidian',
    description: 'แนวทางใช้ Obsidian เป็น external memory ด้วย Markdown, properties, internal links และ workflow ที่ค้นคืนได้',
    audience: 'dev',
    tags: ['Obsidian', 'Markdown'],
    published: '2026-07-22',
  },
  {
    slug: 'docmd',
    title: 'ทำเอกสารส่งต่อด้วย docmd',
    description: 'ใช้ docmd เปลี่ยน Markdown ให้เป็น documentation site สำหรับ handoff, onboarding, runbook และ AI context',
    audience: 'dev',
    tags: ['docmd', 'Documentation'],
    published: '2026-07-22',
  },
];

export const businessArticles = articles.filter((article) => article.audience === 'business');
