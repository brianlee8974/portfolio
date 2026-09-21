import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <a href="#" className="wordmark">
        {profile.initials}
        <span>.</span>
      </a>
      <p className="m-0 text-xs/normal text-caption">
        © {new Date().getFullYear()} {profile.name} <span className="px-2.5">·</span>{' '}
        Built with care & a little caffeine.
      </p>
      <a href="#main" className="flex items-center gap-2">
        Back to top <ArrowUpRight size={15} />
      </a>
    </footer>
  )
}
