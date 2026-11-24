export interface SkillCategory {
  title: string
  icon: 'code' | 'layers' | 'server' | 'network' | 'tools' | 'brain'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'C++', 'C', 'Data structures', 'Algorithms', 'Object-oriented design'],
  },
  {
    title: 'Frameworks & Data',
    icon: 'layers',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    title: 'Systems & Infrastructure',
    icon: 'server',
    skills: ['Linux', 'Ubuntu', 'Windows', 'Docker', 'Proxmox', 'LXC', 'Virtualization', 'Systems troubleshooting'],
  },
  {
    title: 'Networking & IT',
    icon: 'network',
    skills: ['Networking', 'Wireshark', 'Nmap', 'Active Directory', 'Microsoft 365'],
  },
  {
    title: 'Development & Testing Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'Vitest', 'ESLint', 'Vercel', 'Claude Code'],
  },
  {
    title: 'AI & Local Inference',
    icon: 'brain',
    skills: ['Ollama', 'Self-hosted LLM inference', 'LLM tools'],
  },
]
