import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import SlideIn from './SlideIn.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-width">
      <div className="contact-panel">
        <SlideIn as="p" className="eyebrow">
          03 / WHAT’S NEXT?
        </SlideIn>
        <SlideIn as="h2" delay={80}>
          Have something
          <br />
          <span className="serif">good in mind?</span>
        </SlideIn>
        <SlideIn as="p" delay={160}>
          I’d love to hear about it. Let’s make something that matters.
        </SlideIn>
        <SlideIn
          as="a"
          href={`mailto:${profile.email}`}
          className="button-primary"
          delay={240}
        >
          Let’s talk <ArrowUpRight size={18} />
        </SlideIn>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  )
}
