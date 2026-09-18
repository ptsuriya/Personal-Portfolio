'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';

// Turns transform animations off for visitors who ask their OS for reduced motion.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
