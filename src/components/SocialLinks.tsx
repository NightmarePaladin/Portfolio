import { isConfigured, personal } from '../data/personal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

// Email is shown as a copyable pill (see CopyEmail), not as an icon link.
const items = [
  { key: 'github', label: 'GitHub', href: personal.github, icon: <GithubIcon /> },
  { key: 'linkedin', label: 'LinkedIn', href: personal.linkedin, icon: <LinkedinIcon /> },
].filter((i) => isConfigured(i.href))

export default function SocialLinks({ className = '' }: { className?: string }) {
  if (items.length === 0) return null
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map((i) => (
        <li key={i.key}>
          <a
            href={i.href}
            aria-label={i.label}
            title={i.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {i.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
