import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5501,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY_TARGET || 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 5501,
    host: '0.0.0.0',
  },
  define: {
    __APP_CONFIG__: JSON.stringify({
      apiBaseUrl: process.env.VITE_API_URL || '/api',
    }),
  },
}))
