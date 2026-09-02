import { motion } from 'framer-motion'
import { BookOpen, Mountain, Puzzle, Zap } from 'lucide-react'
import offClockBg from '../assets/spiderman_scroll_effect.webp'
import { extracurricular, hobbies } from '../data/content'
import { fadeUp } from '../lib/motion'
import SectionBackground from './ui/SectionBackground'
import SectionHeading from './ui/SectionHeading'

const HOBBY_ICONS = [Puzzle, BookOpen, Mountain, Zap]
const viewport = { once: true, margin: '-80px' }

function OffTheClock() {
  return (
    <section
      id="beyond"
      className="relative scroll-mt-20 overflow-hidden bg-navy-twilight px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionBackground
        image={offClockBg}
        opacity={0.6}
        position="center top"
        overlay="linear-gradient(180deg, rgba(15,20,36,0.78) 0%, rgba(15,20,36,0.58) 45%, rgba(15,20,36,0.8) 100%)"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading tag="05" title="Off the Clock" subtitle="Where else the energy goes." />

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="space-y-0"
          >
            {extracurricular.map((item) => (
              <li
                key={item.role}
                className="group flex gap-3 border-t border-paper-white/10 py-3 transition-colors hover:bg-paper-white/[0.02]"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red/70 transition-colors group-hover:bg-impact-amber"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-paper-white">{item.role}</p>
                  <p className="mt-0.5 font-body text-xs text-paper-white/55">{item.detail}</p>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            custom={0.12}
          >
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-paper-white/40">
              Recharge
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {hobbies.map((hobby, index) => {
                const Icon = HOBBY_ICONS[index % HOBBY_ICONS.length]
                return (
                  <li
                    key={hobby}
                    className="glass glass-hover flex items-center gap-2 rounded-lg px-2.5 py-2.5 font-body text-xs text-paper-white/75"
                  >
                    <Icon size={15} className="shrink-0 text-web-blue" />
                    {hobby}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OffTheClock
