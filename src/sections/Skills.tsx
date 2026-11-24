import { Brain, Code2, Layers, Network, Server, Wrench } from 'lucide-react'
import { skillCategories, type SkillCategory } from '../data/skills'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons: Record<SkillCategory['icon'], typeof Code2> = {
  code: Code2,
  layers: Layers,
  server: Server,
  network: Network,
  tools: Wrench,
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
          intro="What I work with, grouped by how I use it."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c, i) => {
            const Icon = icons[c.icon]
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.05} className="h-full">
                <div className="card card-hover flex h-full flex-col p-5 sm:p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="break-words text-lg font-semibold">{c.title}</h3>
                  <ul className="mt-4 flex flex-wrap content-start gap-1.5">
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
