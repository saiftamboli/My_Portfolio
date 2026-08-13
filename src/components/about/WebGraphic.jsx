import { motion } from 'framer-motion'

const CENTER = 100
const SPOKE_COUNT = 8
const RINGS = [24, 42, 59, 74, 88]
const STEP = 360 / SPOKE_COUNT

const toPoint = (radius, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180
  return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)]
}

const SPOKES = Array.from({ length: SPOKE_COUNT }, (_, i) => {
  const [x, y] = toPoint(RINGS.at(-1), i * STEP)
  return { id: i, d: `M ${CENTER} ${CENTER} L ${x.toFixed(2)} ${y.toFixed(2)}` }
})

const STRANDS = RINGS.flatMap((radius, ringIndex) =>
  Array.from({ length: SPOKE_COUNT }, (_, i) => {
    const [x1, y1] = toPoint(radius, i * STEP)
    const [x2, y2] = toPoint(radius, (i + 1) * STEP)
    const [cx, cy] = toPoint(radius * 0.86, (i + 0.5) * STEP)
    return {
      id: `${ringIndex}-${i}`,
      ringIndex,
      d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`,
    }
  }),
)

const NODES = [
  { r: RINGS[1], deg: STEP * 1, color: '#e4364a', size: 3.4 },
  { r: RINGS[3], deg: STEP * 3, color: '#2f5da8', size: 3 },
  { r: RINGS[2], deg: STEP * 5, color: '#f2b84b', size: 2.8 },
  { r: RINGS[4], deg: STEP * 6, color: '#e4364a', size: 2.6 },
  { r: RINGS[2], deg: 0, color: '#2f5da8', size: 2.6 },
].map((node, i) => {
  const [x, y] = toPoint(node.r, node.deg)
  return { ...node, id: i, x, y }
})

const viewport = { once: true, margin: '-80px' }

function WebGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-web-blue/15 blur-3xl" />

      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        {SPOKES.map((spoke) => (
          <motion.path
            key={spoke.id}
            d={spoke.d}
            stroke="#f4f1e8"
            strokeOpacity="0.28"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: spoke.id * 0.05, ease: 'easeOut' }}
          />
        ))}

        {STRANDS.map((strand) => (
          <motion.path
            key={strand.id}
            d={strand.d}
            stroke="#f4f1e8"
            strokeOpacity="0.34"
            strokeWidth="0.55"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{
              duration: 0.5,
              delay: 0.45 + strand.ringIndex * 0.12,
              ease: 'easeOut',
            }}
          />
        ))}

        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r="5"
          fill="#e4364a"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 1.1, ease: 'backOut' }}
          style={{ transformOrigin: 'center', filter: 'drop-shadow(0 0 6px rgba(228,54,74,0.9))' }}
        />

        {NODES.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1, 0.82, 1], opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, delay: 1.2 + node.id * 0.12, ease: 'easeOut' }}
            style={{
              transformOrigin: `${node.x}px ${node.y}px`,
              filter: `drop-shadow(0 0 5px ${node.color})`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default WebGraphic
