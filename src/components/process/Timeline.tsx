import Image from 'next/image';
import type { ProcessStep } from '@/data/process';
import { cn } from '@/lib/utils';

interface TimelineProps {
  steps: ProcessStep[];
  /** Hide step descriptions for short overviews (e.g. homepage). */
  compact?: boolean;
}

// One KUMA bear per stage: reads the brief, sketches the design, builds it, hands it over.
const stepIllustrations = [
  '/image/illustrations/process-1-brief.webp',
  '/image/illustrations/process-2-design.webp',
  '/image/illustrations/process-3-build.webp',
  '/image/illustrations/process-4-launch.webp',
];

export default function Timeline({ steps, compact = false }: TimelineProps) {
  return (
    <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[5.5rem] hidden border-t-[3px] border-dashed border-kuma-bark/30 lg:block" />
      {steps.map((step, index) => (
        <li key={step.step} className="relative">
          <div className="relative mx-auto h-44 w-44">
            <div className="absolute inset-4 rounded-full border-2 border-kuma-bark bg-kuma-honey" />
            {stepIllustrations[index] && (
              <Image src={stepIllustrations[index]} alt="" width={260} height={260} className="relative h-full w-full object-contain p-1" />
            )}
            <span
              aria-hidden="true"
              className="absolute -right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-kuma-bark bg-kuma-gold text-lg font-extrabold text-kuma-bark"
            >
              {step.step}
            </span>
          </div>
          <div className="mt-5 text-center">
            <p className="inline-block rounded-full bg-kuma-sand px-3 py-0.5 text-sm text-kuma-clay">
              <span className="sr-only">ขั้นที่ {step.step}, </span>
              {step.duration}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-kuma-bark">{step.title}</h3>
            {!compact && <p className="mt-3 text-left leading-7 text-kuma-clay sm:text-center">{step.description}</p>}
            <p className={cn('mt-3 text-[15px] leading-7 text-kuma-cocoa', !compact && 'border-t-2 border-dashed border-kuma-line pt-3')}>
              <span className="font-semibold text-kuma-bark">ส่งมอบ:</span> {step.deliverable}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
