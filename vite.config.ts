import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The dev-server host allowlist is supplied per process from the environment so
// that no VM-specific hostname is written into tracked files.
const allowedHosts = (process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((h) => h.trim())
  .filter(Boolean)

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT ?? 3000),
    strictPort: false,
    ...(allowedHosts.length > 0 ? { allowedHosts } : {}),
  },
})
