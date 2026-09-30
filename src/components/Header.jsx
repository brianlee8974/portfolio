import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="page-width flex items-center justify-between h-full">
        <a href="#" className="wordmark" aria-label={`${profile.name} home`}>
          {profile.initials}
          <span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href={`mailto:${profile.email}`} className="header-cta">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
