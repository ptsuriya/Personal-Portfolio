import type { CSSProperties } from 'react'

interface ShinyTextProps {
  text: string
  className?: string
  speed?: number   // animation duration in seconds
  color?: string   // base text color
  shineColor?: string
}

export default function ShinyText({
  text,
  className = '',
  speed = 3,
  color = '#8B5E3C',
  shineColor = '#FFF0CC',
}: ShinyTextProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(
      120deg,
      ${color} 0%,
      ${color} 40%,
      ${shineColor} 50%,
      ${color} 60%,
      ${color} 100%
    )`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `shiny-sweep ${speed}s linear infinite`,
  }

  return (
    <span className={className} style={style}>
      {text}
    </span>
  )
}
