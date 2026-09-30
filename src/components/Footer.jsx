import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <a href="#" className="wordmark">
        {profile.initials}
        <span>.</span>
      </a>
      <p className="m-0 text-[12px] text-[#707070]">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#main" className="flex items-center gap-2">
        Back to top <ArrowUpRight size={15} />
      </a>
    </footer>
  )
}
