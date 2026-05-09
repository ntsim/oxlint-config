# AGENTS.md

This repo is a shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configuration published as
the `oxlint-config` package. The entry point is `src/index.ts`, which re-exports preset configs
from `src/presets/*`.

## Package manager

Use `pnpm`. `packageManager` in `package.json` pins the version — don't switch tools. If pnpm is not
already installed, use `corepack` to install it.

- `pnpm install` to install dependencies
- `pnpm add <pkg>` / `pnpm add -D <pkg>` to add dependencies
- `pnpm run <script>` to run a script

## Scripts

Defined in `package.json`:

- `pnpm run lint` — run `oxlint` against the repo (uses `oxlint.config.ts`)
- `pnpm run lint:fix` — fixes any auto-fixable lints
- `pnpm run format` — format with `oxfmt`
- `pnpm run format:check` — check formatting without writing
- `pnpm run types` — runs type check with `tsc --noEmit`

Before handing work back, run `pnpm run lint`, `pnpm run format:check`, and `pnpm run types`.

## Project layout

- `src/index.ts` — public entry; re-exports every preset
- `src/presets/` — individual presets (`base`, `ts`, `react`, `vitest`, `testing-library`)
- `src/utils/` — shared helpers (file globs, browser-globals list)
- `oxlint.config.ts` — this repo's own lint config
- `tsconfig.json` — strict TS config (`allowImportingTsExtensions`, `verbatimModuleSyntax`)

When adding a new preset:

1. Create `src/presets/<name>.ts` exporting a `defineConfig({...})` from `oxlint`.
2. Re-export it from `src/index.ts`.
3. Add it to the `extends` array in `oxlint.config.ts` if it should apply to this repo too.

## Conventions

- Relative imports in `src/**` include the `.ts` extension (required by the TS config's
  `allowImportingTsExtensions` + ESM resolution).
- Prefer editing existing presets over creating new files.
- Rule values follow oxlint's ESLint-compatible shape (`"error" | "warn" | "off"` or
  `[severity, options]`). Keep rules alphabetized within a block when practical.
