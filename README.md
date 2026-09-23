# Sample portfolio

A customizable portfolio built with **JavaScript, React, Vite, and Tailwind CSS**.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

## Customize

- `src/App.jsx`: the page outline; assembles the section components.
- `src/components/Hero.jsx`: introduction, actions, and decorative code card.
- `src/components/Projects.jsx`: project list and selected-project state.
- `src/components/ProjectCard.jsx`: one reusable project card.
- `src/components/ProjectDialog.jsx`: project details and modal behavior.
- `src/components/About.jsx`: biography and skill groups.
- `src/components/Contact.jsx`: contact section and email links.
- `src/components/Header.jsx`: desktop navigation and mobile menu state.
- `src/components/Footer.jsx`: copyright and back-to-top link.
- `src/components/SlideIn.jsx` and `SlideIn.css`: reusable scroll animations.
- `src/components/previews/`: project imagery, sample mockups, and their lookup.
- `src/data/portfolio.js`: editable profile and project content.
- `src/index.css`: formatted theme, layouts, and responsive styles.
- `public/favicon.svg`: personal monogram.
- `index.html`: page title and description.

The `.jsx` files contain JavaScript with React's JSX syntax; no TypeScript is used.
Menu state stays in `Header`, and project-dialog state stays in `Projects`.

Simple spacing, colors, and typography use Tailwind utilities in each component.
Shared styles, project artwork, and complex responsive layouts stay in `index.css`.

Use `SlideIn` in place of an element to reveal it once as it enters the viewport.
Set `as` for its HTML tag and `delay` in milliseconds to stagger nearby content.
Animation distance and duration live in `SlideIn.css`; reduced-motion preferences
and keyboard focus skip the animation automatically.

## Formatting

```sh
npm run format
npm run format:check
```

Prettier uses two-space indentation and an 88-character target line width.
Run `format` after editing; `format:check` reports files needing formatting.
Generated output, dependencies, and local publishing files are excluded.

DeskCanvas links to its real Steam listing. Forma and Folio are sample concepts.
Project cards open details; projects with a `url` also show an external link.
Fonts load from Google Fonts with local fallback fonts.

DeskCanvas artwork in `public/images/deskcanvas-header.jpg` comes from its
[official Steam listing](https://store.steampowered.com/app/4889250/DeskCanvas/).
The product description and feature summary are based on the same listing.
