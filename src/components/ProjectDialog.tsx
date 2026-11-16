import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import type { Project } from '../data/types'
import { GithubIcon } from './BrandIcons'
import { ProjectPreview } from './ProjectCard'

/** Uses the native <dialog> element: built-in focus trapping, Esc to close, and inert background. */
export default function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    }
    if (!project && d.open) d.close()
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  const section = (title: string, body: string | string[]) => (
    <section className="mt-6">
      <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">{title}</h3>
      {Array.isArray(body) ? (
        <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
          {body.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : (
        <p className="leading-relaxed text-muted">{body}</p>
      )}
    </section>
  )

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[90vh] w-[min(100%-2rem,48rem)] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div>
          <ProjectPreview project={project} className="h-44 w-full" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg/80 backdrop-blur hover:border-accent"
          >
            <X size={18} />
          </button>
          <div className="p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="chip">{project.category}</span>
              {project.placeholder && (
                <span className="rounded-full border border-dashed border-muted px-2.5 py-0.5 text-xs text-muted">
                  Placeholder: replace with real details
                </span>
              )}
            </div>
            <h2 id="project-dialog-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-2 text-muted">{project.summary}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <GithubIcon width={16} height={16} /> Repository
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} aria-hidden /> Live demo
                </a>
              )}
            </div>

            {section('The problem', project.caseStudy.problem)}
            {section('The solution', project.caseStudy.solution)}
            {section('My contribution', project.caseStudy.contribution)}
            {section('Architecture', project.caseStudy.architecture)}
            <section className="mt-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">Technologies</h3>
              <ul className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
            {section('Challenges', project.caseStudy.challenges)}
            {section('Engineering decisions', project.caseStudy.decisions)}
            {section('Outcome', project.caseStudy.outcome)}
          </div>
        </div>
      )}
    </dialog>
  )
}
