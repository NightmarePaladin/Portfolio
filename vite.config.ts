import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE PATH
// "./" (relative) works for BOTH username.github.io repos and project repos
// (username.github.io/repo-name/) because the site has no client-side routing.
// To force an absolute path, set VITE_BASE, e.g. VITE_BASE=/my-repo/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE ?? './',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      // Two pages: the portfolio and the standalone resume viewer.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        resume: fileURLToPath(new URL('./resume.html', import.meta.url)),
      },
    },
  },
})
