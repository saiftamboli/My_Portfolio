import { useRef } from 'react'

/**
 * Returns props to spread onto any element to get the `.spotlight-card`
 * cursor-tracking glow (see theme.css) without requiring a wrapper div —
 * useful when the target is already a framer-motion element.
 */
export function useSpotlight(spotlightColor = 'rgba(228, 54, 74, 0.16)') {
  const ref = useRef(null)

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return { ref, onMouseMove, style: { '--spot-color': spotlightColor } }
}
