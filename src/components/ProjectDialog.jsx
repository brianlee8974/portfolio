import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
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
        <p className="eyebrow">SAMPLE PROJECT · {project.year}</p>
        <h2 id="dialog-title">{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.detail}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="sample-note">
          Portfolio concept — no external live demo or repository is attached yet.
        </p>
      </div>
    </dialog>
  )
}
