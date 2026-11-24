import { ArrowRight, MapPin } from 'lucide-react'
import { personal } from '../data/personal'
import CopyEmail from '../components/CopyEmail'
import ResumeButton from '../components/ResumeButton'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="chip mb-6 !text-accent">{personal.shortTitle}</p>
          <h1 id="hero-title">
            <span className="block text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {personal.headline[0]}
            </span>
            <span className="text-gradient mt-3 block text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              {personal.headline[1]}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{personal.heroIntro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} aria-hidden />
            </a>
            <ResumeButton variant="ghost" />
            <CopyEmail />
            <SocialLinks className="ml-1" />
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} aria-hidden /> {personal.location}
          </p>
        </div>
      </div>
    </section>
  )
}
