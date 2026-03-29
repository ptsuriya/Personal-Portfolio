interface InfiniteMarqueeProps {
  text: string
  className?: string
  speed?: number   // seconds per loop
  color?: string
  separator?: string
}

export default function InfiniteMarquee({
  text,
  className = '',
  speed = 22,
  color = '#C07B2A',
  separator = ' · ',
}: InfiniteMarqueeProps) {
  const repeated = Array(8).fill(text).join(separator)

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div
        className="inline-block"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          color,
          opacity: 0.45,
          fontSize: '11px',
          letterSpacing: '0.08em',
          fontFamily: 'Kanit, sans-serif',
        }}
      >
        {repeated}&nbsp;&nbsp;&nbsp;&nbsp;{repeated}
      </div>
    </div>
  )
}
