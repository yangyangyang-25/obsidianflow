# ObsidianFlow

Static SEO content site for Obsidian workflow guides for Markdown writing, content planning, templates, and publishing.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## GitHub Pages

1. Push to the `main` branch.
2. Set Pages source to GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` publishes `dist`.
