// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: '/dp-akademie/',   // نفس اسم الموقع على Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
