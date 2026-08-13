import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../../lib/motion'
import { useSpotlight } from '../../lib/useSpotlight'

function ProjectCard({ project, index }) {
  const spotlight = useSpotlight('rgba(228, 54, 74, 0.14)')

  return (
    <motion.a
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      style={spotlight.style}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={(index % 4) * 0.06}
      className="group spotlight-card glass glass-marks glass-hover relative flex flex-col overflow-hidden rounded-xl p-5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-signal-red via-impact-amber to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between gap-3">
        <span className="font-display text-lg leading-none text-paper-white/25 transition-colors group-hover:text-signal-red">
          {String(index + 1).padStart(2, '0')}
        </span>
        <ArrowUpRight
          size={16}
          className="mt-0.5 shrink-0 text-paper-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-impact-amber"
        />
      </div>

      <h3 className="mt-2 font-display text-xl leading-tight tracking-wide text-paper-white transition-colors group-hover:text-impact-amber">
        {project.title}
      </h3>
      <p className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-web-blue">
        {project.tools.join(' · ')}
      </p>
      <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-paper-white/60">
        {project.summary}
      </p>

      <div className="mt-3 flex items-baseline gap-2 border-t border-paper-white/10 pt-3">
        <span className="font-display text-2xl leading-none text-paper-white">{project.stat.value}</span>
        <span className="font-body text-[10px] uppercase tracking-[0.14em] text-paper-white/45">
          {project.stat.label}
        </span>
      </div>
    </motion.a>
  )
}

export default ProjectCard
