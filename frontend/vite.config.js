import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CUSTOMIZE: Update proxy target if your Go API runs on a different port.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
