# Portfolio — Website Clone Pipeline

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (CSS-based config, NOT v3 `tailwind.config.js`)
- **Components**: shadcn/ui (latest, New York style)
- **Language**: JavaScript only (.jsx) — no TypeScript

## Coding Rules
- Use `@import "tailwindcss"` in `src/index.css` — never v3 `@tailwind` directives
- No `tailwind.config.js` — Tailwind v4 uses CSS custom properties for theming
- shadcn/ui imports from `@/components/ui/...` via path alias
- `cn()` utility from `@/lib/utils` for conditional class merging
- No inline styles — use Tailwind utility classes exclusively
- No `@apply` in component files
- All components are `.jsx` files
- Default exports for page components

## Content Owner
**Troy Labajo** — all cloned content must be replaced with Troy Labajo's custom portfolio content.

## Pipeline Commands (invoke in order)

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `/project:analyze` | Analyze source website — extract sections, colors, typography, components |
| 2 | `/project:scaffold` | Bootstrap Vite + React 19 + Tailwind v4 + shadcn/ui |
| 3 | `/project:clone` | Build the React component from the analysis |
| 4 | `/project:content` | Replace all content with Troy Labajo's info |
| 5 | `/project:review` | Validate quality and run production build |

## File Structure
```
portfolio/
├── .claude/
│   ├── CLAUDE.md              # This file
│   └── commands/
│       ├── analyze.md         # /project:analyze
│       ├── scaffold.md        # /project:scaffold
│       ├── clone.md           # /project:clone
│       ├── content.md         # /project:content
│       └── review.md          # /project:review
├── src/
│   ├── components/ui/         # shadcn/ui components (auto-generated)
│   ├── lib/utils.js           # cn() utility
│   ├── pages/
│   │   └── ClonedPage.jsx     # Main cloned page component
│   ├── App.jsx                # Root component — renders ClonedPage
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind v4 import + theme variables
├── jsconfig.json              # Path aliases (@/ → ./src/)
├── vite.config.js             # Vite + Tailwind v4 plugin
└── package.json
```
