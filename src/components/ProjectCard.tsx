import { useState } from 'react'
import { ArrowUpRight, Brain, Code2, Globe, Layers, Server } from 'lucide-react'
import { isTodo, type Project, type ProjectCategory } from '../data/types'

const categoryIcon: Record<ProjectCategory, typeof Code2> = {
  Software: Code2,
  Systems: Server,
  AI: Brain,
  Web: Globe,
  Other: Layers,
}

/**
 * Real screenshot (fixed 16:9 frame, cropped from the top, never stretched) or,
 * when no screenshot is set or it fails to load, a neutral fallback.
 */
export function ProjectPreview({
  project,
  fill = false,
  className = '',
}: {
  project: Project
  /** Fill the parent height (wide card on large screens) instead of a fixed 16:9 frame. */
  fill?: boolean
  className?: string
}) {
  const frame = fill ? 'aspect-video max-h-64 lg:aspect-auto lg:h-full lg:max-h-none lg:min-h-72' : 'aspect-video'
  const [failed, setFailed] = useState(false)
  const Icon = categoryIcon[project.category]

  if (project.screenshot && !failed) {
    return (
      <div className={`${frame} w-full overflow-hidden bg-surface-2 ${className}`}>
        <img
          src={`${import.meta.env.BASE_URL}${project.screenshot}`}
          alt={project.screenshotAlt ?? `Screenshot of ${project.title}`}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    )
  }
  return (
    <div
      aria-hidden
      className={`relative flex ${frame} w-full items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 to-surface ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-surface text-accent transition-transform duration-300 group-hover:scale-105">
        <Icon size={26} />
      </span>
    </div>
  )
}

export default function ProjectCard({
  project,
  onOpen,
  large = false,
}: {
  project: Project
  onOpen: () => void
  large?: boolean
}) {
  const { problem, contribution } = project.caseStudy
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className={`card card-hover group flex h-full w-full overflow-hidden text-left ${
        large ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div className={large ? 'lg:w-[46%] lg:shrink-0' : ''}>
        <ProjectPreview project={project} fill={large} />
      </div>
      <div className={`flex flex-1 flex-col border-t border-line p-5 sm:p-6 ${large ? 'lg:border-l lg:border-t-0' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          {project.primary && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-fg">
              Featured project
            </span>
          )}
        </div>
        <h3 className={`flex items-start justify-between gap-2 font-semibold tracking-tight ${large ? 'text-2xl' : 'text-lg'}`}>
          {project.title}
          <ArrowUpRight
            size={18}
            aria-hidden
            className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-4 space-y-3 text-sm">
          {!isTodo(problem) && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">Problem</dt>
              <dd className="mt-1 line-clamp-3 leading-relaxed text-muted">{problem}</dd>
            </div>
          )}
          {!isTodo(contribution) && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">My contribution</dt>
              <dd className="mt-1 line-clamp-3 leading-relaxed text-muted">{contribution}</dd>
            </div>
          )}
        </dl>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
          {project.technologies.slice(0, large ? 9 : 5).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {!large && project.technologies.length > 5 && (
            <li className="chip">+{project.technologies.length - 5}</li>
          )}
        </ul>
      </div>
    </button>
  )
}
