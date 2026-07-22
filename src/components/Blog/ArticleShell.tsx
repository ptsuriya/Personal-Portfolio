import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

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
  children: ReactNode;
};

export function ArticleCode({ children }: { children: string }) {
  return (
    <pre className="mt-4 min-w-0 max-w-full overflow-x-auto rounded-2xl border border-[#3D1F00]/15 bg-[#24110B] p-4 font-mono text-xs leading-6 text-[#FAD4C0]">
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
    <section id={id} className="scroll-mt-28 border-t border-[#E8B8A8]/55 pt-12 first:border-t-0 first:pt-0">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#24110B] sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-sm leading-8 text-[#7A4838] sm:text-base">{children}</div>
    </section>
  );
}

export default function ArticleShell({
  eyebrow,
  title,
  description,
  tags,
  toc,
  sources,
  children,
}: ArticleShellProps) {
  return (
    <main id="content" className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <a href="#article" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#24110B] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#FFF7E8]">ข้ามไปยังเนื้อหาบทความ</a>
      <header className="relative overflow-hidden rounded-[2rem] border border-[#24110B]/20 bg-[#24110B] px-6 py-12 text-[#FFF7E8] shadow-[0_28px_70px_rgba(42,16,16,0.14)] sm:px-10 sm:py-16 lg:px-14">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[34px] border-[#C86858]/20" />
        <div className="pointer-events-none absolute -bottom-28 left-16 h-64 w-64 rounded-full bg-[#7AA36F]/15 blur-3xl" />
        <div className="relative max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-[#FAD4C0] transition-colors hover:text-white"><ArrowLeft className="h-3.5 w-3.5" />คลังบทความ KUMA</Link>
          <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-[#E8C4A0]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E8C4A0] sm:text-base">{description}</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#FAD4C0]">{tags.map((tag) => <span key={tag} className="rounded-full border border-[#FAD4C0]/25 px-3 py-2">{tag}</span>)}</div>
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="lg:sticky lg:top-28">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A94E43]">On this page</p>
          <nav aria-label="สารบัญบทความ" className="mt-4 grid gap-1 text-sm">
            {toc.map((item) => <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-[#7A4838] transition-colors hover:bg-[#FAE4DC] hover:text-[#24110B]">{item.label}</a>)}
          </nav>
        </aside>

        <article id="article" className="min-w-0 scroll-mt-28">
          <div className="space-y-14">{children}</div>

          <section className="mt-14 rounded-[1.75rem] border border-[#E8B8A8]/65 bg-[#FFF8F0]/70 p-5 sm:p-7">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A94E43]">Official references</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#24110B]">อ่านต่อจากแหล่งต้นทาง</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">{sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-[#E8B8A8]/55 bg-[#FFF0CC]/45 px-4 py-3 text-sm font-semibold text-[#7A3D35] transition-colors hover:border-[#C86858] hover:bg-[#FAE4DC]">{source.label}<ArrowUpRight className="h-4 w-4 shrink-0" /></a>)}</div>
          </section>

          <section className="mt-12 flex flex-col gap-4 border-t border-[#E8B8A8]/55 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-[#7A3D35] hover:text-[#24110B]"><ArrowLeft className="h-4 w-4" />กลับคลังบทความ</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#7A3D35] hover:text-[#24110B]">คุยเรื่องโปรเจกต์ <ArrowRight className="h-4 w-4" /></Link>
          </section>
        </article>
      </div>
    </main>
  );
}
