import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import SlideIn from './SlideIn.jsx'

export default function Hero() {
  return (
    <section className="hero page-width">
      <div className="hero-main">
        <SlideIn className="availability">
          <span /> Available for new opportunities
        </SlideIn>
        <SlideIn as="p" className="hero-intro" delay={60}>
          Hey, I’m {profile.name}
        </SlideIn>
        <SlideIn as="h1" delay={120}>
          I build things
          <br />
          for the <span className="hero-serif">web.</span>
        </SlideIn>
        <SlideIn as="p" className="hero-description" delay={200}>
          A creative developer turning thoughtful design into
          <br className="desktop-break" /> memorable digital experiences. Based in{' '}
          {profile.location}.
        </SlideIn>
        <SlideIn className="hero-actions" delay={280}>
          <a href="#work" className="button-primary">
            Explore my work <ArrowDown size={17} />
          </a>
          <a
            href="/resume.pdf"
            className="text-link resume-link"
            target="_blank"
            rel="noreferrer"
          >
            View my resume <ArrowUpRight size={16} />
          </a>
        </SlideIn>
      </div>
      <SlideIn className="hero-side" delay={180}>
        <div
          className="headshot-frame"
          role="img"
          aria-label="Headshot of Taehyun Lee"
          style={{ backgroundImage: "url('/images/headshot.jpg')" }}
        />
      </SlideIn>
    </section>
  )
}
