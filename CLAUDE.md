# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Serve production build
npm run typecheck    # Run react-router typegen + tsc
```

No test runner is configured yet.

## Architecture

**Stack:** React 19, React Router 7 (SSR), Tailwind CSS v4, Zustand, Zod, Axios

**React Router v7 conventions:**
- File-based routing via `flatRoutes()` — route files live in `app/routes/` and use dot-notation for nesting (e.g., `profile.posts.grid.tsx` = `/profile/posts/grid`)
- Data loading uses exported `loader` functions (server-side); form mutations use `action` exports
- Types are auto-generated via `react-router typegen` — run typecheck after adding routes
- SSR is enabled; avoid browser-only APIs at module level

**Key directories:**
- `app/routes/` — all page components and their loaders/actions
- `app/components/` — reusable UI components (no global state, props-driven)
- `app/schemas/` — Zod schemas used for both API response validation and form validation
- `app/services/api.ts` — single Axios instance with `baseURL: http://localhost:3000`

**Patterns:**
- Validate API responses with Zod schemas (`z.infer<typeof schema>` for types)
- Path alias `~/*` maps to `app/*`
- Zustand is available but not yet wired up; loaders/local state handle data currently
- Tailwind v4 — config lives in `app.css` via `@theme` block, not `tailwind.config.js`
