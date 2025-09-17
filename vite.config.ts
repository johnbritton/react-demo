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
      entry: 'src/my-web-component.tsx',
      name: 'MyWebComponent',
      fileName: 'my-web-component'
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
