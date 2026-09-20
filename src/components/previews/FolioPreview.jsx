import { ArrowUpRight } from 'lucide-react'

export default function FolioPreview() {
  return (
    <div className="folio-window" aria-hidden="true">
      <header>
        <b>
          jules<span>®</span>
        </b>
        <span>Work &nbsp; About &nbsp; Contact ↗</span>
      </header>
      <div className="folio-caption">INDEPENDENT DESIGNER & DEVELOPER</div>
      <h4>
        Small details.
        <br />
        Big <em>difference.</em>
      </h4>
      <div className="folio-bottom">
        <p>
          I turn interesting ideas into
          <br />
          thoughtful digital experiences.
        </p>
        <span>
          LET’S TALK <ArrowUpRight size={13} />
        </span>
      </div>
      <div className="folio-line" />
      <div className="folio-selected">
        <span>SELECTED WORK</span>
        <span>2024 — 2025</span>
      </div>
    </div>
  )
}
