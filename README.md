# Personal Website

A personal portfolio website built with [Astro].

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # static site into dist/
npm run preview  # serve the built output locally
```

## Where things live

```
src/
├── components/     # Header, Footer, Hero, Section, Icon
├── data/site.ts    # name, tagline, nav items, social links — edit here first
├── layouts/
│   └── Base.astro  # <head>, header/footer shell, meta tags
├── pages/
│   └── index.astro # the single page; sections are composed here
└── styles/
    └── global.css  # design tokens + layout primitives
public/
└── favicon.svg
```

Design tokens (colours, type stacks, spacing) are CSS custom properties at the top of
`global.css`. Component-specific styles stay scoped inside each `.astro` file.

## Status

Shell only, content sections are placeholders.

Still to do:

- [ ] Featured project cards, with metrics for each (if applicable)
- [ ] Timeline entries
- [ ] About section and resume link
- [ ] Contact block
- [ ] Set the real domain in `astro.config.mjs`
- [ ] Real GitHub and LinkedIn URLs in `src/data/site.ts`
