import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { testimonials } from '@/data/testimonials';

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

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/work"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9A5848] transition-colors hover:text-[#C86858]"
      >
        <ArrowLeft className="h-4 w-4" />
        กลับไปดูผลงานทั้งหมด
      </Link>

      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#C86858]/30 bg-[#2A1010]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">
            {study.type}
          </span>
          <span className="text-xs text-[#9A6858]">{study.client} · {study.year}</span>
        </div>
        <h1 className="text-3xl font-bold text-[#2A1010] sm:text-4xl">{study.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-[#7A4838]">{study.summary}</p>
      </header>

      <div
        className="mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-[#E8B8A8]/60 bg-cover bg-center shadow-[0_24px_60px_rgba(184,108,86,0.18)]"
        style={{ backgroundImage: `url(${study.cover})` }}
      />

      <article className="space-y-8">
        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C86858]">โจทย์</h2>
          <p className="text-base leading-relaxed text-[#3D1F00]">{study.problem}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C86858]">วิธีแก้</h2>
          <p className="text-base leading-relaxed text-[#3D1F00]">{study.solution}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C86858]">ผลลัพธ์</h2>
          <ul className="space-y-2">
            {study.outcome.map((o, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-[#E8B8A8]/50 bg-[#FAE4DC]/50 p-4 text-sm leading-relaxed text-[#3D1F00] backdrop-blur-sm"
              >
                <span className="mt-0.5 text-[#C86858]">✓</span>
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C86858]">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#E8B8A8]/60 bg-white/40 px-3 py-1 text-xs text-[#2A1010]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#C86858] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868]"
          >
            <ExternalLink className="h-4 w-4" />
            ดูเว็บจริง
          </a>
        )}

        {testimonial && (
          <blockquote className="rounded-3xl border-l-4 border-[#C86858] bg-[#FFF6F0]/70 p-6 italic text-[#3D1F00] sm:p-8">
            <p className="text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 not-italic">
              <p className="text-sm font-bold text-[#2A1010]">{testimonial.author}</p>
              <p className="text-xs text-[#9A6858]">
                {testimonial.role}
                {testimonial.company ? ` · ${testimonial.company}` : ''}
              </p>
            </footer>
          </blockquote>
        )}
      </article>

      {next && next.slug !== study.slug && (
        <Link
          href={`/work/${next.slug}`}
          className="mt-14 flex items-center justify-between gap-4 rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/50 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#D8987A]"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C86858]">งานต่อไป</p>
            <p className="text-base font-bold text-[#2A1010]">{next.title}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-[#C86858]" />
        </Link>
      )}

      <div className="mt-10 rounded-3xl border border-[#E8B8A8]/60 bg-[linear-gradient(135deg,#2A1010_0%,#4A201B_100%)] p-8 text-center text-[#FAD4C0]">
        <p className="text-2xl">🤝</p>
        <h3 className="mt-2 text-xl font-bold">มีโปรเจกต์คล้ายๆ กัน?</h3>
        <p className="mt-1 text-sm text-[#E8C4A0]">คุยฟรี ตอบกลับใน 1-2 วัน</p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C86858] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D87868]"
        >
          ติดต่อ KUMA
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
