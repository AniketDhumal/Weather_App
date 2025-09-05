import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,   // default, you can change if needed
    open: true    // auto-opens browser on `npm run dev`
  }
})
