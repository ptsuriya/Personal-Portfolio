import { cn } from '@/lib/utils';

// Sticker-style buttons: thick outline + hard offset shadow that presses in on hover.
const pressable =
  'border-2 border-kuma-bark shadow-[4px_4px_0_0_#2A1010] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#2A1010] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';

const variants = {
  primary: cn(pressable, 'bg-kuma-bark text-kuma-cream shadow-[4px_4px_0_0_#C07B2A] hover:shadow-[2px_2px_0_0_#C07B2A]'),
  secondary: cn(pressable, 'bg-white text-kuma-bark'),
  honey: cn(pressable, 'bg-kuma-gold text-kuma-bark'),
  outlineLight: 'border-2 border-kuma-cream/40 text-kuma-cream hover:border-kuma-cream hover:bg-kuma-cream/10',
} as const;

export function buttonClass(variant: keyof typeof variants = 'primary', className?: string) {
  return cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-150',
    variants[variant],
    className,
  );
}

export const stickerCard = 'rounded-3xl border-2 border-kuma-bark bg-white shadow-[6px_6px_0_0_#2A1010]';
export const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6';
export const sectionTitle = 'text-3xl font-extrabold leading-tight tracking-[-0.02em] text-kuma-bark sm:text-4xl lg:text-5xl';
export const bodyText = 'text-base leading-8 text-kuma-clay';
