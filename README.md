# Planto — Plant Store Landing Page

Planto is a responsive Next.js landing page for a plant/houseplant store. It includes a header, hero with featured product, testimonial card, trending product cards, and a footer. The project is built with the Next.js App Router and plain CSS modules.

## Features
- Hero section with backdrop image, feature product card and CTA buttons
- Testimonial card and trending product cards with glassmorphism styling
- Responsive layout and components under `src/components`

## Tech Stack
- Next.js  (App Router)
- React
- CSS Modules

## Project structure (key files)
- `app/page.js` — homepage composition and layout
- `src/components/header/Header.jsx` — top navigation
- `src/components/Hero/Hero.jsx` — hero / featured product
- `src/components/Hero/hero.module.css` — hero styles
- `src/components/TrendyPlants/Trendy.jsx` — trending product cards
- `src/components/customerReview/ReviewCard.jsx` — testimonial card
- `src/components/footer/Footer.jsx` — footer and contact anchor
- `public/` — static images and assets

## Quick start
Requirements: Node.js 18+ recommended.

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
# Open http://localhost:3000
```

3. Build for production

```bash
npm run build
npm run start
```

4. Linting

```bash
npm run lint
```

## How to modify main sections
- Hero text and CTAs: edit [src/components/Hero/Hero.jsx](src/components/Hero/Hero.jsx)
- Hero visual styles: edit [src/components/Hero/hero.module.css](src/components/Hero/hero.module.css)
- Trending cards: edit [src/components/TrendyPlants/Trendy.jsx](src/components/TrendyPlants/Trendy.jsx) and [src/components/TrendyPlants/trendy.module.css](src/components/TrendyPlants/trendy.module.css)
- Testimonials: edit [src/components/customerReview/ReviewCard.jsx](src/components/customerReview/ReviewCard.jsx) and [src/components/customerReview/reviewCard.module.css](src/components/customerReview/reviewCard.module.css)

## Images and assets
Place images inside the `public/` folder. Components reference images like `/plant1.png` and `/nagy-arnold.jpg` from `public/`.

## Notes & next steps
- Navigation anchors: header links point to in-page anchors such as `#plant-types` and `#contact` — add matching `id` attributes to sections to enable smooth scrolling.
- Fonts: if you want a custom font, import it in `app/globals.css` or use Next.js font optimization.

## Contributing
- Fork, create a branch, and open a PR. Keep changes focused and add notes in the PR description.

## License
This project has no license specified. Add a `LICENSE` file if you plan to open-source it.

---
