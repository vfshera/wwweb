# awwweb — React Router Web Project Starter

## Tech Stack

- **Framework:** React Router 8.0.1 (Framework Mode, SSR)
- **React:** 19.2.7
- **Database:** PostgreSQL via Drizzle ORM
- **Runtime:** Bun
- **Styling:** CSS (`app/app.css`)
- **Validation:** Zod
- **Linting:** ESLint
- **Formatting:** Prettier

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Production build |
| `bun run start` | Serve production build |
| `bun run typecheck` | React Router typegen + `tsc` |
| `bun run lint` | ESLint |
| `bun run lint:fix` | ESLint with auto-fix |
| `bun run format` | Prettier |
| `bun run db:generate` | Generate Drizzle migrations |
| `bun run db:migrate` | Run Drizzle migrations |
| `bun run db:studio` | Open Drizzle Studio |
| `bun run db:setup` | Generate + migrate |

## Project Structure

```
app/
  .server/db/schema/    # Drizzle schema
  components/           # Shared components
  constants/            # Constants
  hooks/                # Shared hooks
  routes/               # Route modules (file-system routing)
  utils/                # Utilities
  validations/          # Zod schemas
  root.tsx              # Root route
  routes.ts             # Route config
  entry.client.tsx      # Client entry
  entry.server.tsx      # Server entry
drizzle/                # Migration files
```

## Conventions

- **Named exports** — no default exports except route components
- **Route component** — always named `Component`, receives `{ loaderData, actionData }: Route.ComponentProps`; always destructure `loaderData` before use
- **Route exports** — `loader`, `action`, `ErrorBoundary`, `meta`, `handle`
- **Meta function param** — `{ loaderData }`, not `{ data }`
- **Import path** — `~/*` maps to `app/*`, `$/*` maps to root
- **Type imports** — use `type` modifier (`verbatimModuleSyntax`)
- **Server-only files** — suffix `.server.ts` or place in `.server/` directory
- **DB schema** — `app/.server/db/schema/`, migrations in `drizzle/`

## Skills

- `js-best-practices` — JS/TS performance optimization
- `react-best-practices` — React component optimization
- `react-router` — React Router framework reference (source of truth)
- `react-router-best-practices` — React Router architecture patterns
- `analyze-logs` — Analyze application logs from .evlog/logs/
- `build-audit-logs` — Build audit trails using evlog
- `review-logging-patterns` — Review and adopt evlog logging patterns
