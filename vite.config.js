import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the app on all network interfaces
    port: 3000,       // You can choose any available port here
    allowedHosts: ['integral-solution-ass.onrender.com']
  }
})

