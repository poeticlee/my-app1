import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: 'localhost', // Ensures the server runs on localhost
    port: 5173, // Default Vite port
    proxy: {
      '/api': { // Update the base path for your backend API (e.g., '/api')
        target: 'https://jobbertrack.onrender.com', // Backend API base URL
        changeOrigin: true, // Ensures proper Origin header
        secure: true, // Use true if the target server has a valid SSL certificate
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' from the forwarded request
      },
    },
  },
});
