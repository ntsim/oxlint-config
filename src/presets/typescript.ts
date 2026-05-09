import { defineConfig } from "oxlint";
import { TS_FILES } from "../utils/globs.ts";

export const typescriptConfig = defineConfig({
  overrides: [
    {
      // -----------------------------------------------------------------------
      // TypeScript rules — merged into a single override for TS files.
      // Disables base rules that TS handles natively, enables TS-aware
      // replacements, and configures all typescript/ plugin rules.
      // -----------------------------------------------------------------------
      files: TS_FILES,
      rules: {
        // --- Disable base rules superseded by TypeScript compiler ---
        "constructor-super": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",

        // --- TS-aware replacements of base rules ---
        "default-param-last": "error",
        "no-array-constructor": "error",
        "no-empty-function": ["error", { allow: ["arrowFunctions", "functions", "methods"] }],
        "no-loop-func": "error",
        "no-shadow": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
          },
        ],
        "no-unused-vars": [
          "warn",
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
          },
        ],
        "no-use-before-define": [
          "error",
          {
            classes: false,
            functions: false,
            variables: true,
            typedefs: false,
          },
        ],
        "no-useless-constructor": "error",
        "no-throw-literal": "off",
        "prefer-destructuring": "off",

        // --- TypeScript plugin: Type system rules ---
        "typescript/adjacent-overload-signatures": "error",
        "typescript/array-type": ["error", { default: "array", readonly: "array" }],
        "typescript/await-thenable": "error",
        "typescript/ban-ts-comment": [
          "error",
          {
            minimumDescriptionLength: 3,
            "ts-check": false,
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
          },
        ],
        "typescript/class-literal-property-style": ["error", "fields"],
        "typescript/consistent-generic-constructors": ["error", "constructor"],
        "typescript/consistent-indexed-object-style": "error",
        "typescript/consistent-type-assertions": [
          "error",
          {
            arrayLiteralTypeAssertions: "allow",
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow",
          },
        ],
        "typescript/consistent-type-definitions": ["error", "interface"],
        "typescript/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: false },
        ],
        "typescript/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
        "typescript/dot-notation": [
          "error",
          {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false,
          },
        ],
        "typescript/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowOverloadFunctions: false,
            allowTypedFunctionExpressions: true,
          },
        ],

        // --- TypeScript plugin: No-* rules ---
        "typescript/no-array-delete": "error",
        "typescript/no-confusing-non-null-assertion": "error",
        "typescript/no-confusing-void-expression": [
          "error",
          {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: true,
            ignoreVoidReturningFunctions: false,
          },
        ],
        "typescript/no-duplicate-enum-values": "error",
        "typescript/no-duplicate-type-constituents": [
          "error",
          { ignoreIntersections: false, ignoreUnions: false },
        ],
        "typescript/no-empty-object-type": [
          "error",
          { allowInterfaces: "never", allowObjectTypes: "never" },
        ],
        "typescript/no-explicit-any": ["error", { fixToUnknown: false, ignoreRestArgs: false }],
        "typescript/no-extra-non-null-assertion": "error",
        "typescript/no-floating-promises": "error",
        "typescript/no-for-in-array": "error",
        "typescript/no-implied-eval": "error",
        "typescript/no-import-type-side-effects": "error",
        "typescript/no-inferrable-types": [
          "error",
          { ignoreParameters: false, ignoreProperties: false },
        ],
        "typescript/no-misused-new": "error",
        "typescript/no-misused-promises": [
          "error",
          {
            checksConditionals: true,
            checksSpreads: true,
            checksVoidReturn: false,
          },
        ],
        "typescript/no-misused-spread": ["error", { allow: [] }],
        "typescript/no-mixed-enums": "error",
        "typescript/no-namespace": [
          "error",
          { allowDeclarations: false, allowDefinitionFiles: true },
        ],
        "typescript/no-non-null-asserted-nullish-coalescing": "warn",
        "typescript/no-non-null-asserted-optional-chain": "error",
        "typescript/no-non-null-assertion": "error",
        "typescript/no-redundant-type-constituents": "error",
        "typescript/no-require-imports": ["error", { allow: [], allowAsImport: false }],
        "typescript/no-unnecessary-boolean-literal-compare": "error",
        "typescript/no-unnecessary-parameter-property-assignment": "error",
        "typescript/no-unnecessary-qualifier": "error",
        "typescript/no-unnecessary-template-expression": "error",
        "typescript/no-unnecessary-type-arguments": "error",
        "typescript/no-unnecessary-type-assertion": "error",
        "typescript/no-unnecessary-type-constraint": "error",
        "typescript/no-unnecessary-type-conversion": "warn",
        "typescript/no-unsafe-declaration-merging": "error",
        "typescript/no-unsafe-enum-comparison": "error",
        "typescript/no-unsafe-function-type": "error",
        "typescript/no-unsafe-return": "error",
        "typescript/no-unsafe-unary-minus": "error",
        "typescript/no-useless-empty-export": "error",
        "typescript/no-wrapper-object-types": "error",

        // --- TypeScript plugin: Prefer-* rules ---
        "typescript/only-throw-error": "off",
        "typescript/prefer-as-const": "error",
        "typescript/prefer-find": "error",
        "typescript/prefer-for-of": "error",
        "typescript/prefer-function-type": "error",
        "typescript/prefer-includes": "warn",
        "typescript/prefer-nullish-coalescing": ["error", { ignoreBooleanCoercion: true }],
        "typescript/prefer-reduce-type-parameter": "error",
        "typescript/prefer-regexp-exec": "error",
        "typescript/prefer-string-starts-ends-with": "warn",
        "typescript/promise-function-async": "error",
        "typescript/require-array-sort-compare": "error",
        "typescript/return-await": ["error", "in-try-catch"],
        "typescript/switch-exhaustiveness-check": [
          "error",
          { considerDefaultExhaustiveForUnions: true },
        ],
        "typescript/unified-signatures": [
          "error",
          {
            ignoreDifferentlyNamedParameters: false,
            ignoreOverloadsWithDifferentJSDoc: false,
          },
        ],
      },
      plugins: ["typescript", "import"],
    },
  ],
});
