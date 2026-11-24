import type { Project, ProjectCategory } from './types'

/**
 * PROJECT DATA — add, edit, or remove entries here. No component changes needed.
 *
 * Facts come from the resume and the public repositories. Any field that starts
 * with "TODO" is a placeholder for details only you can supply; the site hides
 * it until you replace it with real text.
 *
 * Screenshots: save real images in public/images/projects/<project-id>/ and list them
 * in an `images` array, for example:
 *
 *   images: [
 *     { src: 'images/projects/schematichub/viewer.webp', alt: 'Schematic viewer with pinned comments' },
 *     { src: 'images/projects/schematichub/architecture.webp', alt: 'Architecture diagram', fit: 'contain' },
 *   ],
 *
 * Do not add an entry until the file exists. See public/images/projects/README.md.
 */
export const projects: Project[] = [
  {
    id: 'schematichub',
    title: 'SchematicHub',
    summary:
      'A web platform for viewing technical PDF schematics and keeping machine maintenance records, with comments and issues pinned to exact spots on a drawing.',
    category: 'Web',
    primary: true,
    featured: true,
    technologies: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'PDF.js', 'Tailwind', 'Vitest', 'Playwright'],
    images: [
      { src: 'images/projects/schematichub/schematics-viewer-dashboard.jpg', alt: 'SchematicHub dashboard with machine, schematic, and open-issue counts' },
      { src: 'images/projects/schematichub/schematics-viewer-machines.jpg', alt: 'SchematicHub machine list with category, manufacturer, and status' },
      { src: 'images/projects/schematichub/schematics-viewer-schematics.jpg', alt: 'SchematicHub list of uploaded schematics with revision and machine' },
    ],
    githubUrl: 'https://github.com/NightmarePaladin/Schematics-Viewer',
    liveUrl: 'https://schematics-viewer.vercel.app',
    // The repository README maps the project to a boot camp requirements list.
    // You can add your own reason for choosing this idea to the sentence below.
    motivation: 'Built as a boot camp project; the repository README maps it to the course requirements.',
    caseStudy: {
      problem:
        'Maintenance documentation about a machine (schematics, notes, issues, repair history) is easier to use when it is attached to the drawing it refers to and shared only with the right people.',
      solution:
        'Users register machines, upload PDF schematics, share them with specific people or groups, and pin comments, issue boxes, and maintenance records to exact coordinates on a drawing page.',
      contribution:
        'Built the application end to end: server-side API routes with schema validation, the Postgres schema and migrations, the permission model, the PDF viewer with its annotation layer, and the test suites.',
      architecture:
        'Next.js App Router with route handlers on the server. Supabase provides Postgres with row-level security, auth, and a private storage bucket. PDF.js renders pages and an SVG layer draws annotations using normalized, rotation-aware page coordinates. Files are delivered through signed URLs. Weather and geocoding come from the Open-Meteo API.',
      challenges: [
        'Keeping annotations anchored to the right spot across page sizes and rotations.',
        'Enforcing per-document access for individual users and groups in both database and storage policies.',
      ],
      decisions: [
        'Stored annotation positions as normalized page coordinates so markers survive zooming and rotation.',
        'Treated row-level security as the real authorization boundary rather than relying on the interface alone.',
        'Served PDFs only through signed URLs from a private bucket.',
      ],
      outcome:
        'Deployed on Vercel. The repository documents unit, integration, and end-to-end tests, and states which parts have been run against a live Supabase project.',
    },
  },
  {
    id: 'homelab-dashboard',
    title: 'Homelab Infrastructure Dashboard',
    summary:
      'A full-stack app where users sign in and manage their own server inventory, with a dashboard counting servers as online, offline, or unknown.',
    category: 'Software',
    featured: true,
    technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Supabase', 'Vitest', 'Python'],
    images: [
      { src: 'images/projects/homelab-dashboard/llm-manager-dashboard.jpg', alt: 'Homelab dashboard with server counts and an inventory table' },
      { src: 'images/projects/homelab-dashboard/llm-manager-server-detail.jpg', alt: 'Homelab server detail page with latest CPU, RAM, disk, and GPU readings' },
    ],
    githubUrl: 'https://github.com/NightmarePaladin/LLM-Manager',
    liveUrl: 'https://llm-manager-eosin.vercel.app',
    motivation: 'Built as a class project, combining my homelab with a full-stack application.',
    caseStudy: {
      problem: 'Keeping an inventory of homelab servers and seeing which ones are online, offline, or unknown.',
      solution:
        'Authenticated users add, view, edit, and delete their own servers. Dashboard counts are calculated from the real database records.',
      contribution:
        'Designed, built, and deployed the app. Used Claude Code as a daily coding agent while reviewing, debugging, and testing each generated change before shipping.',
      architecture:
        'Next.js App Router using Server Components and Server Actions. All Supabase calls run on the server, with session refresh and route protection in the proxy layer, zod validation, and Postgres row-level security limiting each user to their own rows.',
      challenges: [
        'Verifying that each user can reach only their own data.',
        'In progress: replacing static status with live monitoring from a Python agent.',
      ],
      decisions: [
        'Kept Supabase credentials server-only, with no browser client.',
        'Relied on row-level security as the security boundary and re-checked the user on the server.',
        'Wrote Vitest tests and a two-user script to verify data isolation.',
      ],
      outcome:
        'Built as a class project and deployed to production. A Python agent that reports CPU, memory, disk, and network telemetry every 30 seconds is in progress; the repository notes the current status.',
    },
  },
  {
    id: 'scada-cooling',
    title: 'SCADA Cooling Control for Data Center Energy Efficiency',
    summary:
      'Senior design project: a SCADA system that regulates liquid cooling for a GPU-based data center prototype using closed-loop control.',
    category: 'Systems',
    featured: true,
    technologies: ['PLC', 'HMI', 'Modbus TCP', 'PWM'],
    motivation: 'Senior design project for my Computer Engineering degree, built with a team of five.',
    caseStudy: {
      problem: 'Improve data center energy efficiency by regulating liquid cooling from measured temperatures.',
      solution:
        'A closed-loop control system linking a PLC, HMI, pump, and chiller over Modbus TCP to cool a GPU-based prototype.',
      // Add your specific part (PLC logic, HMI, wiring, testing...) after the team sentence.
      contribution: 'Member of a 5-person team that designed and built the system.',
      architecture:
        'PLC-based control with an HMI, communicating over Modbus TCP. Pump speed is stepped with PWM based on GPU temperature, and the chiller switches on coolant temperature.',
      challenges: ['Validating communication, thermal stress behavior, and HMI data flow under heavy workloads.'],
      decisions: ['Drove control from measured GPU and coolant temperatures in a closed loop.'],
      outcome: 'Measured a PUE of 1.5 and a 2.3% reduction in peak GPU temperature under heavy workloads.',
    },
  },
  {
    id: 'homelab-local-ai',
    title: 'Virtualized Homelab & Local AI',
    summary:
      'A private environment of Linux VMs, LXC containers, and Docker services, hosting Ollama for network-accessible LLM inference.',
    category: 'AI',
    featured: false,
    technologies: ['Proxmox', 'Linux', 'Docker', 'LXC', 'Ollama'],
    motivation: 'I self-host language models to understand how they behave.',
    caseStudy: {
      problem: 'Understand how language models behave by running them myself on infrastructure I control.',
      solution: 'A virtualized homelab that serves local LLM inference over the network.',
      contribution: 'Built and run the environment, including DNS, SSL/TLS, and reverse proxying.',
      architecture:
        'Proxmox hosting Linux VMs and LXC containers, with Docker services including Ollama, reachable over the network through a reverse proxy.',
      challenges: ['Diagnosing CPU, memory, and storage contention to restore service availability.'],
      decisions: ['TODO: add a tradeoff you made (for example VM vs. LXC, or hardware choices) and why.'],
      outcome: 'A running private environment used for experimentation and for hosting my own services.',
    },
  },
  {
    id: 'fitlog',
    title: 'FitLog',
    summary:
      'A strength-training tracker for Android and web that works offline, compares progress week over week, and supports sharing and group workouts.',
    category: 'Software',
    featured: false,
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    images: [
      { src: 'images/projects/fitlog/fit-log-dashboard.jpg', alt: 'FitLog dashboard with weekly totals, personal records, and strength progress' },
      { src: 'images/projects/fitlog/fit-log-history.jpg', alt: 'FitLog workout history grouped by day' },
      { src: 'images/projects/fitlog/fit-log-progress.jpg', alt: 'FitLog progress page with weekly volume chart and personal records' },
    ],
    githubUrl: 'https://github.com/NightmarePaladin/fit-log',
    liveUrl: 'https://fit-log-beryl-mu.vercel.app',
    motivation: 'TODO: why you built FitLog (for example, your own training and poor gym signal).',
    caseStudy: {
      problem: 'Logging workouts in a gym with unreliable signal and seeing real progress from one week to the next.',
      solution:
        'A mobile and web app with Google sign-in, workout logging, history, weekly progress comparisons, an exercise library lookup, and sharing.',
      contribution: 'Built the app and its Supabase backend, including migrations and row-level security policies.',
      architecture:
        'Expo Router and React Native in TypeScript. Supabase Postgres, Auth, and Realtime with row-level security. Workout drafts are stored on the device, and an offline queue uploads saved workouts when a connection returns.',
      challenges: [
        'Making offline saves safe to retry without duplicating a workout.',
        'Reporting strength change only when sets are comparable.',
      ],
      decisions: [
        'Gave each workout an id on the device so saving it to the database is idempotent.',
        'Asked before uploading offline data to a newly signed-in account.',
      ],
      outcome: 'Web build deployed on Vercel, with the Android app and setup documented in the repository.',
    },
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracking App',
    summary: 'A responsive app for logging, categorizing, and filtering expenses and summarizing monthly spending.',
    category: 'Web',
    featured: false,
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase'],
    images: [
      { src: 'images/projects/expense-tracker/finance-machine.png', alt: 'Expense Tracker landing page listing its main features' },
    ],
    liveUrl: 'https://finance-machine-five.vercel.app',
    motivation: 'TODO: why you built the expense tracker.',
    caseStudy: {
      problem: 'Seeing where money goes each month.',
      solution: 'Private accounts for tracking spending, plus read-only sharing for invited viewers.',
      contribution: 'Built and deployed the application.',
      architecture: 'Next.js and React frontend with a Supabase PostgreSQL backend.',
      challenges: ['TODO: add a technical challenge you solved on this project.'],
      decisions: ['TODO: add a design decision and why (for example how sharing permissions work).'],
      outcome: 'Deployed on Vercel. The source repository is private.',
    },
  },
  {
    id: 'clientflow',
    title: 'ClientFlow',
    summary:
      'An AI-assisted back-office app for service businesses: clients, session scheduling, invoices and payment tracking, and a business dashboard.',
    category: 'Software',
    featured: false,
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Supabase', 'PostgreSQL', 'Gemini API', 'Vitest'],
    images: [
      { src: 'images/projects/clientflow/clientflow-dashboard.jpg', alt: 'ClientFlow dashboard with active clients, upcoming sessions, and outstanding balance' },
      { src: 'images/projects/clientflow/clientflow-clients.jpg', alt: 'ClientFlow client list with session balances and a low-balance badge' },
      { src: 'images/projects/clientflow/clientflow-invoices.jpg', alt: 'ClientFlow invoice list with overdue and partially paid statuses' },
    ],
    motivation: 'TODO: why you built ClientFlow.',
    caseStudy: {
      problem: 'Small service businesses such as trainers and tutors need one place for clients, sessions, and money owed.',
      solution:
        'Clients with session balances, scheduling, invoices with partial and full payments, AI-drafted session summaries and payment reminders, and a dashboard of real metrics.',
      contribution: 'TODO: describe your part, for example the schema, the AI drafting flow, or the invoice rules.',
      architecture:
        'Next.js App Router with Supabase Postgres, Auth, and row-level security. Money is stored as integer cents. The Gemini API drafts text that you review before it is used.',
      challenges: ['TODO: add a technical challenge you solved on this project.'],
      decisions: ['Kept AI output as editable drafts that need approval, and filled exact amounts and dates in from the database.'],
      outcome: 'Deployed on Vercel as a demo that uses fictional data only.',
    },
  },
  {
    id: 'coastline-kayak',
    title: 'Coastline Kayak',
    summary: 'A responsive marketing website for a guided sea kayak tour company, with tours, safety information, and a contact page.',
    category: 'Web',
    featured: false,
    technologies: ['TypeScript', 'HTML', 'CSS'],
    images: [
      { src: 'images/projects/coastline-kayak/coastline-kayak.jpg', alt: 'Coastline Kayak home page with a hero photo of two kayakers on the water' },
    ],
    motivation: 'TODO: why you built this site.',
    caseStudy: {
      problem: 'TODO: what the site needed to do for the business.',
      solution: 'A site with Home, Tours, About, Safety & FAQ, and Contact pages, and a light and dark theme toggle.',
      contribution: 'TODO: describe your part.',
      architecture: 'TODO: add the framework and structure.',
      challenges: ['TODO: add a technical challenge you solved on this project.'],
      decisions: ['TODO: add a design decision and why.'],
      outcome: 'Deployed on Vercel.',
    },
  },
  {
    id: 'streamline-studio',
    title: 'Streamline Studio',
    summary: 'A design tool for choosing a style preset, adjusting colors, type, buttons, and spacing, previewing the result, and exporting design tokens.',
    category: 'Web',
    featured: false,
    technologies: ['TypeScript', 'HTML', 'CSS'],
    images: [
      { src: 'images/projects/streamline-studio/streamline-studio.jpg', alt: 'Streamline Studio with a preset list and a live preview of a video watch page' },
    ],
    motivation: 'TODO: why you built Streamline Studio.',
    caseStudy: {
      problem: 'TODO: what problem the tool solves.',
      solution: 'Presets and controls for brand, buttons, type, color, and spacing, with desktop, tablet, and mobile previews and a design token export.',
      contribution: 'TODO: describe your part.',
      architecture: 'TODO: add the framework and structure.',
      challenges: ['TODO: add a technical challenge you solved on this project.'],
      decisions: ['TODO: add a design decision and why.'],
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
