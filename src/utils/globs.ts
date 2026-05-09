// File glob patterns shared across presets.

/** All JavaScript and TypeScript source files, including declarations. */
export const JS_TS_FILES = [
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
  "**/*.jsx",
  "**/*.ts",
  "**/*.cts",
  "**/*.mts",
  "**/*.tsx",
  "**/*.d.ts",
];

/** All TypeScript source files, including declarations. */
export const TS_FILES = ["**/*.ts", "**/*.cts", "**/*.mts", "**/*.tsx", "**/*.d.ts"];

/** All JavaScript source files. */
export const JS_FILES = ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx"];

/** Test files in any JS/TS flavor. */
export const TEST_FILES = ["**/*.{test,spec}.{ts,tsx,js,jsx}"];

/** Component test files (JSX/TSX only). */
export const COMPONENT_TEST_FILES = ["**/*.{test,spec}.{tsx,jsx}"];
