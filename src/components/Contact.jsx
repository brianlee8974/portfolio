import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-width">
      <div className="contact-panel">
        <p className="eyebrow">03 / WHAT’S NEXT?</p>
        <h2>
          Have something
          <br />
          <span className="serif">good in mind?</span>
        </h2>
        <p>I’d love to hear about it. Let’s make something that matters.</p>
        <a href={`mailto:${profile.email}`} className="button-primary">
          Let’s talk <ArrowUpRight size={18} />
        </a>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  )
}
