import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/resto/', // Change this to match your GitHub repo name
  build: {
    outDir: 'dist', // Ensure the output folder is correct
  },
});
