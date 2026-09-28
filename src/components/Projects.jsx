import { useState } from 'react'
import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectDialog from './ProjectDialog.jsx'
import SlideIn from './SlideIn.jsx'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="work" className="work-section page-width">
        <SlideIn className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> SELECTED WORK
            </p>
            <h2>
              A few things I’ve <span className="serif">made.</span>
            </h2>
          </div>
        </SlideIn>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
