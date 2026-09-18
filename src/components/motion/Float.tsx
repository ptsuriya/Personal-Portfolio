'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FloatProps {
  children: ReactNode;
  className?: string;
  /** How far it drifts up, in px. */
  distance?: number;
  /** Seconds per up-and-down cycle. */
  duration?: number;
  delay?: number;
  /** Extra sway in degrees for stickers. */
  sway?: number;
}

/** Slow, gentle bobbing for stickers and mascots. */
export default function Float({ children, className, distance = 8, duration = 5, delay = 0, sway = 0 }: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0], rotate: sway ? [0, sway, 0] : 0 }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
