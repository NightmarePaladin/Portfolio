import { GraduationCap, Plane, Headset } from 'lucide-react'
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
    text: `B.S. Computer Engineering, conferred ${education.date}.`,
  },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading id="about-title" label="01 / About" title="From the flight line to computer engineering" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <Reveal className="max-w-prose space-y-4 text-base leading-7 text-muted sm:space-y-6 sm:text-lg sm:leading-8">
          {personal.about.map((p, i) => (
            <p key={p} className={i === 0 ? 'text-lg leading-7 text-fg sm:text-xl sm:leading-9' : undefined}>
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          <h3 className="section-label mb-5">Timeline</h3>
          <ol className="relative space-y-6 border-l border-line pl-8" aria-label="Career timeline">
            {timeline.map(({ icon: Icon, title, text }) => (
              <li key={title} className="relative">
                <span className="absolute -left-[3.2rem] flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-accent">
                  <Icon size={16} aria-hidden />
                </span>
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
