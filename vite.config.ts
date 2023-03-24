import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src', 'components'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
        tailwindcss,
      ],
    },
  },
  plugins: [react()],
})
