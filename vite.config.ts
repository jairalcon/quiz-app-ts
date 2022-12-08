import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/quiz-app-ts/', // This is the base url of static web page
  plugins: [react()]
})
