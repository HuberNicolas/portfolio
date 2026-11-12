import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { existsSync } from 'node:fs'
import { meta } from './src/data/content.js'

// The hero only shows "Download CV" for languages whose PDF is in public/cv/.
// Restart the dev server after adding a PDF.
const cvAvailable = Object.fromEntries(
  Object.entries(meta.cv).map(([lang, path]) => [lang, existsSync(`public${path}`)]),
)

// If deploying to https://<user>.github.io/portfolio/ set base to '/portfolio/'.
// For a custom domain (nicolas-huber.dev) keep it as '/'.
export default defineConfig({
  base: process.env.DEPLOY_BASE || '/',
  plugins: [vue()],
  define: {
    __CV_AVAILABLE__: JSON.stringify(cvAvailable),
  },
})
