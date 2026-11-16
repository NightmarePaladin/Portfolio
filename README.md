# Jamel Rose — Engineering Portfolio

A static, responsive personal portfolio built with **React, TypeScript, Vite, Tailwind CSS v4, Lucide icons, and Motion**. No backend, database, API keys, or paid services. Deploys free on GitHub Pages.

## Features
- Dark mode by default, light/dark toggle with persisted preference
- Sections: Home, About, Skills, Projects (filters + case-study dialogs), Experience, Education, Contact
- All content lives in `src/data/`, so you never edit component code to update the site
- Accessible: semantic HTML, keyboard navigation, native `<dialog>`, skip link, reduced-motion support
- SEO and Open Graph metadata in `index.html`

## Local development
Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript check
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Editing your content
| What | File |
| --- | --- |
| Name, email, GitHub, LinkedIn, location, bio, resume toggle | `src/data/personal.ts` |
| Skill categories | `src/data/skills.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| Education, coursework, certifications | `src/data/education.ts` |

Links left as `''` in `personal.ts` are hidden automatically, so there are no broken links.

### Adding a project
Add an object to the `projects` array in `src/data/projects.ts` (see `src/data/types.ts` for every field). Set `placeholder: false` once the details are real. Categories: `Software`, `Systems`, `AI`, `Web`, `Other`. The filters and case-study dialog update automatically.

### Screenshots
Put images in `public/images/` (WebP or optimized PNG, around 1200px wide), then set `screenshot: 'images/my-project.webp'` and `screenshotAlt` on the project.

### Resume
Save your PDF as `public/resume.pdf`, then set `resume.enabled: true` in `src/data/personal.ts`. Until then the Resume buttons show "coming soon".

### Social preview image
`public/images/og-image.svg` is a simple default. Many social platforms need a PNG, so for best link previews add `og-image.png` (1200×630) and update the `og:image` tag in `index.html` with your absolute site URL.

## Deploying to GitHub Pages
1. Create a GitHub repository (either `your-username.github.io` or any name such as `portfolio`) and push this project to the `main` branch.
2. In the repository go to **Settings → Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` installs, builds, and publishes automatically. Your URL appears in the **Actions** run summary.

### Base path
`vite.config.ts` uses a relative base (`./`) by default. Because the site has no client-side routing, this works for both `username.github.io` and `username.github.io/repo-name/`. To force an absolute path, build with `VITE_BASE=/repo-name/ npm run build`, or add `env: VITE_BASE: /repo-name/` to the build step in the workflow.

### Custom domain later
Add a file named `CNAME` containing your domain (for example `jamelrose.dev`) to `public/`, point your DNS to GitHub Pages (see GitHub's custom domain docs), then set the domain under **Settings → Pages**. Update the Open Graph image URL to the new domain.

## Project structure
```
src/
  components/  reusable UI (navbar, cards, dialog, buttons)
  sections/    page sections
  data/        all editable content
  hooks/       theme and scroll-spy hooks
  styles/      Tailwind entry and design tokens
public/        favicon, images, resume.pdf
```
