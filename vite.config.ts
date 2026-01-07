import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],

  // مهم جداً حتى يعمل الموقع على GitHub Pages تحت المسار الفرعي
  base: '/hamido-game-studio/',

  // نجعل مخرجات البناء في مجلد docs حتى تستخدمه GitHub Pages مباشرة
  build: {
    outDir: 'docs',
  },
});
