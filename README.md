# oxlint-config

An [oxlint](https://oxc.rs/docs/guide/usage/linter) configuration providing composable lint presets for JavaScript/TypeScript projects using React, Vitest, and Testing Library.

The main configuration is derived from the Airbnb ESLint config with modifications to be more relaxed. Notably, some redundant / very old rules have also been removed.

Overall, this is still quite a **strict** and **opinionated** configuration but provides lots of safeguards against common mistakes and bad conventions, and ultimately helps to provide consistency to a codebase.

## Presets

| Preset                 | Description                                                                       |
| ---------------------- | --------------------------------------------------------------------------------- |
| `baseConfig`           | Core rules — best practices, imports, promises, unicorn, and oxc                  |
| `typescriptConfig`     | TypeScript-specific rules (scoped to `.ts`/`.tsx`/`.cts`/`.mts`/`.d.ts`)          |
| `reactConfig`          | React patterns, hooks, and jsx-a11y accessibility rules                           |
| `vitestConfig`         | Test quality rules (scoped to `*.{test,spec}.*` files)                            |
| `testingLibraryConfig` | Testing Library and jest-dom best practices (scoped to `*.{test,spec}.{tsx,jsx}`) |

## Usage

Install the package, then extend the presets you need in your `oxlint.config.ts`:

```ts
import { defineConfig } from "oxlint";
import { baseConfig, typescriptConfig, reactConfig } from "oxlint-config";

export default defineConfig({
  extends: [baseConfig, typescriptConfig, reactConfig],
});
```

## Development

### Prerequisites

- Node.js v24+ (version pinned in `package.json`, `.nvmrc` and `mise.toml`)
- [pnpm v11+](https://pnpm.io/) (version pinned in `package.json` — do not use other package managers)

We recommended installing the correct Node version for the project with [mise](https://mise.en.dev/) or [fnm](https://github.com/Schniz/fnm).

Install the correct `pnpm` version using corepack:

```bash
corepack enable
corepack install
```

### Setup

1. Install dependencies:

```bash
pnpm install
```

### Scripts

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `pnpm run lint`         | Run oxlint against the repo      |
| `pnpm run lint:fix`     | Fix any auto-fixable lints       |
| `pnpm run format`       | Format with oxfmt                |
| `pnpm run format:check` | Check formatting without writing |
| `pnpm run types`        | Type-check with `tsc --noEmit`   |

### Project layout

```
src/
  index.ts              # Public entry — re-exports all presets
  presets/
    base.ts             # Base/JS rules
    typescript.ts       # TypeScript rules
    react.ts            # React + a11y rules
    vitest.ts           # Vitest test rules
    testingLibrary.ts   # Testing Library + jest-dom rules
  utils/
    globs.ts            # Shared file-glob patterns
    confusingBrowserGlobals.ts  # Browser globals that should use window.*
oxlint.config.ts        # This repo's own lint config
tsconfig.json           # Strict TS config (no emit, bundler resolution)
```

### Conventions

- Relative imports must include the `.ts` extension (required by `allowImportingTsExtensions` + ESM resolution).
- Rule severity follows the ESLint-compatible shape: `"error" | "warn" | "off"` or `[severity, options]`.
- Keep rules alphabetized within a section when practical.
- Prefer editing existing presets over creating new files.

### Adding a new preset

1. Create `src/presets/<name>.ts` exporting a `defineConfig({...})` from `oxlint`.
2. Re-export it from `src/index.ts`.
3. If the preset should apply to this repo, add it to the `extends` array in `oxlint.config.ts`.
