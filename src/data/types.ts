export type ProjectCategory = 'Software' | 'Systems' | 'AI' | 'Web' | 'Other'

export interface ProjectImage {
  /** Path relative to /public, e.g. "images/projects/schematichub/viewer.webp". */
  src: string
  /** Describe what the image shows (required for accessibility). */
  alt: string
  /** Optional caption shown under the image in the project dialog. */
  caption?: string
  /** "cover" crops to fill the frame (screenshots). "contain" shows the whole image (diagrams, photos). */
  fit?: 'cover' | 'contain'
}

export interface Project {
  id: string
  title: string
  /** One or two sentences shown on the card and at the top of the dialog. */
  summary: string
  category: ProjectCategory
  /** The single lead project, shown larger and first. Only one project should set this. */
  primary?: boolean
  featured: boolean
  /** Technologies. The first few are shown on the card; all appear in the dialog. */
  technologies: string[]
  /** Real screenshots, diagrams, or photos. The first one is the card image. See public/images/projects/README.md. */
  images?: ProjectImage[]
  githubUrl?: string
  liveUrl?: string
  /** Why I built it. */
  motivation?: string
  caseStudy: {
    problem: string
    solution: string
    contribution: string
    architecture: string
    challenges: string[]
    decisions: string[]
    outcome: string
  }
}

/**
 * Any text that starts with "TODO" is an editable placeholder. It stays in the
 * data file for you to fill in, and the site hides it until you do.
 */
export const isTodo = (s: string) => s.trim().toUpperCase().startsWith('TODO')
