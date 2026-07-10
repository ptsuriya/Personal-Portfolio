'use client';
import { motion } from 'framer-motion';
import type { ProcessStep } from '@/data/process';

interface TimelineProps {
  steps: ProcessStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="relative ml-4 space-y-8 border-l-2 border-dashed border-[#E8B8A8]/60 pl-8 sm:ml-6 sm:pl-10">
      {steps.map((step, i) => (
        <motion.li
          key={step.step}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="absolute -left-[2.65rem] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C86858]/40 bg-[#FFF6F0] text-2xl shadow-[0_8px_20px_rgba(184,108,86,0.18)] sm:-left-[3.15rem]">
            {step.icon}
          </span>

          <div className="rounded-2xl border border-[#E8B8A8]/60 bg-[#FAE4DC]/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#2A1010] px-2.5 py-0.5 font-mono text-[10px] text-[#FAD4C0]">
                STEP {String(step.step).padStart(2, '0')}
              </span>
              <span className="rounded-full border border-[#C86858]/30 bg-white/40 px-2.5 py-0.5 text-[10px] font-semibold text-[#C86858]">
                {step.duration}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#2A1010]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#7A4838]">{step.description}</p>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/40 p-3 text-xs text-[#9A6858]">
              <span className="mt-0.5 text-[#C86858]">📦</span>
              <div>
                <span className="font-semibold text-[#2A1010]">ส่งมอบ:</span> {step.deliverable}
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
