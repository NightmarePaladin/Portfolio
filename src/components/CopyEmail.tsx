import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { isConfigured, personal } from '../data/personal'

/** Legacy fallback for browsers or contexts where the async clipboard API is unavailable. */
function legacyCopy(text: string) {
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand('copy')
  } finally {
    document.body.removeChild(ta)
  }
}

/** A pill showing the email address. Clicking it copies the address to the clipboard. */
export default function CopyEmail({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  if (!isConfigured(personal.email)) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
    } catch {
      legacyCopy(personal.email)
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy email address"
      aria-label={`Copy email address ${personal.email}`}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm text-fg transition-colors hover:border-accent ${className}`}
    >
      <Mail size={16} aria-hidden className="shrink-0 text-accent" />
      <span className="break-all">{personal.email}</span>
      <span className="flex shrink-0 items-center gap-1 text-xs text-muted" aria-hidden>
        {copied ? (
          <>
            <Check size={14} className="text-accent" /> Copied
          </>
        ) : (
          <Copy size={14} />
        )}
      </span>
      <span role="status" className="sr-only">
        {copied ? 'Email address copied' : ''}
      </span>
    </button>
  )
}
