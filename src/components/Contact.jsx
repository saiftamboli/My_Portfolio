import { motion } from 'framer-motion'
import { Download, Mail, Phone } from 'lucide-react'
import contactBg from '../assets/spiderman-filmmaker-01-qlbv-superJumbo.jpeg'
import { contact, hero, links } from '../data/content'
import { fadeUp } from '../lib/motion'
import ClickSpark from './fx/ClickSpark'
import Magnet from './fx/Magnet'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'

const CHANNELS = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, Icon: Mail },
  {
    label: 'LinkedIn',
    value: '/in/saif-tamboli',
    href: links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@saiftamboli',
    href: links.github,
    Icon: GitHubIcon,
    external: true,
  },
  { label: 'Phone', value: links.mobile, href: `tel:${links.mobile}`, Icon: Phone },
]

const viewport = { once: true, margin: '-80px' }

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-navy-deep">
      {/* Blurred ambient fill — shows behind/around the sharp photo, mainly visible on the left under the text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(48px) saturate(0.85)',
          opacity: 0.85,
        }}
      />

      {/* Sharp, un-cropped photo — full image, anchored right, nothing zoomed or lost */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(15,20,36,0.97) 0%, rgba(15,20,36,0.92) 30%, rgba(15,20,36,0.62) 55%, rgba(15,20,36,0.2) 80%, rgba(15,20,36,0.05) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32"
        style={{ background: 'linear-gradient(180deg, #151b2e 0%, transparent 100%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-xl">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.3em] text-impact-amber"
          >
            <span className="h-px w-8 bg-impact-amber/60" aria-hidden="true" />
            06 — Get in Touch
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            custom={0.08}
            className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-paper-white sm:text-6xl"
            style={{ textShadow: '-2px 0 0 rgba(47,93,168,0.7), 2px 0 0 rgba(228,54,74,0.7)' }}
          >
            {contact.heading}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            custom={0.16}
            className="mt-5 font-body text-base leading-relaxed text-paper-white/70 sm:text-lg"
          >
            {contact.intro}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            custom={0.24}
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            {CHANNELS.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="glass glass-hover group flex items-center gap-3 rounded-xl px-4 py-3 hover:-translate-y-0.5"
              >
                <Icon
                  size={18}
                  className="shrink-0 text-paper-white/55 transition-colors group-hover:text-impact-amber"
                />
                <span className="min-w-0">
                  <span className="block font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-paper-white/40">
                    {label}
                  </span>
                  <span className="block truncate font-body text-sm font-semibold text-paper-white">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            custom={0.32}
            className="mt-5"
          >
            <Magnet range={70}>
              <ClickSpark>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal-red px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.15em] text-paper-white shadow-[0_0_30px_rgba(228,54,74,0.35)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(228,54,74,0.55)] sm:text-sm"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </ClickSpark>
            </Magnet>
          </motion.div>
        </div>

        <footer className="mt-12 border-t border-paper-white/10 pt-5">
          <p className="font-body text-xs text-paper-white/40">
            © {new Date().getFullYear()} {hero.name} — {hero.location}
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
