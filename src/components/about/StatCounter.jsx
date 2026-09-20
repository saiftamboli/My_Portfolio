import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function useCountUp(target, active, decimals, duration = 1400) {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)

  useEffect(() => {
    if (!active) return
    let frame
    const factor = 10 ** decimals
    function tick(timestamp) {
      if (startRef.current === null) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target * factor) / factor)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, decimals, duration])

  return value
}

function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  // Mirror the source value's precision so 2.4 counts up as 2.4, not 2.
  const decimals = Number.isInteger(value) ? 0 : (String(value).split('.')[1] || '').length
  const display = useCountUp(value, inView, decimals).toFixed(decimals)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
      <p className="font-display text-2xl text-paper-white sm:text-3xl">
        {display}
        {suffix}
      </p>
      <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-paper-white/60 sm:text-xs">
        {label}
      </p>
    </div>
  )
}

export default StatCounter
