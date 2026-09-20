import { useMemo } from 'react'
import { motion } from 'framer-motion'

const VP = { x: 760, y: 430 }
const W = 1440
const H = 1024

const lerp = (a, b, t) => a + (b - a) * t

function seeded(i) {
  const s = Math.sin(i * 12.9898) * 43758.5453
  return s - Math.floor(s)
}

function buildWall(side) {
  const count = 9
  const pMax = 0.9
  const slabs = []

  for (let k = 0; k < count; k += 1) {
    const p1 = (k / count) * pMax
    const p2 = ((k + 1) / count) * pMax

    const xAt = (p) => (side === 'left' ? p * VP.x : W - p * (W - VP.x))

    const topJitter = seeded(k + side.length) * 120
    const botJitter = seeded(k * 2 + side.length) * 90

    const topAt = (p) => lerp(-140, VP.y, p) + topJitter * (1 - p)
    const botAt = (p) => lerp(H + 140, VP.y, p) - botJitter * (1 - p)

    const x1 = xAt(p1)
    const x2 = xAt(p2)
    const points = `${x1},${topAt(p1)} ${x2},${topAt(p2)} ${x2},${botAt(p2)} ${x1},${botAt(p1)}`

    const shade = k % 2 === 0 ? '#111a30' : '#0d1526'

    const windows = []
    const rows = 5
    for (let r = 0; r < rows; r += 1) {
      const rp = (r + 0.5) / rows
      const wp = lerp(p1, p2, 0.5)
      const wx = xAt(wp)
      const wy = lerp(topAt(wp), botAt(wp), rp)
      const lit = seeded(k * 7 + r * 3 + side.length)
      if (lit > 0.45) {
        const size = lerp(9, 2, wp)
        let color = 'rgba(120,150,210,0.5)'
        if (lit > 0.9) color = 'rgba(228,54,74,0.75)'
        else if (lit > 0.78) color = 'rgba(242,184,75,0.7)'
        windows.push({ x: wx - size / 2, y: wy, size, color, key: `${side}-${k}-${r}` })
      }
    }

    slabs.push({ points, shade, windows, key: `${side}-${k}` })
  }
  return slabs
}

export default function CityVertigo() {
  const walls = useMemo(() => [...buildWall('left'), ...buildWall('right')], [])
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${seeded(i) * 100}%`,
        top: `${seeded(i * 3) * 100}%`,
        size: 1 + seeded(i * 5) * 2,
        delay: seeded(i * 7) * 6,
        duration: 6 + seeded(i * 9) * 6,
      })),
    []
  )

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 53% 42%, #24304f 0%, #172038 38%, #0f1424 78%)',
        }}
      />

      <motion.svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <radialGradient id="glow" cx="53%" cy="42%" r="45%">
            <stop offset="0%" stopColor="#3a4d80" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f1424" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width={W} height={H} fill="url(#glow)" />

        {/* chromatic split copies of the skyline */}
        <g opacity="0.5" transform="translate(-4 0)">
          {walls.map((s) => (
            <polygon key={`r-${s.key}`} points={s.points} fill="#e4364a" opacity="0.12" />
          ))}
        </g>
        <g opacity="0.5" transform="translate(4 0)">
          {walls.map((s) => (
            <polygon key={`b-${s.key}`} points={s.points} fill="#2f5da8" opacity="0.12" />
          ))}
        </g>

        {walls.map((s) => (
          <g key={s.key}>
            <polygon points={s.points} fill={s.shade} stroke="#1c2740" strokeWidth="1.5" />
            {s.windows.map((w) => (
              <rect
                key={w.key}
                x={w.x}
                y={w.y}
                width={w.size}
                height={w.size * 1.4}
                fill={w.color}
                rx="0.5"
              />
            ))}
          </g>
        ))}

        {/* converging web-lines toward the vanishing point */}
        {[0.12, 0.3, 0.7, 0.88].map((t, i) => (
          <line
            key={`web-${i}`}
            x1={t * W}
            y1={t < 0.5 ? -20 : H + 20}
            x2={VP.x}
            y2={VP.y}
            stroke="#f4f1e8"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
      </motion.svg>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-paper-white/40"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}