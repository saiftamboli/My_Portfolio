import projectsBg from '../assets/thumb-1920-1009981.jpg'
import { projects } from '../data/content'
import ArchiveCard from './projects/ArchiveCard'
import ProjectCard from './projects/ProjectCard'
import SectionBackground from './ui/SectionBackground'
import SectionHeading from './ui/SectionHeading'

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-navy-twilight px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionBackground
        image={projectsBg}
        opacity={0.38}
        position="center top"
        overlay="linear-gradient(180deg, rgba(15,20,36,0.82) 0%, rgba(15,20,36,0.7) 40%, rgba(15,20,36,0.82) 100%)"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          tag="03"
          title="Featured Projects"
          subtitle="Building solutions that matter."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <ArchiveCard />
      </div>
    </section>
  )
}

export default Projects
