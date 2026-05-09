import { defineConfig } from "oxlint";
import { confusingBrowserGlobals } from "../utils/confusingBrowserGlobals.ts";

export const baseConfig = defineConfig({
  plugins: ["unicorn", "import", "promise", "oxc"],
  env: {
    builtin: true,
  },
  ignorePatterns: [],
  rules: {
    // -------------------------------------------------------------------------
    // Best practices
    // -------------------------------------------------------------------------
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error",
    "default-case": ["error", { commentPattern: "^no default$" }],
    "default-case-last": "error",
    "default-param-last": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-empty-function": ["error", { allow: ["arrowFunctions", "functions", "methods"] }],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "draft",
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext",
        ],
      },
    ],
    "no-proto": "error",
    "no-return-assign": ["error", "always"],
    "no-script-url": "error",
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-object-has-own": "error",
    radix: "error",
    "use-isnan": "error",
    yoda: "error",

    // -------------------------------------------------------------------------
    // Possible errors
    // -------------------------------------------------------------------------
    "for-direction": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "warn",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-empty-static-block": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
    "no-useless-backreference": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],

    // -------------------------------------------------------------------------
    // ES6+ / Modern JavaScript
    // -------------------------------------------------------------------------
    "constructor-super": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-var": "error",
    "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: true }],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",

    // -------------------------------------------------------------------------
    // Style (only rules with genuine value)
    // -------------------------------------------------------------------------
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "operator-assignment": ["error", "always"],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "unicode-bom": ["error", "never"],

    // -------------------------------------------------------------------------
    // Variables
    // -------------------------------------------------------------------------
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-redeclare": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
      },
      {
        name: "isNaN",
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
      },
      ...confusingBrowserGlobals,
    ],
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],

    // -------------------------------------------------------------------------
    // Import plugin
    // -------------------------------------------------------------------------
    "import/consistent-type-specifier-style": "off",
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "import/first": "error",
    "import/no-absolute-path": "error",
    "import/no-anonymous-default-export": [
      "error",
      { allowArray: true, allowObject: true, allowNew: true },
    ],
    "import/no-cycle": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import/no-dynamic-require": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-named-default": "error",
    "import/no-namespace": ["error", { ignore: ["@radix-ui/*"] }],
    "import/no-self-import": "error",

    // -------------------------------------------------------------------------
    // Promise plugin
    // -------------------------------------------------------------------------
    "promise/catch-or-return": "error",
    "promise/no-multiple-resolved": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",
    "promise/no-nesting": "warn",
    "promise/prefer-await-to-then": "warn",

    // -------------------------------------------------------------------------
    // Unicorn plugin — Correctness
    // -------------------------------------------------------------------------
    "unicorn/no-thenable": "error",
    "unicorn/no-invalid-fetch-options": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-negation-in-equality-check": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/no-single-promise-in-promise-methods": "error",
    "unicorn/no-await-in-promise-methods": "error",
    "unicorn/error-message": "error",
    "unicorn/no-useless-spread": "warn",
    "unicorn/no-useless-promise-resolve-reject": "warn",
    "unicorn/consistent-function-scoping": ["warn", { checkArrowFunctions: false }],

    // -------------------------------------------------------------------------
    // Unicorn plugin — Modernization
    // -------------------------------------------------------------------------
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-logical-operator-over-ternary": "error",
    "unicorn/prefer-string-replace-all": "warn",
    "unicorn/prefer-optional-catch-binding": "warn",

    // -------------------------------------------------------------------------
    // Unicorn plugin — Consistency
    // -------------------------------------------------------------------------
    "unicorn/catch-error-name": "warn",
    "unicorn/no-lonely-if": "warn",

    // -------------------------------------------------------------------------
    // OXC plugin — Performance & Correctness
    // -------------------------------------------------------------------------
    "oxc/no-accumulating-spread": "error",
    "oxc/missing-throw": "error",
    "oxc/no-barrel-file": "warn",
  },
});
