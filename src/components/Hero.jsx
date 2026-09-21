import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section className="hero page-width">
      <div className="hero-main">
        <div className="availability">
          <span /> Available for new opportunities
        </div>
        <p className="hero-intro">Hey, I’m {profile.name}</p>
        <h1>
          I build things
          <br />
          for the <span className="hero-serif">web.</span>
        </h1>
        <p className="hero-description">
          A creative developer turning thoughtful design into
          <br className="desktop-break" /> memorable digital experiences. Based in{' '}
          {profile.location}.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button-primary">
            Explore my work <ArrowDown size={17} />
          </a>
          <a href="#about" className="text-link">
            A little about me <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="hero-side">
        <span className="side-index">&lt; hello, world /&gt;</span>
        <div className="code-card">
          <div className="code-top">
            <span />
            <span />
            <span />
            <small>about-me.js</small>
          </div>
          <code>
            <span className="font-bold text-code">const</span> developer = {'{'}
            <br />
            <span className="pl-5">
              name: <span className="text-code">'Taehyun Lee'</span>,
            </span>
            <br />
            <span className="pl-5">
              focus: <span className="text-code">'Frontend'</span>,
            </span>
            <br />
            <span className="pl-5">
              loves: [<span className="text-code">'Design'</span>,{' '}
              <span className="text-code">'Code'</span>],
            </span>
            <br />
            <span className="pl-5">
              coffee: <span className="text-code">true</span>
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
      </div>
      <div className="hero-footer">
        <span>GOOD DESIGN. CLEAN CODE. REAL IMPACT.</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
      </div>
    </section>
  )
}
