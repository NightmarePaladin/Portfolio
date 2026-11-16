import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/projects'
import type { Project } from '../data/types'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = useMemo(() => {
    const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
  }, [filter])

  const hasPlaceholders = projects.some((p) => p.placeholder)

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading
        id="projects-title"
        label="03 / Projects"
        title="Selected work"
        intro="Case studies covering the problem, my contribution, and what I learned."
      />

      {hasPlaceholders && (
        <p className="mb-8 rounded-lg border border-dashed border-line bg-surface p-4 text-sm text-muted">
          Projects marked <strong className="text-fg">Placeholder</strong> are templates awaiting real details and are not
          completed work. Edit <code className="font-mono text-accent">src/data/projects.ts</code> to replace them.
        </p>
      )}

      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
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

      {visible.length === 0 ? (
        <p className="card p-8 text-center text-muted">No projects in this category yet.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <ProjectCard project={p} onOpen={() => setSelected(p)} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
