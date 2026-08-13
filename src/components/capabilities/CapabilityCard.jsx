import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { useSpotlight } from '../../lib/useSpotlight'

const SPOTLIGHT_COLORS = ['rgba(228, 54, 74, 0.14)', 'rgba(47, 93, 168, 0.16)', 'rgba(242, 184, 75, 0.14)']

function CapabilityCard({ group, index, Icon, accent }) {
  const spotlight = useSpotlight(SPOTLIGHT_COLORS[index % SPOTLIGHT_COLORS.length])

  return (
    <motion.div
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      style={spotlight.style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      custom={index * 0.08}
      className={`spotlight-card glass glass-marks glass-hover group relative overflow-hidden rounded-xl p-5 ${accent.ring}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r to-transparent transition-transform duration-500 group-hover:scale-x-100 ${accent.line}`}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-6xl leading-none text-paper-white/[0.04]"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <Icon size={20} className={accent.icon} />
      <h3 className="mt-3 font-display text-lg tracking-wide text-paper-white">{group.category}</h3>
      <p className="mt-0.5 font-body text-xs text-paper-white/50">{group.note}</p>

      <ul className="mt-3 space-y-1.5 border-t border-paper-white/10 pt-3">
        {group.items.map((item) => (
          <li
            key={item}
            className="font-body text-sm text-paper-white/75 transition-colors group-hover:text-paper-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default CapabilityCard
