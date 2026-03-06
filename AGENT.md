# Landing Product - Agent Guide

## Architecture

Single-page product launch / SaaS landing site. `App.tsx` composes eight
section components in page order:

| File | Role |
|------|------|
| `Navbar.tsx` | Fixed navigation bar with anchor links |
| `Hero.tsx` | Headline, stats row, product mockup placeholder, launch badge |
| `Features.tsx` | 6-card feature grid; renders `FeatureCard` sub-components |
| `HowItWorks.tsx` | Step-by-step process explanation |
| `Testimonials.tsx` | Customer testimonial cards |
| `Pricing.tsx` | 3-tier pricing table; renders `PricingCard` with "popular" highlight |
| `CTA.tsx` | Final call-to-action banner |
| `Footer.tsx` | Site footer with links |

Each component accepts props with defaults. All data (features, pricing plans,
testimonials, steps) is defined as typed arrays with defaults inside each
component file -- no separate data layer.

All components are stateless (no `useVar` or `useState`). This is a purely
presentational marketing page.

## Styling

- Global reset and base typography in `styles.css` (imported by `App.tsx`).
- Each component has a co-located CSS file (`Hero.css`, `Pricing.css`, etc.).
- Plain CSS class selectors with component-prefixed names (e.g. `.hero-glow`,
  `.pricing-card.popular`, `.feature-icon`). No CSS modules, no Tailwind.
- System font stack; smooth scroll enabled globally.
- Hero uses a decorative `.hero-glow` div and a `.hero-mockup` browser-chrome
  placeholder for visual flair.

## Extension Points

- Add a section by creating `SectionName.tsx` + `SectionName.css` and inserting
  it into the render tree in `App.tsx`.
- Customize content via props -- every heading, plan, feature, and testimonial
  has a typed interface and sensible default.
- To add interactivity (e.g. pricing toggle, signup form), import `useVar` from
  `orbitcode` for persistent state or use local `useState` from `preact/hooks`.

## Constraints

- Anchor navigation (`#features`, `#pricing`) relies on matching section `id`
  attributes -- keep IDs in sync when renaming sections.
