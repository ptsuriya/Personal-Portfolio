interface CurvedLoopProps {
  text: string
  className?: string
  speed?: number  // seconds per loop
  color?: string
  fontSize?: string
}

export default function CurvedLoop({
  text,
  className = '',
  speed = 18,
  color = '#C07B2A',
  fontSize = '13px',
}: CurvedLoopProps) {
  // Repeat text enough to fill the path
  const repeated = `${text}  ·  `.repeat(6)

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          <path
            id="curve"
            d="M 0 80 Q 300 20 600 80 Q 900 140 1200 80"
          />
        </defs>
        <text fill={color} fontSize={fontSize} opacity="0.5" fontFamily="Kanit, sans-serif">
          <textPath href="#curve" startOffset="0%">
            <animate
              attributeName="startOffset"
              from="0%"
              to="-50%"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
            {repeated}
          </textPath>
        </text>
        <text fill={color} fontSize={fontSize} opacity="0.5" fontFamily="Kanit, sans-serif">
          <textPath href="#curve" startOffset="50%">
            <animate
              attributeName="startOffset"
              from="50%"
              to="0%"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
            {repeated}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
