'use client'
import { useRef, MouseEvent } from 'react'

interface GlareCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlareCard({ children, className = '' }: GlareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    glare.style.opacity = '1'
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, transparent 60%)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    glare.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-200 ease-out cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glare layer */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  )
}
