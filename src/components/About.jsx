import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import aboutBg from '../assets/Hero_Main_page.webp'
import { about, education, recognition } from '../data/content'
import { fadeUp } from '../lib/motion'
import SectionBackground from './ui/SectionBackground'
import SectionHeading from './ui/SectionHeading'
import StatCounter from './about/StatCounter'
import WebGraphic from './about/WebGraphic'

const viewport = { once: true, margin: '-100px' }

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-navy-twilight px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionBackground
        image={aboutBg}
        opacity={0.38}
        position="center 25%"
        overlay="linear-gradient(180deg, rgba(15,20,36,0.84) 0%, rgba(15,20,36,0.7) 40%, rgba(15,20,36,0.84) 100%)"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading tag="01" title="About" />

        <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="max-w-[240px] justify-self-center lg:max-w-none lg:justify-self-start"
          >
            <WebGraphic />
          </motion.div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              custom={0.08}
              className="max-w-2xl font-body text-base leading-relaxed text-paper-white/75 sm:text-lg"
            >
              {about.bio}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              custom={0.18}
              className="mt-6 grid grid-cols-3 gap-4 border-t border-paper-white/10 pt-5"
            >
              {about.stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          custom={0.26}
          className="mt-6 grid gap-3 sm:grid-cols-2"
        >
          <div className="group flex gap-3 glass glass-hover rounded-xl p-4 transition-colors hover:border-web-blue/40">
            <GraduationCap size={18} className="mt-0.5 shrink-0 text-web-blue" />
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-paper-white/40">
                Education
              </p>
              <p className="mt-1 font-body text-sm font-semibold text-paper-white">{education.degree}</p>
              <p className="mt-0.5 font-body text-xs text-paper-white/60">{education.school}</p>
              <p className="mt-0.5 font-body text-xs text-paper-white/45">
                {education.period} · {education.detail}
              </p>
            </div>
          </div>

          <div className="group flex gap-3 glass glass-hover rounded-xl p-4 transition-colors hover:border-impact-amber/40">
            <Award size={18} className="mt-0.5 shrink-0 text-impact-amber" />
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-paper-white/40">
                Recognition
              </p>
              <p className="mt-1 font-body text-sm font-semibold text-paper-white">{recognition.title}</p>
              <p className="mt-0.5 font-body text-xs text-paper-white/60">{recognition.detail}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
