import { ArrowUpRight } from 'lucide-react'
import ProjectPreview from './previews/ProjectPreview.jsx'
import SlideIn from './SlideIn.jsx'

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <SlideIn
      as="article"
      className={`project-card ${index === 0 ? 'project-featured' : ''}`}
      delay={index * 90}
    >
      <button
        onClick={() => onSelect(project)}
        className={`project-visual ${project.color}`}
        aria-label={`View ${project.name} project`}
      >
        <span className="project-number">0{index + 1}</span>
        <ProjectPreview projectId={project.id} />
        <span className="project-open">
          <ArrowUpRight size={23} />
        </span>
      </button>
      <div className="mt-5 mb-3 flex justify-between">
        <div>
          <button className="project-title" onClick={() => onSelect(project)}>
            {project.name}
            <ArrowUpRight size={20} className="w-[17px] text-[#969696]" />
          </button>
          <p className="mt-[5px] mb-0 text-[14px] text-[#646464]">{project.type}</p>
        </div>
        <span className="pt-[7px] text-[12px] text-[#8d8d8d]">{project.year}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </SlideIn>
  )
}
