import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import CtaBlock from '@/components/site/CtaBlock';
import { buttonClass, container } from '@/components/site/styles';
import { caseStudies } from '@/data/case-studies';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';
import Reveal from '@/components/motion/Reveal';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    // Without this the page inherits the root layout's canonical ("/").
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: study.title, description: study.summary, url: `/work/${study.slug}`, images: [{ url: study.cover, width: 1440, height: 810 }] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const testimonial = study.testimonialId
    ? testimonials.find((t) => t.id === study.testimonialId)
    : null;
  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  const facts = [
    { label: 'ลูกค้า', value: study.client },
    { label: 'ปี', value: String(study.year) },
    { label: 'ประเภทงาน', value: study.type },
    { label: 'Stack', value: study.stack.join(', ') },
  ];

  return (
    <main>
      <header className={cn(container, 'pt-10 sm:pt-14')}>
        <Link href="/work" className="inline-flex min-h-11 items-center gap-2 font-medium text-kuma-clay hover:text-kuma-bark">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          ผลงานทั้งหมด
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-kuma-bark sm:text-5xl">{study.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-kuma-clay">{study.summary}</p>
          </div>
          {study.liveUrl && (
            <div className="lg:col-span-4 lg:justify-self-end">
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('primary')}>
                ดูเว็บจริง
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </header>

      <Reveal y={48} scale={0.97} className={cn(container, 'mt-10')}>
        <div className="overflow-hidden rounded-2xl border-2 border-kuma-bark bg-white shadow-[10px_10px_0_0_#2A1010]">
          <Image
            src={study.cover}
            alt={`ภาพหน้าแรกของเว็บไซต์ ${study.client}`}
            width={1440}
            height={810}
            sizes="(min-width: 1152px) 1104px, 100vw"
            priority
            className="h-auto w-full"
          />
        </div>
      </Reveal>

      <div className={cn(container, 'grid gap-12 py-16 lg:grid-cols-12 lg:py-24')}>
        <dl className="h-fit border-t border-kuma-line lg:sticky lg:top-28 lg:col-span-4">
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-kuma-line py-4">
              <dt className="text-sm text-kuma-clay">{fact.label}</dt>
              <dd className="font-medium text-kuma-bark">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <article className="space-y-12 lg:col-span-7 lg:col-start-6">
          <section>
            <h2 className="text-2xl font-semibold text-kuma-bark">โจทย์</h2>
            <p className="mt-4 text-lg leading-9 text-kuma-cocoa">{study.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-kuma-bark">วิธีแก้</h2>
            <p className="mt-4 text-lg leading-9 text-kuma-cocoa">{study.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-kuma-bark">ผลลัพธ์</h2>
            <ul className="mt-4 border-t border-kuma-line">
              {study.outcome.map((item) => (
                <li key={item} className="flex gap-3 border-b border-kuma-line py-4 leading-7 text-kuma-cocoa">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-kuma-amber" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {testimonial && (
            <blockquote className="border-l-4 border-kuma-amber pl-6">
              <p className="text-xl leading-9 text-kuma-bark">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-semibold text-kuma-bark">{testimonial.author}</p>
                <p className="text-sm text-kuma-clay">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ''}
                </p>
              </footer>
            </blockquote>
          )}

          {next && next.slug !== study.slug && (
            <Link href={`/work/${next.slug}`} className="group flex items-center gap-5 rounded-2xl border border-kuma-line bg-white/60 p-4 transition-colors hover:border-kuma-amber">
              <Image src={next.cover} alt="" width={160} height={90} className="h-auto w-28 shrink-0 rounded-lg sm:w-36" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-kuma-clay">งานถัดไป</span>
                <span className="mt-1 block font-semibold leading-snug text-kuma-bark">{next.title}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-kuma-amber-deep transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </article>
      </div>

      <CtaBlock title="มีโจทย์ใกล้เคียงกัน?" description="คุยเบื้องต้นกับ KUMA ได้ ตอบกลับใน 1-2 วัน" />
    </main>
  );
}
