import type { ReactNode } from 'react';
import Image from 'next/image';
import Float from '@/components/motion/Float';
import Reveal from '@/components/motion/Reveal';
import { container } from './styles';
import { cn } from '@/lib/utils';

interface PageIntroProps {
  title: ReactNode;
  description?: ReactNode;
  /** Decorative illustration from /public/image/Asset. */
  sticker?: string;
  children?: ReactNode;
}

export default function PageIntro({ title, description, sticker, children }: PageIntroProps) {
  return (
    <header className="bg-dots border-b-2 border-kuma-bark">
      <div className={cn(container, 'grid gap-8 pt-14 pb-14 sm:pt-20 sm:pb-20 md:grid-cols-12 md:items-center')}>
        <div className={sticker ? 'md:col-span-8' : 'md:col-span-12'}>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-[-0.025em] text-kuma-bark sm:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-kuma-clay">{description}</p>}
          {children}
        </div>
        {sticker && (
          <div className="relative hidden md:col-span-4 md:block" aria-hidden="true">
            <div className="absolute inset-4 rounded-full bg-kuma-gold/60" />
            <Reveal y={0} scale={0.6} rotate={-15} className="relative">
              <Float distance={8} duration={4.5}>
                <Image src={sticker} alt="" width={320} height={320} priority className="mx-auto h-auto w-full max-w-[16rem] rotate-3" />
              </Float>
            </Reveal>
          </div>
        )}
      </div>
    </header>
  );
}
