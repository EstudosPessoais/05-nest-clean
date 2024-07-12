import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.spec.ts'],
    exclude: ['./data', './dist', './node_modules'],
    globals: true,
    root: './',
    coverage: {
      exclude: ['data', 'dist', 'node_modules'],
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
})
