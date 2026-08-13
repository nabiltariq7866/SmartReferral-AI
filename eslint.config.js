import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores:['dist','playwright-report','test-results'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { files:['src/**/*.{ts,tsx}'],languageOptions:{ecmaVersion:2022,globals:globals.browser},plugins:{'react-hooks':reactHooks,'react-refresh':reactRefresh},rules:{...reactHooks.configs.recommended.rules,'react-hooks/preserve-manual-memoization':'off','react-hooks/static-components':'off','react-hooks/set-state-in-effect':'off','react-refresh/only-export-components':'off','@typescript-eslint/no-explicit-any':'off','@typescript-eslint/no-unused-vars':['error',{argsIgnorePattern:'^_'}]} },
  { files:['e2e/**/*.ts','playwright.config.ts','vite.config.ts'],languageOptions:{globals:globals.node} },
)
