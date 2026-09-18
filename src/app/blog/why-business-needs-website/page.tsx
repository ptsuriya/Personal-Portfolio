import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleShell, { ArticleCallout, ArticleSection } from '@/components/Blog/ArticleShell';
import { startingRate } from '@/data/site';

const slug = 'why-business-needs-website';
const title = 'ทำไมธุรกิจของคุณถึงต้องมีเว็บไซต์';
const description =
  'เหตุผลที่ร้านค้า สวนผลไม้ ร้านพลอย ที่พัก และธุรกิจในจันทบุรีควรมีเว็บไซต์ของตัวเอง ทั้งเรื่องความน่าเชื่อถือ การถูกค้นเจอบน Google และการปิดการขาย พร้อมเช็กลิสต์ก่อนเริ่มทำเว็บ';

export const metadata: Metadata = {
  title: `${title} คู่มือผู้ประกอบการจันทบุรี`,
  description,
  keywords: ['ทำไมธุรกิจต้องมีเว็บไซต์', 'ประโยชน์ของเว็บไซต์ธุรกิจ', 'เว็บไซต์ธุรกิจ จันทบุรี', 'รับทำเว็บไซต์ จันทบุรี', 'ผู้ประกอบการจันทบุรี'],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: 'article', title, description, url: `/blog/${slug}`, publishedTime: '2026-09-17' },
};

const toc = [
  { href: '#search', label: 'ลูกค้าค้นหาก่อนซื้อ' },
  { href: '#trust', label: 'เว็บไซต์สร้างความน่าเชื่อถือ' },
  { href: '#own', label: 'ช่องทางที่เป็นของคุณเอง' },
  { href: '#sales', label: 'ช่วยตอบคำถามและปิดการขาย' },
  { href: '#examples', label: 'ตัวอย่างธุรกิจในจันทบุรี' },
  { href: '#start', label: 'เริ่มแบบไม่บานปลาย' },
  { href: '#checklist', label: 'เช็กลิสต์ก่อนทำเว็บ' },
];

const strong = 'font-semibold text-kuma-bark';
const link = 'font-semibold text-kuma-amber-deep underline decoration-kuma-gold decoration-2 underline-offset-4 hover:text-kuma-bark';

const businessExamples = [
  {
    name: 'สวนผลไม้ ล้ง และผลไม้แปรรูป',
    needs: 'ปฏิทินฤดูกาลผลไม้ ช่องทางสั่งจองล่วงหน้า วิธีจัดส่ง ข้อมูลมาตรฐานการผลิต และหน้าภาษาอังกฤษสำหรับผู้ซื้อต่างประเทศ',
  },
  {
    name: 'ร้านพลอยและเครื่องประดับ',
    needs: 'แคตตาล็อกสินค้า รูปถ่ายที่ชัด ข้อมูลใบรับรองอัญมณี งานสั่งทำ และช่องทางนัดดูสินค้าที่ร้าน',
  },
  {
    name: 'ที่พัก รีสอร์ต และร้านอาหาร',
    needs: 'รูปห้องหรือเมนู แผนที่ การเดินทางจากตัวเมือง เวลาเปิดปิด และช่องทางจองหรือติดต่อโดยตรง',
  },
  {
    name: 'ของฝากและสินค้าชุมชน',
    needs: 'หน้าสินค้าพร้อมราคา เรื่องราวของแบรนด์ ช่องทางสั่งซื้อ และฟอร์มสำหรับลูกค้าที่อยากซื้อส่ง',
  },
  {
    name: 'ธุรกิจบริการในพื้นที่',
    needs: 'บริการที่รับ พื้นที่ให้บริการในอำเภอต่าง ๆ ตัวอย่างงานที่ทำเสร็จ และปุ่มโทรหรือขอใบเสนอราคา',
  },
];

const checklist = [
  'เป้าหมายหลักของเว็บ เช่น ให้ลูกค้าโทรหา สั่งจอง หรือขอใบเสนอราคา',
  'กลุ่มลูกค้าหลัก คนในจันทบุรี นักท่องเที่ยว หรือผู้ซื้อต่างประเทศ',
  'รายการหน้าที่ต้องมี อย่างน้อย หน้าแรก สินค้าหรือบริการ เกี่ยวกับเรา และติดต่อ',
  'รูปถ่ายจริงของสินค้า ร้าน หรือผลงาน ที่ได้รับอนุญาตให้ใช้',
  'ข้อความอธิบายสินค้า ราคา หรือช่วงราคา และคำถามที่ลูกค้าถามบ่อย',
  'ชื่อโดเมนที่จำง่าย และอีเมลสำหรับรับติดต่อ',
  'คนที่จะอัปเดตข้อมูลหลังเว็บเปิด และงบดูแลรายปี',
];

