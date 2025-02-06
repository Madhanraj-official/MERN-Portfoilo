import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["51ec-2401-4900-605d-6392-ecb6-1e4a-c4f8-b600.ngrok-free.app"], // add my address
    host: true, // Allows access from any network
    strictPort: false // (Optional) Allows port fallback
  },
  plugins: [react()],
})
