import DeskCanvasPreview from './DeskCanvasPreview.jsx'
import FormaPreview from './FormaPreview.jsx'
import FolioPreview from './FolioPreview.jsx'

const previews = {
  deskcanvas: DeskCanvasPreview,
  forma: FormaPreview,
  folio: FolioPreview,
}

export default function ProjectPreview({ projectId }) {
  const Preview = previews[projectId]
  return Preview ? <Preview /> : null
}
