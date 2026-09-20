import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <a href="#" className="wordmark">
        {profile.initials}
        <span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} {profile.name} <span>·</span> Built with care & a
        little caffeine.
      </p>
      <a href="#main">
        Back to top <ArrowUpRight size={15} />
      </a>
    </footer>
  )
}
