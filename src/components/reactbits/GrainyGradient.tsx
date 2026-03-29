export default function GrainyGradient() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: '#FDF0EC' }} />

      {/* Gradient orbs — more saturated */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 8% 28%,  #F5A898AA 0%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 92% 8%,  #FAC8B888 0%, transparent 60%),
            radial-gradient(ellipse 45% 50% at 55% 96%, #F0A89066 0%, transparent 60%)
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
