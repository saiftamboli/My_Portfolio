import { motion } from 'framer-motion'
import { BadgeCheck, BarChart3, Database, Layers } from 'lucide-react'
import capabilitiesBg from '../assets/Landing_page_loading_image.jpeg'
import { capabilities, certifications } from '../data/content'
import { fadeUp } from '../lib/motion'
import CapabilityCard from './capabilities/CapabilityCard'
import SectionBackground from './ui/SectionBackground'
import SectionHeading from './ui/SectionHeading'

const ICONS = {
  'Data & Query': Database,
  'Analytics & BI': BarChart3,
  'Product & Process': Layers,
}

const ACCENTS = [
  { line: 'from-signal-red', icon: 'text-signal-red', ring: 'hover:border-signal-red/45' },
  { line: 'from-web-blue', icon: 'text-web-blue', ring: 'hover:border-web-blue/45' },
  { line: 'from-impact-amber', icon: 'text-impact-amber', ring: 'hover:border-impact-amber/45' },
]

const viewport = { once: true, margin: '-80px' }

function Capabilities() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-navy-deep px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionBackground
        image={capabilitiesBg}
        opacity={0.34}
        position="center 30%"
        overlay="linear-gradient(180deg, rgba(15,20,36,0.84) 0%, rgba(15,20,36,0.72) 40%, rgba(15,20,36,0.84) 100%)"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading tag="04" title="Capabilities" subtitle="The stack behind the work." />

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((group, index) => (
            <CapabilityCard
              key={group.category}
              group={group}
              index={index}
              Icon={ICONS[group.category] ?? Database}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          custom={0.2}
          className="mt-6 border-t border-paper-white/10 pt-5"
        >
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-paper-white/40">
            Certified in
          </p>
          <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2.5 font-body text-sm text-paper-white/70">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-web-blue" />
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Capabilities
