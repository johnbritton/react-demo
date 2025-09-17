import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '.'
        }
      ]
    })],
  build: {
    lib: {
      entry: 'src/nhsnlink-config.tsx',
      name: 'NHSNLinkConfig',
      fileName: 'nhsnlink-config'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  define: {
    'process.env': {} // Prevents process errors in browser
  }
})
