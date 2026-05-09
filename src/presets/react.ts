import { defineConfig } from "oxlint";
import { JS_TS_FILES } from "../utils/globs.ts";

export const reactConfig = defineConfig({
  overrides: [
    {
      files: JS_TS_FILES,
      rules: {
        // --- React: Component patterns ---
        "react/button-has-type": "error",
        "react/checked-requires-onchange-or-readonly": "error",
        "react/display-name": "off",
        "react/forward-ref-uses-ref": "error",
        "react/iframe-missing-sandbox": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "warn",
        "react/no-danger-with-children": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-namespace": "error",
        "react/no-string-refs": ["error", { noTemplateLiterals: true }],
        "react/no-unknown-property": ["error", { ignore: [], requireDataLowercase: false }],
        "react/self-closing-comp": ["error", { component: true, html: true }],
        "react/style-prop-object": ["error", { allow: [] }],
        "react/void-dom-elements-no-children": "error",

        // --- React: JSX ---
        "react/jsx-boolean-value": ["error", "never", { always: [] }],
        "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
        "react/jsx-key": [
          "error",
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: false,
            warnOnDuplicates: true,
          },
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "off",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-script-url": [
          "error",
          [
            { name: "Link", props: ["to", "href"] },
            { name: "NavLink", props: ["to"] },
            { name: "NextLink", props: ["to", "href"] },
          ],
          { includeFromSettings: true },
        ],
        "react/jsx-no-target-blank": [
          "error",
          {
            allowReferrer: false,
            enforceDynamicLinks: "always",
            warnOnSpreadAttributes: false,
            links: true,
            forms: false,
          },
        ],
        "react/jsx-no-undef": "error",
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
        "react/jsx-pascal-case": [
          "error",
          {
            allowAllCaps: true,
            allowLeadingUnderscore: false,
            allowNamespace: true,
            ignore: [],
          },
        ],
        "react/jsx-props-no-spread-multi": "error",

        // --- React: Hooks ---
        "react/rules-of-hooks": "error",
        "react/exhaustive-deps": "warn",

        // --- JSX Accessibility ---
        "jsx-a11y/alt-text": [
          "error",
          {
            elements: ["img", "object", "area", 'input[type="image"]'],
            img: [],
            object: [],
            area: [],
            'input[type="image"]': [],
          },
        ],
        "jsx-a11y/anchor-has-content": "error",
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["to"],
            aspects: ["noHref", "invalidHref", "preferButton"],
          },
        ],
        "jsx-a11y/aria-activedescendant-has-tabindex": "error",
        "jsx-a11y/aria-props": "error",
        "jsx-a11y/aria-proptypes": "error",
        "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],
        "jsx-a11y/aria-unsupported-elements": "error",
        "jsx-a11y/autocomplete-valid": ["error", { inputComponents: ["Input"] }],
        "jsx-a11y/click-events-have-key-events": "error",
        "jsx-a11y/heading-has-content": ["error", { components: ["Typography", "Text"] }],
        "jsx-a11y/html-has-lang": "error",
        "jsx-a11y/iframe-has-title": "error",
        "jsx-a11y/img-redundant-alt": "error",
        "jsx-a11y/label-has-associated-control": [
          "error",
          {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: "both",
            depth: 25,
          },
        ],
        "jsx-a11y/lang": "error",
        "jsx-a11y/media-has-caption": ["error", { audio: [], video: [], track: [] }],
        "jsx-a11y/mouse-events-have-key-events": "error",
        "jsx-a11y/no-access-key": "error",
        "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
        "jsx-a11y/no-distracting-elements": ["error", { elements: ["marquee", "blink"] }],
        "jsx-a11y/no-noninteractive-tabindex": [
          "error",
          { tags: [], roles: ["tabpanel"], allowExpressionValues: true },
        ],
        "jsx-a11y/no-redundant-roles": "error",
        "jsx-a11y/no-static-element-interactions": [
          "error",
          {
            handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
          },
        ],
        "jsx-a11y/role-has-required-aria-props": "error",
        "jsx-a11y/role-supports-aria-props": "error",
        "jsx-a11y/scope": "error",
        "jsx-a11y/tabindex-no-positive": "error",
      },
      plugins: ["react", "jsx-a11y"],
      env: {
        browser: true,
      },
    },
  ],
});
