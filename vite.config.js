import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'username' with your GitHub username, and 'cst-drc-web' with your repo name
export default defineConfig({
  plugins: [react()],
  base: './', 
})
