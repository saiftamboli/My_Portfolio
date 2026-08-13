import { useRef, useState } from 'react'

const COLORS = ['#e4364a', '#f2b84b', '#2f5da8']
const SPARK_COUNT = 8

/**
 * Wraps a clickable element and bursts a handful of colored particles
 * outward from the click point. Purely CSS-driven so each burst is cheap
 * to mount/unmount.
 */
function ClickSpark({ children, className = '' }) {
  const [bursts, setBursts] = useState([])
  const idRef = useRef(0)

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = idRef.current++
    const burst = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setBursts((prev) => [...prev, burst])
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id))
    }, 500)
  }

  return (
    <div onClickCapture={handleClick} className={`relative inline-flex ${className}`}>
      {children}
      {bursts.map((burst) => (
        <span
          key={burst.id}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: burst.x, top: burst.y }}
        >
          {Array.from({ length: SPARK_COUNT }, (_, i) => {
            const angle = (360 / SPARK_COUNT) * i
            return (
              <span
                key={i}
                className="spark-particle"
                style={{
                  '--spark-angle': `${angle}deg`,
                  '--spark-color': COLORS[i % COLORS.length],
                }}
              />
            )
          })}
        </span>
      ))}
    </div>
  )
}

export default ClickSpark
