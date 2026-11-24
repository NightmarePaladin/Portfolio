import { ArrowUp } from 'lucide-react'
import { personal } from '../data/personal'
import CopyEmail from './CopyEmail'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CopyEmail />
          <SocialLinks />
        </div>
        <a href="#home" className="flex items-center gap-1.5 text-sm text-muted hover:text-accent">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  )
}
