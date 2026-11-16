# Project screenshots and diagrams

Each project has its own folder here, named with the project's `id` from `src/data/projects.ts`:

```
public/images/projects/
  schematichub/
  homelab-dashboard/
  fitlog/
  scada-cooling/
  homelab-local-ai/
  expense-tracker/
```

Create the folder, drop real images in it, then list them in the project's `images` array:

```ts
images: [
  { src: 'images/projects/schematichub/viewer.webp', alt: 'SchematicHub viewer with comments pinned to a hydraulic schematic' },
  { src: 'images/projects/schematichub/architecture.webp', alt: 'SchematicHub architecture diagram', fit: 'contain' },
],
```

The first image is the card image. All of them appear in the project dialog with thumbnails.
Do not add an `images` entry until the file exists.

## Image rules
- **Real images only:** screenshots of the running app, your own architecture diagrams, or your own photographs.
- **Size:** 1600 x 900 pixels (16:9). Anything else is cropped or letterboxed, never stretched.
- **`fit`:** leave it out for screenshots (cropped from the top). Use `fit: 'contain'` for diagrams and photos so nothing is cut off.
- **Format and weight:** WebP, ideally under 200 KB each. Free converter: https://squoosh.app
- **Privacy:** no login screens, tokens, real emails, or private data in screenshots.
- **Alt text:** describe what the image shows, not "screenshot".

## Images to supply (in priority order)
| Project | Folder | Suggested images |
| --- | --- | --- |
| SchematicHub | `schematichub/` | Schematic viewer with pinned comments; machine page; (optional) architecture diagram |
| Homelab Infrastructure Dashboard | `homelab-dashboard/` | Dashboard with online / offline / unknown counts; server list |
| FitLog | `fitlog/` | Active workout screen; progress screen; dashboard |
| SCADA Cooling Control | `scada-cooling/` | HMI screen; system architecture diagram; photo of the prototype |
| Virtualized Homelab & Local AI | `homelab-local-ai/` | Proxmox overview; network or service diagram |
| Expense Tracking App | `expense-tracker/` | Expense list; monthly summary |

Everything in `public/` is published as-is by GitHub Pages, including this README (harmless; delete it if you like).
