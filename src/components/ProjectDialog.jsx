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
        <p className="text-base leading-spacious text-muted">{project.description}</p>
        <p className="text-base leading-spacious text-muted">{project.detail}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.url ? (
          <a
            className="button-primary mt-6"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <p className="mt-6.25 mb-0 text-xs leading-spacious text-muted">
            Portfolio concept — no external live demo or repository is attached yet.
          </p>
        )}
      </div>
    </dialog>
  )
}
