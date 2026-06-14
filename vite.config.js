import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Naye version ke liye zaroori

export default defineConfig({
  plugins: [react(), tailwindcss()],
});