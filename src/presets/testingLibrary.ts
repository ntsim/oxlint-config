import { defineConfig } from "oxlint";
import { COMPONENT_TEST_FILES } from "../utils/globs.ts";

export const testingLibraryConfig = defineConfig({
  overrides: [
    {
      files: COMPONENT_TEST_FILES,
      rules: {
        "unicorn/consistent-function-scoping": "off",
        "testing-library/await-async-events": [
          "error",
          {
            eventModule: "userEvent",
          },
        ],
        "testing-library/await-async-queries": "error",
        "testing-library/await-async-utils": "error",
        "testing-library/no-await-sync-events": [
          "error",
          {
            eventModules: ["fire-event"],
          },
        ],
        "testing-library/no-await-sync-queries": "error",
        "testing-library/no-container": "error",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/no-dom-import": ["error", "react"],
        "testing-library/no-global-regexp-flag-in-query": "error",
        "testing-library/no-manual-cleanup": "error",
        "testing-library/no-node-access": "error",
        "testing-library/no-promise-in-fire-event": "error",
        "testing-library/no-render-in-lifecycle": "error",
        "testing-library/no-unnecessary-act": "error",
        "testing-library/no-wait-for-multiple-assertions": "error",
        "testing-library/no-wait-for-side-effects": "error",
        "testing-library/no-wait-for-snapshot": "error",
        "testing-library/prefer-explicit-assert": ["error", { assertion: "toBeInTheDocument" }],
        "testing-library/prefer-find-by": "error",
        "testing-library/prefer-presence-queries": "error",
        "testing-library/prefer-query-by-disappearance": "error",
        "testing-library/prefer-screen-queries": "error",
        "testing-library/render-result-naming-convention": "error",
        "jest-dom/prefer-checked": "error",
        "jest-dom/prefer-empty": "error",
        "jest-dom/prefer-enabled-disabled": "error",
        "jest-dom/prefer-focus": "error",
        "jest-dom/prefer-in-document": "error",
        "jest-dom/prefer-required": "error",
        "jest-dom/prefer-to-have-attribute": "error",
        "jest-dom/prefer-to-have-class": "error",
        "jest-dom/prefer-to-have-style": "error",
        "jest-dom/prefer-to-have-text-content": "error",
        "jest-dom/prefer-to-have-value": "error",
      },
      jsPlugins: ["eslint-plugin-testing-library", "eslint-plugin-jest-dom"],
    },
  ],
});
