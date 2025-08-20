import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/ulmus-landing/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
