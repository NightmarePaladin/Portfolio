export type ProjectCategory = 'Software' | 'Systems' | 'AI' | 'Web' | 'Other'

export interface Project {
  id: string
  title: string
  /** One or two sentences: what it is and does. Shown on the card. */
  summary: string
  category: ProjectCategory
  /** The single lead project, shown larger and first. Only one project should set this. */
  primary?: boolean
  featured: boolean
  technologies: string[]
  /**
   * Screenshot path relative to /public, e.g. "images/projects/schematichub.webp".
   * See public/images/projects/README.md. Omit to show the fallback preview.
   */
  screenshot?: string
  screenshotAlt?: string
  githubUrl?: string
  liveUrl?: string
  /** Why the project is relevant or interesting. Optional. */
  why?: string
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
