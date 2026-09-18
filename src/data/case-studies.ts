export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  type: 'UI/UX' | 'Frontend' | 'Full-Stack';
  cover: string;
  /** Decorative sticker from /public/image/Asset shown beside the cover. */
  sticker?: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string[];
  stack: string[];
  liveUrl?: string;
  testimonialId?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'lanna-fruits',
    title: 'LANNA FRUITS — เว็บไซต์องค์กรสำหรับตลาดส่งออก',
    client: 'LANNA FRUITS Co., Ltd.',
    year: 2025,
    type: 'Frontend',
    cover: '/image/work/lannafruits.jpg',
    sticker: '/image/Asset/29.png',
    summary:
      'เว็บไซต์องค์กรภาษาอังกฤษของโรงงานแปรรูปผลไม้ออร์แกนิกใกล้เชียงใหม่ นำเสนอสินค้า มาตรฐานรับรอง และบริการ OEM ให้ผู้ซื้อต่างประเทศ',
    problem:
      'ผู้ซื้อและผู้นำเข้าต่างประเทศต้องเห็นให้ได้เร็วว่าโรงงานผลิตอะไร ได้มาตรฐานอะไรบ้าง และรับพัฒนาสินค้าแบบ OEM หรือไม่ ก่อนตัดสินใจขอตัวอย่างหรือติดต่อฝ่ายขาย',
    solution:
      'จัดโครงสร้างเว็บเป็น 5 หน้า (Home, Products, About, OEM, Contact) หน้าแรกรวมใบรับรองและหมวดสินค้าไว้ใน scroll แรก ๆ หน้า Products แยกหมวด Juice/Puree, IQF และ Glass jar พร้อมฤดูกาลผลผลิตและรูปแบบบรรจุภัณฑ์ ปิดท้ายด้วยฟอร์มติดต่อที่แยกประเภทคำขอ',
    outcome: [
      'แคตตาล็อกสินค้า 3 หมวด พร้อมฤดูกาลผลผลิตและรูปแบบบรรจุภัณฑ์',
      'รวมใบรับรอง Ecocert, USDA Organic, IFS Food, Halal และ Kosher ไว้ในที่เดียว',
      'หน้า OEM & Private Label อธิบายการพัฒนาสินค้าร่วมกับลูกค้า',
      'ฟอร์มติดต่อแยกประเภทคำขอ พร้อมแผนที่โรงงาน และแสดงผลได้ดีบนมือถือ',
    ],
    stack: ['Next.js', 'React', 'Bootstrap'],
    liveUrl: 'https://www.lannafruits.com/',
  },
  {
    slug: 'chak-thai-herbs',
    title: 'สมุนไพรชากไทย — ทะเบียนสมุนไพรชุมชนออนไลน์',
    client: 'คณะพยาบาลศาสตร์ มหาวิทยาลัยราชภัฏรำไพพรรณี',
    year: 2026,
    type: 'Frontend',
    cover: '/image/work/chakthaiherbs.jpg',
    sticker: '/image/Asset/39.png',
    summary:
      'ฐานข้อมูลสมุนไพรท้องถิ่น 24 ชนิดของตำบลชากไทย จ.จันทบุรี ที่เปลี่ยนข้อมูลจากการลงพื้นที่ให้ค้นหาได้และอ่านง่ายทุกวัย',
    problem:
      'ข้อมูลสมุนไพรที่ชุมชนและปราชญ์ชาวบ้านรวบรวมไว้ ทั้งชื่อท้องถิ่น ชื่อวิทยาศาสตร์ สรรพคุณ และข้อควรระวัง ต้องถูกเก็บให้เป็นระบบ ค้นหาได้ และคนในชุมชนทุกช่วงวัยอ่านได้สะดวก',
    solution:
      'ออกแบบเป็นทะเบียนรูปแบบบัตรข้อมูล มีหน้ารายละเอียดของสมุนไพรแต่ละชนิด ค้นหาด้วยชื่อไทยหรือชื่อวิทยาศาสตร์ และกรองตามวงศ์พืชได้ พร้อมหมวด 5 กลุ่มสมุนไพรเพื่อสุขภาพ บันทึกการลงพื้นที่ และคลังวิดีโอ',
    outcome: [
      'ทะเบียนสมุนไพร 24 ชนิด พร้อมหน้ารายละเอียดรายชนิด',
      'ค้นหาด้วยชื่อไทย/ชื่อวิทยาศาสตร์ และกรองตามวงศ์พืช',
      'จัดสมุนไพรเป็น 5 กลุ่มตามการดูแลสุขภาพ พร้อมวิธีปรุงและข้อควรระวัง',
      'ปุ่มปรับขนาดตัวอักษร 3 ระดับ และลิงก์ข้ามไปยังเนื้อหาหลัก',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://www.chakthaiherbs.com/',
  },
  {
    slug: 'auranic',
    title: 'AURANIC — เว็บไซต์หน้าเดียวสำหรับเครือข่ายเกษตรอินทรีย์',
    client: 'AURANIC',
    year: 2026,
    type: 'Frontend',
    cover: '/image/work/auranic.jpg',
    sticker: '/image/Asset/44.png',
    summary:
      'เว็บไซต์ one-page ภาษาอังกฤษของเครือข่ายเกษตรอินทรีย์ไม่แสวงหากำไร เล่าเรื่องเกษตรกร ผลลัพธ์โครงการ และช่องทางสนับสนุน',
    problem:
      'องค์กรต้องสื่อสารกับผู้ซื้อและผู้สนับสนุนต่างประเทศให้เข้าใจทั้งภารกิจ มาตรฐานออร์แกนิก และความต้องการเงินทุน โดยไม่ทำให้ข้อมูลกระจัดกระจายหลายหน้า',
    solution:
      'เรียงเนื้อหาเป็น storytelling ในหน้าเดียว: Hero → Certificates → Farmers → Service → Impact ใช้ stat cards สรุปตัวเลขสำคัญ และแยกฟอร์มติดต่อสำหรับทีมสหราชอาณาจักรและทีมประเทศไทย',
    outcome: [
      'เล่าเรื่ององค์กรครบจบในหน้าเดียว พร้อมเมนูเลื่อนไปยังแต่ละส่วน',
      'สรุปตัวเลขผลลัพธ์ของโครงการเป็น stat cards อ่านเร็ว',
      'ฟอร์มติดต่อแยก 2 ทีม: สหราชอาณาจักร และประเทศไทย',
      'ส่วนแผนงานโครงการและข้อมูลการบริจาคสำหรับผู้สนับสนุน',
    ],
    stack: ['Next.js', 'React'],
    liveUrl: 'https://www.auranic.com/',
  },
];

export const featuredCaseStudies = caseStudies.slice(0, 3);
