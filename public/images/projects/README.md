# Project screenshots

Put real screenshots of your applications here, one per project.

- **Name:** the project's `id` from `src/data/projects.ts`, for example `schematichub.webp`.
- **Size:** 1600 x 900 pixels (16:9). Images are cropped from the top, never stretched.
- **Format:** WebP (or optimized PNG/JPG), ideally under 200 KB. Free converter: https://squoosh.app
- **Content:** a real view of the running app. Avoid showing private data or login screens.

Then add two lines to the project in `src/data/projects.ts`:

```ts
screenshot: 'images/projects/schematichub.webp',
screenshotAlt: 'SchematicHub viewer showing a hydraulic schematic with pinned comments',
```

Files in this folder are published as-is by GitHub Pages. This README is also published,
which is harmless, but you can delete it once you have your screenshots.

Expected files:
- schematichub.webp
- homelab-dashboard.webp
- scada-cooling.webp
- homelab-local-ai.webp
- fitlog.webp
- expense-tracker.webp
