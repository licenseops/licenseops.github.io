# CLAUDE.md

## What is This Project

Documentation website for [LicenseOps](https://github.com/chalindukodikara/licenseops) (`lops`), built with Docusaurus 3 and TypeScript. Deployed to GitHub Pages.

## Quick Reference

```bash
npm start                   # Dev server at localhost:3000
npm run build               # Production build → ./build/
npm run typecheck            # TypeScript type checking
npm run format               # Format docs with Prettier
npm run format:check         # Check doc formatting
npm run serve                # Serve production build locally
```

### Versioning

```bash
npx docusaurus docs:version vX.Y.Z   # Snapshot current docs as a new version
```

After creating a version, update `lastVersion` and `versions` in `docusaurus.config.ts`.

## Project Layout

```
docusaurus.config.ts          # Site config: navbar, footer, Algolia, prism, versioning
sidebars.ts                   # Sidebar navigation structure
docs/                         # Current (next) docs — becomes "Next" version
versioned_docs/               # Snapshotted versioned docs (e.g. version-v0.1.0/)
versioned_sidebars/           # Sidebar config per version
versions.json                 # List of doc versions
src/
  pages/
    index.tsx                 # Homepage entry point
    index.module.css          # Homepage section styling (alternating backgrounds)
  components/
    HomepageHero/             # Hero banner with logo, tagline, CLI example
    Features/                 # 9-card feature grid
    SupportedFormats/         # 6-card format showcase with code previews
    GetStarted/               # 2-card installation guide
    LanguageSupport/          # Language table + smart handling cards
    Community/                # Contribute, Issues, Discussions links
    common/
      Button/                 # Reusable link button (small/medium/large)
      SectionHeader/          # Reusable section title with underline
  css/
    custom.css                # Global CSS: Infima variables, GitHub icon, dark mode
static/
  img/                        # Logos, favicon
blog/                         # Blog posts (MDX)
.github/workflows/
  deploy.yml                  # GitHub Pages deploy on push to main
  test-deploy.yml             # Build test on PRs
```

## Architecture

### Homepage Pattern

Homepage is composed of sections following the OpenChoreo website pattern:
- Each section is a React component in `src/components/`
- Each component has `index.tsx` + `styles.module.css` (CSS Modules)
- Sections alternate background colors via `index.module.css` nth-child rules
- Common components (`Button`, `SectionHeader`) are shared across sections

### Docs Structure

Sidebar is organized into:
1. **Overview** — project intro, installation, quick start
2. **Getting Started** — progressive 3-minute guide
3. **Formats & Languages** (category) — formats, supported-languages, custom-templates
4. **Guides** (category) — configuration, use-cases, ci-integration
5. **FAQ** — troubleshooting and common questions

### Styling

- **Infima CSS framework** via Docusaurus — CSS custom properties for theming
- **Primary color**: `#2B8CF7` (light) / `#4499F8` (dark)
- **CSS Modules** (`.module.css`) for component-scoped styles
- **Dark mode**: `[data-theme='dark']` selectors, `ThemedImage` for logo switching

### Algolia Search

Configured in `docusaurus.config.ts` with placeholder credentials. To activate:
1. Apply at https://docsearch.algolia.com/apply/
2. Replace `YOUR_ALGOLIA_APP_ID` and `YOUR_ALGOLIA_SEARCH_API_KEY`

## How To

### Add a new doc page

1. Create `docs/my-page.md` with frontmatter (`sidebar_position`, `sidebar_label`, `title`, `description`)
2. Add `'my-page'` to `sidebars.ts`
3. Copy to `versioned_docs/version-vX.Y.Z/` and update `versioned_sidebars/` if the page should appear in a released version

### Add a new homepage section

1. Create `src/components/MySectionName/index.tsx` and `styles.module.css`
2. Import and add to `src/pages/index.tsx` inside the `<div className={styles.homepage}>` wrapper

### Create a new doc version

```bash
npx docusaurus docs:version v0.2.0
```

Then update `docusaurus.config.ts`:
```ts
docs: {
  lastVersion: 'v0.2.0',
  versions: {
    'v0.2.0': { label: 'v0.2.0' },
    'v0.1.0': { label: 'v0.1.0' },
  },
}
```

### Add a blog post

Create `blog/YYYY-MM-DD-title.md` with frontmatter:
```yaml
---
slug: my-post
title: My Post Title
authors: [chalindu]
tags: [release]
---
```

Use `<!-- truncate -->` to mark the preview cutoff.

## Conventions

- **Docs formatting**: All markdown formatted with Prettier (`npm run format`)
- **Admonitions**: Use `:::note`, `:::tip`, `:::warning` for callouts in docs
- **Cross-references**: Every doc should have a "See Also" section linking to related pages
- **Component pattern**: Each component gets its own directory with `index.tsx` + `styles.module.css`
- **Deployment**: Automatic via GitHub Actions on push to `main`
- **Source of truth**: Documentation content mirrors the licenser repo's `docs/` directory — keep them in sync
