import { Mail, MapPin } from 'lucide-react'
import { isConfigured, personal } from '../data/personal'
import CopyEmail from '../components/CopyEmail'
import ResumeButton from '../components/ResumeButton'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'

export default function Contact() {
  const hasEmail = isConfigured(personal.email)
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal>
        <div className="card relative overflow-hidden p-8 text-center sm:p-14">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-70"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, var(--glow), transparent 65%)' }}
          />
          <div className="relative">
            <p className="section-label mb-3">05 / Contact</p>
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s Build Something Together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              I am looking for software engineering, systems engineering, embedded software, and AI engineering roles.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
              <MapPin size={16} aria-hidden /> {personal.location}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {hasEmail ? (
                <CopyEmail />
              ) : (
                <span className="btn btn-ghost" role="link" aria-disabled="true" title="Email coming soon">
                  <Mail size={16} aria-hidden /> Email coming soon
                </span>
              )}
              <ResumeButton variant="primary" />
            </div>
            <SocialLinks className="mt-6 justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
