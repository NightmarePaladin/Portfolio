/**
 * SINGLE SOURCE OF TRUTH for personal details and links.
 * Leave a link as an empty string ('') and it is hidden automatically,
 * so the site never shows broken placeholder links.
 */
export const personal = {
  name: 'Jamel Rose',
  title: 'Computer Engineering Graduate | Software & Systems Engineering | U.S. Air Force Veteran',
  shortTitle: 'Computer Engineer · U.S. Air Force Veteran',
  location: 'New York City · Open to Southern California opportunities',

  // Empty string = hidden.
  email: 'jamel.n.rose@gmail.com',
  github: 'https://github.com/NightmarePaladin',
  linkedin: 'https://www.linkedin.com/in/jamel-rose-0b7260143',

  resume: {
    // PDF lives at public/resume.pdf (replace the file to update it)
    enabled: true,
    path: 'resume.pdf',
    downloadName: 'Jamel-Rose-Resume.pdf',
  },

  heroIntro:
    'Computer Engineering graduate and U.S. Air Force veteran who bridges software development, computer systems, and hands-on technical engineering, with nine years of finding the failure in a live system, fixing it, and verifying the fix.',

  about: [
    'I served in the U.S. Air Force from 2013 to 2017, first as an F-16 tactical aircraft maintainer in South Korea, troubleshooting electrical, communication, navigation, hydraulic, and fuel systems, then as a support technician and supervisor leading a team of five. In that work, troubleshooting is a discipline: isolate the fault, verify the fix, document it, and own the result.',
    'After the Air Force I spent years finding failures in live systems: Geek Squad repair and IT support, production work at an industrial gas plant, and field service on concrete 3D printers, where I diagnosed and repaired equipment on-site and trained about 25 customers a week.',
    'Computer engineering is where those habits meet software. I am finishing my B.S. at Manhattan University, building full-stack TypeScript and Python applications on PostgreSQL, running a virtualized homelab with self-hosted LLMs, and using AI coding agents daily while reviewing, testing, and owning every change they make.',
    'I am looking for software engineering, systems engineering, embedded software, and AI engineering roles.',
  ],
  strengths: [
    'Analytical problem-solving',
    'Engineering fundamentals',
    'Systematic troubleshooting',
    'Technical ownership',
    'Teamwork',
    'Customer-facing communication',
    'Adaptability',
    'Continuous learning',
  ],
}

export const isConfigured = (v: string) => v.trim().length > 0
