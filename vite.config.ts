import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dischargedost/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['3000-ib007s1if1nw3ur0fgi1z-f9aadb8f.sg2.manus.computer'],
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
});
