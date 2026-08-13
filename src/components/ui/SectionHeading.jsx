import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

function SectionHeading({ tag, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
      className={`mb-9 flex max-w-2xl flex-col gap-2 ${alignClass}`}
    >
      <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.3em] text-impact-amber">
        <span className="h-px w-8 bg-impact-amber/60" aria-hidden="true" />
        {tag}
      </span>
      <h2
        className="font-display text-4xl tracking-wide text-paper-white sm:text-5xl"
        style={{ textShadow: '-2px 0 0 rgba(47,93,168,0.7), 2px 0 0 rgba(228,54,74,0.7)' }}
      >
        {title}
      </h2>
      {subtitle && <p className="font-body text-paper-white/60">{subtitle}</p>}
    </motion.div>
  )
}

export default SectionHeading
