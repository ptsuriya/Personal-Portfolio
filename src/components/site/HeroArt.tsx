'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Float from '@/components/motion/Float';
import { cn } from '@/lib/utils';

interface HeroStudy {
  slug: string;
  name: string;
  cover: string;
}

interface HeroArtProps {
  studies: HeroStudy[];
  rateLabel: string;
}

// Finished client sites fanning up behind KUMA's laptop, left to right.
const fanLayout = [
  { className: 'left-[2%] bottom-[44%]', rotate: -12 },
  { className: 'left-[24%] bottom-[52%]', rotate: 0 },
  { className: 'left-[46%] bottom-[44%]', rotate: 12 },
];

const spring = { type: 'spring', stiffness: 170, damping: 16 } as const;

/** Hero illustration: KUMA pops in, then the three client sites fan out of the laptop. */
export default function HeroArt({ studies, rateLabel }: HeroArtProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-0 w-[92%] -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src="/image/loader/firework.png" alt="" width={500} height={500} className="h-auto w-full" />
      </motion.div>

      <Float className="absolute right-[4%] top-[6%] w-[13%]" distance={10} duration={4} sway={10}>
        <Image src="/image/Asset/22.png" alt="" width={120} height={120} aria-hidden="true" className="h-auto w-full rotate-12" />
      </Float>

      {studies.slice(0, 3).map((study, index) => (
        <motion.div
          key={study.slug}
          className={cn('absolute z-10 w-[52%] origin-bottom', fanLayout[index].className)}
          initial={{ opacity: 0, y: 70, rotate: 0, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, rotate: fanLayout[index].rotate, scale: 1 }}
          whileHover={{ y: -10, transition: { type: 'spring', stiffness: 320, damping: 18 } }}
          transition={{ ...spring, delay: 0.45 + index * 0.12 }}
        >
          <Link href={`/work/${study.slug}`} className="block overflow-hidden rounded-xl border-2 border-kuma-bark bg-white shadow-[5px_5px_0_0_#2A1010]">
            <Image
              src={study.cover}
              alt={`ผลงาน ${study.name}`}
              width={1440}
              height={810}
              sizes="(min-width: 1024px) 300px, 56vw"
              priority={index === 1}
              className="h-auto w-full"
            />
          </Link>
        </motion.div>
      ))}

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-[8%] z-20 w-[84%]"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...spring, delay: 0.1 }}
      >
        <Float distance={5} duration={4.5} delay={1.2}>
          <Image src="/image/illustrations/hero-coding.webp" alt="" width={1000} height={766} priority className="h-auto w-full" />
        </Float>
      </motion.div>

      <motion.p
        className="absolute left-[2%] top-[8%] z-30 flex h-28 w-28 cursor-default flex-col items-center justify-center rounded-full border-2 border-kuma-bark bg-kuma-gold text-center text-kuma-bark shadow-[4px_4px_0_0_#2A1010] sm:h-32 sm:w-32"
        initial={{ opacity: 0, scale: 0, rotate: -70 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        whileHover={{ rotate: 0, scale: 1.06, transition: { type: 'spring', stiffness: 300, damping: 14 } }}
        transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.95 }}
      >
        <span className="text-sm font-medium">เริ่มต้น</span>
        <span className="text-2xl font-extrabold leading-none sm:text-3xl">{rateLabel}</span>
        <span className="text-sm font-medium">บาท</span>
      </motion.p>
    </div>
  );
}
