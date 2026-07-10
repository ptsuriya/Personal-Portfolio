'use client';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  speed?: number;
}

export default function TestimonialMarquee({ testimonials, speed = 60 }: TestimonialMarqueeProps) {
  if (testimonials.length === 0) return null;

  const repeated = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FDF6EC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FDF6EC] to-transparent" />

      <div
        className="flex gap-4"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {repeated.map((t, i) => (
          <article
            key={`${t.id}-${i}`}
            className="flex w-[360px] shrink-0 flex-col gap-3 rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/60 p-5 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-[#3D1F00]">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 border-t border-[#E8B8A8]/50 pt-3">
              {t.avatar && (
                <span
                  className="h-10 w-10 shrink-0 rounded-full border border-[#E8B8A8] bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.avatar})` }}
                />
              )}
              <div className="text-xs">
                <p className="font-semibold text-[#2A1010]">{t.author}</p>
                <p className="text-[#9A6858]">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ''}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
