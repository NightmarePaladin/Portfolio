import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { personal } from '../data/personal'
import { useActiveSection } from '../hooks/useActiveSection'
import ResumeButton from './ResumeButton'

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const IDS = NAV.map((n) => n.id)

export default function Navbar({ theme, onToggle }: { theme: 'dark' | 'light'; onToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)

  const link = (n: (typeof NAV)[number], mobile = false) => (
    <a
      key={n.id}
      href={`#${n.id}`}
      onClick={() => setOpen(false)}
      aria-current={active === n.id ? 'true' : undefined}
      className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-fg ${
        active === n.id ? 'text-accent' : 'text-muted'
      } ${mobile ? 'block text-base' : ''}`}
    >
      {n.label}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
          {personal.name.split(' ')[0]}
          <span className="text-accent">.</span>
          {personal.name.split(' ')[1]}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => link(n))}
          <ThemeButton theme={theme} onToggle={onToggle} />
          <ResumeButton variant="ghost" className="ml-2 !py-1.5 !text-sm" />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton theme={theme} onToggle={onToggle} />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-fg hover:bg-surface"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col">{NAV.map((n) => link(n, true))}</div>
          <ResumeButton variant="primary" className="mt-3 w-full" />
        </div>
      )}
    </header>
  )
}

function ThemeButton({ theme, onToggle }: { theme: 'dark' | 'light'; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
