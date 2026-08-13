import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { archive } from '../../data/content'
import { fadeUp } from '../../lib/motion'

function ArchiveCard() {
  return (
    <motion.a
      href={archive.href}
      target="_blank"
      rel="noreferrer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="electric-border group relative mt-6 block overflow-hidden rounded-2xl p-px transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background:
          'linear-gradient(135deg, rgba(228,54,74,0.7), rgba(47,93,168,0.5) 45%, rgba(242,184,75,0.6))',
      }}
    >
      <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-navy-deep/85 p-5 backdrop-blur-xl sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-signal-red/20 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-signal-red/40 bg-signal-red/10 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-signal-red">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-red opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-red" />
              </span>
              Live
            </span>

            <div>
              <h3 className="font-display text-xl tracking-wide text-paper-white sm:text-2xl">
                {archive.title}
              </h3>
              <p className="mt-0.5 font-body text-xs text-paper-white/60 sm:text-sm">{archive.detail}</p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-paper-white px-5 py-2.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-navy-deep transition-all duration-300 group-hover:gap-3 sm:self-auto">
            {archive.cta}
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default ArchiveCard
