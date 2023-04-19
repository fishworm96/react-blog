import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
// import { terser } from 'rollup-plugin-terser'

import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  return {
    base: '/blog',
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
          target: 'http://localhost:8080',
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      dts(),
      importToCDN({
        modules: [
          {
            name: 'react',
            var: 'React',
            path: 'https://unpkg.com/react@18/umd/react.production.min.js',
          },
          {
            name: 'react-dom',
            var: 'ReactDOM',
            path: 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
          },
          {
            name: 'axios',
            var: 'axios',
            path: 'https://unpkg.com/axios/dist/axios.min.js',
          },
          {
            name: 'dayjs',
            var: 'dayjs',
            path: 'https://cdn.staticfile.org/dayjs/1.11.7/dayjs.min.js',
          },
          {
            name: 'antd',
            var: 'antd',
            path: 'https://cdn.bootcdn.net/ajax/libs/antd/5.3.1/antd.min.js',
            css: 'https://cdn.bootcdn.net/ajax/libs/antd/5.3.1/reset.min.css',
          },
        ],
      }),
    ],
    build: {
      outDir: 'dist',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        plugins: [
          // terser()
        ],
        output: {
          chunkFileNames: 'assets/js[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})