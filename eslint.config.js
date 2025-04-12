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
      // ➤ 你的自訂規則
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-var": "error",

      // ➤ Prettier 整合：讓 Prettier 發現格式錯誤時 ESLint 會報錯
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      // ➤ 關掉與 Prettier 衝突的 ESLint 規則（由 eslint-config-prettier 處理）
      ...prettier.rules,
    },
  },
];
