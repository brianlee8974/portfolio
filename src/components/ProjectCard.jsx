import { ArrowUpRight } from 'lucide-react'
import ProjectPreview from './previews/ProjectPreview.jsx'

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <article className={`project-card ${index === 0 ? 'project-featured' : ''}`}>
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
            <ArrowUpRight size={20} className="w-4.25 text-icon" />
          </button>
          <p className="mt-1.25 mb-0 text-sm/normal text-secondary">{project.type}</p>
        </div>
        <span className="pt-1.75 text-xs/normal text-subtle">{project.year}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
