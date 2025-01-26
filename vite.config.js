import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_PIXEL_ID': JSON.stringify(
      process.env.NEXT_PUBLIC_PIXEL_ID
    ),
  },
});
