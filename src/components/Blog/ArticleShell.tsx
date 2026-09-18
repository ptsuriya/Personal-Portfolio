import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { buttonClass } from '@/components/site/styles';

type TocItem = {
  href: string;
  label: string;
};

type SourceItem = {
  label: string;
  href: string;
};

type ArticleShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  toc: TocItem[];
  sources: SourceItem[];
  /** Enables BlogPosting structured data and the published date line. */
  slug?: string;
  /** ISO date (YYYY-MM-DD). */
  published?: string;
  illustration?: string;
  children: ReactNode;
};

const SITE_URL = 'https://kumadesign.dev';

export function ArticleCode({ children }: { children: string }) {
  return (
    <pre className="mt-4 min-w-0 max-w-full overflow-x-auto rounded-xl bg-kuma-bark p-4 font-mono text-[13px] leading-6 text-[#FAD4C0]">
      <code translate="no">{children}</code>
    </pre>
  );
}

export function ArticleSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-kuma-line pt-12 first:border-t-0 first:pt-0">
      <p className="text-sm text-kuma-clay">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-kuma-bark sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-kuma-clay">{children}</div>
    </section>
  );
}

/** Highlighted box inside an article, e.g. a tip or a call to action. */
export function ArticleCallout({ title, children, action }: { title: string; children: ReactNode; action?: { href: string; label: string } }) {
  return (
    <aside className="rounded-3xl border-2 border-kuma-bark bg-kuma-honey p-6 text-kuma-cocoa shadow-[6px_6px_0_0_#2A1010] sm:p-7">
      <p className="text-lg font-bold text-kuma-bark">{title}</p>
      <div className="mt-2 space-y-3 leading-8">{children}</div>
      {action && (
        <Link href={action.href} className={buttonClass('primary', 'mt-5')}>
          {action.label}
        </Link>
      )}
    </aside>
  );
}

const formatThaiDate = (iso: string) =>
  new Date(`${iso}T00:00:00+07:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Bangkok' });

export default function ArticleShell({
  eyebrow,
  title,
  description,
  tags,
  toc,
  sources,
  slug,
  published,
  illustration,
  children,
}: ArticleShellProps) {
  const jsonLd =
    slug && published
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description,
          datePublished: published,
          dateModified: published,
          inLanguage: 'th-TH',
          mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
          image: `${SITE_URL}${illustration ?? '/image/og-cover.jpg'}`,
          keywords: tags.join(', '),
          author: { '@type': 'Organization', name: 'kumadesign.dev', url: SITE_URL },
          publisher: { '@id': `${SITE_URL}/#organization` },
        }
      : null;

  return (
    <main id="content" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <header className="grid gap-8 border-b-2 border-kuma-bark pt-10 pb-12 sm:pt-14 sm:pb-16 md:grid-cols-12 md:items-center">
        <div className={illustration ? 'md:col-span-8' : 'md:col-span-12'}>
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-medium text-kuma-clay hover:text-kuma-bark"><ArrowLeft className="h-4 w-4" aria-hidden="true" />คลังบทความ KUMA</Link>
          <p className="mt-6 text-[15px] text-kuma-amber-deep">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-[-0.025em] text-kuma-bark sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-kuma-clay">{description}</p>
          {published && <p className="mt-4 text-sm text-kuma-clay">เผยแพร่ <time dateTime={published}>{formatThaiDate(published)}</time> โดย KUMA</p>}
          <ul className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border-2 border-kuma-bark bg-white px-3 py-1 text-sm text-kuma-cocoa">{tag}</li>)}</ul>
        </div>
        {illustration && (
          <div className="relative hidden md:col-span-4 md:block" aria-hidden="true">
            <div className="absolute inset-4 rounded-full bg-kuma-gold/60" />
            <Image src={illustration} alt="" width={320} height={320} priority className="relative mx-auto h-auto w-full max-w-[15rem]" />
          </div>
        )}
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="lg:sticky lg:top-28">
          <p className="font-semibold text-kuma-bark">ในบทความนี้</p>
          <nav aria-label="สารบัญบทความ" className="mt-3 grid border-l border-kuma-line text-[15px]">
            {toc.map((item) => <a key={item.href} href={item.href} className="-ml-px border-l-2 border-transparent px-4 py-2 text-kuma-clay transition-colors hover:border-kuma-amber hover:text-kuma-bark">{item.label}</a>)}
          </nav>
        </aside>

        <article id="article" className="min-w-0 max-w-3xl scroll-mt-28">
          <div className="space-y-14">{children}</div>

          <section className="mt-16 border-t border-kuma-line pt-10">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-kuma-bark">อ่านต่อจากแหล่งต้นทาง</h2>
            <ul className="mt-4 border-t border-kuma-line">{sources.map((source) => <li key={source.href} className="border-b border-kuma-line"><a href={source.href} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-between gap-3 py-3 font-medium text-kuma-cocoa transition-colors hover:text-kuma-amber-deep">{source.label}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a></li>)}</ul>
          </section>

          <nav aria-label="ไปต่อ" className="mt-12 flex flex-col gap-4 text-[15px] sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-semibold text-kuma-clay hover:text-kuma-bark"><ArrowLeft className="h-4 w-4" aria-hidden="true" />กลับคลังบทความ</Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 font-semibold text-kuma-amber-deep hover:text-kuma-bark">คุยเรื่องโปรเจกต์กับ KUMA <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </nav>
        </article>
      </div>
    </main>
  );
}
