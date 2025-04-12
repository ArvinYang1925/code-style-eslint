const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      // ✅ 基本風格規則
      semi: ["error", "always"], // 行尾分號
      quotes: ["error", "double"], // 使用雙引號
      "no-var": "error", // 禁止 var

      // ✅ Prettier 結合
      "prettier/prettier": "error",

      // ✅ 函式風格限制
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionExpression",
          message: "請使用函式宣告式或箭頭函式，避免使用一般函式表達式 😎",
        },
      ],
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      // ✅ 關掉與 Prettier 衝突的規則
      ...prettier.rules,
    },
  },
];
