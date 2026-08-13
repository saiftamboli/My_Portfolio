function HalftoneOverlay({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(244,241,232,0.9) 1px, transparent 1.4px)',
        backgroundSize: '5px 5px',
        mixBlendMode: 'overlay',
        opacity: 0.18,
      }}
    />
  )
}

export default HalftoneOverlay
