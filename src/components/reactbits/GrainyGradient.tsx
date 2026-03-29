export default function GrainyGradient() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Rich warm gradient — multiple orbs */}
      <div
        className="absolute inset-0"
        style={{
          background: '#F9EDD4',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 8% 35%, #E8943A55 0%, transparent 70%),
            radial-gradient(ellipse 45% 45% at 92% 10%, #F0B86044 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 50% 95%, #E89A4833 0%, transparent 65%)
          `,
        }}
      />
      {/* Grain */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.07 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="g">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>
    </div>
  )
}
