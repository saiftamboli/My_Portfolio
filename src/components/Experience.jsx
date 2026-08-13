import experienceBg from '../assets/spider-man-brand-new-day.jpg'
import { experience } from '../data/content'
import SectionBackground from './ui/SectionBackground'
import SectionHeading from './ui/SectionHeading'
import TimelineItem from './experience/TimelineItem'

function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-navy-deep px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionBackground
        image={experienceBg}
        opacity={0.4}
        position="center 22%"
        overlay="linear-gradient(180deg, rgba(15,20,36,0.82) 0%, rgba(15,20,36,0.68) 40%, rgba(15,20,36,0.84) 100%)"
      />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading tag="02" title="Experience" subtitle="Where the work happened." />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-signal-red/60 via-web-blue/40 to-transparent"
          />
          <div className="space-y-4">
            {experience.map((entry, index) => (
              <TimelineItem key={`${entry.role}-${entry.company}`} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
