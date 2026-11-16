export type ProjectCategory = 'Software' | 'Systems' | 'AI' | 'Web' | 'Other'

export interface Project {
  id: string
  title: string
  summary: string
  category: ProjectCategory
  featured: boolean
  /** true = clearly marked placeholder, shown with a "Placeholder" badge. Set to false once the content is real. */
  placeholder: boolean
  technologies: string[]
  /** Path under /public, e.g. "images/my-project.png". Omit to show a generated preview. */
  screenshot?: string
  screenshotAlt?: string
  githubUrl?: string
  liveUrl?: string
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
