// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/demo/react/react-blog/node_modules/vite/dist/node/index.js";
import react from "file:///D:/demo/react/react-blog/node_modules/@vitejs/plugin-react/dist/index.mjs";
import autoprefixer from "file:///D:/demo/react/react-blog/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssImport from "file:///D:/demo/react/react-blog/node_modules/postcss-import/index.js";
import tailwindcss from "file:///D:/demo/react/react-blog/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "D:\\demo\\react\\react-blog";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "component": path.resolve(__vite_injected_original_dirname, "src", "components")
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
        tailwindcss
      ]
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZW1vXFxcXHJlYWN0XFxcXHJlYWN0LWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlbW9cXFxccmVhY3RcXFxccmVhY3QtYmxvZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVtby9yZWFjdC9yZWFjdC1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgcG9zdGNzc0ltcG9ydCBmcm9tICdwb3N0Y3NzLWltcG9ydCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAnY29tcG9uZW50JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdjb21wb25lbnRzJyksXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBwb3N0Y3NzSW1wb3J0LFxuICAgICAgICBhdXRvcHJlZml4ZXIsXG4gICAgICAgIHRhaWx3aW5kY3NzLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxPQUFPLFVBQVU7QUFDblIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRWxCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8saUJBQWlCO0FBTnhCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNsQyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxPQUFPLFlBQVk7QUFBQSxJQUMxRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
