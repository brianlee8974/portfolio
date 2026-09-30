import DeskCanvasPreview from './DeskCanvasPreview.jsx'
import SkinCancerPreview from './SkinCancerPreview.jsx'
import TowerDefencePreview from './TowerDefencePreview.jsx'

const previews = {
  deskcanvas: DeskCanvasPreview,
  skincancer: SkinCancerPreview,
  towerdefence: TowerDefencePreview,
}

export default function ProjectPreview({ projectId }) {
  const Preview = previews[projectId]
  return Preview ? <Preview /> : null
}
