import { ArrowUpRight, Brain, Code2, Globe, Layers, Server } from 'lucide-react'
import type { Project, ProjectCategory } from '../data/types'

const categoryIcon: Record<ProjectCategory, typeof Code2> = {
  Software: Code2,
  Systems: Server,
  AI: Brain,
  Web: Globe,
  Other: Layers,
}

export function ProjectPreview({ project, className = '' }: { project: Project; className?: string }) {
  if (project.screenshot) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${project.screenshot}`}
        alt={project.screenshotAlt ?? `Screenshot of ${project.title}`}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    )
  }
  const Icon = categoryIcon[project.category]
  return (
    <div
      role="img"
      aria-label={`${project.category} project preview placeholder`}
      className={`flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface ${className}`}
    >
      <Icon size={40} className="text-accent opacity-80" aria-hidden />
    </div>
  )
}

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card card-hover group flex h-full w-full flex-col overflow-hidden text-left"
      aria-haspopup="dialog"
    >
      <ProjectPreview project={project} className="h-36 w-full border-b border-line" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          {project.featured && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-fg">Featured</span>
          )}
          {project.placeholder && (
            <span className="rounded-full border border-dashed border-muted px-2.5 py-0.5 text-xs text-muted">
              Placeholder
            </span>
          )}
        </div>
        <h3 className="flex items-start justify-between gap-2 text-lg font-semibold">
          {project.title}
          <ArrowUpRight
            size={18}
            aria-hidden
            className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
          />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}
