import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      "@store": path.resolve(__dirname, './src/app/store'),
      '@components': path.resolve(__dirname, './src/components'),
      "@services": path.resolve(__dirname, './src/app/services'),
      "@utils": path.resolve(__dirname, './src/app/utils'),
      '@features': path.resolve(__dirname, './src/app/features'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@layouts": path.resolve(__dirname, './src/app/layouts'),
    }
  }
})
