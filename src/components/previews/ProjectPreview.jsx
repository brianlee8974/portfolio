import OrbitPreview from './OrbitPreview.jsx'
import FormaPreview from './FormaPreview.jsx'
import FolioPreview from './FolioPreview.jsx'

const previews = {
  orbit: OrbitPreview,
  forma: FormaPreview,
  folio: FolioPreview,
}

export default function ProjectPreview({ projectId }) {
  const Preview = previews[projectId]
  return Preview ? <Preview /> : null
}
