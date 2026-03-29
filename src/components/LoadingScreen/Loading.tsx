'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'box' | 'shake' | 'unbox' | 'hidden'>('box');

  useEffect(() => {
    // กล่องอยู่ 400ms แล้วเริ่มเขย่า
    const t1 = setTimeout(() => setPhase('shake'), 400);
    // เปิดกล่อง หมีพุ่งออก
    const t2 = setTimeout(() => setPhase('unbox'), 1100);
    // หายไป
    const t3 = setTimeout(() => setPhase('hidden'), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'hidden') return null;

  const isUnboxed = phase === 'unbox';
  const isShaking = phase === 'shake';

  return (
    <div
      className="fixed inset-0 z-[999] overflow-hidden"
      style={{ backgroundColor: '#F5C4B8' }}
    >
      {/* Box / Unbox */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
        <Image
          src={isUnboxed ? '/image/loader/unbox.png' : '/image/loader/Box.png'}
          width={300}
          height={300}
          alt="loading box"
          className={`drop-shadow-lg ${isShaking ? 'animate-box-shake' : ''}`}
          priority
        />
      </div>

      {/* Firework */}
      {isUnboxed && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]">
          <Image
            src="/image/loader/firework.png"
            width={325}
            height={325}
            alt="firework"
            className="animate-popout"
            priority
          />
        </div>
      )}

      {/* Bear — พุ่งออกจากกล่อง */}
      {isUnboxed && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]">
          <Image
            src="/image/loader/inbox.png"
            width={275}
            height={275}
            alt="bear popping out"
            className="animate-shoot-out"
            priority
          />
        </div>
      )}
    </div>
  );
}
