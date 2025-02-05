import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["59dc-2401-4900-605d-625d-5602-17f1-c86f-f281.ngrok-free.app"], // add my address
    host: true, // Allows access from any network
    strictPort: false // (Optional) Allows port fallback
  },
  plugins: [react()],
})
