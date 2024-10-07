import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "warn", // Konsol uyarısı
      eqeqeq: "error", // Eşitlik kontrolü hatası
      "react/prop-types": "off", // PropTypes kullanımı zorunlu değil
      "react/react-in-jsx-scope": "off",
    },
  },
];
