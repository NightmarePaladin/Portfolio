export interface SkillCategory {
  title: string
  icon: 'code' | 'server' | 'git' | 'network' | 'brain'
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    description: 'Languages used across coursework and personal projects.',
    skills: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'C++', 'C'],
  },
  {
    title: 'Web & Data',
    icon: 'code',
    description: 'Full-stack applications backed by relational databases.',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    title: 'Systems & Infrastructure',
    icon: 'server',
    description: 'Operating systems and platforms I build and run things on.',
    skills: ['Linux', 'Ubuntu', 'Windows', 'Docker', 'Proxmox', 'LXC', 'Virtualization', 'Vercel'],
  },
  {
    title: 'Networking & IT',
    icon: 'network',
    description: 'Network analysis and administration fundamentals.',
    skills: ['Networking', 'Wireshark', 'Nmap', 'Active Directory', 'Microsoft 365'],
  },
  {
    title: 'Testing & Tools',
    icon: 'git',
    description: 'Verification and collaboration tooling.',
    skills: ['Vitest', 'ESLint', 'Git', 'GitHub'],
  },
  {
    title: 'Engineering & AI',
    icon: 'brain',
    description: 'How I approach problems, plus AI-assisted development.',
    skills: [
      'Systems troubleshooting',
      'Data structures & algorithms',
      'Claude Code',
      'Ollama',
      'Self-hosted LLM inference',
    ],
  },
]