export default function WhyBusinessNeedsWebsiteArticle() {
  return (
    <ArticleShell
      eyebrow="คู่มือผู้ประกอบการจันทบุรี"
      title={title}
      description={description}
      tags={['ผู้ประกอบการจันทบุรี', 'เว็บไซต์ธุรกิจ', 'Google', 'รับทำเว็บไซต์']}
      toc={toc}
      slug={slug}
      published="2026-09-17"
      illustration="/image/illustrations/page-work.webp"
      sources={[
        { label: 'Google Search Central: SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
        { label: 'Google Business Profile: วิธีเพิ่มอันดับในผลการค้นหาท้องถิ่น', href: 'https://support.google.com/business/answer/7091' },
        { label: 'Google Search Console', href: 'https://search.google.com/search-console/about' },
      ]}
    >
      <ArticleSection id="search" eyebrow="เหตุผลที่ 1" title="ลูกค้าค้นหาก่อนตัดสินใจซื้อ">
        <p>
          เวลามีคนอยากสั่งผลไม้ส่งตรงจากสวน หาร้านพลอยที่ไว้ใจได้ หรือหาที่พักริมทะเลในจันทบุรี สิ่งแรกที่หลายคนทำคือหยิบมือถือขึ้นมาค้นใน Google
          ถ้าธุรกิจของคุณไม่มีหน้าเว็บที่บอกชัดว่าขายอะไร อยู่ที่ไหน และติดต่ออย่างไร ลูกค้าคนนั้นก็จะเลือกร้านอื่นที่หาเจอได้ง่ายกว่า
        </p>
        <p>ตัวอย่างคำที่ลูกค้าพิมพ์ค้นจริงมักเป็น <span className={strong}>สินค้าหรือบริการ + ชื่อพื้นที่</span> เช่น</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>ทุเรียนส่งตรงจากสวน จันทบุรี</li>
          <li>ร้านพลอย จันทบุรี</li>
          <li>ที่พัก แหลมเสด็จ</li>
          <li>ของฝากจันทบุรี ส่งทั่วประเทศ</li>
        </ul>
        <p>
          เว็บไซต์ที่เขียนข้อมูลเหล่านี้ไว้ครบ ทำให้ Google เข้าใจว่าธุรกิจของคุณเกี่ยวข้องกับคำค้นนั้น และยังใช้คู่กับ Google Business Profile
          (หมุดร้านบน Google Maps) ได้ดี เพราะลูกค้าที่เจอหมุดร้านมักกดเข้าเว็บต่อเพื่อดูรายละเอียดก่อนตัดสินใจ
        </p>
      </ArticleSection>

      <ArticleSection id="trust" eyebrow="เหตุผลที่ 2" title="เว็บไซต์ทำให้ธุรกิจดูน่าเชื่อถือ">
        <p>
          ลูกค้าที่ยังไม่เคยซื้อกับคุณต้องการหลักฐานว่าธุรกิจมีตัวตนจริง เว็บไซต์ที่มีชื่อโดเมนของตัวเอง ที่อยู่ เบอร์ติดต่อ รูปถ่ายจริง
          และข้อมูลที่อัปเดต ช่วยตอบความกังวลนั้นได้ก่อนที่ลูกค้าจะต้องทักมาถาม
        </p>
        <p>
          ยิ่งถ้าลูกค้าเป็น<span className={strong}>ผู้ซื้อรายใหญ่ ผู้นำเข้า หรือบริษัท</span> เว็บไซต์มักเป็นสิ่งแรกที่ใช้ตรวจสอบคู่ค้า
          ตัวอย่างเช่นเว็บไซต์{' '}
          <Link href="/work/lanna-fruits" className={link}>LANNA FRUITS</Link>{' '}
          ที่รวมสินค้า มาตรฐานรับรอง และบริการ OEM ไว้ให้ผู้ซื้อต่างประเทศดูได้ในที่เดียว
        </p>
      </ArticleSection>

      <ArticleSection id="own" eyebrow="เหตุผลที่ 3" title="เป็นช่องทางที่คุณเป็นเจ้าของเอง">
        <p>
          Facebook, LINE OA และ TikTok ช่วยให้คนเห็นธุรกิจได้เร็ว แต่กติกาและการแสดงผลของแพลตฟอร์มเปลี่ยนได้ตลอด
          เพจที่เคยมีคนเห็นเยอะอาจเข้าถึงคนน้อยลงในวันถัดไป หรือบัญชีอาจถูกจำกัดโดยที่คุณควบคุมไม่ได้
        </p>
        <p>
          เว็บไซต์กับชื่อโดเมนเป็น<span className={strong}>ทรัพย์สินของธุรกิจเอง</span> ใช้เป็นศูนย์กลางที่โซเชียลทุกช่องทางลิงก์กลับมา
          เก็บข้อมูลติดต่อของลูกค้าที่สนใจ และวัดได้ว่าลูกค้ามาจากไหน
        </p>
      </ArticleSection>

      <ArticleSection id="sales" eyebrow="เหตุผลที่ 4" title="ช่วยตอบคำถามซ้ำ ๆ และปิดการขายได้เร็วขึ้น">
        <p>
          ถ้าแต่ละวันต้องตอบแชตว่า ราคาเท่าไร ส่งต่างจังหวัดไหม เปิดกี่โมง หรือมีห้องว่างไหม ข้อมูลเหล่านี้ควรอยู่บนเว็บตั้งแต่แรก
          ลูกค้าที่อ่านจนเข้าใจแล้วค่อยทักมา มักพร้อมซื้อมากกว่าและใช้เวลาคุยน้อยกว่า
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>หน้าสินค้าหรือบริการพร้อมราคา หรือช่วงราคา</li>
          <li>คำถามที่พบบ่อย เช่น การจัดส่ง การชำระเงิน การรับประกัน</li>
          <li>ฟอร์มสั่งจอง ขอใบเสนอราคา หรือปุ่มโทรที่กดได้ทันทีบนมือถือ</li>
          <li>รีวิวหรือผลงานจริงที่ลูกค้าเห็นแล้วมั่นใจ</li>
        </ul>
        <p>สำหรับที่พักและร้านอาหาร ช่องทางติดต่อโดยตรงบนเว็บยังช่วยลดการพึ่งพาแพลตฟอร์มจองที่มีค่าคอมมิชชันได้อีกทาง</p>
      </ArticleSection>

      <ArticleSection id="examples" eyebrow="ตัวอย่างในพื้นที่" title="ธุรกิจในจันทบุรีควรมีอะไรบนเว็บ">
        <p>เว็บไซต์ที่ดีไม่จำเป็นต้องมีทุกอย่าง แต่ต้องมีสิ่งที่ลูกค้าของธุรกิจนั้นใช้ตัดสินใจ</p>
        <dl className="grid gap-4 sm:grid-cols-2">
          {businessExamples.map((example) => (
            <div key={example.name} className="rounded-2xl border-2 border-kuma-bark bg-white p-5">
              <dt className="text-lg font-bold text-kuma-bark">{example.name}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-kuma-clay">{example.needs}</dd>
            </div>
          ))}
        </dl>
        <p>
          งานโครงการชุมชนก็ได้ประโยชน์เช่นกัน ตัวอย่างคือ{' '}
          <Link href="/work/chak-thai-herbs" className={link}>ทะเบียนสมุนไพรชากไทย</Link>{' '}
          ของชุมชนตำบลชากไทย อำเภอเขาคิชฌกูฏ ที่เปลี่ยนข้อมูลจากการลงพื้นที่ให้คนทั่วไปค้นหาได้
        </p>
      </ArticleSection>

      <ArticleSection id="start" eyebrow="เริ่มต้น" title="เริ่มจากเว็บที่พอดีกับธุรกิจ ไม่ต้องใหญ่ตั้งแต่วันแรก">
        <p>
          หลายธุรกิจเริ่มได้ด้วย<span className={strong}>เว็บหน้าเดียว (Landing Page)</span> ที่บอกว่าเป็นใคร ขายอะไร และติดต่ออย่างไร
          เมื่อเริ่มมีลูกค้าจากเว็บแล้วค่อยเพิ่มหน้าสินค้า บทความ หรือระบบสั่งจองทีละส่วน
        </p>
        <p>
          สิ่งที่ควรคิดตั้งแต่เริ่มคือค่าโดเมนและโฮสติ้งรายปี คนที่จะอัปเดตข้อมูล และการทำให้เว็บพร้อมสำหรับ SEO ตั้งแต่โครงสร้างแรก
          อ่านรายละเอียดต่อได้ในบทความ{' '}
          <Link href="/blog/website-seo-chanthaburi" className={link}>ทำเว็บไซต์ให้ติด SEO ฉบับผู้ประกอบการจันทบุรี</Link>
        </p>
        <ArticleCallout
          title={`KUMA รับทำเว็บไซต์ให้ธุรกิจในจันทบุรี เริ่มต้น ${startingRate.toLocaleString('th-TH')} บาท`}
          action={{ href: '/contact', label: 'ขอประเมินราคาฟรี' }}
        >
          <p>คุยงานกับคนออกแบบและเขียนเว็บโดยตรง ช่วยวางว่าธุรกิจของคุณควรเริ่มจากหน้าไหน และเตรียมข้อมูลอะไรบ้าง ดูรายละเอียดได้ที่<Link href="/services" className={link}>หน้าบริการ</Link></p>
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection id="checklist" eyebrow="เช็กลิสต์" title="เตรียม 7 อย่างนี้ก่อนเริ่มทำเว็บ">
        <ol className="list-decimal space-y-3 pl-5">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>ยังไม่ครบก็เริ่มคุยได้ การเตรียมข้อมูลเป็นส่วนหนึ่งของขั้นตอน Discovery ที่ช่วยกันทำก่อนออกแบบ</p>
      </ArticleSection>
    </ArticleShell>
  );
}
