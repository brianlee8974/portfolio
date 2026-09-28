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
        <span className="side-index">&lt; hello, world /&gt;</span>
        <div className="code-card">
          <div className="code-top">
            <span />
            <span />
            <span />
            <small>about-me.js</small>
          </div>
          <code>
            <span className="font-bold text-[#444]">const</span> developer = {'{'}
            <br />
            <span className="pl-5">
              name: <span className="text-[#444]">'Taehyun Lee'</span>,
            </span>
            <br />
            <span className="pl-5">
              focus: <span className="text-[#444]">'Frontend'</span>,
            </span>
            <br />
            <span className="pl-5">
              loves: [<span className="text-[#444]">'Design'</span>,{' '}
              <span className="text-[#444]">'Code'</span>],
            </span>
            <br />
            <span className="pl-5">
              coffee: <span className="text-[#444]">true</span>
            </span>
            <br />
            {'}'}
            <br />
            <br />
            <span className="code-comment">// Always building something good.</span>
          </code>
          <div className="code-bottom">
            <span>JavaScript</span>
            <span>
              UTF-8 <span className="ml-3">✦</span>
            </span>
          </div>
        </div>
      </SlideIn>
      <div className="hero-footer">
        <span>GOOD DESIGN. CLEAN CODE. REAL IMPACT.</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
      </div>
    </section>
  )
}
