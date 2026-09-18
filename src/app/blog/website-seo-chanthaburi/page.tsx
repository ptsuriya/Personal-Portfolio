import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleShell, { ArticleCallout, ArticleCode, ArticleSection } from '@/components/Blog/ArticleShell';
import { startingRate } from '@/data/site';

const slug = 'website-seo-chanthaburi';
const title = 'ทำเว็บไซต์ให้ติด SEO ฉบับผู้ประกอบการจันทบุรี';
const description =
  'วิธีวางเว็บไซต์ธุรกิจให้ Google เข้าใจและค้นเจอ ตั้งแต่เลือกคำค้นท้องถิ่น โครงสร้างหน้า Title และ Meta Description ความเร็วบนมือถือ Google Business Profile ไปจนถึงการวัดผลด้วย Search Console';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['ทำเว็บให้ติด SEO', 'SEO จันทบุรี', 'ทำเว็บไซต์ติด Google', 'Local SEO', 'รับทำเว็บไซต์ จันทบุรี', 'Google Business Profile'],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: 'article', title, description, url: `/blog/${slug}`, publishedTime: '2026-09-17' },
};

const toc = [
  { href: '#truth', label: 'SEO ไม่ใช่เวทมนตร์' },
  { href: '#how', label: 'Google ค้นเจอเว็บอย่างไร' },
  { href: '#keywords', label: 'เลือกคำค้นแบบท้องถิ่น' },
  { href: '#structure', label: 'หนึ่งหน้า หนึ่งเรื่อง' },
  { href: '#onpage', label: 'Title, Description และหัวข้อ' },
  { href: '#technical', label: 'พื้นฐานเทคนิคที่ต้องมี' },
  { href: '#speed', label: 'เร็วและใช้ง่ายบนมือถือ' },
  { href: '#local', label: 'Google Business Profile' },
  { href: '#measure', label: 'วัดผลด้วย Search Console' },
  { href: '#checklist', label: 'เช็กลิสต์ก่อนเปิดเว็บ' },
];

const strong = 'font-semibold text-kuma-bark';
const link = 'font-semibold text-kuma-amber-deep underline decoration-kuma-gold decoration-2 underline-offset-4 hover:text-kuma-bark';
const code = 'rounded bg-kuma-sand px-1.5 py-0.5 font-mono text-[13px] text-kuma-cocoa';

const keywordExamples = [
  { business: 'สวนผลไม้', examples: 'ทุเรียนส่งตรงจากสวน จันทบุรี, มังคุดจันทบุรี สั่งออนไลน์' },
  { business: 'ร้านพลอย', examples: 'ร้านพลอย จันทบุรี, รับทำแหวนพลอย จันทบุรี' },
  { business: 'ที่พัก', examples: 'ที่พัก แหลมเสด็จ, รีสอร์ต จันทบุรี ติดทะเล' },
  { business: 'ของฝาก', examples: 'ของฝากจันทบุรี, ทุเรียนทอด จันทบุรี ส่งทั่วประเทศ' },
  { business: 'บริการ', examples: 'รับติดตั้งแอร์ จันทบุรี, รับทำเว็บไซต์ จันทบุรี' },
];

const checklist = [
  'ทุกหน้ามี Title และ Meta Description ที่ไม่ซ้ำกัน',
  'แต่ละหน้ามีหัวข้อหลัก (H1) หนึ่งอันที่บอกเรื่องของหน้านั้น',
  'ข้อมูลสำคัญเป็นข้อความ ไม่ได้อยู่ในรูปภาพอย่างเดียว',
  'รูปภาพถูกบีบขนาดและมีคำอธิบายภาพ (alt)',
  'เปิดบนมือถือแล้วอ่านง่าย กดปุ่มโทรหรือติดต่อได้ทันที',
  'มี sitemap.xml และ robots.txt ไม่ได้บล็อกหน้าที่ต้องการให้ติด Google',
  'เว็บใช้ HTTPS และแต่ละหน้ามี canonical URL',
  'ชื่อร้าน ที่อยู่ เบอร์โทร ตรงกันทั้งบนเว็บ Google Business Profile และโซเชียล',
  'ยืนยันเว็บใน Google Search Console และส่ง sitemap แล้ว',
  'มีแผนอัปเดตเนื้อหา เช่น ก่อนฤดูผลไม้หรือช่วงเทศกาลท่องเที่ยว',
];

