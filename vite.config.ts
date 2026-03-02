/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts'
import pkg from './package.json' with { type: 'json' };

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vue(),
      tailwindcss(),
      dts({ 
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
      insertTypesEntry: true,
      rollupTypes: false,
      exclude: ['**/*.stories.ts', '**/*.test.ts']
    })],

  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ui',
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies), 
        /^primevue\/.*/,
        /^@primevue\/.*/,
        /^@primeuix\/.*/,
        /^primeicons\/.*/,],
      output: {
        exports: 'named',
        globals: {
        vue: 'Vue',
        primevue: 'PrimeVue'}}
    }
  },

  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});