import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/projects'
import type { Project } from '../data/types'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const rank = (p: Project) => (p.primary ? 2 : p.featured ? 1 : 0)

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const [trigger, setTrigger] = useState<HTMLElement | null>(null)

  const visible = useMemo(() => {
    const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
    // Stable sort: primary first, then featured, otherwise original order.
    return list.map((p, i) => ({ p, i })).sort((a, b) => rank(b.p) - rank(a.p) || a.i - b.i).map((x) => x.p)
  }, [filter])

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading
        id="projects-title"
        label="03 / Projects"
        title="Selected work"
        intro="Open any project for the problem it addresses, what I contributed, and the decisions behind it."
      />

      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? 'border-accent bg-accent text-accent-fg'
                : 'border-line text-muted hover:border-accent hover:text-fg'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => {
          const wide = p.primary && visible.length > 1
          return (
            <li key={p.id} className={wide ? 'sm:col-span-2 lg:col-span-3' : ''}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <ProjectCard project={p} large={wide} onOpen={(el) => {
                    setTrigger(el)
                    setSelected(p)
                  }} />
              </Reveal>
            </li>
          )
        })}
      </ul>

      <ProjectDialog project={selected} trigger={trigger} onClose={() => setSelected(null)} />
    </section>
  )
}
