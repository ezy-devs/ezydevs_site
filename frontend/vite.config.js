import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // THIS IS THE CRITICAL LINE
  // It tells Vite to prefix all asset paths with /static/react/
  base: '/static/react/', 
  build: {
    outDir: '../static/react',
    emptyOutDir: true,
  }
})