# Tanstack Start Starter

**Full-stack React apps with type-safe routing and zero boilerplate.**

[![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.x-blue?logo=react)](https://tanstack.com/start)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Uses pnpm](https://img.shields.io/badge/pnpm-11.x-orange?logo=pnpm)](https://pnpm.io/)

## What's included

- **[TanStack Start](https://tanstack.com/start)** — full-stack React meta-framework with type-safe routing and server functions
- **[TanStack Query](https://tanstack.com/query)** — server-state management, SSR-integrated with the router
- **[Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)** — utility-first styling with accessible component primitives
- **React 19** — latest React with TanStack Query and Router devtools
- **Strict TypeScript, Oxfmt, Oxlint** — fast DX with import, package, and Tailwind class sorting
- **[Claude Code](https://claude.ai/code) skills** — AI-assisted development with context-aware guidance

## Prerequisites

- Node.js 22+ (LTS)
- pnpm 11.x (pinned via `packageManager` in `package.json`)

## Quick start

```bash
npx degit AdiRishi/tanstack-start-starter my-app
cd my-app
pnpm install
pnpm dev
```

The app runs at `http://localhost:8080`.

## Tech stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | TanStack Start (React 19 + Vite)        |
| Routing   | TanStack Router (type-safe, file-based) |
| Data      | TanStack Query (SSR-integrated)         |
| Styling   | Tailwind CSS v4 + shadcn/ui             |
| Testing   | Vitest + Testing Library                |
| Language  | TypeScript (strict)                     |

## Project structure

```
src/
  routes/                     → File-based routes (TanStack Router)
  components/ui/              → shadcn/ui primitives (button, input, label)
  lib/
    app-provider.tsx          → App-wide provider wrapper (extension point)
  global-styles/tailwind.css  → Theme tokens — edit this to customize your app
```

## Scripts

| Command          | Description                 |
| ---------------- | --------------------------- |
| `pnpm dev`       | Vite dev server             |
| `pnpm build`     | Production build            |
| `pnpm test`      | Run tests                   |
| `pnpm typecheck` | Type check with tsc         |
| `pnpm check`     | Format + lint with auto-fix |

## Testing

Frontend tests use Vitest, jsdom, React Testing Library, jest-dom matchers, and user-event.

## Resources

- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
