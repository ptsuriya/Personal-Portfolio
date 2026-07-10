export default function GrainyGradient() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: '#FDF6EC' }} />

      {/* Gradient orbs — more saturated */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 48% at 4% 20%,  #F5C9A088 0%, transparent 68%),
            radial-gradient(ellipse 46% 38% at 96% 8%,  #E8B8A866 0%, transparent 64%),
            radial-gradient(ellipse 44% 42% at 55% 100%, #C07B2A33 0%, transparent 64%)
          `,
        }}
      />

      {/* Grain — mix-blend-mode overlay ทำให้เห็นบน gradient */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.22, mixBlendMode: 'overlay' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  )
}
