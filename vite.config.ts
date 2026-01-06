import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hamido-game-studio/',
  plugins: [react()]
});
