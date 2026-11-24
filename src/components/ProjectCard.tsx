import { useState } from 'react'
import { ArrowUpRight, Brain, Code2, Globe, Layers, Server } from 'lucide-react'
import type { Project, ProjectCategory, ProjectImage } from '../data/types'

const categoryIcon: Record<ProjectCategory, typeof Code2> = {
  Software: Code2,
  Systems: Server,
  AI: Brain,
  Web: Globe,
  Other: Layers,
}

export const imageUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`

/** Quiet fallback used when a project has no (working) image. */
export function MediaFallback({ category, className = '' }: { category: ProjectCategory; className?: string }) {
  const Icon = categoryIcon[category]
  return (
    <div
      aria-hidden
      className={`relative flex items-center justify-center overflow-hidden bg-surface-2/60 ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Icon size={22} className="relative text-muted opacity-60" />
    </div>
  )
}

/** A single image in a fixed frame: never stretched, cropped or contained per `fit`. */
export function FramedImage({
  image,
  className = '',
  eager = false,
  onFail,
}: {
  image: ProjectImage
  className?: string
  eager?: boolean
  onFail?: () => void
}) {
  const contain = image.fit === 'contain'
  return (
    <img
      src={imageUrl(image.src)}
      alt={image.alt}
      width={1600}
      height={900}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={onFail}
      className={`h-full w-full ${contain ? 'object-contain p-2' : 'object-cover object-top'} ${className}`}
    />
  )
}

/** Card visual: first image, or a compact fallback. */
function CardMedia({ project, wide }: { project: Project; wide: boolean }) {
  const [failed, setFailed] = useState(false)
  const first = project.images?.[0]
  const frame = wide ? 'aspect-[16/9] sm:aspect-[16/7] lg:aspect-auto lg:h-full lg:min-h-64' : 'aspect-[16/9]'
  if (first && !failed) {
    return (
      <div className={`${frame} w-full overflow-hidden bg-surface-2`}>
        <FramedImage
          image={first}
          onFail={() => setFailed(true)}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    )
  }
  return (
    <MediaFallback
      category={project.category}
      className={wide ? 'aspect-[16/5] lg:aspect-auto lg:h-full lg:min-h-64' : 'aspect-[16/5]'}
    />
  )
}

export default function ProjectCard({
  project,
  onOpen,
  large = false,
}: {
  project: Project
  onOpen: (trigger: HTMLElement) => void
  large?: boolean
}) {
  const shown = large ? 8 : 4
  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      aria-haspopup="dialog"
      className={`card card-hover group flex h-full w-full overflow-hidden text-left ${
        large ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div className={large ? 'lg:w-[46%] lg:shrink-0' : ''}>
        <CardMedia project={project} wide={large} />
      </div>
      <div
        className={`flex flex-1 flex-col border-t border-line p-5 sm:p-6 ${
          large ? 'lg:border-l lg:border-t-0 lg:p-8' : ''
        }`}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          {project.primary && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-fg">
              Featured project
            </span>
          )}
        </div>
        <h3 className={`break-words font-semibold tracking-tight ${large ? 'text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Main technologies">
          {project.technologies.slice(0, shown).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {project.technologies.length > shown && <li className="chip">+{project.technologies.length - shown}</li>}
        </ul>

        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
          View details
          <ArrowUpRight
            size={16}
            aria-hidden
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </button>
  )
}
