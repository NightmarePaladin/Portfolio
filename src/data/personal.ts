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

  headline: ["Hi, I'm Jamel.", 'I Build Software and Solve Technical Problems.'],

  heroIntro: [
    "I'm Jamel Rose, a Computer Engineering graduate and former U.S. Air Force F-16 maintainer. My background spans aircraft maintenance, industrial technology, software development, and computer infrastructure.",
    "I've spent my career understanding complex systems, figuring out why they fail, and finding ways to make them work better. Today, I bring that same approach to building software and solving engineering problems.",
  ],

  about: [
    'My engineering background started in the U.S. Air Force, where I maintained F-16 aircraft and developed a hands-on approach to troubleshooting complex systems. That experience shaped how I think about technology: understanding how individual components work together is just as important as understanding the components themselves.',
    'After the military, I continued working in technical roles ranging from computer repair and customer support to industrial 3D printing technology. Along the way, I realized I wanted to do more than troubleshoot and maintain technology. I wanted to build it.',
    'That led me to earn my Bachelor of Science in Computer Engineering from Manhattan University. Today, my interests span software development, computer systems, and infrastructure, with a particular appreciation for projects that bring hardware and software together.',
    'I enjoy solving challenging problems, learning new technologies, and working with people who genuinely enjoy what they do.',
  ],
}

export const isConfigured = (v: string) => v.trim().length > 0
