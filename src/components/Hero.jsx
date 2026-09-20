import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import heroBgDesktop from '../assets/Hero_section.webp'
import heroBgMobile from '../assets/for mobile view.webp'
import { hero, links } from '../data/content'
import { fadeUp } from '../lib/motion'
import ClickSpark from './fx/ClickSpark'
import DecryptedText from './fx/DecryptedText'
import Magnet from './fx/Magnet'
import HalftoneOverlay from './hero/HalftoneOverlay'

const ACTIONS = [
  { label: 'View My Work', href: '#projects', variant: 'primary', arrow: true },
  { label: 'Get In Touch', href: '#contact', variant: 'ghost', arrow: false },
  { label: 'Resume', href: links.resume, variant: 'light', arrow: true, external: true },
]

const VARIANTS = {
  primary:
    'bg-signal-red text-paper-white shadow-[0_0_30px_rgba(228,54,74,0.35)] hover:shadow-[0_0_45px_rgba(228,54,74,0.55)]',
  ghost:
    'border border-paper-white/25 bg-paper-white/5 text-paper-white backdrop-blur-sm hover:border-paper-white/60 hover:bg-paper-white/10',
  light: 'bg-paper-white text-navy-deep hover:bg-white',
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full flex-col overflow-hidden bg-navy-deep"
    >
      {/* <picture> rather than a CSS background: a media-query custom property
          makes the browser fetch both candidate images, srcset fetches only
          the matching one. */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBgMobile} />
          <img
            src={heroBgDesktop}
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(95deg, rgba(9,12,22,0.95) 0%, rgba(9,12,22,0.87) 35%, rgba(9,12,22,0.52) 62%, rgba(9,12,22,0.22) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(9,12,22,0.8) 0%, transparent 28%, transparent 55%, #151b2e 100%)',
        }}
      />

      <HalftoneOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-2 top-1/2 -translate-y-[58%] select-none font-display leading-none text-signal-red/[0.09] sm:-left-4"
          style={{ fontSize: 'clamp(9rem, 26vw, 22rem)' }}
        >
          SAIF
        </span>

        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-paper-white/20 bg-paper-white/[0.07] px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-paper-white/90 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-impact-amber opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-impact-amber" />
          </span>
          Available for opportunities
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.1}
          className="relative font-display text-6xl leading-[0.92] tracking-wide text-paper-white sm:text-7xl md:text-8xl lg:text-9xl"
          style={{
            textShadow:
              '-3px 0 0 rgba(47,93,168,0.75), 3px 0 0 rgba(228,54,74,0.75), 0 10px 40px rgba(0,0,0,0.6)',
          }}
        >
          <DecryptedText text={hero.name} />
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.2}
          className="relative mt-5 font-body text-sm font-bold uppercase tracking-[0.22em] text-paper-white sm:text-lg sm:tracking-[0.3em]"
        >
          {hero.roleParts[0]} <span className="text-signal-red">×</span> {hero.roleParts[1]}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.3}
          className="relative mt-4 max-w-xl font-body text-base text-paper-white/65 sm:text-lg"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.42}
          className="relative mt-8 flex flex-wrap gap-3 sm:gap-4"
        >
          {ACTIONS.map((action) => (
            <Magnet key={action.label} range={70}>
              <ClickSpark>
                <a
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 sm:px-8 sm:text-sm ${VARIANTS[action.variant]}`}
                >
                  {action.label}
                  {action.arrow && <ArrowUpRight size={16} />}
                </a>
              </ClickSpark>
            </Magnet>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1 text-paper-white/50 transition-colors hover:text-impact-amber"
        aria-label="Scroll to About section"
      >
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
