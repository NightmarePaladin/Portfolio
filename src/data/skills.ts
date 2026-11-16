export interface SkillCategory {
  title: string
  icon: 'code' | 'layers' | 'server' | 'network' | 'tools' | 'brain'
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    description: 'Languages, plus the computer science fundamentals behind them.',
    skills: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'C++', 'C', 'Data structures', 'Algorithms', 'Object-oriented design'],
  },
  {
    title: 'Frameworks & Data',
    icon: 'layers',
    description: 'Full-stack web development on relational databases.',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    title: 'Systems & Infrastructure',
    icon: 'server',
    description: 'Operating systems and platforms I build and run things on.',
    skills: ['Linux', 'Ubuntu', 'Windows', 'Docker', 'Proxmox', 'LXC', 'Virtualization', 'Systems troubleshooting'],
  },
  {
    title: 'Networking & IT',
    icon: 'network',
    description: 'Network analysis and administration fundamentals.',
    skills: ['Networking', 'Wireshark', 'Nmap', 'Active Directory', 'Microsoft 365'],
  },
  {
    title: 'Development & Testing Tools',
    icon: 'tools',
    description: 'Version control, testing, deployment, and AI-assisted coding.',
    skills: ['Git', 'GitHub', 'Vitest', 'ESLint', 'Vercel', 'Claude Code'],
  },
  {
    title: 'AI & Local Inference',
    icon: 'brain',
    description: 'Running language models on hardware I control.',
    skills: ['Ollama', 'Self-hosted LLM inference', 'LLM tools'],
  },
]
