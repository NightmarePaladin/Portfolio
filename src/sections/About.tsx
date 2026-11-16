import { Check, GraduationCap, Plane, Headset } from 'lucide-react'
import { personal } from '../data/personal'
import { education } from '../data/education'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  { icon: Plane, title: 'U.S. Air Force, 2013–2017', text: 'F-16 maintainer, then support technician and supervisor.' },
  {
    icon: Headset,
    title: 'Field & technical roles, 2017–2022',
    text: 'Geek Squad repair, plant production, and field service on 3D printers.',
  },
  {
    icon: GraduationCap,
    title: education.school,
    text: `B.S. Computer Engineering, ${education.date}.`,
  },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading id="about-title" label="01 / About" title="From the flight line to computer engineering" />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {personal.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="grid gap-x-6 gap-y-2 pt-3 text-base sm:grid-cols-2">
            {personal.strengths.map((s) => (
              <li key={s} className="flex items-center gap-2 text-fg">
                <Check size={16} className="shrink-0 text-accent" aria-hidden /> {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="relative space-y-6 border-l border-line pl-8" aria-label="Career timeline">
            {timeline.map(({ icon: Icon, title, text }) => (
              <li key={title} className="relative">
                <span className="absolute -left-[3.2rem] flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-accent">
                  <Icon size={16} aria-hidden />
                </span>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
