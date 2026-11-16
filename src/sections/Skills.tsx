import { Brain, Code2, GitBranch, Network, Server } from 'lucide-react'
import { skillCategories, type SkillCategory } from '../data/skills'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons: Record<SkillCategory['icon'], typeof Code2> = {
  code: Code2,
  server: Server,
  git: GitBranch,
  network: Network,
  brain: Brain,
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading
          id="skills-title"
          label="02 / Skills"
          title="Technical toolkit"
          intro="Tools and languages I work with, grouped by how I use them."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c, i) => {
            const Icon = icons[c.icon]
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card card-hover h-full p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
