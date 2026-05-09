import { defineConfig } from "oxlint";
import { TEST_FILES } from "../utils/globs.ts";

export const vitestConfig = defineConfig({
  overrides: [
    {
      files: TEST_FILES,
      rules: {
        "vitest/expect-expect": "error",
        "vitest/no-commented-out-tests": "error",
        "vitest/no-conditional-expect": "error",
        "vitest/no-disabled-tests": "warn",
        "vitest/no-focused-tests": "error",
        "vitest/no-identical-title": "error",
        "vitest/no-import-node-test": "error",
        "vitest/no-interpolation-in-snapshots": "error",
        "vitest/no-mocks-import": "error",
        "vitest/no-standalone-expect": "error",
        "vitest/no-unneeded-async-expect-function": "error",
        "vitest/prefer-called-exactly-once-with": "error",
        "vitest/require-local-test-context-for-concurrent-snapshots": "error",
        "vitest/require-mock-type-parameters": "off",
        "vitest/valid-describe-callback": "error",
        "vitest/valid-expect": "error",
        "vitest/valid-expect-in-promise": "error",
        "vitest/valid-title": "error",
        "vitest/consistent-test-filename": [
          "error",
          {
            allTestPattern: ".*\\.(test|spec)\\.[tj]sx?$",
            pattern: ".*\\.test\\.[tj]sx?$",
          },
        ],
        "vitest/consistent-test-it": "error",
        "vitest/no-alias-methods": "error",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-tests": "error",
        "vitest/no-duplicate-hooks": "error",
        "vitest/no-test-return-statement": "error",
        "vitest/prefer-called-with": "error",
        "vitest/prefer-comparison-matcher": "error",
        "vitest/prefer-equality-matcher": "error",
        "vitest/prefer-hooks-in-order": "error",
        "vitest/prefer-hooks-on-top": "error",
        "vitest/prefer-lowercase-title": [
          "error",
          {
            ignore: ["describe"],
          },
        ],
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-spy-on": "error",
        "vitest/prefer-to-be": "error",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        "vitest/prefer-todo": "error",
        "typescript/unbound-method": "off",
        "typescript/no-non-null-assertion": "off",
        "unicorn/consistent-function-scoping": "off",
      },
      plugins: ["vitest", "typescript"],
    },
  ],
});
