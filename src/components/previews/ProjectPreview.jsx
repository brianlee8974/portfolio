import DeskCanvasPreview from './DeskCanvasPreview.jsx'
import FolioPreview from './FolioPreview.jsx'
import SkinCancerPreview from './SkinCancerPreview.jsx'

const previews = {
  deskcanvas: DeskCanvasPreview,
  skincancer: SkinCancerPreview,
  folio: FolioPreview,
}

export default function ProjectPreview({ projectId }) {
  const Preview = previews[projectId]
  return Preview ? <Preview /> : null
}
