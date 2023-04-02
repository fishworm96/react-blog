import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  return {
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
    server: {
      host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: 5173,
      open: false,
      cors: true,
      // https: false,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [react()],
  }
})
