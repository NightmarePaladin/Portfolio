import { FileText } from 'lucide-react'
import { personal } from '../data/personal'

// The viewer page (resume.html) shows the PDF in the browser and has the download button.
const href = `${import.meta.env.BASE_URL}resume.html`

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
        <FileText size={16} aria-hidden /> Resume (coming soon)
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      <FileText size={16} aria-hidden /> View Resume
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
