import { GraduationCap, Plane, Wrench } from 'lucide-react'
import { education } from '../data/education'
import { experience, type ExperienceEntry } from '../data/experience'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons: Record<ExperienceEntry['type'], typeof Plane> = {
  military: Plane,
  technical: Wrench,
  education: GraduationCap,
}

const list = (title: string, items: string[]) => (
  <div>
    <h4 className="text-sm font-semibold">{title}</h4>
    {items.length ? (
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <li key={i} className="chip">
            {i}
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-1 text-sm text-muted">None listed yet.</p>
    )}
  </div>
)

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading
          id="experience-title"
          label="04 / Experience"
          title="Experience & education"
          intro="Hands-on technical work, and the engineering education that formalizes it."
        />
        <ol className="space-y-5">
          {experience.map((e) => {
            const Icon = icons[e.type]
            return (
              <li key={e.id}>
                <Reveal>
                  <article className="card grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                      <Icon size={22} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{e.role}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {e.organization}
                        {e.location && <> · {e.location}</>}
                        {e.period && <> · {e.period}</>}
                      </p>
                      <p className="mt-4 leading-relaxed text-muted">{e.summary}</p>
                      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent">
                        {e.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills used">
                        {e.skills.map((s) => (
                          <li key={s} className="chip">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>

        <Reveal className="mt-16">
          <h3 id="education-title" className="mb-1 text-2xl font-semibold">
            Education
          </h3>
          <div className="card mt-5 p-6 sm:p-8">
            <p className="text-xl font-semibold">{education.school}</p>
            <p className="mt-1 text-muted">
              {education.degree} · {education.date}
            </p>
            <ul className="mt-5 space-y-1 text-sm text-muted">
              {education.other.map((o) => (
                <li key={o.name}>
                  <span className="text-fg">{o.name}</span> · {o.org} · {o.date}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {list('Coursework', education.coursework)}
              {list('Military training & certifications', education.certifications)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
