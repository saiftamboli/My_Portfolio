import { useRef } from 'react'

/**
 * Wraps children in a card whose ::before radial-gradient glow tracks the
 * cursor via CSS custom properties, set imperatively on mousemove to avoid
 * a React re-render per pixel.
 */
function SpotlightCard({ children, className = '', spotlightColor = 'rgba(228, 54, 74, 0.16)' }) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={{ '--spot-color': spotlightColor }}
    >
      {children}
    </div>
  )
}

export default SpotlightCard