export default function WebsiteSeoChanthaburiArticle() {
  return (
    <ArticleShell
      eyebrow="คู่มือผู้ประกอบการจันทบุรี"
      title={title}
      description={description}
      tags={['SEO', 'Local SEO', 'ผู้ประกอบการจันทบุรี', 'Google Search Console']}
      toc={toc}
      slug={slug}
      published="2026-09-17"
      illustration="/image/illustrations/page-process.webp"
      sources={[
        { label: 'Google Search Central: How Search works', href: 'https://developers.google.com/search/docs/fundamentals/how-search-works' },
        { label: 'Google Search Central: SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
        { label: 'Google Search Central: Do you need an SEO?', href: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo' },
        { label: 'Creating helpful, reliable, people-first content', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
        { label: 'Title links in Google Search', href: 'https://developers.google.com/search/docs/appearance/title-link' },
        { label: 'Control your snippets (meta description)', href: 'https://developers.google.com/search/docs/appearance/snippet' },
        { label: 'Sitemaps overview', href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview' },
        { label: 'Mobile-first indexing best practices', href: 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing' },
        { label: 'LocalBusiness structured data', href: 'https://developers.google.com/search/docs/appearance/structured-data/local-business' },
        { label: 'web.dev: Web Vitals', href: 'https://web.dev/articles/vitals' },
        { label: 'Google Business Profile: local ranking', href: 'https://support.google.com/business/answer/7091' },
        { label: 'Google Search Console', href: 'https://search.google.com/search-console/about' },
      ]}
    >
      <ArticleSection id="truth" eyebrow="เริ่มจากความจริง" title="SEO ไม่ใช่เวทมนตร์ และไม่มีใครการันตีอันดับ 1 ได้">
        <p>
          SEO (Search Engine Optimization) คือการทำให้ Google เข้าใจเว็บไซต์ของคุณ และเห็นว่าเว็บนั้นตอบสิ่งที่คนค้นหาได้ดี
          ผลลัพธ์ต้องใช้เวลา ต่างจากการลงโฆษณาที่จ่ายเงินแล้วเห็นผลทันที แต่เมื่อเว็บติดอันดับแล้ว ลูกค้าจะเข้ามาได้ต่อเนื่องโดยไม่ต้องจ่ายต่อคลิก
        </p>
        <p>
          Google เองแนะนำว่า ถ้ามีคนรับประกันว่าจะทำให้เว็บขึ้นอันดับแรกได้ ให้หาคนอื่นแทน สิ่งที่ทำได้จริงคือวาง
          <span className={strong}>พื้นฐานให้ถูกตั้งแต่ตอนสร้างเว็บ</span> แล้วค่อยพัฒนาเนื้อหาไปเรื่อย ๆ
        </p>
      </ArticleSection>

      <ArticleSection id="how" eyebrow="พื้นฐาน" title="Google ค้นเจอเว็บของคุณได้อย่างไร">
        <p>Google ทำงานเป็น 3 ขั้น:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li><span className={strong}>Crawling</span> โปรแกรมของ Google ตามลิงก์และ sitemap ไปเจอหน้าเว็บ</li>
          <li><span className={strong}>Indexing</span> อ่านข้อความ รูป และข้อมูลในหน้า แล้วเก็บไว้ในระบบ</li>
          <li><span className={strong}>Serving</span> เมื่อมีคนค้นหา Google เลือกหน้าที่เกี่ยวข้องและมีคุณภาพที่สุดมาแสดง</li>
        </ol>
        <p>
          ข้อผิดพลาดที่พบบ่อยในธุรกิจท้องถิ่นคือ<span className={strong}>ใส่ราคา เมนู หรือรายละเอียดสินค้าไว้ในรูปภาพอย่างเดียว</span>{' '}
          คนอ่านได้ แต่ Google เข้าใจได้น้อยกว่าข้อความจริง ข้อมูลสำคัญจึงควรพิมพ์เป็นข้อความบนหน้าเว็บด้วยเสมอ
        </p>
      </ArticleSection>

      <ArticleSection id="keywords" eyebrow="คำค้นหา" title="เลือกคำค้นแบบที่ลูกค้าในจันทบุรีพิมพ์จริง">
        <p>
          เริ่มจากถามว่าลูกค้าจะพิมพ์อะไรตอนหาธุรกิจแบบคุณ สำหรับธุรกิจท้องถิ่น คำที่ได้ผลมักเป็น
          <span className={strong}> สินค้าหรือบริการ + จังหวัด อำเภอ หรือสถานที่</span>
        </p>
        <div className="overflow-x-auto rounded-2xl border-2 border-kuma-bark bg-white">
          <table className="w-full min-w-[32rem] text-left text-[15px]">
            <thead className="bg-kuma-honey text-kuma-bark">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">ประเภทธุรกิจ</th>
                <th scope="col" className="px-4 py-3 font-semibold">ตัวอย่างคำค้น</th>
              </tr>
            </thead>
            <tbody>
              {keywordExamples.map((row) => (
                <tr key={row.business} className="border-t border-kuma-line">
                  <td className="px-4 py-3 font-medium text-kuma-bark">{row.business}</td>
                  <td className="px-4 py-3 text-kuma-clay">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5">
          <li>ลองพิมพ์คำใน Google แล้วดูคำแนะนำที่ขึ้นมาอัตโนมัติ และหัวข้อ “คำถามที่เกี่ยวข้อง”</li>
          <li>ถ้าขายให้ผู้ซื้อต่างประเทศหรือนักท่องเที่ยว ให้ทำหน้าภาษาอังกฤษแยก เช่น Chanthaburi durian หรือ Chanthaburi gems</li>
          <li>ใช้คำค้นอย่างเป็นธรรมชาติ ไม่ต้องใส่ซ้ำหลายรอบ การยัดคำซ้ำ ๆ ขัดกับนโยบายสแปมของ Google</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="structure" eyebrow="โครงสร้างเว็บ" title="หนึ่งหน้า หนึ่งเรื่องหลัก">
        <p>
          หน้าที่พูดทุกเรื่องปนกันจะแข่งกับคำค้นไหนได้ไม่ชัด ให้แยกหน้าตามสิ่งที่ลูกค้าค้นหา เช่น แยกหน้าทุเรียน มังคุด และผลไม้แปรรูป
          หรือแยกหน้าห้องพักแต่ละแบบ แล้วเชื่อมถึงกันด้วยเมนูและลิงก์ภายในเว็บ
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>URL อ่านเข้าใจได้ เช่น <code className={code}>/products/durian</code> ดีกว่า <code className={code}>/p?id=1832</code></li>
          <li>ทุกหน้าสำคัญเข้าถึงได้จากเมนูหรือลิงก์ ไม่เกิน 2–3 คลิกจากหน้าแรก</li>
          <li>ลิงก์ภายในใช้ข้อความที่บอกปลายทาง เช่น “ดูราคาทุเรียนส่งตรงจากสวน” แทน “คลิกที่นี่”</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="onpage" eyebrow="ในหน้าเว็บ" title="Title, Meta Description, หัวข้อ และรูปภาพ">
        <p>
          <span className={strong}>Title</span> คือชื่อหน้าที่มักแสดงเป็นหัวข้อสีน้ำเงินใน Google ควรสั้น ชัด และไม่ซ้ำกันทุกหน้า
          ส่วน <span className={strong}>Meta Description</span> คือคำอธิบายสั้น ๆ ที่ Google อาจนำไปแสดงใต้หัวข้อ ช่วยให้คนตัดสินใจกดเข้าเว็บ
        </p>
        <ArticleCode>{`<!-- ตัวอย่างสำหรับหน้าสินค้าของสวนผลไม้ -->
<title>ทุเรียนส่งตรงจากสวน จันทบุรี | สวนตัวอย่าง</title>
<meta
  name="description"
  content="สั่งทุเรียนจากสวนในจันทบุรี คัดทุกลูกก่อนส่ง จัดส่งทั่วประเทศ พร้อมตารางฤดูกาลผลไม้"
/>`}</ArticleCode>
        <ul className="list-disc space-y-2 pl-5">
          <li>ใช้หัวข้อหลัก (H1) หนึ่งอันต่อหน้า แล้วแบ่งเนื้อหาด้วยหัวข้อย่อย</li>
          <li>ตั้งชื่อไฟล์รูปและใส่คำอธิบายภาพ (alt) ที่บอกว่าในรูปคืออะไร</li>
          <li>ไม่ต้องใส่ meta keywords เพราะ Google Search ไม่ได้ใช้แท็กนี้แล้ว</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="technical" eyebrow="เทคนิค" title="พื้นฐานเทคนิคที่เว็บธุรกิจควรมีตั้งแต่วันแรก">
        <ul className="list-disc space-y-2 pl-5">
          <li><span className={strong}>HTTPS</span> ให้เว็บปลอดภัยและไม่ขึ้นคำเตือนในเบราว์เซอร์</li>
          <li><span className={strong}>sitemap.xml</span> รายการหน้าทั้งหมดที่ช่วยให้ Google เจอหน้าใหม่ได้เร็วขึ้น</li>
          <li><span className={strong}>robots.txt</span> ต้องไม่บล็อกหน้าที่คุณอยากให้ติด Google</li>
          <li><span className={strong}>Canonical URL</span> บอก Google ว่าหน้าไหนคือหน้าหลัก เมื่อเนื้อหาเดียวกันเปิดได้หลาย URL</li>
          <li><span className={strong}>Structured data</span> ข้อมูลที่อ่านง่ายสำหรับ Google เช่น ประเภทธุรกิจ ที่อยู่ และเวลาเปิดปิด</li>
        </ul>
        <p>ตัวอย่าง structured data แบบ LocalBusiness สำหรับร้านในจันทบุรี (แทนข้อมูลตัวอย่างด้วยข้อมูลจริงของร้าน):</p>
        <ArticleCode>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ร้านตัวอย่าง จันทบุรี",
  "url": "https://www.example.com",
  "telephone": "+66-00-000-0000",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "เมืองจันทบุรี",
    "addressRegion": "จันทบุรี",
    "addressCountry": "TH"
  },
  "openingHours": "Mo-Su 08:00-18:00"
}
</script>`}</ArticleCode>
        <p>ถ้าให้คนอื่นทำเว็บให้ ลองถามตรง ๆ ว่าเว็บมีสิ่งเหล่านี้หรือยัง เพราะเพิ่มทีหลังมักยุ่งกว่าวางไว้ตั้งแต่ต้น</p>
      </ArticleSection>

      <ArticleSection id="speed" eyebrow="ประสบการณ์ผู้ใช้" title="เว็บต้องเร็วและใช้ง่ายบนมือถือ">
        <p>
          Google ใช้<span className={strong}>เว็บเวอร์ชันมือถือ</span>ในการจัดทำดัชนีและจัดอันดับ (mobile-first indexing)
          ถ้าบนมือถือข้อมูลขาดหาย ตัวหนังสือเล็ก หรือปุ่มกดยาก เว็บจะเสียเปรียบตั้งแต่ต้น
        </p>
        <p>ค่าที่ใช้วัดประสบการณ์ผู้ใช้ (Core Web Vitals) และเกณฑ์ที่ถือว่าดี:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><span className={strong}>LCP</span> เนื้อหาหลักโหลดเสร็จภายใน 2.5 วินาที</li>
          <li><span className={strong}>INP</span> กดแล้วหน้าเว็บตอบสนองภายใน 200 มิลลิวินาที</li>
          <li><span className={strong}>CLS</span> หน้าไม่กระตุกหรือเลื่อนเองระหว่างโหลด ค่าไม่เกิน 0.1</li>
        </ul>
        <p>ตัวการที่ทำให้เว็บธุรกิจช้าบ่อยที่สุดคือรูปขนาดใหญ่ที่ไม่ได้บีบ สไลด์โชว์หลายภาพบนหน้าแรก และปลั๊กอินที่ไม่ได้ใช้</p>
      </ArticleSection>

      <ArticleSection id="local" eyebrow="Local SEO" title="Google Business Profile คู่กับเว็บไซต์">
        <p>
          สำหรับคำค้นแบบ “ใกล้ฉัน” หรือมีชื่อพื้นที่ Google จะแสดงร้านบนแผนที่ด้วย Google ระบุว่าผลการค้นหาท้องถิ่นอิงจาก
          <span className={strong}> ความเกี่ยวข้อง ระยะทาง และความเป็นที่รู้จัก</span> ของธุรกิจ
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>กรอกข้อมูลใน Google Business Profile ให้ครบ ทั้งหมวดหมู่ เวลาเปิดปิด รูปถ่าย และลิงก์เว็บไซต์</li>
          <li>ใช้ชื่อร้าน ที่อยู่ และเบอร์โทรให้ตรงกันทุกที่ ทั้งบนเว็บ Google Maps และเพจโซเชียล</li>
          <li>ขอรีวิวจากลูกค้าจริง และตอบรีวิวอย่างสม่ำเสมอ</li>
          <li>ให้เว็บไซต์มีหน้าติดต่อพร้อมแผนที่และข้อมูลการเดินทาง</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="measure" eyebrow="วัดผล" title="ใช้ Google Search Console ดูว่าเว็บไปถึงไหนแล้ว">
        <p>Google Search Console เป็นเครื่องมือฟรีที่ช่วยให้เห็นสิ่งที่เดาไม่ได้จากหน้าเว็บ:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>หน้าไหนติด Google แล้ว และหน้าไหนยังมีปัญหา</li>
          <li>คนค้นด้วยคำอะไรก่อนเข้าเว็บ และแสดงในอันดับเท่าไร</li>
          <li>ส่ง sitemap และขอให้ Google ตรวจหน้าใหม่</li>
        </ul>
        <p>
          ตั้งเวลาดูเดือนละครั้งก็พอ แล้วใช้คำค้นที่เจอในรายงานไปปรับหน้าเดิมหรือเขียนหน้าใหม่ เช่น
          อัปเดตหน้าผลไม้ก่อนเข้าฤดูกาล หรือเพิ่มหน้ากิจกรรมช่วงเทศกาลท่องเที่ยว
        </p>
      </ArticleSection>

      <ArticleSection id="checklist" eyebrow="เช็กลิสต์" title="10 ข้อที่ควรผ่านก่อนเปิดเว็บ">
        <ol className="list-decimal space-y-3 pl-5">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>
          ยังไม่แน่ใจว่าธุรกิจควรมีเว็บแบบไหน อ่านบทความ{' '}
          <Link href="/blog/why-business-needs-website" className={link}>ทำไมธุรกิจของคุณถึงต้องมีเว็บไซต์</Link> ก่อนได้
        </p>
        <ArticleCallout
          title={`เว็บจาก KUMA วางพื้นฐาน SEO ให้ครบตั้งแต่วันแรก เริ่มต้น ${startingRate.toLocaleString('th-TH')} บาท`}
          action={{ href: '/contact', label: 'ขอประเมินราคาฟรี' }}
        >
          <p>
            ทุกเว็บมี Title และ Description แยกหน้า sitemap โครงสร้างข้อมูลธุรกิจ และออกแบบให้ใช้ง่ายบนมือถือ
            ฟรีแลนซ์ในจันทบุรี นัดคุยรายละเอียดได้ ดูตัวอย่างได้ที่<Link href="/work" className={link}>หน้าผลงาน</Link>
          </p>
        </ArticleCallout>
      </ArticleSection>
    </ArticleShell>
  );
}
