import Image from 'next/image';
import Float from '@/components/motion/Float';
import Reveal from '@/components/motion/Reveal';
import { comingSoonService, contact } from '@/data/site';
import { buttonClass, stickerCard } from './styles';
import { cn } from '@/lib/utils';

/** Announcement card for a service that is not open for orders yet. */
export default function ComingSoonBanner({ className }: { className?: string }) {
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(comingSoonService.mailSubject)}`;

  return (
    <Reveal y={40} className={cn(stickerCard, 'relative flex flex-col gap-6 overflow-hidden bg-kuma-cream p-6 sm:flex-row sm:items-center sm:p-8', className)}>
      <Float className="w-20 shrink-0 sm:w-24" distance={8} duration={4} sway={8}>
        <Image src="/image/Asset/39.png" alt="" width={160} height={160} className="h-auto w-full -rotate-12" />
      </Float>
      <div className="flex-1">
        <p className="inline-flex items-center gap-2 rounded-full border-2 border-kuma-bark bg-kuma-gold px-3 py-0.5 text-sm font-bold text-kuma-bark">
          เร็ว ๆ นี้
        </p>
        <h3 className="mt-3 text-2xl font-extrabold leading-snug text-kuma-bark">
          {comingSoonService.title} <span className="text-kuma-clay">({comingSoonService.subtitle})</span>
        </h3>
        <p className="mt-2 max-w-2xl leading-7 text-kuma-clay">{comingSoonService.description}</p>
      </div>
      <a href={mailto} className={buttonClass('secondary', 'shrink-0 self-start sm:self-center')}>
        สอบถามล่วงหน้า
      </a>
    </Reveal>
  );
}
