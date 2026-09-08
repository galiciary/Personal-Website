# Personal Website

My portfolio, built with [Astro] and deployed to GitHub Pages at
[galiciary.github.io](https://galiciary.github.io).

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # static site into dist/
npm run preview  # serve the built output locally
npm run check    # type check the .astro files
```

## Where things live

```
src/
├── components/
│   ├── Header.astro           # sticky nav, resume link
│   ├── Hero.astro             # full screen intro, portrait, social icons
│   ├── Backdrop.astro         # canvas node-link field, used by the hero and about
│   ├── Section.astro          # section shell: eyebrow, title, lede, decor slot
│   ├── ProjectCard.astro      # fixed size card in the projects rail
│   ├── Timeline.astro         # centre spine, cards alternating either side
│   ├── TimelineBackdrop.astro # canvas motes rising behind the timeline
│   ├── About.astro            # contact block and site map
│   ├── Footer.astro           # copyright, source link
│   └── Icon.astro             # inline svg set
├── data/
│   ├── site.ts                # name, tagline, nav, socials — edit here first
│   ├── projects.ts            # the project rail and its modal content
│   └── timeline.ts            # timeline entries, newest first
├── layouts/
│   └── Base.astro             # <head>, header/footer shell, scroll reveal
├── pages/
│   └── index.astro            # the single page; sections are composed here
└── styles/
    └── global.css             # design tokens + layout primitives
public/
├── favicon.svg
├── images/lance.jpg
└── Lance-Galicia-Resume.pdf
```

Design tokens (colours, type stacks, spacing) are CSS custom properties at the top of
`global.css`. Component-specific styles stay scoped inside each `.astro` file.

## Notes

- **Content first.** Almost everything on the page is driven by the three files in
  `src/data/`. Adding a project or a timeline entry means editing an array, not markup.
- **Animation is optional.** Both canvas backdrops honour `prefers-reduced-motion`, pause
  when their section scrolls out of view, and scale their particle count with the area, so
  a phone does not run a desktop workload.
- **Scroll reveal** is applied by script, so with JavaScript off every section stays visible
  rather than never appearing.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with the Astro action
and publishes to GitHub Pages. The Pages source must be set to **GitHub Actions** in the
repository settings.

`site` in `astro.config.mjs` drives canonical URLs and `og:url` — update it if a custom
domain is added.

[Astro]: https://astro.build
