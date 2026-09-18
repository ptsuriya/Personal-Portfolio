'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

/** Slow in-and-out swell, used for the sleeping bear. */
export default function Breathe({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: '50% 100%' }}
      animate={{ scaleY: [1, 1.04, 1], scaleX: [1, 1.015, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
