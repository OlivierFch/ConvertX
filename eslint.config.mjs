import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/node_modules/**", "dist/**", "build/**", "coverage/**"] },
  {
    rules: {
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "padded-blocks": ["error", "never"],
      "padding-line-between-statements": [
        "error",
        // une ligne vide après les déclarations de variables
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        // mais pas entre déclarations consécutives
        { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
        // une ligne vide avant return
        { blankLine: "always", prev: "*", next: "return" }
      ],
      "indent": ["error", 2, { "SwitchCase": 1 }]
    }
  },
  // TS rules (without type-checking to stay with minimal config)
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
  },

  // JS rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    extends: [js.configs.recommended],
  }
);