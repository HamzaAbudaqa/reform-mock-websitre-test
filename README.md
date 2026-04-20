# DeployFlow

A fictional B2B SaaS demo app built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. DeployFlow is a lightweight blend of Vercel, Railway, Render, and Datadog — it lets engineering teams monitor deployments, track incidents, inspect logs, and manage environments.

> ⚠️ **This is intentionally a "before redesign" demo app.**
> It was built as the "before" state for a UI transformation demo. The engineering is solid, but the visual design is intentionally generic and underdesigned so that a UI transformation engine can dramatically improve it on video.

## Running the app

```bash
cd deployflow
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Scripts:
- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build

## Page overview

| Route | Purpose |
|-------|---------|
| `/` | Marketing landing page — navbar, hero, features, stats, logos, testimonials, pricing, footer |
| `/login` | Email/password + social login, with a brand panel on the right |
| `/dashboard` | App dashboard — KPIs, deployment activity, incidents, live logs, environments, team widget |
| `/projects` | Projects list — filterable table of services with status, environments, owners |
| `/projects/[id]` | Project detail — tabs for overview, deployments, logs, settings |
| `/settings` | Profile, team, billing, API keys, notifications, danger zone |

All routes are clickable and navigate correctly. All content is driven by mock data in `lib/mockData.ts` — no backend required.

## Folder structure

```
deployflow/
├── app/
│   ├── layout.tsx            # root layout
│   ├── globals.css           # Tailwind base
│   ├── page.tsx              # landing page
│   ├── login/page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── projects/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── settings/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── landing/              # Navbar, Hero, Features, Stats, Logos, Testimonials, Pricing, Footer
│   ├── dashboard/            # Sidebar, Header, KpiCard, ActivityFeed, IncidentsList, LogsPreview, EnvironmentsOverview, TeamWidget
│   └── ui/                   # Button, Card, Badge
├── lib/
│   └── mockData.ts           # projects, deployments, incidents, logs, team, envs, kpis
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Intentional "before" design weaknesses

Per the demo brief, this UI deliberately includes:

- Generic SaaS indigo/purple gradient
- Two competing accent colors (indigo + green)
- Inconsistent border radii (`rounded`, `rounded-md`, `rounded-lg`)
- Cards that all look the same and stack vertically without visual variety
- Weak hierarchy — sections don't feel clearly prioritized
- Too many borders and nested panels on the dashboard
- Default-looking buttons and form inputs
- Boilerplate feature grid with emoji icons
- Template-ish hero with a mocked browser chrome mockup
- Minimal brand personality (a generic "DF" gradient square)

The engineering, however, is clean:

- Modular component structure
- Typed mock data
- Readable Tailwind usage
- Works fully locally with no backend
- Responsive behavior on all pages
- Stable build with no runtime errors

## Notes for the transformation demo

The richest material for a before/after comparison lives in:

- **Landing page** (`/`) — bland hero, boilerplate feature grid, generic pricing cards
- **Dashboard** (`/dashboard`) — too many identical white cards stacked together
- **Projects list** (`/projects`) — flat table with weak visual priority
- **Project detail** (`/projects/checkout-service`) — tab navigation with repetitive card blocks

Have fun making it better.
