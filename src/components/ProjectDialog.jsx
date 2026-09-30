import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import ProjectPreview from './previews/ProjectPreview.jsx'

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="project-dialog"
      aria-labelledby="dialog-title"
    >
      <button className="dialog-close" onClick={onClose} aria-label="Close project">
        <X size={20} />
      </button>
      <div className={`project-visual ${project.color}`}>
        <ProjectPreview projectId={project.id} />
      </div>
      <div className="dialog-content">
        <p className="eyebrow">
          {project.url ? 'FEATURED PROJECT' : 'SAMPLE PROJECT'} · {project.year}
        </p>
        <h2 id="dialog-title">{project.name}</h2>
        <p className="text-base leading-[1.8] text-[#737373]">{project.description}</p>
        <p className="text-base leading-[1.8] text-[#737373]">{project.detail}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.url || project.repositoryUrl ? (
          <div className="project-links">
            {project.url && (
              <a
                className="button-primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}
                <ArrowUpRight size={18} />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                className="project-link-secondary"
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.repositoryLabel || 'Repository'}
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        ) : (
          <p className="mt-[25px] mb-0 text-[12px] leading-[1.8] text-[#737373]">
            Portfolio concept — no external live demo or repository is attached yet.
          </p>
        )}
      </div>
    </dialog>
  )
}
