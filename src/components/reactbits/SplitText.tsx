'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  startDelay?: number
}

export default function SplitText({
  text,
  className = '',
  delay = 45,
  duration = 650,
  startDelay = 150,
}: SplitTextProps) {
  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)
  const chars = Array.from(text)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    // trigger after short delay to ensure DOM is ready
    const t = setTimeout(() => controls.start('visible'), startDelay)
    return () => clearTimeout(t)
  }, [mounted, controls, startDelay])

  if (!mounted) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: duration / 1000,
                delay: (i * delay) / 1000,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
