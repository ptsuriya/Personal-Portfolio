'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
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

const inView = { once: true, margin: '0px 0px -80px 0px' } as const;

export default function Timeline({ steps, compact = false }: TimelineProps) {
  return (
    <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {/* The trail between steps draws itself left to right */}
      <motion.span
        aria-hidden="true"
        className="absolute left-[12%] right-[12%] top-[5.5rem] hidden origin-left border-t-[3px] border-dashed border-kuma-bark/30 lg:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={inView}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.step}
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto h-44 w-44">
            <div className="absolute inset-4 rounded-full border-2 border-kuma-bark bg-kuma-honey" />
            {stepIllustrations[index] && (
              <motion.div
                className="relative h-full w-full"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ rotate: [0, -6, 6, -3, 0], transition: { duration: 0.6 } }}
                viewport={inView}
                transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.15 + index * 0.15 }}
              >
                <Image src={stepIllustrations[index]} alt="" width={260} height={260} className="h-full w-full object-contain p-1" />
              </motion.div>
            )}
            <motion.span
              aria-hidden="true"
              className="absolute -right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-kuma-bark bg-kuma-gold text-lg font-extrabold text-kuma-bark"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={inView}
              transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.35 + index * 0.15 }}
            >
              {step.step}
            </motion.span>
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
        </motion.li>
      ))}
    </ol>
  );
}
