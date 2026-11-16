import { Download } from 'lucide-react'
import { personal } from '../data/personal'

const href = `${import.meta.env.BASE_URL}${personal.resume.path}`

export default function ResumeButton({
  variant = 'primary',
  className = '',
}: {
  variant?: 'primary' | 'ghost'
  className?: string
}) {
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`
  if (!personal.resume.enabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Resume coming soon"
        className={cls}
      >
        <Download size={16} aria-hidden /> Resume (coming soon)
      </span>
    )
  }
  return (
    <a href={href} download={personal.resume.downloadName} className={cls}>
      <Download size={16} aria-hidden /> Download Resume
    </a>
  )
}
