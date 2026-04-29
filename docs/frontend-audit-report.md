# Day 5 Audit Report

## Critical Bug (TypeScript build fails)

**`app/schemas/post.schema.ts`** — `createPostSchema` is defined but not included in the `export {}` statement on line 22. `CreatePostForm.tsx` imports it, so `npm run typecheck` fails with a hard error.

---

## ESLint — Cannot run at all

**`eslint.config.mjs` has two bugs:**

1. **Leading space in package name** — line 3: `" eslint-plugin-react-hooks"` (note the space before `eslint`). Node can't find the package.
2. **Wrong rule key** — `"react-refreshing/only-export-components"` should be `"react-refresh/only-export-components"`.

---

## Prettier — 22/22 files fail

Every single `.ts/.tsx` file has formatting violations. Nothing has been run through Prettier yet.

---

## Dead / Boilerplate Code

| File | Issue |
|------|-------|
| `app/routes/home.tsx` | Renders the default `<Welcome>` boilerplate — not a real feed |
| `app/welcome/` folder | Entire folder (`welcome.tsx`, `logo-dark.svg`, `logo-light.svg`) is React Router scaffolding with no app value |
| `app/routes/create.tsx` | Long explanatory comment at the bottom of the file |
| `app/services/api.ts` | Explanatory comment on line 3; exports both named `{ api }` and `default api` on the same line |
| `app/schemas/post.schema.ts` | Four comment lines explaining Zod concepts |
| `app/components/CreatePostForm.tsx` | Three `// ✅` explanation comments inline |

---

## Type Safety (`any` usage)

| File | Issue |
|------|-------|
| `profile.tagged.grid.tsx` | `useLoaderData()` is untyped; `any` used in `.map()` |
| `profile.highlights.tsx` | `useLoaderData()` untyped; `any` in `.map()` |
| `profile.highlights.$id.tsx` | `useLoaderData()` untyped |
| `profile.tsx` | No loader — profile header shows hardcoded `webeet_user` in `PostCard` |

---

## Tailwind Inconsistencies

| File | Issue |
|------|-------|
| `profile.tsx` | Active tab uses **inline `style` prop** instead of Tailwind — the only file that does this |
| `profile.posts.grid.tsx` | `grid-cols-1 md:grid-cols-3 gap-4` — should be `grid-cols-3 gap-1` (Instagram-style tight grid) |
| `profile.reels.grid.tsx` | `grid-cols-2 md:grid-cols-4` — inconsistent with posts grid |
| `profile.tagged.grid.tsx` | Renders full `<PostCard>` inside a 3-col grid — should be a square thumbnail |
| `root.tsx` | `<main>` has `p-4` but **no `pb-20`** — content hidden behind fixed bottom nav |
| `BottomNav.tsx` | `max-w-lg` constrains the nav grid but container is `w-full` — broken on desktop |
| `Header.tsx` | `❤️` emoji as icon — placeholder |
| `BottomNav.tsx` | All emoji icons; "Reels" tab uses plain text; no active state |
| `ReelGridItem.tsx` | `▶️` emoji as play icon |
| `HighlightBubble.tsx` | No gradient ring (core Instagram visual detail) |
| `PostCard.tsx` | No avatar, no action row (like/comment/share/save), no like count |

---

## Responsiveness Issues

| File | Issue |
|------|-------|
| `root.tsx` | Missing `pb-16` on `<main>` — bottom nav covers content on all screen sizes |
| `BottomNav.tsx` | `max-w-lg mx-auto` grid inside full-width footer doesn't centre icons on wide screens |
| `PostCard.tsx` | `max-w-lg mx-auto` ignored when rendered inside a grid |
| `profile.posts.grid.tsx` | `gap-4` between grid cells — Instagram profile uses `gap-1` |

---

## Portfolio Screenshots Needed

Capture these screens and save to `docs/screenshots/`:

| # | Screen | Route |
|---|--------|-------|
| 1 | Home feed | `/home` |
| 2 | Profile overview (avatar, stats, bio, thumbnail grid) | `/profile/posts/grid` |
| 3 | Reels grid | `/profile/reels/grid` |
| 4 | Highlights list | `/profile/highlights` |
| 5 | Highlight detail | `/profile/highlights/:id` |
| 6 | Create post form (with image preview) | `/create` |
| 7 | Tagged grid | `/profile/tagged/grid` |

---

## Fix Priority Order

1. Fix `createPostSchema` export — build is broken
2. Fix `eslint.config.mjs` bugs — ESLint can't run
3. Run Prettier across all files
4. Remove all explanatory comments, welcome boilerplate, dead code
5. Fix `root.tsx` missing `pb-20` on main — layout bug affecting every page
6. Fix type safety — remove `any`, type `useLoaderData` returns
7. Standardise grids — posts/tagged/reels all `grid-cols-3 gap-1`
8. Replace inline style with Tailwind in `profile.tsx`
9. Polish components — icons, HighlightBubble gradient ring, PostCard actions
10. Write README
