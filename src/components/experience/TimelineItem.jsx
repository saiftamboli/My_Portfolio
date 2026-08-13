import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

function TimelineItem({ entry, index }) {
  const isInternship = entry.type === 'internship'

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      custom={(index % 4) * 0.08}
      className="relative pl-9"
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-navy-deep shadow-[0_0_10px_rgba(228,54,74,0.6)] ${
          isInternship ? 'bg-web-blue' : 'bg-signal-red'
        }`}
      />
      <div className="glass glass-marks glass-hover relative overflow-hidden rounded-xl p-5 sm:p-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-6xl leading-none text-paper-white/[0.04] sm:text-7xl"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl tracking-wide text-paper-white sm:text-2xl">{entry.role}</h3>
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-impact-amber">
            {entry.period}
          </span>
        </div>

        <div className="relative mt-1 flex flex-wrap items-center gap-2">
          <p className="font-body text-sm font-semibold text-web-blue">
            {entry.company} · {entry.location}
          </p>
          {isInternship && (
            <span className="rounded-full border border-web-blue/50 px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-widest text-web-blue">
              Internship
            </span>
          )}
        </div>

        <ul className="relative mt-3 space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 font-body text-sm leading-relaxed text-paper-white/75">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-red/70" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default TimelineItem
