import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
import { buttonClass } from './styles';
import { cn } from '@/lib/utils';

interface WorkShowcaseProps {
  studies: CaseStudy[];
  headingLevel?: 'h2' | 'h3';
}

const hostOf = (url?: string) => (url ? new URL(url).host.replace(/^www\./, '') : '');

export default function WorkShowcase({ studies, headingLevel = 'h3' }: WorkShowcaseProps) {
  const Heading = headingLevel;

  return (
    <ol className="space-y-20 lg:space-y-28">
      {studies.map((study, index) => {
        const flipped = index % 2 === 1;
        return (
          <li key={study.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={cn('relative lg:col-span-7', flipped && 'lg:order-2')}>
              {study.sticker && (
                <Image
                  src={study.sticker}
                  alt=""
                  width={160}
                  height={160}
                  className={cn(
                    'pointer-events-none absolute -top-10 z-10 h-auto w-20 drop-shadow-[3px_4px_0_rgba(42,16,16,0.25)] sm:w-28',
                    flipped ? '-left-4 -rotate-12' : '-right-4 rotate-12',
                  )}
                />
              )}
              <Link
                href={`/work/${study.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className={cn(
                  'group block overflow-hidden rounded-2xl border-2 border-kuma-bark bg-white shadow-[8px_8px_0_0_#2A1010] transition-transform duration-300 hover:-translate-y-1',
                  flipped ? 'lg:rotate-[1.2deg]' : 'lg:-rotate-[1.2deg]',
                )}
              >
                <span className="flex h-9 items-center gap-1.5 border-b-2 border-kuma-bark bg-kuma-honey px-4">
                  <span className="h-2.5 w-2.5 rounded-full border border-kuma-bark bg-[#E8A4A0]" />
                  <span className="h-2.5 w-2.5 rounded-full border border-kuma-bark bg-kuma-gold" />
                  <span className="h-2.5 w-2.5 rounded-full border border-kuma-bark bg-[#B9CFA6]" />
                  <span className="ml-3 truncate text-xs text-kuma-clay">{hostOf(study.liveUrl)}</span>
                </span>
                <Image
                  src={study.cover}
                  alt=""
                  width={1440}
                  height={810}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <p className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border-2 border-kuma-bark bg-white px-3 py-0.5 font-medium text-kuma-bark">{study.year}</span>
                <span className="rounded-full bg-kuma-sand px-3 py-1 text-kuma-clay">{study.client}</span>
              </p>
              <Heading className="mt-4 text-2xl font-extrabold leading-snug text-kuma-bark sm:text-3xl">
                <Link href={`/work/${study.slug}`} className="hover:text-kuma-amber-deep">{study.title}</Link>
              </Heading>
              <p className="mt-4 leading-8 text-kuma-clay">{study.summary}</p>
              <ul className="mt-5 space-y-2">
                {study.outcome.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-kuma-cocoa">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kuma-gold" aria-hidden="true">
                      <Check className="h-3 w-3 text-kuma-bark" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-kuma-clay">สร้างด้วย {study.stack.join(', ')}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href={`/work/${study.slug}`} className={buttonClass('secondary')}>
                  อ่านเคสงาน
                </Link>
                {study.liveUrl && (
                  <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-1.5 px-1 text-[15px] font-semibold text-kuma-amber-deep underline-offset-4 hover:underline">
                    ดูเว็บจริง
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
