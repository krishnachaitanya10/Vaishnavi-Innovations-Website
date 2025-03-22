import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  root: '.',  // Ensures Vite runs from the project root
  server: {
    port: 5173
  }
});
