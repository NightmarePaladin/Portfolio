import type { Project, ProjectCategory } from './types'

/**
 * PROJECT DATA — add, edit, or remove entries here. No component changes needed.
 * Sourced from the resume and public GitHub repositories. Add `screenshot`
 * (a path under public/images/) to any project to replace the generated preview.
 */
export const projects: Project[] = [
  {
    id: 'schematichub',
    title: 'SchematicHub',
    summary:
      'Collaborative viewer for technical schematics and machine maintenance records, with comments and issues pinned to exact coordinates on a drawing.',
    category: 'Web',
    featured: true,
    placeholder: false,
    technologies: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'PDF.js', 'Tailwind', 'Vitest', 'Playwright'],
    githubUrl: 'https://github.com/NightmarePaladin/Schematics-Viewer',
    liveUrl: 'https://schematics-viewer.vercel.app',
    caseStudy: {
      problem:
        'Maintenance teams work from PDF schematics, but notes, issues, and repair history live apart from the drawing and are hard to share with the right people.',
      solution:
        'A web platform where users register machines, upload PDF schematics, share them with specific people or groups, and pin comments, issue boxes, and maintenance records directly onto a drawing page.',
      contribution:
        'Designed and built the full stack: API route handlers with schema validation, database schema and migrations, permissions, the PDF viewer with annotation overlay, and the test suites.',
      architecture:
        'Next.js App Router with server-side route handlers; Supabase Postgres with row-level security, triggers, and a private storage bucket; PDF.js rendering with an SVG annotation layer using normalized, rotation-aware page coordinates; signed-URL delivery for files; Open-Meteo weather and geocoding integration.',
      challenges: [
        'Keeping annotations anchored correctly across page sizes and rotations.',
        'Enforcing per-document access for users and groups consistently in both database and storage policies.',
      ],
      decisions: [
        'Used normalized page coordinates so markers survive zoom and rotation.',
        'Made row-level security the real authorization boundary instead of relying on UI checks alone.',
        'Delivered PDFs only through signed URLs from a private bucket.',
      ],
      outcome:
        'Deployed on Vercel with unit, integration, and end-to-end test suites documented in the repository. The README notes exactly which parts have been executed against a live Supabase project.',
    },
  },
  {
    id: 'homelab-dashboard',
    title: 'Homelab Infrastructure Dashboard',
    summary:
      'Full-stack app where users register, sign in, and manage a private server inventory with live online, offline, and unknown status counts.',
    category: 'Software',
    featured: true,
    placeholder: false,
    technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Supabase', 'Vitest', 'Python'],
    githubUrl: 'https://github.com/NightmarePaladin/LLM-Manager',
    liveUrl: 'https://llm-manager-eosin.vercel.app',
    caseStudy: {
      problem: 'Keeping track of homelab servers and whether they are actually up, without a heavyweight monitoring stack.',
      solution:
        'A dashboard with authenticated per-user server inventory (add, view, edit, delete) and counts calculated from real database records.',
      contribution:
        'Designed, built, and deployed the app. Used Claude Code as a daily coding agent while reviewing, debugging, and testing every generated change before shipping.',
      architecture:
        'Next.js App Router with Server Components and Server Actions; all Supabase calls run on the server; session refresh and route protection in the proxy layer; zod validation; Postgres row-level security limiting each user to their own rows.',
      challenges: [
        'Proving that users can reach only their own data, not just assuming it.',
        'In progress: turning static records into live monitoring with a Python agent.',
      ],
      decisions: [
        'Kept Supabase keys server-only with no browser client.',
        'Treated row-level security as the real security boundary and re-checked the user on the server.',
        'Wrote Vitest tests plus a two-user script verifying isolation.',
      ],
      outcome:
        'Deployed to production. A Python agent that reports CPU, memory, disk, and network telemetry every 30 seconds is being built (see the repository HANDOFF notes for current status).',
    },
  },
  {
    id: 'homelab-local-ai',
    title: 'Virtualized Homelab & Local AI',
    summary:
      'Private environment of Linux VMs, LXC containers, and Docker services hosting Ollama for network-accessible LLM inference.',
    category: 'AI',
    featured: true,
    placeholder: false,
    technologies: ['Proxmox', 'Linux', 'Docker', 'LXC', 'Ollama'],
    caseStudy: {
      problem: 'Understand how language models behave by running them myself, on infrastructure I control.',
      solution: 'A virtualized homelab that serves local LLM inference over the network.',
      contribution: 'Built and run the whole environment, from virtualization through networking and services.',
      architecture:
        'Proxmox hosting Linux VMs and LXC containers, with Docker services including Ollama; DNS, SSL/TLS, and reverse proxying configured for network access.',
      challenges: ['Diagnosing CPU, memory, and storage contention to restore service availability.'],
      decisions: ['Self-hosted inference to learn model behavior directly rather than only through hosted APIs.'],
      outcome: 'A running private environment I use for experimentation and for hosting my own services.',
    },
  },
  {
    id: 'scada-cooling',
    title: 'SCADA Cooling Control for Data Centers',
    summary:
      'Senior design project: a SCADA system regulating liquid cooling for a GPU-based data center prototype.',
    category: 'Systems',
    featured: false,
    placeholder: false,
    technologies: ['PLC', 'HMI', 'Modbus TCP', 'PWM'],
    caseStudy: {
      problem: 'Data center cooling consumes significant energy; cooling should respond to actual thermal load.',
      solution:
        'A closed-loop control system linking a PLC, HMI, pump, and chiller over Modbus TCP to regulate liquid cooling for a GPU prototype.',
      contribution: 'Member of a 5-person team that designed and built the system.',
      architecture:
        'PLC-based control with an HMI, communicating over Modbus TCP. Pump speed is stepped via PWM based on GPU temperature, and the chiller switches by coolant temperature.',
      challenges: ['Validating communication, thermal stress behavior, and HMI data flow under heavy workloads.'],
      decisions: ['Used closed-loop control driven by measured GPU and coolant temperatures.'],
      outcome: 'Measured a PUE of 1.5 and a 2.3% reduction in peak GPU temperature under heavy workloads.',
    },
  },
  {
    id: 'fitlog',
    title: 'FitLog',
    summary:
      'Strength training tracker for Android and web with offline workouts, progress charts, sharing, and live group sessions.',
    category: 'Software',
    featured: false,
    placeholder: false,
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/NightmarePaladin/fit-log',
    liveUrl: 'https://fit-log-beryl-mu.vercel.app',
    caseStudy: {
      problem: 'Logging workouts in a gym with unreliable signal, and comparing progress week over week.',
      solution:
        'A mobile and web app with Google sign-in, active-workout logging, history, progress comparisons, exercise library lookup, sharing, and buddy features.',
      contribution: 'Built the app and its Supabase backend, including database migrations and security policies.',
      architecture:
        'Expo Router and React Native with TypeScript; Supabase Postgres, Auth, and Realtime with row-level security; local draft storage and an offline queue that uploads when a connection returns.',
      challenges: [
        'Offline saves that never duplicate a workout when retried.',
        'Reporting strength change only when sets are comparable.',
      ],
      decisions: [
        'Gave each workout an id on the device so the database save is idempotent.',
        'Asked before uploading offline data to a newly signed-in account.',
      ],
      outcome: 'Live web build deployed on Vercel; Android app with documented setup in the repository.',
    },
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracking App',
    summary: 'Responsive app to log, categorize, and filter expenses and summarize monthly spending.',
    category: 'Web',
    featured: false,
    placeholder: false,
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://finance-machine-five.vercel.app',
    caseStudy: {
      problem: 'Seeing where money goes each month without a spreadsheet.',
      solution: 'A deployed app with private accounts and read-only sharing for invited viewers.',
      contribution: 'Built and deployed the application.',
      architecture: 'Next.js and React frontend with a Supabase PostgreSQL backend and per-user access.',
      challenges: ['Add details about a challenge you solved.'],
      decisions: ['Private-by-default accounts with read-only sharing.'],
      outcome: 'Deployed on Vercel.',
    },
  },
]

const order: ProjectCategory[] = ['Software', 'Systems', 'AI', 'Web', 'Other']
/** Only categories that have at least one project get a filter button. */
export const projectFilters: ('All' | ProjectCategory)[] = [
  'All',
  ...order.filter((c) => projects.some((p) => p.category === c)),
]
