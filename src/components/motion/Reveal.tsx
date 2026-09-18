'use client';

import type { ReactNode } from 'react';
import { motion, type TargetAndTransition } from 'motion/react';

const tags = { div: motion.div, li: motion.li, figure: motion.figure } as const;

interface RevealProps {
  children: ReactNode;
  as?: keyof typeof tags;
  className?: string;
  /** Seconds to wait after entering the viewport; use for staggering siblings. */
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  /** Optional hover state, e.g. a lift or tilt for cards. */
  hover?: TargetAndTransition;
}

/** Fades and slides its content in the first time it scrolls into view. */
export default function Reveal({ children, as = 'div', className, delay = 0, x = 0, y = 28, scale = 1, rotate = 0, hover }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y, scale, rotate }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      whileHover={hover ? { ...hover, transition: { type: 'spring', stiffness: 320, damping: 18 } } : undefined}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
