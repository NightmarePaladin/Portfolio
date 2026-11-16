import { ArrowRight, Cpu, Layers, MapPin, Server, Code2 } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { personal } from '../data/personal'
import ResumeButton from '../components/ResumeButton'
import SocialLinks from '../components/SocialLinks'

const layers = [
  { icon: Cpu, name: 'Hardware', desc: 'Aircraft systems, PLCs, diagnostics' },
  { icon: Server, name: 'Systems', desc: 'Linux, virtualization, networking' },
  { icon: Code2, name: 'Software', desc: 'C++, Python, JavaScript, SQL' },
  { icon: Layers, name: 'Solutions', desc: 'Tested, documented, maintainable' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
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
            <SocialLinks className="ml-1" />
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} aria-hidden /> {personal.location}
          </p>
        </div>

        <div aria-hidden className="relative mx-auto w-full max-w-md">
          <div className="card relative p-6">
            <p className="section-label mb-5">System stack</p>
            <div className="relative space-y-3">
              <span className="absolute left-[27px] top-6 bottom-6 w-px bg-line" />
              {!reduce && (
                <m.span
                  className="absolute left-[25px] h-2 w-2 rounded-full bg-accent"
                  animate={{ top: ['8%', '88%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                />
              )}
              {layers.map(({ icon: Icon, name, desc }) => (
                <div key={name} className="relative flex items-center gap-4 rounded-xl border border-line bg-surface-2 p-3">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
