import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageIntro from '@/components/site/PageIntro';
import CtaBlock from '@/components/site/CtaBlock';
import { container, sectionTitle, stickerCard } from '@/components/site/styles';
import { articles } from '@/data/articles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'บทความทำเว็บไซต์และ SEO สำหรับผู้ประกอบการจันทบุรี',
  description:
    'รวมบทความจาก KUMA ฟรีแลนซ์รับทำเว็บไซต์ในจันทบุรี เรื่องการทำเว็บไซต์ธุรกิจ SEO และการทำให้ลูกค้าค้นเจอบน Google พร้อมบันทึกเครื่องมือสำหรับนักพัฒนา',
  alternates: { canonical: '/blog' },
};

const formatThaiDate = (iso: string) =>
  new Date(`${iso}T00:00:00+07:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Bangkok' });

export default function BlogIndexPage() {
  const businessGuides = articles.filter((article) => article.audience === 'business');
  const devNotes = articles.filter((article) => article.audience === 'dev');

  return (
    <main>
      <PageIntro
        title="บทความสำหรับผู้ประกอบการ"
        description="เรื่องการทำเว็บไซต์ให้ธุรกิจ และการทำให้ลูกค้าในจันทบุรีค้นเจอบน Google เขียนให้อ่านเข้าใจได้โดยไม่ต้องเป็นสายเทคนิค"
        sticker="/image/illustrations/process-1-brief.webp"
      />

      <section aria-labelledby="guides-title" className={cn(container, 'py-16 lg:py-24')}>
        <h2 id="guides-title" className={sectionTitle}>คู่มือเว็บไซต์ธุรกิจ</h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {businessGuides.map((article) => (
            <li key={article.slug}>
              <Link href={`/blog/${article.slug}`} className={cn(stickerCard, 'group flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8')}>
                {article.illustration && (
                  <span className="flex h-40 items-center justify-center rounded-2xl bg-kuma-honey">
                    <Image src={article.illustration} alt="" width={320} height={320} className="h-36 w-auto object-contain" />
                  </span>
                )}
                <span className="mt-6 text-sm text-kuma-clay">
                  <time dateTime={article.published}>{formatThaiDate(article.published)}</time>
                </span>
                <span className="mt-2 text-2xl font-extrabold leading-snug text-kuma-bark group-hover:text-kuma-amber-deep">{article.title}</span>
                <span className="mt-3 leading-7 text-kuma-clay">{article.description}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-kuma-amber-deep">
                  อ่านบทความ
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="notes-title" className="border-t-2 border-dashed border-kuma-line">
        <div className={cn(container, 'grid gap-10 py-16 lg:grid-cols-12 lg:py-24')}>
          <div className="lg:col-span-4">
            <h2 id="notes-title" className="text-2xl font-extrabold text-kuma-bark sm:text-3xl">บันทึกเครื่องมือของ KUMA</h2>
            <p className="mt-3 leading-7 text-kuma-clay">บันทึกเรื่องเครื่องมือและ workflow ที่ใช้ทำงานจริง สำหรับนักพัฒนาและนักออกแบบ</p>
          </div>
          <ul className="border-t border-kuma-line lg:col-span-8">
            {devNotes.map((article) => (
              <li key={article.slug} className="border-b border-kuma-line">
                <Link href={`/blog/${article.slug}`} className="group block py-5">
                  <span className="block text-lg font-semibold text-kuma-bark group-hover:text-kuma-amber-deep">{article.title}</span>
                  <span className="mt-1 block leading-7 text-kuma-clay">{article.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock title="อยากให้ธุรกิจของคุณค้นเจอบน Google?" description="KUMA ฟรีแลนซ์ในจันทบุรี ช่วยวางเว็บไซต์ให้พร้อม SEO ตั้งแต่วันแรก คุยเบื้องต้นฟรี" />
    </main>
  );
}
