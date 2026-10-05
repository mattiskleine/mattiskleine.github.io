# AI Pair Programming Guidelines — Portfolio Modernization

## Project Overview

Modernization of `mattiskleine.github.io` from legacy vanilla HTML5/CSS3/JavaScript (with Express dev server) to a modern, performant **Svelte 5** and **SvelteKit** static application deployed to GitHub Pages.

---

## 1. Collaboration & Workflow Rules

- **Step-by-Step & Incremental**: Break down all work into focused, reviewable steps. Avoid massive rewrites in a single step.
- **Architectural Discussion First**: Before writing or refactoring major components, outline the proposed approach, component boundaries, and file structure for user review.
- **Pair Programming Stance**: The user is a professional frontend developer. Provide clean, production-grade solutions, precise rationale for design patterns, and avoid unnecessary hand-waving or oversimplified explanations.
- **Preserve Legacy Integrity (Option A)**: All SvelteKit modernization work lives inside an isolated workspace directory (`/app`) during development. Root files (`index.html`, `index_script.js`, `objects/`, etc.) must remain untouched and operational until the new build is validated and ready for root deployment.
- **Autonomous & Non-Interactive Execution**:
  - Always run CLI commands with non-interactive flags (`--yes`, `-y`, `CI=true`, etc.) to prevent silent background hangs on `stdin`.
  - Prefer clean, prefix-matchable command shapes (e.g., `pnpm --dir app <cmd>`) to maximize auto-approval and avoid repetitive user confirmation prompts.
  - Automatically apply file changes and verify through automated builds/checks (`pnpm --dir app run check`, `pnpm --dir app run build`) before requesting user review.
- **Code & Communication Conciseness**:
  - **Ultra-Brief Messages**: Keep all comments and commit messages minimal—just a few buzzwords/keywords. No verbose explanations.
  - **Compressed Code & One-Liners**: Prefer dense, compact code and one-liners wherever feasible. Avoid verbose boilerplate.
  - **Reduce Lines of Code (LOC)**: Every change should aim to reduce total LOC, not inflate it.
  - **Library-First Evaluation**: Actively consider established libraries instead of rolling custom implementations whenever sensible (e.g., `bits-ui` for UI primitives, `echarts` for radar and charts).

---

## 2. Tech Stack & Standards

### Framework & Language

- **Svelte 5**: Use modern Svelte 5 syntax and idioms exclusively.
  - **Runes**: `$state()`, `$derived()`, `$props()`, `$effect()`, `$bindable()`.
  - **No Legacy Syntax**: Do **not** use Svelte 3/4 stores (`writable`, `derived`), reactive declarations (`$: ...`), or `export let`.
  - **Snippets**: Use modern `{#snippet name(...)}` and `{@render name(...)}` for component composition and slots.
  - **Modern Events**: Use standard attributes like `onclick={...}`, `onkeydown={...}` instead of deprecated `on:click`.
- **TypeScript**: Strict mode enabled.
  - Define explicit interfaces and types for props, state, and project metadata (e.g. `$lib/types/`).
  - Avoid `any`. Use strict typing for DOM events and browser APIs.
- **Package Manager**: `pnpm` (v9+) managed via Corepack. Use `pnpm --dir app <cmd>`.
- **SvelteKit Target**: Static Site Generation (SSG).
  - Adapter: `@sveltejs/adapter-static` with prerendering enabled (`export const prerender = true`).
  - Target host: GitHub Pages.

### Styling Strategy

- **Native Svelte CSS Only**: No Tailwind, Bootstrap, or utility-first frameworks.
- **Encapsulation**: Component-scoped `<style>` blocks.
- **Design Tokens & Global CSS**: Global CSS custom properties (variables) defined in a central theme file for colors, typography, spacing, and transitions.
- **Modern CSS Features**:
  - CSS Custom Properties (`var(--...)`)
  - CSS Nesting
  - Container Queries (`@container`) and modern media queries
  - Fluid typography and sizing (`clamp()`, `min()`, `max()`)
  - Semantic HTML with accessible ARIA standards

---

## 3. Architecture & Project Layout (`/app`)

```
app/
├── src/
│   ├── app.html              # HTML document template
│   ├── app.css               # Global styles, font definitions, and CSS variables
│   ├── routes/               # SvelteKit file-based routing
│   │   ├── +layout.svelte    # Shell layout (Header, Menu, Parallax/Backdrop)
│   │   ├── +layout.ts        # SSG configuration (prerender = true)
│   │   ├── +page.svelte      # Main portfolio page (About / Projects toggling or sections)
│   │   └── projects/         # Individual project detail routes or modal subviews
│   └── lib/
│       ├── components/       # Reusable UI components
│       │   ├── layout/       # Navigation, Header, Parallax Hero, Footer
│       │   ├── cv/           # Interactive CV, SVG radar chart, Timeline
│       │   ├── projects/     # 3D Tilt Cards, Projects Grid
│       │   └── shared/       # Toasts, Modals, Buttons, Icons
│       ├── types/            # TypeScript interfaces & types
│       ├── data/             # Structured project content, timeline data, skills
│       └── utils/            # Math helpers (range mapping, geometry), clipboard
├── static/                   # Fonts, models (cane.glb), images, icons
└── svelte.config.js          # Configured with adapter-static
```

---

## 4. Modernization Milestones

1. **Phase 1: Setup & Guidelines** _(Current)_
   - Guidelines established in `AGENTS.md`.
   - Scaffold SvelteKit project in `/app` with Svelte 5, TypeScript, and `@sveltejs/adapter-static`.
2. **Phase 2: Foundations & Design System**
   - Font loading pipeline & global CSS custom properties.
   - Core layout shell (`+layout.svelte`), responsive dynamic header, and mobile menu. Switch from custom to library (bits-ui).
3. **Phase 3: Hero & Interactive CV**
   - Parallax scroll header.
   - Interactive SVG radar chart component (`$state`, reactive math, modal details). This one should also outsource to a library (echarts).
   - Education & experience timeline, competence profile, and PDF download.
4. **Phase 4: Project Showcase & 3D Tilt Cards**
   - Interactive project preview cards with 3D cursor-tracking perspective tilt.
   - Dynamic project data model.
5. **Phase 5: Sub-Project Demos & Deep Dives**
   - Integrate Google `<model-viewer>` for `iCan(e)` 3D interactive viewer or find a more elegant solution (more likely).
   - Automotive Emission Calculator should use the new charting library (echarts).
   - Responsive presentation for Binary Bamse, Car Parts AR, and Virtual Conferencing.
6. **Phase 6: Production Build & Deployment**
   - Automated GitHub Actions workflow to build `/app` with `adapter-static` and publish to GitHub Pages.
   - Transition root repository cleanly.
