import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Prettier compatibility
      "prettier/prettier": "off",

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // React specific rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // General code quality
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",

      // Import rules - simplified to avoid conflicts
      "import/order": "off",

      // Tailwind CSS class ordering
      "tailwindcss/classnames-order": "off", // We use prettier-plugin-tailwindcss instead
    },
  },
];

export default eslintConfig;
