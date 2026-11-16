import { useEffect, useRef, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { isTodo, type Project } from '../data/types'
import { GithubIcon } from './BrandIcons'
import { FramedImage, imageUrl } from './ProjectCard'

/** Screenshot gallery: one image at a time, with thumbnails when there are several. */
function Gallery({ project }: { project: Project }) {
  const [broken, setBroken] = useState<Set<string>>(new Set())
  const [index, setIndex] = useState(0)
  const images = (project.images ?? []).filter((i) => !broken.has(i.src))
  if (images.length === 0) return null
  const current = images[Math.min(index, images.length - 1)]
  const fail = (src: string) => setBroken((b) => new Set(b).add(src))

  return (
    <figure className="px-5 pt-5 sm:px-8">
      <div className="aspect-video max-h-[38vh] w-full overflow-hidden rounded-lg border border-line bg-surface-2 sm:max-h-[26rem]">
        <FramedImage image={current} eager onFail={() => fail(current.src)} />
      </div>
      {current.caption && <figcaption className="mt-2 text-sm text-muted">{current.caption}</figcaption>}
      {images.length > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Project images">
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${images.length}: ${img.alt}`}
                aria-current={img === current ? 'true' : undefined}
                className={`block h-14 w-24 overflow-hidden rounded-md border bg-surface-2 ${
                  img === current ? 'border-accent' : 'border-line opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={imageUrl(img.src)}
                  alt=""
                  loading="lazy"
                  onError={() => fail(img.src)}
                  className={`h-full w-full ${img.fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  )
}

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-7">
    <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">{title}</h3>
    {children}
  </section>
)

const Text = ({ children }: { children: string }) => <p className="leading-relaxed text-muted">{children}</p>

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
)

/**
 * Native <dialog>: the browser traps focus, closes on Escape, and returns focus to the
 * element that opened it. Body scrolling is locked while open. Sections whose text is
 * missing or still a TODO placeholder are not rendered.
 */
export default function ProjectDialog({
  project,
  trigger,
  onClose,
}: {
  project: Project | null
  trigger: HTMLElement | null
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project) {
      if (!d.open) d.showModal()
      document.body.style.overflow = 'hidden'
      d.scrollTop = 0
    } else if (d.open) {
      d.close()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  // Belt and braces: make sure focus lands back on the card that opened the dialog.
  const handleClose = () => {
    onClose()
    trigger?.focus()
  }

  const has = (s?: string) => !!s && !isTodo(s)
  const list = (a: string[]) => a.filter((x) => !isTodo(x))
  const cs = project?.caseStudy

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={handleClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[92dvh] w-[min(100%-1.5rem,50rem)] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {project && cs && (
        <div>
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-5 py-4 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <p className="chip mb-2">{project.category}</p>
              <h2 id="project-dialog-title" className="break-words text-xl font-semibold tracking-tight sm:text-2xl">
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close project details"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-bg hover:border-accent"
            >
              <X size={20} />
            </button>
          </div>

          <Gallery key={project.id} project={project} />

          <div className="px-5 pb-8 pt-5 sm:px-8">
            <p className="text-lg leading-relaxed">{project.summary}</p>

            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} aria-hidden /> Live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    <GithubIcon width={16} height={16} /> Repository
                  </a>
                )}
              </div>
            )}

            {has(project.motivation) && (
              <Block title="Why I built it">
                <Text>{project.motivation!}</Text>
              </Block>
            )}
            {has(cs.problem) && (
              <Block title="The problem">
                <Text>{cs.problem}</Text>
              </Block>
            )}
            {has(cs.contribution) && (
              <Block title="My contribution">
                <Text>{cs.contribution}</Text>
              </Block>
            )}
            {has(cs.solution) && (
              <Block title="The solution">
                <Text>{cs.solution}</Text>
              </Block>
            )}
            {has(cs.architecture) && (
              <Block title="Technical architecture">
                <Text>{cs.architecture}</Text>
              </Block>
            )}
            {list(cs.challenges).length > 0 && (
              <Block title="Challenges">
                <List items={list(cs.challenges)} />
              </Block>
            )}
            {list(cs.decisions).length > 0 && (
              <Block title="Engineering decisions">
                <List items={list(cs.decisions)} />
              </Block>
            )}
            {has(cs.outcome) && (
              <Block title="Outcome">
                <Text>{cs.outcome}</Text>
              </Block>
            )}
            <Block title="Technologies">
              <ul className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      )}
    </dialog>
  )
}
