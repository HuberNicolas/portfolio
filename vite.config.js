import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If deploying to https://<user>.github.io/portfolio/ set base to '/portfolio/'.
// For a custom domain (nicolas-huber.dev) keep it as '/'.
export default defineConfig({
  base: process.env.DEPLOY_BASE || '/',
  plugins: [vue()],
})
