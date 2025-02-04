import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows access from any network
    strictPort: false // (Optional) Allows port fallback
  },
  plugins: [react()],
})
