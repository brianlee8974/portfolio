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
- `src/components/previews/`: decorative project mockups and their lookup component.
- `src/data/portfolio.js`: editable profile and project content.
- `src/index.css`: formatted theme, layouts, and responsive styles.
- `public/favicon.svg`: personal monogram.
- `index.html`: page title and description.

The `.jsx` files contain JavaScript with React's JSX syntax; no TypeScript is used.
Menu state stays in `Header`, and project-dialog state stays in `Projects`.

## Formatting

```sh
npm run format
npm run format:check
```

Prettier uses two-space indentation and an 88-character target line width.
Run `format` after editing; `format:check` reports files needing formatting.
Generated output, dependencies, and local publishing files are excluded.

Alex Morgan and the projects are illustrative sample content. The contact address
is `hello@example.com`; replace it before using this as a real portfolio. Project
cards open concept descriptions, not external live demos. Project previews are
HTML/CSS interface mockups. Fonts load from Google Fonts with local fallback fonts.
